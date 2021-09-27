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
var G__26400__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26401__i = 0, G__26401__a = new Array(arguments.length -  0);
while (G__26401__i < G__26401__a.length) {G__26401__a[G__26401__i] = arguments[G__26401__i + 0]; ++G__26401__i;}
  args = new cljs.core.IndexedSeq(G__26401__a,0,null);
} 
return G__26400__delegate.call(this,args);};
G__26400.cljs$lang$maxFixedArity = 0;
G__26400.cljs$lang$applyTo = (function (arglist__26402){
var args = cljs.core.seq(arglist__26402);
return G__26400__delegate(args);
});
G__26400.cljs$core$IFn$_invoke$arity$variadic = G__26400__delegate;
return G__26400;
})()
);

(o.error = (function() { 
var G__26403__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26404__i = 0, G__26404__a = new Array(arguments.length -  0);
while (G__26404__i < G__26404__a.length) {G__26404__a[G__26404__i] = arguments[G__26404__i + 0]; ++G__26404__i;}
  args = new cljs.core.IndexedSeq(G__26404__a,0,null);
} 
return G__26403__delegate.call(this,args);};
G__26403.cljs$lang$maxFixedArity = 0;
G__26403.cljs$lang$applyTo = (function (arglist__26405){
var args = cljs.core.seq(arglist__26405);
return G__26403__delegate(args);
});
G__26403.cljs$core$IFn$_invoke$arity$variadic = G__26403__delegate;
return G__26403;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map