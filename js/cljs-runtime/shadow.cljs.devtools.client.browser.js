goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21856 = arguments.length;
var i__5727__auto___21857 = (0);
while(true){
if((i__5727__auto___21857 < len__5726__auto___21856)){
args__5732__auto__.push((arguments[i__5727__auto___21857]));

var G__21858 = (i__5727__auto___21857 + (1));
i__5727__auto___21857 = G__21858;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21571){
var G__21572 = cljs.core.first(seq21571);
var seq21571__$1 = cljs.core.next(seq21571);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21572,seq21571__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21577 = cljs.core.seq(sources);
var chunk__21578 = null;
var count__21579 = (0);
var i__21580 = (0);
while(true){
if((i__21580 < count__21579)){
var map__21586 = chunk__21578.cljs$core$IIndexed$_nth$arity$2(null, i__21580);
var map__21586__$1 = cljs.core.__destructure_map(map__21586);
var src = map__21586__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21586__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21586__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21586__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21586__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21587){var e_21859 = e21587;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21859);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21859.message)].join('')));
}

var G__21860 = seq__21577;
var G__21861 = chunk__21578;
var G__21862 = count__21579;
var G__21863 = (i__21580 + (1));
seq__21577 = G__21860;
chunk__21578 = G__21861;
count__21579 = G__21862;
i__21580 = G__21863;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21577);
if(temp__5804__auto__){
var seq__21577__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21577__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21577__$1);
var G__21864 = cljs.core.chunk_rest(seq__21577__$1);
var G__21865 = c__5525__auto__;
var G__21866 = cljs.core.count(c__5525__auto__);
var G__21867 = (0);
seq__21577 = G__21864;
chunk__21578 = G__21865;
count__21579 = G__21866;
i__21580 = G__21867;
continue;
} else {
var map__21588 = cljs.core.first(seq__21577__$1);
var map__21588__$1 = cljs.core.__destructure_map(map__21588);
var src = map__21588__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21588__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21588__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21588__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21588__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21589){var e_21868 = e21589;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21868);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21868.message)].join('')));
}

var G__21869 = cljs.core.next(seq__21577__$1);
var G__21870 = null;
var G__21871 = (0);
var G__21872 = (0);
seq__21577 = G__21869;
chunk__21578 = G__21870;
count__21579 = G__21871;
i__21580 = G__21872;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21592 = cljs.core.seq(js_requires);
var chunk__21593 = null;
var count__21594 = (0);
var i__21595 = (0);
while(true){
if((i__21595 < count__21594)){
var js_ns = chunk__21593.cljs$core$IIndexed$_nth$arity$2(null, i__21595);
var require_str_21873 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21873);


var G__21874 = seq__21592;
var G__21875 = chunk__21593;
var G__21876 = count__21594;
var G__21877 = (i__21595 + (1));
seq__21592 = G__21874;
chunk__21593 = G__21875;
count__21594 = G__21876;
i__21595 = G__21877;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21592);
if(temp__5804__auto__){
var seq__21592__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21592__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21592__$1);
var G__21878 = cljs.core.chunk_rest(seq__21592__$1);
var G__21879 = c__5525__auto__;
var G__21880 = cljs.core.count(c__5525__auto__);
var G__21881 = (0);
seq__21592 = G__21878;
chunk__21593 = G__21879;
count__21594 = G__21880;
i__21595 = G__21881;
continue;
} else {
var js_ns = cljs.core.first(seq__21592__$1);
var require_str_21882 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21882);


