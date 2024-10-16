goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14399){
var map__14400 = p__14399;
var map__14400__$1 = cljs.core.__destructure_map(map__14400);
var runtime = map__14400__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14400__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14767 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14767)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14411 = runtime;
var G__14412 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14767);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14411,G__14412) : shadow.remote.runtime.shared.process.call(null, G__14411,G__14412));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14438,res){
var map__14440 = p__14438;
var map__14440__$1 = cljs.core.__destructure_map(map__14440);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14440__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14440__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14442 = res;
var G__14442__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14442,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14442);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14442__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14442__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14452 = arguments.length;
switch (G__14452) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14455,msg,handlers,timeout_after_ms){
var map__14456 = p__14455;
var map__14456__$1 = cljs.core.__destructure_map(map__14456);
var runtime = map__14456__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14456__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14785 = arguments.length;
var i__5727__auto___14786 = (0);
while(true){
if((i__5727__auto___14786 < len__5726__auto___14785)){
args__5732__auto__.push((arguments[i__5727__auto___14786]));

var G__14787 = (i__5727__auto___14786 + (1));
i__5727__auto___14786 = G__14787;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14474,ev,args){
var map__14478 = p__14474;
var map__14478__$1 = cljs.core.__destructure_map(map__14478);
var runtime = map__14478__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14478__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14480 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14483 = null;
var count__14484 = (0);
var i__14485 = (0);
while(true){
if((i__14485 < count__14484)){
var ext = chunk__14483.cljs$core$IIndexed$_nth$arity$2(null, i__14485);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14797 = seq__14480;
var G__14798 = chunk__14483;
var G__14799 = count__14484;
var G__14800 = (i__14485 + (1));
seq__14480 = G__14797;
chunk__14483 = G__14798;
count__14484 = G__14799;
i__14485 = G__14800;
continue;
} else {
var G__14802 = seq__14480;
var G__14803 = chunk__14483;
var G__14804 = count__14484;
var G__14805 = (i__14485 + (1));
seq__14480 = G__14802;
chunk__14483 = G__14803;
count__14484 = G__14804;
i__14485 = G__14805;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14480);
if(temp__5804__auto__){
var seq__14480__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14480__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14480__$1);
var G__14811 = cljs.core.chunk_rest(seq__14480__$1);
var G__14812 = c__5525__auto__;
var G__14813 = cljs.core.count(c__5525__auto__);
var G__14814 = (0);
seq__14480 = G__14811;
chunk__14483 = G__14812;
count__14484 = G__14813;
i__14485 = G__14814;
continue;
} else {
var ext = cljs.core.first(seq__14480__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14825 = cljs.core.next(seq__14480__$1);
var G__14826 = null;
var G__14827 = (0);
var G__14828 = (0);
seq__14480 = G__14825;
chunk__14483 = G__14826;
count__14484 = G__14827;
i__14485 = G__14828;
continue;
} else {
var G__14830 = cljs.core.next(seq__14480__$1);
var G__14831 = null;
var G__14832 = (0);
var G__14833 = (0);
seq__14480 = G__14830;
chunk__14483 = G__14831;
count__14484 = G__14832;
i__14485 = G__14833;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14467){
var G__14468 = cljs.core.first(seq14467);
var seq14467__$1 = cljs.core.next(seq14467);
var G__14469 = cljs.core.first(seq14467__$1);
var seq14467__$2 = cljs.core.next(seq14467__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14468,G__14469,seq14467__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14526,p__14527){
var map__14528 = p__14526;
var map__14528__$1 = cljs.core.__destructure_map(map__14528);
var runtime = map__14528__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14528__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14529 = p__14527;
var map__14529__$1 = cljs.core.__destructure_map(map__14529);
var msg = map__14529__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14529__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14537 = cljs.core.deref(state_ref);
var map__14537__$1 = cljs.core.__destructure_map(map__14537);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14537__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14537__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14554,msg){
var map__14558 = p__14554;
var map__14558__$1 = cljs.core.__destructure_map(map__14558);
var runtime = map__14558__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14558__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14587,key,p__14588){
var map__14590 = p__14587;
var map__14590__$1 = cljs.core.__destructure_map(map__14590);
var state = map__14590__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14590__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14596 = p__14588;
var map__14596__$1 = cljs.core.__destructure_map(map__14596);
var spec = map__14596__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14620,key,spec){
var map__14621 = p__14620;
var map__14621__$1 = cljs.core.__destructure_map(map__14621);
var runtime = map__14621__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14621__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14856 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14856 == null)){
} else {
var on_welcome_14857 = temp__5808__auto___14856;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14857.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14857.cljs$core$IFn$_invoke$arity$0() : on_welcome_14857.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14626_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14626_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14627_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14627_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14628_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14628_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14630_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14630_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14631_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14631_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14668,key){
var map__14672 = p__14668;
var map__14672__$1 = cljs.core.__destructure_map(map__14672);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14672__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14690,msg){
var map__14691 = p__14690;
var map__14691__$1 = cljs.core.__destructure_map(map__14691);
var runtime = map__14691__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14732,p__14733){
var map__14737 = p__14732;
var map__14737__$1 = cljs.core.__destructure_map(map__14737);
var runtime = map__14737__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14737__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14738 = p__14733;
var map__14738__$1 = cljs.core.__destructure_map(map__14738);
var msg = map__14738__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14738__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14738__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14741 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14743 = null;
var count__14744 = (0);
var i__14745 = (0);
while(true){
if((i__14745 < count__14744)){
var map__14750 = chunk__14743.cljs$core$IIndexed$_nth$arity$2(null, i__14745);
var map__14750__$1 = cljs.core.__destructure_map(map__14750);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14750__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14898 = seq__14741;
var G__14899 = chunk__14743;
var G__14900 = count__14744;
var G__14901 = (i__14745 + (1));
seq__14741 = G__14898;
chunk__14743 = G__14899;
count__14744 = G__14900;
i__14745 = G__14901;
continue;
} else {
var G__14908 = seq__14741;
var G__14909 = chunk__14743;
var G__14910 = count__14744;
var G__14911 = (i__14745 + (1));
seq__14741 = G__14908;
chunk__14743 = G__14909;
count__14744 = G__14910;
i__14745 = G__14911;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14741);
if(temp__5804__auto__){
var seq__14741__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14741__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14741__$1);
var G__14912 = cljs.core.chunk_rest(seq__14741__$1);
var G__14913 = c__5525__auto__;
var G__14914 = cljs.core.count(c__5525__auto__);
var G__14915 = (0);
seq__14741 = G__14912;
chunk__14743 = G__14913;
count__14744 = G__14914;
i__14745 = G__14915;
continue;
} else {
var map__14757 = cljs.core.first(seq__14741__$1);
var map__14757__$1 = cljs.core.__destructure_map(map__14757);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14757__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14916 = cljs.core.next(seq__14741__$1);
var G__14917 = null;
var G__14918 = (0);
var G__14919 = (0);
seq__14741 = G__14916;
chunk__14743 = G__14917;
count__14744 = G__14918;
i__14745 = G__14919;
continue;
} else {
var G__14920 = cljs.core.next(seq__14741__$1);
var G__14921 = null;
var G__14922 = (0);
var G__14923 = (0);
seq__14741 = G__14920;
chunk__14743 = G__14921;
count__14744 = G__14922;
i__14745 = G__14923;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
