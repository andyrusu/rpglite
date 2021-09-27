goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__35594,res){
var map__35596 = p__35594;
var map__35596__$1 = cljs.core.__destructure_map(map__35596);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__35599 = res;
var G__35599__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35599,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__35599);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35599__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__35599__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__35616 = arguments.length;
switch (G__35616) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__35630,msg,handlers,timeout_after_ms){
var map__35631 = p__35630;
var map__35631__$1 = cljs.core.__destructure_map(map__35631);
var runtime = map__35631__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35631__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36056 = arguments.length;
var i__4819__auto___36057 = (0);
while(true){
if((i__4819__auto___36057 < len__4818__auto___36056)){
args__4824__auto__.push((arguments[i__4819__auto___36057]));

var G__36061 = (i__4819__auto___36057 + (1));
i__4819__auto___36057 = G__36061;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35665,ev,args){
var map__35666 = p__35665;
var map__35666__$1 = cljs.core.__destructure_map(map__35666);
var runtime = map__35666__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35666__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__35673 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35676 = null;
var count__35677 = (0);
var i__35678 = (0);
while(true){
if((i__35678 < count__35677)){
var ext = chunk__35676.cljs$core$IIndexed$_nth$arity$2(null,i__35678);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36069 = seq__35673;
var G__36070 = chunk__35676;
var G__36071 = count__35677;
var G__36072 = (i__35678 + (1));
seq__35673 = G__36069;
chunk__35676 = G__36070;
count__35677 = G__36071;
i__35678 = G__36072;
continue;
} else {
var G__36073 = seq__35673;
var G__36074 = chunk__35676;
var G__36075 = count__35677;
var G__36076 = (i__35678 + (1));
seq__35673 = G__36073;
chunk__35676 = G__36074;
count__35677 = G__36075;
i__35678 = G__36076;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35673);
if(temp__5753__auto__){
var seq__35673__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35673__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35673__$1);
var G__36078 = cljs.core.chunk_rest(seq__35673__$1);
var G__36079 = c__4638__auto__;
var G__36080 = cljs.core.count(c__4638__auto__);
var G__36081 = (0);
seq__35673 = G__36078;
chunk__35676 = G__36079;
count__35677 = G__36080;
i__35678 = G__36081;
continue;
} else {
var ext = cljs.core.first(seq__35673__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36087 = cljs.core.next(seq__35673__$1);
var G__36088 = null;
var G__36089 = (0);
var G__36090 = (0);
seq__35673 = G__36087;
chunk__35676 = G__36088;
count__35677 = G__36089;
i__35678 = G__36090;
continue;
} else {
var G__36095 = cljs.core.next(seq__35673__$1);
var G__36096 = null;
var G__36097 = (0);
var G__36098 = (0);
seq__35673 = G__36095;
chunk__35676 = G__36096;
count__35677 = G__36097;
i__35678 = G__36098;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq35643){
var G__35644 = cljs.core.first(seq35643);
var seq35643__$1 = cljs.core.next(seq35643);
var G__35646 = cljs.core.first(seq35643__$1);
var seq35643__$2 = cljs.core.next(seq35643__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35644,G__35646,seq35643__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__35699,p__35700){
var map__35701 = p__35699;
var map__35701__$1 = cljs.core.__destructure_map(map__35701);
var runtime = map__35701__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35702 = p__35700;
var map__35702__$1 = cljs.core.__destructure_map(map__35702);
var msg = map__35702__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35702__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__35709 = cljs.core.deref(state_ref);
var map__35709__$1 = cljs.core.__destructure_map(map__35709);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35709__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35709__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__35738){
var map__35739 = p__35738;
var map__35739__$1 = cljs.core.__destructure_map(map__35739);
var runtime = map__35739__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35739__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35747,msg){
var map__35749 = p__35747;
var map__35749__$1 = cljs.core.__destructure_map(map__35749);
var runtime = map__35749__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35749__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35774,key,p__35775){
var map__35776 = p__35774;
var map__35776__$1 = cljs.core.__destructure_map(map__35776);
var state = map__35776__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35777 = p__35775;
var map__35777__$1 = cljs.core.__destructure_map(map__35777);
var spec = map__35777__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35809,key,spec){
var map__35810 = p__35809;
var map__35810__$1 = cljs.core.__destructure_map(map__35810);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35810__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35816_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35816_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35817_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35817_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35818_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35818_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35819_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35819_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35824_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35824_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35848,key){
var map__35850 = p__35848;
var map__35850__$1 = cljs.core.__destructure_map(map__35850);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35864,msg){
var map__35865 = p__35864;
var map__35865__$1 = cljs.core.__destructure_map(map__35865);
var runtime = map__35865__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35865__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35886,p__35887){
var map__35891 = p__35886;
var map__35891__$1 = cljs.core.__destructure_map(map__35891);
var runtime = map__35891__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35891__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35892 = p__35887;
var map__35892__$1 = cljs.core.__destructure_map(map__35892);
var msg = map__35892__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35892__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35892__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
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
var seq__35917 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35919 = null;
var count__35920 = (0);
var i__35921 = (0);
while(true){
if((i__35921 < count__35920)){
var map__35938 = chunk__35919.cljs$core$IIndexed$_nth$arity$2(null,i__35921);
var map__35938__$1 = cljs.core.__destructure_map(map__35938);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35938__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36180 = seq__35917;
var G__36181 = chunk__35919;
var G__36182 = count__35920;
var G__36183 = (i__35921 + (1));
seq__35917 = G__36180;
chunk__35919 = G__36181;
count__35920 = G__36182;
i__35921 = G__36183;
continue;
} else {
var G__36185 = seq__35917;
var G__36186 = chunk__35919;
var G__36187 = count__35920;
var G__36188 = (i__35921 + (1));
seq__35917 = G__36185;
chunk__35919 = G__36186;
count__35920 = G__36187;
i__35921 = G__36188;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35917);
if(temp__5753__auto__){
var seq__35917__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35917__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35917__$1);
var G__36190 = cljs.core.chunk_rest(seq__35917__$1);
var G__36191 = c__4638__auto__;
var G__36192 = cljs.core.count(c__4638__auto__);
var G__36193 = (0);
seq__35917 = G__36190;
chunk__35919 = G__36191;
count__35920 = G__36192;
i__35921 = G__36193;
continue;
} else {
var map__35955 = cljs.core.first(seq__35917__$1);
var map__35955__$1 = cljs.core.__destructure_map(map__35955);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35955__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36201 = cljs.core.next(seq__35917__$1);
var G__36202 = null;
var G__36203 = (0);
var G__36204 = (0);
seq__35917 = G__36201;
chunk__35919 = G__36202;
count__35920 = G__36203;
i__35921 = G__36204;
continue;
} else {
var G__36206 = cljs.core.next(seq__35917__$1);
var G__36207 = null;
var G__36208 = (0);
var G__36209 = (0);
seq__35917 = G__36206;
chunk__35919 = G__36207;
count__35920 = G__36208;
i__35921 = G__36209;
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