var G__21883 = cljs.core.next(seq__21592__$1);
var G__21884 = null;
var G__21885 = (0);
var G__21886 = (0);
seq__21592 = G__21883;
chunk__21593 = G__21884;
count__21594 = G__21885;
i__21595 = G__21886;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21597){
var map__21598 = p__21597;
var map__21598__$1 = cljs.core.__destructure_map(map__21598);
var msg = map__21598__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21599(s__21600){
return (new cljs.core.LazySeq(null,(function (){
var s__21600__$1 = s__21600;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21600__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21605 = cljs.core.first(xs__6360__auto__);
var map__21605__$1 = cljs.core.__destructure_map(map__21605);
var src = map__21605__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21605__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21605__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21600__$1,map__21605,map__21605__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21598,map__21598__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21599_$_iter__21601(s__21602){
return (new cljs.core.LazySeq(null,((function (s__21600__$1,map__21605,map__21605__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21598,map__21598__$1,msg,info,reload_info){
return (function (){
var s__21602__$1 = s__21602;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21602__$1);
if(temp__5804__auto____$1){
var s__21602__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21602__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21602__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21604 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21603 = (0);
while(true){
if((i__21603 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21603);
cljs.core.chunk_append(b__21604,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21887 = (i__21603 + (1));
i__21603 = G__21887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21604),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21599_$_iter__21601(cljs.core.chunk_rest(s__21602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21604),null);
}
} else {
var warning = cljs.core.first(s__21602__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21599_$_iter__21601(cljs.core.rest(s__21602__$2)));
}
} else {
return null;
}
break;
}
});})(s__21600__$1,map__21605,map__21605__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21598,map__21598__$1,msg,info,reload_info))
,null,null));
});})(s__21600__$1,map__21605,map__21605__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21598,map__21598__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21599(cljs.core.rest(s__21600__$1)));
} else {
var G__21888 = cljs.core.rest(s__21600__$1);
s__21600__$1 = G__21888;
continue;
}
} else {
var G__21889 = cljs.core.rest(s__21600__$1);
s__21600__$1 = G__21889;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21606_21890 = cljs.core.seq(warnings);
var chunk__21607_21891 = null;
var count__21608_21892 = (0);
var i__21609_21893 = (0);
while(true){
if((i__21609_21893 < count__21608_21892)){
var map__21612_21894 = chunk__21607_21891.cljs$core$IIndexed$_nth$arity$2(null, i__21609_21893);
var map__21612_21895__$1 = cljs.core.__destructure_map(map__21612_21894);
var w_21896 = map__21612_21895__$1;
var msg_21897__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612_21895__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612_21895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612_21895__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612_21895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21900)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21898),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21899),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21897__$1)].join(''));


var G__21901 = seq__21606_21890;
var G__21902 = chunk__21607_21891;
var G__21903 = count__21608_21892;
var G__21904 = (i__21609_21893 + (1));
seq__21606_21890 = G__21901;
chunk__21607_21891 = G__21902;
count__21608_21892 = G__21903;
i__21609_21893 = G__21904;
continue;
} else {
var temp__5804__auto___21905 = cljs.core.seq(seq__21606_21890);
if(temp__5804__auto___21905){
var seq__21606_21906__$1 = temp__5804__auto___21905;
if(cljs.core.chunked_seq_QMARK_(seq__21606_21906__$1)){
var c__5525__auto___21907 = cljs.core.chunk_first(seq__21606_21906__$1);
var G__21908 = cljs.core.chunk_rest(seq__21606_21906__$1);
var G__21909 = c__5525__auto___21907;
var G__21910 = cljs.core.count(c__5525__auto___21907);
var G__21911 = (0);
seq__21606_21890 = G__21908;
chunk__21607_21891 = G__21909;
count__21608_21892 = G__21910;
i__21609_21893 = G__21911;
continue;
} else {
var map__21613_21912 = cljs.core.first(seq__21606_21906__$1);
var map__21613_21913__$1 = cljs.core.__destructure_map(map__21613_21912);
var w_21914 = map__21613_21913__$1;
var msg_21915__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613_21913__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613_21913__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613_21913__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21613_21913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21918)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21916),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21917),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21915__$1)].join(''));


