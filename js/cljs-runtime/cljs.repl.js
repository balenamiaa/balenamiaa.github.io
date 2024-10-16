goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18233){
var map__18234 = p__18233;
var map__18234__$1 = cljs.core.__destructure_map(map__18234);
var m = map__18234__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18234__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18234__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18238_18604 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18239_18605 = null;
var count__18240_18606 = (0);
var i__18241_18607 = (0);
while(true){
if((i__18241_18607 < count__18240_18606)){
var f_18609 = chunk__18239_18605.cljs$core$IIndexed$_nth$arity$2(null, i__18241_18607);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18609], 0));


var G__18610 = seq__18238_18604;
var G__18611 = chunk__18239_18605;
var G__18612 = count__18240_18606;
var G__18613 = (i__18241_18607 + (1));
seq__18238_18604 = G__18610;
chunk__18239_18605 = G__18611;
count__18240_18606 = G__18612;
i__18241_18607 = G__18613;
continue;
} else {
var temp__5804__auto___18614 = cljs.core.seq(seq__18238_18604);
if(temp__5804__auto___18614){
var seq__18238_18615__$1 = temp__5804__auto___18614;
if(cljs.core.chunked_seq_QMARK_(seq__18238_18615__$1)){
var c__5525__auto___18616 = cljs.core.chunk_first(seq__18238_18615__$1);
var G__18617 = cljs.core.chunk_rest(seq__18238_18615__$1);
var G__18618 = c__5525__auto___18616;
var G__18619 = cljs.core.count(c__5525__auto___18616);
var G__18620 = (0);
seq__18238_18604 = G__18617;
chunk__18239_18605 = G__18618;
count__18240_18606 = G__18619;
i__18241_18607 = G__18620;
continue;
} else {
var f_18622 = cljs.core.first(seq__18238_18615__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18622], 0));


var G__18623 = cljs.core.next(seq__18238_18615__$1);
var G__18624 = null;
var G__18625 = (0);
var G__18626 = (0);
seq__18238_18604 = G__18623;
chunk__18239_18605 = G__18624;
count__18240_18606 = G__18625;
i__18241_18607 = G__18626;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18627 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18627], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18627)))?cljs.core.second(arglists_18627):arglists_18627)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18249_18630 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18250_18631 = null;
var count__18251_18632 = (0);
var i__18252_18633 = (0);
while(true){
if((i__18252_18633 < count__18251_18632)){
var vec__18265_18634 = chunk__18250_18631.cljs$core$IIndexed$_nth$arity$2(null, i__18252_18633);
var name_18635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18265_18634,(0),null);
var map__18268_18636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18265_18634,(1),null);
var map__18268_18637__$1 = cljs.core.__destructure_map(map__18268_18636);
var doc_18638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268_18637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268_18637__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18635], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18639], 0));

if(cljs.core.truth_(doc_18638)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18638], 0));
} else {
}


var G__18641 = seq__18249_18630;
var G__18642 = chunk__18250_18631;
var G__18643 = count__18251_18632;
var G__18644 = (i__18252_18633 + (1));
seq__18249_18630 = G__18641;
chunk__18250_18631 = G__18642;
count__18251_18632 = G__18643;
i__18252_18633 = G__18644;
continue;
} else {
var temp__5804__auto___18645 = cljs.core.seq(seq__18249_18630);
if(temp__5804__auto___18645){
var seq__18249_18647__$1 = temp__5804__auto___18645;
if(cljs.core.chunked_seq_QMARK_(seq__18249_18647__$1)){
var c__5525__auto___18649 = cljs.core.chunk_first(seq__18249_18647__$1);
var G__18650 = cljs.core.chunk_rest(seq__18249_18647__$1);
var G__18651 = c__5525__auto___18649;
var G__18652 = cljs.core.count(c__5525__auto___18649);
var G__18653 = (0);
seq__18249_18630 = G__18650;
chunk__18250_18631 = G__18651;
count__18251_18632 = G__18652;
i__18252_18633 = G__18653;
continue;
} else {
var vec__18272_18657 = cljs.core.first(seq__18249_18647__$1);
var name_18658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272_18657,(0),null);
var map__18275_18659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18272_18657,(1),null);
var map__18275_18660__$1 = cljs.core.__destructure_map(map__18275_18659);
var doc_18661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18275_18660__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18275_18660__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18658], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18662], 0));

if(cljs.core.truth_(doc_18661)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18661], 0));
} else {
}


var G__18664 = cljs.core.next(seq__18249_18647__$1);
var G__18665 = null;
var G__18666 = (0);
var G__18667 = (0);
seq__18249_18630 = G__18664;
chunk__18250_18631 = G__18665;
count__18251_18632 = G__18666;
i__18252_18633 = G__18667;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18278 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18279 = null;
var count__18280 = (0);
var i__18281 = (0);
while(true){
if((i__18281 < count__18280)){
var role = chunk__18279.cljs$core$IIndexed$_nth$arity$2(null, i__18281);
var temp__5804__auto___18668__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18668__$1)){
var spec_18669 = temp__5804__auto___18668__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18669)], 0));
} else {
}


