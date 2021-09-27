goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38831){
var map__38832 = p__38831;
var map__38832__$1 = cljs.core.__destructure_map(map__38832);
var m = map__38832__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38832__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38832__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__38846_39424 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38847_39425 = null;
var count__38848_39426 = (0);
var i__38849_39427 = (0);
while(true){
if((i__38849_39427 < count__38848_39426)){
var f_39428 = chunk__38847_39425.cljs$core$IIndexed$_nth$arity$2(null,i__38849_39427);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39428], 0));


var G__39429 = seq__38846_39424;
var G__39430 = chunk__38847_39425;
var G__39431 = count__38848_39426;
var G__39432 = (i__38849_39427 + (1));
seq__38846_39424 = G__39429;
chunk__38847_39425 = G__39430;
count__38848_39426 = G__39431;
i__38849_39427 = G__39432;
continue;
} else {
var temp__5753__auto___39436 = cljs.core.seq(seq__38846_39424);
if(temp__5753__auto___39436){
var seq__38846_39437__$1 = temp__5753__auto___39436;
if(cljs.core.chunked_seq_QMARK_(seq__38846_39437__$1)){
var c__4638__auto___39439 = cljs.core.chunk_first(seq__38846_39437__$1);
var G__39440 = cljs.core.chunk_rest(seq__38846_39437__$1);
var G__39441 = c__4638__auto___39439;
var G__39442 = cljs.core.count(c__4638__auto___39439);
var G__39443 = (0);
seq__38846_39424 = G__39440;
chunk__38847_39425 = G__39441;
count__38848_39426 = G__39442;
i__38849_39427 = G__39443;
continue;
} else {
var f_39448 = cljs.core.first(seq__38846_39437__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39448], 0));


var G__39450 = cljs.core.next(seq__38846_39437__$1);
var G__39451 = null;
var G__39452 = (0);
var G__39453 = (0);
seq__38846_39424 = G__39450;
chunk__38847_39425 = G__39451;
count__38848_39426 = G__39452;
i__38849_39427 = G__39453;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39455 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39455], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39455)))?cljs.core.second(arglists_39455):arglists_39455)], 0));
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
var seq__38893_39463 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38894_39464 = null;
var count__38895_39465 = (0);
var i__38896_39466 = (0);
while(true){
if((i__38896_39466 < count__38895_39465)){
var vec__38944_39467 = chunk__38894_39464.cljs$core$IIndexed$_nth$arity$2(null,i__38896_39466);
var name_39468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38944_39467,(0),null);
var map__38947_39469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38944_39467,(1),null);
var map__38947_39470__$1 = cljs.core.__destructure_map(map__38947_39469);
var doc_39471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38947_39470__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38947_39470__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39468], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39472], 0));

if(cljs.core.truth_(doc_39471)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39471], 0));
} else {
}


var G__39474 = seq__38893_39463;
var G__39475 = chunk__38894_39464;
var G__39476 = count__38895_39465;
var G__39477 = (i__38896_39466 + (1));
seq__38893_39463 = G__39474;
chunk__38894_39464 = G__39475;
count__38895_39465 = G__39476;
i__38896_39466 = G__39477;
continue;
} else {
var temp__5753__auto___39479 = cljs.core.seq(seq__38893_39463);
if(temp__5753__auto___39479){
var seq__38893_39481__$1 = temp__5753__auto___39479;
if(cljs.core.chunked_seq_QMARK_(seq__38893_39481__$1)){
var c__4638__auto___39483 = cljs.core.chunk_first(seq__38893_39481__$1);
var G__39484 = cljs.core.chunk_rest(seq__38893_39481__$1);
var G__39485 = c__4638__auto___39483;
var G__39486 = cljs.core.count(c__4638__auto___39483);
var G__39487 = (0);
seq__38893_39463 = G__39484;
chunk__38894_39464 = G__39485;
count__38895_39465 = G__39486;
i__38896_39466 = G__39487;
continue;
} else {
var vec__38993_39490 = cljs.core.first(seq__38893_39481__$1);
var name_39491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38993_39490,(0),null);
var map__38996_39492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38993_39490,(1),null);
var map__38996_39493__$1 = cljs.core.__destructure_map(map__38996_39492);
var doc_39494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38996_39493__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38996_39493__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39491], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39495], 0));

if(cljs.core.truth_(doc_39494)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39494], 0));
} else {
}


var G__39501 = cljs.core.next(seq__38893_39481__$1);
var G__39502 = null;
var G__39503 = (0);
var G__39504 = (0);
seq__38893_39463 = G__39501;
chunk__38894_39464 = G__39502;
count__38895_39465 = G__39503;
i__38896_39466 = G__39504;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39035 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39036 = null;
var count__39037 = (0);
var i__39038 = (0);
while(true){
if((i__39038 < count__39037)){
var role = chunk__39036.cljs$core$IIndexed$_nth$arity$2(null,i__39038);
var temp__5753__auto___39511__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39511__$1)){
var spec_39512 = temp__5753__auto___39511__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39512)], 0));
} else {
}