var G__21919 = cljs.core.next(seq__21606_21906__$1);
var G__21920 = null;
var G__21921 = (0);
var G__21922 = (0);
seq__21606_21890 = G__21919;
chunk__21607_21891 = G__21920;
count__21608_21892 = G__21921;
i__21609_21893 = G__21922;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21596_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21596_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21614){
var map__21615 = p__21614;
var map__21615__$1 = cljs.core.__destructure_map(map__21615);
var msg = map__21615__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21616 = cljs.core.seq(updates);
var chunk__21618 = null;
var count__21619 = (0);
var i__21620 = (0);
while(true){
if((i__21620 < count__21619)){
var path = chunk__21618.cljs$core$IIndexed$_nth$arity$2(null, i__21620);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21730_21923 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21734_21924 = null;
var count__21735_21925 = (0);
var i__21736_21926 = (0);
while(true){
if((i__21736_21926 < count__21735_21925)){
var node_21927 = chunk__21734_21924.cljs$core$IIndexed$_nth$arity$2(null, i__21736_21926);
if(cljs.core.not(node_21927.shadow$old)){
var path_match_21928 = shadow.cljs.devtools.client.browser.match_paths(node_21927.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21928)){
var new_link_21929 = (function (){var G__21762 = node_21927.cloneNode(true);
G__21762.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21928),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21762;
})();
(node_21927.shadow$old = true);

(new_link_21929.onload = ((function (seq__21730_21923,chunk__21734_21924,count__21735_21925,i__21736_21926,seq__21616,chunk__21618,count__21619,i__21620,new_link_21929,path_match_21928,node_21927,path,map__21615,map__21615__$1,msg,updates,reload_info){
return (function (e){
var seq__21763_21930 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21765_21931 = null;
var count__21766_21932 = (0);
var i__21767_21933 = (0);
while(true){
if((i__21767_21933 < count__21766_21932)){
var map__21771_21934 = chunk__21765_21931.cljs$core$IIndexed$_nth$arity$2(null, i__21767_21933);
var map__21771_21935__$1 = cljs.core.__destructure_map(map__21771_21934);
var task_21936 = map__21771_21935__$1;
var fn_str_21937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771_21935__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771_21935__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21939 = goog.getObjectByName(fn_str_21937,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21938)].join(''));

(fn_obj_21939.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21939.cljs$core$IFn$_invoke$arity$2(path,new_link_21929) : fn_obj_21939.call(null, path,new_link_21929));


var G__21940 = seq__21763_21930;
var G__21941 = chunk__21765_21931;
var G__21942 = count__21766_21932;
var G__21943 = (i__21767_21933 + (1));
seq__21763_21930 = G__21940;
chunk__21765_21931 = G__21941;
count__21766_21932 = G__21942;
i__21767_21933 = G__21943;
continue;
} else {
var temp__5804__auto___21944 = cljs.core.seq(seq__21763_21930);
if(temp__5804__auto___21944){
var seq__21763_21945__$1 = temp__5804__auto___21944;
if(cljs.core.chunked_seq_QMARK_(seq__21763_21945__$1)){
var c__5525__auto___21946 = cljs.core.chunk_first(seq__21763_21945__$1);
var G__21947 = cljs.core.chunk_rest(seq__21763_21945__$1);
var G__21948 = c__5525__auto___21946;
var G__21949 = cljs.core.count(c__5525__auto___21946);
var G__21950 = (0);
seq__21763_21930 = G__21947;
chunk__21765_21931 = G__21948;
count__21766_21932 = G__21949;
i__21767_21933 = G__21950;
continue;
} else {
var map__21772_21951 = cljs.core.first(seq__21763_21945__$1);
var map__21772_21952__$1 = cljs.core.__destructure_map(map__21772_21951);
var task_21953 = map__21772_21952__$1;
var fn_str_21954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21772_21952__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21772_21952__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21956 = goog.getObjectByName(fn_str_21954,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21955)].join(''));

(fn_obj_21956.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21956.cljs$core$IFn$_invoke$arity$2(path,new_link_21929) : fn_obj_21956.call(null, path,new_link_21929));


var G__21957 = cljs.core.next(seq__21763_21945__$1);
var G__21958 = null;
var G__21959 = (0);
var G__21960 = (0);
seq__21763_21930 = G__21957;
chunk__21765_21931 = G__21958;
count__21766_21932 = G__21959;
i__21767_21933 = G__21960;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21927);
});})(seq__21730_21923,chunk__21734_21924,count__21735_21925,i__21736_21926,seq__21616,chunk__21618,count__21619,i__21620,new_link_21929,path_match_21928,node_21927,path,map__21615,map__21615__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21928], 0));

goog.dom.insertSiblingAfter(new_link_21929,node_21927);


var G__21961 = seq__21730_21923;
var G__21962 = chunk__21734_21924;
var G__21963 = count__21735_21925;
var G__21964 = (i__21736_21926 + (1));
seq__21730_21923 = G__21961;
chunk__21734_21924 = G__21962;
count__21735_21925 = G__21963;
i__21736_21926 = G__21964;
continue;
} else {
var G__21965 = seq__21730_21923;
var G__21966 = chunk__21734_21924;
var G__21967 = count__21735_21925;
var G__21968 = (i__21736_21926 + (1));
seq__21730_21923 = G__21965;
chunk__21734_21924 = G__21966;
count__21735_21925 = G__21967;
i__21736_21926 = G__21968;
continue;
}
} else {
var G__21969 = seq__21730_21923;
var G__21970 = chunk__21734_21924;
var G__21971 = count__21735_21925;
var G__21972 = (i__21736_21926 + (1));
seq__21730_21923 = G__21969;
chunk__21734_21924 = G__21970;
count__21735_21925 = G__21971;
i__21736_21926 = G__21972;
continue;
}
} else {
var temp__5804__auto___21973 = cljs.core.seq(seq__21730_21923);
if(temp__5804__auto___21973){
var seq__21730_21974__$1 = temp__5804__auto___21973;
if(cljs.core.chunked_seq_QMARK_(seq__21730_21974__$1)){
var c__5525__auto___21975 = cljs.core.chunk_first(seq__21730_21974__$1);
var G__21976 = cljs.core.chunk_rest(seq__21730_21974__$1);
var G__21977 = c__5525__auto___21975;
var G__21978 = cljs.core.count(c__5525__auto___21975);
var G__21979 = (0);
seq__21730_21923 = G__21976;
chunk__21734_21924 = G__21977;
count__21735_21925 = G__21978;
i__21736_21926 = G__21979;
continue;
} else {
var node_21980 = cljs.core.first(seq__21730_21974__$1);
if(cljs.core.not(node_21980.shadow$old)){
var path_match_21981 = shadow.cljs.devtools.client.browser.match_paths(node_21980.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21981)){
var new_link_21982 = (function (){var G__21773 = node_21980.cloneNode(true);
G__21773.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21981),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21773;
})();
(node_21980.shadow$old = true);

(new_link_21982.onload = ((function (seq__21730_21923,chunk__21734_21924,count__21735_21925,i__21736_21926,seq__21616,chunk__21618,count__21619,i__21620,new_link_21982,path_match_21981,node_21980,seq__21730_21974__$1,temp__5804__auto___21973,path,map__21615,map__21615__$1,msg,updates,reload_info){
return (function (e){
var seq__21774_21983 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21776_21984 = null;
var count__21777_21985 = (0);
var i__21778_21986 = (0);
while(true){
if((i__21778_21986 < count__21777_21985)){
var map__21782_21987 = chunk__21776_21984.cljs$core$IIndexed$_nth$arity$2(null, i__21778_21986);
var map__21782_21988__$1 = cljs.core.__destructure_map(map__21782_21987);
var task_21989 = map__21782_21988__$1;
var fn_str_21990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21782_21988__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21782_21988__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21992 = goog.getObjectByName(fn_str_21990,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21991)].join(''));

(fn_obj_21992.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21992.cljs$core$IFn$_invoke$arity$2(path,new_link_21982) : fn_obj_21992.call(null, path,new_link_21982));


var G__21993 = seq__21774_21983;
var G__21994 = chunk__21776_21984;
var G__21995 = count__21777_21985;
var G__21996 = (i__21778_21986 + (1));
seq__21774_21983 = G__21993;
chunk__21776_21984 = G__21994;
count__21777_21985 = G__21995;
i__21778_21986 = G__21996;
continue;
} else {
var temp__5804__auto___21997__$1 = cljs.core.seq(seq__21774_21983);
if(temp__5804__auto___21997__$1){
var seq__21774_21998__$1 = temp__5804__auto___21997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21774_21998__$1)){
var c__5525__auto___21999 = cljs.core.chunk_first(seq__21774_21998__$1);
var G__22000 = cljs.core.chunk_rest(seq__21774_21998__$1);
var G__22001 = c__5525__auto___21999;
var G__22002 = cljs.core.count(c__5525__auto___21999);
var G__22003 = (0);
seq__21774_21983 = G__22000;
chunk__21776_21984 = G__22001;
count__21777_21985 = G__22002;
i__21778_21986 = G__22003;
continue;
} else {
var map__21783_22004 = cljs.core.first(seq__21774_21998__$1);
var map__21783_22005__$1 = cljs.core.__destructure_map(map__21783_22004);
var task_22006 = map__21783_22005__$1;
var fn_str_22007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21783_22005__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21783_22005__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22009 = goog.getObjectByName(fn_str_22007,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22008)].join(''));

(fn_obj_22009.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22009.cljs$core$IFn$_invoke$arity$2(path,new_link_21982) : fn_obj_22009.call(null, path,new_link_21982));


var G__22010 = cljs.core.next(seq__21774_21998__$1);
var G__22011 = null;
var G__22012 = (0);
var G__22013 = (0);
seq__21774_21983 = G__22010;
chunk__21776_21984 = G__22011;
count__21777_21985 = G__22012;
i__21778_21986 = G__22013;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21980);
});})(seq__21730_21923,chunk__21734_21924,count__21735_21925,i__21736_21926,seq__21616,chunk__21618,count__21619,i__21620,new_link_21982,path_match_21981,node_21980,seq__21730_21974__$1,temp__5804__auto___21973,path,map__21615,map__21615__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21981], 0));

goog.dom.insertSiblingAfter(new_link_21982,node_21980);


var G__22014 = cljs.core.next(seq__21730_21974__$1);
var G__22015 = null;
var G__22016 = (0);
var G__22017 = (0);
seq__21730_21923 = G__22014;
chunk__21734_21924 = G__22015;
count__21735_21925 = G__22016;
i__21736_21926 = G__22017;
continue;
} else {
var G__22018 = cljs.core.next(seq__21730_21974__$1);
var G__22019 = null;
var G__22020 = (0);
var G__22021 = (0);
seq__21730_21923 = G__22018;
chunk__21734_21924 = G__22019;
count__21735_21925 = G__22020;
i__21736_21926 = G__22021;
continue;
}
} else {
var G__22022 = cljs.core.next(seq__21730_21974__$1);
var G__22023 = null;
var G__22024 = (0);
var G__22025 = (0);
seq__21730_21923 = G__22022;
chunk__21734_21924 = G__22023;
count__21735_21925 = G__22024;
i__21736_21926 = G__22025;
continue;
}
}
} else {
}
}
break;
}


