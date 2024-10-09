// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__9615 = arguments.length;
switch (G__9615) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9616 = (function (f,blockable,meta9617){
this.f = f;
this.blockable = blockable;
this.meta9617 = meta9617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9618,meta9617__$1){
var self__ = this;
var _9618__$1 = this;
return (new cljs.core.async.t_cljs$core$async9616(self__.f,self__.blockable,meta9617__$1));
}));

(cljs.core.async.t_cljs$core$async9616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9618){
var self__ = this;
var _9618__$1 = this;
return self__.meta9617;
}));

(cljs.core.async.t_cljs$core$async9616.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async9616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async9616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9617","meta9617",-729508616,null)], null);
}));

(cljs.core.async.t_cljs$core$async9616.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9616");

(cljs.core.async.t_cljs$core$async9616.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9616");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9616.
 */
cljs.core.async.__GT_t_cljs$core$async9616 = (function cljs$core$async$__GT_t_cljs$core$async9616(f__$1,blockable__$1,meta9617){
return (new cljs.core.async.t_cljs$core$async9616(f__$1,blockable__$1,meta9617));
});

}

return (new cljs.core.async.t_cljs$core$async9616(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__9626 = arguments.length;
switch (G__9626) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__9632 = arguments.length;
switch (G__9632) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__9640 = arguments.length;
switch (G__9640) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9651 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9651);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_9651);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__9653 = arguments.length;
switch (G__9653) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___9666 = n;
var x_9667 = (0);
while(true){
if((x_9667 < n__5593__auto___9666)){
(a[x_9667] = x_9667);

var G__9668 = (x_9667 + (1));
x_9667 = G__9668;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9663 = (function (flag,meta9664){
this.flag = flag;
this.meta9664 = meta9664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9665,meta9664__$1){
var self__ = this;
var _9665__$1 = this;
return (new cljs.core.async.t_cljs$core$async9663(self__.flag,meta9664__$1));
}));

(cljs.core.async.t_cljs$core$async9663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9665){
var self__ = this;
var _9665__$1 = this;
return self__.meta9664;
}));

(cljs.core.async.t_cljs$core$async9663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async9663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async9663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9664","meta9664",-1352889590,null)], null);
}));

(cljs.core.async.t_cljs$core$async9663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9663");

(cljs.core.async.t_cljs$core$async9663.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9663.
 */
cljs.core.async.__GT_t_cljs$core$async9663 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9663(flag__$1,meta9664){
return (new cljs.core.async.t_cljs$core$async9663(flag__$1,meta9664));
});

}

return (new cljs.core.async.t_cljs$core$async9663(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9669 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9669 = (function (flag,cb,meta9670){
this.flag = flag;
this.cb = cb;
this.meta9670 = meta9670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9671,meta9670__$1){
var self__ = this;
var _9671__$1 = this;
return (new cljs.core.async.t_cljs$core$async9669(self__.flag,self__.cb,meta9670__$1));
}));

(cljs.core.async.t_cljs$core$async9669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9671){
var self__ = this;
var _9671__$1 = this;
return self__.meta9670;
}));

(cljs.core.async.t_cljs$core$async9669.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async9669.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async9669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9670","meta9670",-2003734417,null)], null);
}));

(cljs.core.async.t_cljs$core$async9669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9669");

(cljs.core.async.t_cljs$core$async9669.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async9669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9669.
 */
cljs.core.async.__GT_t_cljs$core$async9669 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9669(flag__$1,cb__$1,meta9670){
return (new cljs.core.async.t_cljs$core$async9669(flag__$1,cb__$1,meta9670));
});

}

