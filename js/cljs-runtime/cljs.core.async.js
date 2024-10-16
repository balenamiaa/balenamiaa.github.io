goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16079 = (function (f,blockable,meta16080){
this.f = f;
this.blockable = blockable;
this.meta16080 = meta16080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16081,meta16080__$1){
var self__ = this;
var _16081__$1 = this;
return (new cljs.core.async.t_cljs$core$async16079(self__.f,self__.blockable,meta16080__$1));
}));

(cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16081){
var self__ = this;
var _16081__$1 = this;
return self__.meta16080;
}));

(cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async16079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16080","meta16080",-42300779,null)], null);
}));

(cljs.core.async.t_cljs$core$async16079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16079");

(cljs.core.async.t_cljs$core$async16079.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16079.
 */
cljs.core.async.__GT_t_cljs$core$async16079 = (function cljs$core$async$__GT_t_cljs$core$async16079(f,blockable,meta16080){
return (new cljs.core.async.t_cljs$core$async16079(f,blockable,meta16080));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16071 = arguments.length;
switch (G__16071) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async16079(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16173 = arguments.length;
switch (G__16173) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16258 = arguments.length;
switch (G__16258) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16291 = arguments.length;
switch (G__16291) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19685 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19685) : fn1.call(null, val_19685));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19685) : fn1.call(null, val_19685));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16401 = arguments.length;
switch (G__16401) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___19695 = n;
var x_19696 = (0);
while(true){
if((x_19696 < n__5593__auto___19695)){
(a[x_19696] = x_19696);

var G__19697 = (x_19696 + (1));
x_19696 = G__19697;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16462 = (function (flag,meta16463){
this.flag = flag;
this.meta16463 = meta16463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16464,meta16463__$1){
var self__ = this;
var _16464__$1 = this;
return (new cljs.core.async.t_cljs$core$async16462(self__.flag,meta16463__$1));
}));

(cljs.core.async.t_cljs$core$async16462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16464){
var self__ = this;
var _16464__$1 = this;
return self__.meta16463;
}));

(cljs.core.async.t_cljs$core$async16462.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16462.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16463","meta16463",1309389125,null)], null);
}));

(cljs.core.async.t_cljs$core$async16462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16462");

(cljs.core.async.t_cljs$core$async16462.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16462.
 */
cljs.core.async.__GT_t_cljs$core$async16462 = (function cljs$core$async$__GT_t_cljs$core$async16462(flag,meta16463){
return (new cljs.core.async.t_cljs$core$async16462(flag,meta16463));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async16462(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16487 = (function (flag,cb,meta16488){
this.flag = flag;
this.cb = cb;
this.meta16488 = meta16488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16489,meta16488__$1){
var self__ = this;
var _16489__$1 = this;
return (new cljs.core.async.t_cljs$core$async16487(self__.flag,self__.cb,meta16488__$1));
}));

(cljs.core.async.t_cljs$core$async16487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16489){
var self__ = this;
var _16489__$1 = this;
return self__.meta16488;
}));

(cljs.core.async.t_cljs$core$async16487.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16488","meta16488",627847560,null)], null);
}));

