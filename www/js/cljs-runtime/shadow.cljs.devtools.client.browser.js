goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41436 = arguments.length;
var i__4819__auto___41437 = (0);
while(true){
if((i__4819__auto___41437 < len__4818__auto___41436)){
args__4824__auto__.push((arguments[i__4819__auto___41437]));

var G__41438 = (i__4819__auto___41437 + (1));
i__4819__auto___41437 = G__41438;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41307){
var G__41308 = cljs.core.first(seq41307);
var seq41307__$1 = cljs.core.next(seq41307);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41308,seq41307__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41312 = cljs.core.seq(sources);
var chunk__41313 = null;
var count__41314 = (0);
var i__41315 = (0);
while(true){
if((i__41315 < count__41314)){
var map__41322 = chunk__41313.cljs$core$IIndexed$_nth$arity$2(null,i__41315);
var map__41322__$1 = cljs.core.__destructure_map(map__41322);
var src = map__41322__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41322__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41322__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41322__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41322__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41323){var e_41439 = e41323;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41439);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41439.message)].join('')));
}

var G__41440 = seq__41312;
var G__41441 = chunk__41313;
var G__41442 = count__41314;
var G__41443 = (i__41315 + (1));
seq__41312 = G__41440;
chunk__41313 = G__41441;
count__41314 = G__41442;
i__41315 = G__41443;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41312);
if(temp__5753__auto__){
var seq__41312__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41312__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41312__$1);
var G__41444 = cljs.core.chunk_rest(seq__41312__$1);
var G__41445 = c__4638__auto__;
var G__41446 = cljs.core.count(c__4638__auto__);
var G__41447 = (0);
seq__41312 = G__41444;
chunk__41313 = G__41445;
count__41314 = G__41446;
i__41315 = G__41447;
continue;
} else {
var map__41324 = cljs.core.first(seq__41312__$1);
var map__41324__$1 = cljs.core.__destructure_map(map__41324);
var src = map__41324__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41325){var e_41448 = e41325;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41448);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41448.message)].join('')));
}

var G__41449 = cljs.core.next(seq__41312__$1);
var G__41450 = null;
var G__41451 = (0);
var G__41452 = (0);
seq__41312 = G__41449;
chunk__41313 = G__41450;
count__41314 = G__41451;
i__41315 = G__41452;
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
var seq__41326 = cljs.core.seq(js_requires);
var chunk__41327 = null;
var count__41328 = (0);
var i__41329 = (0);
while(true){
if((i__41329 < count__41328)){
var js_ns = chunk__41327.cljs$core$IIndexed$_nth$arity$2(null,i__41329);
var require_str_41453 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41453);


var G__41454 = seq__41326;
var G__41455 = chunk__41327;
var G__41456 = count__41328;
var G__41457 = (i__41329 + (1));
seq__41326 = G__41454;
chunk__41327 = G__41455;
count__41328 = G__41456;
i__41329 = G__41457;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41326);
if(temp__5753__auto__){
var seq__41326__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41326__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41326__$1);
var G__41458 = cljs.core.chunk_rest(seq__41326__$1);
var G__41459 = c__4638__auto__;
var G__41460 = cljs.core.count(c__4638__auto__);
var G__41461 = (0);
seq__41326 = G__41458;
chunk__41327 = G__41459;
count__41328 = G__41460;
i__41329 = G__41461;
continue;
} else {
var js_ns = cljs.core.first(seq__41326__$1);
var require_str_41462 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41462);


