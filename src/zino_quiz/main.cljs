(ns zino-quiz.main
  (:require
   [reagent.dom :as rdom]
   [zino-quiz.quiz0 :as quiz0]))

(defn init []
  (rdom/render [quiz0/quiz-app]
    (js/document.getElementById "app")))