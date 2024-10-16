goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16063 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16063(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16064 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16064(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14415 = coll;
var G__14416 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14415,G__14416) : shadow.dom.lazy_native_coll_seq.call(null, G__14415,G__14416));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14459 = arguments.length;
switch (G__14459) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14470 = arguments.length;
switch (G__14470) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14490 = arguments.length;
switch (G__14490) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14508 = arguments.length;
switch (G__14508) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14525 = arguments.length;
switch (G__14525) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14547 = arguments.length;
switch (G__14547) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e14571){if((e14571 instanceof Object)){
var e = e14571;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14571;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14583 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14584 = null;
var count__14585 = (0);
var i__14586 = (0);
while(true){
if((i__14586 < count__14585)){
var el = chunk__14584.cljs$core$IIndexed$_nth$arity$2(null, i__14586);
var handler_16090__$1 = ((function (seq__14583,chunk__14584,count__14585,i__14586,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__14583,chunk__14584,count__14585,i__14586,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16090__$1);


var G__16091 = seq__14583;
var G__16092 = chunk__14584;
var G__16093 = count__14585;
var G__16094 = (i__14586 + (1));
seq__14583 = G__16091;
chunk__14584 = G__16092;
count__14585 = G__16093;
i__14586 = G__16094;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14583);
if(temp__5804__auto__){
var seq__14583__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14583__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14583__$1);
var G__16095 = cljs.core.chunk_rest(seq__14583__$1);
var G__16096 = c__5525__auto__;
var G__16097 = cljs.core.count(c__5525__auto__);
var G__16098 = (0);
seq__14583 = G__16095;
chunk__14584 = G__16096;
count__14585 = G__16097;
i__14586 = G__16098;
continue;
} else {
var el = cljs.core.first(seq__14583__$1);
var handler_16099__$1 = ((function (seq__14583,chunk__14584,count__14585,i__14586,el,seq__14583__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__14583,chunk__14584,count__14585,i__14586,el,seq__14583__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16099__$1);


var G__16103 = cljs.core.next(seq__14583__$1);
var G__16104 = null;
var G__16105 = (0);
var G__16106 = (0);
seq__14583 = G__16103;
chunk__14584 = G__16104;
count__14585 = G__16105;
i__14586 = G__16106;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14611 = arguments.length;
switch (G__14611) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14643 = cljs.core.seq(events);
var chunk__14644 = null;
var count__14645 = (0);
var i__14646 = (0);
while(true){
if((i__14646 < count__14645)){
var vec__14665 = chunk__14644.cljs$core$IIndexed$_nth$arity$2(null, i__14646);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14665,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16108 = seq__14643;
var G__16109 = chunk__14644;
var G__16110 = count__14645;
var G__16111 = (i__14646 + (1));
seq__14643 = G__16108;
chunk__14644 = G__16109;
count__14645 = G__16110;
i__14646 = G__16111;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14643);
if(temp__5804__auto__){
var seq__14643__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14643__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14643__$1);
var G__16114 = cljs.core.chunk_rest(seq__14643__$1);
var G__16115 = c__5525__auto__;
var G__16116 = cljs.core.count(c__5525__auto__);
var G__16117 = (0);
seq__14643 = G__16114;
chunk__14644 = G__16115;
count__14645 = G__16116;
i__14646 = G__16117;
continue;
} else {
var vec__14676 = cljs.core.first(seq__14643__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14676,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14676,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16122 = cljs.core.next(seq__14643__$1);
var G__16123 = null;
var G__16124 = (0);
var G__16125 = (0);
seq__14643 = G__16122;
chunk__14644 = G__16123;
count__14645 = G__16124;
i__14646 = G__16125;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14681 = cljs.core.seq(styles);
var chunk__14682 = null;
var count__14683 = (0);
var i__14684 = (0);
while(true){
if((i__14684 < count__14683)){
var vec__14714 = chunk__14682.cljs$core$IIndexed$_nth$arity$2(null, i__14684);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14714,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16128 = seq__14681;
var G__16129 = chunk__14682;
var G__16130 = count__14683;
var G__16131 = (i__14684 + (1));
seq__14681 = G__16128;
chunk__14682 = G__16129;
count__14683 = G__16130;
i__14684 = G__16131;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14681);
if(temp__5804__auto__){
var seq__14681__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14681__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14681__$1);
var G__16133 = cljs.core.chunk_rest(seq__14681__$1);
var G__16134 = c__5525__auto__;
var G__16135 = cljs.core.count(c__5525__auto__);
var G__16136 = (0);
seq__14681 = G__16133;
chunk__14682 = G__16134;
count__14683 = G__16135;
i__14684 = G__16136;
continue;
} else {
var vec__14721 = cljs.core.first(seq__14681__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14721,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16137 = cljs.core.next(seq__14681__$1);
var G__16138 = null;
var G__16139 = (0);
var G__16140 = (0);
seq__14681 = G__16137;
chunk__14682 = G__16138;
count__14683 = G__16139;
i__14684 = G__16140;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14740_16141 = key;
var G__14740_16142__$1 = (((G__14740_16141 instanceof cljs.core.Keyword))?G__14740_16141.fqn:null);
switch (G__14740_16142__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16145 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16145,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16145,"aria-");
}
})())){
el.setAttribute(ks_16145,value);
} else {
(el[ks_16145] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14790){
var map__14796 = p__14790;
var map__14796__$1 = cljs.core.__destructure_map(map__14796);
var props = map__14796__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14796__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14815 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14838 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14838,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14838;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14845 = arguments.length;
switch (G__14845) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14858){
var vec__14859 = p__14858;
var seq__14860 = cljs.core.seq(vec__14859);
var first__14861 = cljs.core.first(seq__14860);
var seq__14860__$1 = cljs.core.next(seq__14860);
var nn = first__14861;
var first__14861__$1 = cljs.core.first(seq__14860__$1);
var seq__14860__$2 = cljs.core.next(seq__14860__$1);
var np = first__14861__$1;
var nc = seq__14860__$2;
var node = vec__14859;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14871 = nn;
var G__14872 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14871,G__14872) : create_fn.call(null, G__14871,G__14872));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14873 = nn;
var G__14874 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14873,G__14874) : create_fn.call(null, G__14873,G__14874));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14876 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14876,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14876,(1),null);
var seq__14879_16161 = cljs.core.seq(node_children);
var chunk__14880_16162 = null;
var count__14881_16163 = (0);
var i__14882_16164 = (0);
while(true){
if((i__14882_16164 < count__14881_16163)){
var child_struct_16165 = chunk__14880_16162.cljs$core$IIndexed$_nth$arity$2(null, i__14882_16164);
var children_16166 = shadow.dom.dom_node(child_struct_16165);
if(cljs.core.seq_QMARK_(children_16166)){
var seq__14938_16167 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16166));
var chunk__14940_16168 = null;
var count__14941_16169 = (0);
var i__14942_16170 = (0);
while(true){
if((i__14942_16170 < count__14941_16169)){
var child_16172 = chunk__14940_16168.cljs$core$IIndexed$_nth$arity$2(null, i__14942_16170);
if(cljs.core.truth_(child_16172)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16172);


var G__16174 = seq__14938_16167;
var G__16175 = chunk__14940_16168;
var G__16176 = count__14941_16169;
var G__16177 = (i__14942_16170 + (1));
seq__14938_16167 = G__16174;
chunk__14940_16168 = G__16175;
count__14941_16169 = G__16176;
i__14942_16170 = G__16177;
continue;
} else {
var G__16178 = seq__14938_16167;
var G__16179 = chunk__14940_16168;
var G__16180 = count__14941_16169;
var G__16181 = (i__14942_16170 + (1));
seq__14938_16167 = G__16178;
chunk__14940_16168 = G__16179;
count__14941_16169 = G__16180;
i__14942_16170 = G__16181;
continue;
}
} else {
var temp__5804__auto___16185 = cljs.core.seq(seq__14938_16167);
if(temp__5804__auto___16185){
var seq__14938_16186__$1 = temp__5804__auto___16185;
if(cljs.core.chunked_seq_QMARK_(seq__14938_16186__$1)){
var c__5525__auto___16187 = cljs.core.chunk_first(seq__14938_16186__$1);
var G__16188 = cljs.core.chunk_rest(seq__14938_16186__$1);
var G__16189 = c__5525__auto___16187;
var G__16190 = cljs.core.count(c__5525__auto___16187);
var G__16191 = (0);
seq__14938_16167 = G__16188;
chunk__14940_16168 = G__16189;
count__14941_16169 = G__16190;
i__14942_16170 = G__16191;
continue;
} else {
var child_16192 = cljs.core.first(seq__14938_16186__$1);
if(cljs.core.truth_(child_16192)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16192);


var G__16193 = cljs.core.next(seq__14938_16186__$1);
var G__16194 = null;
var G__16195 = (0);
var G__16196 = (0);
seq__14938_16167 = G__16193;
chunk__14940_16168 = G__16194;
count__14941_16169 = G__16195;
i__14942_16170 = G__16196;
continue;
} else {
var G__16197 = cljs.core.next(seq__14938_16186__$1);
var G__16198 = null;
var G__16199 = (0);
var G__16200 = (0);
seq__14938_16167 = G__16197;
chunk__14940_16168 = G__16198;
count__14941_16169 = G__16199;
i__14942_16170 = G__16200;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16166);
}


var G__16202 = seq__14879_16161;
var G__16203 = chunk__14880_16162;
var G__16204 = count__14881_16163;
var G__16205 = (i__14882_16164 + (1));
seq__14879_16161 = G__16202;
chunk__14880_16162 = G__16203;
count__14881_16163 = G__16204;
i__14882_16164 = G__16205;
continue;
} else {
var temp__5804__auto___16207 = cljs.core.seq(seq__14879_16161);
if(temp__5804__auto___16207){
var seq__14879_16208__$1 = temp__5804__auto___16207;
if(cljs.core.chunked_seq_QMARK_(seq__14879_16208__$1)){
var c__5525__auto___16209 = cljs.core.chunk_first(seq__14879_16208__$1);
var G__16210 = cljs.core.chunk_rest(seq__14879_16208__$1);
var G__16211 = c__5525__auto___16209;
var G__16212 = cljs.core.count(c__5525__auto___16209);
var G__16213 = (0);
seq__14879_16161 = G__16210;
chunk__14880_16162 = G__16211;
count__14881_16163 = G__16212;
i__14882_16164 = G__16213;
continue;
} else {
var child_struct_16215 = cljs.core.first(seq__14879_16208__$1);
var children_16216 = shadow.dom.dom_node(child_struct_16215);
if(cljs.core.seq_QMARK_(children_16216)){
var seq__14967_16217 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16216));
var chunk__14969_16218 = null;
var count__14970_16219 = (0);
var i__14971_16220 = (0);
while(true){
if((i__14971_16220 < count__14970_16219)){
var child_16222 = chunk__14969_16218.cljs$core$IIndexed$_nth$arity$2(null, i__14971_16220);
if(cljs.core.truth_(child_16222)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16222);


var G__16224 = seq__14967_16217;
var G__16225 = chunk__14969_16218;
var G__16226 = count__14970_16219;
var G__16227 = (i__14971_16220 + (1));
seq__14967_16217 = G__16224;
chunk__14969_16218 = G__16225;
count__14970_16219 = G__16226;
i__14971_16220 = G__16227;
continue;
} else {
var G__16228 = seq__14967_16217;
var G__16229 = chunk__14969_16218;
var G__16230 = count__14970_16219;
var G__16231 = (i__14971_16220 + (1));
seq__14967_16217 = G__16228;
chunk__14969_16218 = G__16229;
count__14970_16219 = G__16230;
i__14971_16220 = G__16231;
continue;
}
} else {
var temp__5804__auto___16232__$1 = cljs.core.seq(seq__14967_16217);
if(temp__5804__auto___16232__$1){
var seq__14967_16233__$1 = temp__5804__auto___16232__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14967_16233__$1)){
var c__5525__auto___16234 = cljs.core.chunk_first(seq__14967_16233__$1);
var G__16235 = cljs.core.chunk_rest(seq__14967_16233__$1);
var G__16236 = c__5525__auto___16234;
var G__16237 = cljs.core.count(c__5525__auto___16234);
var G__16238 = (0);
seq__14967_16217 = G__16235;
chunk__14969_16218 = G__16236;
count__14970_16219 = G__16237;
i__14971_16220 = G__16238;
continue;
} else {
var child_16239 = cljs.core.first(seq__14967_16233__$1);
if(cljs.core.truth_(child_16239)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16239);


var G__16243 = cljs.core.next(seq__14967_16233__$1);
var G__16244 = null;
var G__16245 = (0);
var G__16246 = (0);
seq__14967_16217 = G__16243;
chunk__14969_16218 = G__16244;
count__14970_16219 = G__16245;
i__14971_16220 = G__16246;
continue;
} else {
var G__16248 = cljs.core.next(seq__14967_16233__$1);
var G__16249 = null;
var G__16250 = (0);
var G__16251 = (0);
seq__14967_16217 = G__16248;
chunk__14969_16218 = G__16249;
count__14970_16219 = G__16250;
i__14971_16220 = G__16251;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16216);
}


var G__16253 = cljs.core.next(seq__14879_16208__$1);
var G__16254 = null;
var G__16255 = (0);
var G__16256 = (0);
seq__14879_16161 = G__16253;
chunk__14880_16162 = G__16254;
count__14881_16163 = G__16255;
i__14882_16164 = G__16256;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15007 = cljs.core.seq(node);
var chunk__15009 = null;
var count__15010 = (0);
var i__15011 = (0);
while(true){
if((i__15011 < count__15010)){
var n = chunk__15009.cljs$core$IIndexed$_nth$arity$2(null, i__15011);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16264 = seq__15007;
var G__16265 = chunk__15009;
var G__16266 = count__15010;
var G__16267 = (i__15011 + (1));
seq__15007 = G__16264;
chunk__15009 = G__16265;
count__15010 = G__16266;
i__15011 = G__16267;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15007);
if(temp__5804__auto__){
var seq__15007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15007__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15007__$1);
var G__16270 = cljs.core.chunk_rest(seq__15007__$1);
var G__16271 = c__5525__auto__;
var G__16272 = cljs.core.count(c__5525__auto__);
var G__16273 = (0);
seq__15007 = G__16270;
chunk__15009 = G__16271;
count__15010 = G__16272;
i__15011 = G__16273;
continue;
} else {
var n = cljs.core.first(seq__15007__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16274 = cljs.core.next(seq__15007__$1);
var G__16275 = null;
var G__16276 = (0);
var G__16277 = (0);
seq__15007 = G__16274;
chunk__15009 = G__16275;
count__15010 = G__16276;
i__15011 = G__16277;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15030 = arguments.length;
switch (G__15030) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15039 = arguments.length;
switch (G__15039) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15064 = arguments.length;
switch (G__15064) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16302 = arguments.length;
var i__5727__auto___16303 = (0);
while(true){
if((i__5727__auto___16303 < len__5726__auto___16302)){
args__5732__auto__.push((arguments[i__5727__auto___16303]));

var G__16307 = (i__5727__auto___16303 + (1));
i__5727__auto___16303 = G__16307;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15143_16322 = cljs.core.seq(nodes);
var chunk__15144_16323 = null;
var count__15145_16324 = (0);
var i__15146_16325 = (0);
while(true){
if((i__15146_16325 < count__15145_16324)){
var node_16326 = chunk__15144_16323.cljs$core$IIndexed$_nth$arity$2(null, i__15146_16325);
fragment.appendChild(shadow.dom._to_dom(node_16326));


var G__16331 = seq__15143_16322;
var G__16332 = chunk__15144_16323;
var G__16333 = count__15145_16324;
var G__16334 = (i__15146_16325 + (1));
seq__15143_16322 = G__16331;
chunk__15144_16323 = G__16332;
count__15145_16324 = G__16333;
i__15146_16325 = G__16334;
continue;
} else {
var temp__5804__auto___16339 = cljs.core.seq(seq__15143_16322);
if(temp__5804__auto___16339){
var seq__15143_16340__$1 = temp__5804__auto___16339;
if(cljs.core.chunked_seq_QMARK_(seq__15143_16340__$1)){
var c__5525__auto___16342 = cljs.core.chunk_first(seq__15143_16340__$1);
var G__16347 = cljs.core.chunk_rest(seq__15143_16340__$1);
var G__16348 = c__5525__auto___16342;
var G__16349 = cljs.core.count(c__5525__auto___16342);
var G__16350 = (0);
seq__15143_16322 = G__16347;
chunk__15144_16323 = G__16348;
count__15145_16324 = G__16349;
i__15146_16325 = G__16350;
continue;
} else {
var node_16353 = cljs.core.first(seq__15143_16340__$1);
fragment.appendChild(shadow.dom._to_dom(node_16353));


var G__16359 = cljs.core.next(seq__15143_16340__$1);
var G__16360 = null;
var G__16361 = (0);
var G__16362 = (0);
seq__15143_16322 = G__16359;
chunk__15144_16323 = G__16360;
count__15145_16324 = G__16361;
i__15146_16325 = G__16362;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15110){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15110));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15199_16369 = cljs.core.seq(scripts);
var chunk__15200_16370 = null;
var count__15201_16371 = (0);
var i__15202_16372 = (0);
while(true){
if((i__15202_16372 < count__15201_16371)){
var vec__15215_16373 = chunk__15200_16370.cljs$core$IIndexed$_nth$arity$2(null, i__15202_16372);
var script_tag_16374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15215_16373,(0),null);
var script_body_16375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15215_16373,(1),null);
eval(script_body_16375);


var G__16376 = seq__15199_16369;
var G__16377 = chunk__15200_16370;
var G__16378 = count__15201_16371;
var G__16379 = (i__15202_16372 + (1));
seq__15199_16369 = G__16376;
chunk__15200_16370 = G__16377;
count__15201_16371 = G__16378;
i__15202_16372 = G__16379;
continue;
} else {
var temp__5804__auto___16380 = cljs.core.seq(seq__15199_16369);
if(temp__5804__auto___16380){
var seq__15199_16382__$1 = temp__5804__auto___16380;
if(cljs.core.chunked_seq_QMARK_(seq__15199_16382__$1)){
var c__5525__auto___16385 = cljs.core.chunk_first(seq__15199_16382__$1);
var G__16387 = cljs.core.chunk_rest(seq__15199_16382__$1);
var G__16388 = c__5525__auto___16385;
var G__16389 = cljs.core.count(c__5525__auto___16385);
var G__16390 = (0);
seq__15199_16369 = G__16387;
chunk__15200_16370 = G__16388;
count__15201_16371 = G__16389;
i__15202_16372 = G__16390;
continue;
} else {
var vec__15224_16391 = cljs.core.first(seq__15199_16382__$1);
var script_tag_16392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224_16391,(0),null);
var script_body_16393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15224_16391,(1),null);
eval(script_body_16393);


var G__16394 = cljs.core.next(seq__15199_16382__$1);
var G__16395 = null;
var G__16396 = (0);
var G__16397 = (0);
seq__15199_16369 = G__16394;
chunk__15200_16370 = G__16395;
count__15201_16371 = G__16396;
i__15202_16372 = G__16397;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15229){
var vec__15231 = p__15229;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15262 = arguments.length;
switch (G__15262) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15358 = cljs.core.seq(style_keys);
var chunk__15359 = null;
var count__15360 = (0);
var i__15361 = (0);
while(true){
if((i__15361 < count__15360)){
var it = chunk__15359.cljs$core$IIndexed$_nth$arity$2(null, i__15361);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16438 = seq__15358;
var G__16439 = chunk__15359;
var G__16440 = count__15360;
var G__16441 = (i__15361 + (1));
seq__15358 = G__16438;
chunk__15359 = G__16439;
count__15360 = G__16440;
i__15361 = G__16441;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15358);
if(temp__5804__auto__){
var seq__15358__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15358__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15358__$1);
var G__16442 = cljs.core.chunk_rest(seq__15358__$1);
var G__16443 = c__5525__auto__;
var G__16444 = cljs.core.count(c__5525__auto__);
var G__16445 = (0);
seq__15358 = G__16442;
chunk__15359 = G__16443;
count__15360 = G__16444;
i__15361 = G__16445;
continue;
} else {
var it = cljs.core.first(seq__15358__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16446 = cljs.core.next(seq__15358__$1);
var G__16447 = null;
var G__16448 = (0);
var G__16449 = (0);
seq__15358 = G__16446;
chunk__15359 = G__16447;
count__15360 = G__16448;
i__15361 = G__16449;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15382,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15403 = k15382;
var G__15403__$1 = (((G__15403 instanceof cljs.core.Keyword))?G__15403.fqn:null);
switch (G__15403__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15382,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15415){
var vec__15416 = p__15415;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15416,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15416,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15381){
var self__ = this;
var G__15381__$1 = this;
return (new cljs.core.RecordIter((0),G__15381__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15383,other15384){
var self__ = this;
var this15383__$1 = this;
return (((!((other15384 == null)))) && ((((this15383__$1.constructor === other15384.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15383__$1.x,other15384.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15383__$1.y,other15384.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15383__$1.__extmap,other15384.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15382){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15499 = k15382;
var G__15499__$1 = (((G__15499 instanceof cljs.core.Keyword))?G__15499.fqn:null);
switch (G__15499__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15382);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15381){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15508 = cljs.core.keyword_identical_QMARK_;
var expr__15509 = k__5309__auto__;
if(cljs.core.truth_((pred__15508.cljs$core$IFn$_invoke$arity$2 ? pred__15508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15509) : pred__15508.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__15509)))){
return (new shadow.dom.Coordinate(G__15381,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15508.cljs$core$IFn$_invoke$arity$2 ? pred__15508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15509) : pred__15508.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__15509)))){
return (new shadow.dom.Coordinate(self__.x,G__15381,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15381),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15381){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15381,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15388){
var extmap__5342__auto__ = (function (){var G__15561 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15388,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15388)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15561);
} else {
return G__15561;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15388),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15388),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15591,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15610 = k15591;
var G__15610__$1 = (((G__15610 instanceof cljs.core.Keyword))?G__15610.fqn:null);
switch (G__15610__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15591,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15620){
var vec__15626 = p__15620;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15626,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15626,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15590){
var self__ = this;
var G__15590__$1 = this;
return (new cljs.core.RecordIter((0),G__15590__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15592,other15593){
var self__ = this;
var this15592__$1 = this;
return (((!((other15593 == null)))) && ((((this15592__$1.constructor === other15593.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15592__$1.w,other15593.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15592__$1.h,other15593.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15592__$1.__extmap,other15593.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15591){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15663 = k15591;
var G__15663__$1 = (((G__15663 instanceof cljs.core.Keyword))?G__15663.fqn:null);
switch (G__15663__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15591);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15590){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15672 = cljs.core.keyword_identical_QMARK_;
var expr__15673 = k__5309__auto__;
if(cljs.core.truth_((pred__15672.cljs$core$IFn$_invoke$arity$2 ? pred__15672.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15673) : pred__15672.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__15673)))){
return (new shadow.dom.Size(G__15590,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15672.cljs$core$IFn$_invoke$arity$2 ? pred__15672.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15673) : pred__15672.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__15673)))){
return (new shadow.dom.Size(self__.w,G__15590,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15590),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15590){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15590,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15594){
var extmap__5342__auto__ = (function (){var G__15697 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15594,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15594)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15697);
} else {
return G__15697;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15594),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15594),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16493 = (i + (1));
var G__16494 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16493;
ret = G__16494;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15721){
var vec__15722 = p__15721;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15722,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15728 = arguments.length;
switch (G__15728) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16503 = ps;
var G__16504 = (i + (1));
el__$1 = G__16503;
i = G__16504;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15777 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15787_16510 = cljs.core.seq(props);
var chunk__15788_16511 = null;
var count__15789_16512 = (0);
var i__15790_16513 = (0);
while(true){
if((i__15790_16513 < count__15789_16512)){
var vec__15824_16514 = chunk__15788_16511.cljs$core$IIndexed$_nth$arity$2(null, i__15790_16513);
var k_16515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15824_16514,(0),null);
var v_16516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15824_16514,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16515);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16515),v_16516);


var G__16518 = seq__15787_16510;
var G__16519 = chunk__15788_16511;
var G__16520 = count__15789_16512;
var G__16521 = (i__15790_16513 + (1));
seq__15787_16510 = G__16518;
chunk__15788_16511 = G__16519;
count__15789_16512 = G__16520;
i__15790_16513 = G__16521;
continue;
} else {
var temp__5804__auto___16522 = cljs.core.seq(seq__15787_16510);
if(temp__5804__auto___16522){
var seq__15787_16526__$1 = temp__5804__auto___16522;
if(cljs.core.chunked_seq_QMARK_(seq__15787_16526__$1)){
var c__5525__auto___16527 = cljs.core.chunk_first(seq__15787_16526__$1);
var G__16528 = cljs.core.chunk_rest(seq__15787_16526__$1);
var G__16529 = c__5525__auto___16527;
var G__16530 = cljs.core.count(c__5525__auto___16527);
var G__16531 = (0);
seq__15787_16510 = G__16528;
chunk__15788_16511 = G__16529;
count__15789_16512 = G__16530;
i__15790_16513 = G__16531;
continue;
} else {
var vec__15850_16532 = cljs.core.first(seq__15787_16526__$1);
var k_16533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15850_16532,(0),null);
var v_16534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15850_16532,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16533);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16533),v_16534);


var G__16537 = cljs.core.next(seq__15787_16526__$1);
var G__16538 = null;
var G__16539 = (0);
var G__16540 = (0);
seq__15787_16510 = G__16537;
chunk__15788_16511 = G__16538;
count__15789_16512 = G__16539;
i__15790_16513 = G__16540;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15864 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15864,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15864,(1),null);
var seq__15869_16546 = cljs.core.seq(node_children);
var chunk__15871_16547 = null;
var count__15872_16548 = (0);
var i__15873_16549 = (0);
while(true){
if((i__15873_16549 < count__15872_16548)){
var child_struct_16550 = chunk__15871_16547.cljs$core$IIndexed$_nth$arity$2(null, i__15873_16549);
if((!((child_struct_16550 == null)))){
if(typeof child_struct_16550 === 'string'){
var text_16551 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16551),child_struct_16550].join(''));
} else {
var children_16553 = shadow.dom.svg_node(child_struct_16550);
if(cljs.core.seq_QMARK_(children_16553)){
var seq__15953_16554 = cljs.core.seq(children_16553);
var chunk__15955_16555 = null;
var count__15956_16556 = (0);
var i__15957_16557 = (0);
while(true){
if((i__15957_16557 < count__15956_16556)){
var child_16558 = chunk__15955_16555.cljs$core$IIndexed$_nth$arity$2(null, i__15957_16557);
if(cljs.core.truth_(child_16558)){
node.appendChild(child_16558);


var G__16559 = seq__15953_16554;
var G__16560 = chunk__15955_16555;
var G__16561 = count__15956_16556;
var G__16562 = (i__15957_16557 + (1));
seq__15953_16554 = G__16559;
chunk__15955_16555 = G__16560;
count__15956_16556 = G__16561;
i__15957_16557 = G__16562;
continue;
} else {
var G__16563 = seq__15953_16554;
var G__16564 = chunk__15955_16555;
var G__16565 = count__15956_16556;
var G__16566 = (i__15957_16557 + (1));
seq__15953_16554 = G__16563;
chunk__15955_16555 = G__16564;
count__15956_16556 = G__16565;
i__15957_16557 = G__16566;
continue;
}
} else {
var temp__5804__auto___16568 = cljs.core.seq(seq__15953_16554);
if(temp__5804__auto___16568){
var seq__15953_16569__$1 = temp__5804__auto___16568;
if(cljs.core.chunked_seq_QMARK_(seq__15953_16569__$1)){
var c__5525__auto___16570 = cljs.core.chunk_first(seq__15953_16569__$1);
var G__16571 = cljs.core.chunk_rest(seq__15953_16569__$1);
var G__16572 = c__5525__auto___16570;
var G__16573 = cljs.core.count(c__5525__auto___16570);
var G__16574 = (0);
seq__15953_16554 = G__16571;
chunk__15955_16555 = G__16572;
count__15956_16556 = G__16573;
i__15957_16557 = G__16574;
continue;
} else {
var child_16575 = cljs.core.first(seq__15953_16569__$1);
if(cljs.core.truth_(child_16575)){
node.appendChild(child_16575);


var G__16576 = cljs.core.next(seq__15953_16569__$1);
var G__16577 = null;
var G__16578 = (0);
var G__16579 = (0);
seq__15953_16554 = G__16576;
chunk__15955_16555 = G__16577;
count__15956_16556 = G__16578;
i__15957_16557 = G__16579;
continue;
} else {
var G__16580 = cljs.core.next(seq__15953_16569__$1);
var G__16581 = null;
var G__16582 = (0);
var G__16583 = (0);
seq__15953_16554 = G__16580;
chunk__15955_16555 = G__16581;
count__15956_16556 = G__16582;
i__15957_16557 = G__16583;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16553);
}
}


var G__16584 = seq__15869_16546;
var G__16585 = chunk__15871_16547;
var G__16586 = count__15872_16548;
var G__16587 = (i__15873_16549 + (1));
seq__15869_16546 = G__16584;
chunk__15871_16547 = G__16585;
count__15872_16548 = G__16586;
i__15873_16549 = G__16587;
continue;
} else {
var G__16589 = seq__15869_16546;
var G__16590 = chunk__15871_16547;
var G__16591 = count__15872_16548;
var G__16592 = (i__15873_16549 + (1));
seq__15869_16546 = G__16589;
chunk__15871_16547 = G__16590;
count__15872_16548 = G__16591;
i__15873_16549 = G__16592;
continue;
}
} else {
var temp__5804__auto___16593 = cljs.core.seq(seq__15869_16546);
if(temp__5804__auto___16593){
var seq__15869_16597__$1 = temp__5804__auto___16593;
if(cljs.core.chunked_seq_QMARK_(seq__15869_16597__$1)){
var c__5525__auto___16598 = cljs.core.chunk_first(seq__15869_16597__$1);
var G__16600 = cljs.core.chunk_rest(seq__15869_16597__$1);
var G__16601 = c__5525__auto___16598;
var G__16602 = cljs.core.count(c__5525__auto___16598);
var G__16603 = (0);
seq__15869_16546 = G__16600;
chunk__15871_16547 = G__16601;
count__15872_16548 = G__16602;
i__15873_16549 = G__16603;
continue;
} else {
var child_struct_16604 = cljs.core.first(seq__15869_16597__$1);
if((!((child_struct_16604 == null)))){
if(typeof child_struct_16604 === 'string'){
var text_16605 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16605),child_struct_16604].join(''));
} else {
var children_16608 = shadow.dom.svg_node(child_struct_16604);
if(cljs.core.seq_QMARK_(children_16608)){
var seq__16002_16609 = cljs.core.seq(children_16608);
var chunk__16004_16610 = null;
var count__16005_16611 = (0);
var i__16006_16612 = (0);
while(true){
if((i__16006_16612 < count__16005_16611)){
var child_16613 = chunk__16004_16610.cljs$core$IIndexed$_nth$arity$2(null, i__16006_16612);
if(cljs.core.truth_(child_16613)){
node.appendChild(child_16613);


var G__16614 = seq__16002_16609;
var G__16615 = chunk__16004_16610;
var G__16616 = count__16005_16611;
var G__16617 = (i__16006_16612 + (1));
seq__16002_16609 = G__16614;
chunk__16004_16610 = G__16615;
count__16005_16611 = G__16616;
i__16006_16612 = G__16617;
continue;
} else {
var G__16618 = seq__16002_16609;
var G__16619 = chunk__16004_16610;
var G__16620 = count__16005_16611;
var G__16621 = (i__16006_16612 + (1));
seq__16002_16609 = G__16618;
chunk__16004_16610 = G__16619;
count__16005_16611 = G__16620;
i__16006_16612 = G__16621;
continue;
}
} else {
var temp__5804__auto___16622__$1 = cljs.core.seq(seq__16002_16609);
if(temp__5804__auto___16622__$1){
var seq__16002_16625__$1 = temp__5804__auto___16622__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16002_16625__$1)){
var c__5525__auto___16626 = cljs.core.chunk_first(seq__16002_16625__$1);
var G__16627 = cljs.core.chunk_rest(seq__16002_16625__$1);
var G__16628 = c__5525__auto___16626;
var G__16629 = cljs.core.count(c__5525__auto___16626);
var G__16630 = (0);
seq__16002_16609 = G__16627;
chunk__16004_16610 = G__16628;
count__16005_16611 = G__16629;
i__16006_16612 = G__16630;
continue;
} else {
var child_16631 = cljs.core.first(seq__16002_16625__$1);
if(cljs.core.truth_(child_16631)){
node.appendChild(child_16631);


var G__16632 = cljs.core.next(seq__16002_16625__$1);
var G__16633 = null;
var G__16634 = (0);
var G__16635 = (0);
seq__16002_16609 = G__16632;
chunk__16004_16610 = G__16633;
count__16005_16611 = G__16634;
i__16006_16612 = G__16635;
continue;
} else {
var G__16636 = cljs.core.next(seq__16002_16625__$1);
var G__16637 = null;
var G__16638 = (0);
var G__16639 = (0);
seq__16002_16609 = G__16636;
chunk__16004_16610 = G__16637;
count__16005_16611 = G__16638;
i__16006_16612 = G__16639;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16608);
}
}


var G__16640 = cljs.core.next(seq__15869_16597__$1);
var G__16641 = null;
var G__16642 = (0);
var G__16643 = (0);
seq__15869_16546 = G__16640;
chunk__15871_16547 = G__16641;
count__15872_16548 = G__16642;
i__15873_16549 = G__16643;
continue;
} else {
var G__16644 = cljs.core.next(seq__15869_16597__$1);
var G__16645 = null;
var G__16646 = (0);
var G__16647 = (0);
seq__15869_16546 = G__16644;
chunk__15871_16547 = G__16645;
count__15872_16548 = G__16646;
i__15873_16549 = G__16647;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16650 = arguments.length;
var i__5727__auto___16651 = (0);
while(true){
if((i__5727__auto___16651 < len__5726__auto___16650)){
args__5732__auto__.push((arguments[i__5727__auto___16651]));

var G__16652 = (i__5727__auto___16651 + (1));
i__5727__auto___16651 = G__16652;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16046){
var G__16047 = cljs.core.first(seq16046);
var seq16046__$1 = cljs.core.next(seq16046);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16047,seq16046__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
