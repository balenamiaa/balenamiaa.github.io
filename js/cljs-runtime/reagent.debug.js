goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__15753__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15755__i = 0, G__15755__a = new Array(arguments.length -  0);
while (G__15755__i < G__15755__a.length) {G__15755__a[G__15755__i] = arguments[G__15755__i + 0]; ++G__15755__i;}
  args = new cljs.core.IndexedSeq(G__15755__a,0,null);
} 
return G__15753__delegate.call(this,args);};
G__15753.cljs$lang$maxFixedArity = 0;
G__15753.cljs$lang$applyTo = (function (arglist__15756){
var args = cljs.core.seq(arglist__15756);
return G__15753__delegate(args);
});
G__15753.cljs$core$IFn$_invoke$arity$variadic = G__15753__delegate;
return G__15753;
})()
);

(o.error = (function() { 
var G__15757__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15758__i = 0, G__15758__a = new Array(arguments.length -  0);
while (G__15758__i < G__15758__a.length) {G__15758__a[G__15758__i] = arguments[G__15758__i + 0]; ++G__15758__i;}
  args = new cljs.core.IndexedSeq(G__15758__a,0,null);
} 
return G__15757__delegate.call(this,args);};
G__15757.cljs$lang$maxFixedArity = 0;
G__15757.cljs$lang$applyTo = (function (arglist__15759){
var args = cljs.core.seq(arglist__15759);
return G__15757__delegate(args);
});
G__15757.cljs$core$IFn$_invoke$arity$variadic = G__15757__delegate;
return G__15757;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