var G__18670 = seq__18278;
var G__18671 = chunk__18279;
var G__18672 = count__18280;
var G__18673 = (i__18281 + (1));
seq__18278 = G__18670;
chunk__18279 = G__18671;
count__18280 = G__18672;
i__18281 = G__18673;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18278);
if(temp__5804__auto____$1){
var seq__18278__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18278__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18278__$1);
var G__18674 = cljs.core.chunk_rest(seq__18278__$1);
var G__18675 = c__5525__auto__;
var G__18676 = cljs.core.count(c__5525__auto__);
var G__18677 = (0);
seq__18278 = G__18674;
chunk__18279 = G__18675;
count__18280 = G__18676;
i__18281 = G__18677;
continue;
} else {
var role = cljs.core.first(seq__18278__$1);
var temp__5804__auto___18678__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18678__$2)){
var spec_18679 = temp__5804__auto___18678__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18679)], 0));
} else {
}


var G__18680 = cljs.core.next(seq__18278__$1);
var G__18681 = null;
var G__18682 = (0);
var G__18683 = (0);
seq__18278 = G__18680;
chunk__18279 = G__18681;
count__18280 = G__18682;
i__18281 = G__18683;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18337 = datafied_throwable;
var map__18337__$1 = cljs.core.__destructure_map(map__18337);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18337__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18337__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18337__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18339 = cljs.core.last(via);
var map__18339__$1 = cljs.core.__destructure_map(map__18339);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18339__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18340 = data;
var map__18340__$1 = cljs.core.__destructure_map(map__18340);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18340__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18340__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18340__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18342 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18342__$1 = cljs.core.__destructure_map(map__18342);
var top_data = map__18342__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18342__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18375 = phase;
var G__18375__$1 = (((G__18375 instanceof cljs.core.Keyword))?G__18375.fqn:null);
switch (G__18375__$1) {
case "read-source":
var map__18402 = data;
var map__18402__$1 = cljs.core.__destructure_map(map__18402);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18415 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18415__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18415,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18415);
var G__18415__$2 = (cljs.core.truth_((function (){var fexpr__18425 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18425.cljs$core$IFn$_invoke$arity$1 ? fexpr__18425.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18425.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18415__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18415__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18415__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18415__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18435 = top_data;
var G__18435__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18435,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18435);
var G__18435__$2 = (cljs.core.truth_((function (){var fexpr__18451 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18451.cljs$core$IFn$_invoke$arity$1 ? fexpr__18451.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18451.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18435__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18435__$1);
var G__18435__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18435__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18435__$2);
var G__18435__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18435__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18435__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18435__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18435__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18477 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(3),null);
var G__18481 = top_data;
var G__18481__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18481,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18481);
var G__18481__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18481__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18481__$1);
var G__18481__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18481__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18481__$2);
var G__18481__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18481__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18481__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18481__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18481__$4;
}

break;
case "execution":
var vec__18488 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18310_SHARP_){
var or__5002__auto__ = (p1__18310_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18493 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18493.cljs$core$IFn$_invoke$arity$1 ? fexpr__18493.cljs$core$IFn$_invoke$arity$1(p1__18310_SHARP_) : fexpr__18493.call(null, p1__18310_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18496 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18496__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18496);
var G__18496__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18496__$1);
var G__18496__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18496__$2);
var G__18496__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18496__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18496__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18496__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18375__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18513){
var map__18514 = p__18513;
var map__18514__$1 = cljs.core.__destructure_map(map__18514);
var triage_data = map__18514__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18514__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18532 = phase;
var G__18532__$1 = (((G__18532 instanceof cljs.core.Keyword))?G__18532.fqn:null);
switch (G__18532__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18539 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18541 = loc;
var G__18542 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18546_18756 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18547_18757 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18548_18758 = true;
var _STAR_print_fn_STAR__temp_val__18549_18759 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18548_18758);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18549_18759);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18509_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18509_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18547_18757);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18546_18756);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18539,G__18540,G__18541,G__18542) : format.call(null, G__18539,G__18540,G__18541,G__18542));

break;
case "macroexpansion":
var G__18554 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18555 = cause_type;
var G__18556 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18557 = loc;
var G__18558 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18554,G__18555,G__18556,G__18557,G__18558) : format.call(null, G__18554,G__18555,G__18556,G__18557,G__18558));

break;
case "compile-syntax-check":
var G__18561 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18562 = cause_type;
var G__18563 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18564 = loc;
var G__18565 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18561,G__18562,G__18563,G__18564,G__18565) : format.call(null, G__18561,G__18562,G__18563,G__18564,G__18565));

break;
case "compilation":
var G__18566 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18567 = cause_type;
var G__18568 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18569 = loc;
var G__18570 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18566,G__18567,G__18568,G__18569,G__18570) : format.call(null, G__18566,G__18567,G__18568,G__18569,G__18570));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18572 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18573 = symbol;
var G__18574 = loc;
var G__18575 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18578_18775 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18579_18776 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18580_18777 = true;
var _STAR_print_fn_STAR__temp_val__18581_18778 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18580_18777);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18581_18778);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18511_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18511_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18579_18776);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18578_18775);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18572,G__18573,G__18574,G__18575) : format.call(null, G__18572,G__18573,G__18574,G__18575));
} else {
var G__18588 = "Execution error%s at %s(%s).\n%s\n";
var G__18589 = cause_type;
var G__18590 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18591 = loc;
var G__18592 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18588,G__18589,G__18590,G__18591,G__18592) : format.call(null, G__18588,G__18589,G__18590,G__18591,G__18592));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18532__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
