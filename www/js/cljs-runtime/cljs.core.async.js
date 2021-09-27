goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33323 = arguments.length;
switch (G__33323) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33332 = (function (f,blockable,meta33333){
this.f = f;
this.blockable = blockable;
this.meta33333 = meta33333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33334,meta33333__$1){
var self__ = this;
var _33334__$1 = this;
return (new cljs.core.async.t_cljs$core$async33332(self__.f,self__.blockable,meta33333__$1));
}));

(cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33334){
var self__ = this;
var _33334__$1 = this;
return self__.meta33333;
}));

(cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33333","meta33333",-485470116,null)], null);
}));

(cljs.core.async.t_cljs$core$async33332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33332");

(cljs.core.async.t_cljs$core$async33332.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33332.
 */
cljs.core.async.__GT_t_cljs$core$async33332 = (function cljs$core$async$__GT_t_cljs$core$async33332(f__$1,blockable__$1,meta33333){
return (new cljs.core.async.t_cljs$core$async33332(f__$1,blockable__$1,meta33333));
});

}

return (new cljs.core.async.t_cljs$core$async33332(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33400 = arguments.length;
switch (G__33400) {
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
var G__33425 = arguments.length;
switch (G__33425) {
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
var G__33456 = arguments.length;
switch (G__33456) {
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
var val_38080 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38080) : fn1.call(null,val_38080));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38080) : fn1.call(null,val_38080));
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
var G__33484 = arguments.length;
switch (G__33484) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
var n__4695__auto___38118 = n;
var x_38119 = (0);
while(true){
if((x_38119 < n__4695__auto___38118)){
(a[x_38119] = x_38119);

var G__38120 = (x_38119 + (1));
x_38119 = G__38120;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33536 = (function (flag,meta33537){
this.flag = flag;
this.meta33537 = meta33537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33538,meta33537__$1){
var self__ = this;
var _33538__$1 = this;
return (new cljs.core.async.t_cljs$core$async33536(self__.flag,meta33537__$1));
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33538){
var self__ = this;
var _33538__$1 = this;
return self__.meta33537;
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33537","meta33537",-1533601650,null)], null);
}));

(cljs.core.async.t_cljs$core$async33536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33536");

(cljs.core.async.t_cljs$core$async33536.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33536.
 */
cljs.core.async.__GT_t_cljs$core$async33536 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33536(flag__$1,meta33537){
return (new cljs.core.async.t_cljs$core$async33536(flag__$1,meta33537));
});

}

return (new cljs.core.async.t_cljs$core$async33536(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33568 = (function (flag,cb,meta33569){
this.flag = flag;
this.cb = cb;
this.meta33569 = meta33569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33570,meta33569__$1){
var self__ = this;
var _33570__$1 = this;
return (new cljs.core.async.t_cljs$core$async33568(self__.flag,self__.cb,meta33569__$1));
}));

(cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33570){
var self__ = this;
var _33570__$1 = this;
return self__.meta33569;
}));

(cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33569","meta33569",-986452487,null)], null);
}));

(cljs.core.async.t_cljs$core$async33568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33568");

(cljs.core.async.t_cljs$core$async33568.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33568.
 */
cljs.core.async.__GT_t_cljs$core$async33568 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33568(flag__$1,cb__$1,meta33569){
return (new cljs.core.async.t_cljs$core$async33568(flag__$1,cb__$1,meta33569));
});

}