return (new cljs.core.async.t_cljs$core$async9669(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__9676_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9676_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__9677_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9677_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9690 = (i + (1));
i = G__9690;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__5726__auto___9692 = arguments.length;
var i__5727__auto___9694 = (0);
while(true){
if((i__5727__auto___9694 < len__5726__auto___9692)){
args__5732__auto__.push((arguments[i__5727__auto___9694]));

var G__9695 = (i__5727__auto___9694 + (1));
i__5727__auto___9694 = G__9695;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9686){
var map__9687 = p__9686;
var map__9687__$1 = cljs.core.__destructure_map.call(null,map__9687);
var opts = map__9687__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9684){
var G__9685 = cljs.core.first.call(null,seq9684);
var seq9684__$1 = cljs.core.next.call(null,seq9684);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9685,seq9684__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__9696 = arguments.length;
switch (G__9696) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9549__auto___9782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_9738){
var state_val_9739 = (state_9738[(1)]);
if((state_val_9739 === (7))){
var inst_9734 = (state_9738[(2)]);
var state_9738__$1 = state_9738;
var statearr_9740_9784 = state_9738__$1;
(statearr_9740_9784[(2)] = inst_9734);

(statearr_9740_9784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (1))){
var state_9738__$1 = state_9738;
var statearr_9742_9785 = state_9738__$1;
(statearr_9742_9785[(2)] = null);

(statearr_9742_9785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (4))){
var inst_9706 = (state_9738[(7)]);
var inst_9706__$1 = (state_9738[(2)]);
var inst_9707 = (inst_9706__$1 == null);
var state_9738__$1 = (function (){var statearr_9744 = state_9738;
(statearr_9744[(7)] = inst_9706__$1);

return statearr_9744;
})();
if(cljs.core.truth_(inst_9707)){
var statearr_9745_9786 = state_9738__$1;
(statearr_9745_9786[(1)] = (5));

} else {
var statearr_9746_9787 = state_9738__$1;
(statearr_9746_9787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (13))){
var state_9738__$1 = state_9738;
var statearr_9748_9788 = state_9738__$1;
(statearr_9748_9788[(2)] = null);

(statearr_9748_9788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (6))){
var inst_9706 = (state_9738[(7)]);
var state_9738__$1 = state_9738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9738__$1,(11),to,inst_9706);
} else {
if((state_val_9739 === (3))){
var inst_9736 = (state_9738[(2)]);
var state_9738__$1 = state_9738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9738__$1,inst_9736);
} else {
if((state_val_9739 === (12))){
var state_9738__$1 = state_9738;
var statearr_9754_9795 = state_9738__$1;
(statearr_9754_9795[(2)] = null);

(statearr_9754_9795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (2))){
var state_9738__$1 = state_9738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9738__$1,(4),from);
} else {
if((state_val_9739 === (11))){
var inst_9727 = (state_9738[(2)]);
var state_9738__$1 = state_9738;
if(cljs.core.truth_(inst_9727)){
var statearr_9755_9802 = state_9738__$1;
(statearr_9755_9802[(1)] = (12));

} else {
var statearr_9756_9803 = state_9738__$1;
(statearr_9756_9803[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (9))){
var state_9738__$1 = state_9738;
var statearr_9757_9804 = state_9738__$1;
(statearr_9757_9804[(2)] = null);

(statearr_9757_9804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (5))){
var state_9738__$1 = state_9738;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9762_9811 = state_9738__$1;
(statearr_9762_9811[(1)] = (8));

} else {
var statearr_9763_9815 = state_9738__$1;
(statearr_9763_9815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (14))){
var inst_9732 = (state_9738[(2)]);
var state_9738__$1 = state_9738;
var statearr_9764_9816 = state_9738__$1;
(statearr_9764_9816[(2)] = inst_9732);

(statearr_9764_9816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (10))){
var inst_9718 = (state_9738[(2)]);
var state_9738__$1 = state_9738;
var statearr_9765_9817 = state_9738__$1;
(statearr_9765_9817[(2)] = inst_9718);

(statearr_9765_9817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9739 === (8))){
var inst_9710 = cljs.core.async.close_BANG_.call(null,to);
var state_9738__$1 = state_9738;
var statearr_9768_9819 = state_9738__$1;
(statearr_9768_9819[(2)] = inst_9710);

(statearr_9768_9819[(1)] = (10));


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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_9769 = [null,null,null,null,null,null,null,null];
(statearr_9769[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_9769[(1)] = (1));

return statearr_9769;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_9738){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_9738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e9770){var ex__9373__auto__ = e9770;
var statearr_9771_9826 = state_9738;
(statearr_9771_9826[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_9738[(4)]))){
var statearr_9772_9827 = state_9738;
(statearr_9772_9827[(1)] = cljs.core.first.call(null,(state_9738[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9830 = state_9738;
state_9738 = G__9830;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_9738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_9738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_9773 = f__9550__auto__.call(null);
(statearr_9773[(6)] = c__9549__auto___9782);

return statearr_9773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__9789){
var vec__9790 = p__9789;
var v = cljs.core.nth.call(null,vec__9790,(0),null);
var p = cljs.core.nth.call(null,vec__9790,(1),null);
var job = vec__9790;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9549__auto___10128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_9800){
var state_val_9801 = (state_9800[(1)]);
if((state_val_9801 === (1))){
var state_9800__$1 = state_9800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9800__$1,(2),res,v);
} else {
if((state_val_9801 === (2))){
var inst_9797 = (state_9800[(2)]);
var inst_9798 = cljs.core.async.close_BANG_.call(null,res);
var state_9800__$1 = (function (){var statearr_9806 = state_9800;
(statearr_9806[(7)] = inst_9797);

return statearr_9806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9800__$1,inst_9798);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0 = (function (){
var statearr_9808 = [null,null,null,null,null,null,null,null];
(statearr_9808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__);

(statearr_9808[(1)] = (1));

return statearr_9808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1 = (function (state_9800){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_9800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e9809){var ex__9373__auto__ = e9809;
var statearr_9810_10131 = state_9800;
(statearr_9810_10131[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_9800[(4)]))){
var statearr_9814_10132 = state_9800;
(statearr_9814_10132[(1)] = cljs.core.first.call(null,(state_9800[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10133 = state_9800;
state_9800 = G__10133;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = function(state_9800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1.call(this,state_9800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_9818 = f__9550__auto__.call(null);
(statearr_9818[(6)] = c__9549__auto___10128);

return statearr_9818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__9822){
var vec__9823 = p__9822;
var v = cljs.core.nth.call(null,vec__9823,(0),null);
var p = cljs.core.nth.call(null,vec__9823,(1),null);
var job = vec__9823;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5593__auto___10134 = n;
var __10135 = (0);
while(true){
if((__10135 < n__5593__auto___10134)){
var G__9831_10136 = type;
var G__9831_10137__$1 = (((G__9831_10136 instanceof cljs.core.Keyword))?G__9831_10136.fqn:null);
switch (G__9831_10137__$1) {
case "compute":
var c__9549__auto___10139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10135,c__9549__auto___10139,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async){
return (function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = ((function (__10135,c__9549__auto___10139,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async){
return (function (state_9847){
var state_val_9848 = (state_9847[(1)]);
if((state_val_9848 === (1))){
var state_9847__$1 = state_9847;
var statearr_9849_10140 = state_9847__$1;
(statearr_9849_10140[(2)] = null);

(statearr_9849_10140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9848 === (2))){
var state_9847__$1 = state_9847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9847__$1,(4),jobs);
} else {
if((state_val_9848 === (3))){
var inst_9845 = (state_9847[(2)]);
var state_9847__$1 = state_9847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9847__$1,inst_9845);
} else {
if((state_val_9848 === (4))){
var inst_9836 = (state_9847[(2)]);
var inst_9837 = process__$1.call(null,inst_9836);
var state_9847__$1 = state_9847;
if(cljs.core.truth_(inst_9837)){
var statearr_9855_10142 = state_9847__$1;
(statearr_9855_10142[(1)] = (5));

} else {
var statearr_9856_10144 = state_9847__$1;
(statearr_9856_10144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9848 === (5))){
var state_9847__$1 = state_9847;
var statearr_9857_10145 = state_9847__$1;
(statearr_9857_10145[(2)] = null);

(statearr_9857_10145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9848 === (6))){
var state_9847__$1 = state_9847;
var statearr_9858_10146 = state_9847__$1;
(statearr_9858_10146[(2)] = null);

(statearr_9858_10146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9848 === (7))){
var inst_9843 = (state_9847[(2)]);
var state_9847__$1 = state_9847;
var statearr_9859_10147 = state_9847__$1;
(statearr_9859_10147[(2)] = inst_9843);

(statearr_9859_10147[(1)] = (3));


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
});})(__10135,c__9549__auto___10139,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async))
;
return ((function (__10135,switch__9369__auto__,c__9549__auto___10139,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0 = (function (){
var statearr_9860 = [null,null,null,null,null,null,null];
(statearr_9860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__);

(statearr_9860[(1)] = (1));

return statearr_9860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1 = (function (state_9847){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_9847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e9861){var ex__9373__auto__ = e9861;
var statearr_9862_10152 = state_9847;
(statearr_9862_10152[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_9847[(4)]))){
var statearr_9863_10166 = state_9847;
(statearr_9863_10166[(1)] = cljs.core.first.call(null,(state_9847[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10192 = state_9847;
state_9847 = G__10192;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = function(state_9847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1.call(this,state_9847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__;
})()
;})(__10135,switch__9369__auto__,c__9549__auto___10139,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async))
})();
var state__9551__auto__ = (function (){var statearr_9864 = f__9550__auto__.call(null);
(statearr_9864[(6)] = c__9549__auto___10139);

return statearr_9864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
});})(__10135,c__9549__auto___10139,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async))
);


break;
case "async":
var c__9549__auto___10194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10135,c__9549__auto___10194,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async){
return (function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = ((function (__10135,c__9549__auto___10194,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async){
return (function (state_9877){
var state_val_9878 = (state_9877[(1)]);
if((state_val_9878 === (1))){
var state_9877__$1 = state_9877;
var statearr_9879_10197 = state_9877__$1;
(statearr_9879_10197[(2)] = null);

(statearr_9879_10197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9878 === (2))){
var state_9877__$1 = state_9877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9877__$1,(4),jobs);
} else {
if((state_val_9878 === (3))){
var inst_9875 = (state_9877[(2)]);
var state_9877__$1 = state_9877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9877__$1,inst_9875);
} else {
if((state_val_9878 === (4))){
var inst_9867 = (state_9877[(2)]);
var inst_9868 = async.call(null,inst_9867);
var state_9877__$1 = state_9877;
if(cljs.core.truth_(inst_9868)){
var statearr_9884_10201 = state_9877__$1;
(statearr_9884_10201[(1)] = (5));

} else {
var statearr_9885_10202 = state_9877__$1;
(statearr_9885_10202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9878 === (5))){
var state_9877__$1 = state_9877;
var statearr_9886_10203 = state_9877__$1;
(statearr_9886_10203[(2)] = null);

(statearr_9886_10203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9878 === (6))){
var state_9877__$1 = state_9877;
var statearr_9887_10205 = state_9877__$1;
(statearr_9887_10205[(2)] = null);

(statearr_9887_10205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9878 === (7))){
var inst_9873 = (state_9877[(2)]);
var state_9877__$1 = state_9877;
var statearr_9888_10206 = state_9877__$1;
(statearr_9888_10206[(2)] = inst_9873);

(statearr_9888_10206[(1)] = (3));


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
});})(__10135,c__9549__auto___10194,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async))
;
return ((function (__10135,switch__9369__auto__,c__9549__auto___10194,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0 = (function (){
var statearr_9889 = [null,null,null,null,null,null,null];
(statearr_9889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__);

(statearr_9889[(1)] = (1));

return statearr_9889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1 = (function (state_9877){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_9877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e9890){var ex__9373__auto__ = e9890;
var statearr_9891_10212 = state_9877;
(statearr_9891_10212[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_9877[(4)]))){
var statearr_9892_10214 = state_9877;
(statearr_9892_10214[(1)] = cljs.core.first.call(null,(state_9877[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10216 = state_9877;
state_9877 = G__10216;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = function(state_9877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1.call(this,state_9877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__;
})()
;})(__10135,switch__9369__auto__,c__9549__auto___10194,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async))
})();
var state__9551__auto__ = (function (){var statearr_9893 = f__9550__auto__.call(null);
(statearr_9893[(6)] = c__9549__auto___10194);

return statearr_9893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
});})(__10135,c__9549__auto___10194,G__9831_10136,G__9831_10137__$1,n__5593__auto___10134,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9831_10137__$1)].join('')));

}

var G__10222 = (__10135 + (1));
__10135 = G__10222;
continue;
} else {
}
break;
}

var c__9549__auto___10223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_9919){
var state_val_9920 = (state_9919[(1)]);
if((state_val_9920 === (7))){
var inst_9913 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
var statearr_9923_10233 = state_9919__$1;
(statearr_9923_10233[(2)] = inst_9913);

(statearr_9923_10233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (1))){
var state_9919__$1 = state_9919;
var statearr_9928_10239 = state_9919__$1;
(statearr_9928_10239[(2)] = null);

(statearr_9928_10239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (4))){
var inst_9898 = (state_9919[(7)]);
var inst_9898__$1 = (state_9919[(2)]);
var inst_9899 = (inst_9898__$1 == null);
var state_9919__$1 = (function (){var statearr_9930 = state_9919;
(statearr_9930[(7)] = inst_9898__$1);

return statearr_9930;
})();
if(cljs.core.truth_(inst_9899)){
var statearr_9931_10241 = state_9919__$1;
(statearr_9931_10241[(1)] = (5));

} else {
var statearr_9932_10242 = state_9919__$1;
(statearr_9932_10242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (6))){
var inst_9898 = (state_9919[(7)]);
var inst_9903 = (state_9919[(8)]);
var inst_9903__$1 = cljs.core.async.chan.call(null,(1));
var inst_9904 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9905 = [inst_9898,inst_9903__$1];
var inst_9906 = (new cljs.core.PersistentVector(null,2,(5),inst_9904,inst_9905,null));
var state_9919__$1 = (function (){var statearr_9933 = state_9919;
(statearr_9933[(8)] = inst_9903__$1);

return statearr_9933;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9919__$1,(8),jobs,inst_9906);
} else {
if((state_val_9920 === (3))){
var inst_9915 = (state_9919[(2)]);
var state_9919__$1 = state_9919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9919__$1,inst_9915);
} else {
if((state_val_9920 === (2))){
var state_9919__$1 = state_9919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9919__$1,(4),from);
} else {
if((state_val_9920 === (9))){
var inst_9910 = (state_9919[(2)]);
var state_9919__$1 = (function (){var statearr_9935 = state_9919;
(statearr_9935[(9)] = inst_9910);

return statearr_9935;
})();
var statearr_9936_10248 = state_9919__$1;
(statearr_9936_10248[(2)] = null);

(statearr_9936_10248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (5))){
var inst_9901 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9919__$1 = state_9919;
var statearr_9938_10249 = state_9919__$1;
(statearr_9938_10249[(2)] = inst_9901);

(statearr_9938_10249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9920 === (8))){
var inst_9903 = (state_9919[(8)]);
var inst_9908 = (state_9919[(2)]);
var state_9919__$1 = (function (){var statearr_9946 = state_9919;
(statearr_9946[(10)] = inst_9908);

return statearr_9946;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9919__$1,(9),results,inst_9903);
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
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0 = (function (){
var statearr_9952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__);

(statearr_9952[(1)] = (1));

return statearr_9952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1 = (function (state_9919){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_9919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e9956){var ex__9373__auto__ = e9956;
var statearr_9957_10271 = state_9919;
(statearr_9957_10271[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_9919[(4)]))){
var statearr_9959_10276 = state_9919;
(statearr_9959_10276[(1)] = cljs.core.first.call(null,(state_9919[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10277 = state_9919;
state_9919 = G__10277;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = function(state_9919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1.call(this,state_9919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_9960 = f__9550__auto__.call(null);
(statearr_9960[(6)] = c__9549__auto___10223);

return statearr_9960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


var c__9549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_10014){
var state_val_10019 = (state_10014[(1)]);
if((state_val_10019 === (7))){
var inst_10010 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
var statearr_10033_10278 = state_10014__$1;
(statearr_10033_10278[(2)] = inst_10010);

(statearr_10033_10278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (20))){
var state_10014__$1 = state_10014;
var statearr_10038_10280 = state_10014__$1;
(statearr_10038_10280[(2)] = null);

(statearr_10038_10280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (1))){
var state_10014__$1 = state_10014;
var statearr_10039_10281 = state_10014__$1;
(statearr_10039_10281[(2)] = null);

(statearr_10039_10281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (4))){
var inst_9971 = (state_10014[(7)]);
var inst_9971__$1 = (state_10014[(2)]);
var inst_9972 = (inst_9971__$1 == null);
var state_10014__$1 = (function (){var statearr_10045 = state_10014;
(statearr_10045[(7)] = inst_9971__$1);

return statearr_10045;
})();
if(cljs.core.truth_(inst_9972)){
var statearr_10051_10283 = state_10014__$1;
(statearr_10051_10283[(1)] = (5));

} else {
var statearr_10052_10285 = state_10014__$1;
(statearr_10052_10285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (15))){
var inst_9984 = (state_10014[(8)]);
var state_10014__$1 = state_10014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10014__$1,(18),to,inst_9984);
} else {
if((state_val_10019 === (21))){
var inst_10001 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
var statearr_10069_10286 = state_10014__$1;
(statearr_10069_10286[(2)] = inst_10001);

(statearr_10069_10286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (13))){
var inst_10003 = (state_10014[(2)]);
var state_10014__$1 = (function (){var statearr_10070 = state_10014;
(statearr_10070[(9)] = inst_10003);

return statearr_10070;
})();
var statearr_10071_10288 = state_10014__$1;
(statearr_10071_10288[(2)] = null);

(statearr_10071_10288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (6))){
var inst_9971 = (state_10014[(7)]);
var state_10014__$1 = state_10014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10014__$1,(11),inst_9971);
} else {
if((state_val_10019 === (17))){
var inst_9996 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
if(cljs.core.truth_(inst_9996)){
var statearr_10073_10292 = state_10014__$1;
(statearr_10073_10292[(1)] = (19));

} else {
var statearr_10074_10293 = state_10014__$1;
(statearr_10074_10293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (3))){
var inst_10012 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10014__$1,inst_10012);
} else {
if((state_val_10019 === (12))){
var inst_9981 = (state_10014[(10)]);
var state_10014__$1 = state_10014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10014__$1,(14),inst_9981);
} else {
if((state_val_10019 === (2))){
var state_10014__$1 = state_10014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10014__$1,(4),results);
} else {
if((state_val_10019 === (19))){
var state_10014__$1 = state_10014;
var statearr_10076_10302 = state_10014__$1;
(statearr_10076_10302[(2)] = null);

(statearr_10076_10302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (11))){
var inst_9981 = (state_10014[(2)]);
var state_10014__$1 = (function (){var statearr_10079 = state_10014;
(statearr_10079[(10)] = inst_9981);

return statearr_10079;
})();
var statearr_10080_10308 = state_10014__$1;
(statearr_10080_10308[(2)] = null);

(statearr_10080_10308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (9))){
var state_10014__$1 = state_10014;
var statearr_10081_10313 = state_10014__$1;
(statearr_10081_10313[(2)] = null);

(statearr_10081_10313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (5))){
var state_10014__$1 = state_10014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10082_10314 = state_10014__$1;
(statearr_10082_10314[(1)] = (8));

} else {
var statearr_10083_10315 = state_10014__$1;
(statearr_10083_10315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (14))){
var inst_9984 = (state_10014[(8)]);
var inst_9986 = (state_10014[(11)]);
var inst_9984__$1 = (state_10014[(2)]);
var inst_9985 = (inst_9984__$1 == null);
var inst_9986__$1 = cljs.core.not.call(null,inst_9985);
var state_10014__$1 = (function (){var statearr_10084 = state_10014;
(statearr_10084[(8)] = inst_9984__$1);

(statearr_10084[(11)] = inst_9986__$1);

return statearr_10084;
})();
if(inst_9986__$1){
var statearr_10087_10319 = state_10014__$1;
(statearr_10087_10319[(1)] = (15));

} else {
var statearr_10091_10322 = state_10014__$1;
(statearr_10091_10322[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (16))){
var inst_9986 = (state_10014[(11)]);
var state_10014__$1 = state_10014;
var statearr_10099_10326 = state_10014__$1;
(statearr_10099_10326[(2)] = inst_9986);

(statearr_10099_10326[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (10))){
var inst_9978 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
var statearr_10100_10334 = state_10014__$1;
(statearr_10100_10334[(2)] = inst_9978);

(statearr_10100_10334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (18))){
var inst_9993 = (state_10014[(2)]);
var state_10014__$1 = state_10014;
var statearr_10108_10345 = state_10014__$1;
(statearr_10108_10345[(2)] = inst_9993);

(statearr_10108_10345[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10019 === (8))){
var inst_9975 = cljs.core.async.close_BANG_.call(null,to);
var state_10014__$1 = state_10014;
var statearr_10109_10346 = state_10014__$1;
(statearr_10109_10346[(2)] = inst_9975);

(statearr_10109_10346[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0 = (function (){
var statearr_10110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__);

(statearr_10110[(1)] = (1));

return statearr_10110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1 = (function (state_10014){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_10014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e10111){var ex__9373__auto__ = e10111;
var statearr_10112_10348 = state_10014;
(statearr_10112_10348[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_10014[(4)]))){
var statearr_10115_10349 = state_10014;
(statearr_10115_10349[(1)] = cljs.core.first.call(null,(state_10014[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10350 = state_10014;
state_10014 = G__10350;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__ = function(state_10014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1.call(this,state_10014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9370__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_10119 = f__9550__auto__.call(null);
(statearr_10119[(6)] = c__9549__auto__);

return statearr_10119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));

return c__9549__auto__;
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
var G__10122 = arguments.length;
switch (G__10122) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__10130 = arguments.length;
switch (G__10130) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__10143 = arguments.length;
switch (G__10143) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9549__auto___10381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_10189){
var state_val_10191 = (state_10189[(1)]);
if((state_val_10191 === (7))){
var inst_10183 = (state_10189[(2)]);
var state_10189__$1 = state_10189;
var statearr_10196_10384 = state_10189__$1;
(statearr_10196_10384[(2)] = inst_10183);

(statearr_10196_10384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (1))){
var state_10189__$1 = state_10189;
var statearr_10198_10386 = state_10189__$1;
(statearr_10198_10386[(2)] = null);

(statearr_10198_10386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (4))){
var inst_10150 = (state_10189[(7)]);
var inst_10150__$1 = (state_10189[(2)]);
var inst_10153 = (inst_10150__$1 == null);
var state_10189__$1 = (function (){var statearr_10199 = state_10189;
(statearr_10199[(7)] = inst_10150__$1);

return statearr_10199;
})();
if(cljs.core.truth_(inst_10153)){
var statearr_10200_10392 = state_10189__$1;
(statearr_10200_10392[(1)] = (5));

} else {
var statearr_10204_10398 = state_10189__$1;
(statearr_10204_10398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (13))){
var state_10189__$1 = state_10189;
var statearr_10207_10401 = state_10189__$1;
(statearr_10207_10401[(2)] = null);

(statearr_10207_10401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (6))){
var inst_10150 = (state_10189[(7)]);
var inst_10165 = p.call(null,inst_10150);
var state_10189__$1 = state_10189;
if(cljs.core.truth_(inst_10165)){
var statearr_10213_10408 = state_10189__$1;
(statearr_10213_10408[(1)] = (9));

} else {
var statearr_10215_10409 = state_10189__$1;
(statearr_10215_10409[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (3))){
var inst_10185 = (state_10189[(2)]);
var state_10189__$1 = state_10189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10189__$1,inst_10185);
} else {
if((state_val_10191 === (12))){
var state_10189__$1 = state_10189;
var statearr_10217_10410 = state_10189__$1;
(statearr_10217_10410[(2)] = null);

(statearr_10217_10410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (2))){
var state_10189__$1 = state_10189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10189__$1,(4),ch);
} else {
if((state_val_10191 === (11))){
var inst_10150 = (state_10189[(7)]);
var inst_10170 = (state_10189[(2)]);
var state_10189__$1 = state_10189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10189__$1,(8),inst_10170,inst_10150);
} else {
if((state_val_10191 === (9))){
var state_10189__$1 = state_10189;
var statearr_10247_10411 = state_10189__$1;
(statearr_10247_10411[(2)] = tc);

(statearr_10247_10411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (5))){
var inst_10159 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10160 = cljs.core.async.close_BANG_.call(null,fc);
var state_10189__$1 = (function (){var statearr_10255 = state_10189;
(statearr_10255[(8)] = inst_10159);

return statearr_10255;
})();
var statearr_10256_10414 = state_10189__$1;
(statearr_10256_10414[(2)] = inst_10160);

(statearr_10256_10414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (14))){
var inst_10181 = (state_10189[(2)]);
var state_10189__$1 = state_10189;
var statearr_10270_10418 = state_10189__$1;
(statearr_10270_10418[(2)] = inst_10181);

(statearr_10270_10418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (10))){
var state_10189__$1 = state_10189;
var statearr_10279_10425 = state_10189__$1;
(statearr_10279_10425[(2)] = fc);

(statearr_10279_10425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10191 === (8))){
var inst_10172 = (state_10189[(2)]);
var state_10189__$1 = state_10189;
if(cljs.core.truth_(inst_10172)){
var statearr_10282_10433 = state_10189__$1;
(statearr_10282_10433[(1)] = (12));

} else {
var statearr_10284_10434 = state_10189__$1;
(statearr_10284_10434[(1)] = (13));

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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_10287 = [null,null,null,null,null,null,null,null,null];
(statearr_10287[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_10287[(1)] = (1));

return statearr_10287;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_10189){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_10189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e10289){var ex__9373__auto__ = e10289;
var statearr_10290_10437 = state_10189;
(statearr_10290_10437[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_10189[(4)]))){
var statearr_10291_10439 = state_10189;
(statearr_10291_10439[(1)] = cljs.core.first.call(null,(state_10189[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10440 = state_10189;
state_10189 = G__10440;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_10189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_10189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_10307 = f__9550__auto__.call(null);
(statearr_10307[(6)] = c__9549__auto___10381);

return statearr_10307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
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
var c__9549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_10343){
var state_val_10344 = (state_10343[(1)]);
if((state_val_10344 === (7))){
var inst_10339 = (state_10343[(2)]);
var state_10343__$1 = state_10343;
var statearr_10357_10472 = state_10343__$1;
(statearr_10357_10472[(2)] = inst_10339);

(statearr_10357_10472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10344 === (1))){
var inst_10318 = init;
var inst_10320 = inst_10318;
var state_10343__$1 = (function (){var statearr_10360 = state_10343;
(statearr_10360[(7)] = inst_10320);

return statearr_10360;
})();
var statearr_10369_10473 = state_10343__$1;
(statearr_10369_10473[(2)] = null);

(statearr_10369_10473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10344 === (4))){
var inst_10324 = (state_10343[(8)]);
var inst_10324__$1 = (state_10343[(2)]);
var inst_10325 = (inst_10324__$1 == null);
var state_10343__$1 = (function (){var statearr_10379 = state_10343;
(statearr_10379[(8)] = inst_10324__$1);

return statearr_10379;
})();
if(cljs.core.truth_(inst_10325)){
var statearr_10380_10474 = state_10343__$1;
(statearr_10380_10474[(1)] = (5));

} else {
var statearr_10385_10475 = state_10343__$1;
(statearr_10385_10475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10344 === (6))){
var inst_10320 = (state_10343[(7)]);
var inst_10324 = (state_10343[(8)]);
var inst_10329 = (state_10343[(9)]);
var inst_10329__$1 = f.call(null,inst_10320,inst_10324);
var inst_10330 = cljs.core.reduced_QMARK_.call(null,inst_10329__$1);
var state_10343__$1 = (function (){var statearr_10387 = state_10343;
(statearr_10387[(9)] = inst_10329__$1);

return statearr_10387;
})();
if(inst_10330){
var statearr_10390_10477 = state_10343__$1;
(statearr_10390_10477[(1)] = (8));

} else {
var statearr_10391_10480 = state_10343__$1;
(statearr_10391_10480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10344 === (3))){
var inst_10341 = (state_10343[(2)]);
var state_10343__$1 = state_10343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10343__$1,inst_10341);
} else {
if((state_val_10344 === (2))){
var state_10343__$1 = state_10343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10343__$1,(4),ch);
} else {
if((state_val_10344 === (9))){
var inst_10329 = (state_10343[(9)]);
var inst_10320 = inst_10329;
var state_10343__$1 = (function (){var statearr_10394 = state_10343;
(statearr_10394[(7)] = inst_10320);

return statearr_10394;
})();
var statearr_10395_10485 = state_10343__$1;
(statearr_10395_10485[(2)] = null);

(statearr_10395_10485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10344 === (5))){
var inst_10320 = (state_10343[(7)]);
var state_10343__$1 = state_10343;
var statearr_10396_10486 = state_10343__$1;
(statearr_10396_10486[(2)] = inst_10320);

(statearr_10396_10486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10344 === (10))){
var inst_10337 = (state_10343[(2)]);
var state_10343__$1 = state_10343;
var statearr_10397_10490 = state_10343__$1;
(statearr_10397_10490[(2)] = inst_10337);

(statearr_10397_10490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10344 === (8))){
var inst_10329 = (state_10343[(9)]);
var inst_10332 = cljs.core.deref.call(null,inst_10329);
var state_10343__$1 = state_10343;
var statearr_10399_10496 = state_10343__$1;
(statearr_10399_10496[(2)] = inst_10332);

(statearr_10399_10496[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__9370__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9370__auto____0 = (function (){
var statearr_10402 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10402[(0)] = cljs$core$async$reduce_$_state_machine__9370__auto__);

(statearr_10402[(1)] = (1));

return statearr_10402;
});
var cljs$core$async$reduce_$_state_machine__9370__auto____1 = (function (state_10343){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_10343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e10404){var ex__9373__auto__ = e10404;
var statearr_10405_10513 = state_10343;
(statearr_10405_10513[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_10343[(4)]))){
var statearr_10412_10515 = state_10343;
(statearr_10412_10515[(1)] = cljs.core.first.call(null,(state_10343[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10517 = state_10343;
state_10343 = G__10517;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9370__auto__ = function(state_10343){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9370__auto____1.call(this,state_10343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9370__auto____0;
cljs$core$async$reduce_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9370__auto____1;
return cljs$core$async$reduce_$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_10413 = f__9550__auto__.call(null);
(statearr_10413[(6)] = c__9549__auto__);

return statearr_10413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));

return c__9549__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_10426){
var state_val_10427 = (state_10426[(1)]);
if((state_val_10427 === (1))){
var inst_10420 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10426__$1 = state_10426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10426__$1,(2),inst_10420);
} else {
if((state_val_10427 === (2))){
var inst_10422 = (state_10426[(2)]);
var inst_10423 = f__$1.call(null,inst_10422);
var state_10426__$1 = state_10426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10426__$1,inst_10423);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__9370__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9370__auto____0 = (function (){
var statearr_10429 = [null,null,null,null,null,null,null];
(statearr_10429[(0)] = cljs$core$async$transduce_$_state_machine__9370__auto__);

(statearr_10429[(1)] = (1));

return statearr_10429;
});
var cljs$core$async$transduce_$_state_machine__9370__auto____1 = (function (state_10426){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_10426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e10430){var ex__9373__auto__ = e10430;
var statearr_10431_10535 = state_10426;
(statearr_10431_10535[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_10426[(4)]))){
var statearr_10432_10536 = state_10426;
(statearr_10432_10536[(1)] = cljs.core.first.call(null,(state_10426[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10537 = state_10426;
state_10426 = G__10537;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9370__auto__ = function(state_10426){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9370__auto____1.call(this,state_10426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9370__auto____0;
cljs$core$async$transduce_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9370__auto____1;
return cljs$core$async$transduce_$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_10435 = f__9550__auto__.call(null);
(statearr_10435[(6)] = c__9549__auto__);

return statearr_10435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));

return c__9549__auto__;
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
var G__10438 = arguments.length;
switch (G__10438) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_10468){
var state_val_10469 = (state_10468[(1)]);
if((state_val_10469 === (7))){
var inst_10450 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10471_10543 = state_10468__$1;
(statearr_10471_10543[(2)] = inst_10450);

(statearr_10471_10543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (1))){
var inst_10443 = cljs.core.seq.call(null,coll);
var inst_10444 = inst_10443;
var state_10468__$1 = (function (){var statearr_10476 = state_10468;
(statearr_10476[(7)] = inst_10444);

return statearr_10476;
})();
var statearr_10478_10544 = state_10468__$1;
(statearr_10478_10544[(2)] = null);

(statearr_10478_10544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (4))){
var inst_10444 = (state_10468[(7)]);
var inst_10448 = cljs.core.first.call(null,inst_10444);
var state_10468__$1 = state_10468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10468__$1,(7),ch,inst_10448);
} else {
if((state_val_10469 === (13))){
var inst_10462 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10487_10545 = state_10468__$1;
(statearr_10487_10545[(2)] = inst_10462);

(statearr_10487_10545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (6))){
var inst_10453 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
if(cljs.core.truth_(inst_10453)){
var statearr_10498_10546 = state_10468__$1;
(statearr_10498_10546[(1)] = (8));

} else {
var statearr_10499_10547 = state_10468__$1;
(statearr_10499_10547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (3))){
var inst_10466 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10468__$1,inst_10466);
} else {
if((state_val_10469 === (12))){
var state_10468__$1 = state_10468;
var statearr_10500_10554 = state_10468__$1;
(statearr_10500_10554[(2)] = null);

(statearr_10500_10554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (2))){
var inst_10444 = (state_10468[(7)]);
var state_10468__$1 = state_10468;
if(cljs.core.truth_(inst_10444)){
var statearr_10501_10555 = state_10468__$1;
(statearr_10501_10555[(1)] = (4));

} else {
var statearr_10502_10556 = state_10468__$1;
(statearr_10502_10556[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (11))){
var inst_10459 = cljs.core.async.close_BANG_.call(null,ch);
var state_10468__$1 = state_10468;
var statearr_10503_10557 = state_10468__$1;
(statearr_10503_10557[(2)] = inst_10459);

(statearr_10503_10557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (9))){
var state_10468__$1 = state_10468;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10504_10558 = state_10468__$1;
(statearr_10504_10558[(1)] = (11));

} else {
var statearr_10505_10559 = state_10468__$1;
(statearr_10505_10559[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (5))){
var inst_10444 = (state_10468[(7)]);
var state_10468__$1 = state_10468;
var statearr_10510_10560 = state_10468__$1;
(statearr_10510_10560[(2)] = inst_10444);

(statearr_10510_10560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (10))){
var inst_10464 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
var statearr_10512_10561 = state_10468__$1;
(statearr_10512_10561[(2)] = inst_10464);

(statearr_10512_10561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10469 === (8))){
var inst_10444 = (state_10468[(7)]);
var inst_10455 = cljs.core.next.call(null,inst_10444);
var inst_10444__$1 = inst_10455;
var state_10468__$1 = (function (){var statearr_10514 = state_10468;
(statearr_10514[(7)] = inst_10444__$1);

return statearr_10514;
})();
var statearr_10516_10562 = state_10468__$1;
(statearr_10516_10562[(2)] = null);

(statearr_10516_10562[(1)] = (2));


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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_10518 = [null,null,null,null,null,null,null,null];
(statearr_10518[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_10518[(1)] = (1));

return statearr_10518;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_10468){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_10468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e10519){var ex__9373__auto__ = e10519;
var statearr_10520_10563 = state_10468;
(statearr_10520_10563[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_10468[(4)]))){
var statearr_10521_10564 = state_10468;
(statearr_10521_10564[(1)] = cljs.core.first.call(null,(state_10468[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10565 = state_10468;
state_10468 = G__10565;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_10468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_10468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_10522 = f__9550__auto__.call(null);
(statearr_10522[(6)] = c__9549__auto__);

return statearr_10522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));

return c__9549__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__10527 = arguments.length;
switch (G__10527) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_10573 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,_);
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_10573.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_10577 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_10577.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_10578 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_10578.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_10579 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_10579.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10574 = (function (ch,cs,meta10575){
this.ch = ch;
this.cs = cs;
this.meta10575 = meta10575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10576,meta10575__$1){
var self__ = this;
var _10576__$1 = this;
return (new cljs.core.async.t_cljs$core$async10574(self__.ch,self__.cs,meta10575__$1));
}));

(cljs.core.async.t_cljs$core$async10574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10576){
var self__ = this;
var _10576__$1 = this;
return self__.meta10575;
}));

(cljs.core.async.t_cljs$core$async10574.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async10574.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10574.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async10574.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async10574.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async10574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10575","meta10575",-1742044412,null)], null);
}));

(cljs.core.async.t_cljs$core$async10574.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10574");

(cljs.core.async.t_cljs$core$async10574.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async10574");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10574.
 */
cljs.core.async.__GT_t_cljs$core$async10574 = (function cljs$core$async$mult_$___GT_t_cljs$core$async10574(ch__$1,cs__$1,meta10575){
return (new cljs.core.async.t_cljs$core$async10574(ch__$1,cs__$1,meta10575));
});

}

return (new cljs.core.async.t_cljs$core$async10574(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__9549__auto___10925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_10730){
var state_val_10731 = (state_10730[(1)]);
if((state_val_10731 === (7))){
var inst_10726 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10736_10927 = state_10730__$1;
(statearr_10736_10927[(2)] = inst_10726);

(statearr_10736_10927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (20))){
var inst_10619 = (state_10730[(7)]);
var inst_10631 = cljs.core.first.call(null,inst_10619);
var inst_10632 = cljs.core.nth.call(null,inst_10631,(0),null);
var inst_10634 = cljs.core.nth.call(null,inst_10631,(1),null);
var state_10730__$1 = (function (){var statearr_10737 = state_10730;
(statearr_10737[(8)] = inst_10632);

return statearr_10737;
})();
if(cljs.core.truth_(inst_10634)){
var statearr_10738_10928 = state_10730__$1;
(statearr_10738_10928[(1)] = (22));

} else {
var statearr_10739_10929 = state_10730__$1;
(statearr_10739_10929[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (27))){
var inst_10667 = (state_10730[(9)]);
var inst_10669 = (state_10730[(10)]);
var inst_10674 = (state_10730[(11)]);
var inst_10588 = (state_10730[(12)]);
var inst_10674__$1 = cljs.core._nth.call(null,inst_10667,inst_10669);
var inst_10675 = cljs.core.async.put_BANG_.call(null,inst_10674__$1,inst_10588,done);
var state_10730__$1 = (function (){var statearr_10740 = state_10730;
(statearr_10740[(11)] = inst_10674__$1);

return statearr_10740;
})();
if(cljs.core.truth_(inst_10675)){
var statearr_10741_10930 = state_10730__$1;
(statearr_10741_10930[(1)] = (30));

} else {
var statearr_10742_10931 = state_10730__$1;
(statearr_10742_10931[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (1))){
var state_10730__$1 = state_10730;
var statearr_10743_10932 = state_10730__$1;
(statearr_10743_10932[(2)] = null);

(statearr_10743_10932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (24))){
var inst_10619 = (state_10730[(7)]);
var inst_10644 = (state_10730[(2)]);
var inst_10645 = cljs.core.next.call(null,inst_10619);
var inst_10597 = inst_10645;
var inst_10598 = null;
var inst_10599 = (0);
var inst_10600 = (0);
var state_10730__$1 = (function (){var statearr_10744 = state_10730;
(statearr_10744[(13)] = inst_10644);

(statearr_10744[(14)] = inst_10597);

(statearr_10744[(15)] = inst_10598);

(statearr_10744[(16)] = inst_10599);

(statearr_10744[(17)] = inst_10600);

return statearr_10744;
})();
var statearr_10745_10933 = state_10730__$1;
(statearr_10745_10933[(2)] = null);

(statearr_10745_10933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (39))){
var state_10730__$1 = state_10730;
var statearr_10753_10934 = state_10730__$1;
(statearr_10753_10934[(2)] = null);

(statearr_10753_10934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (4))){
var inst_10588 = (state_10730[(12)]);
var inst_10588__$1 = (state_10730[(2)]);
var inst_10589 = (inst_10588__$1 == null);
var state_10730__$1 = (function (){var statearr_10760 = state_10730;
(statearr_10760[(12)] = inst_10588__$1);

return statearr_10760;
})();
if(cljs.core.truth_(inst_10589)){
var statearr_10764_10937 = state_10730__$1;
(statearr_10764_10937[(1)] = (5));

} else {
var statearr_10765_10938 = state_10730__$1;
(statearr_10765_10938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (15))){
var inst_10600 = (state_10730[(17)]);
var inst_10597 = (state_10730[(14)]);
var inst_10598 = (state_10730[(15)]);
var inst_10599 = (state_10730[(16)]);
var inst_10615 = (state_10730[(2)]);
var inst_10616 = (inst_10600 + (1));
var tmp10749 = inst_10597;
var tmp10750 = inst_10599;
var tmp10752 = inst_10598;
var inst_10597__$1 = tmp10749;
var inst_10598__$1 = tmp10752;
var inst_10599__$1 = tmp10750;
var inst_10600__$1 = inst_10616;
var state_10730__$1 = (function (){var statearr_10769 = state_10730;
(statearr_10769[(18)] = inst_10615);

(statearr_10769[(14)] = inst_10597__$1);

(statearr_10769[(15)] = inst_10598__$1);

(statearr_10769[(16)] = inst_10599__$1);

(statearr_10769[(17)] = inst_10600__$1);

return statearr_10769;
})();
var statearr_10770_10939 = state_10730__$1;
(statearr_10770_10939[(2)] = null);

(statearr_10770_10939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (21))){
var inst_10648 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10774_10945 = state_10730__$1;
(statearr_10774_10945[(2)] = inst_10648);

(statearr_10774_10945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (31))){
var inst_10674 = (state_10730[(11)]);
var inst_10678 = cljs.core.async.untap_STAR_.call(null,m,inst_10674);
var state_10730__$1 = state_10730;
var statearr_10775_10946 = state_10730__$1;
(statearr_10775_10946[(2)] = inst_10678);

(statearr_10775_10946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (32))){
var inst_10669 = (state_10730[(10)]);
var inst_10666 = (state_10730[(19)]);
var inst_10667 = (state_10730[(9)]);
var inst_10668 = (state_10730[(20)]);
var inst_10680 = (state_10730[(2)]);
var inst_10681 = (inst_10669 + (1));
var tmp10771 = inst_10667;
var tmp10772 = inst_10666;
var tmp10773 = inst_10668;
var inst_10666__$1 = tmp10772;
var inst_10667__$1 = tmp10771;
var inst_10668__$1 = tmp10773;
var inst_10669__$1 = inst_10681;
var state_10730__$1 = (function (){var statearr_10777 = state_10730;
(statearr_10777[(21)] = inst_10680);

(statearr_10777[(19)] = inst_10666__$1);

(statearr_10777[(9)] = inst_10667__$1);

(statearr_10777[(20)] = inst_10668__$1);

(statearr_10777[(10)] = inst_10669__$1);

return statearr_10777;
})();
var statearr_10781_10949 = state_10730__$1;
(statearr_10781_10949[(2)] = null);

(statearr_10781_10949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (40))){
var inst_10697 = (state_10730[(22)]);
var inst_10702 = cljs.core.async.untap_STAR_.call(null,m,inst_10697);
var state_10730__$1 = state_10730;
var statearr_10782_10953 = state_10730__$1;
(statearr_10782_10953[(2)] = inst_10702);

(statearr_10782_10953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (33))){
var inst_10685 = (state_10730[(23)]);
var inst_10689 = cljs.core.chunked_seq_QMARK_.call(null,inst_10685);
var state_10730__$1 = state_10730;
if(inst_10689){
var statearr_10783_10955 = state_10730__$1;
(statearr_10783_10955[(1)] = (36));

} else {
var statearr_10784_10956 = state_10730__$1;
(statearr_10784_10956[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (13))){
var inst_10609 = (state_10730[(24)]);
var inst_10612 = cljs.core.async.close_BANG_.call(null,inst_10609);
var state_10730__$1 = state_10730;
var statearr_10790_10958 = state_10730__$1;
(statearr_10790_10958[(2)] = inst_10612);

(statearr_10790_10958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (22))){
var inst_10632 = (state_10730[(8)]);
var inst_10641 = cljs.core.async.close_BANG_.call(null,inst_10632);
var state_10730__$1 = state_10730;
var statearr_10793_10960 = state_10730__$1;
(statearr_10793_10960[(2)] = inst_10641);

(statearr_10793_10960[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (36))){
var inst_10685 = (state_10730[(23)]);
var inst_10691 = cljs.core.chunk_first.call(null,inst_10685);
var inst_10693 = cljs.core.chunk_rest.call(null,inst_10685);
var inst_10694 = cljs.core.count.call(null,inst_10691);
var inst_10666 = inst_10693;
var inst_10667 = inst_10691;
var inst_10668 = inst_10694;
var inst_10669 = (0);
var state_10730__$1 = (function (){var statearr_10798 = state_10730;
(statearr_10798[(19)] = inst_10666);

(statearr_10798[(9)] = inst_10667);

(statearr_10798[(20)] = inst_10668);

(statearr_10798[(10)] = inst_10669);

return statearr_10798;
})();
var statearr_10802_10969 = state_10730__$1;
(statearr_10802_10969[(2)] = null);

(statearr_10802_10969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (41))){
var inst_10685 = (state_10730[(23)]);
var inst_10704 = (state_10730[(2)]);
var inst_10705 = cljs.core.next.call(null,inst_10685);
var inst_10666 = inst_10705;
var inst_10667 = null;
var inst_10668 = (0);
var inst_10669 = (0);
var state_10730__$1 = (function (){var statearr_10803 = state_10730;
(statearr_10803[(25)] = inst_10704);

(statearr_10803[(19)] = inst_10666);

(statearr_10803[(9)] = inst_10667);

(statearr_10803[(20)] = inst_10668);

(statearr_10803[(10)] = inst_10669);

return statearr_10803;
})();
var statearr_10804_10970 = state_10730__$1;
(statearr_10804_10970[(2)] = null);

(statearr_10804_10970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (43))){
var state_10730__$1 = state_10730;
var statearr_10805_10971 = state_10730__$1;
(statearr_10805_10971[(2)] = null);

(statearr_10805_10971[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (29))){
var inst_10714 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10806_10972 = state_10730__$1;
(statearr_10806_10972[(2)] = inst_10714);

(statearr_10806_10972[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (44))){
var inst_10723 = (state_10730[(2)]);
var state_10730__$1 = (function (){var statearr_10807 = state_10730;
(statearr_10807[(26)] = inst_10723);

return statearr_10807;
})();
var statearr_10808_10973 = state_10730__$1;
(statearr_10808_10973[(2)] = null);

(statearr_10808_10973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (6))){
var inst_10658 = (state_10730[(27)]);
var inst_10657 = cljs.core.deref.call(null,cs);
var inst_10658__$1 = cljs.core.keys.call(null,inst_10657);
var inst_10659 = cljs.core.count.call(null,inst_10658__$1);
var inst_10660 = cljs.core.reset_BANG_.call(null,dctr,inst_10659);
var inst_10665 = cljs.core.seq.call(null,inst_10658__$1);
var inst_10666 = inst_10665;
var inst_10667 = null;
var inst_10668 = (0);
var inst_10669 = (0);
var state_10730__$1 = (function (){var statearr_10813 = state_10730;
(statearr_10813[(27)] = inst_10658__$1);

(statearr_10813[(28)] = inst_10660);

(statearr_10813[(19)] = inst_10666);

(statearr_10813[(9)] = inst_10667);

(statearr_10813[(20)] = inst_10668);

(statearr_10813[(10)] = inst_10669);

return statearr_10813;
})();
var statearr_10814_10974 = state_10730__$1;
(statearr_10814_10974[(2)] = null);

(statearr_10814_10974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (28))){
var inst_10666 = (state_10730[(19)]);
var inst_10685 = (state_10730[(23)]);
var inst_10685__$1 = cljs.core.seq.call(null,inst_10666);
var state_10730__$1 = (function (){var statearr_10816 = state_10730;
(statearr_10816[(23)] = inst_10685__$1);

return statearr_10816;
})();
if(inst_10685__$1){
var statearr_10817_10976 = state_10730__$1;
(statearr_10817_10976[(1)] = (33));

} else {
var statearr_10818_10977 = state_10730__$1;
(statearr_10818_10977[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (25))){
var inst_10669 = (state_10730[(10)]);
var inst_10668 = (state_10730[(20)]);
var inst_10671 = (inst_10669 < inst_10668);
var inst_10672 = inst_10671;
var state_10730__$1 = state_10730;
if(cljs.core.truth_(inst_10672)){
var statearr_10819_10982 = state_10730__$1;
(statearr_10819_10982[(1)] = (27));

} else {
var statearr_10820_10983 = state_10730__$1;
(statearr_10820_10983[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (34))){
var state_10730__$1 = state_10730;
var statearr_10821_10985 = state_10730__$1;
(statearr_10821_10985[(2)] = null);

(statearr_10821_10985[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (17))){
var state_10730__$1 = state_10730;
var statearr_10822_10986 = state_10730__$1;
(statearr_10822_10986[(2)] = null);

(statearr_10822_10986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (3))){
var inst_10728 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10730__$1,inst_10728);
} else {
if((state_val_10731 === (12))){
var inst_10653 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10823_10987 = state_10730__$1;
(statearr_10823_10987[(2)] = inst_10653);

(statearr_10823_10987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (2))){
var state_10730__$1 = state_10730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10730__$1,(4),ch);
} else {
if((state_val_10731 === (23))){
var state_10730__$1 = state_10730;
var statearr_10824_10988 = state_10730__$1;
(statearr_10824_10988[(2)] = null);

(statearr_10824_10988[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (35))){
var inst_10712 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10829_10989 = state_10730__$1;
(statearr_10829_10989[(2)] = inst_10712);

(statearr_10829_10989[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (19))){
var inst_10619 = (state_10730[(7)]);
var inst_10623 = cljs.core.chunk_first.call(null,inst_10619);
var inst_10624 = cljs.core.chunk_rest.call(null,inst_10619);
var inst_10625 = cljs.core.count.call(null,inst_10623);
var inst_10597 = inst_10624;
var inst_10598 = inst_10623;
var inst_10599 = inst_10625;
var inst_10600 = (0);
var state_10730__$1 = (function (){var statearr_10830 = state_10730;
(statearr_10830[(14)] = inst_10597);

(statearr_10830[(15)] = inst_10598);

(statearr_10830[(16)] = inst_10599);

(statearr_10830[(17)] = inst_10600);

return statearr_10830;
})();
var statearr_10831_10990 = state_10730__$1;
(statearr_10831_10990[(2)] = null);

(statearr_10831_10990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (11))){
var inst_10597 = (state_10730[(14)]);
var inst_10619 = (state_10730[(7)]);
var inst_10619__$1 = cljs.core.seq.call(null,inst_10597);
var state_10730__$1 = (function (){var statearr_10832 = state_10730;
(statearr_10832[(7)] = inst_10619__$1);

return statearr_10832;
})();
if(inst_10619__$1){
var statearr_10834_10991 = state_10730__$1;
(statearr_10834_10991[(1)] = (16));

} else {
var statearr_10835_10992 = state_10730__$1;
(statearr_10835_10992[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (9))){
var inst_10655 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10840_10994 = state_10730__$1;
(statearr_10840_10994[(2)] = inst_10655);

(statearr_10840_10994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (5))){
var inst_10595 = cljs.core.deref.call(null,cs);
var inst_10596 = cljs.core.seq.call(null,inst_10595);
var inst_10597 = inst_10596;
var inst_10598 = null;
var inst_10599 = (0);
var inst_10600 = (0);
var state_10730__$1 = (function (){var statearr_10844 = state_10730;
(statearr_10844[(14)] = inst_10597);

(statearr_10844[(15)] = inst_10598);

(statearr_10844[(16)] = inst_10599);

(statearr_10844[(17)] = inst_10600);

return statearr_10844;
})();
var statearr_10846_11000 = state_10730__$1;
(statearr_10846_11000[(2)] = null);

(statearr_10846_11000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (14))){
var state_10730__$1 = state_10730;
var statearr_10847_11001 = state_10730__$1;
(statearr_10847_11001[(2)] = null);

(statearr_10847_11001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (45))){
var inst_10720 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10848_11002 = state_10730__$1;
(statearr_10848_11002[(2)] = inst_10720);

(statearr_10848_11002[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (26))){
var inst_10658 = (state_10730[(27)]);
var inst_10716 = (state_10730[(2)]);
var inst_10717 = cljs.core.seq.call(null,inst_10658);
var state_10730__$1 = (function (){var statearr_10852 = state_10730;
(statearr_10852[(29)] = inst_10716);

return statearr_10852;
})();
if(inst_10717){
var statearr_10857_11003 = state_10730__$1;
(statearr_10857_11003[(1)] = (42));

} else {
var statearr_10858_11004 = state_10730__$1;
(statearr_10858_11004[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (16))){
var inst_10619 = (state_10730[(7)]);
var inst_10621 = cljs.core.chunked_seq_QMARK_.call(null,inst_10619);
var state_10730__$1 = state_10730;
if(inst_10621){
var statearr_10863_11005 = state_10730__$1;
(statearr_10863_11005[(1)] = (19));

} else {
var statearr_10871_11009 = state_10730__$1;
(statearr_10871_11009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (38))){
var inst_10709 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10875_11010 = state_10730__$1;
(statearr_10875_11010[(2)] = inst_10709);

(statearr_10875_11010[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (30))){
var state_10730__$1 = state_10730;
var statearr_10876_11011 = state_10730__$1;
(statearr_10876_11011[(2)] = null);

(statearr_10876_11011[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (10))){
var inst_10598 = (state_10730[(15)]);
var inst_10600 = (state_10730[(17)]);
var inst_10608 = cljs.core._nth.call(null,inst_10598,inst_10600);
var inst_10609 = cljs.core.nth.call(null,inst_10608,(0),null);
var inst_10610 = cljs.core.nth.call(null,inst_10608,(1),null);
var state_10730__$1 = (function (){var statearr_10877 = state_10730;
(statearr_10877[(24)] = inst_10609);

return statearr_10877;
})();
if(cljs.core.truth_(inst_10610)){
var statearr_10879_11012 = state_10730__$1;
(statearr_10879_11012[(1)] = (13));

} else {
var statearr_10880_11013 = state_10730__$1;
(statearr_10880_11013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (18))){
var inst_10651 = (state_10730[(2)]);
var state_10730__$1 = state_10730;
var statearr_10885_11014 = state_10730__$1;
(statearr_10885_11014[(2)] = inst_10651);

(statearr_10885_11014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (42))){
var state_10730__$1 = state_10730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10730__$1,(45),dchan);
} else {
if((state_val_10731 === (37))){
var inst_10685 = (state_10730[(23)]);
var inst_10697 = (state_10730[(22)]);
var inst_10588 = (state_10730[(12)]);
var inst_10697__$1 = cljs.core.first.call(null,inst_10685);
var inst_10698 = cljs.core.async.put_BANG_.call(null,inst_10697__$1,inst_10588,done);
var state_10730__$1 = (function (){var statearr_10887 = state_10730;
(statearr_10887[(22)] = inst_10697__$1);

return statearr_10887;
})();
if(cljs.core.truth_(inst_10698)){
var statearr_10891_11015 = state_10730__$1;
(statearr_10891_11015[(1)] = (39));

} else {
var statearr_10895_11016 = state_10730__$1;
(statearr_10895_11016[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10731 === (8))){
var inst_10600 = (state_10730[(17)]);
var inst_10599 = (state_10730[(16)]);
var inst_10602 = (inst_10600 < inst_10599);
var inst_10603 = inst_10602;
var state_10730__$1 = state_10730;
if(cljs.core.truth_(inst_10603)){
var statearr_10900_11017 = state_10730__$1;
(statearr_10900_11017[(1)] = (10));

} else {
var statearr_10903_11018 = state_10730__$1;
(statearr_10903_11018[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__9370__auto__ = null;
var cljs$core$async$mult_$_state_machine__9370__auto____0 = (function (){
var statearr_10916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10916[(0)] = cljs$core$async$mult_$_state_machine__9370__auto__);

(statearr_10916[(1)] = (1));

return statearr_10916;
});
var cljs$core$async$mult_$_state_machine__9370__auto____1 = (function (state_10730){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_10730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e10917){var ex__9373__auto__ = e10917;
var statearr_10918_11019 = state_10730;
(statearr_10918_11019[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_10730[(4)]))){
var statearr_10921_11020 = state_10730;
(statearr_10921_11020[(1)] = cljs.core.first.call(null,(state_10730[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11021 = state_10730;
state_10730 = G__11021;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9370__auto__ = function(state_10730){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9370__auto____1.call(this,state_10730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9370__auto____0;
cljs$core$async$mult_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9370__auto____1;
return cljs$core$async$mult_$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_10922 = f__9550__auto__.call(null);
(statearr_10922[(6)] = c__9549__auto___10925);

return statearr_10922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
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
var G__10924 = arguments.length;
switch (G__10924) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_11031 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_11031.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_11034 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_11034.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_11068 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m);
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_11068.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_11106 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,state_map);
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_11106.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_11128 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,m,mode);
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_11128.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___11135 = arguments.length;
var i__5727__auto___11136 = (0);
while(true){
if((i__5727__auto___11136 < len__5726__auto___11135)){
args__5732__auto__.push((arguments[i__5727__auto___11136]));

var G__11137 = (i__5727__auto___11136 + (1));
i__5727__auto___11136 = G__11137;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10951){
var map__10952 = p__10951;
var map__10952__$1 = cljs.core.__destructure_map.call(null,map__10952);
var opts = map__10952__$1;
var statearr_10954_11141 = state;
(statearr_10954_11141[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_10957_11142 = state;
(statearr_10957_11142[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_10966_11143 = state;
(statearr_10966_11143[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10941){
var G__10942 = cljs.core.first.call(null,seq10941);
var seq10941__$1 = cljs.core.next.call(null,seq10941);
var G__10943 = cljs.core.first.call(null,seq10941__$1);
var seq10941__$2 = cljs.core.next.call(null,seq10941__$1);
var G__10944 = cljs.core.first.call(null,seq10941__$2);
var seq10941__$3 = cljs.core.next.call(null,seq10941__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10942,G__10943,G__10944,seq10941__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11006 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11007){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11007 = meta11007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11008,meta11007__$1){
var self__ = this;
var _11008__$1 = this;
return (new cljs.core.async.t_cljs$core$async11006(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11007__$1));
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11008){
var self__ = this;
var _11008__$1 = this;
return self__.meta11007;
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11006.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11007","meta11007",-1043788860,null)], null);
}));

(cljs.core.async.t_cljs$core$async11006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11006");

(cljs.core.async.t_cljs$core$async11006.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11006.
 */
cljs.core.async.__GT_t_cljs$core$async11006 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11006(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11007){
return (new cljs.core.async.t_cljs$core$async11006(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11007));
});

}

return (new cljs.core.async.t_cljs$core$async11006(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9549__auto___11270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_11133){
var state_val_11134 = (state_11133[(1)]);
if((state_val_11134 === (7))){
var inst_11079 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
if(cljs.core.truth_(inst_11079)){
var statearr_11138_11271 = state_11133__$1;
(statearr_11138_11271[(1)] = (8));

} else {
var statearr_11139_11272 = state_11133__$1;
(statearr_11139_11272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (20))){
var inst_11071 = (state_11133[(7)]);
var state_11133__$1 = state_11133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11133__$1,(23),out,inst_11071);
} else {
if((state_val_11134 === (1))){
var inst_11038 = calc_state.call(null);
var inst_11039 = cljs.core.__destructure_map.call(null,inst_11038);
var inst_11040 = cljs.core.get.call(null,inst_11039,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11041 = cljs.core.get.call(null,inst_11039,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11053 = cljs.core.get.call(null,inst_11039,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11054 = inst_11038;
var state_11133__$1 = (function (){var statearr_11145 = state_11133;
(statearr_11145[(8)] = inst_11040);

(statearr_11145[(9)] = inst_11041);

(statearr_11145[(10)] = inst_11053);

(statearr_11145[(11)] = inst_11054);

return statearr_11145;
})();
var statearr_11146_11273 = state_11133__$1;
(statearr_11146_11273[(2)] = null);

(statearr_11146_11273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (24))){
var inst_11057 = (state_11133[(12)]);
var inst_11054 = inst_11057;
var state_11133__$1 = (function (){var statearr_11148 = state_11133;
(statearr_11148[(11)] = inst_11054);

return statearr_11148;
})();
var statearr_11149_11274 = state_11133__$1;
(statearr_11149_11274[(2)] = null);

(statearr_11149_11274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (4))){
var inst_11071 = (state_11133[(7)]);
var inst_11074 = (state_11133[(13)]);
var inst_11070 = (state_11133[(2)]);
var inst_11071__$1 = cljs.core.nth.call(null,inst_11070,(0),null);
var inst_11072 = cljs.core.nth.call(null,inst_11070,(1),null);
var inst_11074__$1 = (inst_11071__$1 == null);
var state_11133__$1 = (function (){var statearr_11150 = state_11133;
(statearr_11150[(7)] = inst_11071__$1);

(statearr_11150[(14)] = inst_11072);

(statearr_11150[(13)] = inst_11074__$1);

return statearr_11150;
})();
if(cljs.core.truth_(inst_11074__$1)){
var statearr_11151_11276 = state_11133__$1;
(statearr_11151_11276[(1)] = (5));

} else {
var statearr_11152_11277 = state_11133__$1;
(statearr_11152_11277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (15))){
var inst_11058 = (state_11133[(15)]);
var inst_11096 = (state_11133[(16)]);
var inst_11096__$1 = cljs.core.empty_QMARK_.call(null,inst_11058);
var state_11133__$1 = (function (){var statearr_11153 = state_11133;
(statearr_11153[(16)] = inst_11096__$1);

return statearr_11153;
})();
if(inst_11096__$1){
var statearr_11155_11280 = state_11133__$1;
(statearr_11155_11280[(1)] = (17));

} else {
var statearr_11156_11281 = state_11133__$1;
(statearr_11156_11281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (21))){
var inst_11057 = (state_11133[(12)]);
var inst_11054 = inst_11057;
var state_11133__$1 = (function (){var statearr_11161 = state_11133;
(statearr_11161[(11)] = inst_11054);

return statearr_11161;
})();
var statearr_11164_11282 = state_11133__$1;
(statearr_11164_11282[(2)] = null);

(statearr_11164_11282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (13))){
var inst_11089 = (state_11133[(2)]);
var inst_11090 = calc_state.call(null);
var inst_11054 = inst_11090;
var state_11133__$1 = (function (){var statearr_11173 = state_11133;
(statearr_11173[(17)] = inst_11089);

(statearr_11173[(11)] = inst_11054);

return statearr_11173;
})();
var statearr_11182_11283 = state_11133__$1;
(statearr_11182_11283[(2)] = null);

(statearr_11182_11283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (22))){
var inst_11117 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
var statearr_11187_11284 = state_11133__$1;
(statearr_11187_11284[(2)] = inst_11117);

(statearr_11187_11284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (6))){
var inst_11072 = (state_11133[(14)]);
var inst_11077 = cljs.core._EQ_.call(null,inst_11072,change);
var state_11133__$1 = state_11133;
var statearr_11199_11285 = state_11133__$1;
(statearr_11199_11285[(2)] = inst_11077);

(statearr_11199_11285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (25))){
var state_11133__$1 = state_11133;
var statearr_11204_11287 = state_11133__$1;
(statearr_11204_11287[(2)] = null);

(statearr_11204_11287[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (17))){
var inst_11059 = (state_11133[(18)]);
var inst_11072 = (state_11133[(14)]);
var inst_11098 = inst_11059.call(null,inst_11072);
var inst_11099 = cljs.core.not.call(null,inst_11098);
var state_11133__$1 = state_11133;
var statearr_11205_11288 = state_11133__$1;
(statearr_11205_11288[(2)] = inst_11099);

(statearr_11205_11288[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (3))){
var inst_11126 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11133__$1,inst_11126);
} else {
if((state_val_11134 === (12))){
var state_11133__$1 = state_11133;
var statearr_11215_11289 = state_11133__$1;
(statearr_11215_11289[(2)] = null);

(statearr_11215_11289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (2))){
var inst_11054 = (state_11133[(11)]);
var inst_11057 = (state_11133[(12)]);
var inst_11057__$1 = cljs.core.__destructure_map.call(null,inst_11054);
var inst_11058 = cljs.core.get.call(null,inst_11057__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11059 = cljs.core.get.call(null,inst_11057__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11064 = cljs.core.get.call(null,inst_11057__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11133__$1 = (function (){var statearr_11222 = state_11133;
(statearr_11222[(12)] = inst_11057__$1);

(statearr_11222[(15)] = inst_11058);

(statearr_11222[(18)] = inst_11059);

return statearr_11222;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11133__$1,(4),inst_11064);
} else {
if((state_val_11134 === (23))){
var inst_11108 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
if(cljs.core.truth_(inst_11108)){
var statearr_11223_11293 = state_11133__$1;
(statearr_11223_11293[(1)] = (24));

} else {
var statearr_11224_11294 = state_11133__$1;
(statearr_11224_11294[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (19))){
var inst_11102 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
var statearr_11226_11295 = state_11133__$1;
(statearr_11226_11295[(2)] = inst_11102);

(statearr_11226_11295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (11))){
var inst_11072 = (state_11133[(14)]);
var inst_11086 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11072);
var state_11133__$1 = state_11133;
var statearr_11229_11296 = state_11133__$1;
(statearr_11229_11296[(2)] = inst_11086);

(statearr_11229_11296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (9))){
var inst_11058 = (state_11133[(15)]);
var inst_11072 = (state_11133[(14)]);
var inst_11093 = (state_11133[(19)]);
var inst_11093__$1 = inst_11058.call(null,inst_11072);
var state_11133__$1 = (function (){var statearr_11232 = state_11133;
(statearr_11232[(19)] = inst_11093__$1);

return statearr_11232;
})();
if(cljs.core.truth_(inst_11093__$1)){
var statearr_11233_11297 = state_11133__$1;
(statearr_11233_11297[(1)] = (14));

} else {
var statearr_11234_11298 = state_11133__$1;
(statearr_11234_11298[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (5))){
var inst_11074 = (state_11133[(13)]);
var state_11133__$1 = state_11133;
var statearr_11235_11299 = state_11133__$1;
(statearr_11235_11299[(2)] = inst_11074);

(statearr_11235_11299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (14))){
var inst_11093 = (state_11133[(19)]);
var state_11133__$1 = state_11133;
var statearr_11236_11300 = state_11133__$1;
(statearr_11236_11300[(2)] = inst_11093);

(statearr_11236_11300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (26))){
var inst_11113 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
var statearr_11238_11301 = state_11133__$1;
(statearr_11238_11301[(2)] = inst_11113);

(statearr_11238_11301[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (16))){
var inst_11104 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
if(cljs.core.truth_(inst_11104)){
var statearr_11245_11302 = state_11133__$1;
(statearr_11245_11302[(1)] = (20));

} else {
var statearr_11246_11303 = state_11133__$1;
(statearr_11246_11303[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (10))){
var inst_11119 = (state_11133[(2)]);
var state_11133__$1 = state_11133;
var statearr_11247_11305 = state_11133__$1;
(statearr_11247_11305[(2)] = inst_11119);

(statearr_11247_11305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (18))){
var inst_11096 = (state_11133[(16)]);
var state_11133__$1 = state_11133;
var statearr_11248_11306 = state_11133__$1;
(statearr_11248_11306[(2)] = inst_11096);

(statearr_11248_11306[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11134 === (8))){
var inst_11071 = (state_11133[(7)]);
var inst_11082 = (inst_11071 == null);
var state_11133__$1 = state_11133;
if(cljs.core.truth_(inst_11082)){
var statearr_11252_11307 = state_11133__$1;
(statearr_11252_11307[(1)] = (11));

} else {
var statearr_11253_11308 = state_11133__$1;
(statearr_11253_11308[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__9370__auto__ = null;
var cljs$core$async$mix_$_state_machine__9370__auto____0 = (function (){
var statearr_11254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11254[(0)] = cljs$core$async$mix_$_state_machine__9370__auto__);

(statearr_11254[(1)] = (1));

return statearr_11254;
});
var cljs$core$async$mix_$_state_machine__9370__auto____1 = (function (state_11133){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_11133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e11255){var ex__9373__auto__ = e11255;
var statearr_11257_11321 = state_11133;
(statearr_11257_11321[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_11133[(4)]))){
var statearr_11260_11327 = state_11133;
(statearr_11260_11327[(1)] = cljs.core.first.call(null,(state_11133[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11334 = state_11133;
state_11133 = G__11334;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9370__auto__ = function(state_11133){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9370__auto____1.call(this,state_11133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9370__auto____0;
cljs$core$async$mix_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9370__auto____1;
return cljs$core$async$mix_$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_11265 = f__9550__auto__.call(null);
(statearr_11265[(6)] = c__9549__auto___11270);

return statearr_11265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_11352 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_11352.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_11367 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v,ch);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_11367.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_11369 = (function() {
var G__11370 = null;
var G__11370__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__11370__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,p,v);
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__11370 = function(p,v){
switch(arguments.length){
case 1:
return G__11370__1.call(this,p);
case 2:
return G__11370__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11370.cljs$core$IFn$_invoke$arity$1 = G__11370__1;
G__11370.cljs$core$IFn$_invoke$arity$2 = G__11370__2;
return G__11370;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11268 = arguments.length;
switch (G__11268) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_11369.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_11369.call(null,p,v);
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
var G__11279 = arguments.length;
switch (G__11279) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__11275_SHARP_){
if(cljs.core.truth_(p1__11275_SHARP_.call(null,topic))){
return p1__11275_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11275_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11290 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11291){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11291 = meta11291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11292,meta11291__$1){
var self__ = this;
var _11292__$1 = this;
return (new cljs.core.async.t_cljs$core$async11290(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11291__$1));
}));

(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11292){
var self__ = this;
var _11292__$1 = this;
return self__.meta11291;
}));

(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11291","meta11291",1697518585,null)], null);
}));

(cljs.core.async.t_cljs$core$async11290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11290");

(cljs.core.async.t_cljs$core$async11290.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11290.
 */
cljs.core.async.__GT_t_cljs$core$async11290 = (function cljs$core$async$__GT_t_cljs$core$async11290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11291){
return (new cljs.core.async.t_cljs$core$async11290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11291));
});

}

return (new cljs.core.async.t_cljs$core$async11290(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9549__auto___11463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_11388){
var state_val_11389 = (state_11388[(1)]);
if((state_val_11389 === (7))){
var inst_11384 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11391_11465 = state_11388__$1;
(statearr_11391_11465[(2)] = inst_11384);

(statearr_11391_11465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (20))){
var state_11388__$1 = state_11388;
var statearr_11392_11466 = state_11388__$1;
(statearr_11392_11466[(2)] = null);

(statearr_11392_11466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (1))){
var state_11388__$1 = state_11388;
var statearr_11393_11468 = state_11388__$1;
(statearr_11393_11468[(2)] = null);

(statearr_11393_11468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (24))){
var inst_11364 = (state_11388[(7)]);
var inst_11376 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11364);
var state_11388__$1 = state_11388;
var statearr_11394_11470 = state_11388__$1;
(statearr_11394_11470[(2)] = inst_11376);

(statearr_11394_11470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (4))){
var inst_11311 = (state_11388[(8)]);
var inst_11311__$1 = (state_11388[(2)]);
var inst_11312 = (inst_11311__$1 == null);
var state_11388__$1 = (function (){var statearr_11395 = state_11388;
(statearr_11395[(8)] = inst_11311__$1);

return statearr_11395;
})();
if(cljs.core.truth_(inst_11312)){
var statearr_11396_11471 = state_11388__$1;
(statearr_11396_11471[(1)] = (5));

} else {
var statearr_11397_11472 = state_11388__$1;
(statearr_11397_11472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (15))){
var inst_11358 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11399_11483 = state_11388__$1;
(statearr_11399_11483[(2)] = inst_11358);

(statearr_11399_11483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (21))){
var inst_11381 = (state_11388[(2)]);
var state_11388__$1 = (function (){var statearr_11401 = state_11388;
(statearr_11401[(9)] = inst_11381);

return statearr_11401;
})();
var statearr_11402_11495 = state_11388__$1;
(statearr_11402_11495[(2)] = null);

(statearr_11402_11495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (13))){
var inst_11338 = (state_11388[(10)]);
var inst_11340 = cljs.core.chunked_seq_QMARK_.call(null,inst_11338);
var state_11388__$1 = state_11388;
if(inst_11340){
var statearr_11403_11496 = state_11388__$1;
(statearr_11403_11496[(1)] = (16));

} else {
var statearr_11404_11497 = state_11388__$1;
(statearr_11404_11497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (22))){
var inst_11373 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
if(cljs.core.truth_(inst_11373)){
var statearr_11405_11501 = state_11388__$1;
(statearr_11405_11501[(1)] = (23));

} else {
var statearr_11406_11505 = state_11388__$1;
(statearr_11406_11505[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (6))){
var inst_11311 = (state_11388[(8)]);
var inst_11364 = (state_11388[(7)]);
var inst_11366 = (state_11388[(11)]);
var inst_11364__$1 = topic_fn.call(null,inst_11311);
var inst_11365 = cljs.core.deref.call(null,mults);
var inst_11366__$1 = cljs.core.get.call(null,inst_11365,inst_11364__$1);
var state_11388__$1 = (function (){var statearr_11407 = state_11388;
(statearr_11407[(7)] = inst_11364__$1);

(statearr_11407[(11)] = inst_11366__$1);

return statearr_11407;
})();
if(cljs.core.truth_(inst_11366__$1)){
var statearr_11408_11524 = state_11388__$1;
(statearr_11408_11524[(1)] = (19));

} else {
var statearr_11409_11525 = state_11388__$1;
(statearr_11409_11525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (25))){
var inst_11378 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11410_11529 = state_11388__$1;
(statearr_11410_11529[(2)] = inst_11378);

(statearr_11410_11529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (17))){
var inst_11338 = (state_11388[(10)]);
var inst_11347 = cljs.core.first.call(null,inst_11338);
var inst_11348 = cljs.core.async.muxch_STAR_.call(null,inst_11347);
var inst_11349 = cljs.core.async.close_BANG_.call(null,inst_11348);
var inst_11351 = cljs.core.next.call(null,inst_11338);
var inst_11322 = inst_11351;
var inst_11323 = null;
var inst_11324 = (0);
var inst_11325 = (0);
var state_11388__$1 = (function (){var statearr_11412 = state_11388;
(statearr_11412[(12)] = inst_11349);

(statearr_11412[(13)] = inst_11322);

(statearr_11412[(14)] = inst_11323);

(statearr_11412[(15)] = inst_11324);

(statearr_11412[(16)] = inst_11325);

return statearr_11412;
})();
var statearr_11414_11535 = state_11388__$1;
(statearr_11414_11535[(2)] = null);

(statearr_11414_11535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (3))){
var inst_11386 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11388__$1,inst_11386);
} else {
if((state_val_11389 === (12))){
var inst_11360 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11415_11536 = state_11388__$1;
(statearr_11415_11536[(2)] = inst_11360);

(statearr_11415_11536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (2))){
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11388__$1,(4),ch);
} else {
if((state_val_11389 === (23))){
var state_11388__$1 = state_11388;
var statearr_11417_11537 = state_11388__$1;
(statearr_11417_11537[(2)] = null);

(statearr_11417_11537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (19))){
var inst_11366 = (state_11388[(11)]);
var inst_11311 = (state_11388[(8)]);
var inst_11371 = cljs.core.async.muxch_STAR_.call(null,inst_11366);
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11388__$1,(22),inst_11371,inst_11311);
} else {
if((state_val_11389 === (11))){
var inst_11322 = (state_11388[(13)]);
var inst_11338 = (state_11388[(10)]);
var inst_11338__$1 = cljs.core.seq.call(null,inst_11322);
var state_11388__$1 = (function (){var statearr_11420 = state_11388;
(statearr_11420[(10)] = inst_11338__$1);

return statearr_11420;
})();
if(inst_11338__$1){
var statearr_11421_11538 = state_11388__$1;
(statearr_11421_11538[(1)] = (13));

} else {
var statearr_11422_11539 = state_11388__$1;
(statearr_11422_11539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (9))){
var inst_11362 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11426_11540 = state_11388__$1;
(statearr_11426_11540[(2)] = inst_11362);

(statearr_11426_11540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (5))){
var inst_11318 = cljs.core.deref.call(null,mults);
var inst_11319 = cljs.core.vals.call(null,inst_11318);
var inst_11320 = cljs.core.seq.call(null,inst_11319);
var inst_11322 = inst_11320;
var inst_11323 = null;
var inst_11324 = (0);
var inst_11325 = (0);
var state_11388__$1 = (function (){var statearr_11427 = state_11388;
(statearr_11427[(13)] = inst_11322);

(statearr_11427[(14)] = inst_11323);

(statearr_11427[(15)] = inst_11324);

(statearr_11427[(16)] = inst_11325);

return statearr_11427;
})();
var statearr_11428_11543 = state_11388__$1;
(statearr_11428_11543[(2)] = null);

(statearr_11428_11543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (14))){
var state_11388__$1 = state_11388;
var statearr_11432_11544 = state_11388__$1;
(statearr_11432_11544[(2)] = null);

(statearr_11432_11544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (16))){
var inst_11338 = (state_11388[(10)]);
var inst_11342 = cljs.core.chunk_first.call(null,inst_11338);
var inst_11343 = cljs.core.chunk_rest.call(null,inst_11338);
var inst_11344 = cljs.core.count.call(null,inst_11342);
var inst_11322 = inst_11343;
var inst_11323 = inst_11342;
var inst_11324 = inst_11344;
var inst_11325 = (0);
var state_11388__$1 = (function (){var statearr_11433 = state_11388;
(statearr_11433[(13)] = inst_11322);

(statearr_11433[(14)] = inst_11323);

(statearr_11433[(15)] = inst_11324);

(statearr_11433[(16)] = inst_11325);

return statearr_11433;
})();
var statearr_11434_11559 = state_11388__$1;
(statearr_11434_11559[(2)] = null);

(statearr_11434_11559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (10))){
var inst_11323 = (state_11388[(14)]);
var inst_11325 = (state_11388[(16)]);
var inst_11322 = (state_11388[(13)]);
var inst_11324 = (state_11388[(15)]);
var inst_11331 = cljs.core._nth.call(null,inst_11323,inst_11325);
var inst_11332 = cljs.core.async.muxch_STAR_.call(null,inst_11331);
var inst_11333 = cljs.core.async.close_BANG_.call(null,inst_11332);
var inst_11335 = (inst_11325 + (1));
var tmp11429 = inst_11323;
var tmp11430 = inst_11322;
var tmp11431 = inst_11324;
var inst_11322__$1 = tmp11430;
var inst_11323__$1 = tmp11429;
var inst_11324__$1 = tmp11431;
var inst_11325__$1 = inst_11335;
var state_11388__$1 = (function (){var statearr_11436 = state_11388;
(statearr_11436[(17)] = inst_11333);

(statearr_11436[(13)] = inst_11322__$1);

(statearr_11436[(14)] = inst_11323__$1);

(statearr_11436[(15)] = inst_11324__$1);

(statearr_11436[(16)] = inst_11325__$1);

return statearr_11436;
})();
var statearr_11437_11563 = state_11388__$1;
(statearr_11437_11563[(2)] = null);

(statearr_11437_11563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (18))){
var inst_11355 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11438_11564 = state_11388__$1;
(statearr_11438_11564[(2)] = inst_11355);

(statearr_11438_11564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (8))){
var inst_11325 = (state_11388[(16)]);
var inst_11324 = (state_11388[(15)]);
var inst_11328 = (inst_11325 < inst_11324);
var inst_11329 = inst_11328;
var state_11388__$1 = state_11388;
if(cljs.core.truth_(inst_11329)){
var statearr_11441_11565 = state_11388__$1;
(statearr_11441_11565[(1)] = (10));

} else {
var statearr_11442_11566 = state_11388__$1;
(statearr_11442_11566[(1)] = (11));

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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_11445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11445[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_11445[(1)] = (1));

return statearr_11445;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_11388){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_11388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e11447){var ex__9373__auto__ = e11447;
var statearr_11448_11583 = state_11388;
(statearr_11448_11583[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_11388[(4)]))){
var statearr_11449_11588 = state_11388;
(statearr_11449_11588[(1)] = cljs.core.first.call(null,(state_11388[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11590 = state_11388;
state_11388 = G__11590;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_11388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_11388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_11451 = f__9550__auto__.call(null);
(statearr_11451[(6)] = c__9549__auto___11463);

return statearr_11451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
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
var G__11453 = arguments.length;
switch (G__11453) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11458 = arguments.length;
switch (G__11458) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__11469 = arguments.length;
switch (G__11469) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__9549__auto___11669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_11560){
var state_val_11561 = (state_11560[(1)]);
if((state_val_11561 === (7))){
var state_11560__$1 = state_11560;
var statearr_11562_11683 = state_11560__$1;
(statearr_11562_11683[(2)] = null);

(statearr_11562_11683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (1))){
var state_11560__$1 = state_11560;
var statearr_11567_11690 = state_11560__$1;
(statearr_11567_11690[(2)] = null);

(statearr_11567_11690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (4))){
var inst_11485 = (state_11560[(7)]);
var inst_11484 = (state_11560[(8)]);
var inst_11492 = (inst_11485 < inst_11484);
var state_11560__$1 = state_11560;
if(cljs.core.truth_(inst_11492)){
var statearr_11591_11691 = state_11560__$1;
(statearr_11591_11691[(1)] = (6));

} else {
var statearr_11592_11692 = state_11560__$1;
(statearr_11592_11692[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (15))){
var inst_11521 = (state_11560[(9)]);
var inst_11550 = cljs.core.apply.call(null,f,inst_11521);
var state_11560__$1 = state_11560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11560__$1,(17),out,inst_11550);
} else {
if((state_val_11561 === (13))){
var inst_11521 = (state_11560[(9)]);
var inst_11521__$1 = (state_11560[(2)]);
var inst_11522 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11521__$1);
var state_11560__$1 = (function (){var statearr_11593 = state_11560;
(statearr_11593[(9)] = inst_11521__$1);

return statearr_11593;
})();
if(cljs.core.truth_(inst_11522)){
var statearr_11594_11694 = state_11560__$1;
(statearr_11594_11694[(1)] = (14));

} else {
var statearr_11596_11695 = state_11560__$1;
(statearr_11596_11695[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (6))){
var state_11560__$1 = state_11560;
var statearr_11598_11696 = state_11560__$1;
(statearr_11598_11696[(2)] = null);

(statearr_11598_11696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (17))){
var inst_11552 = (state_11560[(2)]);
var state_11560__$1 = (function (){var statearr_11608 = state_11560;
(statearr_11608[(10)] = inst_11552);

return statearr_11608;
})();
var statearr_11610_11698 = state_11560__$1;
(statearr_11610_11698[(2)] = null);

(statearr_11610_11698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (3))){
var inst_11557 = (state_11560[(2)]);
var state_11560__$1 = state_11560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11560__$1,inst_11557);
} else {
if((state_val_11561 === (12))){
var _ = (function (){var statearr_11613 = state_11560;
(statearr_11613[(4)] = cljs.core.rest.call(null,(state_11560[(4)])));

return statearr_11613;
})();
var state_11560__$1 = state_11560;
var ex11604 = (state_11560__$1[(2)]);
var statearr_11614_11701 = state_11560__$1;
(statearr_11614_11701[(5)] = ex11604);


if((ex11604 instanceof Object)){
var statearr_11615_11703 = state_11560__$1;
(statearr_11615_11703[(1)] = (11));

(statearr_11615_11703[(5)] = null);

} else {
throw ex11604;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (2))){
var inst_11482 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11484 = cnt;
var inst_11485 = (0);
var state_11560__$1 = (function (){var statearr_11622 = state_11560;
(statearr_11622[(11)] = inst_11482);

(statearr_11622[(8)] = inst_11484);

(statearr_11622[(7)] = inst_11485);

return statearr_11622;
})();
var statearr_11623_11706 = state_11560__$1;
(statearr_11623_11706[(2)] = null);

(statearr_11623_11706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (11))){
var inst_11498 = (state_11560[(2)]);
var inst_11499 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11560__$1 = (function (){var statearr_11624 = state_11560;
(statearr_11624[(12)] = inst_11498);

return statearr_11624;
})();
var statearr_11625_11708 = state_11560__$1;
(statearr_11625_11708[(2)] = inst_11499);

(statearr_11625_11708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (9))){
var inst_11485 = (state_11560[(7)]);
var _ = (function (){var statearr_11626 = state_11560;
(statearr_11626[(4)] = cljs.core.cons.call(null,(12),(state_11560[(4)])));

return statearr_11626;
})();
var inst_11507 = chs__$1.call(null,inst_11485);
var inst_11508 = done.call(null,inst_11485);
var inst_11509 = cljs.core.async.take_BANG_.call(null,inst_11507,inst_11508);
var ___$1 = (function (){var statearr_11627 = state_11560;
(statearr_11627[(4)] = cljs.core.rest.call(null,(state_11560[(4)])));

return statearr_11627;
})();
var state_11560__$1 = state_11560;
var statearr_11629_11713 = state_11560__$1;
(statearr_11629_11713[(2)] = inst_11509);

(statearr_11629_11713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (5))){
var inst_11519 = (state_11560[(2)]);
var state_11560__$1 = (function (){var statearr_11630 = state_11560;
(statearr_11630[(13)] = inst_11519);

return statearr_11630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11560__$1,(13),dchan);
} else {
if((state_val_11561 === (14))){
var inst_11548 = cljs.core.async.close_BANG_.call(null,out);
var state_11560__$1 = state_11560;
var statearr_11632_11715 = state_11560__$1;
(statearr_11632_11715[(2)] = inst_11548);

(statearr_11632_11715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (16))){
var inst_11555 = (state_11560[(2)]);
var state_11560__$1 = state_11560;
var statearr_11633_11716 = state_11560__$1;
(statearr_11633_11716[(2)] = inst_11555);

(statearr_11633_11716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (10))){
var inst_11485 = (state_11560[(7)]);
var inst_11512 = (state_11560[(2)]);
var inst_11513 = (inst_11485 + (1));
var inst_11485__$1 = inst_11513;
var state_11560__$1 = (function (){var statearr_11634 = state_11560;
(statearr_11634[(14)] = inst_11512);

(statearr_11634[(7)] = inst_11485__$1);

return statearr_11634;
})();
var statearr_11635_11718 = state_11560__$1;
(statearr_11635_11718[(2)] = null);

(statearr_11635_11718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11561 === (8))){
var inst_11517 = (state_11560[(2)]);
var state_11560__$1 = state_11560;
var statearr_11637_11720 = state_11560__$1;
(statearr_11637_11720[(2)] = inst_11517);

(statearr_11637_11720[(1)] = (5));


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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_11638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11638[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_11638[(1)] = (1));

return statearr_11638;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_11560){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_11560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e11641){var ex__9373__auto__ = e11641;
var statearr_11642_11722 = state_11560;
(statearr_11642_11722[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_11560[(4)]))){
var statearr_11643_11723 = state_11560;
(statearr_11643_11723[(1)] = cljs.core.first.call(null,(state_11560[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11725 = state_11560;
state_11560 = G__11725;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_11560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_11560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_11646 = f__9550__auto__.call(null);
(statearr_11646[(6)] = c__9549__auto___11669);

return statearr_11646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
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
var G__11651 = arguments.length;
switch (G__11651) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9549__auto___11741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_11688){
var state_val_11689 = (state_11688[(1)]);
if((state_val_11689 === (7))){
var inst_11664 = (state_11688[(7)]);
var inst_11665 = (state_11688[(8)]);
var inst_11664__$1 = (state_11688[(2)]);
var inst_11665__$1 = cljs.core.nth.call(null,inst_11664__$1,(0),null);
var inst_11667 = cljs.core.nth.call(null,inst_11664__$1,(1),null);
var inst_11668 = (inst_11665__$1 == null);
var state_11688__$1 = (function (){var statearr_11693 = state_11688;
(statearr_11693[(7)] = inst_11664__$1);

(statearr_11693[(8)] = inst_11665__$1);

(statearr_11693[(9)] = inst_11667);

return statearr_11693;
})();
if(cljs.core.truth_(inst_11668)){
var statearr_11697_11745 = state_11688__$1;
(statearr_11697_11745[(1)] = (8));

} else {
var statearr_11699_11746 = state_11688__$1;
(statearr_11699_11746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11689 === (1))){
var inst_11654 = cljs.core.vec.call(null,chs);
var inst_11655 = inst_11654;
var state_11688__$1 = (function (){var statearr_11700 = state_11688;
(statearr_11700[(10)] = inst_11655);

return statearr_11700;
})();
var statearr_11702_11747 = state_11688__$1;
(statearr_11702_11747[(2)] = null);

(statearr_11702_11747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11689 === (4))){
var inst_11655 = (state_11688[(10)]);
var state_11688__$1 = state_11688;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11688__$1,(7),inst_11655);
} else {
if((state_val_11689 === (6))){
var inst_11684 = (state_11688[(2)]);
var state_11688__$1 = state_11688;
var statearr_11705_11748 = state_11688__$1;
(statearr_11705_11748[(2)] = inst_11684);

(statearr_11705_11748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11689 === (3))){
var inst_11686 = (state_11688[(2)]);
var state_11688__$1 = state_11688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11688__$1,inst_11686);
} else {
if((state_val_11689 === (2))){
var inst_11655 = (state_11688[(10)]);
var inst_11657 = cljs.core.count.call(null,inst_11655);
var inst_11658 = (inst_11657 > (0));
var state_11688__$1 = state_11688;
if(cljs.core.truth_(inst_11658)){
var statearr_11710_11751 = state_11688__$1;
(statearr_11710_11751[(1)] = (4));

} else {
var statearr_11711_11754 = state_11688__$1;
(statearr_11711_11754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11689 === (11))){
var inst_11655 = (state_11688[(10)]);
var inst_11676 = (state_11688[(2)]);
var tmp11707 = inst_11655;
var inst_11655__$1 = tmp11707;
var state_11688__$1 = (function (){var statearr_11712 = state_11688;
(statearr_11712[(11)] = inst_11676);

(statearr_11712[(10)] = inst_11655__$1);

return statearr_11712;
})();
var statearr_11714_11775 = state_11688__$1;
(statearr_11714_11775[(2)] = null);

(statearr_11714_11775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11689 === (9))){
var inst_11665 = (state_11688[(8)]);
var state_11688__$1 = state_11688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11688__$1,(11),out,inst_11665);
} else {
if((state_val_11689 === (5))){
var inst_11681 = cljs.core.async.close_BANG_.call(null,out);
var state_11688__$1 = state_11688;
var statearr_11717_11780 = state_11688__$1;
(statearr_11717_11780[(2)] = inst_11681);

(statearr_11717_11780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11689 === (10))){
var inst_11679 = (state_11688[(2)]);
var state_11688__$1 = state_11688;
var statearr_11719_11782 = state_11688__$1;
(statearr_11719_11782[(2)] = inst_11679);

(statearr_11719_11782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11689 === (8))){
var inst_11655 = (state_11688[(10)]);
var inst_11664 = (state_11688[(7)]);
var inst_11665 = (state_11688[(8)]);
var inst_11667 = (state_11688[(9)]);
var inst_11671 = (function (){var cs = inst_11655;
var vec__11660 = inst_11664;
var v = inst_11665;
var c = inst_11667;
return (function (p1__11649_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11649_SHARP_);
});
})();
var inst_11672 = cljs.core.filterv.call(null,inst_11671,inst_11655);
var inst_11655__$1 = inst_11672;
var state_11688__$1 = (function (){var statearr_11724 = state_11688;
(statearr_11724[(10)] = inst_11655__$1);

return statearr_11724;
})();
var statearr_11726_11788 = state_11688__$1;
(statearr_11726_11788[(2)] = null);

(statearr_11726_11788[(1)] = (2));


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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_11728 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11728[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_11728[(1)] = (1));

return statearr_11728;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_11688){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_11688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e11729){var ex__9373__auto__ = e11729;
var statearr_11730_11791 = state_11688;
(statearr_11730_11791[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_11688[(4)]))){
var statearr_11732_11794 = state_11688;
(statearr_11732_11794[(1)] = cljs.core.first.call(null,(state_11688[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11796 = state_11688;
state_11688 = G__11796;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_11688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_11688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_11736 = f__9550__auto__.call(null);
(statearr_11736[(6)] = c__9549__auto___11741);

return statearr_11736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__11743 = arguments.length;
switch (G__11743) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9549__auto___11816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_11777){
var state_val_11779 = (state_11777[(1)]);
if((state_val_11779 === (7))){
var inst_11756 = (state_11777[(7)]);
var inst_11756__$1 = (state_11777[(2)]);
var inst_11757 = (inst_11756__$1 == null);
var inst_11758 = cljs.core.not.call(null,inst_11757);
var state_11777__$1 = (function (){var statearr_11783 = state_11777;
(statearr_11783[(7)] = inst_11756__$1);

return statearr_11783;
})();
if(inst_11758){
var statearr_11784_11819 = state_11777__$1;
(statearr_11784_11819[(1)] = (8));

} else {
var statearr_11785_11820 = state_11777__$1;
(statearr_11785_11820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (1))){
var inst_11749 = (0);
var state_11777__$1 = (function (){var statearr_11786 = state_11777;
(statearr_11786[(8)] = inst_11749);

return statearr_11786;
})();
var statearr_11787_11821 = state_11777__$1;
(statearr_11787_11821[(2)] = null);

(statearr_11787_11821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (4))){
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11777__$1,(7),ch);
} else {
if((state_val_11779 === (6))){
var inst_11770 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11792_11827 = state_11777__$1;
(statearr_11792_11827[(2)] = inst_11770);

(statearr_11792_11827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (3))){
var inst_11772 = (state_11777[(2)]);
var inst_11773 = cljs.core.async.close_BANG_.call(null,out);
var state_11777__$1 = (function (){var statearr_11795 = state_11777;
(statearr_11795[(9)] = inst_11772);

return statearr_11795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11777__$1,inst_11773);
} else {
if((state_val_11779 === (2))){
var inst_11749 = (state_11777[(8)]);
var inst_11752 = (inst_11749 < n);
var state_11777__$1 = state_11777;
if(cljs.core.truth_(inst_11752)){
var statearr_11797_11835 = state_11777__$1;
(statearr_11797_11835[(1)] = (4));

} else {
var statearr_11798_11836 = state_11777__$1;
(statearr_11798_11836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (11))){
var inst_11749 = (state_11777[(8)]);
var inst_11761 = (state_11777[(2)]);
var inst_11763 = (inst_11749 + (1));
var inst_11749__$1 = inst_11763;
var state_11777__$1 = (function (){var statearr_11799 = state_11777;
(statearr_11799[(10)] = inst_11761);

(statearr_11799[(8)] = inst_11749__$1);

return statearr_11799;
})();
var statearr_11800_11845 = state_11777__$1;
(statearr_11800_11845[(2)] = null);

(statearr_11800_11845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (9))){
var state_11777__$1 = state_11777;
var statearr_11801_11846 = state_11777__$1;
(statearr_11801_11846[(2)] = null);

(statearr_11801_11846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (5))){
var state_11777__$1 = state_11777;
var statearr_11802_11848 = state_11777__$1;
(statearr_11802_11848[(2)] = null);

(statearr_11802_11848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (10))){
var inst_11767 = (state_11777[(2)]);
var state_11777__$1 = state_11777;
var statearr_11803_11849 = state_11777__$1;
(statearr_11803_11849[(2)] = inst_11767);

(statearr_11803_11849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11779 === (8))){
var inst_11756 = (state_11777[(7)]);
var state_11777__$1 = state_11777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11777__$1,(11),out,inst_11756);
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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_11804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11804[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_11804[(1)] = (1));

return statearr_11804;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_11777){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_11777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e11805){var ex__9373__auto__ = e11805;
var statearr_11806_11854 = state_11777;
(statearr_11806_11854[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_11777[(4)]))){
var statearr_11808_11855 = state_11777;
(statearr_11808_11855[(1)] = cljs.core.first.call(null,(state_11777[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11856 = state_11777;
state_11777 = G__11856;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_11777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_11777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_11810 = f__9550__auto__.call(null);
(statearr_11810[(6)] = c__9549__auto___11816);

return statearr_11810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11813 = (function (f,ch,meta11814){
this.f = f;
this.ch = ch;
this.meta11814 = meta11814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11815,meta11814__$1){
var self__ = this;
var _11815__$1 = this;
return (new cljs.core.async.t_cljs$core$async11813(self__.f,self__.ch,meta11814__$1));
}));

(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11815){
var self__ = this;
var _11815__$1 = this;
return self__.meta11814;
}));

(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11837 = (function (f,ch,meta11814,_,fn1,meta11838){
this.f = f;
this.ch = ch;
this.meta11814 = meta11814;
this._ = _;
this.fn1 = fn1;
this.meta11838 = meta11838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11839,meta11838__$1){
var self__ = this;
var _11839__$1 = this;
return (new cljs.core.async.t_cljs$core$async11837(self__.f,self__.ch,self__.meta11814,self__._,self__.fn1,meta11838__$1));
}));

(cljs.core.async.t_cljs$core$async11837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11839){
var self__ = this;
var _11839__$1 = this;
return self__.meta11838;
}));

(cljs.core.async.t_cljs$core$async11837.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async11837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__11811_SHARP_){
return f1.call(null,(((p1__11811_SHARP_ == null))?null:self__.f.call(null,p1__11811_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async11837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11814","meta11814",1803235698,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11813","cljs.core.async/t_cljs$core$async11813",546504629,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11838","meta11838",622676112,null)], null);
}));

(cljs.core.async.t_cljs$core$async11837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11837");

(cljs.core.async.t_cljs$core$async11837.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11837.
 */
cljs.core.async.__GT_t_cljs$core$async11837 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11837(f__$1,ch__$1,meta11814__$1,___$2,fn1__$1,meta11838){
return (new cljs.core.async.t_cljs$core$async11837(f__$1,ch__$1,meta11814__$1,___$2,fn1__$1,meta11838));
});

}

return (new cljs.core.async.t_cljs$core$async11837(self__.f,self__.ch,self__.meta11814,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async11813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11814","meta11814",1803235698,null)], null);
}));

(cljs.core.async.t_cljs$core$async11813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11813");

(cljs.core.async.t_cljs$core$async11813.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11813.
 */
cljs.core.async.__GT_t_cljs$core$async11813 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11813(f__$1,ch__$1,meta11814){
return (new cljs.core.async.t_cljs$core$async11813(f__$1,ch__$1,meta11814));
});

}

return (new cljs.core.async.t_cljs$core$async11813(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11864 = (function (f,ch,meta11865){
this.f = f;
this.ch = ch;
this.meta11865 = meta11865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11866,meta11865__$1){
var self__ = this;
var _11866__$1 = this;
return (new cljs.core.async.t_cljs$core$async11864(self__.f,self__.ch,meta11865__$1));
}));

(cljs.core.async.t_cljs$core$async11864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11866){
var self__ = this;
var _11866__$1 = this;
return self__.meta11865;
}));

(cljs.core.async.t_cljs$core$async11864.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11864.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11864.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async11864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11865","meta11865",1982858215,null)], null);
}));

(cljs.core.async.t_cljs$core$async11864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11864");

(cljs.core.async.t_cljs$core$async11864.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11864.
 */
cljs.core.async.__GT_t_cljs$core$async11864 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11864(f__$1,ch__$1,meta11865){
return (new cljs.core.async.t_cljs$core$async11864(f__$1,ch__$1,meta11865));
});

}

return (new cljs.core.async.t_cljs$core$async11864(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11869 = (function (p,ch,meta11870){
this.p = p;
this.ch = ch;
this.meta11870 = meta11870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11871,meta11870__$1){
var self__ = this;
var _11871__$1 = this;
return (new cljs.core.async.t_cljs$core$async11869(self__.p,self__.ch,meta11870__$1));
}));

(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11871){
var self__ = this;
var _11871__$1 = this;
return self__.meta11870;
}));

(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async11869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11870","meta11870",1915924477,null)], null);
}));

(cljs.core.async.t_cljs$core$async11869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11869");

(cljs.core.async.t_cljs$core$async11869.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"cljs.core.async/t_cljs$core$async11869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11869.
 */
cljs.core.async.__GT_t_cljs$core$async11869 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11869(p__$1,ch__$1,meta11870){
return (new cljs.core.async.t_cljs$core$async11869(p__$1,ch__$1,meta11870));
});

}

return (new cljs.core.async.t_cljs$core$async11869(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__11885 = arguments.length;
switch (G__11885) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9549__auto___11996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_11911){
var state_val_11912 = (state_11911[(1)]);
if((state_val_11912 === (7))){
var inst_11907 = (state_11911[(2)]);
var state_11911__$1 = state_11911;
var statearr_11913_12014 = state_11911__$1;
(statearr_11913_12014[(2)] = inst_11907);

(statearr_11913_12014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11912 === (1))){
var state_11911__$1 = state_11911;
var statearr_11915_12040 = state_11911__$1;
(statearr_11915_12040[(2)] = null);

(statearr_11915_12040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11912 === (4))){
var inst_11892 = (state_11911[(7)]);
var inst_11892__$1 = (state_11911[(2)]);
var inst_11893 = (inst_11892__$1 == null);
var state_11911__$1 = (function (){var statearr_11916 = state_11911;
(statearr_11916[(7)] = inst_11892__$1);

return statearr_11916;
})();
if(cljs.core.truth_(inst_11893)){
var statearr_11917_12043 = state_11911__$1;
(statearr_11917_12043[(1)] = (5));

} else {
var statearr_11918_12044 = state_11911__$1;
(statearr_11918_12044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11912 === (6))){
var inst_11892 = (state_11911[(7)]);
var inst_11898 = p.call(null,inst_11892);
var state_11911__$1 = state_11911;
if(cljs.core.truth_(inst_11898)){
var statearr_11920_12047 = state_11911__$1;
(statearr_11920_12047[(1)] = (8));

} else {
var statearr_11921_12048 = state_11911__$1;
(statearr_11921_12048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11912 === (3))){
var inst_11909 = (state_11911[(2)]);
var state_11911__$1 = state_11911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11911__$1,inst_11909);
} else {
if((state_val_11912 === (2))){
var state_11911__$1 = state_11911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11911__$1,(4),ch);
} else {
if((state_val_11912 === (11))){
var inst_11901 = (state_11911[(2)]);
var state_11911__$1 = state_11911;
var statearr_11926_12050 = state_11911__$1;
(statearr_11926_12050[(2)] = inst_11901);

(statearr_11926_12050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11912 === (9))){
var state_11911__$1 = state_11911;
var statearr_11928_12053 = state_11911__$1;
(statearr_11928_12053[(2)] = null);

(statearr_11928_12053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11912 === (5))){
var inst_11895 = cljs.core.async.close_BANG_.call(null,out);
var state_11911__$1 = state_11911;
var statearr_11929_12055 = state_11911__$1;
(statearr_11929_12055[(2)] = inst_11895);

(statearr_11929_12055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11912 === (10))){
var inst_11904 = (state_11911[(2)]);
var state_11911__$1 = (function (){var statearr_11930 = state_11911;
(statearr_11930[(8)] = inst_11904);

return statearr_11930;
})();
var statearr_11931_12057 = state_11911__$1;
(statearr_11931_12057[(2)] = null);

(statearr_11931_12057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11912 === (8))){
var inst_11892 = (state_11911[(7)]);
var state_11911__$1 = state_11911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11911__$1,(11),out,inst_11892);
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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_11935 = [null,null,null,null,null,null,null,null,null];
(statearr_11935[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_11935[(1)] = (1));

return statearr_11935;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_11911){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_11911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e11937){var ex__9373__auto__ = e11937;
var statearr_11938_12064 = state_11911;
(statearr_11938_12064[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_11911[(4)]))){
var statearr_11939_12066 = state_11911;
(statearr_11939_12066[(1)] = cljs.core.first.call(null,(state_11911[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12067 = state_11911;
state_11911 = G__12067;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_11911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_11911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_11956 = f__9550__auto__.call(null);
(statearr_11956[(6)] = c__9549__auto___11996);

return statearr_11956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11964 = arguments.length;
switch (G__11964) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_12038){
var state_val_12039 = (state_12038[(1)]);
if((state_val_12039 === (7))){
var inst_12033 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12046_12119 = state_12038__$1;
(statearr_12046_12119[(2)] = inst_12033);

(statearr_12046_12119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (20))){
var inst_12000 = (state_12038[(7)]);
var inst_12013 = (state_12038[(2)]);
var inst_12015 = cljs.core.next.call(null,inst_12000);
var inst_11983 = inst_12015;
var inst_11984 = null;
var inst_11985 = (0);
var inst_11986 = (0);
var state_12038__$1 = (function (){var statearr_12049 = state_12038;
(statearr_12049[(8)] = inst_12013);

(statearr_12049[(9)] = inst_11983);

(statearr_12049[(10)] = inst_11984);

(statearr_12049[(11)] = inst_11985);

(statearr_12049[(12)] = inst_11986);

return statearr_12049;
})();
var statearr_12051_12128 = state_12038__$1;
(statearr_12051_12128[(2)] = null);

(statearr_12051_12128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (1))){
var state_12038__$1 = state_12038;
var statearr_12054_12129 = state_12038__$1;
(statearr_12054_12129[(2)] = null);

(statearr_12054_12129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (4))){
var inst_11972 = (state_12038[(13)]);
var inst_11972__$1 = (state_12038[(2)]);
var inst_11973 = (inst_11972__$1 == null);
var state_12038__$1 = (function (){var statearr_12056 = state_12038;
(statearr_12056[(13)] = inst_11972__$1);

return statearr_12056;
})();
if(cljs.core.truth_(inst_11973)){
var statearr_12058_12133 = state_12038__$1;
(statearr_12058_12133[(1)] = (5));

} else {
var statearr_12059_12135 = state_12038__$1;
(statearr_12059_12135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (15))){
var state_12038__$1 = state_12038;
var statearr_12063_12136 = state_12038__$1;
(statearr_12063_12136[(2)] = null);

(statearr_12063_12136[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (21))){
var state_12038__$1 = state_12038;
var statearr_12065_12138 = state_12038__$1;
(statearr_12065_12138[(2)] = null);

(statearr_12065_12138[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (13))){
var inst_11986 = (state_12038[(12)]);
var inst_11983 = (state_12038[(9)]);
var inst_11984 = (state_12038[(10)]);
var inst_11985 = (state_12038[(11)]);
var inst_11994 = (state_12038[(2)]);
var inst_11997 = (inst_11986 + (1));
var tmp12060 = inst_11985;
var tmp12061 = inst_11984;
var tmp12062 = inst_11983;
var inst_11983__$1 = tmp12062;
var inst_11984__$1 = tmp12061;
var inst_11985__$1 = tmp12060;
var inst_11986__$1 = inst_11997;
var state_12038__$1 = (function (){var statearr_12068 = state_12038;
(statearr_12068[(14)] = inst_11994);

(statearr_12068[(9)] = inst_11983__$1);

(statearr_12068[(10)] = inst_11984__$1);

(statearr_12068[(11)] = inst_11985__$1);

(statearr_12068[(12)] = inst_11986__$1);

return statearr_12068;
})();
var statearr_12069_12140 = state_12038__$1;
(statearr_12069_12140[(2)] = null);

(statearr_12069_12140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (22))){
var state_12038__$1 = state_12038;
var statearr_12070_12142 = state_12038__$1;
(statearr_12070_12142[(2)] = null);

(statearr_12070_12142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (6))){
var inst_11972 = (state_12038[(13)]);
var inst_11981 = f.call(null,inst_11972);
var inst_11982 = cljs.core.seq.call(null,inst_11981);
var inst_11983 = inst_11982;
var inst_11984 = null;
var inst_11985 = (0);
var inst_11986 = (0);
var state_12038__$1 = (function (){var statearr_12072 = state_12038;
(statearr_12072[(9)] = inst_11983);

(statearr_12072[(10)] = inst_11984);

(statearr_12072[(11)] = inst_11985);

(statearr_12072[(12)] = inst_11986);

return statearr_12072;
})();
var statearr_12075_12144 = state_12038__$1;
(statearr_12075_12144[(2)] = null);

(statearr_12075_12144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (17))){
var inst_12000 = (state_12038[(7)]);
var inst_12006 = cljs.core.chunk_first.call(null,inst_12000);
var inst_12007 = cljs.core.chunk_rest.call(null,inst_12000);
var inst_12008 = cljs.core.count.call(null,inst_12006);
var inst_11983 = inst_12007;
var inst_11984 = inst_12006;
var inst_11985 = inst_12008;
var inst_11986 = (0);
var state_12038__$1 = (function (){var statearr_12076 = state_12038;
(statearr_12076[(9)] = inst_11983);

(statearr_12076[(10)] = inst_11984);

(statearr_12076[(11)] = inst_11985);

(statearr_12076[(12)] = inst_11986);

return statearr_12076;
})();
var statearr_12077_12146 = state_12038__$1;
(statearr_12077_12146[(2)] = null);

(statearr_12077_12146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (3))){
var inst_12035 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12038__$1,inst_12035);
} else {
if((state_val_12039 === (12))){
var inst_12023 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12079_12147 = state_12038__$1;
(statearr_12079_12147[(2)] = inst_12023);

(statearr_12079_12147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (2))){
var state_12038__$1 = state_12038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12038__$1,(4),in$);
} else {
if((state_val_12039 === (23))){
var inst_12031 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12082_12149 = state_12038__$1;
(statearr_12082_12149[(2)] = inst_12031);

(statearr_12082_12149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (19))){
var inst_12018 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12085_12155 = state_12038__$1;
(statearr_12085_12155[(2)] = inst_12018);

(statearr_12085_12155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (11))){
var inst_11983 = (state_12038[(9)]);
var inst_12000 = (state_12038[(7)]);
var inst_12000__$1 = cljs.core.seq.call(null,inst_11983);
var state_12038__$1 = (function (){var statearr_12086 = state_12038;
(statearr_12086[(7)] = inst_12000__$1);

return statearr_12086;
})();
if(inst_12000__$1){
var statearr_12087_12176 = state_12038__$1;
(statearr_12087_12176[(1)] = (14));

} else {
var statearr_12088_12177 = state_12038__$1;
(statearr_12088_12177[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (9))){
var inst_12025 = (state_12038[(2)]);
var inst_12026 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12038__$1 = (function (){var statearr_12089 = state_12038;
(statearr_12089[(15)] = inst_12025);

return statearr_12089;
})();
if(cljs.core.truth_(inst_12026)){
var statearr_12090_12179 = state_12038__$1;
(statearr_12090_12179[(1)] = (21));

} else {
var statearr_12092_12180 = state_12038__$1;
(statearr_12092_12180[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (5))){
var inst_11975 = cljs.core.async.close_BANG_.call(null,out);
var state_12038__$1 = state_12038;
var statearr_12093_12181 = state_12038__$1;
(statearr_12093_12181[(2)] = inst_11975);

(statearr_12093_12181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (14))){
var inst_12000 = (state_12038[(7)]);
var inst_12003 = cljs.core.chunked_seq_QMARK_.call(null,inst_12000);
var state_12038__$1 = state_12038;
if(inst_12003){
var statearr_12099_12182 = state_12038__$1;
(statearr_12099_12182[(1)] = (17));

} else {
var statearr_12100_12185 = state_12038__$1;
(statearr_12100_12185[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (16))){
var inst_12021 = (state_12038[(2)]);
var state_12038__$1 = state_12038;
var statearr_12101_12188 = state_12038__$1;
(statearr_12101_12188[(2)] = inst_12021);

(statearr_12101_12188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12039 === (10))){
var inst_11984 = (state_12038[(10)]);
var inst_11986 = (state_12038[(12)]);
var inst_11991 = cljs.core._nth.call(null,inst_11984,inst_11986);
var state_12038__$1 = state_12038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12038__$1,(13),out,inst_11991);
} else {
if((state_val_12039 === (18))){
var inst_12000 = (state_12038[(7)]);
var inst_12011 = cljs.core.first.call(null,inst_12000);
var state_12038__$1 = state_12038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12038__$1,(20),out,inst_12011);
} else {
if((state_val_12039 === (8))){
var inst_11986 = (state_12038[(12)]);
var inst_11985 = (state_12038[(11)]);
var inst_11988 = (inst_11986 < inst_11985);
var inst_11989 = inst_11988;
var state_12038__$1 = state_12038;
if(cljs.core.truth_(inst_11989)){
var statearr_12104_12193 = state_12038__$1;
(statearr_12104_12193[(1)] = (10));

} else {
var statearr_12107_12194 = state_12038__$1;
(statearr_12107_12194[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__9370__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9370__auto____0 = (function (){
var statearr_12112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12112[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9370__auto__);

(statearr_12112[(1)] = (1));

return statearr_12112;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9370__auto____1 = (function (state_12038){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_12038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e12113){var ex__9373__auto__ = e12113;
var statearr_12114_12197 = state_12038;
(statearr_12114_12197[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_12038[(4)]))){
var statearr_12115_12203 = state_12038;
(statearr_12115_12203[(1)] = cljs.core.first.call(null,(state_12038[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12208 = state_12038;
state_12038 = G__12208;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9370__auto__ = function(state_12038){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9370__auto____1.call(this,state_12038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9370__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9370__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_12116 = f__9550__auto__.call(null);
(statearr_12116[(6)] = c__9549__auto__);

return statearr_12116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));

return c__9549__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12118 = arguments.length;
switch (G__12118) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12126 = arguments.length;
switch (G__12126) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12143 = arguments.length;
switch (G__12143) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9549__auto___12223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_12175){
var state_val_12178 = (state_12175[(1)]);
if((state_val_12178 === (7))){
var inst_12170 = (state_12175[(2)]);
var state_12175__$1 = state_12175;
var statearr_12184_12224 = state_12175__$1;
(statearr_12184_12224[(2)] = inst_12170);

(statearr_12184_12224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12178 === (1))){
var inst_12150 = null;
var state_12175__$1 = (function (){var statearr_12187 = state_12175;
(statearr_12187[(7)] = inst_12150);

return statearr_12187;
})();
var statearr_12189_12225 = state_12175__$1;
(statearr_12189_12225[(2)] = null);

(statearr_12189_12225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12178 === (4))){
var inst_12154 = (state_12175[(8)]);
var inst_12154__$1 = (state_12175[(2)]);
var inst_12156 = (inst_12154__$1 == null);
var inst_12157 = cljs.core.not.call(null,inst_12156);
var state_12175__$1 = (function (){var statearr_12191 = state_12175;
(statearr_12191[(8)] = inst_12154__$1);

return statearr_12191;
})();
if(inst_12157){
var statearr_12192_12242 = state_12175__$1;
(statearr_12192_12242[(1)] = (5));

} else {
var statearr_12195_12250 = state_12175__$1;
(statearr_12195_12250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12178 === (6))){
var state_12175__$1 = state_12175;
var statearr_12196_12262 = state_12175__$1;
(statearr_12196_12262[(2)] = null);

(statearr_12196_12262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12178 === (3))){
var inst_12172 = (state_12175[(2)]);
var inst_12173 = cljs.core.async.close_BANG_.call(null,out);
var state_12175__$1 = (function (){var statearr_12198 = state_12175;
(statearr_12198[(9)] = inst_12172);

return statearr_12198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12175__$1,inst_12173);
} else {
if((state_val_12178 === (2))){
var state_12175__$1 = state_12175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12175__$1,(4),ch);
} else {
if((state_val_12178 === (11))){
var inst_12154 = (state_12175[(8)]);
var inst_12164 = (state_12175[(2)]);
var inst_12150 = inst_12154;
var state_12175__$1 = (function (){var statearr_12202 = state_12175;
(statearr_12202[(10)] = inst_12164);

(statearr_12202[(7)] = inst_12150);

return statearr_12202;
})();
var statearr_12204_12268 = state_12175__$1;
(statearr_12204_12268[(2)] = null);

(statearr_12204_12268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12178 === (9))){
var inst_12154 = (state_12175[(8)]);
var state_12175__$1 = state_12175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12175__$1,(11),out,inst_12154);
} else {
if((state_val_12178 === (5))){
var inst_12154 = (state_12175[(8)]);
var inst_12150 = (state_12175[(7)]);
var inst_12159 = cljs.core._EQ_.call(null,inst_12154,inst_12150);
var state_12175__$1 = state_12175;
if(inst_12159){
var statearr_12206_12272 = state_12175__$1;
(statearr_12206_12272[(1)] = (8));

} else {
var statearr_12207_12273 = state_12175__$1;
(statearr_12207_12273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12178 === (10))){
var inst_12167 = (state_12175[(2)]);
var state_12175__$1 = state_12175;
var statearr_12209_12274 = state_12175__$1;
(statearr_12209_12274[(2)] = inst_12167);

(statearr_12209_12274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12178 === (8))){
var inst_12150 = (state_12175[(7)]);
var tmp12205 = inst_12150;
var inst_12150__$1 = tmp12205;
var state_12175__$1 = (function (){var statearr_12210 = state_12175;
(statearr_12210[(7)] = inst_12150__$1);

return statearr_12210;
})();
var statearr_12211_12278 = state_12175__$1;
(statearr_12211_12278[(2)] = null);

(statearr_12211_12278[(1)] = (2));


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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_12214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12214[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_12214[(1)] = (1));

return statearr_12214;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_12175){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_12175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e12215){var ex__9373__auto__ = e12215;
var statearr_12216_12281 = state_12175;
(statearr_12216_12281[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_12175[(4)]))){
var statearr_12217_12283 = state_12175;
(statearr_12217_12283[(1)] = cljs.core.first.call(null,(state_12175[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12286 = state_12175;
state_12175 = G__12286;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_12175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_12175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_12219 = f__9550__auto__.call(null);
(statearr_12219[(6)] = c__9549__auto___12223);

return statearr_12219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12222 = arguments.length;
switch (G__12222) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9549__auto___12318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_12266){
var state_val_12267 = (state_12266[(1)]);
if((state_val_12267 === (7))){
var inst_12261 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
var statearr_12269_12323 = state_12266__$1;
(statearr_12269_12323[(2)] = inst_12261);

(statearr_12269_12323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (1))){
var inst_12226 = (new Array(n));
var inst_12227 = inst_12226;
var inst_12228 = (0);
var state_12266__$1 = (function (){var statearr_12279 = state_12266;
(statearr_12279[(7)] = inst_12227);

(statearr_12279[(8)] = inst_12228);

return statearr_12279;
})();
var statearr_12280_12325 = state_12266__$1;
(statearr_12280_12325[(2)] = null);

(statearr_12280_12325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (4))){
var inst_12231 = (state_12266[(9)]);
var inst_12231__$1 = (state_12266[(2)]);
var inst_12232 = (inst_12231__$1 == null);
var inst_12233 = cljs.core.not.call(null,inst_12232);
var state_12266__$1 = (function (){var statearr_12285 = state_12266;
(statearr_12285[(9)] = inst_12231__$1);

return statearr_12285;
})();
if(inst_12233){
var statearr_12287_12335 = state_12266__$1;
(statearr_12287_12335[(1)] = (5));

} else {
var statearr_12288_12337 = state_12266__$1;
(statearr_12288_12337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (15))){
var inst_12255 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
var statearr_12289_12345 = state_12266__$1;
(statearr_12289_12345[(2)] = inst_12255);

(statearr_12289_12345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (13))){
var state_12266__$1 = state_12266;
var statearr_12290_12380 = state_12266__$1;
(statearr_12290_12380[(2)] = null);

(statearr_12290_12380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (6))){
var inst_12228 = (state_12266[(8)]);
var inst_12251 = (inst_12228 > (0));
var state_12266__$1 = state_12266;
if(cljs.core.truth_(inst_12251)){
var statearr_12291_12385 = state_12266__$1;
(statearr_12291_12385[(1)] = (12));

} else {
var statearr_12292_12387 = state_12266__$1;
(statearr_12292_12387[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (3))){
var inst_12264 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12266__$1,inst_12264);
} else {
if((state_val_12267 === (12))){
var inst_12227 = (state_12266[(7)]);
var inst_12253 = cljs.core.vec.call(null,inst_12227);
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12266__$1,(15),out,inst_12253);
} else {
if((state_val_12267 === (2))){
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12266__$1,(4),ch);
} else {
if((state_val_12267 === (11))){
var inst_12244 = (state_12266[(2)]);
var inst_12245 = (new Array(n));
var inst_12227 = inst_12245;
var inst_12228 = (0);
var state_12266__$1 = (function (){var statearr_12294 = state_12266;
(statearr_12294[(10)] = inst_12244);

(statearr_12294[(7)] = inst_12227);

(statearr_12294[(8)] = inst_12228);

return statearr_12294;
})();
var statearr_12297_12399 = state_12266__$1;
(statearr_12297_12399[(2)] = null);

(statearr_12297_12399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (9))){
var inst_12227 = (state_12266[(7)]);
var inst_12241 = cljs.core.vec.call(null,inst_12227);
var state_12266__$1 = state_12266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12266__$1,(11),out,inst_12241);
} else {
if((state_val_12267 === (5))){
var inst_12227 = (state_12266[(7)]);
var inst_12228 = (state_12266[(8)]);
var inst_12231 = (state_12266[(9)]);
var inst_12236 = (state_12266[(11)]);
var inst_12235 = (inst_12227[inst_12228] = inst_12231);
var inst_12236__$1 = (inst_12228 + (1));
var inst_12237 = (inst_12236__$1 < n);
var state_12266__$1 = (function (){var statearr_12299 = state_12266;
(statearr_12299[(12)] = inst_12235);

(statearr_12299[(11)] = inst_12236__$1);

return statearr_12299;
})();
if(cljs.core.truth_(inst_12237)){
var statearr_12300_12401 = state_12266__$1;
(statearr_12300_12401[(1)] = (8));

} else {
var statearr_12301_12403 = state_12266__$1;
(statearr_12301_12403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (14))){
var inst_12258 = (state_12266[(2)]);
var inst_12259 = cljs.core.async.close_BANG_.call(null,out);
var state_12266__$1 = (function (){var statearr_12303 = state_12266;
(statearr_12303[(13)] = inst_12258);

return statearr_12303;
})();
var statearr_12304_12406 = state_12266__$1;
(statearr_12304_12406[(2)] = inst_12259);

(statearr_12304_12406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (10))){
var inst_12248 = (state_12266[(2)]);
var state_12266__$1 = state_12266;
var statearr_12305_12409 = state_12266__$1;
(statearr_12305_12409[(2)] = inst_12248);

(statearr_12305_12409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12267 === (8))){
var inst_12227 = (state_12266[(7)]);
var inst_12236 = (state_12266[(11)]);
var tmp12302 = inst_12227;
var inst_12227__$1 = tmp12302;
var inst_12228 = inst_12236;
var state_12266__$1 = (function (){var statearr_12306 = state_12266;
(statearr_12306[(7)] = inst_12227__$1);

(statearr_12306[(8)] = inst_12228);

return statearr_12306;
})();
var statearr_12307_12413 = state_12266__$1;
(statearr_12307_12413[(2)] = null);

(statearr_12307_12413[(1)] = (2));


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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_12308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12308[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_12308[(1)] = (1));

return statearr_12308;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_12266){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_12266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e12310){var ex__9373__auto__ = e12310;
var statearr_12311_12415 = state_12266;
(statearr_12311_12415[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_12266[(4)]))){
var statearr_12312_12417 = state_12266;
(statearr_12312_12417[(1)] = cljs.core.first.call(null,(state_12266[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12420 = state_12266;
state_12266 = G__12420;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_12266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_12266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_12313 = f__9550__auto__.call(null);
(statearr_12313[(6)] = c__9549__auto___12318);

return statearr_12313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12319 = arguments.length;
switch (G__12319) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9549__auto___12456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_12373){
var state_val_12374 = (state_12373[(1)]);
if((state_val_12374 === (7))){
var inst_12369 = (state_12373[(2)]);
var state_12373__$1 = state_12373;
var statearr_12375_12457 = state_12373__$1;
(statearr_12375_12457[(2)] = inst_12369);

(statearr_12375_12457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (1))){
var inst_12326 = [];
var inst_12327 = inst_12326;
var inst_12328 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12373__$1 = (function (){var statearr_12377 = state_12373;
(statearr_12377[(7)] = inst_12327);

(statearr_12377[(8)] = inst_12328);

return statearr_12377;
})();
var statearr_12378_12459 = state_12373__$1;
(statearr_12378_12459[(2)] = null);

(statearr_12378_12459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (4))){
var inst_12331 = (state_12373[(9)]);
var inst_12331__$1 = (state_12373[(2)]);
var inst_12332 = (inst_12331__$1 == null);
var inst_12333 = cljs.core.not.call(null,inst_12332);
var state_12373__$1 = (function (){var statearr_12381 = state_12373;
(statearr_12381[(9)] = inst_12331__$1);

return statearr_12381;
})();
if(inst_12333){
var statearr_12382_12463 = state_12373__$1;
(statearr_12382_12463[(1)] = (5));

} else {
var statearr_12383_12465 = state_12373__$1;
(statearr_12383_12465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (15))){
var inst_12327 = (state_12373[(7)]);
var inst_12361 = cljs.core.vec.call(null,inst_12327);
var state_12373__$1 = state_12373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12373__$1,(18),out,inst_12361);
} else {
if((state_val_12374 === (13))){
var inst_12356 = (state_12373[(2)]);
var state_12373__$1 = state_12373;
var statearr_12384_12468 = state_12373__$1;
(statearr_12384_12468[(2)] = inst_12356);

(statearr_12384_12468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (6))){
var inst_12327 = (state_12373[(7)]);
var inst_12358 = inst_12327.length;
var inst_12359 = (inst_12358 > (0));
var state_12373__$1 = state_12373;
if(cljs.core.truth_(inst_12359)){
var statearr_12389_12471 = state_12373__$1;
(statearr_12389_12471[(1)] = (15));

} else {
var statearr_12390_12472 = state_12373__$1;
(statearr_12390_12472[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (17))){
var inst_12366 = (state_12373[(2)]);
var inst_12367 = cljs.core.async.close_BANG_.call(null,out);
var state_12373__$1 = (function (){var statearr_12393 = state_12373;
(statearr_12393[(10)] = inst_12366);

return statearr_12393;
})();
var statearr_12394_12473 = state_12373__$1;
(statearr_12394_12473[(2)] = inst_12367);

(statearr_12394_12473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (3))){
var inst_12371 = (state_12373[(2)]);
var state_12373__$1 = state_12373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12373__$1,inst_12371);
} else {
if((state_val_12374 === (12))){
var inst_12327 = (state_12373[(7)]);
var inst_12349 = cljs.core.vec.call(null,inst_12327);
var state_12373__$1 = state_12373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12373__$1,(14),out,inst_12349);
} else {
if((state_val_12374 === (2))){
var state_12373__$1 = state_12373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12373__$1,(4),ch);
} else {
if((state_val_12374 === (11))){
var inst_12327 = (state_12373[(7)]);
var inst_12331 = (state_12373[(9)]);
var inst_12336 = (state_12373[(11)]);
var inst_12346 = inst_12327.push(inst_12331);
var tmp12397 = inst_12327;
var inst_12327__$1 = tmp12397;
var inst_12328 = inst_12336;
var state_12373__$1 = (function (){var statearr_12400 = state_12373;
(statearr_12400[(12)] = inst_12346);

(statearr_12400[(7)] = inst_12327__$1);

(statearr_12400[(8)] = inst_12328);

return statearr_12400;
})();
var statearr_12402_12476 = state_12373__$1;
(statearr_12402_12476[(2)] = null);

(statearr_12402_12476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (9))){
var inst_12328 = (state_12373[(8)]);
var inst_12341 = cljs.core.keyword_identical_QMARK_.call(null,inst_12328,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_12373__$1 = state_12373;
var statearr_12411_12482 = state_12373__$1;
(statearr_12411_12482[(2)] = inst_12341);

(statearr_12411_12482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (5))){
var inst_12331 = (state_12373[(9)]);
var inst_12336 = (state_12373[(11)]);
var inst_12328 = (state_12373[(8)]);
var inst_12338 = (state_12373[(13)]);
var inst_12336__$1 = f.call(null,inst_12331);
var inst_12338__$1 = cljs.core._EQ_.call(null,inst_12336__$1,inst_12328);
var state_12373__$1 = (function (){var statearr_12414 = state_12373;
(statearr_12414[(11)] = inst_12336__$1);

(statearr_12414[(13)] = inst_12338__$1);

return statearr_12414;
})();
if(inst_12338__$1){
var statearr_12416_12487 = state_12373__$1;
(statearr_12416_12487[(1)] = (8));

} else {
var statearr_12418_12488 = state_12373__$1;
(statearr_12418_12488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (14))){
var inst_12331 = (state_12373[(9)]);
var inst_12336 = (state_12373[(11)]);
var inst_12351 = (state_12373[(2)]);
var inst_12352 = [];
var inst_12353 = inst_12352.push(inst_12331);
var inst_12327 = inst_12352;
var inst_12328 = inst_12336;
var state_12373__$1 = (function (){var statearr_12424 = state_12373;
(statearr_12424[(14)] = inst_12351);

(statearr_12424[(15)] = inst_12353);

(statearr_12424[(7)] = inst_12327);

(statearr_12424[(8)] = inst_12328);

return statearr_12424;
})();
var statearr_12425_12490 = state_12373__$1;
(statearr_12425_12490[(2)] = null);

(statearr_12425_12490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (16))){
var state_12373__$1 = state_12373;
var statearr_12428_12492 = state_12373__$1;
(statearr_12428_12492[(2)] = null);

(statearr_12428_12492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (10))){
var inst_12343 = (state_12373[(2)]);
var state_12373__$1 = state_12373;
if(cljs.core.truth_(inst_12343)){
var statearr_12430_12493 = state_12373__$1;
(statearr_12430_12493[(1)] = (11));

} else {
var statearr_12432_12494 = state_12373__$1;
(statearr_12432_12494[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (18))){
var inst_12363 = (state_12373[(2)]);
var state_12373__$1 = state_12373;
var statearr_12433_12495 = state_12373__$1;
(statearr_12433_12495[(2)] = inst_12363);

(statearr_12433_12495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12374 === (8))){
var inst_12338 = (state_12373[(13)]);
var state_12373__$1 = state_12373;
var statearr_12438_12496 = state_12373__$1;
(statearr_12438_12496[(2)] = inst_12338);

(statearr_12438_12496[(1)] = (10));


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
var cljs$core$async$state_machine__9370__auto__ = null;
var cljs$core$async$state_machine__9370__auto____0 = (function (){
var statearr_12439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12439[(0)] = cljs$core$async$state_machine__9370__auto__);

(statearr_12439[(1)] = (1));

return statearr_12439;
});
var cljs$core$async$state_machine__9370__auto____1 = (function (state_12373){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_12373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e12440){var ex__9373__auto__ = e12440;
var statearr_12442_12502 = state_12373;
(statearr_12442_12502[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_12373[(4)]))){
var statearr_12443_12503 = state_12373;
(statearr_12443_12503[(1)] = cljs.core.first.call(null,(state_12373[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12504 = state_12373;
state_12373 = G__12504;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
cljs$core$async$state_machine__9370__auto__ = function(state_12373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9370__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9370__auto____1.call(this,state_12373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9370__auto____0;
cljs$core$async$state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9370__auto____1;
return cljs$core$async$state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_12448 = f__9550__auto__.call(null);
(statearr_12448[(6)] = c__9549__auto___12456);

return statearr_12448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
