goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_39968 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_39968(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_39972 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_39972(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38121 = coll;
var G__38122 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38121,G__38122) : shadow.dom.lazy_native_coll_seq.call(null,G__38121,G__38122));
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
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
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
return el.shadow$dom$IElement$_to_dom$arity$1(null);
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
var G__38165 = arguments.length;
switch (G__38165) {
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
var G__38183 = arguments.length;
switch (G__38183) {
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
var G__38202 = arguments.length;
switch (G__38202) {
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
var G__38229 = arguments.length;
switch (G__38229) {
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
var G__38251 = arguments.length;
switch (G__38251) {
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
var G__38279 = arguments.length;
switch (G__38279) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e38288){if((e38288 instanceof Object)){
var e = e38288;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38288;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__38315 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38316 = null;
var count__38317 = (0);
var i__38318 = (0);
while(true){
if((i__38318 < count__38317)){
var el = chunk__38316.cljs$core$IIndexed$_nth$arity$2(null,i__38318);
var handler_40001__$1 = ((function (seq__38315,chunk__38316,count__38317,i__38318,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38315,chunk__38316,count__38317,i__38318,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40001__$1);


var G__40004 = seq__38315;
var G__40005 = chunk__38316;
var G__40006 = count__38317;
var G__40007 = (i__38318 + (1));
seq__38315 = G__40004;
chunk__38316 = G__40005;
count__38317 = G__40006;
i__38318 = G__40007;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38315);
if(temp__5753__auto__){
var seq__38315__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38315__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38315__$1);
var G__40012 = cljs.core.chunk_rest(seq__38315__$1);
var G__40013 = c__4638__auto__;
var G__40014 = cljs.core.count(c__4638__auto__);
var G__40015 = (0);
seq__38315 = G__40012;
chunk__38316 = G__40013;
count__38317 = G__40014;
i__38318 = G__40015;
continue;
} else {
var el = cljs.core.first(seq__38315__$1);
var handler_40016__$1 = ((function (seq__38315,chunk__38316,count__38317,i__38318,el,seq__38315__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38315,chunk__38316,count__38317,i__38318,el,seq__38315__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40016__$1);


var G__40020 = cljs.core.next(seq__38315__$1);
var G__40021 = null;
var G__40022 = (0);
var G__40023 = (0);
seq__38315 = G__40020;
chunk__38316 = G__40021;
count__38317 = G__40022;
i__38318 = G__40023;
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
var G__38360 = arguments.length;
switch (G__38360) {
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
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__38377 = cljs.core.seq(events);
var chunk__38378 = null;
var count__38379 = (0);
var i__38380 = (0);
while(true){
if((i__38380 < count__38379)){
var vec__38404 = chunk__38378.cljs$core$IIndexed$_nth$arity$2(null,i__38380);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38404,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40054 = seq__38377;
var G__40055 = chunk__38378;
var G__40056 = count__38379;
var G__40057 = (i__38380 + (1));
seq__38377 = G__40054;
chunk__38378 = G__40055;
count__38379 = G__40056;
i__38380 = G__40057;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38377);
if(temp__5753__auto__){
var seq__38377__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38377__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38377__$1);
var G__40062 = cljs.core.chunk_rest(seq__38377__$1);
var G__40063 = c__4638__auto__;
var G__40064 = cljs.core.count(c__4638__auto__);
var G__40065 = (0);
seq__38377 = G__40062;
chunk__38378 = G__40063;
count__38379 = G__40064;
i__38380 = G__40065;
continue;
} else {
var vec__38414 = cljs.core.first(seq__38377__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38414,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40072 = cljs.core.next(seq__38377__$1);
var G__40073 = null;
var G__40074 = (0);
var G__40075 = (0);
seq__38377 = G__40072;
chunk__38378 = G__40073;
count__38379 = G__40074;
i__38380 = G__40075;
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
var seq__38421 = cljs.core.seq(styles);
var chunk__38422 = null;
var count__38423 = (0);
var i__38424 = (0);
while(true){
if((i__38424 < count__38423)){
var vec__38443 = chunk__38422.cljs$core$IIndexed$_nth$arity$2(null,i__38424);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38443,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40091 = seq__38421;
var G__40092 = chunk__38422;
var G__40093 = count__38423;
var G__40094 = (i__38424 + (1));
seq__38421 = G__40091;
chunk__38422 = G__40092;
count__38423 = G__40093;
i__38424 = G__40094;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38421);
if(temp__5753__auto__){
var seq__38421__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38421__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38421__$1);
var G__40095 = cljs.core.chunk_rest(seq__38421__$1);
var G__40096 = c__4638__auto__;
var G__40097 = cljs.core.count(c__4638__auto__);
var G__40098 = (0);
seq__38421 = G__40095;
chunk__38422 = G__40096;
count__38423 = G__40097;
i__38424 = G__40098;
continue;
} else {
var vec__38450 = cljs.core.first(seq__38421__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38450,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38450,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40100 = cljs.core.next(seq__38421__$1);
var G__40101 = null;
var G__40102 = (0);
var G__40103 = (0);
seq__38421 = G__40100;
chunk__38422 = G__40101;
count__38423 = G__40102;
i__38424 = G__40103;
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
var G__38461_40104 = key;
var G__38461_40105__$1 = (((G__38461_40104 instanceof cljs.core.Keyword))?G__38461_40104.fqn:null);
switch (G__38461_40105__$1) {
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
var ks_40113 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_40113,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_40113,"aria-");
}
})())){
el.setAttribute(ks_40113,value);
} else {
(el[ks_40113] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38514){
var map__38515 = p__38514;
var map__38515__$1 = cljs.core.__destructure_map(map__38515);
var props = map__38515__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38515__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38523 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38531 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38531,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38531;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38540 = arguments.length;
switch (G__38540) {
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38566){
var vec__38567 = p__38566;
var seq__38568 = cljs.core.seq(vec__38567);
var first__38569 = cljs.core.first(seq__38568);
var seq__38568__$1 = cljs.core.next(seq__38568);
var nn = first__38569;
var first__38569__$1 = cljs.core.first(seq__38568__$1);
var seq__38568__$2 = cljs.core.next(seq__38568__$1);
var np = first__38569__$1;
var nc = seq__38568__$2;
var node = vec__38567;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38574 = nn;
var G__38575 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38574,G__38575) : create_fn.call(null,G__38574,G__38575));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38576 = nn;
var G__38577 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38576,G__38577) : create_fn.call(null,G__38576,G__38577));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38587 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38587,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38587,(1),null);
var seq__38592_40131 = cljs.core.seq(node_children);
var chunk__38593_40132 = null;
var count__38594_40133 = (0);
var i__38595_40134 = (0);
while(true){
if((i__38595_40134 < count__38594_40133)){
var child_struct_40135 = chunk__38593_40132.cljs$core$IIndexed$_nth$arity$2(null,i__38595_40134);
var children_40136 = shadow.dom.dom_node(child_struct_40135);
if(cljs.core.seq_QMARK_(children_40136)){
var seq__38681_40137 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40136));
var chunk__38683_40138 = null;
var count__38684_40139 = (0);
var i__38685_40140 = (0);
while(true){
if((i__38685_40140 < count__38684_40139)){
var child_40143 = chunk__38683_40138.cljs$core$IIndexed$_nth$arity$2(null,i__38685_40140);
if(cljs.core.truth_(child_40143)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40143);


var G__40144 = seq__38681_40137;
var G__40145 = chunk__38683_40138;
var G__40146 = count__38684_40139;
var G__40147 = (i__38685_40140 + (1));
seq__38681_40137 = G__40144;
chunk__38683_40138 = G__40145;
count__38684_40139 = G__40146;
i__38685_40140 = G__40147;
continue;
} else {
var G__40148 = seq__38681_40137;
var G__40149 = chunk__38683_40138;
var G__40150 = count__38684_40139;
var G__40151 = (i__38685_40140 + (1));
seq__38681_40137 = G__40148;
chunk__38683_40138 = G__40149;
count__38684_40139 = G__40150;
i__38685_40140 = G__40151;
continue;
}
} else {
var temp__5753__auto___40152 = cljs.core.seq(seq__38681_40137);
if(temp__5753__auto___40152){
var seq__38681_40153__$1 = temp__5753__auto___40152;
if(cljs.core.chunked_seq_QMARK_(seq__38681_40153__$1)){
var c__4638__auto___40155 = cljs.core.chunk_first(seq__38681_40153__$1);
var G__40156 = cljs.core.chunk_rest(seq__38681_40153__$1);
var G__40157 = c__4638__auto___40155;
var G__40158 = cljs.core.count(c__4638__auto___40155);
var G__40159 = (0);
seq__38681_40137 = G__40156;
chunk__38683_40138 = G__40157;
count__38684_40139 = G__40158;
i__38685_40140 = G__40159;
continue;
} else {
var child_40160 = cljs.core.first(seq__38681_40153__$1);
if(cljs.core.truth_(child_40160)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40160);


var G__40161 = cljs.core.next(seq__38681_40153__$1);
var G__40162 = null;
var G__40163 = (0);
var G__40164 = (0);
seq__38681_40137 = G__40161;
chunk__38683_40138 = G__40162;
count__38684_40139 = G__40163;
i__38685_40140 = G__40164;
continue;
} else {
var G__40165 = cljs.core.next(seq__38681_40153__$1);
var G__40166 = null;
var G__40167 = (0);
var G__40168 = (0);
seq__38681_40137 = G__40165;
chunk__38683_40138 = G__40166;
count__38684_40139 = G__40167;
i__38685_40140 = G__40168;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40136);
}


var G__40177 = seq__38592_40131;
var G__40178 = chunk__38593_40132;
var G__40179 = count__38594_40133;
var G__40180 = (i__38595_40134 + (1));
seq__38592_40131 = G__40177;
chunk__38593_40132 = G__40178;
count__38594_40133 = G__40179;
i__38595_40134 = G__40180;
continue;
} else {
var temp__5753__auto___40182 = cljs.core.seq(seq__38592_40131);
if(temp__5753__auto___40182){
var seq__38592_40183__$1 = temp__5753__auto___40182;
if(cljs.core.chunked_seq_QMARK_(seq__38592_40183__$1)){
var c__4638__auto___40184 = cljs.core.chunk_first(seq__38592_40183__$1);
var G__40185 = cljs.core.chunk_rest(seq__38592_40183__$1);
var G__40186 = c__4638__auto___40184;
var G__40187 = cljs.core.count(c__4638__auto___40184);
var G__40188 = (0);
seq__38592_40131 = G__40185;
chunk__38593_40132 = G__40186;
count__38594_40133 = G__40187;
i__38595_40134 = G__40188;
continue;
} else {
var child_struct_40189 = cljs.core.first(seq__38592_40183__$1);
var children_40190 = shadow.dom.dom_node(child_struct_40189);
if(cljs.core.seq_QMARK_(children_40190)){
var seq__38707_40191 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40190));
var chunk__38711_40192 = null;
var count__38712_40193 = (0);
var i__38713_40194 = (0);
while(true){
if((i__38713_40194 < count__38712_40193)){
var child_40196 = chunk__38711_40192.cljs$core$IIndexed$_nth$arity$2(null,i__38713_40194);
if(cljs.core.truth_(child_40196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40196);


var G__40197 = seq__38707_40191;
var G__40198 = chunk__38711_40192;
var G__40199 = count__38712_40193;
var G__40200 = (i__38713_40194 + (1));
seq__38707_40191 = G__40197;
chunk__38711_40192 = G__40198;
count__38712_40193 = G__40199;
i__38713_40194 = G__40200;
continue;
} else {
var G__40201 = seq__38707_40191;
var G__40202 = chunk__38711_40192;
var G__40203 = count__38712_40193;
var G__40204 = (i__38713_40194 + (1));
seq__38707_40191 = G__40201;
chunk__38711_40192 = G__40202;
count__38712_40193 = G__40203;
i__38713_40194 = G__40204;
continue;
}
} else {
var temp__5753__auto___40205__$1 = cljs.core.seq(seq__38707_40191);
if(temp__5753__auto___40205__$1){
var seq__38707_40206__$1 = temp__5753__auto___40205__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38707_40206__$1)){
var c__4638__auto___40207 = cljs.core.chunk_first(seq__38707_40206__$1);
var G__40208 = cljs.core.chunk_rest(seq__38707_40206__$1);
var G__40209 = c__4638__auto___40207;
var G__40210 = cljs.core.count(c__4638__auto___40207);
var G__40211 = (0);
seq__38707_40191 = G__40208;
chunk__38711_40192 = G__40209;
count__38712_40193 = G__40210;
i__38713_40194 = G__40211;
continue;
} else {
var child_40212 = cljs.core.first(seq__38707_40206__$1);
if(cljs.core.truth_(child_40212)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40212);


var G__40215 = cljs.core.next(seq__38707_40206__$1);
var G__40216 = null;
var G__40217 = (0);
var G__40218 = (0);
seq__38707_40191 = G__40215;
chunk__38711_40192 = G__40216;
count__38712_40193 = G__40217;
i__38713_40194 = G__40218;
continue;
} else {
var G__40219 = cljs.core.next(seq__38707_40206__$1);
var G__40220 = null;
var G__40221 = (0);
var G__40222 = (0);
seq__38707_40191 = G__40219;
chunk__38711_40192 = G__40220;
count__38712_40193 = G__40221;
i__38713_40194 = G__40222;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40190);
}


var G__40224 = cljs.core.next(seq__38592_40183__$1);
var G__40225 = null;
var G__40226 = (0);
var G__40227 = (0);
seq__38592_40131 = G__40224;
chunk__38593_40132 = G__40225;
count__38594_40133 = G__40226;
i__38595_40134 = G__40227;
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
var seq__38750 = cljs.core.seq(node);
var chunk__38751 = null;
var count__38752 = (0);
var i__38753 = (0);
while(true){
if((i__38753 < count__38752)){
var n = chunk__38751.cljs$core$IIndexed$_nth$arity$2(null,i__38753);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40234 = seq__38750;
var G__40235 = chunk__38751;
var G__40236 = count__38752;
var G__40237 = (i__38753 + (1));
seq__38750 = G__40234;
chunk__38751 = G__40235;
count__38752 = G__40236;
i__38753 = G__40237;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38750);
if(temp__5753__auto__){
var seq__38750__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38750__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38750__$1);
var G__40239 = cljs.core.chunk_rest(seq__38750__$1);
var G__40240 = c__4638__auto__;
var G__40241 = cljs.core.count(c__4638__auto__);
var G__40242 = (0);
seq__38750 = G__40239;
chunk__38751 = G__40240;
count__38752 = G__40241;
i__38753 = G__40242;
continue;
} else {
var n = cljs.core.first(seq__38750__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40243 = cljs.core.next(seq__38750__$1);
var G__40244 = null;
var G__40245 = (0);
var G__40246 = (0);
seq__38750 = G__40243;
chunk__38751 = G__40244;
count__38752 = G__40245;
i__38753 = G__40246;
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
var G__38785 = arguments.length;
switch (G__38785) {
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
var G__38797 = arguments.length;
switch (G__38797) {
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
var G__38823 = arguments.length;
switch (G__38823) {
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
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___40260 = arguments.length;
var i__4819__auto___40261 = (0);
while(true){
if((i__4819__auto___40261 < len__4818__auto___40260)){
args__4824__auto__.push((arguments[i__4819__auto___40261]));

var G__40262 = (i__4819__auto___40261 + (1));
i__4819__auto___40261 = G__40262;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38865_40268 = cljs.core.seq(nodes);
var chunk__38866_40269 = null;
var count__38867_40270 = (0);
var i__38868_40271 = (0);
while(true){
if((i__38868_40271 < count__38867_40270)){
var node_40276 = chunk__38866_40269.cljs$core$IIndexed$_nth$arity$2(null,i__38868_40271);
fragment.appendChild(shadow.dom._to_dom(node_40276));


var G__40280 = seq__38865_40268;
var G__40281 = chunk__38866_40269;
var G__40282 = count__38867_40270;
var G__40283 = (i__38868_40271 + (1));
seq__38865_40268 = G__40280;
chunk__38866_40269 = G__40281;
count__38867_40270 = G__40282;
i__38868_40271 = G__40283;
continue;
} else {
var temp__5753__auto___40284 = cljs.core.seq(seq__38865_40268);
if(temp__5753__auto___40284){
var seq__38865_40287__$1 = temp__5753__auto___40284;
if(cljs.core.chunked_seq_QMARK_(seq__38865_40287__$1)){
var c__4638__auto___40293 = cljs.core.chunk_first(seq__38865_40287__$1);
var G__40294 = cljs.core.chunk_rest(seq__38865_40287__$1);
var G__40295 = c__4638__auto___40293;
var G__40296 = cljs.core.count(c__4638__auto___40293);
var G__40297 = (0);
seq__38865_40268 = G__40294;
chunk__38866_40269 = G__40295;
count__38867_40270 = G__40296;
i__38868_40271 = G__40297;
continue;
} else {
var node_40298 = cljs.core.first(seq__38865_40287__$1);
fragment.appendChild(shadow.dom._to_dom(node_40298));


var G__40299 = cljs.core.next(seq__38865_40287__$1);
var G__40300 = null;
var G__40301 = (0);
var G__40302 = (0);
seq__38865_40268 = G__40299;
chunk__38866_40269 = G__40300;
count__38867_40270 = G__40301;
i__38868_40271 = G__40302;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38856){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38856));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38898_40303 = cljs.core.seq(scripts);
var chunk__38899_40304 = null;
var count__38900_40305 = (0);
var i__38901_40306 = (0);
while(true){
if((i__38901_40306 < count__38900_40305)){
var vec__38936_40308 = chunk__38899_40304.cljs$core$IIndexed$_nth$arity$2(null,i__38901_40306);
var script_tag_40309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38936_40308,(0),null);
var script_body_40310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38936_40308,(1),null);
eval(script_body_40310);


var G__40311 = seq__38898_40303;
var G__40312 = chunk__38899_40304;
var G__40313 = count__38900_40305;
var G__40314 = (i__38901_40306 + (1));
seq__38898_40303 = G__40311;
chunk__38899_40304 = G__40312;
count__38900_40305 = G__40313;
i__38901_40306 = G__40314;
continue;
} else {
var temp__5753__auto___40315 = cljs.core.seq(seq__38898_40303);
if(temp__5753__auto___40315){
var seq__38898_40317__$1 = temp__5753__auto___40315;
if(cljs.core.chunked_seq_QMARK_(seq__38898_40317__$1)){
var c__4638__auto___40318 = cljs.core.chunk_first(seq__38898_40317__$1);
var G__40319 = cljs.core.chunk_rest(seq__38898_40317__$1);
var G__40320 = c__4638__auto___40318;
var G__40321 = cljs.core.count(c__4638__auto___40318);
var G__40322 = (0);
seq__38898_40303 = G__40319;
chunk__38899_40304 = G__40320;
count__38900_40305 = G__40321;
i__38901_40306 = G__40322;
continue;
} else {
var vec__38949_40324 = cljs.core.first(seq__38898_40317__$1);
var script_tag_40325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38949_40324,(0),null);
var script_body_40326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38949_40324,(1),null);
eval(script_body_40326);


var G__40327 = cljs.core.next(seq__38898_40317__$1);
var G__40328 = null;
var G__40329 = (0);
var G__40330 = (0);
seq__38898_40303 = G__40327;
chunk__38899_40304 = G__40328;
count__38900_40305 = G__40329;
i__38901_40306 = G__40330;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38977){
var vec__38978 = p__38977;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38978,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38978,(1),null);
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
var G__39059 = arguments.length;
switch (G__39059) {
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
var seq__39130 = cljs.core.seq(style_keys);
var chunk__39131 = null;
var count__39132 = (0);
var i__39133 = (0);
while(true){
if((i__39133 < count__39132)){
var it = chunk__39131.cljs$core$IIndexed$_nth$arity$2(null,i__39133);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40354 = seq__39130;
var G__40355 = chunk__39131;
var G__40356 = count__39132;
var G__40357 = (i__39133 + (1));
seq__39130 = G__40354;
chunk__39131 = G__40355;
count__39132 = G__40356;
i__39133 = G__40357;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39130);
if(temp__5753__auto__){
var seq__39130__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39130__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39130__$1);
var G__40358 = cljs.core.chunk_rest(seq__39130__$1);
var G__40359 = c__4638__auto__;
var G__40360 = cljs.core.count(c__4638__auto__);
var G__40361 = (0);
seq__39130 = G__40358;
chunk__39131 = G__40359;
count__39132 = G__40360;
i__39133 = G__40361;
continue;
} else {
var it = cljs.core.first(seq__39130__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40363 = cljs.core.next(seq__39130__$1);
var G__40364 = null;
var G__40365 = (0);
var G__40366 = (0);
seq__39130 = G__40363;
chunk__39131 = G__40364;
count__39132 = G__40365;
i__39133 = G__40366;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k39162,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__39182 = k39162;
var G__39182__$1 = (((G__39182 instanceof cljs.core.Keyword))?G__39182.fqn:null);
switch (G__39182__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39162,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__39191){
var vec__39194 = p__39191;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39194,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39194,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39161){
var self__ = this;
var G__39161__$1 = this;
return (new cljs.core.RecordIter((0),G__39161__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39163,other39164){
var self__ = this;
var this39163__$1 = this;
return (((!((other39164 == null)))) && ((((this39163__$1.constructor === other39164.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39163__$1.x,other39164.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39163__$1.y,other39164.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39163__$1.__extmap,other39164.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k39162){
var self__ = this;
var this__4468__auto____$1 = this;
var G__39254 = k39162;
var G__39254__$1 = (((G__39254 instanceof cljs.core.Keyword))?G__39254.fqn:null);
switch (G__39254__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39162);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__39161){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__39266 = cljs.core.keyword_identical_QMARK_;
var expr__39267 = k__4470__auto__;
if(cljs.core.truth_((pred__39266.cljs$core$IFn$_invoke$arity$2 ? pred__39266.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39267) : pred__39266.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39267)))){
return (new shadow.dom.Coordinate(G__39161,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39266.cljs$core$IFn$_invoke$arity$2 ? pred__39266.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39267) : pred__39266.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39267)))){
return (new shadow.dom.Coordinate(self__.x,G__39161,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__39161),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__39161){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39161,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39168){
var extmap__4501__auto__ = (function (){var G__39291 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39168,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39168)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39291);
} else {
return G__39291;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39168),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39168),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k39332,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__39379 = k39332;
var G__39379__$1 = (((G__39379 instanceof cljs.core.Keyword))?G__39379.fqn:null);
switch (G__39379__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39332,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__39391){
var vec__39394 = p__39391;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39394,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39394,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39331){
var self__ = this;
var G__39331__$1 = this;
return (new cljs.core.RecordIter((0),G__39331__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39333,other39334){
var self__ = this;
var this39333__$1 = this;
return (((!((other39334 == null)))) && ((((this39333__$1.constructor === other39334.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39333__$1.w,other39334.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39333__$1.h,other39334.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39333__$1.__extmap,other39334.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k39332){
var self__ = this;
var this__4468__auto____$1 = this;
var G__39498 = k39332;
var G__39498__$1 = (((G__39498 instanceof cljs.core.Keyword))?G__39498.fqn:null);
switch (G__39498__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39332);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__39331){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__39508 = cljs.core.keyword_identical_QMARK_;
var expr__39509 = k__4470__auto__;
if(cljs.core.truth_((pred__39508.cljs$core$IFn$_invoke$arity$2 ? pred__39508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39509) : pred__39508.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39509)))){
return (new shadow.dom.Size(G__39331,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39508.cljs$core$IFn$_invoke$arity$2 ? pred__39508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39509) : pred__39508.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39509)))){
return (new shadow.dom.Size(self__.w,G__39331,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__39331),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__39331){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39331,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39346){
var extmap__4501__auto__ = (function (){var G__39548 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39346,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39346)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39548);
} else {
return G__39548;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39346),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39346),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__40428 = (i + (1));
var G__40429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40428;
ret = G__40429;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39606){
var vec__39607 = p__39606;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39622 = arguments.length;
switch (G__39622) {
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
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
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
var G__40434 = ps;
var G__40435 = (i + (1));
el__$1 = G__40434;
i = G__40435;
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
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
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
var vec__39680 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39680,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39680,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39680,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39686_40448 = cljs.core.seq(props);
var chunk__39687_40449 = null;
var count__39688_40450 = (0);
var i__39689_40451 = (0);
while(true){
if((i__39689_40451 < count__39688_40450)){
var vec__39712_40452 = chunk__39687_40449.cljs$core$IIndexed$_nth$arity$2(null,i__39689_40451);
var k_40453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39712_40452,(0),null);
var v_40454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39712_40452,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_40453);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40453),v_40454);


var G__40459 = seq__39686_40448;
var G__40460 = chunk__39687_40449;
var G__40461 = count__39688_40450;
var G__40462 = (i__39689_40451 + (1));
seq__39686_40448 = G__40459;
chunk__39687_40449 = G__40460;
count__39688_40450 = G__40461;
i__39689_40451 = G__40462;
continue;
} else {
var temp__5753__auto___40463 = cljs.core.seq(seq__39686_40448);
if(temp__5753__auto___40463){
var seq__39686_40464__$1 = temp__5753__auto___40463;
if(cljs.core.chunked_seq_QMARK_(seq__39686_40464__$1)){
var c__4638__auto___40465 = cljs.core.chunk_first(seq__39686_40464__$1);
var G__40466 = cljs.core.chunk_rest(seq__39686_40464__$1);
var G__40467 = c__4638__auto___40465;
var G__40468 = cljs.core.count(c__4638__auto___40465);
var G__40469 = (0);
seq__39686_40448 = G__40466;
chunk__39687_40449 = G__40467;
count__39688_40450 = G__40468;
i__39689_40451 = G__40469;
continue;
} else {
var vec__39729_40470 = cljs.core.first(seq__39686_40464__$1);
var k_40471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39729_40470,(0),null);
var v_40472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39729_40470,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_40471);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40471),v_40472);


var G__40473 = cljs.core.next(seq__39686_40464__$1);
var G__40474 = null;
var G__40475 = (0);
var G__40476 = (0);
seq__39686_40448 = G__40473;
chunk__39687_40449 = G__40474;
count__39688_40450 = G__40475;
i__39689_40451 = G__40476;
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
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__39769 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39769,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39769,(1),null);
var seq__39779_40477 = cljs.core.seq(node_children);
var chunk__39785_40478 = null;
var count__39786_40479 = (0);
var i__39787_40480 = (0);
while(true){
if((i__39787_40480 < count__39786_40479)){
var child_struct_40481 = chunk__39785_40478.cljs$core$IIndexed$_nth$arity$2(null,i__39787_40480);
if((!((child_struct_40481 == null)))){
if(typeof child_struct_40481 === 'string'){
var text_40482 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40482),child_struct_40481].join(''));
} else {
var children_40483 = shadow.dom.svg_node(child_struct_40481);
if(cljs.core.seq_QMARK_(children_40483)){
var seq__39870_40484 = cljs.core.seq(children_40483);
var chunk__39872_40485 = null;
var count__39873_40486 = (0);
var i__39874_40487 = (0);
while(true){
if((i__39874_40487 < count__39873_40486)){
var child_40488 = chunk__39872_40485.cljs$core$IIndexed$_nth$arity$2(null,i__39874_40487);
if(cljs.core.truth_(child_40488)){
node.appendChild(child_40488);


var G__40489 = seq__39870_40484;
var G__40490 = chunk__39872_40485;
var G__40491 = count__39873_40486;
var G__40492 = (i__39874_40487 + (1));
seq__39870_40484 = G__40489;
chunk__39872_40485 = G__40490;
count__39873_40486 = G__40491;
i__39874_40487 = G__40492;
continue;
} else {
var G__40493 = seq__39870_40484;
var G__40494 = chunk__39872_40485;
var G__40495 = count__39873_40486;
var G__40496 = (i__39874_40487 + (1));
seq__39870_40484 = G__40493;
chunk__39872_40485 = G__40494;
count__39873_40486 = G__40495;
i__39874_40487 = G__40496;
continue;
}
} else {
var temp__5753__auto___40497 = cljs.core.seq(seq__39870_40484);
if(temp__5753__auto___40497){
var seq__39870_40498__$1 = temp__5753__auto___40497;
if(cljs.core.chunked_seq_QMARK_(seq__39870_40498__$1)){
var c__4638__auto___40499 = cljs.core.chunk_first(seq__39870_40498__$1);
var G__40500 = cljs.core.chunk_rest(seq__39870_40498__$1);
var G__40501 = c__4638__auto___40499;
var G__40502 = cljs.core.count(c__4638__auto___40499);
var G__40503 = (0);
seq__39870_40484 = G__40500;
chunk__39872_40485 = G__40501;
count__39873_40486 = G__40502;
i__39874_40487 = G__40503;
continue;
} else {
var child_40504 = cljs.core.first(seq__39870_40498__$1);
if(cljs.core.truth_(child_40504)){
node.appendChild(child_40504);


var G__40505 = cljs.core.next(seq__39870_40498__$1);
var G__40506 = null;
var G__40507 = (0);
var G__40508 = (0);
seq__39870_40484 = G__40505;
chunk__39872_40485 = G__40506;
count__39873_40486 = G__40507;
i__39874_40487 = G__40508;
continue;
} else {
var G__40509 = cljs.core.next(seq__39870_40498__$1);
var G__40510 = null;
var G__40511 = (0);
var G__40512 = (0);
seq__39870_40484 = G__40509;
chunk__39872_40485 = G__40510;
count__39873_40486 = G__40511;
i__39874_40487 = G__40512;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40483);
}
}


var G__40513 = seq__39779_40477;
var G__40514 = chunk__39785_40478;
var G__40515 = count__39786_40479;
var G__40516 = (i__39787_40480 + (1));
seq__39779_40477 = G__40513;
chunk__39785_40478 = G__40514;
count__39786_40479 = G__40515;
i__39787_40480 = G__40516;
continue;
} else {
var G__40517 = seq__39779_40477;
var G__40518 = chunk__39785_40478;
var G__40519 = count__39786_40479;
var G__40520 = (i__39787_40480 + (1));
seq__39779_40477 = G__40517;
chunk__39785_40478 = G__40518;
count__39786_40479 = G__40519;
i__39787_40480 = G__40520;
continue;
}
} else {
var temp__5753__auto___40521 = cljs.core.seq(seq__39779_40477);
if(temp__5753__auto___40521){
var seq__39779_40522__$1 = temp__5753__auto___40521;
if(cljs.core.chunked_seq_QMARK_(seq__39779_40522__$1)){
var c__4638__auto___40523 = cljs.core.chunk_first(seq__39779_40522__$1);
var G__40524 = cljs.core.chunk_rest(seq__39779_40522__$1);
var G__40525 = c__4638__auto___40523;
var G__40526 = cljs.core.count(c__4638__auto___40523);
var G__40527 = (0);
seq__39779_40477 = G__40524;
chunk__39785_40478 = G__40525;
count__39786_40479 = G__40526;
i__39787_40480 = G__40527;
continue;
} else {
var child_struct_40528 = cljs.core.first(seq__39779_40522__$1);
if((!((child_struct_40528 == null)))){
if(typeof child_struct_40528 === 'string'){
var text_40529 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40529),child_struct_40528].join(''));
} else {
var children_40530 = shadow.dom.svg_node(child_struct_40528);
if(cljs.core.seq_QMARK_(children_40530)){
var seq__39888_40531 = cljs.core.seq(children_40530);
var chunk__39890_40532 = null;
var count__39891_40533 = (0);
var i__39892_40534 = (0);
while(true){
if((i__39892_40534 < count__39891_40533)){
var child_40535 = chunk__39890_40532.cljs$core$IIndexed$_nth$arity$2(null,i__39892_40534);
if(cljs.core.truth_(child_40535)){
node.appendChild(child_40535);


var G__40536 = seq__39888_40531;
var G__40537 = chunk__39890_40532;
var G__40538 = count__39891_40533;
var G__40539 = (i__39892_40534 + (1));
seq__39888_40531 = G__40536;
chunk__39890_40532 = G__40537;
count__39891_40533 = G__40538;
i__39892_40534 = G__40539;
continue;
} else {
var G__40540 = seq__39888_40531;
var G__40541 = chunk__39890_40532;
var G__40542 = count__39891_40533;
var G__40543 = (i__39892_40534 + (1));
seq__39888_40531 = G__40540;
chunk__39890_40532 = G__40541;
count__39891_40533 = G__40542;
i__39892_40534 = G__40543;
continue;
}
} else {
var temp__5753__auto___40544__$1 = cljs.core.seq(seq__39888_40531);
if(temp__5753__auto___40544__$1){
var seq__39888_40545__$1 = temp__5753__auto___40544__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39888_40545__$1)){
var c__4638__auto___40546 = cljs.core.chunk_first(seq__39888_40545__$1);
var G__40547 = cljs.core.chunk_rest(seq__39888_40545__$1);
var G__40548 = c__4638__auto___40546;
var G__40549 = cljs.core.count(c__4638__auto___40546);
var G__40550 = (0);
seq__39888_40531 = G__40547;
chunk__39890_40532 = G__40548;
count__39891_40533 = G__40549;
i__39892_40534 = G__40550;
continue;
} else {
var child_40551 = cljs.core.first(seq__39888_40545__$1);
if(cljs.core.truth_(child_40551)){
node.appendChild(child_40551);


var G__40552 = cljs.core.next(seq__39888_40545__$1);
var G__40553 = null;
var G__40554 = (0);
var G__40555 = (0);
seq__39888_40531 = G__40552;
chunk__39890_40532 = G__40553;
count__39891_40533 = G__40554;
i__39892_40534 = G__40555;
continue;
} else {
var G__40556 = cljs.core.next(seq__39888_40545__$1);
var G__40557 = null;
var G__40558 = (0);
var G__40559 = (0);
seq__39888_40531 = G__40556;
chunk__39890_40532 = G__40557;
count__39891_40533 = G__40558;
i__39892_40534 = G__40559;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40530);
}
}


var G__40560 = cljs.core.next(seq__39779_40522__$1);
var G__40561 = null;
var G__40562 = (0);
var G__40563 = (0);
seq__39779_40477 = G__40560;
chunk__39785_40478 = G__40561;
count__39786_40479 = G__40562;
i__39787_40480 = G__40563;
continue;
} else {
var G__40564 = cljs.core.next(seq__39779_40522__$1);
var G__40565 = null;
var G__40566 = (0);
var G__40567 = (0);
seq__39779_40477 = G__40564;
chunk__39785_40478 = G__40565;
count__39786_40479 = G__40566;
i__39787_40480 = G__40567;
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
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
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

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___40572 = arguments.length;
var i__4819__auto___40573 = (0);
while(true){
if((i__4819__auto___40573 < len__4818__auto___40572)){
args__4824__auto__.push((arguments[i__4819__auto___40573]));

var G__40574 = (i__4819__auto___40573 + (1));
i__4819__auto___40573 = G__40574;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39907){
var G__39908 = cljs.core.first(seq39907);
var seq39907__$1 = cljs.core.next(seq39907);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39908,seq39907__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__39921 = arguments.length;
switch (G__39921) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__33156__auto___40576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_39934){
var state_val_39935 = (state_39934[(1)]);
if((state_val_39935 === (1))){
var state_39934__$1 = state_39934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39934__$1,(2),once_or_cleanup);
} else {
if((state_val_39935 === (2))){
var inst_39931 = (state_39934[(2)]);
var inst_39932 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39934__$1 = (function (){var statearr_39936 = state_39934;
(statearr_39936[(7)] = inst_39931);

return statearr_39936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39934__$1,inst_39932);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32846__auto__ = null;
var shadow$dom$state_machine__32846__auto____0 = (function (){
var statearr_39937 = [null,null,null,null,null,null,null,null];
(statearr_39937[(0)] = shadow$dom$state_machine__32846__auto__);

(statearr_39937[(1)] = (1));

return statearr_39937;
});
var shadow$dom$state_machine__32846__auto____1 = (function (state_39934){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_39934);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e39938){var ex__32849__auto__ = e39938;
var statearr_39939_40577 = state_39934;
(statearr_39939_40577[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_39934[(4)]))){
var statearr_39940_40578 = state_39934;
(statearr_39940_40578[(1)] = cljs.core.first((state_39934[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40579 = state_39934;
state_39934 = G__40579;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
shadow$dom$state_machine__32846__auto__ = function(state_39934){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32846__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32846__auto____1.call(this,state_39934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32846__auto____0;
shadow$dom$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32846__auto____1;
return shadow$dom$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_39941 = f__33157__auto__();
(statearr_39941[(6)] = c__33156__auto___40576);

return statearr_39941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