var G__41463 = cljs.core.next(seq__41326__$1);
var G__41464 = null;
var G__41465 = (0);
var G__41466 = (0);
seq__41326 = G__41463;
chunk__41327 = G__41464;
count__41328 = G__41465;
i__41329 = G__41466;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41333){
var map__41334 = p__41333;
var map__41334__$1 = cljs.core.__destructure_map(map__41334);
var msg = map__41334__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41334__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41334__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41335(s__41336){
return (new cljs.core.LazySeq(null,(function (){
var s__41336__$1 = s__41336;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41336__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__41341 = cljs.core.first(xs__6308__auto__);
var map__41341__$1 = cljs.core.__destructure_map(map__41341);
var src = map__41341__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41341__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41341__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__41336__$1,map__41341,map__41341__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41334,map__41334__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41335_$_iter__41337(s__41338){
return (new cljs.core.LazySeq(null,((function (s__41336__$1,map__41341,map__41341__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41334,map__41334__$1,msg,info,reload_info){
return (function (){
var s__41338__$1 = s__41338;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41338__$1);
if(temp__5753__auto____$1){
var s__41338__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41338__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41338__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41340 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41339 = (0);
while(true){
if((i__41339 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__41339);
cljs.core.chunk_append(b__41340,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41467 = (i__41339 + (1));
i__41339 = G__41467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41340),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41335_$_iter__41337(cljs.core.chunk_rest(s__41338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41340),null);
}
} else {
var warning = cljs.core.first(s__41338__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41335_$_iter__41337(cljs.core.rest(s__41338__$2)));
}
} else {
return null;
}
break;
}
});})(s__41336__$1,map__41341,map__41341__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41334,map__41334__$1,msg,info,reload_info))
,null,null));
});})(s__41336__$1,map__41341,map__41341__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41334,map__41334__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41335(cljs.core.rest(s__41336__$1)));
} else {
var G__41468 = cljs.core.rest(s__41336__$1);
s__41336__$1 = G__41468;
continue;
}
} else {
var G__41469 = cljs.core.rest(s__41336__$1);
s__41336__$1 = G__41469;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41342_41470 = cljs.core.seq(warnings);
var chunk__41343_41471 = null;
var count__41344_41472 = (0);
var i__41345_41473 = (0);
while(true){
if((i__41345_41473 < count__41344_41472)){
var map__41348_41474 = chunk__41343_41471.cljs$core$IIndexed$_nth$arity$2(null,i__41345_41473);
var map__41348_41475__$1 = cljs.core.__destructure_map(map__41348_41474);
var w_41476 = map__41348_41475__$1;
var msg_41477__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348_41475__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348_41475__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348_41475__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348_41475__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41480)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41478),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41479),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41477__$1)].join(''));


var G__41481 = seq__41342_41470;
var G__41482 = chunk__41343_41471;
var G__41483 = count__41344_41472;
var G__41484 = (i__41345_41473 + (1));
seq__41342_41470 = G__41481;
chunk__41343_41471 = G__41482;
count__41344_41472 = G__41483;
i__41345_41473 = G__41484;
continue;
} else {
var temp__5753__auto___41485 = cljs.core.seq(seq__41342_41470);
if(temp__5753__auto___41485){
var seq__41342_41486__$1 = temp__5753__auto___41485;
if(cljs.core.chunked_seq_QMARK_(seq__41342_41486__$1)){
var c__4638__auto___41487 = cljs.core.chunk_first(seq__41342_41486__$1);
var G__41488 = cljs.core.chunk_rest(seq__41342_41486__$1);
var G__41489 = c__4638__auto___41487;
var G__41490 = cljs.core.count(c__4638__auto___41487);
var G__41491 = (0);
seq__41342_41470 = G__41488;
chunk__41343_41471 = G__41489;
count__41344_41472 = G__41490;
i__41345_41473 = G__41491;
continue;
} else {
var map__41349_41492 = cljs.core.first(seq__41342_41486__$1);
var map__41349_41493__$1 = cljs.core.__destructure_map(map__41349_41492);
var w_41494 = map__41349_41493__$1;
var msg_41495__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41349_41493__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41349_41493__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41349_41493__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41349_41493__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41498)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41496),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41497),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41495__$1)].join(''));