return (new cljs.core.async.t_cljs$core$async33568(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33592_SHARP_){
var G__33607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33592_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33607) : fret.call(null,G__33607));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33594_SHARP_){
var G__33614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33594_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33614) : fret.call(null,G__33614));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38147 = (i + (1));
i = G__38147;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___38148 = arguments.length;
var i__4819__auto___38149 = (0);
while(true){
if((i__4819__auto___38149 < len__4818__auto___38148)){
args__4824__auto__.push((arguments[i__4819__auto___38149]));

var G__38150 = (i__4819__auto___38149 + (1));
i__4819__auto___38149 = G__38150;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33640){
var map__33645 = p__33640;
var map__33645__$1 = cljs.core.__destructure_map(map__33645);
var opts = map__33645__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33623){
var G__33624 = cljs.core.first(seq33623);
var seq33623__$1 = cljs.core.next(seq33623);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33624,seq33623__$1);
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
var G__33677 = arguments.length;
switch (G__33677) {
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
var c__33156__auto___38155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_33839){
var state_val_33847 = (state_33839[(1)]);
if((state_val_33847 === (7))){
var inst_33826 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33873_38157 = state_33839__$1;
(statearr_33873_38157[(2)] = inst_33826);

(statearr_33873_38157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (1))){
var state_33839__$1 = state_33839;
var statearr_33880_38162 = state_33839__$1;
(statearr_33880_38162[(2)] = null);

(statearr_33880_38162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (4))){
var inst_33770 = (state_33839[(7)]);
var inst_33770__$1 = (state_33839[(2)]);
var inst_33794 = (inst_33770__$1 == null);
var state_33839__$1 = (function (){var statearr_33885 = state_33839;
(statearr_33885[(7)] = inst_33770__$1);

return statearr_33885;
})();
if(cljs.core.truth_(inst_33794)){
var statearr_33887_38164 = state_33839__$1;
(statearr_33887_38164[(1)] = (5));

} else {
var statearr_33888_38166 = state_33839__$1;
(statearr_33888_38166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (13))){
var state_33839__$1 = state_33839;
var statearr_33905_38167 = state_33839__$1;
(statearr_33905_38167[(2)] = null);

(statearr_33905_38167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (6))){
var inst_33770 = (state_33839[(7)]);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33839__$1,(11),to,inst_33770);
} else {
if((state_val_33847 === (3))){
var inst_33833 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33839__$1,inst_33833);
} else {
if((state_val_33847 === (12))){
var state_33839__$1 = state_33839;
var statearr_33917_38168 = state_33839__$1;
(statearr_33917_38168[(2)] = null);

(statearr_33917_38168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (2))){
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33839__$1,(4),from);
} else {
if((state_val_33847 === (11))){
var inst_33812 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33812)){
var statearr_33921_38170 = state_33839__$1;
(statearr_33921_38170[(1)] = (12));

} else {
var statearr_33924_38172 = state_33839__$1;
(statearr_33924_38172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (9))){
var state_33839__$1 = state_33839;
var statearr_33926_38173 = state_33839__$1;
(statearr_33926_38173[(2)] = null);

(statearr_33926_38173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (5))){
var state_33839__$1 = state_33839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33928_38174 = state_33839__$1;
(statearr_33928_38174[(1)] = (8));

} else {
var statearr_33929_38175 = state_33839__$1;
(statearr_33929_38175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (14))){
var inst_33824 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33930_38177 = state_33839__$1;
(statearr_33930_38177[(2)] = inst_33824);

(statearr_33930_38177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (10))){
var inst_33807 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33935_38182 = state_33839__$1;
(statearr_33935_38182[(2)] = inst_33807);

(statearr_33935_38182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (8))){
var inst_33798 = cljs.core.async.close_BANG_(to);
var state_33839__$1 = state_33839;
var statearr_33938_38189 = state_33839__$1;
(statearr_33938_38189[(2)] = inst_33798);

(statearr_33938_38189[(1)] = (10));


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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_33941 = [null,null,null,null,null,null,null,null];
(statearr_33941[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_33941[(1)] = (1));

return statearr_33941;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_33839){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_33839);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e33945){var ex__32849__auto__ = e33945;
var statearr_33946_38195 = state_33839;
(statearr_33946_38195[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_33839[(4)]))){
var statearr_33949_38197 = state_33839;
(statearr_33949_38197[(1)] = cljs.core.first((state_33839[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38198 = state_33839;
state_33839 = G__38198;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_33953 = f__33157__auto__();
(statearr_33953[(6)] = c__33156__auto___38155);

return statearr_33953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
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
var process = (function (p__33978){
var vec__33980 = p__33978;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33980,(1),null);
var job = vec__33980;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33156__auto___38203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_33994){
var state_val_33995 = (state_33994[(1)]);
if((state_val_33995 === (1))){
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33994__$1,(2),res,v);
} else {
if((state_val_33995 === (2))){
var inst_33989 = (state_33994[(2)]);
var inst_33991 = cljs.core.async.close_BANG_(res);
var state_33994__$1 = (function (){var statearr_34007 = state_33994;
(statearr_34007[(7)] = inst_33989);

return statearr_34007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33994__$1,inst_33991);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0 = (function (){
var statearr_34015 = [null,null,null,null,null,null,null,null];
(statearr_34015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__);

(statearr_34015[(1)] = (1));

return statearr_34015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1 = (function (state_33994){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_33994);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34017){var ex__32849__auto__ = e34017;
var statearr_34018_38216 = state_33994;
(statearr_34018_38216[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_33994[(4)]))){
var statearr_34022_38219 = state_33994;
(statearr_34022_38219[(1)] = cljs.core.first((state_33994[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38220 = state_33994;
state_33994 = G__38220;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = function(state_33994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1.call(this,state_33994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_34026 = f__33157__auto__();
(statearr_34026[(6)] = c__33156__auto___38203);

return statearr_34026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34040){
var vec__34044 = p__34040;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34044,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34044,(1),null);
var job = vec__34044;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___38225 = n;
var __38226 = (0);
while(true){
if((__38226 < n__4695__auto___38225)){
var G__34057_38227 = type;
var G__34057_38228__$1 = (((G__34057_38227 instanceof cljs.core.Keyword))?G__34057_38227.fqn:null);
switch (G__34057_38228__$1) {
case "compute":
var c__33156__auto___38231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38226,c__33156__auto___38231,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async){
return (function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = ((function (__38226,c__33156__auto___38231,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async){
return (function (state_34083){
var state_val_34084 = (state_34083[(1)]);
if((state_val_34084 === (1))){
var state_34083__$1 = state_34083;
var statearr_34094_38232 = state_34083__$1;
(statearr_34094_38232[(2)] = null);

(statearr_34094_38232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (2))){
var state_34083__$1 = state_34083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34083__$1,(4),jobs);
} else {
if((state_val_34084 === (3))){
var inst_34081 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34083__$1,inst_34081);
} else {
if((state_val_34084 === (4))){
var inst_34069 = (state_34083[(2)]);
var inst_34070 = process(inst_34069);
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_34070)){
var statearr_34098_38233 = state_34083__$1;
(statearr_34098_38233[(1)] = (5));

} else {
var statearr_34101_38234 = state_34083__$1;
(statearr_34101_38234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (5))){
var state_34083__$1 = state_34083;
var statearr_34105_38235 = state_34083__$1;
(statearr_34105_38235[(2)] = null);

(statearr_34105_38235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (6))){
var state_34083__$1 = state_34083;
var statearr_34108_38236 = state_34083__$1;
(statearr_34108_38236[(2)] = null);

(statearr_34108_38236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (7))){
var inst_34079 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34116_38237 = state_34083__$1;
(statearr_34116_38237[(2)] = inst_34079);

(statearr_34116_38237[(1)] = (3));


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
});})(__38226,c__33156__auto___38231,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async))
;
return ((function (__38226,switch__32845__auto__,c__33156__auto___38231,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0 = (function (){
var statearr_34128 = [null,null,null,null,null,null,null];
(statearr_34128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__);

(statearr_34128[(1)] = (1));

return statearr_34128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1 = (function (state_34083){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_34083);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34139){var ex__32849__auto__ = e34139;
var statearr_34142_38238 = state_34083;
(statearr_34142_38238[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_34083[(4)]))){
var statearr_34149_38239 = state_34083;
(statearr_34149_38239[(1)] = cljs.core.first((state_34083[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38241 = state_34083;
state_34083 = G__38241;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = function(state_34083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1.call(this,state_34083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__;
})()
;})(__38226,switch__32845__auto__,c__33156__auto___38231,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async))
})();
var state__33158__auto__ = (function (){var statearr_34154 = f__33157__auto__();
(statearr_34154[(6)] = c__33156__auto___38231);

return statearr_34154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
});})(__38226,c__33156__auto___38231,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async))
);


break;
case "async":
var c__33156__auto___38246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38226,c__33156__auto___38246,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async){
return (function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = ((function (__38226,c__33156__auto___38246,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async){
return (function (state_34177){
var state_val_34178 = (state_34177[(1)]);
if((state_val_34178 === (1))){
var state_34177__$1 = state_34177;
var statearr_34179_38256 = state_34177__$1;
(statearr_34179_38256[(2)] = null);

(statearr_34179_38256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (2))){
var state_34177__$1 = state_34177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34177__$1,(4),jobs);
} else {
if((state_val_34178 === (3))){
var inst_34175 = (state_34177[(2)]);
var state_34177__$1 = state_34177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34177__$1,inst_34175);
} else {
if((state_val_34178 === (4))){
var inst_34164 = (state_34177[(2)]);
var inst_34167 = async(inst_34164);
var state_34177__$1 = state_34177;
if(cljs.core.truth_(inst_34167)){
var statearr_34184_38258 = state_34177__$1;
(statearr_34184_38258[(1)] = (5));

} else {
var statearr_34185_38259 = state_34177__$1;
(statearr_34185_38259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (5))){
var state_34177__$1 = state_34177;
var statearr_34187_38260 = state_34177__$1;
(statearr_34187_38260[(2)] = null);

(statearr_34187_38260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (6))){
var state_34177__$1 = state_34177;
var statearr_34192_38261 = state_34177__$1;
(statearr_34192_38261[(2)] = null);

(statearr_34192_38261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34178 === (7))){
var inst_34173 = (state_34177[(2)]);
var state_34177__$1 = state_34177;
var statearr_34194_38262 = state_34177__$1;
(statearr_34194_38262[(2)] = inst_34173);

(statearr_34194_38262[(1)] = (3));


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
});})(__38226,c__33156__auto___38246,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async))
;
return ((function (__38226,switch__32845__auto__,c__33156__auto___38246,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0 = (function (){
var statearr_34196 = [null,null,null,null,null,null,null];
(statearr_34196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__);

(statearr_34196[(1)] = (1));

return statearr_34196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1 = (function (state_34177){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_34177);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34200){var ex__32849__auto__ = e34200;
var statearr_34202_38265 = state_34177;
(statearr_34202_38265[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_34177[(4)]))){
var statearr_34203_38266 = state_34177;
(statearr_34203_38266[(1)] = cljs.core.first((state_34177[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38269 = state_34177;
state_34177 = G__38269;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = function(state_34177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1.call(this,state_34177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__;
})()
;})(__38226,switch__32845__auto__,c__33156__auto___38246,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async))
})();
var state__33158__auto__ = (function (){var statearr_34207 = f__33157__auto__();
(statearr_34207[(6)] = c__33156__auto___38246);

return statearr_34207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
});})(__38226,c__33156__auto___38246,G__34057_38227,G__34057_38228__$1,n__4695__auto___38225,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34057_38228__$1)].join('')));

}

var G__38270 = (__38226 + (1));
__38226 = G__38270;
continue;
} else {
}
break;
}

var c__33156__auto___38271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_34243){
var state_val_34244 = (state_34243[(1)]);
if((state_val_34244 === (7))){
var inst_34238 = (state_34243[(2)]);
var state_34243__$1 = state_34243;
var statearr_34254_38273 = state_34243__$1;
(statearr_34254_38273[(2)] = inst_34238);

(statearr_34254_38273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (1))){
var state_34243__$1 = state_34243;
var statearr_34263_38274 = state_34243__$1;
(statearr_34263_38274[(2)] = null);

(statearr_34263_38274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (4))){
var inst_34215 = (state_34243[(7)]);
var inst_34215__$1 = (state_34243[(2)]);
var inst_34216 = (inst_34215__$1 == null);
var state_34243__$1 = (function (){var statearr_34269 = state_34243;
(statearr_34269[(7)] = inst_34215__$1);

return statearr_34269;
})();
if(cljs.core.truth_(inst_34216)){
var statearr_34270_38277 = state_34243__$1;
(statearr_34270_38277[(1)] = (5));

} else {
var statearr_34274_38278 = state_34243__$1;
(statearr_34274_38278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (6))){
var inst_34220 = (state_34243[(8)]);
var inst_34215 = (state_34243[(7)]);
var inst_34220__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34226 = [inst_34215,inst_34220__$1];
var inst_34227 = (new cljs.core.PersistentVector(null,2,(5),inst_34223,inst_34226,null));
var state_34243__$1 = (function (){var statearr_34278 = state_34243;
(statearr_34278[(8)] = inst_34220__$1);

return statearr_34278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34243__$1,(8),jobs,inst_34227);
} else {
if((state_val_34244 === (3))){
var inst_34240 = (state_34243[(2)]);
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34243__$1,inst_34240);
} else {
if((state_val_34244 === (2))){
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34243__$1,(4),from);
} else {
if((state_val_34244 === (9))){
var inst_34233 = (state_34243[(2)]);
var state_34243__$1 = (function (){var statearr_34286 = state_34243;
(statearr_34286[(9)] = inst_34233);

return statearr_34286;
})();
var statearr_34289_38280 = state_34243__$1;
(statearr_34289_38280[(2)] = null);

(statearr_34289_38280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (5))){
var inst_34218 = cljs.core.async.close_BANG_(jobs);
var state_34243__$1 = state_34243;
var statearr_34293_38281 = state_34243__$1;
(statearr_34293_38281[(2)] = inst_34218);

(statearr_34293_38281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34244 === (8))){
var inst_34220 = (state_34243[(8)]);
var inst_34230 = (state_34243[(2)]);
var state_34243__$1 = (function (){var statearr_34295 = state_34243;
(statearr_34295[(10)] = inst_34230);

return statearr_34295;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34243__$1,(9),results,inst_34220);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0 = (function (){
var statearr_34296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__);

(statearr_34296[(1)] = (1));

return statearr_34296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1 = (function (state_34243){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_34243);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34304){var ex__32849__auto__ = e34304;
var statearr_34306_38284 = state_34243;
(statearr_34306_38284[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_34243[(4)]))){
var statearr_34307_38285 = state_34243;
(statearr_34307_38285[(1)] = cljs.core.first((state_34243[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38287 = state_34243;
state_34243 = G__38287;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = function(state_34243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1.call(this,state_34243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_34312 = f__33157__auto__();
(statearr_34312[(6)] = c__33156__auto___38271);

return statearr_34312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));


var c__33156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_34365){
var state_val_34366 = (state_34365[(1)]);
if((state_val_34366 === (7))){
var inst_34358 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34386_38289 = state_34365__$1;
(statearr_34386_38289[(2)] = inst_34358);

(statearr_34386_38289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (20))){
var state_34365__$1 = state_34365;
var statearr_34394_38290 = state_34365__$1;
(statearr_34394_38290[(2)] = null);

(statearr_34394_38290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (1))){
var state_34365__$1 = state_34365;
var statearr_34404_38291 = state_34365__$1;
(statearr_34404_38291[(2)] = null);

(statearr_34404_38291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (4))){
var inst_34323 = (state_34365[(7)]);
var inst_34323__$1 = (state_34365[(2)]);
var inst_34324 = (inst_34323__$1 == null);
var state_34365__$1 = (function (){var statearr_34411 = state_34365;
(statearr_34411[(7)] = inst_34323__$1);

return statearr_34411;
})();
if(cljs.core.truth_(inst_34324)){
var statearr_34413_38292 = state_34365__$1;
(statearr_34413_38292[(1)] = (5));

} else {
var statearr_34415_38293 = state_34365__$1;
(statearr_34415_38293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (15))){
var inst_34339 = (state_34365[(8)]);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34365__$1,(18),to,inst_34339);
} else {
if((state_val_34366 === (21))){
var inst_34353 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34418_38301 = state_34365__$1;
(statearr_34418_38301[(2)] = inst_34353);

(statearr_34418_38301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (13))){
var inst_34355 = (state_34365[(2)]);
var state_34365__$1 = (function (){var statearr_34420 = state_34365;
(statearr_34420[(9)] = inst_34355);

return statearr_34420;
})();
var statearr_34425_38304 = state_34365__$1;
(statearr_34425_38304[(2)] = null);

(statearr_34425_38304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (6))){
var inst_34323 = (state_34365[(7)]);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34365__$1,(11),inst_34323);
} else {
if((state_val_34366 === (17))){
var inst_34347 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
if(cljs.core.truth_(inst_34347)){
var statearr_34427_38305 = state_34365__$1;
(statearr_34427_38305[(1)] = (19));

} else {
var statearr_34431_38306 = state_34365__$1;
(statearr_34431_38306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (3))){
var inst_34360 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34365__$1,inst_34360);
} else {
if((state_val_34366 === (12))){
var inst_34335 = (state_34365[(10)]);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34365__$1,(14),inst_34335);
} else {
if((state_val_34366 === (2))){
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34365__$1,(4),results);
} else {
if((state_val_34366 === (19))){
var state_34365__$1 = state_34365;
var statearr_34436_38307 = state_34365__$1;
(statearr_34436_38307[(2)] = null);

(statearr_34436_38307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (11))){
var inst_34335 = (state_34365[(2)]);
var state_34365__$1 = (function (){var statearr_34440 = state_34365;
(statearr_34440[(10)] = inst_34335);

return statearr_34440;
})();
var statearr_34442_38314 = state_34365__$1;
(statearr_34442_38314[(2)] = null);

(statearr_34442_38314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (9))){
var state_34365__$1 = state_34365;
var statearr_34443_38319 = state_34365__$1;
(statearr_34443_38319[(2)] = null);

(statearr_34443_38319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (5))){
var state_34365__$1 = state_34365;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34444_38320 = state_34365__$1;
(statearr_34444_38320[(1)] = (8));

} else {
var statearr_34449_38323 = state_34365__$1;
(statearr_34449_38323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (14))){
var inst_34341 = (state_34365[(11)]);
var inst_34339 = (state_34365[(8)]);
var inst_34339__$1 = (state_34365[(2)]);
var inst_34340 = (inst_34339__$1 == null);
var inst_34341__$1 = cljs.core.not(inst_34340);
var state_34365__$1 = (function (){var statearr_34451 = state_34365;
(statearr_34451[(11)] = inst_34341__$1);

(statearr_34451[(8)] = inst_34339__$1);

return statearr_34451;
})();
if(inst_34341__$1){
var statearr_34452_38325 = state_34365__$1;
(statearr_34452_38325[(1)] = (15));

} else {
var statearr_34453_38327 = state_34365__$1;
(statearr_34453_38327[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (16))){
var inst_34341 = (state_34365[(11)]);
var state_34365__$1 = state_34365;
var statearr_34456_38329 = state_34365__$1;
(statearr_34456_38329[(2)] = inst_34341);

(statearr_34456_38329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (10))){
var inst_34332 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34461_38330 = state_34365__$1;
(statearr_34461_38330[(2)] = inst_34332);

(statearr_34461_38330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (18))){
var inst_34344 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34465_38331 = state_34365__$1;
(statearr_34465_38331[(2)] = inst_34344);

(statearr_34465_38331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (8))){
var inst_34327 = cljs.core.async.close_BANG_(to);
var state_34365__$1 = state_34365;
var statearr_34472_38332 = state_34365__$1;
(statearr_34472_38332[(2)] = inst_34327);

(statearr_34472_38332[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0 = (function (){
var statearr_34481 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__);

(statearr_34481[(1)] = (1));

return statearr_34481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1 = (function (state_34365){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_34365);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34485){var ex__32849__auto__ = e34485;
var statearr_34486_38339 = state_34365;
(statearr_34486_38339[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_34365[(4)]))){
var statearr_34490_38341 = state_34365;
(statearr_34490_38341[(1)] = cljs.core.first((state_34365[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38342 = state_34365;
state_34365 = G__38342;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__ = function(state_34365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1.call(this,state_34365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_34495 = f__33157__auto__();
(statearr_34495[(6)] = c__33156__auto__);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));

return c__33156__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34514 = arguments.length;
switch (G__34514) {
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
var G__34532 = arguments.length;
switch (G__34532) {
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
var G__34543 = arguments.length;
switch (G__34543) {
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
var c__33156__auto___38362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_34593){
var state_val_34594 = (state_34593[(1)]);
if((state_val_34594 === (7))){
var inst_34589 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34602_38364 = state_34593__$1;
(statearr_34602_38364[(2)] = inst_34589);

(statearr_34602_38364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (1))){
var state_34593__$1 = state_34593;
var statearr_34603_38365 = state_34593__$1;
(statearr_34603_38365[(2)] = null);

(statearr_34603_38365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (4))){
var inst_34560 = (state_34593[(7)]);
var inst_34560__$1 = (state_34593[(2)]);
var inst_34563 = (inst_34560__$1 == null);
var state_34593__$1 = (function (){var statearr_34606 = state_34593;
(statearr_34606[(7)] = inst_34560__$1);

return statearr_34606;
})();
if(cljs.core.truth_(inst_34563)){
var statearr_34607_38366 = state_34593__$1;
(statearr_34607_38366[(1)] = (5));

} else {
var statearr_34608_38367 = state_34593__$1;
(statearr_34608_38367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (13))){
var state_34593__$1 = state_34593;
var statearr_34611_38368 = state_34593__$1;
(statearr_34611_38368[(2)] = null);

(statearr_34611_38368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (6))){
var inst_34560 = (state_34593[(7)]);
var inst_34572 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34560) : p.call(null,inst_34560));
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34572)){
var statearr_34620_38370 = state_34593__$1;
(statearr_34620_38370[(1)] = (9));

} else {
var statearr_34621_38371 = state_34593__$1;
(statearr_34621_38371[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (3))){
var inst_34591 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34593__$1,inst_34591);
} else {
if((state_val_34594 === (12))){
var state_34593__$1 = state_34593;
var statearr_34626_38372 = state_34593__$1;
(statearr_34626_38372[(2)] = null);

(statearr_34626_38372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (2))){
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34593__$1,(4),ch);
} else {
if((state_val_34594 === (11))){
var inst_34560 = (state_34593[(7)]);
var inst_34576 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34593__$1,(8),inst_34576,inst_34560);
} else {
if((state_val_34594 === (9))){
var state_34593__$1 = state_34593;
var statearr_34628_38373 = state_34593__$1;
(statearr_34628_38373[(2)] = tc);

(statearr_34628_38373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (5))){
var inst_34567 = cljs.core.async.close_BANG_(tc);
var inst_34570 = cljs.core.async.close_BANG_(fc);
var state_34593__$1 = (function (){var statearr_34629 = state_34593;
(statearr_34629[(8)] = inst_34567);

return statearr_34629;
})();
var statearr_34630_38374 = state_34593__$1;
(statearr_34630_38374[(2)] = inst_34570);

(statearr_34630_38374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (14))){
var inst_34586 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34631_38375 = state_34593__$1;
(statearr_34631_38375[(2)] = inst_34586);

(statearr_34631_38375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (10))){
var state_34593__$1 = state_34593;
var statearr_34633_38376 = state_34593__$1;
(statearr_34633_38376[(2)] = fc);

(statearr_34633_38376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (8))){
var inst_34578 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34578)){
var statearr_34637_38381 = state_34593__$1;
(statearr_34637_38381[(1)] = (12));

} else {
var statearr_34640_38382 = state_34593__$1;
(statearr_34640_38382[(1)] = (13));

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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_34646 = [null,null,null,null,null,null,null,null,null];
(statearr_34646[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_34646[(1)] = (1));

return statearr_34646;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_34593){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_34593);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34648){var ex__32849__auto__ = e34648;
var statearr_34649_38386 = state_34593;
(statearr_34649_38386[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_34593[(4)]))){
var statearr_34651_38391 = state_34593;
(statearr_34651_38391[(1)] = cljs.core.first((state_34593[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38393 = state_34593;
state_34593 = G__38393;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_34593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_34593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_34655 = f__33157__auto__();
(statearr_34655[(6)] = c__33156__auto___38362);

return statearr_34655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
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
var c__33156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (7))){
var inst_34678 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34690_38399 = state_34682__$1;
(statearr_34690_38399[(2)] = inst_34678);

(statearr_34690_38399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (1))){
var inst_34657 = init;
var inst_34658 = inst_34657;
var state_34682__$1 = (function (){var statearr_34692 = state_34682;
(statearr_34692[(7)] = inst_34658);

return statearr_34692;
})();
var statearr_34693_38407 = state_34682__$1;
(statearr_34693_38407[(2)] = null);

(statearr_34693_38407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (4))){
var inst_34663 = (state_34682[(8)]);
var inst_34663__$1 = (state_34682[(2)]);
var inst_34664 = (inst_34663__$1 == null);
var state_34682__$1 = (function (){var statearr_34699 = state_34682;
(statearr_34699[(8)] = inst_34663__$1);

return statearr_34699;
})();
if(cljs.core.truth_(inst_34664)){
var statearr_34700_38408 = state_34682__$1;
(statearr_34700_38408[(1)] = (5));

} else {
var statearr_34702_38409 = state_34682__$1;
(statearr_34702_38409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (6))){
var inst_34663 = (state_34682[(8)]);
var inst_34658 = (state_34682[(7)]);
var inst_34669 = (state_34682[(9)]);
var inst_34669__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34658,inst_34663) : f.call(null,inst_34658,inst_34663));
var inst_34670 = cljs.core.reduced_QMARK_(inst_34669__$1);
var state_34682__$1 = (function (){var statearr_34703 = state_34682;
(statearr_34703[(9)] = inst_34669__$1);

return statearr_34703;
})();
if(inst_34670){
var statearr_34706_38411 = state_34682__$1;
(statearr_34706_38411[(1)] = (8));

} else {
var statearr_34709_38413 = state_34682__$1;
(statearr_34709_38413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (3))){
var inst_34680 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34680);
} else {
if((state_val_34683 === (2))){
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34682__$1,(4),ch);
} else {
if((state_val_34683 === (9))){
var inst_34669 = (state_34682[(9)]);
var inst_34658 = inst_34669;
var state_34682__$1 = (function (){var statearr_34722 = state_34682;
(statearr_34722[(7)] = inst_34658);

return statearr_34722;
})();
var statearr_34725_38418 = state_34682__$1;
(statearr_34725_38418[(2)] = null);

(statearr_34725_38418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (5))){
var inst_34658 = (state_34682[(7)]);
var state_34682__$1 = state_34682;
var statearr_34730_38419 = state_34682__$1;
(statearr_34730_38419[(2)] = inst_34658);

(statearr_34730_38419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (10))){
var inst_34676 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34731_38420 = state_34682__$1;
(statearr_34731_38420[(2)] = inst_34676);

(statearr_34731_38420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (8))){
var inst_34669 = (state_34682[(9)]);
var inst_34672 = cljs.core.deref(inst_34669);
var state_34682__$1 = state_34682;
var statearr_34739_38425 = state_34682__$1;
(statearr_34739_38425[(2)] = inst_34672);

(statearr_34739_38425[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32846__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32846__auto____0 = (function (){
var statearr_34744 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34744[(0)] = cljs$core$async$reduce_$_state_machine__32846__auto__);

(statearr_34744[(1)] = (1));

return statearr_34744;
});
var cljs$core$async$reduce_$_state_machine__32846__auto____1 = (function (state_34682){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_34682);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34745){var ex__32849__auto__ = e34745;
var statearr_34747_38429 = state_34682;
(statearr_34747_38429[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_34682[(4)]))){
var statearr_34750_38430 = state_34682;
(statearr_34750_38430[(1)] = cljs.core.first((state_34682[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38431 = state_34682;
state_34682 = G__38431;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32846__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32846__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32846__auto____0;
cljs$core$async$reduce_$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32846__auto____1;
return cljs$core$async$reduce_$_state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_34756 = f__33157__auto__();
(statearr_34756[(6)] = c__33156__auto__);

return statearr_34756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));

return c__33156__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_34768){
var state_val_34769 = (state_34768[(1)]);
if((state_val_34769 === (1))){
var inst_34762 = cljs.core.async.reduce(f__$1,init,ch);
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34768__$1,(2),inst_34762);
} else {
if((state_val_34769 === (2))){
var inst_34765 = (state_34768[(2)]);
var inst_34766 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34765) : f__$1.call(null,inst_34765));
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34768__$1,inst_34766);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32846__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32846__auto____0 = (function (){
var statearr_34774 = [null,null,null,null,null,null,null];
(statearr_34774[(0)] = cljs$core$async$transduce_$_state_machine__32846__auto__);

(statearr_34774[(1)] = (1));

return statearr_34774;
});
var cljs$core$async$transduce_$_state_machine__32846__auto____1 = (function (state_34768){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_34768);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34775){var ex__32849__auto__ = e34775;
var statearr_34776_38446 = state_34768;
(statearr_34776_38446[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_34768[(4)]))){
var statearr_34777_38447 = state_34768;
(statearr_34777_38447[(1)] = cljs.core.first((state_34768[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38448 = state_34768;
state_34768 = G__38448;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32846__auto__ = function(state_34768){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32846__auto____1.call(this,state_34768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32846__auto____0;
cljs$core$async$transduce_$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32846__auto____1;
return cljs$core$async$transduce_$_state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_34784 = f__33157__auto__();
(statearr_34784[(6)] = c__33156__auto__);

return statearr_34784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));

return c__33156__auto__;
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
var G__34794 = arguments.length;
switch (G__34794) {
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
var c__33156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_34835){
var state_val_34837 = (state_34835[(1)]);
if((state_val_34837 === (7))){
var inst_34813 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34848_38453 = state_34835__$1;
(statearr_34848_38453[(2)] = inst_34813);

(statearr_34848_38453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (1))){
var inst_34802 = cljs.core.seq(coll);
var inst_34803 = inst_34802;
var state_34835__$1 = (function (){var statearr_34862 = state_34835;
(statearr_34862[(7)] = inst_34803);

return statearr_34862;
})();
var statearr_34863_38456 = state_34835__$1;
(statearr_34863_38456[(2)] = null);

(statearr_34863_38456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (4))){
var inst_34803 = (state_34835[(7)]);
var inst_34811 = cljs.core.first(inst_34803);
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34835__$1,(7),ch,inst_34811);
} else {
if((state_val_34837 === (13))){
var inst_34826 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34864_38457 = state_34835__$1;
(statearr_34864_38457[(2)] = inst_34826);

(statearr_34864_38457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (6))){
var inst_34817 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
if(cljs.core.truth_(inst_34817)){
var statearr_34869_38458 = state_34835__$1;
(statearr_34869_38458[(1)] = (8));

} else {
var statearr_34870_38459 = state_34835__$1;
(statearr_34870_38459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (3))){
var inst_34830 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34835__$1,inst_34830);
} else {
if((state_val_34837 === (12))){
var state_34835__$1 = state_34835;
var statearr_34871_38460 = state_34835__$1;
(statearr_34871_38460[(2)] = null);

(statearr_34871_38460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (2))){
var inst_34803 = (state_34835[(7)]);
var state_34835__$1 = state_34835;
if(cljs.core.truth_(inst_34803)){
var statearr_34872_38462 = state_34835__$1;
(statearr_34872_38462[(1)] = (4));

} else {
var statearr_34873_38463 = state_34835__$1;
(statearr_34873_38463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (11))){
var inst_34823 = cljs.core.async.close_BANG_(ch);
var state_34835__$1 = state_34835;
var statearr_34876_38464 = state_34835__$1;
(statearr_34876_38464[(2)] = inst_34823);

(statearr_34876_38464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (9))){
var state_34835__$1 = state_34835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34877_38465 = state_34835__$1;
(statearr_34877_38465[(1)] = (11));

} else {
var statearr_34878_38466 = state_34835__$1;
(statearr_34878_38466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (5))){
var inst_34803 = (state_34835[(7)]);
var state_34835__$1 = state_34835;
var statearr_34879_38468 = state_34835__$1;
(statearr_34879_38468[(2)] = inst_34803);

(statearr_34879_38468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (10))){
var inst_34828 = (state_34835[(2)]);
var state_34835__$1 = state_34835;
var statearr_34880_38469 = state_34835__$1;
(statearr_34880_38469[(2)] = inst_34828);

(statearr_34880_38469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (8))){
var inst_34803 = (state_34835[(7)]);
var inst_34819 = cljs.core.next(inst_34803);
var inst_34803__$1 = inst_34819;
var state_34835__$1 = (function (){var statearr_34881 = state_34835;
(statearr_34881[(7)] = inst_34803__$1);

return statearr_34881;
})();
var statearr_34882_38474 = state_34835__$1;
(statearr_34882_38474[(2)] = null);

(statearr_34882_38474[(1)] = (2));


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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_34883 = [null,null,null,null,null,null,null,null];
(statearr_34883[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_34883[(1)] = (1));

return statearr_34883;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_34835){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_34835);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e34888){var ex__32849__auto__ = e34888;
var statearr_34889_38483 = state_34835;
(statearr_34889_38483[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_34835[(4)]))){
var statearr_34890_38484 = state_34835;
(statearr_34890_38484[(1)] = cljs.core.first((state_34835[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38485 = state_34835;
state_34835 = G__38485;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_34835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_34835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_34896 = f__33157__auto__();
(statearr_34896[(6)] = c__33156__auto__);

return statearr_34896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));

return c__33156__auto__;
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
var G__34900 = arguments.length;
switch (G__34900) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_38487 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_38487(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38488 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_38488(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38490 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_38490(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38492 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_38492(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34950 = (function (ch,cs,meta34951){
this.ch = ch;
this.cs = cs;
this.meta34951 = meta34951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34952,meta34951__$1){
var self__ = this;
var _34952__$1 = this;
return (new cljs.core.async.t_cljs$core$async34950(self__.ch,self__.cs,meta34951__$1));
}));

(cljs.core.async.t_cljs$core$async34950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34952){
var self__ = this;
var _34952__$1 = this;
return self__.meta34951;
}));

(cljs.core.async.t_cljs$core$async34950.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34950.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34950.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34950.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34950.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34951","meta34951",1111966706,null)], null);
}));

(cljs.core.async.t_cljs$core$async34950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34950");

(cljs.core.async.t_cljs$core$async34950.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async34950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34950.
 */
cljs.core.async.__GT_t_cljs$core$async34950 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34950(ch__$1,cs__$1,meta34951){
return (new cljs.core.async.t_cljs$core$async34950(ch__$1,cs__$1,meta34951));
});

}

return (new cljs.core.async.t_cljs$core$async34950(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33156__auto___38509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_35214){
var state_val_35216 = (state_35214[(1)]);
if((state_val_35216 === (7))){
var inst_35203 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35222_38510 = state_35214__$1;
(statearr_35222_38510[(2)] = inst_35203);

(statearr_35222_38510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (20))){
var inst_35060 = (state_35214[(7)]);
var inst_35080 = cljs.core.first(inst_35060);
var inst_35081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35080,(0),null);
var inst_35083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35080,(1),null);
var state_35214__$1 = (function (){var statearr_35231 = state_35214;
(statearr_35231[(8)] = inst_35081);

return statearr_35231;
})();
if(cljs.core.truth_(inst_35083)){
var statearr_35232_38511 = state_35214__$1;
(statearr_35232_38511[(1)] = (22));

} else {
var statearr_35234_38512 = state_35214__$1;
(statearr_35234_38512[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (27))){
var inst_35123 = (state_35214[(9)]);
var inst_35121 = (state_35214[(10)]);
var inst_35006 = (state_35214[(11)]);
var inst_35132 = (state_35214[(12)]);
var inst_35132__$1 = cljs.core._nth(inst_35121,inst_35123);
var inst_35134 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35132__$1,inst_35006,done);
var state_35214__$1 = (function (){var statearr_35244 = state_35214;
(statearr_35244[(12)] = inst_35132__$1);

return statearr_35244;
})();
if(cljs.core.truth_(inst_35134)){
var statearr_35245_38516 = state_35214__$1;
(statearr_35245_38516[(1)] = (30));

} else {
var statearr_35247_38517 = state_35214__$1;
(statearr_35247_38517[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (1))){
var state_35214__$1 = state_35214;
var statearr_35249_38522 = state_35214__$1;
(statearr_35249_38522[(2)] = null);

(statearr_35249_38522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (24))){
var inst_35060 = (state_35214[(7)]);
var inst_35088 = (state_35214[(2)]);
var inst_35089 = cljs.core.next(inst_35060);
var inst_35017 = inst_35089;
var inst_35018 = null;
var inst_35019 = (0);
var inst_35020 = (0);
var state_35214__$1 = (function (){var statearr_35260 = state_35214;
(statearr_35260[(13)] = inst_35018);

(statearr_35260[(14)] = inst_35017);

(statearr_35260[(15)] = inst_35020);

(statearr_35260[(16)] = inst_35088);

(statearr_35260[(17)] = inst_35019);

return statearr_35260;
})();
var statearr_35263_38530 = state_35214__$1;
(statearr_35263_38530[(2)] = null);

(statearr_35263_38530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (39))){
var state_35214__$1 = state_35214;
var statearr_35273_38532 = state_35214__$1;
(statearr_35273_38532[(2)] = null);

(statearr_35273_38532[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (4))){
var inst_35006 = (state_35214[(11)]);
var inst_35006__$1 = (state_35214[(2)]);
var inst_35007 = (inst_35006__$1 == null);
var state_35214__$1 = (function (){var statearr_35275 = state_35214;
(statearr_35275[(11)] = inst_35006__$1);

return statearr_35275;
})();
if(cljs.core.truth_(inst_35007)){
var statearr_35276_38537 = state_35214__$1;
(statearr_35276_38537[(1)] = (5));

} else {
var statearr_35281_38538 = state_35214__$1;
(statearr_35281_38538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (15))){
var inst_35018 = (state_35214[(13)]);
var inst_35017 = (state_35214[(14)]);
var inst_35020 = (state_35214[(15)]);
var inst_35019 = (state_35214[(17)]);
var inst_35050 = (state_35214[(2)]);
var inst_35052 = (inst_35020 + (1));
var tmp35268 = inst_35018;
var tmp35269 = inst_35017;
var tmp35270 = inst_35019;
var inst_35017__$1 = tmp35269;
var inst_35018__$1 = tmp35268;
var inst_35019__$1 = tmp35270;
var inst_35020__$1 = inst_35052;
var state_35214__$1 = (function (){var statearr_35286 = state_35214;
(statearr_35286[(13)] = inst_35018__$1);

(statearr_35286[(14)] = inst_35017__$1);

(statearr_35286[(15)] = inst_35020__$1);

(statearr_35286[(18)] = inst_35050);

(statearr_35286[(17)] = inst_35019__$1);

return statearr_35286;
})();
var statearr_35288_38541 = state_35214__$1;
(statearr_35288_38541[(2)] = null);

(statearr_35288_38541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (21))){
var inst_35093 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35297_38542 = state_35214__$1;
(statearr_35297_38542[(2)] = inst_35093);

(statearr_35297_38542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (31))){
var inst_35132 = (state_35214[(12)]);
var inst_35139 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35132);
var state_35214__$1 = state_35214;
var statearr_35305_38545 = state_35214__$1;
(statearr_35305_38545[(2)] = inst_35139);

(statearr_35305_38545[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (32))){
var inst_35122 = (state_35214[(19)]);
var inst_35123 = (state_35214[(9)]);
var inst_35121 = (state_35214[(10)]);
var inst_35119 = (state_35214[(20)]);
var inst_35142 = (state_35214[(2)]);
var inst_35143 = (inst_35123 + (1));
var tmp35291 = inst_35122;
var tmp35292 = inst_35121;
var tmp35293 = inst_35119;
var inst_35119__$1 = tmp35293;
var inst_35121__$1 = tmp35292;
var inst_35122__$1 = tmp35291;
var inst_35123__$1 = inst_35143;
var state_35214__$1 = (function (){var statearr_35312 = state_35214;
(statearr_35312[(19)] = inst_35122__$1);

(statearr_35312[(9)] = inst_35123__$1);

(statearr_35312[(21)] = inst_35142);

(statearr_35312[(10)] = inst_35121__$1);

(statearr_35312[(20)] = inst_35119__$1);

return statearr_35312;
})();
var statearr_35317_38555 = state_35214__$1;
(statearr_35317_38555[(2)] = null);

(statearr_35317_38555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (40))){
var inst_35166 = (state_35214[(22)]);
var inst_35172 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35166);
var state_35214__$1 = state_35214;
var statearr_35320_38556 = state_35214__$1;
(statearr_35320_38556[(2)] = inst_35172);

(statearr_35320_38556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (33))){
var inst_35147 = (state_35214[(23)]);
var inst_35152 = cljs.core.chunked_seq_QMARK_(inst_35147);
var state_35214__$1 = state_35214;
if(inst_35152){
var statearr_35322_38561 = state_35214__$1;
(statearr_35322_38561[(1)] = (36));

} else {
var statearr_35323_38562 = state_35214__$1;
(statearr_35323_38562[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (13))){
var inst_35035 = (state_35214[(24)]);
var inst_35047 = cljs.core.async.close_BANG_(inst_35035);
var state_35214__$1 = state_35214;
var statearr_35332_38563 = state_35214__$1;
(statearr_35332_38563[(2)] = inst_35047);

(statearr_35332_38563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (22))){
var inst_35081 = (state_35214[(8)]);
var inst_35085 = cljs.core.async.close_BANG_(inst_35081);
var state_35214__$1 = state_35214;
var statearr_35344_38564 = state_35214__$1;
(statearr_35344_38564[(2)] = inst_35085);

(statearr_35344_38564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (36))){
var inst_35147 = (state_35214[(23)]);
var inst_35157 = cljs.core.chunk_first(inst_35147);
var inst_35158 = cljs.core.chunk_rest(inst_35147);
var inst_35159 = cljs.core.count(inst_35157);
var inst_35119 = inst_35158;
var inst_35121 = inst_35157;
var inst_35122 = inst_35159;
var inst_35123 = (0);
var state_35214__$1 = (function (){var statearr_35354 = state_35214;
(statearr_35354[(19)] = inst_35122);

(statearr_35354[(9)] = inst_35123);

(statearr_35354[(10)] = inst_35121);

(statearr_35354[(20)] = inst_35119);

return statearr_35354;
})();
var statearr_35358_38565 = state_35214__$1;
(statearr_35358_38565[(2)] = null);

(statearr_35358_38565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (41))){
var inst_35147 = (state_35214[(23)]);
var inst_35174 = (state_35214[(2)]);
var inst_35176 = cljs.core.next(inst_35147);
var inst_35119 = inst_35176;
var inst_35121 = null;
var inst_35122 = (0);
var inst_35123 = (0);
var state_35214__$1 = (function (){var statearr_35362 = state_35214;
(statearr_35362[(19)] = inst_35122);

(statearr_35362[(9)] = inst_35123);

(statearr_35362[(10)] = inst_35121);

(statearr_35362[(20)] = inst_35119);

(statearr_35362[(25)] = inst_35174);

return statearr_35362;
})();
var statearr_35367_38570 = state_35214__$1;
(statearr_35367_38570[(2)] = null);

(statearr_35367_38570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (43))){
var state_35214__$1 = state_35214;
var statearr_35377_38571 = state_35214__$1;
(statearr_35377_38571[(2)] = null);

(statearr_35377_38571[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (29))){
var inst_35185 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35384_38572 = state_35214__$1;
(statearr_35384_38572[(2)] = inst_35185);

(statearr_35384_38572[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (44))){
var inst_35200 = (state_35214[(2)]);
var state_35214__$1 = (function (){var statearr_35391 = state_35214;
(statearr_35391[(26)] = inst_35200);

return statearr_35391;
})();
var statearr_35395_38573 = state_35214__$1;
(statearr_35395_38573[(2)] = null);

(statearr_35395_38573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (6))){
var inst_35110 = (state_35214[(27)]);
var inst_35109 = cljs.core.deref(cs);
var inst_35110__$1 = cljs.core.keys(inst_35109);
var inst_35111 = cljs.core.count(inst_35110__$1);
var inst_35112 = cljs.core.reset_BANG_(dctr,inst_35111);
var inst_35118 = cljs.core.seq(inst_35110__$1);
var inst_35119 = inst_35118;
var inst_35121 = null;
var inst_35122 = (0);
var inst_35123 = (0);
var state_35214__$1 = (function (){var statearr_35399 = state_35214;
(statearr_35399[(19)] = inst_35122);

(statearr_35399[(9)] = inst_35123);

(statearr_35399[(10)] = inst_35121);

(statearr_35399[(27)] = inst_35110__$1);

(statearr_35399[(20)] = inst_35119);

(statearr_35399[(28)] = inst_35112);

return statearr_35399;
})();
var statearr_35404_38580 = state_35214__$1;
(statearr_35404_38580[(2)] = null);

(statearr_35404_38580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (28))){
var inst_35119 = (state_35214[(20)]);
var inst_35147 = (state_35214[(23)]);
var inst_35147__$1 = cljs.core.seq(inst_35119);
var state_35214__$1 = (function (){var statearr_35413 = state_35214;
(statearr_35413[(23)] = inst_35147__$1);

return statearr_35413;
})();
if(inst_35147__$1){
var statearr_35418_38585 = state_35214__$1;
(statearr_35418_38585[(1)] = (33));

} else {
var statearr_35419_38586 = state_35214__$1;
(statearr_35419_38586[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (25))){
var inst_35122 = (state_35214[(19)]);
var inst_35123 = (state_35214[(9)]);
var inst_35127 = (inst_35123 < inst_35122);
var inst_35128 = inst_35127;
var state_35214__$1 = state_35214;
if(cljs.core.truth_(inst_35128)){
var statearr_35425_38590 = state_35214__$1;
(statearr_35425_38590[(1)] = (27));

} else {
var statearr_35426_38591 = state_35214__$1;
(statearr_35426_38591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (34))){
var state_35214__$1 = state_35214;
var statearr_35430_38597 = state_35214__$1;
(statearr_35430_38597[(2)] = null);

(statearr_35430_38597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (17))){
var state_35214__$1 = state_35214;
var statearr_35436_38598 = state_35214__$1;
(statearr_35436_38598[(2)] = null);

(statearr_35436_38598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (3))){
var inst_35206 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35214__$1,inst_35206);
} else {
if((state_val_35216 === (12))){
var inst_35098 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35451_38611 = state_35214__$1;
(statearr_35451_38611[(2)] = inst_35098);

(statearr_35451_38611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (2))){
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35214__$1,(4),ch);
} else {
if((state_val_35216 === (23))){
var state_35214__$1 = state_35214;
var statearr_35458_38614 = state_35214__$1;
(statearr_35458_38614[(2)] = null);

(statearr_35458_38614[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (35))){
var inst_35183 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35462_38615 = state_35214__$1;
(statearr_35462_38615[(2)] = inst_35183);

(statearr_35462_38615[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (19))){
var inst_35060 = (state_35214[(7)]);
var inst_35067 = cljs.core.chunk_first(inst_35060);
var inst_35070 = cljs.core.chunk_rest(inst_35060);
var inst_35071 = cljs.core.count(inst_35067);
var inst_35017 = inst_35070;
var inst_35018 = inst_35067;
var inst_35019 = inst_35071;
var inst_35020 = (0);
var state_35214__$1 = (function (){var statearr_35469 = state_35214;
(statearr_35469[(13)] = inst_35018);

(statearr_35469[(14)] = inst_35017);

(statearr_35469[(15)] = inst_35020);

(statearr_35469[(17)] = inst_35019);

return statearr_35469;
})();
var statearr_35471_38618 = state_35214__$1;
(statearr_35471_38618[(2)] = null);

(statearr_35471_38618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (11))){
var inst_35017 = (state_35214[(14)]);
var inst_35060 = (state_35214[(7)]);
var inst_35060__$1 = cljs.core.seq(inst_35017);
var state_35214__$1 = (function (){var statearr_35479 = state_35214;
(statearr_35479[(7)] = inst_35060__$1);

return statearr_35479;
})();
if(inst_35060__$1){
var statearr_35482_38620 = state_35214__$1;
(statearr_35482_38620[(1)] = (16));

} else {
var statearr_35483_38623 = state_35214__$1;
(statearr_35483_38623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (9))){
var inst_35101 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35485_38626 = state_35214__$1;
(statearr_35485_38626[(2)] = inst_35101);

(statearr_35485_38626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (5))){
var inst_35014 = cljs.core.deref(cs);
var inst_35015 = cljs.core.seq(inst_35014);
var inst_35017 = inst_35015;
var inst_35018 = null;
var inst_35019 = (0);
var inst_35020 = (0);
var state_35214__$1 = (function (){var statearr_35491 = state_35214;
(statearr_35491[(13)] = inst_35018);

(statearr_35491[(14)] = inst_35017);

(statearr_35491[(15)] = inst_35020);

(statearr_35491[(17)] = inst_35019);

return statearr_35491;
})();
var statearr_35497_38630 = state_35214__$1;
(statearr_35497_38630[(2)] = null);

(statearr_35497_38630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (14))){
var state_35214__$1 = state_35214;
var statearr_35499_38633 = state_35214__$1;
(statearr_35499_38633[(2)] = null);

(statearr_35499_38633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (45))){
var inst_35197 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35503_38635 = state_35214__$1;
(statearr_35503_38635[(2)] = inst_35197);

(statearr_35503_38635[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (26))){
var inst_35110 = (state_35214[(27)]);
var inst_35188 = (state_35214[(2)]);
var inst_35190 = cljs.core.seq(inst_35110);
var state_35214__$1 = (function (){var statearr_35509 = state_35214;
(statearr_35509[(29)] = inst_35188);

return statearr_35509;
})();
if(inst_35190){
var statearr_35514_38642 = state_35214__$1;
(statearr_35514_38642[(1)] = (42));

} else {
var statearr_35517_38643 = state_35214__$1;
(statearr_35517_38643[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (16))){
var inst_35060 = (state_35214[(7)]);
var inst_35063 = cljs.core.chunked_seq_QMARK_(inst_35060);
var state_35214__$1 = state_35214;
if(inst_35063){
var statearr_35518_38651 = state_35214__$1;
(statearr_35518_38651[(1)] = (19));

} else {
var statearr_35520_38653 = state_35214__$1;
(statearr_35520_38653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (38))){
var inst_35180 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35525_38658 = state_35214__$1;
(statearr_35525_38658[(2)] = inst_35180);

(statearr_35525_38658[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (30))){
var state_35214__$1 = state_35214;
var statearr_35531_38660 = state_35214__$1;
(statearr_35531_38660[(2)] = null);

(statearr_35531_38660[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (10))){
var inst_35018 = (state_35214[(13)]);
var inst_35020 = (state_35214[(15)]);
var inst_35031 = cljs.core._nth(inst_35018,inst_35020);
var inst_35035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35031,(0),null);
var inst_35039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35031,(1),null);
var state_35214__$1 = (function (){var statearr_35535 = state_35214;
(statearr_35535[(24)] = inst_35035);

return statearr_35535;
})();
if(cljs.core.truth_(inst_35039)){
var statearr_35538_38665 = state_35214__$1;
(statearr_35538_38665[(1)] = (13));

} else {
var statearr_35541_38668 = state_35214__$1;
(statearr_35541_38668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (18))){
var inst_35096 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35549_38671 = state_35214__$1;
(statearr_35549_38671[(2)] = inst_35096);

(statearr_35549_38671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (42))){
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35214__$1,(45),dchan);
} else {
if((state_val_35216 === (37))){
var inst_35006 = (state_35214[(11)]);
var inst_35166 = (state_35214[(22)]);
var inst_35147 = (state_35214[(23)]);
var inst_35166__$1 = cljs.core.first(inst_35147);
var inst_35168 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35166__$1,inst_35006,done);
var state_35214__$1 = (function (){var statearr_35557 = state_35214;
(statearr_35557[(22)] = inst_35166__$1);

return statearr_35557;
})();
if(cljs.core.truth_(inst_35168)){
var statearr_35563_38675 = state_35214__$1;
(statearr_35563_38675[(1)] = (39));

} else {
var statearr_35566_38676 = state_35214__$1;
(statearr_35566_38676[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35216 === (8))){
var inst_35020 = (state_35214[(15)]);
var inst_35019 = (state_35214[(17)]);
var inst_35022 = (inst_35020 < inst_35019);
var inst_35023 = inst_35022;
var state_35214__$1 = state_35214;
if(cljs.core.truth_(inst_35023)){
var statearr_35569_38678 = state_35214__$1;
(statearr_35569_38678[(1)] = (10));

} else {
var statearr_35570_38679 = state_35214__$1;
(statearr_35570_38679[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32846__auto__ = null;
var cljs$core$async$mult_$_state_machine__32846__auto____0 = (function (){
var statearr_35582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35582[(0)] = cljs$core$async$mult_$_state_machine__32846__auto__);

(statearr_35582[(1)] = (1));

return statearr_35582;
});
var cljs$core$async$mult_$_state_machine__32846__auto____1 = (function (state_35214){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_35214);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e35589){var ex__32849__auto__ = e35589;
var statearr_35592_38687 = state_35214;
(statearr_35592_38687[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_35214[(4)]))){
var statearr_35595_38688 = state_35214;
(statearr_35595_38688[(1)] = cljs.core.first((state_35214[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38690 = state_35214;
state_35214 = G__38690;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32846__auto__ = function(state_35214){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32846__auto____1.call(this,state_35214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32846__auto____0;
cljs$core$async$mult_$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32846__auto____1;
return cljs$core$async$mult_$_state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_35601 = f__33157__auto__();
(statearr_35601[(6)] = c__33156__auto___38509);

return statearr_35601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
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
var G__35615 = arguments.length;
switch (G__35615) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_38696 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_38696(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38701 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_38701(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38706 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38706(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38718 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_38718(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38719 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38719(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38720 = arguments.length;
var i__4819__auto___38721 = (0);
while(true){
if((i__4819__auto___38721 < len__4818__auto___38720)){
args__4824__auto__.push((arguments[i__4819__auto___38721]));

var G__38723 = (i__4819__auto___38721 + (1));
i__4819__auto___38721 = G__38723;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35812){
var map__35813 = p__35812;
var map__35813__$1 = cljs.core.__destructure_map(map__35813);
var opts = map__35813__$1;
var statearr_35814_38726 = state;
(statearr_35814_38726[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35828_38728 = state;
(statearr_35828_38728[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_35830_38729 = state;
(statearr_35830_38729[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35734){
var G__35735 = cljs.core.first(seq35734);
var seq35734__$1 = cljs.core.next(seq35734);
var G__35736 = cljs.core.first(seq35734__$1);
var seq35734__$2 = cljs.core.next(seq35734__$1);
var G__35737 = cljs.core.first(seq35734__$2);
var seq35734__$3 = cljs.core.next(seq35734__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35735,G__35736,G__35737,seq35734__$3);
}));

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
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35876 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35878){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35878 = meta35878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35879,meta35878__$1){
var self__ = this;
var _35879__$1 = this;
return (new cljs.core.async.t_cljs$core$async35876(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35878__$1));
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35879){
var self__ = this;
var _35879__$1 = this;
return self__.meta35878;
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35876.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35878","meta35878",2115287432,null)], null);
}));

(cljs.core.async.t_cljs$core$async35876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35876");

(cljs.core.async.t_cljs$core$async35876.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async35876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35876.
 */
cljs.core.async.__GT_t_cljs$core$async35876 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35876(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35878){
return (new cljs.core.async.t_cljs$core$async35876(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35878));
});

}

return (new cljs.core.async.t_cljs$core$async35876(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33156__auto___38749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_36050){
var state_val_36052 = (state_36050[(1)]);
if((state_val_36052 === (7))){
var inst_35993 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
if(cljs.core.truth_(inst_35993)){
var statearr_36062_38755 = state_36050__$1;
(statearr_36062_38755[(1)] = (8));

} else {
var statearr_36064_38756 = state_36050__$1;
(statearr_36064_38756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (20))){
var inst_35981 = (state_36050[(7)]);
var state_36050__$1 = state_36050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36050__$1,(23),out,inst_35981);
} else {
if((state_val_36052 === (1))){
var inst_35954 = calc_state();
var inst_35956 = cljs.core.__destructure_map(inst_35954);
var inst_35957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35956,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35956,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35956,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35960 = inst_35954;
var state_36050__$1 = (function (){var statearr_36086 = state_36050;
(statearr_36086[(8)] = inst_35958);

(statearr_36086[(9)] = inst_35960);

(statearr_36086[(10)] = inst_35959);

(statearr_36086[(11)] = inst_35957);

return statearr_36086;
})();
var statearr_36099_38758 = state_36050__$1;
(statearr_36099_38758[(2)] = null);

(statearr_36099_38758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (24))){
var inst_35964 = (state_36050[(12)]);
var inst_35960 = inst_35964;
var state_36050__$1 = (function (){var statearr_36110 = state_36050;
(statearr_36110[(9)] = inst_35960);

return statearr_36110;
})();
var statearr_36113_38759 = state_36050__$1;
(statearr_36113_38759[(2)] = null);

(statearr_36113_38759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (4))){
var inst_35986 = (state_36050[(13)]);
var inst_35981 = (state_36050[(7)]);
var inst_35979 = (state_36050[(2)]);
var inst_35981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35979,(0),null);
var inst_35983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35979,(1),null);
var inst_35986__$1 = (inst_35981__$1 == null);
var state_36050__$1 = (function (){var statearr_36119 = state_36050;
(statearr_36119[(13)] = inst_35986__$1);

(statearr_36119[(7)] = inst_35981__$1);

(statearr_36119[(14)] = inst_35983);

return statearr_36119;
})();
if(cljs.core.truth_(inst_35986__$1)){
var statearr_36120_38768 = state_36050__$1;
(statearr_36120_38768[(1)] = (5));

} else {
var statearr_36121_38769 = state_36050__$1;
(statearr_36121_38769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (15))){
var inst_36013 = (state_36050[(15)]);
var inst_35970 = (state_36050[(16)]);
var inst_36013__$1 = cljs.core.empty_QMARK_(inst_35970);
var state_36050__$1 = (function (){var statearr_36124 = state_36050;
(statearr_36124[(15)] = inst_36013__$1);

return statearr_36124;
})();
if(inst_36013__$1){
var statearr_36127_38774 = state_36050__$1;
(statearr_36127_38774[(1)] = (17));

} else {
var statearr_36128_38775 = state_36050__$1;
(statearr_36128_38775[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (21))){
var inst_35964 = (state_36050[(12)]);
var inst_35960 = inst_35964;
var state_36050__$1 = (function (){var statearr_36137 = state_36050;
(statearr_36137[(9)] = inst_35960);

return statearr_36137;
})();
var statearr_36140_38776 = state_36050__$1;
(statearr_36140_38776[(2)] = null);

(statearr_36140_38776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (13))){
var inst_36004 = (state_36050[(2)]);
var inst_36006 = calc_state();
var inst_35960 = inst_36006;
var state_36050__$1 = (function (){var statearr_36143 = state_36050;
(statearr_36143[(17)] = inst_36004);

(statearr_36143[(9)] = inst_35960);

return statearr_36143;
})();
var statearr_36146_38778 = state_36050__$1;
(statearr_36146_38778[(2)] = null);

(statearr_36146_38778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (22))){
var inst_36035 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36155_38779 = state_36050__$1;
(statearr_36155_38779[(2)] = inst_36035);

(statearr_36155_38779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (6))){
var inst_35983 = (state_36050[(14)]);
var inst_35991 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35983,change);
var state_36050__$1 = state_36050;
var statearr_36160_38780 = state_36050__$1;
(statearr_36160_38780[(2)] = inst_35991);

(statearr_36160_38780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (25))){
var state_36050__$1 = state_36050;
var statearr_36163_38781 = state_36050__$1;
(statearr_36163_38781[(2)] = null);

(statearr_36163_38781[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (17))){
var inst_35972 = (state_36050[(18)]);
var inst_35983 = (state_36050[(14)]);
var inst_36015 = (inst_35972.cljs$core$IFn$_invoke$arity$1 ? inst_35972.cljs$core$IFn$_invoke$arity$1(inst_35983) : inst_35972.call(null,inst_35983));
var inst_36016 = cljs.core.not(inst_36015);
var state_36050__$1 = state_36050;
var statearr_36172_38782 = state_36050__$1;
(statearr_36172_38782[(2)] = inst_36016);

(statearr_36172_38782[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (3))){
var inst_36039 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36050__$1,inst_36039);
} else {
if((state_val_36052 === (12))){
var state_36050__$1 = state_36050;
var statearr_36177_38784 = state_36050__$1;
(statearr_36177_38784[(2)] = null);

(statearr_36177_38784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (2))){
var inst_35964 = (state_36050[(12)]);
var inst_35960 = (state_36050[(9)]);
var inst_35964__$1 = cljs.core.__destructure_map(inst_35960);
var inst_35970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35964__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35964__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35964__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36050__$1 = (function (){var statearr_36179 = state_36050;
(statearr_36179[(12)] = inst_35964__$1);

(statearr_36179[(18)] = inst_35972);

(statearr_36179[(16)] = inst_35970);

return statearr_36179;
})();
return cljs.core.async.ioc_alts_BANG_(state_36050__$1,(4),inst_35973);
} else {
if((state_val_36052 === (23))){
var inst_36026 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
if(cljs.core.truth_(inst_36026)){
var statearr_36184_38787 = state_36050__$1;
(statearr_36184_38787[(1)] = (24));

} else {
var statearr_36189_38788 = state_36050__$1;
(statearr_36189_38788[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (19))){
var inst_36019 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36199_38789 = state_36050__$1;
(statearr_36199_38789[(2)] = inst_36019);

(statearr_36199_38789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (11))){
var inst_35983 = (state_36050[(14)]);
var inst_36000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35983);
var state_36050__$1 = state_36050;
var statearr_36212_38790 = state_36050__$1;
(statearr_36212_38790[(2)] = inst_36000);

(statearr_36212_38790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (9))){
var inst_36009 = (state_36050[(19)]);
var inst_35970 = (state_36050[(16)]);
var inst_35983 = (state_36050[(14)]);
var inst_36009__$1 = (inst_35970.cljs$core$IFn$_invoke$arity$1 ? inst_35970.cljs$core$IFn$_invoke$arity$1(inst_35983) : inst_35970.call(null,inst_35983));
var state_36050__$1 = (function (){var statearr_36213 = state_36050;
(statearr_36213[(19)] = inst_36009__$1);

return statearr_36213;
})();
if(cljs.core.truth_(inst_36009__$1)){
var statearr_36215_38792 = state_36050__$1;
(statearr_36215_38792[(1)] = (14));

} else {
var statearr_36216_38793 = state_36050__$1;
(statearr_36216_38793[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (5))){
var inst_35986 = (state_36050[(13)]);
var state_36050__$1 = state_36050;
var statearr_36218_38794 = state_36050__$1;
(statearr_36218_38794[(2)] = inst_35986);

(statearr_36218_38794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (14))){
var inst_36009 = (state_36050[(19)]);
var state_36050__$1 = state_36050;
var statearr_36220_38796 = state_36050__$1;
(statearr_36220_38796[(2)] = inst_36009);

(statearr_36220_38796[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (26))){
var inst_36031 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36225_38798 = state_36050__$1;
(statearr_36225_38798[(2)] = inst_36031);

(statearr_36225_38798[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (16))){
var inst_36022 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
if(cljs.core.truth_(inst_36022)){
var statearr_36228_38799 = state_36050__$1;
(statearr_36228_38799[(1)] = (20));

} else {
var statearr_36229_38800 = state_36050__$1;
(statearr_36229_38800[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (10))){
var inst_36037 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36232_38801 = state_36050__$1;
(statearr_36232_38801[(2)] = inst_36037);

(statearr_36232_38801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (18))){
var inst_36013 = (state_36050[(15)]);
var state_36050__$1 = state_36050;
var statearr_36234_38804 = state_36050__$1;
(statearr_36234_38804[(2)] = inst_36013);

(statearr_36234_38804[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36052 === (8))){
var inst_35981 = (state_36050[(7)]);
var inst_35998 = (inst_35981 == null);
var state_36050__$1 = state_36050;
if(cljs.core.truth_(inst_35998)){
var statearr_36238_38805 = state_36050__$1;
(statearr_36238_38805[(1)] = (11));

} else {
var statearr_36241_38806 = state_36050__$1;
(statearr_36241_38806[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32846__auto__ = null;
var cljs$core$async$mix_$_state_machine__32846__auto____0 = (function (){
var statearr_36247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36247[(0)] = cljs$core$async$mix_$_state_machine__32846__auto__);

(statearr_36247[(1)] = (1));

return statearr_36247;
});
var cljs$core$async$mix_$_state_machine__32846__auto____1 = (function (state_36050){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_36050);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e36251){var ex__32849__auto__ = e36251;
var statearr_36252_38811 = state_36050;
(statearr_36252_38811[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_36050[(4)]))){
var statearr_36254_38812 = state_36050;
(statearr_36254_38812[(1)] = cljs.core.first((state_36050[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38814 = state_36050;
state_36050 = G__38814;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32846__auto__ = function(state_36050){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32846__auto____1.call(this,state_36050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32846__auto____0;
cljs$core$async$mix_$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32846__auto____1;
return cljs$core$async$mix_$_state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_36257 = f__33157__auto__();
(statearr_36257[(6)] = c__33156__auto___38749);

return statearr_36257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_38818 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_38818(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38820 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_38820(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38824 = (function() {
var G__38825 = null;
var G__38825__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__38825__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__38825 = function(p,v){
switch(arguments.length){
case 1:
return G__38825__1.call(this,p);
case 2:
return G__38825__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38825.cljs$core$IFn$_invoke$arity$1 = G__38825__1;
G__38825.cljs$core$IFn$_invoke$arity$2 = G__38825__2;
return G__38825;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36315 = arguments.length;
switch (G__36315) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38824(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38824(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__36330 = arguments.length;
switch (G__36330) {
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
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36321_SHARP_){
if(cljs.core.truth_((p1__36321_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36321_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36321_SHARP_.call(null,topic)))){
return p1__36321_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36321_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36337 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36338){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36338 = meta36338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36339,meta36338__$1){
var self__ = this;
var _36339__$1 = this;
return (new cljs.core.async.t_cljs$core$async36337(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36338__$1));
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36339){
var self__ = this;
var _36339__$1 = this;
return self__.meta36338;
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36338","meta36338",-1451819658,null)], null);
}));

(cljs.core.async.t_cljs$core$async36337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36337");

(cljs.core.async.t_cljs$core$async36337.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async36337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36337.
 */
cljs.core.async.__GT_t_cljs$core$async36337 = (function cljs$core$async$__GT_t_cljs$core$async36337(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36338){
return (new cljs.core.async.t_cljs$core$async36337(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36338));
});

}

return (new cljs.core.async.t_cljs$core$async36337(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33156__auto___38855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_36457){
var state_val_36458 = (state_36457[(1)]);
if((state_val_36458 === (7))){
var inst_36447 = (state_36457[(2)]);
var state_36457__$1 = state_36457;
var statearr_36481_38857 = state_36457__$1;
(statearr_36481_38857[(2)] = inst_36447);

(statearr_36481_38857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (20))){
var state_36457__$1 = state_36457;
var statearr_36490_38858 = state_36457__$1;
(statearr_36490_38858[(2)] = null);

(statearr_36490_38858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (1))){
var state_36457__$1 = state_36457;
var statearr_36492_38860 = state_36457__$1;
(statearr_36492_38860[(2)] = null);

(statearr_36492_38860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (24))){
var inst_36429 = (state_36457[(7)]);
var inst_36439 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36429);
var state_36457__$1 = state_36457;
var statearr_36493_38861 = state_36457__$1;
(statearr_36493_38861[(2)] = inst_36439);

(statearr_36493_38861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (4))){
var inst_36373 = (state_36457[(8)]);
var inst_36373__$1 = (state_36457[(2)]);
var inst_36376 = (inst_36373__$1 == null);
var state_36457__$1 = (function (){var statearr_36496 = state_36457;
(statearr_36496[(8)] = inst_36373__$1);

return statearr_36496;
})();
if(cljs.core.truth_(inst_36376)){
var statearr_36503_38862 = state_36457__$1;
(statearr_36503_38862[(1)] = (5));

} else {
var statearr_36508_38863 = state_36457__$1;
(statearr_36508_38863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (15))){
var inst_36423 = (state_36457[(2)]);
var state_36457__$1 = state_36457;
var statearr_36513_38864 = state_36457__$1;
(statearr_36513_38864[(2)] = inst_36423);

(statearr_36513_38864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (21))){
var inst_36444 = (state_36457[(2)]);
var state_36457__$1 = (function (){var statearr_36517 = state_36457;
(statearr_36517[(9)] = inst_36444);

return statearr_36517;
})();
var statearr_36518_38869 = state_36457__$1;
(statearr_36518_38869[(2)] = null);

(statearr_36518_38869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (13))){
var inst_36403 = (state_36457[(10)]);
var inst_36405 = cljs.core.chunked_seq_QMARK_(inst_36403);
var state_36457__$1 = state_36457;
if(inst_36405){
var statearr_36532_38870 = state_36457__$1;
(statearr_36532_38870[(1)] = (16));

} else {
var statearr_36536_38871 = state_36457__$1;
(statearr_36536_38871[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (22))){
var inst_36435 = (state_36457[(2)]);
var state_36457__$1 = state_36457;
if(cljs.core.truth_(inst_36435)){
var statearr_36539_38872 = state_36457__$1;
(statearr_36539_38872[(1)] = (23));

} else {
var statearr_36544_38873 = state_36457__$1;
(statearr_36544_38873[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (6))){
var inst_36373 = (state_36457[(8)]);
var inst_36431 = (state_36457[(11)]);
var inst_36429 = (state_36457[(7)]);
var inst_36429__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36373) : topic_fn.call(null,inst_36373));
var inst_36430 = cljs.core.deref(mults);
var inst_36431__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36430,inst_36429__$1);
var state_36457__$1 = (function (){var statearr_36545 = state_36457;
(statearr_36545[(11)] = inst_36431__$1);

(statearr_36545[(7)] = inst_36429__$1);

return statearr_36545;
})();
if(cljs.core.truth_(inst_36431__$1)){
var statearr_36546_38874 = state_36457__$1;
(statearr_36546_38874[(1)] = (19));

} else {
var statearr_36551_38875 = state_36457__$1;
(statearr_36551_38875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (25))){
var inst_36441 = (state_36457[(2)]);
var state_36457__$1 = state_36457;
var statearr_36552_38876 = state_36457__$1;
(statearr_36552_38876[(2)] = inst_36441);

(statearr_36552_38876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (17))){
var inst_36403 = (state_36457[(10)]);
var inst_36413 = cljs.core.first(inst_36403);
var inst_36415 = cljs.core.async.muxch_STAR_(inst_36413);
var inst_36416 = cljs.core.async.close_BANG_(inst_36415);
var inst_36417 = cljs.core.next(inst_36403);
var inst_36386 = inst_36417;
var inst_36387 = null;
var inst_36388 = (0);
var inst_36389 = (0);
var state_36457__$1 = (function (){var statearr_36553 = state_36457;
(statearr_36553[(12)] = inst_36386);

(statearr_36553[(13)] = inst_36416);

(statearr_36553[(14)] = inst_36389);

(statearr_36553[(15)] = inst_36388);

(statearr_36553[(16)] = inst_36387);

return statearr_36553;
})();
var statearr_36554_38879 = state_36457__$1;
(statearr_36554_38879[(2)] = null);

(statearr_36554_38879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (3))){
var inst_36449 = (state_36457[(2)]);
var state_36457__$1 = state_36457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36457__$1,inst_36449);
} else {
if((state_val_36458 === (12))){
var inst_36425 = (state_36457[(2)]);
var state_36457__$1 = state_36457;
var statearr_36562_38882 = state_36457__$1;
(statearr_36562_38882[(2)] = inst_36425);

(statearr_36562_38882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (2))){
var state_36457__$1 = state_36457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36457__$1,(4),ch);
} else {
if((state_val_36458 === (23))){
var state_36457__$1 = state_36457;
var statearr_36568_38884 = state_36457__$1;
(statearr_36568_38884[(2)] = null);

(statearr_36568_38884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (19))){
var inst_36373 = (state_36457[(8)]);
var inst_36431 = (state_36457[(11)]);
var inst_36433 = cljs.core.async.muxch_STAR_(inst_36431);
var state_36457__$1 = state_36457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36457__$1,(22),inst_36433,inst_36373);
} else {
if((state_val_36458 === (11))){
var inst_36403 = (state_36457[(10)]);
var inst_36386 = (state_36457[(12)]);
var inst_36403__$1 = cljs.core.seq(inst_36386);
var state_36457__$1 = (function (){var statearr_36576 = state_36457;
(statearr_36576[(10)] = inst_36403__$1);

return statearr_36576;
})();
if(inst_36403__$1){
var statearr_36578_38886 = state_36457__$1;
(statearr_36578_38886[(1)] = (13));

} else {
var statearr_36581_38889 = state_36457__$1;
(statearr_36581_38889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (9))){
var inst_36427 = (state_36457[(2)]);
var state_36457__$1 = state_36457;
var statearr_36582_38890 = state_36457__$1;
(statearr_36582_38890[(2)] = inst_36427);

(statearr_36582_38890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (5))){
var inst_36383 = cljs.core.deref(mults);
var inst_36384 = cljs.core.vals(inst_36383);
var inst_36385 = cljs.core.seq(inst_36384);
var inst_36386 = inst_36385;
var inst_36387 = null;
var inst_36388 = (0);
var inst_36389 = (0);
var state_36457__$1 = (function (){var statearr_36585 = state_36457;
(statearr_36585[(12)] = inst_36386);

(statearr_36585[(14)] = inst_36389);

(statearr_36585[(15)] = inst_36388);

(statearr_36585[(16)] = inst_36387);

return statearr_36585;
})();
var statearr_36590_38891 = state_36457__$1;
(statearr_36590_38891[(2)] = null);

(statearr_36590_38891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (14))){
var state_36457__$1 = state_36457;
var statearr_36599_38892 = state_36457__$1;
(statearr_36599_38892[(2)] = null);

(statearr_36599_38892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (16))){
var inst_36403 = (state_36457[(10)]);
var inst_36407 = cljs.core.chunk_first(inst_36403);
var inst_36409 = cljs.core.chunk_rest(inst_36403);
var inst_36410 = cljs.core.count(inst_36407);
var inst_36386 = inst_36409;
var inst_36387 = inst_36407;
var inst_36388 = inst_36410;
var inst_36389 = (0);
var state_36457__$1 = (function (){var statearr_36615 = state_36457;
(statearr_36615[(12)] = inst_36386);

(statearr_36615[(14)] = inst_36389);

(statearr_36615[(15)] = inst_36388);

(statearr_36615[(16)] = inst_36387);

return statearr_36615;
})();
var statearr_36622_38897 = state_36457__$1;
(statearr_36622_38897[(2)] = null);

(statearr_36622_38897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (10))){
var inst_36386 = (state_36457[(12)]);
var inst_36389 = (state_36457[(14)]);
var inst_36388 = (state_36457[(15)]);
var inst_36387 = (state_36457[(16)]);
var inst_36394 = cljs.core._nth(inst_36387,inst_36389);
var inst_36395 = cljs.core.async.muxch_STAR_(inst_36394);
var inst_36396 = cljs.core.async.close_BANG_(inst_36395);
var inst_36400 = (inst_36389 + (1));
var tmp36595 = inst_36386;
var tmp36596 = inst_36388;
var tmp36597 = inst_36387;
var inst_36386__$1 = tmp36595;
var inst_36387__$1 = tmp36597;
var inst_36388__$1 = tmp36596;
var inst_36389__$1 = inst_36400;
var state_36457__$1 = (function (){var statearr_36628 = state_36457;
(statearr_36628[(17)] = inst_36396);

(statearr_36628[(12)] = inst_36386__$1);

(statearr_36628[(14)] = inst_36389__$1);

(statearr_36628[(15)] = inst_36388__$1);

(statearr_36628[(16)] = inst_36387__$1);

return statearr_36628;
})();
var statearr_36631_38907 = state_36457__$1;
(statearr_36631_38907[(2)] = null);

(statearr_36631_38907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (18))){
var inst_36420 = (state_36457[(2)]);
var state_36457__$1 = state_36457;
var statearr_36635_38911 = state_36457__$1;
(statearr_36635_38911[(2)] = inst_36420);

(statearr_36635_38911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36458 === (8))){
var inst_36389 = (state_36457[(14)]);
var inst_36388 = (state_36457[(15)]);
var inst_36391 = (inst_36389 < inst_36388);
var inst_36392 = inst_36391;
var state_36457__$1 = state_36457;
if(cljs.core.truth_(inst_36392)){
var statearr_36637_38915 = state_36457__$1;
(statearr_36637_38915[(1)] = (10));

} else {
var statearr_36639_38916 = state_36457__$1;
(statearr_36639_38916[(1)] = (11));

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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_36641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36641[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_36641[(1)] = (1));

return statearr_36641;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_36457){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_36457);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e36643){var ex__32849__auto__ = e36643;
var statearr_36644_38919 = state_36457;
(statearr_36644_38919[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_36457[(4)]))){
var statearr_36646_38922 = state_36457;
(statearr_36646_38922[(1)] = cljs.core.first((state_36457[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38923 = state_36457;
state_36457 = G__38923;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_36457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_36457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_36651 = f__33157__auto__();
(statearr_36651[(6)] = c__33156__auto___38855);

return statearr_36651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
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
var G__36654 = arguments.length;
switch (G__36654) {
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
var G__36666 = arguments.length;
switch (G__36666) {
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
var G__36671 = arguments.length;
switch (G__36671) {
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
var c__33156__auto___38956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_36748){
var state_val_36749 = (state_36748[(1)]);
if((state_val_36749 === (7))){
var state_36748__$1 = state_36748;
var statearr_36750_38963 = state_36748__$1;
(statearr_36750_38963[(2)] = null);

(statearr_36750_38963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (1))){
var state_36748__$1 = state_36748;
var statearr_36753_38974 = state_36748__$1;
(statearr_36753_38974[(2)] = null);

(statearr_36753_38974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (4))){
var inst_36688 = (state_36748[(7)]);
var inst_36689 = (state_36748[(8)]);
var inst_36691 = (inst_36689 < inst_36688);
var state_36748__$1 = state_36748;
if(cljs.core.truth_(inst_36691)){
var statearr_36754_38975 = state_36748__$1;
(statearr_36754_38975[(1)] = (6));

} else {
var statearr_36755_38976 = state_36748__$1;
(statearr_36755_38976[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (15))){
var inst_36732 = (state_36748[(9)]);
var inst_36737 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36732);
var state_36748__$1 = state_36748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36748__$1,(17),out,inst_36737);
} else {
if((state_val_36749 === (13))){
var inst_36732 = (state_36748[(9)]);
var inst_36732__$1 = (state_36748[(2)]);
var inst_36733 = cljs.core.some(cljs.core.nil_QMARK_,inst_36732__$1);
var state_36748__$1 = (function (){var statearr_36756 = state_36748;
(statearr_36756[(9)] = inst_36732__$1);

return statearr_36756;
})();
if(cljs.core.truth_(inst_36733)){
var statearr_36757_38982 = state_36748__$1;
(statearr_36757_38982[(1)] = (14));

} else {
var statearr_36758_38986 = state_36748__$1;
(statearr_36758_38986[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (6))){
var state_36748__$1 = state_36748;
var statearr_36759_38991 = state_36748__$1;
(statearr_36759_38991[(2)] = null);

(statearr_36759_38991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (17))){
var inst_36739 = (state_36748[(2)]);
var state_36748__$1 = (function (){var statearr_36768 = state_36748;
(statearr_36768[(10)] = inst_36739);

return statearr_36768;
})();
var statearr_36769_38997 = state_36748__$1;
(statearr_36769_38997[(2)] = null);

(statearr_36769_38997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (3))){
var inst_36745 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36748__$1,inst_36745);
} else {
if((state_val_36749 === (12))){
var _ = (function (){var statearr_36772 = state_36748;
(statearr_36772[(4)] = cljs.core.rest((state_36748[(4)])));

return statearr_36772;
})();
var state_36748__$1 = state_36748;
var ex36767 = (state_36748__$1[(2)]);
var statearr_36777_38999 = state_36748__$1;
(statearr_36777_38999[(5)] = ex36767);


if((ex36767 instanceof Object)){
var statearr_36779_39000 = state_36748__$1;
(statearr_36779_39000[(1)] = (11));

(statearr_36779_39000[(5)] = null);

} else {
throw ex36767;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (2))){
var inst_36687 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36688 = cnt;
var inst_36689 = (0);
var state_36748__$1 = (function (){var statearr_36786 = state_36748;
(statearr_36786[(11)] = inst_36687);

(statearr_36786[(7)] = inst_36688);

(statearr_36786[(8)] = inst_36689);

return statearr_36786;
})();
var statearr_36787_39007 = state_36748__$1;
(statearr_36787_39007[(2)] = null);

(statearr_36787_39007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (11))){
var inst_36707 = (state_36748[(2)]);
var inst_36708 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36748__$1 = (function (){var statearr_36789 = state_36748;
(statearr_36789[(12)] = inst_36707);

return statearr_36789;
})();
var statearr_36791_39016 = state_36748__$1;
(statearr_36791_39016[(2)] = inst_36708);

(statearr_36791_39016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (9))){
var inst_36689 = (state_36748[(8)]);
var _ = (function (){var statearr_36792 = state_36748;
(statearr_36792[(4)] = cljs.core.cons((12),(state_36748[(4)])));

return statearr_36792;
})();
var inst_36714 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36689) : chs__$1.call(null,inst_36689));
var inst_36718 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36689) : done.call(null,inst_36689));
var inst_36719 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36714,inst_36718);
var ___$1 = (function (){var statearr_36796 = state_36748;
(statearr_36796[(4)] = cljs.core.rest((state_36748[(4)])));

return statearr_36796;
})();
var state_36748__$1 = state_36748;
var statearr_36798_39027 = state_36748__$1;
(statearr_36798_39027[(2)] = inst_36719);

(statearr_36798_39027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (5))){
var inst_36730 = (state_36748[(2)]);
var state_36748__$1 = (function (){var statearr_36799 = state_36748;
(statearr_36799[(13)] = inst_36730);

return statearr_36799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36748__$1,(13),dchan);
} else {
if((state_val_36749 === (14))){
var inst_36735 = cljs.core.async.close_BANG_(out);
var state_36748__$1 = state_36748;
var statearr_36800_39049 = state_36748__$1;
(statearr_36800_39049[(2)] = inst_36735);

(statearr_36800_39049[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (16))){
var inst_36743 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36801_39051 = state_36748__$1;
(statearr_36801_39051[(2)] = inst_36743);

(statearr_36801_39051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (10))){
var inst_36689 = (state_36748[(8)]);
var inst_36722 = (state_36748[(2)]);
var inst_36724 = (inst_36689 + (1));
var inst_36689__$1 = inst_36724;
var state_36748__$1 = (function (){var statearr_36802 = state_36748;
(statearr_36802[(14)] = inst_36722);

(statearr_36802[(8)] = inst_36689__$1);

return statearr_36802;
})();
var statearr_36804_39053 = state_36748__$1;
(statearr_36804_39053[(2)] = null);

(statearr_36804_39053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (8))){
var inst_36728 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36806_39058 = state_36748__$1;
(statearr_36806_39058[(2)] = inst_36728);

(statearr_36806_39058[(1)] = (5));


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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_36809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36809[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_36809[(1)] = (1));

return statearr_36809;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_36748){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_36748);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e36813){var ex__32849__auto__ = e36813;
var statearr_36814_39065 = state_36748;
(statearr_36814_39065[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_36748[(4)]))){
var statearr_36815_39066 = state_36748;
(statearr_36815_39066[(1)] = cljs.core.first((state_36748[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39071 = state_36748;
state_36748 = G__39071;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_36748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_36748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_36817 = f__33157__auto__();
(statearr_36817[(6)] = c__33156__auto___38956);

return statearr_36817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));


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
var G__36821 = arguments.length;
switch (G__36821) {
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
var c__33156__auto___39085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_36860){
var state_val_36861 = (state_36860[(1)]);
if((state_val_36861 === (7))){
var inst_36840 = (state_36860[(7)]);
var inst_36839 = (state_36860[(8)]);
var inst_36839__$1 = (state_36860[(2)]);
var inst_36840__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36839__$1,(0),null);
var inst_36841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36839__$1,(1),null);
var inst_36842 = (inst_36840__$1 == null);
var state_36860__$1 = (function (){var statearr_36865 = state_36860;
(statearr_36865[(7)] = inst_36840__$1);

(statearr_36865[(8)] = inst_36839__$1);

(statearr_36865[(9)] = inst_36841);

return statearr_36865;
})();
if(cljs.core.truth_(inst_36842)){
var statearr_36866_39094 = state_36860__$1;
(statearr_36866_39094[(1)] = (8));

} else {
var statearr_36867_39096 = state_36860__$1;
(statearr_36867_39096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (1))){
var inst_36828 = cljs.core.vec(chs);
var inst_36829 = inst_36828;
var state_36860__$1 = (function (){var statearr_36868 = state_36860;
(statearr_36868[(10)] = inst_36829);

return statearr_36868;
})();
var statearr_36869_39104 = state_36860__$1;
(statearr_36869_39104[(2)] = null);

(statearr_36869_39104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (4))){
var inst_36829 = (state_36860[(10)]);
var state_36860__$1 = state_36860;
return cljs.core.async.ioc_alts_BANG_(state_36860__$1,(7),inst_36829);
} else {
if((state_val_36861 === (6))){
var inst_36856 = (state_36860[(2)]);
var state_36860__$1 = state_36860;
var statearr_36870_39106 = state_36860__$1;
(statearr_36870_39106[(2)] = inst_36856);

(statearr_36870_39106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (3))){
var inst_36858 = (state_36860[(2)]);
var state_36860__$1 = state_36860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36860__$1,inst_36858);
} else {
if((state_val_36861 === (2))){
var inst_36829 = (state_36860[(10)]);
var inst_36832 = cljs.core.count(inst_36829);
var inst_36833 = (inst_36832 > (0));
var state_36860__$1 = state_36860;
if(cljs.core.truth_(inst_36833)){
var statearr_36874_39110 = state_36860__$1;
(statearr_36874_39110[(1)] = (4));

} else {
var statearr_36875_39111 = state_36860__$1;
(statearr_36875_39111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (11))){
var inst_36829 = (state_36860[(10)]);
var inst_36849 = (state_36860[(2)]);
var tmp36872 = inst_36829;
var inst_36829__$1 = tmp36872;
var state_36860__$1 = (function (){var statearr_36876 = state_36860;
(statearr_36876[(10)] = inst_36829__$1);

(statearr_36876[(11)] = inst_36849);

return statearr_36876;
})();
var statearr_36877_39112 = state_36860__$1;
(statearr_36877_39112[(2)] = null);

(statearr_36877_39112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (9))){
var inst_36840 = (state_36860[(7)]);
var state_36860__$1 = state_36860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36860__$1,(11),out,inst_36840);
} else {
if((state_val_36861 === (5))){
var inst_36854 = cljs.core.async.close_BANG_(out);
var state_36860__$1 = state_36860;
var statearr_36880_39115 = state_36860__$1;
(statearr_36880_39115[(2)] = inst_36854);

(statearr_36880_39115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (10))){
var inst_36852 = (state_36860[(2)]);
var state_36860__$1 = state_36860;
var statearr_36887_39117 = state_36860__$1;
(statearr_36887_39117[(2)] = inst_36852);

(statearr_36887_39117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36861 === (8))){
var inst_36829 = (state_36860[(10)]);
var inst_36840 = (state_36860[(7)]);
var inst_36839 = (state_36860[(8)]);
var inst_36841 = (state_36860[(9)]);
var inst_36844 = (function (){var cs = inst_36829;
var vec__36835 = inst_36839;
var v = inst_36840;
var c = inst_36841;
return (function (p1__36819_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36819_SHARP_);
});
})();
var inst_36845 = cljs.core.filterv(inst_36844,inst_36829);
var inst_36829__$1 = inst_36845;
var state_36860__$1 = (function (){var statearr_36889 = state_36860;
(statearr_36889[(10)] = inst_36829__$1);

return statearr_36889;
})();
var statearr_36890_39126 = state_36860__$1;
(statearr_36890_39126[(2)] = null);

(statearr_36890_39126[(1)] = (2));


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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_36895 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36895[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_36895[(1)] = (1));

return statearr_36895;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_36860){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_36860);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e36896){var ex__32849__auto__ = e36896;
var statearr_36898_39127 = state_36860;
(statearr_36898_39127[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_36860[(4)]))){
var statearr_36899_39128 = state_36860;
(statearr_36899_39128[(1)] = cljs.core.first((state_36860[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39129 = state_36860;
state_36860 = G__39129;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_36860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_36860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_36901 = f__33157__auto__();
(statearr_36901[(6)] = c__33156__auto___39085);

return statearr_36901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
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
var G__36911 = arguments.length;
switch (G__36911) {
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
var c__33156__auto___39138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_36939){
var state_val_36940 = (state_36939[(1)]);
if((state_val_36940 === (7))){
var inst_36921 = (state_36939[(7)]);
var inst_36921__$1 = (state_36939[(2)]);
var inst_36922 = (inst_36921__$1 == null);
var inst_36923 = cljs.core.not(inst_36922);
var state_36939__$1 = (function (){var statearr_36950 = state_36939;
(statearr_36950[(7)] = inst_36921__$1);

return statearr_36950;
})();
if(inst_36923){
var statearr_36952_39143 = state_36939__$1;
(statearr_36952_39143[(1)] = (8));

} else {
var statearr_36953_39144 = state_36939__$1;
(statearr_36953_39144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (1))){
var inst_36916 = (0);
var state_36939__$1 = (function (){var statearr_36954 = state_36939;
(statearr_36954[(8)] = inst_36916);

return statearr_36954;
})();
var statearr_36955_39146 = state_36939__$1;
(statearr_36955_39146[(2)] = null);

(statearr_36955_39146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (4))){
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36939__$1,(7),ch);
} else {
if((state_val_36940 === (6))){
var inst_36934 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36961_39147 = state_36939__$1;
(statearr_36961_39147[(2)] = inst_36934);

(statearr_36961_39147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (3))){
var inst_36936 = (state_36939[(2)]);
var inst_36937 = cljs.core.async.close_BANG_(out);
var state_36939__$1 = (function (){var statearr_36966 = state_36939;
(statearr_36966[(9)] = inst_36936);

return statearr_36966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36939__$1,inst_36937);
} else {
if((state_val_36940 === (2))){
var inst_36916 = (state_36939[(8)]);
var inst_36918 = (inst_36916 < n);
var state_36939__$1 = state_36939;
if(cljs.core.truth_(inst_36918)){
var statearr_36969_39151 = state_36939__$1;
(statearr_36969_39151[(1)] = (4));

} else {
var statearr_36978_39152 = state_36939__$1;
(statearr_36978_39152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (11))){
var inst_36916 = (state_36939[(8)]);
var inst_36926 = (state_36939[(2)]);
var inst_36927 = (inst_36916 + (1));
var inst_36916__$1 = inst_36927;
var state_36939__$1 = (function (){var statearr_36987 = state_36939;
(statearr_36987[(8)] = inst_36916__$1);

(statearr_36987[(10)] = inst_36926);

return statearr_36987;
})();
var statearr_36989_39158 = state_36939__$1;
(statearr_36989_39158[(2)] = null);

(statearr_36989_39158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (9))){
var state_36939__$1 = state_36939;
var statearr_36990_39160 = state_36939__$1;
(statearr_36990_39160[(2)] = null);

(statearr_36990_39160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (5))){
var state_36939__$1 = state_36939;
var statearr_36997_39165 = state_36939__$1;
(statearr_36997_39165[(2)] = null);

(statearr_36997_39165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (10))){
var inst_36931 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_37000_39166 = state_36939__$1;
(statearr_37000_39166[(2)] = inst_36931);

(statearr_37000_39166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (8))){
var inst_36921 = (state_36939[(7)]);
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36939__$1,(11),out,inst_36921);
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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_37001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37001[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_37001[(1)] = (1));

return statearr_37001;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_36939){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_36939);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e37010){var ex__32849__auto__ = e37010;
var statearr_37013_39170 = state_36939;
(statearr_37013_39170[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_36939[(4)]))){
var statearr_37020_39171 = state_36939;
(statearr_37020_39171[(1)] = cljs.core.first((state_36939[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39173 = state_36939;
state_36939 = G__39173;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_36939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_36939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_37028 = f__33157__auto__();
(statearr_37028[(6)] = c__33156__auto___39138);

return statearr_37028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37033 = (function (f,ch,meta37034){
this.f = f;
this.ch = ch;
this.meta37034 = meta37034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37035,meta37034__$1){
var self__ = this;
var _37035__$1 = this;
return (new cljs.core.async.t_cljs$core$async37033(self__.f,self__.ch,meta37034__$1));
}));

(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37035){
var self__ = this;
var _37035__$1 = this;
return self__.meta37034;
}));

(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37044 = (function (f,ch,meta37034,_,fn1,meta37045){
this.f = f;
this.ch = ch;
this.meta37034 = meta37034;
this._ = _;
this.fn1 = fn1;
this.meta37045 = meta37045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37046,meta37045__$1){
var self__ = this;
var _37046__$1 = this;
return (new cljs.core.async.t_cljs$core$async37044(self__.f,self__.ch,self__.meta37034,self__._,self__.fn1,meta37045__$1));
}));

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37046){
var self__ = this;
var _37046__$1 = this;
return self__.meta37045;
}));

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37029_SHARP_){
var G__37051 = (((p1__37029_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37029_SHARP_) : self__.f.call(null,p1__37029_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37051) : f1.call(null,G__37051));
});
}));

(cljs.core.async.t_cljs$core$async37044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37034","meta37034",519290440,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37033","cljs.core.async/t_cljs$core$async37033",935634253,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37045","meta37045",-1648473940,null)], null);
}));

(cljs.core.async.t_cljs$core$async37044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37044");

(cljs.core.async.t_cljs$core$async37044.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37044.
 */
cljs.core.async.__GT_t_cljs$core$async37044 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37044(f__$1,ch__$1,meta37034__$1,___$2,fn1__$1,meta37045){
return (new cljs.core.async.t_cljs$core$async37044(f__$1,ch__$1,meta37034__$1,___$2,fn1__$1,meta37045));
});

}

return (new cljs.core.async.t_cljs$core$async37044(self__.f,self__.ch,self__.meta37034,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37058 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37058) : self__.f.call(null,G__37058));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37034","meta37034",519290440,null)], null);
}));

(cljs.core.async.t_cljs$core$async37033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37033");

(cljs.core.async.t_cljs$core$async37033.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37033.
 */
cljs.core.async.__GT_t_cljs$core$async37033 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37033(f__$1,ch__$1,meta37034){
return (new cljs.core.async.t_cljs$core$async37033(f__$1,ch__$1,meta37034));
});

}

return (new cljs.core.async.t_cljs$core$async37033(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37088 = (function (f,ch,meta37089){
this.f = f;
this.ch = ch;
this.meta37089 = meta37089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37090,meta37089__$1){
var self__ = this;
var _37090__$1 = this;
return (new cljs.core.async.t_cljs$core$async37088(self__.f,self__.ch,meta37089__$1));
}));

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37090){
var self__ = this;
var _37090__$1 = this;
return self__.meta37089;
}));

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37089","meta37089",1137509317,null)], null);
}));

(cljs.core.async.t_cljs$core$async37088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37088");

(cljs.core.async.t_cljs$core$async37088.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37088.
 */
cljs.core.async.__GT_t_cljs$core$async37088 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37088(f__$1,ch__$1,meta37089){
return (new cljs.core.async.t_cljs$core$async37088(f__$1,ch__$1,meta37089));
});

}

return (new cljs.core.async.t_cljs$core$async37088(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37116 = (function (p,ch,meta37117){
this.p = p;
this.ch = ch;
this.meta37117 = meta37117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37118,meta37117__$1){
var self__ = this;
var _37118__$1 = this;
return (new cljs.core.async.t_cljs$core$async37116(self__.p,self__.ch,meta37117__$1));
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37118){
var self__ = this;
var _37118__$1 = this;
return self__.meta37117;
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37117","meta37117",714277370,null)], null);
}));

(cljs.core.async.t_cljs$core$async37116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37116");

(cljs.core.async.t_cljs$core$async37116.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37116.
 */
cljs.core.async.__GT_t_cljs$core$async37116 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37116(p__$1,ch__$1,meta37117){
return (new cljs.core.async.t_cljs$core$async37116(p__$1,ch__$1,meta37117));
});

}

return (new cljs.core.async.t_cljs$core$async37116(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37138 = arguments.length;
switch (G__37138) {
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
var c__33156__auto___39228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_37166){
var state_val_37167 = (state_37166[(1)]);
if((state_val_37167 === (7))){
var inst_37162 = (state_37166[(2)]);
var state_37166__$1 = state_37166;
var statearr_37170_39232 = state_37166__$1;
(statearr_37170_39232[(2)] = inst_37162);

(statearr_37170_39232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37167 === (1))){
var state_37166__$1 = state_37166;
var statearr_37171_39236 = state_37166__$1;
(statearr_37171_39236[(2)] = null);

(statearr_37171_39236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37167 === (4))){
var inst_37144 = (state_37166[(7)]);
var inst_37144__$1 = (state_37166[(2)]);
var inst_37145 = (inst_37144__$1 == null);
var state_37166__$1 = (function (){var statearr_37172 = state_37166;
(statearr_37172[(7)] = inst_37144__$1);

return statearr_37172;
})();
if(cljs.core.truth_(inst_37145)){
var statearr_37176_39237 = state_37166__$1;
(statearr_37176_39237[(1)] = (5));

} else {
var statearr_37177_39238 = state_37166__$1;
(statearr_37177_39238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37167 === (6))){
var inst_37144 = (state_37166[(7)]);
var inst_37152 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37144) : p.call(null,inst_37144));
var state_37166__$1 = state_37166;
if(cljs.core.truth_(inst_37152)){
var statearr_37178_39245 = state_37166__$1;
(statearr_37178_39245[(1)] = (8));

} else {
var statearr_37180_39246 = state_37166__$1;
(statearr_37180_39246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37167 === (3))){
var inst_37164 = (state_37166[(2)]);
var state_37166__$1 = state_37166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37166__$1,inst_37164);
} else {
if((state_val_37167 === (2))){
var state_37166__$1 = state_37166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37166__$1,(4),ch);
} else {
if((state_val_37167 === (11))){
var inst_37155 = (state_37166[(2)]);
var state_37166__$1 = state_37166;
var statearr_37190_39252 = state_37166__$1;
(statearr_37190_39252[(2)] = inst_37155);

(statearr_37190_39252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37167 === (9))){
var state_37166__$1 = state_37166;
var statearr_37197_39253 = state_37166__$1;
(statearr_37197_39253[(2)] = null);

(statearr_37197_39253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37167 === (5))){
var inst_37150 = cljs.core.async.close_BANG_(out);
var state_37166__$1 = state_37166;
var statearr_37198_39259 = state_37166__$1;
(statearr_37198_39259[(2)] = inst_37150);

(statearr_37198_39259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37167 === (10))){
var inst_37158 = (state_37166[(2)]);
var state_37166__$1 = (function (){var statearr_37200 = state_37166;
(statearr_37200[(8)] = inst_37158);

return statearr_37200;
})();
var statearr_37201_39265 = state_37166__$1;
(statearr_37201_39265[(2)] = null);

(statearr_37201_39265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37167 === (8))){
var inst_37144 = (state_37166[(7)]);
var state_37166__$1 = state_37166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37166__$1,(11),out,inst_37144);
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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_37209 = [null,null,null,null,null,null,null,null,null];
(statearr_37209[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_37209[(1)] = (1));

return statearr_37209;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_37166){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_37166);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e37214){var ex__32849__auto__ = e37214;
var statearr_37215_39269 = state_37166;
(statearr_37215_39269[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_37166[(4)]))){
var statearr_37217_39270 = state_37166;
(statearr_37217_39270[(1)] = cljs.core.first((state_37166[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39271 = state_37166;
state_37166 = G__39271;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_37166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_37166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_37220 = f__33157__auto__();
(statearr_37220[(6)] = c__33156__auto___39228);

return statearr_37220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37224 = arguments.length;
switch (G__37224) {
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
var c__33156__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_37320){
var state_val_37321 = (state_37320[(1)]);
if((state_val_37321 === (7))){
var inst_37311 = (state_37320[(2)]);
var state_37320__$1 = state_37320;
var statearr_37328_39280 = state_37320__$1;
(statearr_37328_39280[(2)] = inst_37311);

(statearr_37328_39280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (20))){
var inst_37271 = (state_37320[(7)]);
var inst_37286 = (state_37320[(2)]);
var inst_37288 = cljs.core.next(inst_37271);
var inst_37257 = inst_37288;
var inst_37258 = null;
var inst_37259 = (0);
var inst_37260 = (0);
var state_37320__$1 = (function (){var statearr_37333 = state_37320;
(statearr_37333[(8)] = inst_37258);

(statearr_37333[(9)] = inst_37260);

(statearr_37333[(10)] = inst_37259);

(statearr_37333[(11)] = inst_37257);

(statearr_37333[(12)] = inst_37286);

return statearr_37333;
})();
var statearr_37334_39282 = state_37320__$1;
(statearr_37334_39282[(2)] = null);

(statearr_37334_39282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (1))){
var state_37320__$1 = state_37320;
var statearr_37335_39283 = state_37320__$1;
(statearr_37335_39283[(2)] = null);

(statearr_37335_39283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (4))){
var inst_37243 = (state_37320[(13)]);
var inst_37243__$1 = (state_37320[(2)]);
var inst_37245 = (inst_37243__$1 == null);
var state_37320__$1 = (function (){var statearr_37341 = state_37320;
(statearr_37341[(13)] = inst_37243__$1);

return statearr_37341;
})();
if(cljs.core.truth_(inst_37245)){
var statearr_37346_39286 = state_37320__$1;
(statearr_37346_39286[(1)] = (5));

} else {
var statearr_37347_39287 = state_37320__$1;
(statearr_37347_39287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (15))){
var state_37320__$1 = state_37320;
var statearr_37355_39288 = state_37320__$1;
(statearr_37355_39288[(2)] = null);

(statearr_37355_39288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (21))){
var state_37320__$1 = state_37320;
var statearr_37358_39290 = state_37320__$1;
(statearr_37358_39290[(2)] = null);

(statearr_37358_39290[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (13))){
var inst_37258 = (state_37320[(8)]);
var inst_37260 = (state_37320[(9)]);
var inst_37259 = (state_37320[(10)]);
var inst_37257 = (state_37320[(11)]);
var inst_37267 = (state_37320[(2)]);
var inst_37268 = (inst_37260 + (1));
var tmp37351 = inst_37258;
var tmp37352 = inst_37259;
var tmp37353 = inst_37257;
var inst_37257__$1 = tmp37353;
var inst_37258__$1 = tmp37351;
var inst_37259__$1 = tmp37352;
var inst_37260__$1 = inst_37268;
var state_37320__$1 = (function (){var statearr_37368 = state_37320;
(statearr_37368[(8)] = inst_37258__$1);

(statearr_37368[(9)] = inst_37260__$1);

(statearr_37368[(14)] = inst_37267);

(statearr_37368[(10)] = inst_37259__$1);

(statearr_37368[(11)] = inst_37257__$1);

return statearr_37368;
})();
var statearr_37371_39292 = state_37320__$1;
(statearr_37371_39292[(2)] = null);

(statearr_37371_39292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (22))){
var state_37320__$1 = state_37320;
var statearr_37382_39293 = state_37320__$1;
(statearr_37382_39293[(2)] = null);

(statearr_37382_39293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (6))){
var inst_37243 = (state_37320[(13)]);
var inst_37253 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37243) : f.call(null,inst_37243));
var inst_37254 = cljs.core.seq(inst_37253);
var inst_37257 = inst_37254;
var inst_37258 = null;
var inst_37259 = (0);
var inst_37260 = (0);
var state_37320__$1 = (function (){var statearr_37388 = state_37320;
(statearr_37388[(8)] = inst_37258);

(statearr_37388[(9)] = inst_37260);

(statearr_37388[(10)] = inst_37259);

(statearr_37388[(11)] = inst_37257);

return statearr_37388;
})();
var statearr_37389_39294 = state_37320__$1;
(statearr_37389_39294[(2)] = null);

(statearr_37389_39294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (17))){
var inst_37271 = (state_37320[(7)]);
var inst_37275 = cljs.core.chunk_first(inst_37271);
var inst_37276 = cljs.core.chunk_rest(inst_37271);
var inst_37278 = cljs.core.count(inst_37275);
var inst_37257 = inst_37276;
var inst_37258 = inst_37275;
var inst_37259 = inst_37278;
var inst_37260 = (0);
var state_37320__$1 = (function (){var statearr_37399 = state_37320;
(statearr_37399[(8)] = inst_37258);

(statearr_37399[(9)] = inst_37260);

(statearr_37399[(10)] = inst_37259);

(statearr_37399[(11)] = inst_37257);

return statearr_37399;
})();
var statearr_37403_39298 = state_37320__$1;
(statearr_37403_39298[(2)] = null);

(statearr_37403_39298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (3))){
var inst_37316 = (state_37320[(2)]);
var state_37320__$1 = state_37320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37320__$1,inst_37316);
} else {
if((state_val_37321 === (12))){
var inst_37296 = (state_37320[(2)]);
var state_37320__$1 = state_37320;
var statearr_37416_39300 = state_37320__$1;
(statearr_37416_39300[(2)] = inst_37296);

(statearr_37416_39300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (2))){
var state_37320__$1 = state_37320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37320__$1,(4),in$);
} else {
if((state_val_37321 === (23))){
var inst_37309 = (state_37320[(2)]);
var state_37320__$1 = state_37320;
var statearr_37431_39309 = state_37320__$1;
(statearr_37431_39309[(2)] = inst_37309);

(statearr_37431_39309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (19))){
var inst_37291 = (state_37320[(2)]);
var state_37320__$1 = state_37320;
var statearr_37434_39314 = state_37320__$1;
(statearr_37434_39314[(2)] = inst_37291);

(statearr_37434_39314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (11))){
var inst_37271 = (state_37320[(7)]);
var inst_37257 = (state_37320[(11)]);
var inst_37271__$1 = cljs.core.seq(inst_37257);
var state_37320__$1 = (function (){var statearr_37437 = state_37320;
(statearr_37437[(7)] = inst_37271__$1);

return statearr_37437;
})();
if(inst_37271__$1){
var statearr_37438_39325 = state_37320__$1;
(statearr_37438_39325[(1)] = (14));

} else {
var statearr_37439_39326 = state_37320__$1;
(statearr_37439_39326[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (9))){
var inst_37298 = (state_37320[(2)]);
var inst_37303 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37320__$1 = (function (){var statearr_37442 = state_37320;
(statearr_37442[(15)] = inst_37298);

return statearr_37442;
})();
if(cljs.core.truth_(inst_37303)){
var statearr_37443_39327 = state_37320__$1;
(statearr_37443_39327[(1)] = (21));

} else {
var statearr_37444_39328 = state_37320__$1;
(statearr_37444_39328[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (5))){
var inst_37247 = cljs.core.async.close_BANG_(out);
var state_37320__$1 = state_37320;
var statearr_37445_39329 = state_37320__$1;
(statearr_37445_39329[(2)] = inst_37247);

(statearr_37445_39329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (14))){
var inst_37271 = (state_37320[(7)]);
var inst_37273 = cljs.core.chunked_seq_QMARK_(inst_37271);
var state_37320__$1 = state_37320;
if(inst_37273){
var statearr_37448_39335 = state_37320__$1;
(statearr_37448_39335[(1)] = (17));

} else {
var statearr_37449_39336 = state_37320__$1;
(statearr_37449_39336[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (16))){
var inst_37294 = (state_37320[(2)]);
var state_37320__$1 = state_37320;
var statearr_37450_39337 = state_37320__$1;
(statearr_37450_39337[(2)] = inst_37294);

(statearr_37450_39337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37321 === (10))){
var inst_37258 = (state_37320[(8)]);
var inst_37260 = (state_37320[(9)]);
var inst_37265 = cljs.core._nth(inst_37258,inst_37260);
var state_37320__$1 = state_37320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37320__$1,(13),out,inst_37265);
} else {
if((state_val_37321 === (18))){
var inst_37271 = (state_37320[(7)]);
var inst_37284 = cljs.core.first(inst_37271);
var state_37320__$1 = state_37320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37320__$1,(20),out,inst_37284);
} else {
if((state_val_37321 === (8))){
var inst_37260 = (state_37320[(9)]);
var inst_37259 = (state_37320[(10)]);
var inst_37262 = (inst_37260 < inst_37259);
var inst_37263 = inst_37262;
var state_37320__$1 = state_37320;
if(cljs.core.truth_(inst_37263)){
var statearr_37451_39357 = state_37320__$1;
(statearr_37451_39357[(1)] = (10));

} else {
var statearr_37452_39358 = state_37320__$1;
(statearr_37452_39358[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32846__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32846__auto____0 = (function (){
var statearr_37454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37454[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32846__auto__);

(statearr_37454[(1)] = (1));

return statearr_37454;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32846__auto____1 = (function (state_37320){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_37320);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e37456){var ex__32849__auto__ = e37456;
var statearr_37457_39366 = state_37320;
(statearr_37457_39366[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_37320[(4)]))){
var statearr_37458_39369 = state_37320;
(statearr_37458_39369[(1)] = cljs.core.first((state_37320[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39376 = state_37320;
state_37320 = G__39376;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32846__auto__ = function(state_37320){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32846__auto____1.call(this,state_37320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32846__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32846__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_37459 = f__33157__auto__();
(statearr_37459[(6)] = c__33156__auto__);

return statearr_37459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));

return c__33156__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37463 = arguments.length;
switch (G__37463) {
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
var G__37482 = arguments.length;
switch (G__37482) {
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
var G__37493 = arguments.length;
switch (G__37493) {
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
var c__33156__auto___39400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_37530){
var state_val_37531 = (state_37530[(1)]);
if((state_val_37531 === (7))){
var inst_37525 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37533_39402 = state_37530__$1;
(statearr_37533_39402[(2)] = inst_37525);

(statearr_37533_39402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (1))){
var inst_37497 = null;
var state_37530__$1 = (function (){var statearr_37534 = state_37530;
(statearr_37534[(7)] = inst_37497);

return statearr_37534;
})();
var statearr_37535_39403 = state_37530__$1;
(statearr_37535_39403[(2)] = null);

(statearr_37535_39403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (4))){
var inst_37500 = (state_37530[(8)]);
var inst_37500__$1 = (state_37530[(2)]);
var inst_37511 = (inst_37500__$1 == null);
var inst_37512 = cljs.core.not(inst_37511);
var state_37530__$1 = (function (){var statearr_37537 = state_37530;
(statearr_37537[(8)] = inst_37500__$1);

return statearr_37537;
})();
if(inst_37512){
var statearr_37538_39407 = state_37530__$1;
(statearr_37538_39407[(1)] = (5));

} else {
var statearr_37542_39408 = state_37530__$1;
(statearr_37542_39408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (6))){
var state_37530__$1 = state_37530;
var statearr_37546_39409 = state_37530__$1;
(statearr_37546_39409[(2)] = null);

(statearr_37546_39409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (3))){
var inst_37527 = (state_37530[(2)]);
var inst_37528 = cljs.core.async.close_BANG_(out);
var state_37530__$1 = (function (){var statearr_37547 = state_37530;
(statearr_37547[(9)] = inst_37527);

return statearr_37547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37530__$1,inst_37528);
} else {
if((state_val_37531 === (2))){
var state_37530__$1 = state_37530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37530__$1,(4),ch);
} else {
if((state_val_37531 === (11))){
var inst_37500 = (state_37530[(8)]);
var inst_37519 = (state_37530[(2)]);
var inst_37497 = inst_37500;
var state_37530__$1 = (function (){var statearr_37548 = state_37530;
(statearr_37548[(7)] = inst_37497);

(statearr_37548[(10)] = inst_37519);

return statearr_37548;
})();
var statearr_37549_39416 = state_37530__$1;
(statearr_37549_39416[(2)] = null);

(statearr_37549_39416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (9))){
var inst_37500 = (state_37530[(8)]);
var state_37530__$1 = state_37530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37530__$1,(11),out,inst_37500);
} else {
if((state_val_37531 === (5))){
var inst_37497 = (state_37530[(7)]);
var inst_37500 = (state_37530[(8)]);
var inst_37514 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37500,inst_37497);
var state_37530__$1 = state_37530;
if(inst_37514){
var statearr_37551_39420 = state_37530__$1;
(statearr_37551_39420[(1)] = (8));

} else {
var statearr_37552_39421 = state_37530__$1;
(statearr_37552_39421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (10))){
var inst_37522 = (state_37530[(2)]);
var state_37530__$1 = state_37530;
var statearr_37553_39422 = state_37530__$1;
(statearr_37553_39422[(2)] = inst_37522);

(statearr_37553_39422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37531 === (8))){
var inst_37497 = (state_37530[(7)]);
var tmp37550 = inst_37497;
var inst_37497__$1 = tmp37550;
var state_37530__$1 = (function (){var statearr_37556 = state_37530;
(statearr_37556[(7)] = inst_37497__$1);

return statearr_37556;
})();
var statearr_37559_39423 = state_37530__$1;
(statearr_37559_39423[(2)] = null);

(statearr_37559_39423[(1)] = (2));


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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_37560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37560[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_37560[(1)] = (1));

return statearr_37560;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_37530){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_37530);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e37561){var ex__32849__auto__ = e37561;
var statearr_37562_39438 = state_37530;
(statearr_37562_39438[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_37530[(4)]))){
var statearr_37563_39447 = state_37530;
(statearr_37563_39447[(1)] = cljs.core.first((state_37530[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39449 = state_37530;
state_37530 = G__39449;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_37530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_37530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_37564 = f__33157__auto__();
(statearr_37564[(6)] = c__33156__auto___39400);

return statearr_37564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37572 = arguments.length;
switch (G__37572) {
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
var c__33156__auto___39461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_37614){
var state_val_37615 = (state_37614[(1)]);
if((state_val_37615 === (7))){
var inst_37610 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37621_39462 = state_37614__$1;
(statearr_37621_39462[(2)] = inst_37610);

(statearr_37621_39462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (1))){
var inst_37576 = (new Array(n));
var inst_37577 = inst_37576;
var inst_37578 = (0);
var state_37614__$1 = (function (){var statearr_37633 = state_37614;
(statearr_37633[(7)] = inst_37577);

(statearr_37633[(8)] = inst_37578);

return statearr_37633;
})();
var statearr_37634_39473 = state_37614__$1;
(statearr_37634_39473[(2)] = null);

(statearr_37634_39473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (4))){
var inst_37581 = (state_37614[(9)]);
var inst_37581__$1 = (state_37614[(2)]);
var inst_37583 = (inst_37581__$1 == null);
var inst_37584 = cljs.core.not(inst_37583);
var state_37614__$1 = (function (){var statearr_37635 = state_37614;
(statearr_37635[(9)] = inst_37581__$1);

return statearr_37635;
})();
if(inst_37584){
var statearr_37636_39480 = state_37614__$1;
(statearr_37636_39480[(1)] = (5));

} else {
var statearr_37637_39482 = state_37614__$1;
(statearr_37637_39482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (15))){
var inst_37604 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37638_39499 = state_37614__$1;
(statearr_37638_39499[(2)] = inst_37604);

(statearr_37638_39499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (13))){
var state_37614__$1 = state_37614;
var statearr_37640_39500 = state_37614__$1;
(statearr_37640_39500[(2)] = null);

(statearr_37640_39500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (6))){
var inst_37578 = (state_37614[(8)]);
var inst_37600 = (inst_37578 > (0));
var state_37614__$1 = state_37614;
if(cljs.core.truth_(inst_37600)){
var statearr_37641_39505 = state_37614__$1;
(statearr_37641_39505[(1)] = (12));

} else {
var statearr_37643_39506 = state_37614__$1;
(statearr_37643_39506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (3))){
var inst_37612 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37614__$1,inst_37612);
} else {
if((state_val_37615 === (12))){
var inst_37577 = (state_37614[(7)]);
var inst_37602 = cljs.core.vec(inst_37577);
var state_37614__$1 = state_37614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37614__$1,(15),out,inst_37602);
} else {
if((state_val_37615 === (2))){
var state_37614__$1 = state_37614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37614__$1,(4),ch);
} else {
if((state_val_37615 === (11))){
var inst_37594 = (state_37614[(2)]);
var inst_37595 = (new Array(n));
var inst_37577 = inst_37595;
var inst_37578 = (0);
var state_37614__$1 = (function (){var statearr_37644 = state_37614;
(statearr_37644[(7)] = inst_37577);

(statearr_37644[(8)] = inst_37578);

(statearr_37644[(10)] = inst_37594);

return statearr_37644;
})();
var statearr_37645_39523 = state_37614__$1;
(statearr_37645_39523[(2)] = null);

(statearr_37645_39523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (9))){
var inst_37577 = (state_37614[(7)]);
var inst_37592 = cljs.core.vec(inst_37577);
var state_37614__$1 = state_37614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37614__$1,(11),out,inst_37592);
} else {
if((state_val_37615 === (5))){
var inst_37587 = (state_37614[(11)]);
var inst_37577 = (state_37614[(7)]);
var inst_37578 = (state_37614[(8)]);
var inst_37581 = (state_37614[(9)]);
var inst_37586 = (inst_37577[inst_37578] = inst_37581);
var inst_37587__$1 = (inst_37578 + (1));
var inst_37588 = (inst_37587__$1 < n);
var state_37614__$1 = (function (){var statearr_37648 = state_37614;
(statearr_37648[(12)] = inst_37586);

(statearr_37648[(11)] = inst_37587__$1);

return statearr_37648;
})();
if(cljs.core.truth_(inst_37588)){
var statearr_37649_39530 = state_37614__$1;
(statearr_37649_39530[(1)] = (8));

} else {
var statearr_37650_39531 = state_37614__$1;
(statearr_37650_39531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (14))){
var inst_37607 = (state_37614[(2)]);
var inst_37608 = cljs.core.async.close_BANG_(out);
var state_37614__$1 = (function (){var statearr_37652 = state_37614;
(statearr_37652[(13)] = inst_37607);

return statearr_37652;
})();
var statearr_37653_39532 = state_37614__$1;
(statearr_37653_39532[(2)] = inst_37608);

(statearr_37653_39532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (10))){
var inst_37598 = (state_37614[(2)]);
var state_37614__$1 = state_37614;
var statearr_37654_39533 = state_37614__$1;
(statearr_37654_39533[(2)] = inst_37598);

(statearr_37654_39533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37615 === (8))){
var inst_37587 = (state_37614[(11)]);
var inst_37577 = (state_37614[(7)]);
var tmp37651 = inst_37577;
var inst_37577__$1 = tmp37651;
var inst_37578 = inst_37587;
var state_37614__$1 = (function (){var statearr_37661 = state_37614;
(statearr_37661[(7)] = inst_37577__$1);

(statearr_37661[(8)] = inst_37578);

return statearr_37661;
})();
var statearr_37662_39536 = state_37614__$1;
(statearr_37662_39536[(2)] = null);

(statearr_37662_39536[(1)] = (2));


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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_37665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37665[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_37665[(1)] = (1));

return statearr_37665;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_37614){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_37614);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e37666){var ex__32849__auto__ = e37666;
var statearr_37667_39540 = state_37614;
(statearr_37667_39540[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_37614[(4)]))){
var statearr_37668_39542 = state_37614;
(statearr_37668_39542[(1)] = cljs.core.first((state_37614[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39544 = state_37614;
state_37614 = G__39544;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_37614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_37614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_37671 = f__33157__auto__();
(statearr_37671[(6)] = c__33156__auto___39461);

return statearr_37671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37678 = arguments.length;
switch (G__37678) {
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
var c__33156__auto___39547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33157__auto__ = (function (){var switch__32845__auto__ = (function (state_37741){
var state_val_37743 = (state_37741[(1)]);
if((state_val_37743 === (7))){
var inst_37733 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
var statearr_37759_39553 = state_37741__$1;
(statearr_37759_39553[(2)] = inst_37733);

(statearr_37759_39553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (1))){
var inst_37685 = [];
var inst_37686 = inst_37685;
var inst_37687 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37741__$1 = (function (){var statearr_37770 = state_37741;
(statearr_37770[(7)] = inst_37687);

(statearr_37770[(8)] = inst_37686);

return statearr_37770;
})();
var statearr_37771_39555 = state_37741__$1;
(statearr_37771_39555[(2)] = null);

(statearr_37771_39555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (4))){
var inst_37691 = (state_37741[(9)]);
var inst_37691__$1 = (state_37741[(2)]);
var inst_37698 = (inst_37691__$1 == null);
var inst_37699 = cljs.core.not(inst_37698);
var state_37741__$1 = (function (){var statearr_37775 = state_37741;
(statearr_37775[(9)] = inst_37691__$1);

return statearr_37775;
})();
if(inst_37699){
var statearr_37778_39561 = state_37741__$1;
(statearr_37778_39561[(1)] = (5));

} else {
var statearr_37787_39562 = state_37741__$1;
(statearr_37787_39562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (15))){
var inst_37686 = (state_37741[(8)]);
var inst_37725 = cljs.core.vec(inst_37686);
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37741__$1,(18),out,inst_37725);
} else {
if((state_val_37743 === (13))){
var inst_37720 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
var statearr_37788_39567 = state_37741__$1;
(statearr_37788_39567[(2)] = inst_37720);

(statearr_37788_39567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (6))){
var inst_37686 = (state_37741[(8)]);
var inst_37722 = inst_37686.length;
var inst_37723 = (inst_37722 > (0));
var state_37741__$1 = state_37741;
if(cljs.core.truth_(inst_37723)){
var statearr_37794_39568 = state_37741__$1;
(statearr_37794_39568[(1)] = (15));

} else {
var statearr_37795_39569 = state_37741__$1;
(statearr_37795_39569[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (17))){
var inst_37730 = (state_37741[(2)]);
var inst_37731 = cljs.core.async.close_BANG_(out);
var state_37741__$1 = (function (){var statearr_37810 = state_37741;
(statearr_37810[(10)] = inst_37730);

return statearr_37810;
})();
var statearr_37811_39570 = state_37741__$1;
(statearr_37811_39570[(2)] = inst_37731);

(statearr_37811_39570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (3))){
var inst_37735 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37741__$1,inst_37735);
} else {
if((state_val_37743 === (12))){
var inst_37686 = (state_37741[(8)]);
var inst_37712 = cljs.core.vec(inst_37686);
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37741__$1,(14),out,inst_37712);
} else {
if((state_val_37743 === (2))){
var state_37741__$1 = state_37741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37741__$1,(4),ch);
} else {
if((state_val_37743 === (11))){
var inst_37701 = (state_37741[(11)]);
var inst_37691 = (state_37741[(9)]);
var inst_37686 = (state_37741[(8)]);
var inst_37709 = inst_37686.push(inst_37691);
var tmp37818 = inst_37686;
var inst_37686__$1 = tmp37818;
var inst_37687 = inst_37701;
var state_37741__$1 = (function (){var statearr_37829 = state_37741;
(statearr_37829[(7)] = inst_37687);

(statearr_37829[(12)] = inst_37709);

(statearr_37829[(8)] = inst_37686__$1);

return statearr_37829;
})();
var statearr_37830_39576 = state_37741__$1;
(statearr_37830_39576[(2)] = null);

(statearr_37830_39576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (9))){
var inst_37687 = (state_37741[(7)]);
var inst_37705 = cljs.core.keyword_identical_QMARK_(inst_37687,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37741__$1 = state_37741;
var statearr_37831_39578 = state_37741__$1;
(statearr_37831_39578[(2)] = inst_37705);

(statearr_37831_39578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (5))){
var inst_37687 = (state_37741[(7)]);
var inst_37702 = (state_37741[(13)]);
var inst_37701 = (state_37741[(11)]);
var inst_37691 = (state_37741[(9)]);
var inst_37701__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37691) : f.call(null,inst_37691));
var inst_37702__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37701__$1,inst_37687);
var state_37741__$1 = (function (){var statearr_37837 = state_37741;
(statearr_37837[(13)] = inst_37702__$1);

(statearr_37837[(11)] = inst_37701__$1);

return statearr_37837;
})();
if(inst_37702__$1){
var statearr_37838_39584 = state_37741__$1;
(statearr_37838_39584[(1)] = (8));

} else {
var statearr_37839_39586 = state_37741__$1;
(statearr_37839_39586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (14))){
var inst_37701 = (state_37741[(11)]);
var inst_37691 = (state_37741[(9)]);
var inst_37714 = (state_37741[(2)]);
var inst_37716 = [];
var inst_37717 = inst_37716.push(inst_37691);
var inst_37686 = inst_37716;
var inst_37687 = inst_37701;
var state_37741__$1 = (function (){var statearr_37847 = state_37741;
(statearr_37847[(14)] = inst_37717);

(statearr_37847[(15)] = inst_37714);

(statearr_37847[(7)] = inst_37687);

(statearr_37847[(8)] = inst_37686);

return statearr_37847;
})();
var statearr_37848_39587 = state_37741__$1;
(statearr_37848_39587[(2)] = null);

(statearr_37848_39587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (16))){
var state_37741__$1 = state_37741;
var statearr_37849_39588 = state_37741__$1;
(statearr_37849_39588[(2)] = null);

(statearr_37849_39588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (10))){
var inst_37707 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
if(cljs.core.truth_(inst_37707)){
var statearr_37850_39589 = state_37741__$1;
(statearr_37850_39589[(1)] = (11));

} else {
var statearr_37851_39590 = state_37741__$1;
(statearr_37851_39590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (18))){
var inst_37727 = (state_37741[(2)]);
var state_37741__$1 = state_37741;
var statearr_37854_39591 = state_37741__$1;
(statearr_37854_39591[(2)] = inst_37727);

(statearr_37854_39591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (8))){
var inst_37702 = (state_37741[(13)]);
var state_37741__$1 = state_37741;
var statearr_37856_39592 = state_37741__$1;
(statearr_37856_39592[(2)] = inst_37702);

(statearr_37856_39592[(1)] = (10));


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
var cljs$core$async$state_machine__32846__auto__ = null;
var cljs$core$async$state_machine__32846__auto____0 = (function (){
var statearr_37862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37862[(0)] = cljs$core$async$state_machine__32846__auto__);

(statearr_37862[(1)] = (1));

return statearr_37862;
});
var cljs$core$async$state_machine__32846__auto____1 = (function (state_37741){
while(true){
var ret_value__32847__auto__ = (function (){try{while(true){
var result__32848__auto__ = switch__32845__auto__(state_37741);
if(cljs.core.keyword_identical_QMARK_(result__32848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32848__auto__;
}
break;
}
}catch (e37865){var ex__32849__auto__ = e37865;
var statearr_37868_39594 = state_37741;
(statearr_37868_39594[(2)] = ex__32849__auto__);


if(cljs.core.seq((state_37741[(4)]))){
var statearr_37877_39595 = state_37741;
(statearr_37877_39595[(1)] = cljs.core.first((state_37741[(4)])));

} else {
throw ex__32849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39597 = state_37741;
state_37741 = G__39597;
continue;
} else {
return ret_value__32847__auto__;
}
break;
}
});
cljs$core$async$state_machine__32846__auto__ = function(state_37741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32846__auto____1.call(this,state_37741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32846__auto____0;
cljs$core$async$state_machine__32846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32846__auto____1;
return cljs$core$async$state_machine__32846__auto__;
})()
})();
var state__33158__auto__ = (function (){var statearr_37886 = f__33157__auto__();
(statearr_37886[(6)] = c__33156__auto___39547);

return statearr_37886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33158__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