var G__22026 = seq__21616;
var G__22027 = chunk__21618;
var G__22028 = count__21619;
var G__22029 = (i__21620 + (1));
seq__21616 = G__22026;
chunk__21618 = G__22027;
count__21619 = G__22028;
i__21620 = G__22029;
continue;
} else {
var G__22030 = seq__21616;
var G__22031 = chunk__21618;
var G__22032 = count__21619;
var G__22033 = (i__21620 + (1));
seq__21616 = G__22030;
chunk__21618 = G__22031;
count__21619 = G__22032;
i__21620 = G__22033;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21616);
if(temp__5804__auto__){
var seq__21616__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21616__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21616__$1);
var G__22034 = cljs.core.chunk_rest(seq__21616__$1);
var G__22035 = c__5525__auto__;
var G__22036 = cljs.core.count(c__5525__auto__);
var G__22037 = (0);
seq__21616 = G__22034;
chunk__21618 = G__22035;
count__21619 = G__22036;
i__21620 = G__22037;
continue;
} else {
var path = cljs.core.first(seq__21616__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21784_22038 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21788_22039 = null;
var count__21789_22040 = (0);
var i__21790_22041 = (0);
while(true){
if((i__21790_22041 < count__21789_22040)){
var node_22042 = chunk__21788_22039.cljs$core$IIndexed$_nth$arity$2(null, i__21790_22041);
if(cljs.core.not(node_22042.shadow$old)){
var path_match_22043 = shadow.cljs.devtools.client.browser.match_paths(node_22042.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22043)){
var new_link_22044 = (function (){var G__21816 = node_22042.cloneNode(true);
G__21816.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22043),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21816;
})();
(node_22042.shadow$old = true);

(new_link_22044.onload = ((function (seq__21784_22038,chunk__21788_22039,count__21789_22040,i__21790_22041,seq__21616,chunk__21618,count__21619,i__21620,new_link_22044,path_match_22043,node_22042,path,seq__21616__$1,temp__5804__auto__,map__21615,map__21615__$1,msg,updates,reload_info){
return (function (e){
var seq__21817_22045 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21819_22046 = null;
var count__21820_22047 = (0);
var i__21821_22048 = (0);
while(true){
if((i__21821_22048 < count__21820_22047)){
var map__21825_22049 = chunk__21819_22046.cljs$core$IIndexed$_nth$arity$2(null, i__21821_22048);
var map__21825_22050__$1 = cljs.core.__destructure_map(map__21825_22049);
var task_22051 = map__21825_22050__$1;
var fn_str_22052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21825_22050__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21825_22050__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22054 = goog.getObjectByName(fn_str_22052,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22053)].join(''));

(fn_obj_22054.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22054.cljs$core$IFn$_invoke$arity$2(path,new_link_22044) : fn_obj_22054.call(null, path,new_link_22044));


var G__22055 = seq__21817_22045;
var G__22056 = chunk__21819_22046;
var G__22057 = count__21820_22047;
var G__22058 = (i__21821_22048 + (1));
seq__21817_22045 = G__22055;
chunk__21819_22046 = G__22056;
count__21820_22047 = G__22057;
i__21821_22048 = G__22058;
continue;
} else {
var temp__5804__auto___22059__$1 = cljs.core.seq(seq__21817_22045);
if(temp__5804__auto___22059__$1){
var seq__21817_22060__$1 = temp__5804__auto___22059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21817_22060__$1)){
var c__5525__auto___22061 = cljs.core.chunk_first(seq__21817_22060__$1);
var G__22062 = cljs.core.chunk_rest(seq__21817_22060__$1);
var G__22063 = c__5525__auto___22061;
var G__22064 = cljs.core.count(c__5525__auto___22061);
var G__22065 = (0);
seq__21817_22045 = G__22062;
chunk__21819_22046 = G__22063;
count__21820_22047 = G__22064;
i__21821_22048 = G__22065;
continue;
} else {
var map__21826_22066 = cljs.core.first(seq__21817_22060__$1);
var map__21826_22067__$1 = cljs.core.__destructure_map(map__21826_22066);
var task_22068 = map__21826_22067__$1;
var fn_str_22069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826_22067__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21826_22067__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22071 = goog.getObjectByName(fn_str_22069,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22070)].join(''));

(fn_obj_22071.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22071.cljs$core$IFn$_invoke$arity$2(path,new_link_22044) : fn_obj_22071.call(null, path,new_link_22044));


var G__22072 = cljs.core.next(seq__21817_22060__$1);
var G__22073 = null;
var G__22074 = (0);
var G__22075 = (0);
seq__21817_22045 = G__22072;
chunk__21819_22046 = G__22073;
count__21820_22047 = G__22074;
i__21821_22048 = G__22075;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22042);
});})(seq__21784_22038,chunk__21788_22039,count__21789_22040,i__21790_22041,seq__21616,chunk__21618,count__21619,i__21620,new_link_22044,path_match_22043,node_22042,path,seq__21616__$1,temp__5804__auto__,map__21615,map__21615__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22043], 0));

goog.dom.insertSiblingAfter(new_link_22044,node_22042);


var G__22076 = seq__21784_22038;
var G__22077 = chunk__21788_22039;
var G__22078 = count__21789_22040;
var G__22079 = (i__21790_22041 + (1));
seq__21784_22038 = G__22076;
chunk__21788_22039 = G__22077;
count__21789_22040 = G__22078;
i__21790_22041 = G__22079;
continue;
} else {
var G__22080 = seq__21784_22038;
var G__22081 = chunk__21788_22039;
var G__22082 = count__21789_22040;
var G__22083 = (i__21790_22041 + (1));
seq__21784_22038 = G__22080;
chunk__21788_22039 = G__22081;
count__21789_22040 = G__22082;
i__21790_22041 = G__22083;
continue;
}
} else {
var G__22084 = seq__21784_22038;
var G__22085 = chunk__21788_22039;
var G__22086 = count__21789_22040;
var G__22087 = (i__21790_22041 + (1));
seq__21784_22038 = G__22084;
chunk__21788_22039 = G__22085;
count__21789_22040 = G__22086;
i__21790_22041 = G__22087;
continue;
}
} else {
var temp__5804__auto___22088__$1 = cljs.core.seq(seq__21784_22038);
if(temp__5804__auto___22088__$1){
var seq__21784_22089__$1 = temp__5804__auto___22088__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21784_22089__$1)){
var c__5525__auto___22090 = cljs.core.chunk_first(seq__21784_22089__$1);
var G__22091 = cljs.core.chunk_rest(seq__21784_22089__$1);
var G__22092 = c__5525__auto___22090;
var G__22093 = cljs.core.count(c__5525__auto___22090);
var G__22094 = (0);
seq__21784_22038 = G__22091;
chunk__21788_22039 = G__22092;
count__21789_22040 = G__22093;
i__21790_22041 = G__22094;
continue;
} else {
var node_22095 = cljs.core.first(seq__21784_22089__$1);
if(cljs.core.not(node_22095.shadow$old)){
var path_match_22096 = shadow.cljs.devtools.client.browser.match_paths(node_22095.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22096)){
var new_link_22097 = (function (){var G__21827 = node_22095.cloneNode(true);
G__21827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21827;
})();
(node_22095.shadow$old = true);

(new_link_22097.onload = ((function (seq__21784_22038,chunk__21788_22039,count__21789_22040,i__21790_22041,seq__21616,chunk__21618,count__21619,i__21620,new_link_22097,path_match_22096,node_22095,seq__21784_22089__$1,temp__5804__auto___22088__$1,path,seq__21616__$1,temp__5804__auto__,map__21615,map__21615__$1,msg,updates,reload_info){
return (function (e){
var seq__21828_22098 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21830_22099 = null;
var count__21831_22100 = (0);
var i__21832_22101 = (0);
while(true){
if((i__21832_22101 < count__21831_22100)){
var map__21836_22102 = chunk__21830_22099.cljs$core$IIndexed$_nth$arity$2(null, i__21832_22101);
var map__21836_22103__$1 = cljs.core.__destructure_map(map__21836_22102);
var task_22104 = map__21836_22103__$1;
var fn_str_22105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21836_22103__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21836_22103__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22107 = goog.getObjectByName(fn_str_22105,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22106)].join(''));

(fn_obj_22107.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22107.cljs$core$IFn$_invoke$arity$2(path,new_link_22097) : fn_obj_22107.call(null, path,new_link_22097));


var G__22108 = seq__21828_22098;
var G__22109 = chunk__21830_22099;
var G__22110 = count__21831_22100;
var G__22111 = (i__21832_22101 + (1));
seq__21828_22098 = G__22108;
chunk__21830_22099 = G__22109;
count__21831_22100 = G__22110;
i__21832_22101 = G__22111;
continue;
} else {
var temp__5804__auto___22112__$2 = cljs.core.seq(seq__21828_22098);
if(temp__5804__auto___22112__$2){
var seq__21828_22113__$1 = temp__5804__auto___22112__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21828_22113__$1)){
var c__5525__auto___22114 = cljs.core.chunk_first(seq__21828_22113__$1);
var G__22115 = cljs.core.chunk_rest(seq__21828_22113__$1);
var G__22116 = c__5525__auto___22114;
var G__22117 = cljs.core.count(c__5525__auto___22114);
var G__22118 = (0);
seq__21828_22098 = G__22115;
chunk__21830_22099 = G__22116;
count__21831_22100 = G__22117;
i__21832_22101 = G__22118;
continue;
} else {
var map__21837_22119 = cljs.core.first(seq__21828_22113__$1);
var map__21837_22120__$1 = cljs.core.__destructure_map(map__21837_22119);
var task_22121 = map__21837_22120__$1;
var fn_str_22122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837_22120__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837_22120__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22124 = goog.getObjectByName(fn_str_22122,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22123)].join(''));

(fn_obj_22124.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22124.cljs$core$IFn$_invoke$arity$2(path,new_link_22097) : fn_obj_22124.call(null, path,new_link_22097));


var G__22125 = cljs.core.next(seq__21828_22113__$1);
var G__22126 = null;
var G__22127 = (0);
var G__22128 = (0);
seq__21828_22098 = G__22125;
chunk__21830_22099 = G__22126;
count__21831_22100 = G__22127;
i__21832_22101 = G__22128;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22095);
});})(seq__21784_22038,chunk__21788_22039,count__21789_22040,i__21790_22041,seq__21616,chunk__21618,count__21619,i__21620,new_link_22097,path_match_22096,node_22095,seq__21784_22089__$1,temp__5804__auto___22088__$1,path,seq__21616__$1,temp__5804__auto__,map__21615,map__21615__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22096], 0));