var G__41499 = cljs.core.next(seq__41342_41486__$1);
var G__41500 = null;
var G__41501 = (0);
var G__41502 = (0);
seq__41342_41470 = G__41499;
chunk__41343_41471 = G__41500;
count__41344_41472 = G__41501;
i__41345_41473 = G__41502;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41332_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41332_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41350){
var map__41351 = p__41350;
var map__41351__$1 = cljs.core.__destructure_map(map__41351);
var msg = map__41351__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__41352 = cljs.core.seq(updates);
var chunk__41354 = null;
var count__41355 = (0);
var i__41356 = (0);
while(true){
if((i__41356 < count__41355)){
var path = chunk__41354.cljs$core$IIndexed$_nth$arity$2(null,i__41356);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41386_41503 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41390_41504 = null;
var count__41391_41505 = (0);
var i__41392_41506 = (0);
while(true){
if((i__41392_41506 < count__41391_41505)){
var node_41507 = chunk__41390_41504.cljs$core$IIndexed$_nth$arity$2(null,i__41392_41506);
if(cljs.core.not(node_41507.shadow$old)){
var path_match_41508 = shadow.cljs.devtools.client.browser.match_paths(node_41507.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41508)){
var new_link_41509 = (function (){var G__41398 = node_41507.cloneNode(true);
G__41398.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41508),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41398;
})();
(node_41507.shadow$old = true);

(new_link_41509.onload = ((function (seq__41386_41503,chunk__41390_41504,count__41391_41505,i__41392_41506,seq__41352,chunk__41354,count__41355,i__41356,new_link_41509,path_match_41508,node_41507,path,map__41351,map__41351__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41507);
});})(seq__41386_41503,chunk__41390_41504,count__41391_41505,i__41392_41506,seq__41352,chunk__41354,count__41355,i__41356,new_link_41509,path_match_41508,node_41507,path,map__41351,map__41351__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41508], 0));

goog.dom.insertSiblingAfter(new_link_41509,node_41507);


var G__41510 = seq__41386_41503;
var G__41511 = chunk__41390_41504;
var G__41512 = count__41391_41505;
var G__41513 = (i__41392_41506 + (1));
seq__41386_41503 = G__41510;
chunk__41390_41504 = G__41511;
count__41391_41505 = G__41512;
i__41392_41506 = G__41513;
continue;
} else {
var G__41514 = seq__41386_41503;
var G__41515 = chunk__41390_41504;
var G__41516 = count__41391_41505;
var G__41517 = (i__41392_41506 + (1));
seq__41386_41503 = G__41514;
chunk__41390_41504 = G__41515;
count__41391_41505 = G__41516;
i__41392_41506 = G__41517;
continue;
}
} else {
var G__41518 = seq__41386_41503;
var G__41519 = chunk__41390_41504;
var G__41520 = count__41391_41505;
var G__41521 = (i__41392_41506 + (1));
seq__41386_41503 = G__41518;
chunk__41390_41504 = G__41519;
count__41391_41505 = G__41520;
i__41392_41506 = G__41521;
continue;
}
} else {
var temp__5753__auto___41522 = cljs.core.seq(seq__41386_41503);
if(temp__5753__auto___41522){
var seq__41386_41523__$1 = temp__5753__auto___41522;
if(cljs.core.chunked_seq_QMARK_(seq__41386_41523__$1)){
var c__4638__auto___41524 = cljs.core.chunk_first(seq__41386_41523__$1);
var G__41525 = cljs.core.chunk_rest(seq__41386_41523__$1);
var G__41526 = c__4638__auto___41524;
var G__41527 = cljs.core.count(c__4638__auto___41524);
var G__41528 = (0);
seq__41386_41503 = G__41525;
chunk__41390_41504 = G__41526;
count__41391_41505 = G__41527;
i__41392_41506 = G__41528;
continue;
} else {
var node_41529 = cljs.core.first(seq__41386_41523__$1);
if(cljs.core.not(node_41529.shadow$old)){
var path_match_41530 = shadow.cljs.devtools.client.browser.match_paths(node_41529.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41530)){
var new_link_41531 = (function (){var G__41399 = node_41529.cloneNode(true);
G__41399.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41530),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41399;
})();
(node_41529.shadow$old = true);

(new_link_41531.onload = ((function (seq__41386_41503,chunk__41390_41504,count__41391_41505,i__41392_41506,seq__41352,chunk__41354,count__41355,i__41356,new_link_41531,path_match_41530,node_41529,seq__41386_41523__$1,temp__5753__auto___41522,path,map__41351,map__41351__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41529);
});})(seq__41386_41503,chunk__41390_41504,count__41391_41505,i__41392_41506,seq__41352,chunk__41354,count__41355,i__41356,new_link_41531,path_match_41530,node_41529,seq__41386_41523__$1,temp__5753__auto___41522,path,map__41351,map__41351__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41530], 0));

goog.dom.insertSiblingAfter(new_link_41531,node_41529);


var G__41532 = cljs.core.next(seq__41386_41523__$1);
var G__41533 = null;
var G__41534 = (0);
var G__41535 = (0);
seq__41386_41503 = G__41532;
chunk__41390_41504 = G__41533;
count__41391_41505 = G__41534;
i__41392_41506 = G__41535;
continue;
} else {
var G__41536 = cljs.core.next(seq__41386_41523__$1);
var G__41537 = null;
var G__41538 = (0);
var G__41539 = (0);
seq__41386_41503 = G__41536;
chunk__41390_41504 = G__41537;
count__41391_41505 = G__41538;
i__41392_41506 = G__41539;
continue;
}
} else {
var G__41540 = cljs.core.next(seq__41386_41523__$1);
var G__41541 = null;
var G__41542 = (0);
var G__41543 = (0);
seq__41386_41503 = G__41540;
chunk__41390_41504 = G__41541;
count__41391_41505 = G__41542;
i__41392_41506 = G__41543;
continue;
}
}
} else {
}
}
break;
}