var G__39514 = seq__39035;
var G__39515 = chunk__39036;
var G__39516 = count__39037;
var G__39517 = (i__39038 + (1));
seq__39035 = G__39514;
chunk__39036 = G__39515;
count__39037 = G__39516;
i__39038 = G__39517;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__39035);
if(temp__5753__auto____$1){
var seq__39035__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39035__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39035__$1);
var G__39518 = cljs.core.chunk_rest(seq__39035__$1);
var G__39519 = c__4638__auto__;
var G__39520 = cljs.core.count(c__4638__auto__);
var G__39521 = (0);
seq__39035 = G__39518;
chunk__39036 = G__39519;
count__39037 = G__39520;
i__39038 = G__39521;
continue;
} else {
var role = cljs.core.first(seq__39035__$1);
var temp__5753__auto___39524__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___39524__$2)){
var spec_39525 = temp__5753__auto___39524__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39525)], 0));
} else {
}


var G__39526 = cljs.core.next(seq__39035__$1);
var G__39527 = null;
var G__39528 = (0);
var G__39529 = (0);
seq__39035 = G__39526;
chunk__39036 = G__39527;
count__39037 = G__39528;
i__39038 = G__39529;
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
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39534 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39535 = cljs.core.ex_cause(t);
via = G__39534;
t = G__39535;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__39184 = datafied_throwable;
var map__39184__$1 = cljs.core.__destructure_map(map__39184);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39184__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39184__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39184__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39185 = cljs.core.last(via);
var map__39185__$1 = cljs.core.__destructure_map(map__39185);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39185__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39185__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39185__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39186 = data;
var map__39186__$1 = cljs.core.__destructure_map(map__39186);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39186__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39186__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39186__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39187 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39187__$1 = cljs.core.__destructure_map(map__39187);
var top_data = map__39187__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39187__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39197 = phase;
var G__39197__$1 = (((G__39197 instanceof cljs.core.Keyword))?G__39197.fqn:null);
switch (G__39197__$1) {
case "read-source":
var map__39200 = data;
var map__39200__$1 = cljs.core.__destructure_map(map__39200);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39200__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39200__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39204 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39204__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39204,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39204);
var G__39204__$2 = (cljs.core.truth_((function (){var fexpr__39210 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39210.cljs$core$IFn$_invoke$arity$1 ? fexpr__39210.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39210.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39204__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39204__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39204__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39204__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39211 = top_data;
var G__39211__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39211,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39211);
var G__39211__$2 = (cljs.core.truth_((function (){var fexpr__39216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39216.cljs$core$IFn$_invoke$arity$1 ? fexpr__39216.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39216.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39211__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39211__$1);
var G__39211__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39211__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39211__$2);
var G__39211__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39211__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39211__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39211__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39211__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39217 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39217,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39217,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39217,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39217,(3),null);
var G__39220 = top_data;
var G__39220__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39220,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39220);
var G__39220__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39220__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39220__$1);
var G__39220__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39220__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39220__$2);
var G__39220__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39220__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39220__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39220__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39220__$4;
}

break;
case "execution":
var vec__39241 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39241,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39241,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39241,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39241,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39177_SHARP_){
var or__4212__auto__ = (p1__39177_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__39251 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39251.cljs$core$IFn$_invoke$arity$1 ? fexpr__39251.cljs$core$IFn$_invoke$arity$1(p1__39177_SHARP_) : fexpr__39251.call(null,p1__39177_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__39264 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39264__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39264,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39264);
var G__39264__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39264__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39264__$1);
var G__39264__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39264__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39264__$2);
var G__39264__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39264__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39264__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39264__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39264__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39197__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39284){
var map__39285 = p__39284;
var map__39285__$1 = cljs.core.__destructure_map(map__39285);
var triage_data = map__39285__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39285__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39285__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39285__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39285__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39285__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39285__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39285__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39297 = phase;
var G__39297__$1 = (((G__39297 instanceof cljs.core.Keyword))?G__39297.fqn:null);
switch (G__39297__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39301 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39302 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39303 = loc;
var G__39304 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39315_39618 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39316_39619 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39317_39620 = true;
var _STAR_print_fn_STAR__temp_val__39318_39621 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39317_39620);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39318_39621);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39279_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39279_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39316_39619);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39315_39618);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39301,G__39302,G__39303,G__39304) : format.call(null,G__39301,G__39302,G__39303,G__39304));

break;
case "macroexpansion":
var G__39338 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39339 = cause_type;
var G__39340 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39341 = loc;
var G__39342 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39338,G__39339,G__39340,G__39341,G__39342) : format.call(null,G__39338,G__39339,G__39340,G__39341,G__39342));

break;
case "compile-syntax-check":
var G__39347 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39348 = cause_type;
var G__39349 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39350 = loc;
var G__39351 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39347,G__39348,G__39349,G__39350,G__39351) : format.call(null,G__39347,G__39348,G__39349,G__39350,G__39351));

break;
case "compilation":
var G__39352 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39353 = cause_type;
var G__39354 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39355 = loc;
var G__39356 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39352,G__39353,G__39354,G__39355,G__39356) : format.call(null,G__39352,G__39353,G__39354,G__39355,G__39356));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39362 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39363 = symbol;
var G__39364 = loc;
var G__39365 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39370_39631 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39371_39632 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39372_39633 = true;
var _STAR_print_fn_STAR__temp_val__39373_39634 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39372_39633);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39373_39634);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39281_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39281_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39371_39632);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39370_39631);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39362,G__39363,G__39364,G__39365) : format.call(null,G__39362,G__39363,G__39364,G__39365));
} else {
var G__39386 = "Execution error%s at %s(%s).\n%s\n";
var G__39387 = cause_type;
var G__39388 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39389 = loc;
var G__39390 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39386,G__39387,G__39388,G__39389,G__39390) : format.call(null,G__39386,G__39387,G__39388,G__39389,G__39390));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39297__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