goog.dom.insertSiblingAfter(new_link_22097,node_22095);


var G__22129 = cljs.core.next(seq__21784_22089__$1);
var G__22130 = null;
var G__22131 = (0);
var G__22132 = (0);
seq__21784_22038 = G__22129;
chunk__21788_22039 = G__22130;
count__21789_22040 = G__22131;
i__21790_22041 = G__22132;
continue;
} else {
var G__22133 = cljs.core.next(seq__21784_22089__$1);
var G__22134 = null;
var G__22135 = (0);
var G__22136 = (0);
seq__21784_22038 = G__22133;
chunk__21788_22039 = G__22134;
count__21789_22040 = G__22135;
i__21790_22041 = G__22136;
continue;
}
} else {
var G__22137 = cljs.core.next(seq__21784_22089__$1);
var G__22138 = null;
var G__22139 = (0);
var G__22140 = (0);
seq__21784_22038 = G__22137;
chunk__21788_22039 = G__22138;
count__21789_22040 = G__22139;
i__21790_22041 = G__22140;
continue;
}
}
} else {
}
}
break;
}


var G__22141 = cljs.core.next(seq__21616__$1);
var G__22142 = null;
var G__22143 = (0);
var G__22144 = (0);
seq__21616 = G__22141;
chunk__21618 = G__22142;
count__21619 = G__22143;
i__21620 = G__22144;
continue;
} else {
var G__22145 = cljs.core.next(seq__21616__$1);
var G__22146 = null;
var G__22147 = (0);
var G__22148 = (0);
seq__21616 = G__22145;
chunk__21618 = G__22146;
count__21619 = G__22147;
i__21620 = G__22148;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21838){
var map__21839 = p__21838;
var map__21839__$1 = cljs.core.__destructure_map(map__21839);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21840,done,error){
var map__21841 = p__21840;
var map__21841__$1 = cljs.core.__destructure_map(map__21841);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21841__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21842,done,error){
var map__21843 = p__21842;
var map__21843__$1 = cljs.core.__destructure_map(map__21843);
var msg = map__21843__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21843__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21843__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21843__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21844){
var map__21845 = p__21844;
var map__21845__$1 = cljs.core.__destructure_map(map__21845);
var src = map__21845__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21845__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21846 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21846) : done.call(null, G__21846));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21847){
var map__21848 = p__21847;
var map__21848__$1 = cljs.core.__destructure_map(map__21848);
var msg__$1 = map__21848__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21848__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21849){var ex = e21849;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21850){
var map__21851 = p__21850;
var map__21851__$1 = cljs.core.__destructure_map(map__21851);
var env = map__21851__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21851__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21852){
var map__21853 = p__21852;
var map__21853__$1 = cljs.core.__destructure_map(map__21853);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21853__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21854){
var map__21855 = p__21854;
var map__21855__$1 = cljs.core.__destructure_map(map__21855);
var svc = map__21855__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