var G__41544 = seq__41352;
var G__41545 = chunk__41354;
var G__41546 = count__41355;
var G__41547 = (i__41356 + (1));
seq__41352 = G__41544;
chunk__41354 = G__41545;
count__41355 = G__41546;
i__41356 = G__41547;
continue;
} else {
var G__41548 = seq__41352;
var G__41549 = chunk__41354;
var G__41550 = count__41355;
var G__41551 = (i__41356 + (1));
seq__41352 = G__41548;
chunk__41354 = G__41549;
count__41355 = G__41550;
i__41356 = G__41551;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41352);
if(temp__5753__auto__){
var seq__41352__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41352__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41352__$1);
var G__41552 = cljs.core.chunk_rest(seq__41352__$1);
var G__41553 = c__4638__auto__;
var G__41554 = cljs.core.count(c__4638__auto__);
var G__41555 = (0);
seq__41352 = G__41552;
chunk__41354 = G__41553;
count__41355 = G__41554;
i__41356 = G__41555;
continue;
} else {
var path = cljs.core.first(seq__41352__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41400_41556 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41404_41557 = null;
var count__41405_41558 = (0);
var i__41406_41559 = (0);
while(true){
if((i__41406_41559 < count__41405_41558)){
var node_41560 = chunk__41404_41557.cljs$core$IIndexed$_nth$arity$2(null,i__41406_41559);
if(cljs.core.not(node_41560.shadow$old)){
var path_match_41561 = shadow.cljs.devtools.client.browser.match_paths(node_41560.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41561)){
var new_link_41562 = (function (){var G__41412 = node_41560.cloneNode(true);
G__41412.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41561),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41412;
})();
(node_41560.shadow$old = true);

(new_link_41562.onload = ((function (seq__41400_41556,chunk__41404_41557,count__41405_41558,i__41406_41559,seq__41352,chunk__41354,count__41355,i__41356,new_link_41562,path_match_41561,node_41560,path,seq__41352__$1,temp__5753__auto__,map__41351,map__41351__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41560);
});})(seq__41400_41556,chunk__41404_41557,count__41405_41558,i__41406_41559,seq__41352,chunk__41354,count__41355,i__41356,new_link_41562,path_match_41561,node_41560,path,seq__41352__$1,temp__5753__auto__,map__41351,map__41351__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41561], 0));

goog.dom.insertSiblingAfter(new_link_41562,node_41560);


var G__41563 = seq__41400_41556;
var G__41564 = chunk__41404_41557;
var G__41565 = count__41405_41558;
var G__41566 = (i__41406_41559 + (1));
seq__41400_41556 = G__41563;
chunk__41404_41557 = G__41564;
count__41405_41558 = G__41565;
i__41406_41559 = G__41566;
continue;
} else {
var G__41567 = seq__41400_41556;
var G__41568 = chunk__41404_41557;
var G__41569 = count__41405_41558;
var G__41570 = (i__41406_41559 + (1));
seq__41400_41556 = G__41567;
chunk__41404_41557 = G__41568;
count__41405_41558 = G__41569;
i__41406_41559 = G__41570;
continue;
}
} else {
var G__41571 = seq__41400_41556;
var G__41572 = chunk__41404_41557;
var G__41573 = count__41405_41558;
var G__41574 = (i__41406_41559 + (1));
seq__41400_41556 = G__41571;
chunk__41404_41557 = G__41572;
count__41405_41558 = G__41573;
i__41406_41559 = G__41574;
continue;
}
} else {
var temp__5753__auto___41575__$1 = cljs.core.seq(seq__41400_41556);
if(temp__5753__auto___41575__$1){
var seq__41400_41576__$1 = temp__5753__auto___41575__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41400_41576__$1)){
var c__4638__auto___41577 = cljs.core.chunk_first(seq__41400_41576__$1);
var G__41578 = cljs.core.chunk_rest(seq__41400_41576__$1);
var G__41579 = c__4638__auto___41577;
var G__41580 = cljs.core.count(c__4638__auto___41577);
var G__41581 = (0);
seq__41400_41556 = G__41578;
chunk__41404_41557 = G__41579;
count__41405_41558 = G__41580;
i__41406_41559 = G__41581;
continue;
} else {
var node_41582 = cljs.core.first(seq__41400_41576__$1);
if(cljs.core.not(node_41582.shadow$old)){
var path_match_41583 = shadow.cljs.devtools.client.browser.match_paths(node_41582.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41583)){
var new_link_41584 = (function (){var G__41413 = node_41582.cloneNode(true);
G__41413.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41583),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41413;
})();
(node_41582.shadow$old = true);

(new_link_41584.onload = ((function (seq__41400_41556,chunk__41404_41557,count__41405_41558,i__41406_41559,seq__41352,chunk__41354,count__41355,i__41356,new_link_41584,path_match_41583,node_41582,seq__41400_41576__$1,temp__5753__auto___41575__$1,path,seq__41352__$1,temp__5753__auto__,map__41351,map__41351__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_41582);
});})(seq__41400_41556,chunk__41404_41557,count__41405_41558,i__41406_41559,seq__41352,chunk__41354,count__41355,i__41356,new_link_41584,path_match_41583,node_41582,seq__41400_41576__$1,temp__5753__auto___41575__$1,path,seq__41352__$1,temp__5753__auto__,map__41351,map__41351__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41583], 0));

