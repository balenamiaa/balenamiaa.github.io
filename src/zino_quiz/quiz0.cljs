(ns zino-quiz.quiz0
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [zino-quiz.quiz0-data :refer [quiz-data]]
            [goog.string :as gstring]
            [goog.string.format]
            [clojure.edn :as edn]))

(defn set-cookie! [name value days]
  (let [date (js/Date.)]
    (.setTime date (+ (.getTime date) (* days 24 60 60 1000)))
    (let [expires (str "expires=" (.toUTCString date))]
      (set! (.-cookie js/document) (str name "=" value ";" expires ";path=/"))))
  value)

(defn get-cookie [name]
  (let [value (re-find (re-pattern (str "(?:^|;\\s*)" name "=([^;]*)")) (.-cookie js/document))]
    (if value (edn/read-string (js/decodeURIComponent (second value))) nil)))

(defonce state (r/atom {:answers (or (get-cookie "quiz-answers") {})
                        :show-explanations {}
                        :markers (or (get-cookie "quiz-markers") #{})
                        :current-question 0}))

(add-watch state :cookie-saver
           (fn [_ _ old-state new-state]
             (when (not= (:answers old-state) (:answers new-state))
               (set-cookie! "quiz-answers" (:answers new-state) 30))
             (when (not= (:markers old-state) (:markers new-state))
               (set-cookie! "quiz-markers" (:markers new-state) 30))))

(defn option-component [question-index option-key option-text correct-answer]
  (let [selected? (= option-key (get-in @state [:answers question-index]))
        correct? (= option-key correct-answer)
        answered? (contains? (:answers @state) question-index)
        show-explanation? (get-in @state [:show-explanations question-index option-key])]
    [:div.option
     {:class [(when selected? "selected")
              (when (and answered? selected? correct?) "correct")
              (when (and answered? selected? (not correct?)) "incorrect")]
      :on-click #(swap! state update :answers
                        (fn [answers]
                          (if (= (get answers question-index) option-key)
                            (dissoc answers question-index)
                            (assoc answers question-index option-key))))}
     [:div.option-content
      [:div.option-text
       [:span.option-key (str option-key)]
       [:span option-text]]
      [:button.explanation-toggle
       {:on-click (fn [e]
                    (.stopPropagation e)
                    (swap! state update-in [:show-explanations question-index option-key] not))}
       (if show-explanation? "−" "+")]]
     (when show-explanation?
       [:div.explanation
        (get-in quiz-data [question-index :explanation option-key])])]))

(defn question-component [index question]
  [:div.question-container
   {:id (str "question-" index)}
   [:div.question-header
    [:h3.question-text (str (inc index) ". " (:question question))]
    [:button.marker-toggle
     {:on-click #(swap! state update :markers (fn [markers]
                                                (if (markers index)
                                                  (disj markers index)
                                                  (conj markers index))))}
     (if ((:markers @state) index) "★" "☆")]]
   [:div.options
    (for [[k v] (:options question)]
      ^{:key k} [option-component index k v (:answer question)])]])

(defn score-component []
  (let [total-questions (count quiz-data)
        answered-questions (count (:answers @state))
        correct-answers (count (filter (fn [[index answer]]
                                         (= answer (:answer (nth quiz-data index))))
                                       (:answers @state)))]
    [:div.score-container
     [:h2 "Progress"]
     [:div.progress-bar
      [:div.progress {:style {:width (str (* 100 (/ answered-questions total-questions)) "%")}}]]
     [:p (str correct-answers " / " answered-questions " correct" " (" total-questions " total questions)")]]))

(defn navigation-component []
  [:div.navigation
   [:input.question-jump
    {:type "number"
     :min 1
     :max (count quiz-data)
     :placeholder "Go to question number..."
     :on-change #(let [q (js/parseInt (.. % -target -value))]
                   (when (and (>= q 1) (<= q (count quiz-data)))
                     (swap! state assoc :current-question (dec q))
                     (.scrollIntoView (.getElementById js/document (str "question-" (dec q))) #js {:behavior "smooth"})))}]
   [:select.marker-jump
    {:on-change #(let [index (js/parseInt (.. % -target -value))]
                   (swap! state assoc :current-question index)
                   (.scrollIntoView (.getElementById js/document (str "question-" index)) #js {:behavior "smooth"}))}
    [:option {:value ""} "Jump to marker"]
    (for [marker (sort (:markers @state))]
      ^{:key marker} [:option {:value marker} (str "Question " (inc marker))])]])

(defn ^:export quiz-app []
  [:div.quiz-app
   [score-component]
   [navigation-component]
   [:div.questions-list
    (for [[index question] (map-indexed vector quiz-data)]
      ^{:key index} [question-component index question])]])