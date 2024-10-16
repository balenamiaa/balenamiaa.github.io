goog.provide('zino_quiz.quiz0');
zino_quiz.quiz0.set_cookie_BANG_ = (function zino_quiz$quiz0$set_cookie_BANG_(name,value,days){
var date_13082 = (new Date());
date_13082.setTime((date_13082.getTime() + ((((days * (24)) * (60)) * (60)) * (1000))));

var expires_13083 = ["expires=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(date_13082.toUTCString())].join('');
(document.cookie = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),";",expires_13083,";path=/"].join(''));

return value;
});
zino_quiz.quiz0.get_cookie = (function zino_quiz$quiz0$get_cookie(name){
var value = cljs.core.re_find(cljs.core.re_pattern(["(?:^|;\\s*)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"=([^;]*)"].join('')),document.cookie);
if(cljs.core.truth_(value)){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(decodeURIComponent(cljs.core.second(value)));
} else {
return null;
}
});
if((typeof zino_quiz !== 'undefined') && (typeof zino_quiz.quiz0 !== 'undefined') && (typeof zino_quiz.quiz0.state !== 'undefined')){
} else {
zino_quiz.quiz0.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"answers","answers",-2066449770),(function (){var or__5002__auto__ = zino_quiz.quiz0.get_cookie("quiz-answers");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"show-explanations","show-explanations",-1388923599),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"markers","markers",-246919693),(function (){var or__5002__auto__ = zino_quiz.quiz0.get_cookie("quiz-markers");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),new cljs.core.Keyword(null,"current-question","current-question",-749753188),(0)], null));
}
cljs.core.add_watch(zino_quiz.quiz0.state,new cljs.core.Keyword(null,"cookie-saver","cookie-saver",-600597203),(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(new_state))){
zino_quiz.quiz0.set_cookie_BANG_("quiz-answers",new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(new_state),(30));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(new_state))){
return zino_quiz.quiz0.set_cookie_BANG_("quiz-markers",new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(new_state),(30));
} else {
return null;
}
}));
zino_quiz.quiz0.option_component = (function zino_quiz$quiz0$option_component(question_index,option_key,option_text,correct_answer){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zino_quiz.quiz0.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770),question_index], null)));
var correct_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option_key,correct_answer);
var answered_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zino_quiz.quiz0.state)),question_index);
var show_explanation_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zino_quiz.quiz0.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-explanations","show-explanations",-1388923599),question_index,option_key], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option","div.option",-1520829790),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((selected_QMARK_)?"selected":null),((((answered_QMARK_) && (((selected_QMARK_) && (correct_QMARK_)))))?"correct":null),((((answered_QMARK_) && (((selected_QMARK_) && ((!(correct_QMARK_)))))))?"incorrect":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zino_quiz.quiz0.state,cljs.core.update,new cljs.core.Keyword(null,"answers","answers",-2066449770),(function (answers){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,question_index),option_key)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(answers,question_index);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(answers,question_index,option_key);
}
}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option-content","div.option-content",-1478181363),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.option-text","div.option-text",1552107291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option-key","span.option-key",-1010563023),cljs.core.str.cljs$core$IFn$_invoke$arity$1(option_key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),option_text], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.explanation-toggle","button.explanation-toggle",351425124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zino_quiz.quiz0.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-explanations","show-explanations",-1388923599),question_index,option_key], null),cljs.core.not);
})], null),(cljs.core.truth_(show_explanation_QMARK_)?"\u2212":"+")], null)], null),(cljs.core.truth_(show_explanation_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.explanation","div.explanation",-687697216),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(zino_quiz.quiz0_data.quiz_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [question_index,new cljs.core.Keyword(null,"explanation","explanation",-1426612608),option_key], null))], null):null)], null);
});
zino_quiz.quiz0.question_component = (function zino_quiz$quiz0$question_component(index,question){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.question-container","div.question-container",-678898620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["question-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.question-header","div.question-header",-2084189999),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.question-text","h3.question-text",-481973586),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((index + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.marker-toggle","button.marker-toggle",-1987627905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zino_quiz.quiz0.state,cljs.core.update,new cljs.core.Keyword(null,"markers","markers",-246919693),(function (markers){
if(cljs.core.truth_((markers.cljs$core$IFn$_invoke$arity$1 ? markers.cljs$core$IFn$_invoke$arity$1(index) : markers.call(null, index)))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(markers,index);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(markers,index);
}
}));
})], null),(cljs.core.truth_((function (){var fexpr__13051 = new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zino_quiz.quiz0.state));
return (fexpr__13051.cljs$core$IFn$_invoke$arity$1 ? fexpr__13051.cljs$core$IFn$_invoke$arity$1(index) : fexpr__13051.call(null, index));
})())?"\u2605":"\u2606")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.options","div.options",-1118306305),(function (){var iter__5480__auto__ = (function zino_quiz$quiz0$question_component_$_iter__13052(s__13053){
return (new cljs.core.LazySeq(null,(function (){
var s__13053__$1 = s__13053;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13053__$1);
if(temp__5804__auto__){
var s__13053__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13053__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13053__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13055 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13054 = (0);
while(true){
if((i__13054 < size__5479__auto__)){
var vec__13056 = cljs.core._nth(c__5478__auto__,i__13054);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(1),null);
cljs.core.chunk_append(b__13055,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zino_quiz.quiz0.option_component,index,k,v,new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(question)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__13084 = (i__13054 + (1));
i__13054 = G__13084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13055),zino_quiz$quiz0$question_component_$_iter__13052(cljs.core.chunk_rest(s__13053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13055),null);
}
} else {
var vec__13059 = cljs.core.first(s__13053__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13059,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [zino_quiz.quiz0.option_component,index,k,v,new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(question)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),zino_quiz$quiz0$question_component_$_iter__13052(cljs.core.rest(s__13053__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(question));
})()], null)], null);
});
zino_quiz.quiz0.score_component = (function zino_quiz$quiz0$score_component(){
var total_questions = cljs.core.count(zino_quiz.quiz0_data.quiz_data);
var answered_questions = cljs.core.count(new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zino_quiz.quiz0.state)));
var correct_answers = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13062){
var vec__13063 = p__13062;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(0),null);
var answer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13063,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(answer,new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(zino_quiz.quiz0_data.quiz_data,index)));
}),new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zino_quiz.quiz0.state))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.score-container","div.score-container",-1803013963),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Progress"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar","div.progress-bar",929518721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (answered_questions / total_questions))),"%"].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(correct_answers)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(answered_questions)," correct"," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_questions)," total questions)"].join('')], null)], null);
});
zino_quiz.quiz0.navigation_component = (function zino_quiz$quiz0$navigation_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.question-jump","input.question-jump",1092264736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.count(zino_quiz.quiz0_data.quiz_data),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Go to question number...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13066_SHARP_){
var q = parseInt(p1__13066_SHARP_.target.value);
if((((q >= (1))) && ((q <= cljs.core.count(zino_quiz.quiz0_data.quiz_data))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zino_quiz.quiz0.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-question","current-question",-749753188),(q - (1)));

return document.getElementById(["question-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((q - (1)))].join('')).scrollIntoView(({"behavior": "smooth"}));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.marker-jump","select.marker-jump",309990254),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13067_SHARP_){
var index = parseInt(p1__13067_SHARP_.target.value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zino_quiz.quiz0.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-question","current-question",-749753188),index);

return document.getElementById(["question-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')).scrollIntoView(({"behavior": "smooth"}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Jump to marker"], null),(function (){var iter__5480__auto__ = (function zino_quiz$quiz0$navigation_component_$_iter__13068(s__13069){
return (new cljs.core.LazySeq(null,(function (){
var s__13069__$1 = s__13069;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13069__$1);
if(temp__5804__auto__){
var s__13069__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13069__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13069__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13071 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13070 = (0);
while(true){
if((i__13070 < size__5479__auto__)){
var marker = cljs.core._nth(c__5478__auto__,i__13070);
cljs.core.chunk_append(b__13071,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),marker], null),["Question ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((marker + (1)))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),marker], null)));

var G__13085 = (i__13070 + (1));
i__13070 = G__13085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13071),zino_quiz$quiz0$navigation_component_$_iter__13068(cljs.core.chunk_rest(s__13069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13071),null);
}
} else {
var marker = cljs.core.first(s__13069__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),marker], null),["Question ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((marker + (1)))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),marker], null)),zino_quiz$quiz0$navigation_component_$_iter__13068(cljs.core.rest(s__13069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zino_quiz.quiz0.state))));
})()], null)], null);
});
zino_quiz.quiz0.quiz_app = (function zino_quiz$quiz0$quiz_app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.quiz-app","div.quiz-app",-234157425),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zino_quiz.quiz0.score_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zino_quiz.quiz0.navigation_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.questions-list","div.questions-list",-2000244785),(function (){var iter__5480__auto__ = (function zino_quiz$quiz0$quiz_app_$_iter__13072(s__13073){
return (new cljs.core.LazySeq(null,(function (){
var s__13073__$1 = s__13073;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13073__$1);
if(temp__5804__auto__){
var s__13073__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13073__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13073__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13075 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13074 = (0);
while(true){
if((i__13074 < size__5479__auto__)){
var vec__13076 = cljs.core._nth(c__5478__auto__,i__13074);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13076,(0),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13076,(1),null);
cljs.core.chunk_append(b__13075,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zino_quiz.quiz0.question_component,index,question], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)));

var G__13086 = (i__13074 + (1));
i__13074 = G__13086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13075),zino_quiz$quiz0$quiz_app_$_iter__13072(cljs.core.chunk_rest(s__13073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13075),null);
}
} else {
var vec__13079 = cljs.core.first(s__13073__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13079,(0),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13079,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zino_quiz.quiz0.question_component,index,question], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)),zino_quiz$quiz0$quiz_app_$_iter__13072(cljs.core.rest(s__13073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,zino_quiz.quiz0_data.quiz_data));
})()], null)], null);
});
goog.exportSymbol('zino_quiz.quiz0.quiz_app', zino_quiz.quiz0.quiz_app);

//# sourceMappingURL=zino_quiz.quiz0.js.map