goog.dom.insertSiblingAfter(new_link_41584,node_41582);


var G__41585 = cljs.core.next(seq__41400_41576__$1);
var G__41586 = null;
var G__41587 = (0);
var G__41588 = (0);
seq__41400_41556 = G__41585;
chunk__41404_41557 = G__41586;
count__41405_41558 = G__41587;
i__41406_41559 = G__41588;
continue;
} else {
var G__41589 = cljs.core.next(seq__41400_41576__$1);
var G__41590 = null;
var G__41591 = (0);
var G__41592 = (0);
seq__41400_41556 = G__41589;
chunk__41404_41557 = G__41590;
count__41405_41558 = G__41591;
i__41406_41559 = G__41592;
continue;
}
} else {
var G__41593 = cljs.core.next(seq__41400_41576__$1);
var G__41594 = null;
var G__41595 = (0);
var G__41596 = (0);
seq__41400_41556 = G__41593;
chunk__41404_41557 = G__41594;
count__41405_41558 = G__41595;
i__41406_41559 = G__41596;
continue;
}
}
} else {
}
}
break;
}


var G__41597 = cljs.core.next(seq__41352__$1);
var G__41598 = null;
var G__41599 = (0);
var G__41600 = (0);
seq__41352 = G__41597;
chunk__41354 = G__41598;
count__41355 = G__41599;
i__41356 = G__41600;
continue;
} else {
var G__41601 = cljs.core.next(seq__41352__$1);
var G__41602 = null;
var G__41603 = (0);
var G__41604 = (0);
seq__41352 = G__41601;
chunk__41354 = G__41602;
count__41355 = G__41603;
i__41356 = G__41604;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41414){
var map__41415 = p__41414;
var map__41415__$1 = cljs.core.__destructure_map(map__41415);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41415__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41416){
var map__41417 = p__41416;
var map__41417__$1 = cljs.core.__destructure_map(map__41417);
var _ = map__41417__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41418,done,error){
var map__41419 = p__41418;
var map__41419__$1 = cljs.core.__destructure_map(map__41419);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41419__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41420,done,error){
var map__41421 = p__41420;
var map__41421__$1 = cljs.core.__destructure_map(map__41421);
var msg = map__41421__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41421__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41421__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41421__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41422){
var map__41423 = p__41422;
var map__41423__$1 = cljs.core.__destructure_map(map__41423);
var src = map__41423__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41423__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41424 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41424) : done.call(null,G__41424));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41425){
var map__41426 = p__41425;
var map__41426__$1 = cljs.core.__destructure_map(map__41426);
var msg__$1 = map__41426__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41426__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41427){var ex = e41427;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41428){
var map__41429 = p__41428;
var map__41429__$1 = cljs.core.__destructure_map(map__41429);
var env = map__41429__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41429__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__41430){
var map__41431 = p__41430;
var map__41431__$1 = cljs.core.__destructure_map(map__41431);
var msg = map__41431__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41431__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41432){
var map__41433 = p__41432;
var map__41433__$1 = cljs.core.__destructure_map(map__41433);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41433__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41433__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__41434){
var map__41435 = p__41434;
var map__41435__$1 = cljs.core.__destructure_map(map__41435);
var svc = map__41435__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41435__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