(cljs.core.async.t_cljs$core$async16487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16487");

(cljs.core.async.t_cljs$core$async16487.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16487.
 */
cljs.core.async.__GT_t_cljs$core$async16487 = (function cljs$core$async$__GT_t_cljs$core$async16487(flag,cb,meta16488){
return (new cljs.core.async.t_cljs$core$async16487(flag,cb,meta16488));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async16487(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16506_SHARP_){
var G__16536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16506_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16536) : fret.call(null, G__16536));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16507_SHARP_){
var G__16544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16507_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16544) : fret.call(null, G__16544));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19706 = (i + (1));
i = G__19706;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19707 = arguments.length;
var i__5727__auto___19708 = (0);
while(true){
if((i__5727__auto___19708 < len__5726__auto___19707)){
args__5732__auto__.push((arguments[i__5727__auto___19708]));

var G__19709 = (i__5727__auto___19708 + (1));
i__5727__auto___19708 = G__19709;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16648){
var map__16649 = p__16648;
var map__16649__$1 = cljs.core.__destructure_map(map__16649);
var opts = map__16649__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16606){
var G__16607 = cljs.core.first(seq16606);
var seq16606__$1 = cljs.core.next(seq16606);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16607,seq16606__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16673 = arguments.length;
switch (G__16673) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15812__auto___19718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_16780){
var state_val_16781 = (state_16780[(1)]);
if((state_val_16781 === (7))){
var inst_16770 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
var statearr_16801_19721 = state_16780__$1;
(statearr_16801_19721[(2)] = inst_16770);

(statearr_16801_19721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (1))){
var state_16780__$1 = state_16780;
var statearr_16803_19722 = state_16780__$1;
(statearr_16803_19722[(2)] = null);

(statearr_16803_19722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (4))){
var inst_16746 = (state_16780[(7)]);
var inst_16746__$1 = (state_16780[(2)]);
var inst_16753 = (inst_16746__$1 == null);
var state_16780__$1 = (function (){var statearr_16810 = state_16780;
(statearr_16810[(7)] = inst_16746__$1);

return statearr_16810;
})();
if(cljs.core.truth_(inst_16753)){
var statearr_16811_19725 = state_16780__$1;
(statearr_16811_19725[(1)] = (5));

} else {
var statearr_16812_19726 = state_16780__$1;
(statearr_16812_19726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (13))){
var state_16780__$1 = state_16780;
var statearr_16825_19727 = state_16780__$1;
(statearr_16825_19727[(2)] = null);

(statearr_16825_19727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (6))){
var inst_16746 = (state_16780[(7)]);
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16780__$1,(11),to,inst_16746);
} else {
if((state_val_16781 === (3))){
var inst_16777 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16780__$1,inst_16777);
} else {
if((state_val_16781 === (12))){
var state_16780__$1 = state_16780;
var statearr_16833_19728 = state_16780__$1;
(statearr_16833_19728[(2)] = null);

(statearr_16833_19728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (2))){
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16780__$1,(4),from);
} else {
if((state_val_16781 === (11))){
var inst_16763 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
if(cljs.core.truth_(inst_16763)){
var statearr_16835_19729 = state_16780__$1;
(statearr_16835_19729[(1)] = (12));

} else {
var statearr_16836_19730 = state_16780__$1;
(statearr_16836_19730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (9))){
var state_16780__$1 = state_16780;
var statearr_16837_19733 = state_16780__$1;
(statearr_16837_19733[(2)] = null);

(statearr_16837_19733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (5))){
var state_16780__$1 = state_16780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16838_19734 = state_16780__$1;
(statearr_16838_19734[(1)] = (8));

} else {
var statearr_16839_19735 = state_16780__$1;
(statearr_16839_19735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (14))){
var inst_16768 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
var statearr_16845_19736 = state_16780__$1;
(statearr_16845_19736[(2)] = inst_16768);

(statearr_16845_19736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (10))){
var inst_16760 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
var statearr_16847_19738 = state_16780__$1;
(statearr_16847_19738[(2)] = inst_16760);

(statearr_16847_19738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16781 === (8))){
var inst_16756 = cljs.core.async.close_BANG_(to);
var state_16780__$1 = state_16780;
var statearr_16848_19739 = state_16780__$1;
(statearr_16848_19739[(2)] = inst_16756);

(statearr_16848_19739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_16852 = [null,null,null,null,null,null,null,null];
(statearr_16852[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_16852[(1)] = (1));

return statearr_16852;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_16780){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_16780);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e16854){var ex__14134__auto__ = e16854;
var statearr_16855_19740 = state_16780;
(statearr_16855_19740[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_16780[(4)]))){
var statearr_16856_19741 = state_16780;
(statearr_16856_19741[(1)] = cljs.core.first((state_16780[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19742 = state_16780;
state_16780 = G__19742;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_16780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_16780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_16858 = f__15813__auto__();
(statearr_16858[(6)] = c__15812__auto___19718);

return statearr_16858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__16882){
var vec__16883 = p__16882;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16883,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16883,(1),null);
var job = vec__16883;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15812__auto___19744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_16900){
var state_val_16901 = (state_16900[(1)]);
if((state_val_16901 === (1))){
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16900__$1,(2),res,v);
} else {
if((state_val_16901 === (2))){
var inst_16897 = (state_16900[(2)]);
var inst_16898 = cljs.core.async.close_BANG_(res);
var state_16900__$1 = (function (){var statearr_16906 = state_16900;
(statearr_16906[(7)] = inst_16897);

return statearr_16906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16900__$1,inst_16898);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0 = (function (){
var statearr_16909 = [null,null,null,null,null,null,null,null];
(statearr_16909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__);

(statearr_16909[(1)] = (1));

return statearr_16909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1 = (function (state_16900){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_16900);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e16915){var ex__14134__auto__ = e16915;
var statearr_16919_19748 = state_16900;
(statearr_16919_19748[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_16900[(4)]))){
var statearr_16921_19750 = state_16900;
(statearr_16921_19750[(1)] = cljs.core.first((state_16900[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19751 = state_16900;
state_16900 = G__19751;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = function(state_16900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1.call(this,state_16900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_16925 = f__15813__auto__();
(statearr_16925[(6)] = c__15812__auto___19744);

return statearr_16925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16936){
var vec__16937 = p__16936;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16937,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16937,(1),null);
var job = vec__16937;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___19753 = n;
var __19754 = (0);
while(true){
if((__19754 < n__5593__auto___19753)){
var G__16940_19755 = type;
var G__16940_19756__$1 = (((G__16940_19755 instanceof cljs.core.Keyword))?G__16940_19755.fqn:null);
switch (G__16940_19756__$1) {
case "compute":
var c__15812__auto___19758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19754,c__15812__auto___19758,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async){
return (function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = ((function (__19754,c__15812__auto___19758,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async){
return (function (state_16955){
var state_val_16956 = (state_16955[(1)]);
if((state_val_16956 === (1))){
var state_16955__$1 = state_16955;
var statearr_16960_19762 = state_16955__$1;
(statearr_16960_19762[(2)] = null);

(statearr_16960_19762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (2))){
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16955__$1,(4),jobs);
} else {
if((state_val_16956 === (3))){
var inst_16953 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16955__$1,inst_16953);
} else {
if((state_val_16956 === (4))){
var inst_16945 = (state_16955[(2)]);
var inst_16946 = process__$1(inst_16945);
var state_16955__$1 = state_16955;
if(cljs.core.truth_(inst_16946)){
var statearr_16963_19769 = state_16955__$1;
(statearr_16963_19769[(1)] = (5));

} else {
var statearr_16965_19771 = state_16955__$1;
(statearr_16965_19771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (5))){
var state_16955__$1 = state_16955;
var statearr_16967_19772 = state_16955__$1;
(statearr_16967_19772[(2)] = null);

(statearr_16967_19772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (6))){
var state_16955__$1 = state_16955;
var statearr_16968_19773 = state_16955__$1;
(statearr_16968_19773[(2)] = null);

(statearr_16968_19773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (7))){
var inst_16951 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
var statearr_16969_19776 = state_16955__$1;
(statearr_16969_19776[(2)] = inst_16951);

(statearr_16969_19776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19754,c__15812__auto___19758,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async))
;
return ((function (__19754,switch__14130__auto__,c__15812__auto___19758,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0 = (function (){
var statearr_16971 = [null,null,null,null,null,null,null];
(statearr_16971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__);

(statearr_16971[(1)] = (1));

return statearr_16971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1 = (function (state_16955){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_16955);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e16972){var ex__14134__auto__ = e16972;
var statearr_16973_19782 = state_16955;
(statearr_16973_19782[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_16955[(4)]))){
var statearr_16974_19783 = state_16955;
(statearr_16974_19783[(1)] = cljs.core.first((state_16955[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19784 = state_16955;
state_16955 = G__19784;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = function(state_16955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1.call(this,state_16955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__;
})()
;})(__19754,switch__14130__auto__,c__15812__auto___19758,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async))
})();
var state__15814__auto__ = (function (){var statearr_16975 = f__15813__auto__();
(statearr_16975[(6)] = c__15812__auto___19758);

return statearr_16975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
});})(__19754,c__15812__auto___19758,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async))
);


break;
case "async":
var c__15812__auto___19785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19754,c__15812__auto___19785,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async){
return (function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = ((function (__19754,c__15812__auto___19785,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async){
return (function (state_16989){
var state_val_16990 = (state_16989[(1)]);
if((state_val_16990 === (1))){
var state_16989__$1 = state_16989;
var statearr_16994_19790 = state_16989__$1;
(statearr_16994_19790[(2)] = null);

(statearr_16994_19790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16990 === (2))){
var state_16989__$1 = state_16989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16989__$1,(4),jobs);
} else {
if((state_val_16990 === (3))){
var inst_16987 = (state_16989[(2)]);
var state_16989__$1 = state_16989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16989__$1,inst_16987);
} else {
if((state_val_16990 === (4))){
var inst_16979 = (state_16989[(2)]);
var inst_16980 = async(inst_16979);
var state_16989__$1 = state_16989;
if(cljs.core.truth_(inst_16980)){
var statearr_16997_19796 = state_16989__$1;
(statearr_16997_19796[(1)] = (5));

} else {
var statearr_16998_19797 = state_16989__$1;
(statearr_16998_19797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16990 === (5))){
var state_16989__$1 = state_16989;
var statearr_17000_19802 = state_16989__$1;
(statearr_17000_19802[(2)] = null);

(statearr_17000_19802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16990 === (6))){
var state_16989__$1 = state_16989;
var statearr_17003_19803 = state_16989__$1;
(statearr_17003_19803[(2)] = null);

(statearr_17003_19803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16990 === (7))){
var inst_16985 = (state_16989[(2)]);
var state_16989__$1 = state_16989;
var statearr_17004_19807 = state_16989__$1;
(statearr_17004_19807[(2)] = inst_16985);

(statearr_17004_19807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19754,c__15812__auto___19785,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async))
;
return ((function (__19754,switch__14130__auto__,c__15812__auto___19785,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0 = (function (){
var statearr_17005 = [null,null,null,null,null,null,null];
(statearr_17005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__);

(statearr_17005[(1)] = (1));

return statearr_17005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1 = (function (state_16989){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_16989);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e17007){var ex__14134__auto__ = e17007;
var statearr_17008_19810 = state_16989;
(statearr_17008_19810[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_16989[(4)]))){
var statearr_17009_19816 = state_16989;
(statearr_17009_19816[(1)] = cljs.core.first((state_16989[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19818 = state_16989;
state_16989 = G__19818;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = function(state_16989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1.call(this,state_16989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__;
})()
;})(__19754,switch__14130__auto__,c__15812__auto___19785,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async))
})();
var state__15814__auto__ = (function (){var statearr_17010 = f__15813__auto__();
(statearr_17010[(6)] = c__15812__auto___19785);

return statearr_17010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
});})(__19754,c__15812__auto___19785,G__16940_19755,G__16940_19756__$1,n__5593__auto___19753,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16940_19756__$1)].join('')));

}

var G__19821 = (__19754 + (1));
__19754 = G__19821;
continue;
} else {
}
break;
}

var c__15812__auto___19822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_17049){
var state_val_17050 = (state_17049[(1)]);
if((state_val_17050 === (7))){
var inst_17035 = (state_17049[(2)]);
var state_17049__$1 = state_17049;
var statearr_17052_19823 = state_17049__$1;
(statearr_17052_19823[(2)] = inst_17035);

(statearr_17052_19823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17050 === (1))){
var state_17049__$1 = state_17049;
var statearr_17053_19824 = state_17049__$1;
(statearr_17053_19824[(2)] = null);

(statearr_17053_19824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17050 === (4))){
var inst_17018 = (state_17049[(7)]);
var inst_17018__$1 = (state_17049[(2)]);
var inst_17019 = (inst_17018__$1 == null);
var state_17049__$1 = (function (){var statearr_17055 = state_17049;
(statearr_17055[(7)] = inst_17018__$1);

return statearr_17055;
})();
if(cljs.core.truth_(inst_17019)){
var statearr_17057_19831 = state_17049__$1;
(statearr_17057_19831[(1)] = (5));

} else {
var statearr_17058_19833 = state_17049__$1;
(statearr_17058_19833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17050 === (6))){
var inst_17023 = (state_17049[(8)]);
var inst_17018 = (state_17049[(7)]);
var inst_17023__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17027 = [inst_17018,inst_17023__$1];
var inst_17028 = (new cljs.core.PersistentVector(null,2,(5),inst_17025,inst_17027,null));
var state_17049__$1 = (function (){var statearr_17061 = state_17049;
(statearr_17061[(8)] = inst_17023__$1);

return statearr_17061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17049__$1,(8),jobs,inst_17028);
} else {
if((state_val_17050 === (3))){
var inst_17037 = (state_17049[(2)]);
var state_17049__$1 = state_17049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17049__$1,inst_17037);
} else {
if((state_val_17050 === (2))){
var state_17049__$1 = state_17049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17049__$1,(4),from);
} else {
if((state_val_17050 === (9))){
var inst_17032 = (state_17049[(2)]);
var state_17049__$1 = (function (){var statearr_17064 = state_17049;
(statearr_17064[(9)] = inst_17032);

return statearr_17064;
})();
var statearr_17065_19842 = state_17049__$1;
(statearr_17065_19842[(2)] = null);

(statearr_17065_19842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17050 === (5))){
var inst_17021 = cljs.core.async.close_BANG_(jobs);
var state_17049__$1 = state_17049;
var statearr_17066_19843 = state_17049__$1;
(statearr_17066_19843[(2)] = inst_17021);

(statearr_17066_19843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17050 === (8))){
var inst_17023 = (state_17049[(8)]);
var inst_17030 = (state_17049[(2)]);
var state_17049__$1 = (function (){var statearr_17067 = state_17049;
(statearr_17067[(10)] = inst_17030);

return statearr_17067;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17049__$1,(9),results,inst_17023);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0 = (function (){
var statearr_17069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__);

(statearr_17069[(1)] = (1));

return statearr_17069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1 = (function (state_17049){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_17049);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e17070){var ex__14134__auto__ = e17070;
var statearr_17071_19854 = state_17049;
(statearr_17071_19854[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_17049[(4)]))){
var statearr_17072_19855 = state_17049;
(statearr_17072_19855[(1)] = cljs.core.first((state_17049[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19857 = state_17049;
state_17049 = G__19857;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = function(state_17049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1.call(this,state_17049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_17077 = f__15813__auto__();
(statearr_17077[(6)] = c__15812__auto___19822);

return statearr_17077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


var c__15812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_17119){
var state_val_17120 = (state_17119[(1)]);
if((state_val_17120 === (7))){
var inst_17115 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17122_19863 = state_17119__$1;
(statearr_17122_19863[(2)] = inst_17115);

(statearr_17122_19863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (20))){
var state_17119__$1 = state_17119;
var statearr_17123_19864 = state_17119__$1;
(statearr_17123_19864[(2)] = null);

(statearr_17123_19864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (1))){
var state_17119__$1 = state_17119;
var statearr_17128_19865 = state_17119__$1;
(statearr_17128_19865[(2)] = null);

(statearr_17128_19865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (4))){
var inst_17081 = (state_17119[(7)]);
var inst_17081__$1 = (state_17119[(2)]);
var inst_17084 = (inst_17081__$1 == null);
var state_17119__$1 = (function (){var statearr_17131 = state_17119;
(statearr_17131[(7)] = inst_17081__$1);

return statearr_17131;
})();
if(cljs.core.truth_(inst_17084)){
var statearr_17132_19870 = state_17119__$1;
(statearr_17132_19870[(1)] = (5));

} else {
var statearr_17133_19871 = state_17119__$1;
(statearr_17133_19871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (15))){
var inst_17097 = (state_17119[(8)]);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17119__$1,(18),to,inst_17097);
} else {
if((state_val_17120 === (21))){
var inst_17110 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17136_19875 = state_17119__$1;
(statearr_17136_19875[(2)] = inst_17110);

(statearr_17136_19875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (13))){
var inst_17112 = (state_17119[(2)]);
var state_17119__$1 = (function (){var statearr_17137 = state_17119;
(statearr_17137[(9)] = inst_17112);

return statearr_17137;
})();
var statearr_17139_19878 = state_17119__$1;
(statearr_17139_19878[(2)] = null);

(statearr_17139_19878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (6))){
var inst_17081 = (state_17119[(7)]);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17119__$1,(11),inst_17081);
} else {
if((state_val_17120 === (17))){
var inst_17105 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
if(cljs.core.truth_(inst_17105)){
var statearr_17140_19880 = state_17119__$1;
(statearr_17140_19880[(1)] = (19));

} else {
var statearr_17141_19881 = state_17119__$1;
(statearr_17141_19881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (3))){
var inst_17117 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17119__$1,inst_17117);
} else {
if((state_val_17120 === (12))){
var inst_17094 = (state_17119[(10)]);
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17119__$1,(14),inst_17094);
} else {
if((state_val_17120 === (2))){
var state_17119__$1 = state_17119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17119__$1,(4),results);
} else {
if((state_val_17120 === (19))){
var state_17119__$1 = state_17119;
var statearr_17145_19885 = state_17119__$1;
(statearr_17145_19885[(2)] = null);

(statearr_17145_19885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (11))){
var inst_17094 = (state_17119[(2)]);
var state_17119__$1 = (function (){var statearr_17157 = state_17119;
(statearr_17157[(10)] = inst_17094);

return statearr_17157;
})();
var statearr_17158_19886 = state_17119__$1;
(statearr_17158_19886[(2)] = null);

(statearr_17158_19886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (9))){
var state_17119__$1 = state_17119;
var statearr_17159_19888 = state_17119__$1;
(statearr_17159_19888[(2)] = null);

(statearr_17159_19888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (5))){
var state_17119__$1 = state_17119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17162_19890 = state_17119__$1;
(statearr_17162_19890[(1)] = (8));

} else {
var statearr_17163_19891 = state_17119__$1;
(statearr_17163_19891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (14))){
var inst_17099 = (state_17119[(11)]);
var inst_17097 = (state_17119[(8)]);
var inst_17097__$1 = (state_17119[(2)]);
var inst_17098 = (inst_17097__$1 == null);
var inst_17099__$1 = cljs.core.not(inst_17098);
var state_17119__$1 = (function (){var statearr_17165 = state_17119;
(statearr_17165[(11)] = inst_17099__$1);

(statearr_17165[(8)] = inst_17097__$1);

return statearr_17165;
})();
if(inst_17099__$1){
var statearr_17167_19893 = state_17119__$1;
(statearr_17167_19893[(1)] = (15));

} else {
var statearr_17169_19894 = state_17119__$1;
(statearr_17169_19894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (16))){
var inst_17099 = (state_17119[(11)]);
var state_17119__$1 = state_17119;
var statearr_17170_19895 = state_17119__$1;
(statearr_17170_19895[(2)] = inst_17099);

(statearr_17170_19895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (10))){
var inst_17090 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17171_19897 = state_17119__$1;
(statearr_17171_19897[(2)] = inst_17090);

(statearr_17171_19897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (18))){
var inst_17102 = (state_17119[(2)]);
var state_17119__$1 = state_17119;
var statearr_17172_19900 = state_17119__$1;
(statearr_17172_19900[(2)] = inst_17102);

(statearr_17172_19900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17120 === (8))){
var inst_17087 = cljs.core.async.close_BANG_(to);
var state_17119__$1 = state_17119;
var statearr_17177_19903 = state_17119__$1;
(statearr_17177_19903[(2)] = inst_17087);

(statearr_17177_19903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0 = (function (){
var statearr_17179 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__);

(statearr_17179[(1)] = (1));

return statearr_17179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1 = (function (state_17119){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_17119);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e17180){var ex__14134__auto__ = e17180;
var statearr_17181_19909 = state_17119;
(statearr_17181_19909[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_17119[(4)]))){
var statearr_17182_19911 = state_17119;
(statearr_17182_19911[(1)] = cljs.core.first((state_17119[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19913 = state_17119;
state_17119 = G__19913;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__ = function(state_17119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1.call(this,state_17119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_17184 = f__15813__auto__();
(statearr_17184[(6)] = c__15812__auto__);

return statearr_17184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));

return c__15812__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17187 = arguments.length;
switch (G__17187) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17200 = arguments.length;
switch (G__17200) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17210 = arguments.length;
switch (G__17210) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15812__auto___19921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_17261){
var state_val_17262 = (state_17261[(1)]);
if((state_val_17262 === (7))){
var inst_17257 = (state_17261[(2)]);
var state_17261__$1 = state_17261;
var statearr_17264_19926 = state_17261__$1;
(statearr_17264_19926[(2)] = inst_17257);

(statearr_17264_19926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (1))){
var state_17261__$1 = state_17261;
var statearr_17265_19932 = state_17261__$1;
(statearr_17265_19932[(2)] = null);

(statearr_17265_19932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (4))){
var inst_17226 = (state_17261[(7)]);
var inst_17226__$1 = (state_17261[(2)]);
var inst_17227 = (inst_17226__$1 == null);
var state_17261__$1 = (function (){var statearr_17266 = state_17261;
(statearr_17266[(7)] = inst_17226__$1);

return statearr_17266;
})();
if(cljs.core.truth_(inst_17227)){
var statearr_17267_19933 = state_17261__$1;
(statearr_17267_19933[(1)] = (5));

} else {
var statearr_17268_19934 = state_17261__$1;
(statearr_17268_19934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (13))){
var state_17261__$1 = state_17261;
var statearr_17271_19935 = state_17261__$1;
(statearr_17271_19935[(2)] = null);

(statearr_17271_19935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (6))){
var inst_17226 = (state_17261[(7)]);
var inst_17242 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17226) : p.call(null, inst_17226));
var state_17261__$1 = state_17261;
if(cljs.core.truth_(inst_17242)){
var statearr_17275_19936 = state_17261__$1;
(statearr_17275_19936[(1)] = (9));

} else {
var statearr_17278_19937 = state_17261__$1;
(statearr_17278_19937[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (3))){
var inst_17259 = (state_17261[(2)]);
var state_17261__$1 = state_17261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17261__$1,inst_17259);
} else {
if((state_val_17262 === (12))){
var state_17261__$1 = state_17261;
var statearr_17279_19939 = state_17261__$1;
(statearr_17279_19939[(2)] = null);

(statearr_17279_19939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (2))){
var state_17261__$1 = state_17261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17261__$1,(4),ch);
} else {
if((state_val_17262 === (11))){
var inst_17226 = (state_17261[(7)]);
var inst_17248 = (state_17261[(2)]);
var state_17261__$1 = state_17261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17261__$1,(8),inst_17248,inst_17226);
} else {
if((state_val_17262 === (9))){
var state_17261__$1 = state_17261;
var statearr_17281_19940 = state_17261__$1;
(statearr_17281_19940[(2)] = tc);

(statearr_17281_19940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (5))){
var inst_17233 = cljs.core.async.close_BANG_(tc);
var inst_17240 = cljs.core.async.close_BANG_(fc);
var state_17261__$1 = (function (){var statearr_17282 = state_17261;
(statearr_17282[(8)] = inst_17233);

return statearr_17282;
})();
var statearr_17286_19941 = state_17261__$1;
(statearr_17286_19941[(2)] = inst_17240);

(statearr_17286_19941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (14))){
var inst_17255 = (state_17261[(2)]);
var state_17261__$1 = state_17261;
var statearr_17288_19942 = state_17261__$1;
(statearr_17288_19942[(2)] = inst_17255);

(statearr_17288_19942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (10))){
var state_17261__$1 = state_17261;
var statearr_17289_19943 = state_17261__$1;
(statearr_17289_19943[(2)] = fc);

(statearr_17289_19943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17262 === (8))){
var inst_17250 = (state_17261[(2)]);
var state_17261__$1 = state_17261;
if(cljs.core.truth_(inst_17250)){
var statearr_17293_19946 = state_17261__$1;
(statearr_17293_19946[(1)] = (12));

} else {
var statearr_17294_19948 = state_17261__$1;
(statearr_17294_19948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_17298 = [null,null,null,null,null,null,null,null,null];
(statearr_17298[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_17298[(1)] = (1));

return statearr_17298;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_17261){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_17261);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e17299){var ex__14134__auto__ = e17299;
var statearr_17300_19949 = state_17261;
(statearr_17300_19949[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_17261[(4)]))){
var statearr_17302_19950 = state_17261;
(statearr_17302_19950[(1)] = cljs.core.first((state_17261[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19951 = state_17261;
state_17261 = G__19951;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_17261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_17261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_17304 = f__15813__auto__();
(statearr_17304[(6)] = c__15812__auto___19921);

return statearr_17304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_17346){
var state_val_17347 = (state_17346[(1)]);
if((state_val_17347 === (7))){
var inst_17342 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
var statearr_17351_19952 = state_17346__$1;
(statearr_17351_19952[(2)] = inst_17342);

(statearr_17351_19952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (1))){
var inst_17322 = init;
var inst_17324 = inst_17322;
var state_17346__$1 = (function (){var statearr_17354 = state_17346;
(statearr_17354[(7)] = inst_17324);

return statearr_17354;
})();
var statearr_17355_19956 = state_17346__$1;
(statearr_17355_19956[(2)] = null);

(statearr_17355_19956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (4))){
var inst_17329 = (state_17346[(8)]);
var inst_17329__$1 = (state_17346[(2)]);
var inst_17330 = (inst_17329__$1 == null);
var state_17346__$1 = (function (){var statearr_17358 = state_17346;
(statearr_17358[(8)] = inst_17329__$1);

return statearr_17358;
})();
if(cljs.core.truth_(inst_17330)){
var statearr_17359_19960 = state_17346__$1;
(statearr_17359_19960[(1)] = (5));

} else {
var statearr_17360_19961 = state_17346__$1;
(statearr_17360_19961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (6))){
var inst_17329 = (state_17346[(8)]);
var inst_17333 = (state_17346[(9)]);
var inst_17324 = (state_17346[(7)]);
var inst_17333__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17324,inst_17329) : f.call(null, inst_17324,inst_17329));
var inst_17334 = cljs.core.reduced_QMARK_(inst_17333__$1);
var state_17346__$1 = (function (){var statearr_17361 = state_17346;
(statearr_17361[(9)] = inst_17333__$1);

return statearr_17361;
})();
if(inst_17334){
var statearr_17362_19967 = state_17346__$1;
(statearr_17362_19967[(1)] = (8));

} else {
var statearr_17363_19968 = state_17346__$1;
(statearr_17363_19968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (3))){
var inst_17344 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17346__$1,inst_17344);
} else {
if((state_val_17347 === (2))){
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17346__$1,(4),ch);
} else {
if((state_val_17347 === (9))){
var inst_17333 = (state_17346[(9)]);
var inst_17324 = inst_17333;
var state_17346__$1 = (function (){var statearr_17364 = state_17346;
(statearr_17364[(7)] = inst_17324);

return statearr_17364;
})();
var statearr_17372_19970 = state_17346__$1;
(statearr_17372_19970[(2)] = null);

(statearr_17372_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (5))){
var inst_17324 = (state_17346[(7)]);
var state_17346__$1 = state_17346;
var statearr_17373_19971 = state_17346__$1;
(statearr_17373_19971[(2)] = inst_17324);

(statearr_17373_19971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (10))){
var inst_17340 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
var statearr_17374_19972 = state_17346__$1;
(statearr_17374_19972[(2)] = inst_17340);

(statearr_17374_19972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17347 === (8))){
var inst_17333 = (state_17346[(9)]);
var inst_17336 = cljs.core.deref(inst_17333);
var state_17346__$1 = state_17346;
var statearr_17376_19973 = state_17346__$1;
(statearr_17376_19973[(2)] = inst_17336);

(statearr_17376_19973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14131__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14131__auto____0 = (function (){
var statearr_17377 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17377[(0)] = cljs$core$async$reduce_$_state_machine__14131__auto__);

(statearr_17377[(1)] = (1));

return statearr_17377;
});
var cljs$core$async$reduce_$_state_machine__14131__auto____1 = (function (state_17346){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_17346);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e17378){var ex__14134__auto__ = e17378;
var statearr_17379_19974 = state_17346;
(statearr_17379_19974[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_17346[(4)]))){
var statearr_17380_19975 = state_17346;
(statearr_17380_19975[(1)] = cljs.core.first((state_17346[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19976 = state_17346;
state_17346 = G__19976;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14131__auto__ = function(state_17346){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14131__auto____1.call(this,state_17346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14131__auto____0;
cljs$core$async$reduce_$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14131__auto____1;
return cljs$core$async$reduce_$_state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_17381 = f__15813__auto__();
(statearr_17381[(6)] = c__15812__auto__);

return statearr_17381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));

return c__15812__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__15812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_17390){
var state_val_17391 = (state_17390[(1)]);
if((state_val_17391 === (1))){
var inst_17385 = cljs.core.async.reduce(f__$1,init,ch);
var state_17390__$1 = state_17390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17390__$1,(2),inst_17385);
} else {
if((state_val_17391 === (2))){
var inst_17387 = (state_17390[(2)]);
var inst_17388 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17387) : f__$1.call(null, inst_17387));
var state_17390__$1 = state_17390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17390__$1,inst_17388);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14131__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14131__auto____0 = (function (){
var statearr_17396 = [null,null,null,null,null,null,null];
(statearr_17396[(0)] = cljs$core$async$transduce_$_state_machine__14131__auto__);

(statearr_17396[(1)] = (1));

return statearr_17396;
});
var cljs$core$async$transduce_$_state_machine__14131__auto____1 = (function (state_17390){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_17390);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e17397){var ex__14134__auto__ = e17397;
var statearr_17399_19979 = state_17390;
(statearr_17399_19979[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_17390[(4)]))){
var statearr_17400_19980 = state_17390;
(statearr_17400_19980[(1)] = cljs.core.first((state_17390[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19981 = state_17390;
state_17390 = G__19981;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14131__auto__ = function(state_17390){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14131__auto____1.call(this,state_17390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14131__auto____0;
cljs$core$async$transduce_$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14131__auto____1;
return cljs$core$async$transduce_$_state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_17401 = f__15813__auto__();
(statearr_17401[(6)] = c__15812__auto__);

return statearr_17401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));

return c__15812__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17416 = arguments.length;
switch (G__17416) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_17450){
var state_val_17451 = (state_17450[(1)]);
if((state_val_17451 === (7))){
var inst_17430 = (state_17450[(2)]);
var state_17450__$1 = state_17450;
var statearr_17461_19983 = state_17450__$1;
(statearr_17461_19983[(2)] = inst_17430);

(statearr_17461_19983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (1))){
var inst_17424 = cljs.core.seq(coll);
var inst_17425 = inst_17424;
var state_17450__$1 = (function (){var statearr_17462 = state_17450;
(statearr_17462[(7)] = inst_17425);

return statearr_17462;
})();
var statearr_17463_19984 = state_17450__$1;
(statearr_17463_19984[(2)] = null);

(statearr_17463_19984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (4))){
var inst_17425 = (state_17450[(7)]);
var inst_17428 = cljs.core.first(inst_17425);
var state_17450__$1 = state_17450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17450__$1,(7),ch,inst_17428);
} else {
if((state_val_17451 === (13))){
var inst_17444 = (state_17450[(2)]);
var state_17450__$1 = state_17450;
var statearr_17464_19986 = state_17450__$1;
(statearr_17464_19986[(2)] = inst_17444);

(statearr_17464_19986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (6))){
var inst_17434 = (state_17450[(2)]);
var state_17450__$1 = state_17450;
if(cljs.core.truth_(inst_17434)){
var statearr_17471_19987 = state_17450__$1;
(statearr_17471_19987[(1)] = (8));

} else {
var statearr_17475_19988 = state_17450__$1;
(statearr_17475_19988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (3))){
var inst_17448 = (state_17450[(2)]);
var state_17450__$1 = state_17450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17450__$1,inst_17448);
} else {
if((state_val_17451 === (12))){
var state_17450__$1 = state_17450;
var statearr_17476_19989 = state_17450__$1;
(statearr_17476_19989[(2)] = null);

(statearr_17476_19989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (2))){
var inst_17425 = (state_17450[(7)]);
var state_17450__$1 = state_17450;
if(cljs.core.truth_(inst_17425)){
var statearr_17477_19990 = state_17450__$1;
(statearr_17477_19990[(1)] = (4));

} else {
var statearr_17478_19991 = state_17450__$1;
(statearr_17478_19991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (11))){
var inst_17441 = cljs.core.async.close_BANG_(ch);
var state_17450__$1 = state_17450;
var statearr_17479_19992 = state_17450__$1;
(statearr_17479_19992[(2)] = inst_17441);

(statearr_17479_19992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (9))){
var state_17450__$1 = state_17450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17480_19993 = state_17450__$1;
(statearr_17480_19993[(1)] = (11));

} else {
var statearr_17482_19994 = state_17450__$1;
(statearr_17482_19994[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (5))){
var inst_17425 = (state_17450[(7)]);
var state_17450__$1 = state_17450;
var statearr_17483_19995 = state_17450__$1;
(statearr_17483_19995[(2)] = inst_17425);

(statearr_17483_19995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (10))){
var inst_17446 = (state_17450[(2)]);
var state_17450__$1 = state_17450;
var statearr_17484_19996 = state_17450__$1;
(statearr_17484_19996[(2)] = inst_17446);

(statearr_17484_19996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17451 === (8))){
var inst_17425 = (state_17450[(7)]);
var inst_17437 = cljs.core.next(inst_17425);
var inst_17425__$1 = inst_17437;
var state_17450__$1 = (function (){var statearr_17486 = state_17450;
(statearr_17486[(7)] = inst_17425__$1);

return statearr_17486;
})();
var statearr_17487_19998 = state_17450__$1;
(statearr_17487_19998[(2)] = null);

(statearr_17487_19998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_17488 = [null,null,null,null,null,null,null,null];
(statearr_17488[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_17488[(1)] = (1));

return statearr_17488;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_17450){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_17450);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e17489){var ex__14134__auto__ = e17489;
var statearr_17490_20005 = state_17450;
(statearr_17490_20005[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_17450[(4)]))){
var statearr_17491_20006 = state_17450;
(statearr_17491_20006[(1)] = cljs.core.first((state_17450[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20007 = state_17450;
state_17450 = G__20007;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_17450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_17450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_17492 = f__15813__auto__();
(statearr_17492[(6)] = c__15812__auto__);

return statearr_17492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));

return c__15812__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17516 = arguments.length;
switch (G__17516) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20009 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20009(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20010 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20010(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20015 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20015(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20017 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20017(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17563 = (function (ch,cs,meta17564){
this.ch = ch;
this.cs = cs;
this.meta17564 = meta17564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17565,meta17564__$1){
var self__ = this;
var _17565__$1 = this;
return (new cljs.core.async.t_cljs$core$async17563(self__.ch,self__.cs,meta17564__$1));
}));

(cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17565){
var self__ = this;
var _17565__$1 = this;
return self__.meta17564;
}));

(cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17564","meta17564",1964523584,null)], null);
}));

(cljs.core.async.t_cljs$core$async17563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17563");

(cljs.core.async.t_cljs$core$async17563.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17563.
 */
cljs.core.async.__GT_t_cljs$core$async17563 = (function cljs$core$async$__GT_t_cljs$core$async17563(ch,cs,meta17564){
return (new cljs.core.async.t_cljs$core$async17563(ch,cs,meta17564));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17563(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15812__auto___20025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_17725){
var state_val_17726 = (state_17725[(1)]);
if((state_val_17726 === (7))){
var inst_17721 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17731_20028 = state_17725__$1;
(statearr_17731_20028[(2)] = inst_17721);

(statearr_17731_20028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (20))){
var inst_17616 = (state_17725[(7)]);
var inst_17628 = cljs.core.first(inst_17616);
var inst_17629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17628,(0),null);
var inst_17631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17628,(1),null);
var state_17725__$1 = (function (){var statearr_17735 = state_17725;
(statearr_17735[(8)] = inst_17629);

return statearr_17735;
})();
if(cljs.core.truth_(inst_17631)){
var statearr_17736_20030 = state_17725__$1;
(statearr_17736_20030[(1)] = (22));

} else {
var statearr_17737_20031 = state_17725__$1;
(statearr_17737_20031[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (27))){
var inst_17670 = (state_17725[(9)]);
var inst_17675 = (state_17725[(10)]);
var inst_17578 = (state_17725[(11)]);
var inst_17668 = (state_17725[(12)]);
var inst_17675__$1 = cljs.core._nth(inst_17668,inst_17670);
var inst_17676 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17675__$1,inst_17578,done);
var state_17725__$1 = (function (){var statearr_17741 = state_17725;
(statearr_17741[(10)] = inst_17675__$1);

return statearr_17741;
})();
if(cljs.core.truth_(inst_17676)){
var statearr_17745_20032 = state_17725__$1;
(statearr_17745_20032[(1)] = (30));

} else {
var statearr_17749_20033 = state_17725__$1;
(statearr_17749_20033[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (1))){
var state_17725__$1 = state_17725;
var statearr_17750_20034 = state_17725__$1;
(statearr_17750_20034[(2)] = null);

(statearr_17750_20034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (24))){
var inst_17616 = (state_17725[(7)]);
var inst_17636 = (state_17725[(2)]);
var inst_17637 = cljs.core.next(inst_17616);
var inst_17593 = inst_17637;
var inst_17594 = null;
var inst_17595 = (0);
var inst_17596 = (0);
var state_17725__$1 = (function (){var statearr_17757 = state_17725;
(statearr_17757[(13)] = inst_17593);

(statearr_17757[(14)] = inst_17596);

(statearr_17757[(15)] = inst_17636);

(statearr_17757[(16)] = inst_17594);

(statearr_17757[(17)] = inst_17595);

return statearr_17757;
})();
var statearr_17758_20038 = state_17725__$1;
(statearr_17758_20038[(2)] = null);

(statearr_17758_20038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (39))){
var state_17725__$1 = state_17725;
var statearr_17762_20041 = state_17725__$1;
(statearr_17762_20041[(2)] = null);

(statearr_17762_20041[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (4))){
var inst_17578 = (state_17725[(11)]);
var inst_17578__$1 = (state_17725[(2)]);
var inst_17579 = (inst_17578__$1 == null);
var state_17725__$1 = (function (){var statearr_17763 = state_17725;
(statearr_17763[(11)] = inst_17578__$1);

return statearr_17763;
})();
if(cljs.core.truth_(inst_17579)){
var statearr_17764_20042 = state_17725__$1;
(statearr_17764_20042[(1)] = (5));

} else {
var statearr_17765_20043 = state_17725__$1;
(statearr_17765_20043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (15))){
var inst_17593 = (state_17725[(13)]);
var inst_17596 = (state_17725[(14)]);
var inst_17594 = (state_17725[(16)]);
var inst_17595 = (state_17725[(17)]);
var inst_17612 = (state_17725[(2)]);
var inst_17613 = (inst_17596 + (1));
var tmp17759 = inst_17593;
var tmp17760 = inst_17594;
var tmp17761 = inst_17595;
var inst_17593__$1 = tmp17759;
var inst_17594__$1 = tmp17760;
var inst_17595__$1 = tmp17761;
var inst_17596__$1 = inst_17613;
var state_17725__$1 = (function (){var statearr_17774 = state_17725;
(statearr_17774[(13)] = inst_17593__$1);

(statearr_17774[(14)] = inst_17596__$1);

(statearr_17774[(18)] = inst_17612);

(statearr_17774[(16)] = inst_17594__$1);

(statearr_17774[(17)] = inst_17595__$1);

return statearr_17774;
})();
var statearr_17775_20057 = state_17725__$1;
(statearr_17775_20057[(2)] = null);

(statearr_17775_20057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (21))){
var inst_17643 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17780_20058 = state_17725__$1;
(statearr_17780_20058[(2)] = inst_17643);

(statearr_17780_20058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (31))){
var inst_17675 = (state_17725[(10)]);
var inst_17679 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_17675);
var state_17725__$1 = state_17725;
var statearr_17785_20059 = state_17725__$1;
(statearr_17785_20059[(2)] = inst_17679);

(statearr_17785_20059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (32))){
var inst_17670 = (state_17725[(9)]);
var inst_17667 = (state_17725[(19)]);
var inst_17669 = (state_17725[(20)]);
var inst_17668 = (state_17725[(12)]);
var inst_17681 = (state_17725[(2)]);
var inst_17682 = (inst_17670 + (1));
var tmp17777 = inst_17667;
var tmp17778 = inst_17669;
var tmp17779 = inst_17668;
var inst_17667__$1 = tmp17777;
var inst_17668__$1 = tmp17779;
var inst_17669__$1 = tmp17778;
var inst_17670__$1 = inst_17682;
var state_17725__$1 = (function (){var statearr_17789 = state_17725;
(statearr_17789[(21)] = inst_17681);

(statearr_17789[(9)] = inst_17670__$1);

(statearr_17789[(19)] = inst_17667__$1);

(statearr_17789[(20)] = inst_17669__$1);

(statearr_17789[(12)] = inst_17668__$1);

return statearr_17789;
})();
var statearr_17790_20066 = state_17725__$1;
(statearr_17790_20066[(2)] = null);

(statearr_17790_20066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (40))){
var inst_17694 = (state_17725[(22)]);
var inst_17698 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_17694);
var state_17725__$1 = state_17725;
var statearr_17795_20069 = state_17725__$1;
(statearr_17795_20069[(2)] = inst_17698);

(statearr_17795_20069[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (33))){
var inst_17685 = (state_17725[(23)]);
var inst_17687 = cljs.core.chunked_seq_QMARK_(inst_17685);
var state_17725__$1 = state_17725;
if(inst_17687){
var statearr_17796_20070 = state_17725__$1;
(statearr_17796_20070[(1)] = (36));

} else {
var statearr_17797_20071 = state_17725__$1;
(statearr_17797_20071[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (13))){
var inst_17606 = (state_17725[(24)]);
var inst_17609 = cljs.core.async.close_BANG_(inst_17606);
var state_17725__$1 = state_17725;
var statearr_17798_20074 = state_17725__$1;
(statearr_17798_20074[(2)] = inst_17609);

(statearr_17798_20074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (22))){
var inst_17629 = (state_17725[(8)]);
var inst_17633 = cljs.core.async.close_BANG_(inst_17629);
var state_17725__$1 = state_17725;
var statearr_17803_20075 = state_17725__$1;
(statearr_17803_20075[(2)] = inst_17633);

(statearr_17803_20075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (36))){
var inst_17685 = (state_17725[(23)]);
var inst_17689 = cljs.core.chunk_first(inst_17685);
var inst_17690 = cljs.core.chunk_rest(inst_17685);
var inst_17691 = cljs.core.count(inst_17689);
var inst_17667 = inst_17690;
var inst_17668 = inst_17689;
var inst_17669 = inst_17691;
var inst_17670 = (0);
var state_17725__$1 = (function (){var statearr_17812 = state_17725;
(statearr_17812[(9)] = inst_17670);

(statearr_17812[(19)] = inst_17667);

(statearr_17812[(20)] = inst_17669);

(statearr_17812[(12)] = inst_17668);

return statearr_17812;
})();
var statearr_17813_20078 = state_17725__$1;
(statearr_17813_20078[(2)] = null);

(statearr_17813_20078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (41))){
var inst_17685 = (state_17725[(23)]);
var inst_17700 = (state_17725[(2)]);
var inst_17701 = cljs.core.next(inst_17685);
var inst_17667 = inst_17701;
var inst_17668 = null;
var inst_17669 = (0);
var inst_17670 = (0);
var state_17725__$1 = (function (){var statearr_17819 = state_17725;
(statearr_17819[(9)] = inst_17670);

(statearr_17819[(19)] = inst_17667);

(statearr_17819[(25)] = inst_17700);

(statearr_17819[(20)] = inst_17669);

(statearr_17819[(12)] = inst_17668);

return statearr_17819;
})();
var statearr_17820_20081 = state_17725__$1;
(statearr_17820_20081[(2)] = null);

(statearr_17820_20081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (43))){
var state_17725__$1 = state_17725;
var statearr_17824_20082 = state_17725__$1;
(statearr_17824_20082[(2)] = null);

(statearr_17824_20082[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (29))){
var inst_17709 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17825_20083 = state_17725__$1;
(statearr_17825_20083[(2)] = inst_17709);

(statearr_17825_20083[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (44))){
var inst_17718 = (state_17725[(2)]);
var state_17725__$1 = (function (){var statearr_17826 = state_17725;
(statearr_17826[(26)] = inst_17718);

return statearr_17826;
})();
var statearr_17827_20084 = state_17725__$1;
(statearr_17827_20084[(2)] = null);

(statearr_17827_20084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (6))){
var inst_17659 = (state_17725[(27)]);
var inst_17658 = cljs.core.deref(cs);
var inst_17659__$1 = cljs.core.keys(inst_17658);
var inst_17660 = cljs.core.count(inst_17659__$1);
var inst_17661 = cljs.core.reset_BANG_(dctr,inst_17660);
var inst_17666 = cljs.core.seq(inst_17659__$1);
var inst_17667 = inst_17666;
var inst_17668 = null;
var inst_17669 = (0);
var inst_17670 = (0);
var state_17725__$1 = (function (){var statearr_17835 = state_17725;
(statearr_17835[(9)] = inst_17670);

(statearr_17835[(27)] = inst_17659__$1);

(statearr_17835[(28)] = inst_17661);

(statearr_17835[(19)] = inst_17667);

(statearr_17835[(20)] = inst_17669);

(statearr_17835[(12)] = inst_17668);

return statearr_17835;
})();
var statearr_17838_20086 = state_17725__$1;
(statearr_17838_20086[(2)] = null);

(statearr_17838_20086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (28))){
var inst_17685 = (state_17725[(23)]);
var inst_17667 = (state_17725[(19)]);
var inst_17685__$1 = cljs.core.seq(inst_17667);
var state_17725__$1 = (function (){var statearr_17844 = state_17725;
(statearr_17844[(23)] = inst_17685__$1);

return statearr_17844;
})();
if(inst_17685__$1){
var statearr_17847_20087 = state_17725__$1;
(statearr_17847_20087[(1)] = (33));

} else {
var statearr_17848_20088 = state_17725__$1;
(statearr_17848_20088[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (25))){
var inst_17670 = (state_17725[(9)]);
var inst_17669 = (state_17725[(20)]);
var inst_17672 = (inst_17670 < inst_17669);
var inst_17673 = inst_17672;
var state_17725__$1 = state_17725;
if(cljs.core.truth_(inst_17673)){
var statearr_17850_20089 = state_17725__$1;
(statearr_17850_20089[(1)] = (27));

} else {
var statearr_17851_20090 = state_17725__$1;
(statearr_17851_20090[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (34))){
var state_17725__$1 = state_17725;
var statearr_17852_20091 = state_17725__$1;
(statearr_17852_20091[(2)] = null);

(statearr_17852_20091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (17))){
var state_17725__$1 = state_17725;
var statearr_17853_20093 = state_17725__$1;
(statearr_17853_20093[(2)] = null);

(statearr_17853_20093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (3))){
var inst_17723 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17725__$1,inst_17723);
} else {
if((state_val_17726 === (12))){
var inst_17654 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17869_20095 = state_17725__$1;
(statearr_17869_20095[(2)] = inst_17654);

(statearr_17869_20095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (2))){
var state_17725__$1 = state_17725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17725__$1,(4),ch);
} else {
if((state_val_17726 === (23))){
var state_17725__$1 = state_17725;
var statearr_17873_20098 = state_17725__$1;
(statearr_17873_20098[(2)] = null);

(statearr_17873_20098[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (35))){
var inst_17707 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17874_20099 = state_17725__$1;
(statearr_17874_20099[(2)] = inst_17707);

(statearr_17874_20099[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (19))){
var inst_17616 = (state_17725[(7)]);
var inst_17620 = cljs.core.chunk_first(inst_17616);
var inst_17621 = cljs.core.chunk_rest(inst_17616);
var inst_17622 = cljs.core.count(inst_17620);
var inst_17593 = inst_17621;
var inst_17594 = inst_17620;
var inst_17595 = inst_17622;
var inst_17596 = (0);
var state_17725__$1 = (function (){var statearr_17875 = state_17725;
(statearr_17875[(13)] = inst_17593);

(statearr_17875[(14)] = inst_17596);

(statearr_17875[(16)] = inst_17594);

(statearr_17875[(17)] = inst_17595);

return statearr_17875;
})();
var statearr_17876_20102 = state_17725__$1;
(statearr_17876_20102[(2)] = null);

(statearr_17876_20102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (11))){
var inst_17593 = (state_17725[(13)]);
var inst_17616 = (state_17725[(7)]);
var inst_17616__$1 = cljs.core.seq(inst_17593);
var state_17725__$1 = (function (){var statearr_17877 = state_17725;
(statearr_17877[(7)] = inst_17616__$1);

return statearr_17877;
})();
if(inst_17616__$1){
var statearr_17878_20103 = state_17725__$1;
(statearr_17878_20103[(1)] = (16));

} else {
var statearr_17879_20104 = state_17725__$1;
(statearr_17879_20104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (9))){
var inst_17656 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17880_20107 = state_17725__$1;
(statearr_17880_20107[(2)] = inst_17656);

(statearr_17880_20107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (5))){
var inst_17591 = cljs.core.deref(cs);
var inst_17592 = cljs.core.seq(inst_17591);
var inst_17593 = inst_17592;
var inst_17594 = null;
var inst_17595 = (0);
var inst_17596 = (0);
var state_17725__$1 = (function (){var statearr_17881 = state_17725;
(statearr_17881[(13)] = inst_17593);

(statearr_17881[(14)] = inst_17596);

(statearr_17881[(16)] = inst_17594);

(statearr_17881[(17)] = inst_17595);

return statearr_17881;
})();
var statearr_17882_20109 = state_17725__$1;
(statearr_17882_20109[(2)] = null);

(statearr_17882_20109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (14))){
var state_17725__$1 = state_17725;
var statearr_17883_20114 = state_17725__$1;
(statearr_17883_20114[(2)] = null);

(statearr_17883_20114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (45))){
var inst_17715 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17884_20118 = state_17725__$1;
(statearr_17884_20118[(2)] = inst_17715);

(statearr_17884_20118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (26))){
var inst_17659 = (state_17725[(27)]);
var inst_17711 = (state_17725[(2)]);
var inst_17712 = cljs.core.seq(inst_17659);
var state_17725__$1 = (function (){var statearr_17885 = state_17725;
(statearr_17885[(29)] = inst_17711);

return statearr_17885;
})();
if(inst_17712){
var statearr_17886_20123 = state_17725__$1;
(statearr_17886_20123[(1)] = (42));

} else {
var statearr_17887_20124 = state_17725__$1;
(statearr_17887_20124[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (16))){
var inst_17616 = (state_17725[(7)]);
var inst_17618 = cljs.core.chunked_seq_QMARK_(inst_17616);
var state_17725__$1 = state_17725;
if(inst_17618){
var statearr_17888_20125 = state_17725__$1;
(statearr_17888_20125[(1)] = (19));

} else {
var statearr_17889_20126 = state_17725__$1;
(statearr_17889_20126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (38))){
var inst_17704 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17890_20127 = state_17725__$1;
(statearr_17890_20127[(2)] = inst_17704);

(statearr_17890_20127[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (30))){
var state_17725__$1 = state_17725;
var statearr_17891_20128 = state_17725__$1;
(statearr_17891_20128[(2)] = null);

(statearr_17891_20128[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (10))){
var inst_17596 = (state_17725[(14)]);
var inst_17594 = (state_17725[(16)]);
var inst_17605 = cljs.core._nth(inst_17594,inst_17596);
var inst_17606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17605,(0),null);
var inst_17607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17605,(1),null);
var state_17725__$1 = (function (){var statearr_17895 = state_17725;
(statearr_17895[(24)] = inst_17606);

return statearr_17895;
})();
if(cljs.core.truth_(inst_17607)){
var statearr_17896_20129 = state_17725__$1;
(statearr_17896_20129[(1)] = (13));

} else {
var statearr_17897_20130 = state_17725__$1;
(statearr_17897_20130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (18))){
var inst_17652 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17898_20133 = state_17725__$1;
(statearr_17898_20133[(2)] = inst_17652);

(statearr_17898_20133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (42))){
var state_17725__$1 = state_17725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17725__$1,(45),dchan);
} else {
if((state_val_17726 === (37))){
var inst_17685 = (state_17725[(23)]);
var inst_17578 = (state_17725[(11)]);
var inst_17694 = (state_17725[(22)]);
var inst_17694__$1 = cljs.core.first(inst_17685);
var inst_17695 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17694__$1,inst_17578,done);
var state_17725__$1 = (function (){var statearr_17901 = state_17725;
(statearr_17901[(22)] = inst_17694__$1);

return statearr_17901;
})();
if(cljs.core.truth_(inst_17695)){
var statearr_17902_20136 = state_17725__$1;
(statearr_17902_20136[(1)] = (39));

} else {
var statearr_17903_20138 = state_17725__$1;
(statearr_17903_20138[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (8))){
var inst_17596 = (state_17725[(14)]);
var inst_17595 = (state_17725[(17)]);
var inst_17598 = (inst_17596 < inst_17595);
var inst_17599 = inst_17598;
var state_17725__$1 = state_17725;
if(cljs.core.truth_(inst_17599)){
var statearr_17907_20150 = state_17725__$1;
(statearr_17907_20150[(1)] = (10));

} else {
var statearr_17908_20151 = state_17725__$1;
(statearr_17908_20151[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14131__auto__ = null;
var cljs$core$async$mult_$_state_machine__14131__auto____0 = (function (){
var statearr_17911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17911[(0)] = cljs$core$async$mult_$_state_machine__14131__auto__);

(statearr_17911[(1)] = (1));

return statearr_17911;
});
var cljs$core$async$mult_$_state_machine__14131__auto____1 = (function (state_17725){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_17725);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e17912){var ex__14134__auto__ = e17912;
var statearr_17913_20157 = state_17725;
(statearr_17913_20157[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_17725[(4)]))){
var statearr_17914_20162 = state_17725;
(statearr_17914_20162[(1)] = cljs.core.first((state_17725[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20163 = state_17725;
state_17725 = G__20163;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14131__auto__ = function(state_17725){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14131__auto____1.call(this,state_17725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14131__auto____0;
cljs$core$async$mult_$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14131__auto____1;
return cljs$core$async$mult_$_state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_17915 = f__15813__auto__();
(statearr_17915[(6)] = c__15812__auto___20025);

return statearr_17915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17922 = arguments.length;
switch (G__17922) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20172 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20172(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20173 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20173(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20179 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20179(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20183 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20183(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20187 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20187(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20195 = arguments.length;
var i__5727__auto___20196 = (0);
while(true){
if((i__5727__auto___20196 < len__5726__auto___20195)){
args__5732__auto__.push((arguments[i__5727__auto___20196]));

var G__20198 = (i__5727__auto___20196 + (1));
i__5727__auto___20196 = G__20198;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17943){
var map__17944 = p__17943;
var map__17944__$1 = cljs.core.__destructure_map(map__17944);
var opts = map__17944__$1;
var statearr_17945_20205 = state;
(statearr_17945_20205[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17946_20207 = state;
(statearr_17946_20207[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17947_20208 = state;
(statearr_17947_20208[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17939){
var G__17940 = cljs.core.first(seq17939);
var seq17939__$1 = cljs.core.next(seq17939);
var G__17941 = cljs.core.first(seq17939__$1);
var seq17939__$2 = cljs.core.next(seq17939__$1);
var G__17942 = cljs.core.first(seq17939__$2);
var seq17939__$3 = cljs.core.next(seq17939__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17940,G__17941,G__17942,seq17939__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17956 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17957){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17957 = meta17957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17958,meta17957__$1){
var self__ = this;
var _17958__$1 = this;
return (new cljs.core.async.t_cljs$core$async17956(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17957__$1));
}));

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17958){
var self__ = this;
var _17958__$1 = this;
return self__.meta17957;
}));

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17956.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async17956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17957","meta17957",1408780704,null)], null);
}));

(cljs.core.async.t_cljs$core$async17956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17956");

(cljs.core.async.t_cljs$core$async17956.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17956.
 */
cljs.core.async.__GT_t_cljs$core$async17956 = (function cljs$core$async$__GT_t_cljs$core$async17956(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17957){
return (new cljs.core.async.t_cljs$core$async17956(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17957));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17956(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15812__auto___20266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_18047){
var state_val_18048 = (state_18047[(1)]);
if((state_val_18048 === (7))){
var inst_18001 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
if(cljs.core.truth_(inst_18001)){
var statearr_18050_20271 = state_18047__$1;
(statearr_18050_20271[(1)] = (8));

} else {
var statearr_18051_20272 = state_18047__$1;
(statearr_18051_20272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (20))){
var inst_17994 = (state_18047[(7)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18047__$1,(23),out,inst_17994);
} else {
if((state_val_18048 === (1))){
var inst_17977 = calc_state();
var inst_17978 = cljs.core.__destructure_map(inst_17977);
var inst_17979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17978,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17978,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17978,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17982 = inst_17977;
var state_18047__$1 = (function (){var statearr_18052 = state_18047;
(statearr_18052[(8)] = inst_17979);

(statearr_18052[(9)] = inst_17982);

(statearr_18052[(10)] = inst_17981);

(statearr_18052[(11)] = inst_17980);

return statearr_18052;
})();
var statearr_18054_20276 = state_18047__$1;
(statearr_18054_20276[(2)] = null);

(statearr_18054_20276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (24))){
var inst_17985 = (state_18047[(12)]);
var inst_17982 = inst_17985;
var state_18047__$1 = (function (){var statearr_18059 = state_18047;
(statearr_18059[(9)] = inst_17982);

return statearr_18059;
})();
var statearr_18060_20281 = state_18047__$1;
(statearr_18060_20281[(2)] = null);

(statearr_18060_20281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (4))){
var inst_17994 = (state_18047[(7)]);
var inst_17996 = (state_18047[(13)]);
var inst_17993 = (state_18047[(2)]);
var inst_17994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17993,(0),null);
var inst_17995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17993,(1),null);
var inst_17996__$1 = (inst_17994__$1 == null);
var state_18047__$1 = (function (){var statearr_18063 = state_18047;
(statearr_18063[(7)] = inst_17994__$1);

(statearr_18063[(13)] = inst_17996__$1);

(statearr_18063[(14)] = inst_17995);

return statearr_18063;
})();
if(cljs.core.truth_(inst_17996__$1)){
var statearr_18064_20282 = state_18047__$1;
(statearr_18064_20282[(1)] = (5));

} else {
var statearr_18065_20283 = state_18047__$1;
(statearr_18065_20283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (15))){
var inst_17986 = (state_18047[(15)]);
var inst_18018 = (state_18047[(16)]);
var inst_18018__$1 = cljs.core.empty_QMARK_(inst_17986);
var state_18047__$1 = (function (){var statearr_18067 = state_18047;
(statearr_18067[(16)] = inst_18018__$1);

return statearr_18067;
})();
if(inst_18018__$1){
var statearr_18068_20284 = state_18047__$1;
(statearr_18068_20284[(1)] = (17));

} else {
var statearr_18069_20285 = state_18047__$1;
(statearr_18069_20285[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (21))){
var inst_17985 = (state_18047[(12)]);
var inst_17982 = inst_17985;
var state_18047__$1 = (function (){var statearr_18075 = state_18047;
(statearr_18075[(9)] = inst_17982);

return statearr_18075;
})();
var statearr_18076_20286 = state_18047__$1;
(statearr_18076_20286[(2)] = null);

(statearr_18076_20286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (13))){
var inst_18008 = (state_18047[(2)]);
var inst_18009 = calc_state();
var inst_17982 = inst_18009;
var state_18047__$1 = (function (){var statearr_18078 = state_18047;
(statearr_18078[(17)] = inst_18008);

(statearr_18078[(9)] = inst_17982);

return statearr_18078;
})();
var statearr_18079_20287 = state_18047__$1;
(statearr_18079_20287[(2)] = null);

(statearr_18079_20287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (22))){
var inst_18038 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18080_20288 = state_18047__$1;
(statearr_18080_20288[(2)] = inst_18038);

(statearr_18080_20288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (6))){
var inst_17995 = (state_18047[(14)]);
var inst_17999 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17995,change);
var state_18047__$1 = state_18047;
var statearr_18081_20289 = state_18047__$1;
(statearr_18081_20289[(2)] = inst_17999);

(statearr_18081_20289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (25))){
var state_18047__$1 = state_18047;
var statearr_18091_20290 = state_18047__$1;
(statearr_18091_20290[(2)] = null);

(statearr_18091_20290[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (17))){
var inst_17995 = (state_18047[(14)]);
var inst_17987 = (state_18047[(18)]);
var inst_18020 = (inst_17987.cljs$core$IFn$_invoke$arity$1 ? inst_17987.cljs$core$IFn$_invoke$arity$1(inst_17995) : inst_17987.call(null, inst_17995));
var inst_18021 = cljs.core.not(inst_18020);
var state_18047__$1 = state_18047;
var statearr_18104_20291 = state_18047__$1;
(statearr_18104_20291[(2)] = inst_18021);

(statearr_18104_20291[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (3))){
var inst_18044 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18047__$1,inst_18044);
} else {
if((state_val_18048 === (12))){
var state_18047__$1 = state_18047;
var statearr_18117_20292 = state_18047__$1;
(statearr_18117_20292[(2)] = null);

(statearr_18117_20292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (2))){
var inst_17982 = (state_18047[(9)]);
var inst_17985 = (state_18047[(12)]);
var inst_17985__$1 = cljs.core.__destructure_map(inst_17982);
var inst_17986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17985__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17985__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17985__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18047__$1 = (function (){var statearr_18129 = state_18047;
(statearr_18129[(15)] = inst_17986);

(statearr_18129[(12)] = inst_17985__$1);

(statearr_18129[(18)] = inst_17987);

return statearr_18129;
})();
return cljs.core.async.ioc_alts_BANG_(state_18047__$1,(4),inst_17988);
} else {
if((state_val_18048 === (23))){
var inst_18029 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
if(cljs.core.truth_(inst_18029)){
var statearr_18153_20297 = state_18047__$1;
(statearr_18153_20297[(1)] = (24));

} else {
var statearr_18159_20298 = state_18047__$1;
(statearr_18159_20298[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (19))){
var inst_18024 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18163_20303 = state_18047__$1;
(statearr_18163_20303[(2)] = inst_18024);

(statearr_18163_20303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (11))){
var inst_17995 = (state_18047[(14)]);
var inst_18005 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17995);
var state_18047__$1 = state_18047;
var statearr_18177_20304 = state_18047__$1;
(statearr_18177_20304[(2)] = inst_18005);

(statearr_18177_20304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (9))){
var inst_18012 = (state_18047[(19)]);
var inst_17986 = (state_18047[(15)]);
var inst_17995 = (state_18047[(14)]);
var inst_18012__$1 = (inst_17986.cljs$core$IFn$_invoke$arity$1 ? inst_17986.cljs$core$IFn$_invoke$arity$1(inst_17995) : inst_17986.call(null, inst_17995));
var state_18047__$1 = (function (){var statearr_18180 = state_18047;
(statearr_18180[(19)] = inst_18012__$1);

return statearr_18180;
})();
if(cljs.core.truth_(inst_18012__$1)){
var statearr_18181_20310 = state_18047__$1;
(statearr_18181_20310[(1)] = (14));

} else {
var statearr_18182_20312 = state_18047__$1;
(statearr_18182_20312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (5))){
var inst_17996 = (state_18047[(13)]);
var state_18047__$1 = state_18047;
var statearr_18187_20313 = state_18047__$1;
(statearr_18187_20313[(2)] = inst_17996);

(statearr_18187_20313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (14))){
var inst_18012 = (state_18047[(19)]);
var state_18047__$1 = state_18047;
var statearr_18194_20314 = state_18047__$1;
(statearr_18194_20314[(2)] = inst_18012);

(statearr_18194_20314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (26))){
var inst_18034 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18203_20315 = state_18047__$1;
(statearr_18203_20315[(2)] = inst_18034);

(statearr_18203_20315[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (16))){
var inst_18026 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
if(cljs.core.truth_(inst_18026)){
var statearr_18212_20318 = state_18047__$1;
(statearr_18212_20318[(1)] = (20));

} else {
var statearr_18213_20319 = state_18047__$1;
(statearr_18213_20319[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (10))){
var inst_18040 = (state_18047[(2)]);
var state_18047__$1 = state_18047;
var statearr_18218_20320 = state_18047__$1;
(statearr_18218_20320[(2)] = inst_18040);

(statearr_18218_20320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (18))){
var inst_18018 = (state_18047[(16)]);
var state_18047__$1 = state_18047;
var statearr_18219_20321 = state_18047__$1;
(statearr_18219_20321[(2)] = inst_18018);

(statearr_18219_20321[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18048 === (8))){
var inst_17994 = (state_18047[(7)]);
var inst_18003 = (inst_17994 == null);
var state_18047__$1 = state_18047;
if(cljs.core.truth_(inst_18003)){
var statearr_18220_20323 = state_18047__$1;
(statearr_18220_20323[(1)] = (11));

} else {
var statearr_18221_20325 = state_18047__$1;
(statearr_18221_20325[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14131__auto__ = null;
var cljs$core$async$mix_$_state_machine__14131__auto____0 = (function (){
var statearr_18222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18222[(0)] = cljs$core$async$mix_$_state_machine__14131__auto__);

(statearr_18222[(1)] = (1));

return statearr_18222;
});
var cljs$core$async$mix_$_state_machine__14131__auto____1 = (function (state_18047){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_18047);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e18223){var ex__14134__auto__ = e18223;
var statearr_18224_20328 = state_18047;
(statearr_18224_20328[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_18047[(4)]))){
var statearr_18225_20329 = state_18047;
(statearr_18225_20329[(1)] = cljs.core.first((state_18047[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20330 = state_18047;
state_18047 = G__20330;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14131__auto__ = function(state_18047){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14131__auto____1.call(this,state_18047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14131__auto____0;
cljs$core$async$mix_$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14131__auto____1;
return cljs$core$async$mix_$_state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_18226 = f__15813__auto__();
(statearr_18226[(6)] = c__15812__auto___20266);

return statearr_18226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20332 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20332(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20333 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20333(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20335 = (function() {
var G__20336 = null;
var G__20336__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20336__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20336 = function(p,v){
switch(arguments.length){
case 1:
return G__20336__1.call(this,p);
case 2:
return G__20336__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20336.cljs$core$IFn$_invoke$arity$1 = G__20336__1;
G__20336.cljs$core$IFn$_invoke$arity$2 = G__20336__2;
return G__20336;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18248 = arguments.length;
switch (G__18248) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20335(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20335(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18282 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18283){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18283 = meta18283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18284,meta18283__$1){
var self__ = this;
var _18284__$1 = this;
return (new cljs.core.async.t_cljs$core$async18282(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18283__$1));
}));

(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18284){
var self__ = this;
var _18284__$1 = this;
return self__.meta18283;
}));

(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18283","meta18283",-1714215345,null)], null);
}));

(cljs.core.async.t_cljs$core$async18282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18282");

(cljs.core.async.t_cljs$core$async18282.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18282.
 */
cljs.core.async.__GT_t_cljs$core$async18282 = (function cljs$core$async$__GT_t_cljs$core$async18282(ch,topic_fn,buf_fn,mults,ensure_mult,meta18283){
return (new cljs.core.async.t_cljs$core$async18282(ch,topic_fn,buf_fn,mults,ensure_mult,meta18283));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18276 = arguments.length;
switch (G__18276) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18269_SHARP_){
if(cljs.core.truth_((p1__18269_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18269_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18269_SHARP_.call(null, topic)))){
return p1__18269_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18269_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18282(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15812__auto___20359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_18474){
var state_val_18475 = (state_18474[(1)]);
if((state_val_18475 === (7))){
var inst_18470 = (state_18474[(2)]);
var state_18474__$1 = state_18474;
var statearr_18480_20360 = state_18474__$1;
(statearr_18480_20360[(2)] = inst_18470);

(statearr_18480_20360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (20))){
var state_18474__$1 = state_18474;
var statearr_18482_20361 = state_18474__$1;
(statearr_18482_20361[(2)] = null);

(statearr_18482_20361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (1))){
var state_18474__$1 = state_18474;
var statearr_18483_20362 = state_18474__$1;
(statearr_18483_20362[(2)] = null);

(statearr_18483_20362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (24))){
var inst_18452 = (state_18474[(7)]);
var inst_18462 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18452);
var state_18474__$1 = state_18474;
var statearr_18484_20363 = state_18474__$1;
(statearr_18484_20363[(2)] = inst_18462);

(statearr_18484_20363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (4))){
var inst_18372 = (state_18474[(8)]);
var inst_18372__$1 = (state_18474[(2)]);
var inst_18373 = (inst_18372__$1 == null);
var state_18474__$1 = (function (){var statearr_18485 = state_18474;
(statearr_18485[(8)] = inst_18372__$1);

return statearr_18485;
})();
if(cljs.core.truth_(inst_18373)){
var statearr_18487_20365 = state_18474__$1;
(statearr_18487_20365[(1)] = (5));

} else {
var statearr_18491_20368 = state_18474__$1;
(statearr_18491_20368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (15))){
var inst_18445 = (state_18474[(2)]);
var state_18474__$1 = state_18474;
var statearr_18492_20370 = state_18474__$1;
(statearr_18492_20370[(2)] = inst_18445);

(statearr_18492_20370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (21))){
var inst_18467 = (state_18474[(2)]);
var state_18474__$1 = (function (){var statearr_18494 = state_18474;
(statearr_18494[(9)] = inst_18467);

return statearr_18494;
})();
var statearr_18495_20371 = state_18474__$1;
(statearr_18495_20371[(2)] = null);

(statearr_18495_20371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (13))){
var inst_18426 = (state_18474[(10)]);
var inst_18428 = cljs.core.chunked_seq_QMARK_(inst_18426);
var state_18474__$1 = state_18474;
if(inst_18428){
var statearr_18497_20372 = state_18474__$1;
(statearr_18497_20372[(1)] = (16));

} else {
var statearr_18499_20373 = state_18474__$1;
(statearr_18499_20373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (22))){
var inst_18459 = (state_18474[(2)]);
var state_18474__$1 = state_18474;
if(cljs.core.truth_(inst_18459)){
var statearr_18500_20378 = state_18474__$1;
(statearr_18500_20378[(1)] = (23));

} else {
var statearr_18501_20379 = state_18474__$1;
(statearr_18501_20379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (6))){
var inst_18452 = (state_18474[(7)]);
var inst_18372 = (state_18474[(8)]);
var inst_18455 = (state_18474[(11)]);
var inst_18452__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18372) : topic_fn.call(null, inst_18372));
var inst_18454 = cljs.core.deref(mults);
var inst_18455__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18454,inst_18452__$1);
var state_18474__$1 = (function (){var statearr_18503 = state_18474;
(statearr_18503[(7)] = inst_18452__$1);

(statearr_18503[(11)] = inst_18455__$1);

return statearr_18503;
})();
if(cljs.core.truth_(inst_18455__$1)){
var statearr_18504_20380 = state_18474__$1;
(statearr_18504_20380[(1)] = (19));

} else {
var statearr_18505_20381 = state_18474__$1;
(statearr_18505_20381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (25))){
var inst_18464 = (state_18474[(2)]);
var state_18474__$1 = state_18474;
var statearr_18506_20383 = state_18474__$1;
(statearr_18506_20383[(2)] = inst_18464);

(statearr_18506_20383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (17))){
var inst_18426 = (state_18474[(10)]);
var inst_18436 = cljs.core.first(inst_18426);
var inst_18437 = cljs.core.async.muxch_STAR_(inst_18436);
var inst_18438 = cljs.core.async.close_BANG_(inst_18437);
var inst_18439 = cljs.core.next(inst_18426);
var inst_18394 = inst_18439;
var inst_18395 = null;
var inst_18396 = (0);
var inst_18397 = (0);
var state_18474__$1 = (function (){var statearr_18508 = state_18474;
(statearr_18508[(12)] = inst_18396);

(statearr_18508[(13)] = inst_18438);

(statearr_18508[(14)] = inst_18395);

(statearr_18508[(15)] = inst_18397);

(statearr_18508[(16)] = inst_18394);

return statearr_18508;
})();
var statearr_18510_20384 = state_18474__$1;
(statearr_18510_20384[(2)] = null);

(statearr_18510_20384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (3))){
var inst_18472 = (state_18474[(2)]);
var state_18474__$1 = state_18474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18474__$1,inst_18472);
} else {
if((state_val_18475 === (12))){
var inst_18447 = (state_18474[(2)]);
var state_18474__$1 = state_18474;
var statearr_18512_20385 = state_18474__$1;
(statearr_18512_20385[(2)] = inst_18447);

(statearr_18512_20385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (2))){
var state_18474__$1 = state_18474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18474__$1,(4),ch);
} else {
if((state_val_18475 === (23))){
var state_18474__$1 = state_18474;
var statearr_18515_20386 = state_18474__$1;
(statearr_18515_20386[(2)] = null);

(statearr_18515_20386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (19))){
var inst_18372 = (state_18474[(8)]);
var inst_18455 = (state_18474[(11)]);
var inst_18457 = cljs.core.async.muxch_STAR_(inst_18455);
var state_18474__$1 = state_18474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18474__$1,(22),inst_18457,inst_18372);
} else {
if((state_val_18475 === (11))){
var inst_18426 = (state_18474[(10)]);
var inst_18394 = (state_18474[(16)]);
var inst_18426__$1 = cljs.core.seq(inst_18394);
var state_18474__$1 = (function (){var statearr_18519 = state_18474;
(statearr_18519[(10)] = inst_18426__$1);

return statearr_18519;
})();
if(inst_18426__$1){
var statearr_18520_20387 = state_18474__$1;
(statearr_18520_20387[(1)] = (13));

} else {
var statearr_18523_20388 = state_18474__$1;
(statearr_18523_20388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (9))){
var inst_18449 = (state_18474[(2)]);
var state_18474__$1 = state_18474;
var statearr_18526_20389 = state_18474__$1;
(statearr_18526_20389[(2)] = inst_18449);

(statearr_18526_20389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (5))){
var inst_18385 = cljs.core.deref(mults);
var inst_18386 = cljs.core.vals(inst_18385);
var inst_18387 = cljs.core.seq(inst_18386);
var inst_18394 = inst_18387;
var inst_18395 = null;
var inst_18396 = (0);
var inst_18397 = (0);
var state_18474__$1 = (function (){var statearr_18530 = state_18474;
(statearr_18530[(12)] = inst_18396);

(statearr_18530[(14)] = inst_18395);

(statearr_18530[(15)] = inst_18397);

(statearr_18530[(16)] = inst_18394);

return statearr_18530;
})();
var statearr_18531_20390 = state_18474__$1;
(statearr_18531_20390[(2)] = null);

(statearr_18531_20390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (14))){
var state_18474__$1 = state_18474;
var statearr_18536_20391 = state_18474__$1;
(statearr_18536_20391[(2)] = null);

(statearr_18536_20391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (16))){
var inst_18426 = (state_18474[(10)]);
var inst_18430 = cljs.core.chunk_first(inst_18426);
var inst_18431 = cljs.core.chunk_rest(inst_18426);
var inst_18432 = cljs.core.count(inst_18430);
var inst_18394 = inst_18431;
var inst_18395 = inst_18430;
var inst_18396 = inst_18432;
var inst_18397 = (0);
var state_18474__$1 = (function (){var statearr_18545 = state_18474;
(statearr_18545[(12)] = inst_18396);

(statearr_18545[(14)] = inst_18395);

(statearr_18545[(15)] = inst_18397);

(statearr_18545[(16)] = inst_18394);

return statearr_18545;
})();
var statearr_18550_20393 = state_18474__$1;
(statearr_18550_20393[(2)] = null);

(statearr_18550_20393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (10))){
var inst_18396 = (state_18474[(12)]);
var inst_18395 = (state_18474[(14)]);
var inst_18397 = (state_18474[(15)]);
var inst_18394 = (state_18474[(16)]);
var inst_18410 = cljs.core._nth(inst_18395,inst_18397);
var inst_18416 = cljs.core.async.muxch_STAR_(inst_18410);
var inst_18417 = cljs.core.async.close_BANG_(inst_18416);
var inst_18418 = (inst_18397 + (1));
var tmp18533 = inst_18396;
var tmp18534 = inst_18395;
var tmp18535 = inst_18394;
var inst_18394__$1 = tmp18535;
var inst_18395__$1 = tmp18534;
var inst_18396__$1 = tmp18533;
var inst_18397__$1 = inst_18418;
var state_18474__$1 = (function (){var statearr_18551 = state_18474;
(statearr_18551[(12)] = inst_18396__$1);

(statearr_18551[(17)] = inst_18417);

(statearr_18551[(14)] = inst_18395__$1);

(statearr_18551[(15)] = inst_18397__$1);

(statearr_18551[(16)] = inst_18394__$1);

return statearr_18551;
})();
var statearr_18552_20396 = state_18474__$1;
(statearr_18552_20396[(2)] = null);

(statearr_18552_20396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (18))){
var inst_18442 = (state_18474[(2)]);
var state_18474__$1 = state_18474;
var statearr_18553_20398 = state_18474__$1;
(statearr_18553_20398[(2)] = inst_18442);

(statearr_18553_20398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18475 === (8))){
var inst_18396 = (state_18474[(12)]);
var inst_18397 = (state_18474[(15)]);
var inst_18403 = (inst_18397 < inst_18396);
var inst_18404 = inst_18403;
var state_18474__$1 = state_18474;
if(cljs.core.truth_(inst_18404)){
var statearr_18559_20399 = state_18474__$1;
(statearr_18559_20399[(1)] = (10));

} else {
var statearr_18560_20400 = state_18474__$1;
(statearr_18560_20400[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_18571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18571[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_18571[(1)] = (1));

return statearr_18571;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_18474){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_18474);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e18576){var ex__14134__auto__ = e18576;
var statearr_18582_20404 = state_18474;
(statearr_18582_20404[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_18474[(4)]))){
var statearr_18586_20405 = state_18474;
(statearr_18586_20405[(1)] = cljs.core.first((state_18474[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20406 = state_18474;
state_18474 = G__20406;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_18474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_18474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_18587 = f__15813__auto__();
(statearr_18587[(6)] = c__15812__auto___20359);

return statearr_18587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18594 = arguments.length;
switch (G__18594) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18621 = arguments.length;
switch (G__18621) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18648 = arguments.length;
switch (G__18648) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15812__auto___20416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_18733){
var state_val_18734 = (state_18733[(1)]);
if((state_val_18734 === (7))){
var state_18733__$1 = state_18733;
var statearr_18740_20418 = state_18733__$1;
(statearr_18740_20418[(2)] = null);

(statearr_18740_20418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (1))){
var state_18733__$1 = state_18733;
var statearr_18741_20419 = state_18733__$1;
(statearr_18741_20419[(2)] = null);

(statearr_18741_20419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (4))){
var inst_18687 = (state_18733[(7)]);
var inst_18689 = (state_18733[(8)]);
var inst_18692 = (inst_18689 < inst_18687);
var state_18733__$1 = state_18733;
if(cljs.core.truth_(inst_18692)){
var statearr_18749_20420 = state_18733__$1;
(statearr_18749_20420[(1)] = (6));

} else {
var statearr_18752_20421 = state_18733__$1;
(statearr_18752_20421[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (15))){
var inst_18719 = (state_18733[(9)]);
var inst_18724 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18719);
var state_18733__$1 = state_18733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18733__$1,(17),out,inst_18724);
} else {
if((state_val_18734 === (13))){
var inst_18719 = (state_18733[(9)]);
var inst_18719__$1 = (state_18733[(2)]);
var inst_18720 = cljs.core.some(cljs.core.nil_QMARK_,inst_18719__$1);
var state_18733__$1 = (function (){var statearr_18768 = state_18733;
(statearr_18768[(9)] = inst_18719__$1);

return statearr_18768;
})();
if(cljs.core.truth_(inst_18720)){
var statearr_18769_20423 = state_18733__$1;
(statearr_18769_20423[(1)] = (14));

} else {
var statearr_18773_20424 = state_18733__$1;
(statearr_18773_20424[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (6))){
var state_18733__$1 = state_18733;
var statearr_18774_20425 = state_18733__$1;
(statearr_18774_20425[(2)] = null);

(statearr_18774_20425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (17))){
var inst_18726 = (state_18733[(2)]);
var state_18733__$1 = (function (){var statearr_18794 = state_18733;
(statearr_18794[(10)] = inst_18726);

return statearr_18794;
})();
var statearr_18796_20426 = state_18733__$1;
(statearr_18796_20426[(2)] = null);

(statearr_18796_20426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (3))){
var inst_18731 = (state_18733[(2)]);
var state_18733__$1 = state_18733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18733__$1,inst_18731);
} else {
if((state_val_18734 === (12))){
var _ = (function (){var statearr_18798 = state_18733;
(statearr_18798[(4)] = cljs.core.rest((state_18733[(4)])));

return statearr_18798;
})();
var state_18733__$1 = state_18733;
var ex18792 = (state_18733__$1[(2)]);
var statearr_18800_20427 = state_18733__$1;
(statearr_18800_20427[(5)] = ex18792);


if((ex18792 instanceof Object)){
var statearr_18805_20428 = state_18733__$1;
(statearr_18805_20428[(1)] = (11));

(statearr_18805_20428[(5)] = null);

} else {
throw ex18792;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (2))){
var inst_18685 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18687 = cnt;
var inst_18689 = (0);
var state_18733__$1 = (function (){var statearr_18806 = state_18733;
(statearr_18806[(11)] = inst_18685);

(statearr_18806[(7)] = inst_18687);

(statearr_18806[(8)] = inst_18689);

return statearr_18806;
})();
var statearr_18807_20429 = state_18733__$1;
(statearr_18807_20429[(2)] = null);

(statearr_18807_20429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (11))){
var inst_18697 = (state_18733[(2)]);
var inst_18699 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18733__$1 = (function (){var statearr_18808 = state_18733;
(statearr_18808[(12)] = inst_18697);

return statearr_18808;
})();
var statearr_18809_20430 = state_18733__$1;
(statearr_18809_20430[(2)] = inst_18699);

(statearr_18809_20430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (9))){
var inst_18689 = (state_18733[(8)]);
var _ = (function (){var statearr_18812 = state_18733;
(statearr_18812[(4)] = cljs.core.cons((12),(state_18733[(4)])));

return statearr_18812;
})();
var inst_18705 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18689) : chs__$1.call(null, inst_18689));
var inst_18706 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18689) : done.call(null, inst_18689));
var inst_18707 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18705,inst_18706);
var ___$1 = (function (){var statearr_18816 = state_18733;
(statearr_18816[(4)] = cljs.core.rest((state_18733[(4)])));

return statearr_18816;
})();
var state_18733__$1 = state_18733;
var statearr_18817_20431 = state_18733__$1;
(statearr_18817_20431[(2)] = inst_18707);

(statearr_18817_20431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (5))){
var inst_18717 = (state_18733[(2)]);
var state_18733__$1 = (function (){var statearr_18818 = state_18733;
(statearr_18818[(13)] = inst_18717);

return statearr_18818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18733__$1,(13),dchan);
} else {
if((state_val_18734 === (14))){
var inst_18722 = cljs.core.async.close_BANG_(out);
var state_18733__$1 = state_18733;
var statearr_18820_20432 = state_18733__$1;
(statearr_18820_20432[(2)] = inst_18722);

(statearr_18820_20432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (16))){
var inst_18729 = (state_18733[(2)]);
var state_18733__$1 = state_18733;
var statearr_18821_20434 = state_18733__$1;
(statearr_18821_20434[(2)] = inst_18729);

(statearr_18821_20434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (10))){
var inst_18689 = (state_18733[(8)]);
var inst_18710 = (state_18733[(2)]);
var inst_18711 = (inst_18689 + (1));
var inst_18689__$1 = inst_18711;
var state_18733__$1 = (function (){var statearr_18825 = state_18733;
(statearr_18825[(8)] = inst_18689__$1);

(statearr_18825[(14)] = inst_18710);

return statearr_18825;
})();
var statearr_18826_20435 = state_18733__$1;
(statearr_18826_20435[(2)] = null);

(statearr_18826_20435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (8))){
var inst_18715 = (state_18733[(2)]);
var state_18733__$1 = state_18733;
var statearr_18827_20436 = state_18733__$1;
(statearr_18827_20436[(2)] = inst_18715);

(statearr_18827_20436[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_18836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18836[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_18836[(1)] = (1));

return statearr_18836;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_18733){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_18733);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e18837){var ex__14134__auto__ = e18837;
var statearr_18838_20437 = state_18733;
(statearr_18838_20437[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_18733[(4)]))){
var statearr_18844_20438 = state_18733;
(statearr_18844_20438[(1)] = cljs.core.first((state_18733[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20439 = state_18733;
state_18733 = G__20439;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_18733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_18733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_18851 = f__15813__auto__();
(statearr_18851[(6)] = c__15812__auto___20416);

return statearr_18851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18855 = arguments.length;
switch (G__18855) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15812__auto___20441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_18892){
var state_val_18893 = (state_18892[(1)]);
if((state_val_18893 === (7))){
var inst_18868 = (state_18892[(7)]);
var inst_18869 = (state_18892[(8)]);
var inst_18868__$1 = (state_18892[(2)]);
var inst_18869__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18868__$1,(0),null);
var inst_18870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18868__$1,(1),null);
var inst_18871 = (inst_18869__$1 == null);
var state_18892__$1 = (function (){var statearr_18898 = state_18892;
(statearr_18898[(9)] = inst_18870);

(statearr_18898[(7)] = inst_18868__$1);

(statearr_18898[(8)] = inst_18869__$1);

return statearr_18898;
})();
if(cljs.core.truth_(inst_18871)){
var statearr_18899_20444 = state_18892__$1;
(statearr_18899_20444[(1)] = (8));

} else {
var statearr_18900_20445 = state_18892__$1;
(statearr_18900_20445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (1))){
var inst_18858 = cljs.core.vec(chs);
var inst_18859 = inst_18858;
var state_18892__$1 = (function (){var statearr_18901 = state_18892;
(statearr_18901[(10)] = inst_18859);

return statearr_18901;
})();
var statearr_18902_20446 = state_18892__$1;
(statearr_18902_20446[(2)] = null);

(statearr_18902_20446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (4))){
var inst_18859 = (state_18892[(10)]);
var state_18892__$1 = state_18892;
return cljs.core.async.ioc_alts_BANG_(state_18892__$1,(7),inst_18859);
} else {
if((state_val_18893 === (6))){
var inst_18886 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
var statearr_18903_20447 = state_18892__$1;
(statearr_18903_20447[(2)] = inst_18886);

(statearr_18903_20447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (3))){
var inst_18888 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18892__$1,inst_18888);
} else {
if((state_val_18893 === (2))){
var inst_18859 = (state_18892[(10)]);
var inst_18861 = cljs.core.count(inst_18859);
var inst_18862 = (inst_18861 > (0));
var state_18892__$1 = state_18892;
if(cljs.core.truth_(inst_18862)){
var statearr_18905_20448 = state_18892__$1;
(statearr_18905_20448[(1)] = (4));

} else {
var statearr_18906_20449 = state_18892__$1;
(statearr_18906_20449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (11))){
var inst_18859 = (state_18892[(10)]);
var inst_18879 = (state_18892[(2)]);
var tmp18904 = inst_18859;
var inst_18859__$1 = tmp18904;
var state_18892__$1 = (function (){var statearr_18907 = state_18892;
(statearr_18907[(10)] = inst_18859__$1);

(statearr_18907[(11)] = inst_18879);

return statearr_18907;
})();
var statearr_18908_20450 = state_18892__$1;
(statearr_18908_20450[(2)] = null);

(statearr_18908_20450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (9))){
var inst_18869 = (state_18892[(8)]);
var state_18892__$1 = state_18892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18892__$1,(11),out,inst_18869);
} else {
if((state_val_18893 === (5))){
var inst_18884 = cljs.core.async.close_BANG_(out);
var state_18892__$1 = state_18892;
var statearr_18911_20451 = state_18892__$1;
(statearr_18911_20451[(2)] = inst_18884);

(statearr_18911_20451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (10))){
var inst_18882 = (state_18892[(2)]);
var state_18892__$1 = state_18892;
var statearr_18912_20454 = state_18892__$1;
(statearr_18912_20454[(2)] = inst_18882);

(statearr_18912_20454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18893 === (8))){
var inst_18870 = (state_18892[(9)]);
var inst_18859 = (state_18892[(10)]);
var inst_18868 = (state_18892[(7)]);
var inst_18869 = (state_18892[(8)]);
var inst_18874 = (function (){var cs = inst_18859;
var vec__18864 = inst_18868;
var v = inst_18869;
var c = inst_18870;
return (function (p1__18853_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18853_SHARP_);
});
})();
var inst_18875 = cljs.core.filterv(inst_18874,inst_18859);
var inst_18859__$1 = inst_18875;
var state_18892__$1 = (function (){var statearr_18913 = state_18892;
(statearr_18913[(10)] = inst_18859__$1);

return statearr_18913;
})();
var statearr_18914_20466 = state_18892__$1;
(statearr_18914_20466[(2)] = null);

(statearr_18914_20466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_18916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18916[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_18916[(1)] = (1));

return statearr_18916;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_18892){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_18892);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e18917){var ex__14134__auto__ = e18917;
var statearr_18920_20470 = state_18892;
(statearr_18920_20470[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_18892[(4)]))){
var statearr_18921_20471 = state_18892;
(statearr_18921_20471[(1)] = cljs.core.first((state_18892[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20472 = state_18892;
state_18892 = G__20472;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_18892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_18892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_18926 = f__15813__auto__();
(statearr_18926[(6)] = c__15812__auto___20441);

return statearr_18926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18937 = arguments.length;
switch (G__18937) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15812__auto___20476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_18966){
var state_val_18967 = (state_18966[(1)]);
if((state_val_18967 === (7))){
var inst_18947 = (state_18966[(7)]);
var inst_18947__$1 = (state_18966[(2)]);
var inst_18948 = (inst_18947__$1 == null);
var inst_18949 = cljs.core.not(inst_18948);
var state_18966__$1 = (function (){var statearr_18969 = state_18966;
(statearr_18969[(7)] = inst_18947__$1);

return statearr_18969;
})();
if(inst_18949){
var statearr_18970_20480 = state_18966__$1;
(statearr_18970_20480[(1)] = (8));

} else {
var statearr_18976_20481 = state_18966__$1;
(statearr_18976_20481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (1))){
var inst_18942 = (0);
var state_18966__$1 = (function (){var statearr_18977 = state_18966;
(statearr_18977[(8)] = inst_18942);

return statearr_18977;
})();
var statearr_18978_20482 = state_18966__$1;
(statearr_18978_20482[(2)] = null);

(statearr_18978_20482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (4))){
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18966__$1,(7),ch);
} else {
if((state_val_18967 === (6))){
var inst_18961 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18981_20483 = state_18966__$1;
(statearr_18981_20483[(2)] = inst_18961);

(statearr_18981_20483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (3))){
var inst_18963 = (state_18966[(2)]);
var inst_18964 = cljs.core.async.close_BANG_(out);
var state_18966__$1 = (function (){var statearr_18982 = state_18966;
(statearr_18982[(9)] = inst_18963);

return statearr_18982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18966__$1,inst_18964);
} else {
if((state_val_18967 === (2))){
var inst_18942 = (state_18966[(8)]);
var inst_18944 = (inst_18942 < n);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18944)){
var statearr_18983_20484 = state_18966__$1;
(statearr_18983_20484[(1)] = (4));

} else {
var statearr_18984_20485 = state_18966__$1;
(statearr_18984_20485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (11))){
var inst_18942 = (state_18966[(8)]);
var inst_18952 = (state_18966[(2)]);
var inst_18953 = (inst_18942 + (1));
var inst_18942__$1 = inst_18953;
var state_18966__$1 = (function (){var statearr_18985 = state_18966;
(statearr_18985[(8)] = inst_18942__$1);

(statearr_18985[(10)] = inst_18952);

return statearr_18985;
})();
var statearr_18986_20490 = state_18966__$1;
(statearr_18986_20490[(2)] = null);

(statearr_18986_20490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (9))){
var state_18966__$1 = state_18966;
var statearr_18987_20491 = state_18966__$1;
(statearr_18987_20491[(2)] = null);

(statearr_18987_20491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (5))){
var state_18966__$1 = state_18966;
var statearr_18988_20492 = state_18966__$1;
(statearr_18988_20492[(2)] = null);

(statearr_18988_20492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (10))){
var inst_18958 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18989_20493 = state_18966__$1;
(statearr_18989_20493[(2)] = inst_18958);

(statearr_18989_20493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (8))){
var inst_18947 = (state_18966[(7)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18966__$1,(11),out,inst_18947);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_18997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18997[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_18997[(1)] = (1));

return statearr_18997;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_18966){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_18966);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e18998){var ex__14134__auto__ = e18998;
var statearr_19000_20498 = state_18966;
(statearr_19000_20498[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_18966[(4)]))){
var statearr_19001_20499 = state_18966;
(statearr_19001_20499[(1)] = cljs.core.first((state_18966[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20500 = state_18966;
state_18966 = G__20500;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_18966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_18966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_19002 = f__15813__auto__();
(statearr_19002[(6)] = c__15812__auto___20476);

return statearr_19002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19013 = (function (f,ch,meta19005,_,fn1,meta19014){
this.f = f;
this.ch = ch;
this.meta19005 = meta19005;
this._ = _;
this.fn1 = fn1;
this.meta19014 = meta19014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19015,meta19014__$1){
var self__ = this;
var _19015__$1 = this;
return (new cljs.core.async.t_cljs$core$async19013(self__.f,self__.ch,self__.meta19005,self__._,self__.fn1,meta19014__$1));
}));

(cljs.core.async.t_cljs$core$async19013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19015){
var self__ = this;
var _19015__$1 = this;
return self__.meta19014;
}));

(cljs.core.async.t_cljs$core$async19013.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19003_SHARP_){
var G__19020 = (((p1__19003_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19003_SHARP_) : self__.f.call(null, p1__19003_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19020) : f1.call(null, G__19020));
});
}));

(cljs.core.async.t_cljs$core$async19013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19005","meta19005",-209490926,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19004","cljs.core.async/t_cljs$core$async19004",746926202,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19014","meta19014",1096972451,null)], null);
}));

(cljs.core.async.t_cljs$core$async19013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19013");

(cljs.core.async.t_cljs$core$async19013.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19013.
 */
cljs.core.async.__GT_t_cljs$core$async19013 = (function cljs$core$async$__GT_t_cljs$core$async19013(f,ch,meta19005,_,fn1,meta19014){
return (new cljs.core.async.t_cljs$core$async19013(f,ch,meta19005,_,fn1,meta19014));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19004 = (function (f,ch,meta19005){
this.f = f;
this.ch = ch;
this.meta19005 = meta19005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19006,meta19005__$1){
var self__ = this;
var _19006__$1 = this;
return (new cljs.core.async.t_cljs$core$async19004(self__.f,self__.ch,meta19005__$1));
}));

(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19006){
var self__ = this;
var _19006__$1 = this;
return self__.meta19005;
}));

(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19013(self__.f,self__.ch,self__.meta19005,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19030 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19030) : self__.f.call(null, G__19030));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19005","meta19005",-209490926,null)], null);
}));

(cljs.core.async.t_cljs$core$async19004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19004");

(cljs.core.async.t_cljs$core$async19004.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19004.
 */
cljs.core.async.__GT_t_cljs$core$async19004 = (function cljs$core$async$__GT_t_cljs$core$async19004(f,ch,meta19005){
return (new cljs.core.async.t_cljs$core$async19004(f,ch,meta19005));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19004(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19031 = (function (f,ch,meta19032){
this.f = f;
this.ch = ch;
this.meta19032 = meta19032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19033,meta19032__$1){
var self__ = this;
var _19033__$1 = this;
return (new cljs.core.async.t_cljs$core$async19031(self__.f,self__.ch,meta19032__$1));
}));

(cljs.core.async.t_cljs$core$async19031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19033){
var self__ = this;
var _19033__$1 = this;
return self__.meta19032;
}));

(cljs.core.async.t_cljs$core$async19031.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19031.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19031.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19032","meta19032",-1514088538,null)], null);
}));

(cljs.core.async.t_cljs$core$async19031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19031");

(cljs.core.async.t_cljs$core$async19031.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19031.
 */
cljs.core.async.__GT_t_cljs$core$async19031 = (function cljs$core$async$__GT_t_cljs$core$async19031(f,ch,meta19032){
return (new cljs.core.async.t_cljs$core$async19031(f,ch,meta19032));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19031(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19040 = (function (p,ch,meta19041){
this.p = p;
this.ch = ch;
this.meta19041 = meta19041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19042,meta19041__$1){
var self__ = this;
var _19042__$1 = this;
return (new cljs.core.async.t_cljs$core$async19040(self__.p,self__.ch,meta19041__$1));
}));

(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19042){
var self__ = this;
var _19042__$1 = this;
return self__.meta19041;
}));

(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19041","meta19041",811292957,null)], null);
}));

(cljs.core.async.t_cljs$core$async19040.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19040");

(cljs.core.async.t_cljs$core$async19040.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19040");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19040.
 */
cljs.core.async.__GT_t_cljs$core$async19040 = (function cljs$core$async$__GT_t_cljs$core$async19040(p,ch,meta19041){
return (new cljs.core.async.t_cljs$core$async19040(p,ch,meta19041));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19040(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19049 = arguments.length;
switch (G__19049) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15812__auto___20526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_19081){
var state_val_19082 = (state_19081[(1)]);
if((state_val_19082 === (7))){
var inst_19077 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19091_20531 = state_19081__$1;
(statearr_19091_20531[(2)] = inst_19077);

(statearr_19091_20531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (1))){
var state_19081__$1 = state_19081;
var statearr_19092_20539 = state_19081__$1;
(statearr_19092_20539[(2)] = null);

(statearr_19092_20539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (4))){
var inst_19063 = (state_19081[(7)]);
var inst_19063__$1 = (state_19081[(2)]);
var inst_19064 = (inst_19063__$1 == null);
var state_19081__$1 = (function (){var statearr_19093 = state_19081;
(statearr_19093[(7)] = inst_19063__$1);

return statearr_19093;
})();
if(cljs.core.truth_(inst_19064)){
var statearr_19094_20540 = state_19081__$1;
(statearr_19094_20540[(1)] = (5));

} else {
var statearr_19095_20541 = state_19081__$1;
(statearr_19095_20541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (6))){
var inst_19063 = (state_19081[(7)]);
var inst_19068 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19063) : p.call(null, inst_19063));
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19068)){
var statearr_19099_20543 = state_19081__$1;
(statearr_19099_20543[(1)] = (8));

} else {
var statearr_19100_20544 = state_19081__$1;
(statearr_19100_20544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (3))){
var inst_19079 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19081__$1,inst_19079);
} else {
if((state_val_19082 === (2))){
var state_19081__$1 = state_19081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19081__$1,(4),ch);
} else {
if((state_val_19082 === (11))){
var inst_19071 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19102_20546 = state_19081__$1;
(statearr_19102_20546[(2)] = inst_19071);

(statearr_19102_20546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (9))){
var state_19081__$1 = state_19081;
var statearr_19103_20547 = state_19081__$1;
(statearr_19103_20547[(2)] = null);

(statearr_19103_20547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (5))){
var inst_19066 = cljs.core.async.close_BANG_(out);
var state_19081__$1 = state_19081;
var statearr_19104_20548 = state_19081__$1;
(statearr_19104_20548[(2)] = inst_19066);

(statearr_19104_20548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (10))){
var inst_19074 = (state_19081[(2)]);
var state_19081__$1 = (function (){var statearr_19105 = state_19081;
(statearr_19105[(8)] = inst_19074);

return statearr_19105;
})();
var statearr_19106_20549 = state_19081__$1;
(statearr_19106_20549[(2)] = null);

(statearr_19106_20549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (8))){
var inst_19063 = (state_19081[(7)]);
var state_19081__$1 = state_19081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19081__$1,(11),out,inst_19063);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_19110 = [null,null,null,null,null,null,null,null,null];
(statearr_19110[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_19110[(1)] = (1));

return statearr_19110;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_19081){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_19081);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e19111){var ex__14134__auto__ = e19111;
var statearr_19112_20557 = state_19081;
(statearr_19112_20557[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_19081[(4)]))){
var statearr_19113_20558 = state_19081;
(statearr_19113_20558[(1)] = cljs.core.first((state_19081[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20559 = state_19081;
state_19081 = G__20559;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_19081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_19081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_19123 = f__15813__auto__();
(statearr_19123[(6)] = c__15812__auto___20526);

return statearr_19123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19129 = arguments.length;
switch (G__19129) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15812__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_19196){
var state_val_19197 = (state_19196[(1)]);
if((state_val_19197 === (7))){
var inst_19192 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19198_20564 = state_19196__$1;
(statearr_19198_20564[(2)] = inst_19192);

(statearr_19198_20564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (20))){
var inst_19162 = (state_19196[(7)]);
var inst_19173 = (state_19196[(2)]);
var inst_19174 = cljs.core.next(inst_19162);
var inst_19148 = inst_19174;
var inst_19149 = null;
var inst_19150 = (0);
var inst_19151 = (0);
var state_19196__$1 = (function (){var statearr_19202 = state_19196;
(statearr_19202[(8)] = inst_19150);

(statearr_19202[(9)] = inst_19148);

(statearr_19202[(10)] = inst_19173);

(statearr_19202[(11)] = inst_19149);

(statearr_19202[(12)] = inst_19151);

return statearr_19202;
})();
var statearr_19203_20566 = state_19196__$1;
(statearr_19203_20566[(2)] = null);

(statearr_19203_20566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (1))){
var state_19196__$1 = state_19196;
var statearr_19204_20571 = state_19196__$1;
(statearr_19204_20571[(2)] = null);

(statearr_19204_20571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (4))){
var inst_19137 = (state_19196[(13)]);
var inst_19137__$1 = (state_19196[(2)]);
var inst_19138 = (inst_19137__$1 == null);
var state_19196__$1 = (function (){var statearr_19205 = state_19196;
(statearr_19205[(13)] = inst_19137__$1);

return statearr_19205;
})();
if(cljs.core.truth_(inst_19138)){
var statearr_19206_20572 = state_19196__$1;
(statearr_19206_20572[(1)] = (5));

} else {
var statearr_19207_20573 = state_19196__$1;
(statearr_19207_20573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (15))){
var state_19196__$1 = state_19196;
var statearr_19214_20574 = state_19196__$1;
(statearr_19214_20574[(2)] = null);

(statearr_19214_20574[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (21))){
var state_19196__$1 = state_19196;
var statearr_19215_20575 = state_19196__$1;
(statearr_19215_20575[(2)] = null);

(statearr_19215_20575[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (13))){
var inst_19150 = (state_19196[(8)]);
var inst_19148 = (state_19196[(9)]);
var inst_19149 = (state_19196[(11)]);
var inst_19151 = (state_19196[(12)]);
var inst_19158 = (state_19196[(2)]);
var inst_19159 = (inst_19151 + (1));
var tmp19208 = inst_19150;
var tmp19209 = inst_19148;
var tmp19210 = inst_19149;
var inst_19148__$1 = tmp19209;
var inst_19149__$1 = tmp19210;
var inst_19150__$1 = tmp19208;
var inst_19151__$1 = inst_19159;
var state_19196__$1 = (function (){var statearr_19218 = state_19196;
(statearr_19218[(8)] = inst_19150__$1);

(statearr_19218[(9)] = inst_19148__$1);

(statearr_19218[(11)] = inst_19149__$1);

(statearr_19218[(14)] = inst_19158);

(statearr_19218[(12)] = inst_19151__$1);

return statearr_19218;
})();
var statearr_19221_20576 = state_19196__$1;
(statearr_19221_20576[(2)] = null);

(statearr_19221_20576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (22))){
var state_19196__$1 = state_19196;
var statearr_19225_20577 = state_19196__$1;
(statearr_19225_20577[(2)] = null);

(statearr_19225_20577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (6))){
var inst_19137 = (state_19196[(13)]);
var inst_19146 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19137) : f.call(null, inst_19137));
var inst_19147 = cljs.core.seq(inst_19146);
var inst_19148 = inst_19147;
var inst_19149 = null;
var inst_19150 = (0);
var inst_19151 = (0);
var state_19196__$1 = (function (){var statearr_19233 = state_19196;
(statearr_19233[(8)] = inst_19150);

(statearr_19233[(9)] = inst_19148);

(statearr_19233[(11)] = inst_19149);

(statearr_19233[(12)] = inst_19151);

return statearr_19233;
})();
var statearr_19234_20578 = state_19196__$1;
(statearr_19234_20578[(2)] = null);

(statearr_19234_20578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (17))){
var inst_19162 = (state_19196[(7)]);
var inst_19166 = cljs.core.chunk_first(inst_19162);
var inst_19167 = cljs.core.chunk_rest(inst_19162);
var inst_19168 = cljs.core.count(inst_19166);
var inst_19148 = inst_19167;
var inst_19149 = inst_19166;
var inst_19150 = inst_19168;
var inst_19151 = (0);
var state_19196__$1 = (function (){var statearr_19247 = state_19196;
(statearr_19247[(8)] = inst_19150);

(statearr_19247[(9)] = inst_19148);

(statearr_19247[(11)] = inst_19149);

(statearr_19247[(12)] = inst_19151);

return statearr_19247;
})();
var statearr_19249_20588 = state_19196__$1;
(statearr_19249_20588[(2)] = null);

(statearr_19249_20588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (3))){
var inst_19194 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19196__$1,inst_19194);
} else {
if((state_val_19197 === (12))){
var inst_19182 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19255_20589 = state_19196__$1;
(statearr_19255_20589[(2)] = inst_19182);

(statearr_19255_20589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (2))){
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19196__$1,(4),in$);
} else {
if((state_val_19197 === (23))){
var inst_19190 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19262_20591 = state_19196__$1;
(statearr_19262_20591[(2)] = inst_19190);

(statearr_19262_20591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (19))){
var inst_19177 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19263_20593 = state_19196__$1;
(statearr_19263_20593[(2)] = inst_19177);

(statearr_19263_20593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (11))){
var inst_19162 = (state_19196[(7)]);
var inst_19148 = (state_19196[(9)]);
var inst_19162__$1 = cljs.core.seq(inst_19148);
var state_19196__$1 = (function (){var statearr_19266 = state_19196;
(statearr_19266[(7)] = inst_19162__$1);

return statearr_19266;
})();
if(inst_19162__$1){
var statearr_19267_20599 = state_19196__$1;
(statearr_19267_20599[(1)] = (14));

} else {
var statearr_19268_20603 = state_19196__$1;
(statearr_19268_20603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (9))){
var inst_19184 = (state_19196[(2)]);
var inst_19185 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19196__$1 = (function (){var statearr_19269 = state_19196;
(statearr_19269[(15)] = inst_19184);

return statearr_19269;
})();
if(cljs.core.truth_(inst_19185)){
var statearr_19271_20628 = state_19196__$1;
(statearr_19271_20628[(1)] = (21));

} else {
var statearr_19273_20629 = state_19196__$1;
(statearr_19273_20629[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (5))){
var inst_19140 = cljs.core.async.close_BANG_(out);
var state_19196__$1 = state_19196;
var statearr_19278_20633 = state_19196__$1;
(statearr_19278_20633[(2)] = inst_19140);

(statearr_19278_20633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (14))){
var inst_19162 = (state_19196[(7)]);
var inst_19164 = cljs.core.chunked_seq_QMARK_(inst_19162);
var state_19196__$1 = state_19196;
if(inst_19164){
var statearr_19284_20634 = state_19196__$1;
(statearr_19284_20634[(1)] = (17));

} else {
var statearr_19286_20635 = state_19196__$1;
(statearr_19286_20635[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (16))){
var inst_19180 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19287_20636 = state_19196__$1;
(statearr_19287_20636[(2)] = inst_19180);

(statearr_19287_20636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (10))){
var inst_19149 = (state_19196[(11)]);
var inst_19151 = (state_19196[(12)]);
var inst_19156 = cljs.core._nth(inst_19149,inst_19151);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19196__$1,(13),out,inst_19156);
} else {
if((state_val_19197 === (18))){
var inst_19162 = (state_19196[(7)]);
var inst_19171 = cljs.core.first(inst_19162);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19196__$1,(20),out,inst_19171);
} else {
if((state_val_19197 === (8))){
var inst_19150 = (state_19196[(8)]);
var inst_19151 = (state_19196[(12)]);
var inst_19153 = (inst_19151 < inst_19150);
var inst_19154 = inst_19153;
var state_19196__$1 = state_19196;
if(cljs.core.truth_(inst_19154)){
var statearr_19299_20638 = state_19196__$1;
(statearr_19299_20638[(1)] = (10));

} else {
var statearr_19301_20639 = state_19196__$1;
(statearr_19301_20639[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14131__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14131__auto____0 = (function (){
var statearr_19311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19311[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14131__auto__);

(statearr_19311[(1)] = (1));

return statearr_19311;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14131__auto____1 = (function (state_19196){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_19196);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e19315){var ex__14134__auto__ = e19315;
var statearr_19316_20648 = state_19196;
(statearr_19316_20648[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_19196[(4)]))){
var statearr_19317_20649 = state_19196;
(statearr_19317_20649[(1)] = cljs.core.first((state_19196[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20650 = state_19196;
state_19196 = G__20650;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14131__auto__ = function(state_19196){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14131__auto____1.call(this,state_19196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14131__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14131__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_19318 = f__15813__auto__();
(statearr_19318[(6)] = c__15812__auto__);

return statearr_19318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));

return c__15812__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19327 = arguments.length;
switch (G__19327) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19360 = arguments.length;
switch (G__19360) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19370 = arguments.length;
switch (G__19370) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15812__auto___20662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_19405){
var state_val_19406 = (state_19405[(1)]);
if((state_val_19406 === (7))){
var inst_19400 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19407_20663 = state_19405__$1;
(statearr_19407_20663[(2)] = inst_19400);

(statearr_19407_20663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (1))){
var inst_19378 = null;
var state_19405__$1 = (function (){var statearr_19408 = state_19405;
(statearr_19408[(7)] = inst_19378);

return statearr_19408;
})();
var statearr_19409_20664 = state_19405__$1;
(statearr_19409_20664[(2)] = null);

(statearr_19409_20664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (4))){
var inst_19381 = (state_19405[(8)]);
var inst_19381__$1 = (state_19405[(2)]);
var inst_19386 = (inst_19381__$1 == null);
var inst_19387 = cljs.core.not(inst_19386);
var state_19405__$1 = (function (){var statearr_19410 = state_19405;
(statearr_19410[(8)] = inst_19381__$1);

return statearr_19410;
})();
if(inst_19387){
var statearr_19411_20666 = state_19405__$1;
(statearr_19411_20666[(1)] = (5));

} else {
var statearr_19412_20667 = state_19405__$1;
(statearr_19412_20667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (6))){
var state_19405__$1 = state_19405;
var statearr_19413_20668 = state_19405__$1;
(statearr_19413_20668[(2)] = null);

(statearr_19413_20668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (3))){
var inst_19402 = (state_19405[(2)]);
var inst_19403 = cljs.core.async.close_BANG_(out);
var state_19405__$1 = (function (){var statearr_19418 = state_19405;
(statearr_19418[(9)] = inst_19402);

return statearr_19418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19405__$1,inst_19403);
} else {
if((state_val_19406 === (2))){
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19405__$1,(4),ch);
} else {
if((state_val_19406 === (11))){
var inst_19381 = (state_19405[(8)]);
var inst_19394 = (state_19405[(2)]);
var inst_19378 = inst_19381;
var state_19405__$1 = (function (){var statearr_19425 = state_19405;
(statearr_19425[(10)] = inst_19394);

(statearr_19425[(7)] = inst_19378);

return statearr_19425;
})();
var statearr_19426_20670 = state_19405__$1;
(statearr_19426_20670[(2)] = null);

(statearr_19426_20670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (9))){
var inst_19381 = (state_19405[(8)]);
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19405__$1,(11),out,inst_19381);
} else {
if((state_val_19406 === (5))){
var inst_19381 = (state_19405[(8)]);
var inst_19378 = (state_19405[(7)]);
var inst_19389 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19381,inst_19378);
var state_19405__$1 = state_19405;
if(inst_19389){
var statearr_19428_20673 = state_19405__$1;
(statearr_19428_20673[(1)] = (8));

} else {
var statearr_19429_20674 = state_19405__$1;
(statearr_19429_20674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (10))){
var inst_19397 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19431_20675 = state_19405__$1;
(statearr_19431_20675[(2)] = inst_19397);

(statearr_19431_20675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19406 === (8))){
var inst_19378 = (state_19405[(7)]);
var tmp19427 = inst_19378;
var inst_19378__$1 = tmp19427;
var state_19405__$1 = (function (){var statearr_19436 = state_19405;
(statearr_19436[(7)] = inst_19378__$1);

return statearr_19436;
})();
var statearr_19437_20676 = state_19405__$1;
(statearr_19437_20676[(2)] = null);

(statearr_19437_20676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_19438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19438[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_19438[(1)] = (1));

return statearr_19438;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_19405){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_19405);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e19439){var ex__14134__auto__ = e19439;
var statearr_19440_20678 = state_19405;
(statearr_19440_20678[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_19405[(4)]))){
var statearr_19441_20682 = state_19405;
(statearr_19441_20682[(1)] = cljs.core.first((state_19405[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20683 = state_19405;
state_19405 = G__20683;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_19405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_19405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_19444 = f__15813__auto__();
(statearr_19444[(6)] = c__15812__auto___20662);

return statearr_19444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19448 = arguments.length;
switch (G__19448) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15812__auto___20686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_19493){
var state_val_19494 = (state_19493[(1)]);
if((state_val_19494 === (7))){
var inst_19489 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19499_20687 = state_19493__$1;
(statearr_19499_20687[(2)] = inst_19489);

(statearr_19499_20687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (1))){
var inst_19455 = (new Array(n));
var inst_19456 = inst_19455;
var inst_19457 = (0);
var state_19493__$1 = (function (){var statearr_19501 = state_19493;
(statearr_19501[(7)] = inst_19456);

(statearr_19501[(8)] = inst_19457);

return statearr_19501;
})();
var statearr_19502_20691 = state_19493__$1;
(statearr_19502_20691[(2)] = null);

(statearr_19502_20691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (4))){
var inst_19461 = (state_19493[(9)]);
var inst_19461__$1 = (state_19493[(2)]);
var inst_19462 = (inst_19461__$1 == null);
var inst_19463 = cljs.core.not(inst_19462);
var state_19493__$1 = (function (){var statearr_19504 = state_19493;
(statearr_19504[(9)] = inst_19461__$1);

return statearr_19504;
})();
if(inst_19463){
var statearr_19505_20692 = state_19493__$1;
(statearr_19505_20692[(1)] = (5));

} else {
var statearr_19506_20693 = state_19493__$1;
(statearr_19506_20693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (15))){
var inst_19483 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19507_20694 = state_19493__$1;
(statearr_19507_20694[(2)] = inst_19483);

(statearr_19507_20694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (13))){
var state_19493__$1 = state_19493;
var statearr_19508_20695 = state_19493__$1;
(statearr_19508_20695[(2)] = null);

(statearr_19508_20695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (6))){
var inst_19457 = (state_19493[(8)]);
var inst_19479 = (inst_19457 > (0));
var state_19493__$1 = state_19493;
if(cljs.core.truth_(inst_19479)){
var statearr_19510_20696 = state_19493__$1;
(statearr_19510_20696[(1)] = (12));

} else {
var statearr_19511_20699 = state_19493__$1;
(statearr_19511_20699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (3))){
var inst_19491 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19493__$1,inst_19491);
} else {
if((state_val_19494 === (12))){
var inst_19456 = (state_19493[(7)]);
var inst_19481 = cljs.core.vec(inst_19456);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19493__$1,(15),out,inst_19481);
} else {
if((state_val_19494 === (2))){
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19493__$1,(4),ch);
} else {
if((state_val_19494 === (11))){
var inst_19473 = (state_19493[(2)]);
var inst_19474 = (new Array(n));
var inst_19456 = inst_19474;
var inst_19457 = (0);
var state_19493__$1 = (function (){var statearr_19517 = state_19493;
(statearr_19517[(10)] = inst_19473);

(statearr_19517[(7)] = inst_19456);

(statearr_19517[(8)] = inst_19457);

return statearr_19517;
})();
var statearr_19518_20700 = state_19493__$1;
(statearr_19518_20700[(2)] = null);

(statearr_19518_20700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (9))){
var inst_19456 = (state_19493[(7)]);
var inst_19471 = cljs.core.vec(inst_19456);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19493__$1,(11),out,inst_19471);
} else {
if((state_val_19494 === (5))){
var inst_19466 = (state_19493[(11)]);
var inst_19456 = (state_19493[(7)]);
var inst_19457 = (state_19493[(8)]);
var inst_19461 = (state_19493[(9)]);
var inst_19465 = (inst_19456[inst_19457] = inst_19461);
var inst_19466__$1 = (inst_19457 + (1));
var inst_19467 = (inst_19466__$1 < n);
var state_19493__$1 = (function (){var statearr_19519 = state_19493;
(statearr_19519[(12)] = inst_19465);

(statearr_19519[(11)] = inst_19466__$1);

return statearr_19519;
})();
if(cljs.core.truth_(inst_19467)){
var statearr_19520_20701 = state_19493__$1;
(statearr_19520_20701[(1)] = (8));

} else {
var statearr_19521_20702 = state_19493__$1;
(statearr_19521_20702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (14))){
var inst_19486 = (state_19493[(2)]);
var inst_19487 = cljs.core.async.close_BANG_(out);
var state_19493__$1 = (function (){var statearr_19523 = state_19493;
(statearr_19523[(13)] = inst_19486);

return statearr_19523;
})();
var statearr_19524_20710 = state_19493__$1;
(statearr_19524_20710[(2)] = inst_19487);

(statearr_19524_20710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (10))){
var inst_19477 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19525_20711 = state_19493__$1;
(statearr_19525_20711[(2)] = inst_19477);

(statearr_19525_20711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (8))){
var inst_19466 = (state_19493[(11)]);
var inst_19456 = (state_19493[(7)]);
var tmp19522 = inst_19456;
var inst_19456__$1 = tmp19522;
var inst_19457 = inst_19466;
var state_19493__$1 = (function (){var statearr_19526 = state_19493;
(statearr_19526[(7)] = inst_19456__$1);

(statearr_19526[(8)] = inst_19457);

return statearr_19526;
})();
var statearr_19527_20712 = state_19493__$1;
(statearr_19527_20712[(2)] = null);

(statearr_19527_20712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_19528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19528[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_19528[(1)] = (1));

return statearr_19528;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_19493){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_19493);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e19529){var ex__14134__auto__ = e19529;
var statearr_19530_20713 = state_19493;
(statearr_19530_20713[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_19493[(4)]))){
var statearr_19531_20714 = state_19493;
(statearr_19531_20714[(1)] = cljs.core.first((state_19493[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20718 = state_19493;
state_19493 = G__20718;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_19493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_19493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_19532 = f__15813__auto__();
(statearr_19532[(6)] = c__15812__auto___20686);

return statearr_19532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19535 = arguments.length;
switch (G__19535) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15812__auto___20724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15813__auto__ = (function (){var switch__14130__auto__ = (function (state_19582){
var state_val_19583 = (state_19582[(1)]);
if((state_val_19583 === (7))){
var inst_19578 = (state_19582[(2)]);
var state_19582__$1 = state_19582;
var statearr_19585_20725 = state_19582__$1;
(statearr_19585_20725[(2)] = inst_19578);

(statearr_19585_20725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (1))){
var inst_19537 = [];
var inst_19539 = inst_19537;
var inst_19540 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19582__$1 = (function (){var statearr_19588 = state_19582;
(statearr_19588[(7)] = inst_19539);

(statearr_19588[(8)] = inst_19540);

return statearr_19588;
})();
var statearr_19589_20726 = state_19582__$1;
(statearr_19589_20726[(2)] = null);

(statearr_19589_20726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (4))){
var inst_19543 = (state_19582[(9)]);
var inst_19543__$1 = (state_19582[(2)]);
var inst_19544 = (inst_19543__$1 == null);
var inst_19545 = cljs.core.not(inst_19544);
var state_19582__$1 = (function (){var statearr_19591 = state_19582;
(statearr_19591[(9)] = inst_19543__$1);

return statearr_19591;
})();
if(inst_19545){
var statearr_19592_20730 = state_19582__$1;
(statearr_19592_20730[(1)] = (5));

} else {
var statearr_19594_20731 = state_19582__$1;
(statearr_19594_20731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (15))){
var inst_19539 = (state_19582[(7)]);
var inst_19570 = cljs.core.vec(inst_19539);
var state_19582__$1 = state_19582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19582__$1,(18),out,inst_19570);
} else {
if((state_val_19583 === (13))){
var inst_19565 = (state_19582[(2)]);
var state_19582__$1 = state_19582;
var statearr_19595_20732 = state_19582__$1;
(statearr_19595_20732[(2)] = inst_19565);

(statearr_19595_20732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (6))){
var inst_19539 = (state_19582[(7)]);
var inst_19567 = inst_19539.length;
var inst_19568 = (inst_19567 > (0));
var state_19582__$1 = state_19582;
if(cljs.core.truth_(inst_19568)){
var statearr_19597_20734 = state_19582__$1;
(statearr_19597_20734[(1)] = (15));

} else {
var statearr_19601_20735 = state_19582__$1;
(statearr_19601_20735[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (17))){
var inst_19575 = (state_19582[(2)]);
var inst_19576 = cljs.core.async.close_BANG_(out);
var state_19582__$1 = (function (){var statearr_19603 = state_19582;
(statearr_19603[(10)] = inst_19575);

return statearr_19603;
})();
var statearr_19604_20737 = state_19582__$1;
(statearr_19604_20737[(2)] = inst_19576);

(statearr_19604_20737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (3))){
var inst_19580 = (state_19582[(2)]);
var state_19582__$1 = state_19582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19582__$1,inst_19580);
} else {
if((state_val_19583 === (12))){
var inst_19539 = (state_19582[(7)]);
var inst_19558 = cljs.core.vec(inst_19539);
var state_19582__$1 = state_19582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19582__$1,(14),out,inst_19558);
} else {
if((state_val_19583 === (2))){
var state_19582__$1 = state_19582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19582__$1,(4),ch);
} else {
if((state_val_19583 === (11))){
var inst_19539 = (state_19582[(7)]);
var inst_19543 = (state_19582[(9)]);
var inst_19547 = (state_19582[(11)]);
var inst_19555 = inst_19539.push(inst_19543);
var tmp19609 = inst_19539;
var inst_19539__$1 = tmp19609;
var inst_19540 = inst_19547;
var state_19582__$1 = (function (){var statearr_19610 = state_19582;
(statearr_19610[(7)] = inst_19539__$1);

(statearr_19610[(12)] = inst_19555);

(statearr_19610[(8)] = inst_19540);

return statearr_19610;
})();
var statearr_19614_20739 = state_19582__$1;
(statearr_19614_20739[(2)] = null);

(statearr_19614_20739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (9))){
var inst_19540 = (state_19582[(8)]);
var inst_19551 = cljs.core.keyword_identical_QMARK_(inst_19540,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19582__$1 = state_19582;
var statearr_19615_20740 = state_19582__$1;
(statearr_19615_20740[(2)] = inst_19551);

(statearr_19615_20740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (5))){
var inst_19548 = (state_19582[(13)]);
var inst_19543 = (state_19582[(9)]);
var inst_19540 = (state_19582[(8)]);
var inst_19547 = (state_19582[(11)]);
var inst_19547__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19543) : f.call(null, inst_19543));
var inst_19548__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19547__$1,inst_19540);
var state_19582__$1 = (function (){var statearr_19619 = state_19582;
(statearr_19619[(13)] = inst_19548__$1);

(statearr_19619[(11)] = inst_19547__$1);

return statearr_19619;
})();
if(inst_19548__$1){
var statearr_19620_20742 = state_19582__$1;
(statearr_19620_20742[(1)] = (8));

} else {
var statearr_19621_20743 = state_19582__$1;
(statearr_19621_20743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (14))){
var inst_19543 = (state_19582[(9)]);
var inst_19547 = (state_19582[(11)]);
var inst_19560 = (state_19582[(2)]);
var inst_19561 = [];
var inst_19562 = inst_19561.push(inst_19543);
var inst_19539 = inst_19561;
var inst_19540 = inst_19547;
var state_19582__$1 = (function (){var statearr_19630 = state_19582;
(statearr_19630[(7)] = inst_19539);

(statearr_19630[(8)] = inst_19540);

(statearr_19630[(14)] = inst_19560);

(statearr_19630[(15)] = inst_19562);

return statearr_19630;
})();
var statearr_19632_20748 = state_19582__$1;
(statearr_19632_20748[(2)] = null);

(statearr_19632_20748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (16))){
var state_19582__$1 = state_19582;
var statearr_19633_20753 = state_19582__$1;
(statearr_19633_20753[(2)] = null);

(statearr_19633_20753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (10))){
var inst_19553 = (state_19582[(2)]);
var state_19582__$1 = state_19582;
if(cljs.core.truth_(inst_19553)){
var statearr_19637_20754 = state_19582__$1;
(statearr_19637_20754[(1)] = (11));

} else {
var statearr_19638_20755 = state_19582__$1;
(statearr_19638_20755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (18))){
var inst_19572 = (state_19582[(2)]);
var state_19582__$1 = state_19582;
var statearr_19639_20756 = state_19582__$1;
(statearr_19639_20756[(2)] = inst_19572);

(statearr_19639_20756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19583 === (8))){
var inst_19548 = (state_19582[(13)]);
var state_19582__$1 = state_19582;
var statearr_19640_20757 = state_19582__$1;
(statearr_19640_20757[(2)] = inst_19548);

(statearr_19640_20757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14131__auto__ = null;
var cljs$core$async$state_machine__14131__auto____0 = (function (){
var statearr_19644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19644[(0)] = cljs$core$async$state_machine__14131__auto__);

(statearr_19644[(1)] = (1));

return statearr_19644;
});
var cljs$core$async$state_machine__14131__auto____1 = (function (state_19582){
while(true){
var ret_value__14132__auto__ = (function (){try{while(true){
var result__14133__auto__ = switch__14130__auto__(state_19582);
if(cljs.core.keyword_identical_QMARK_(result__14133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14133__auto__;
}
break;
}
}catch (e19645){var ex__14134__auto__ = e19645;
var statearr_19646_20768 = state_19582;
(statearr_19646_20768[(2)] = ex__14134__auto__);


if(cljs.core.seq((state_19582[(4)]))){
var statearr_19651_20769 = state_19582;
(statearr_19651_20769[(1)] = cljs.core.first((state_19582[(4)])));

} else {
throw ex__14134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20770 = state_19582;
state_19582 = G__20770;
continue;
} else {
return ret_value__14132__auto__;
}
break;
}
});
cljs$core$async$state_machine__14131__auto__ = function(state_19582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14131__auto____1.call(this,state_19582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14131__auto____0;
cljs$core$async$state_machine__14131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14131__auto____1;
return cljs$core$async$state_machine__14131__auto__;
})()
})();
var state__15814__auto__ = (function (){var statearr_19652 = f__15813__auto__();
(statearr_19652[(6)] = c__15812__auto___20724);

return statearr_19652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15814__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
