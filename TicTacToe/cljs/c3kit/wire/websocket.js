// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('c3kit.wire.websocket');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.api');
goog.require('c3kit.wire.websocketc');
goog.require('reagent.core');
c3kit.wire.websocket.client = null;
c3kit.wire.websocket.open_QMARK_ = reagent.core.atom.call(null,false);
c3kit.wire.websocket.reconnection_QMARK_ = cljs.core.atom.call(null,false);
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.websocket !== 'undefined') && (typeof c3kit.wire.websocket.pending_calls !== 'undefined')){
} else {
c3kit.wire.websocket.pending_calls = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
c3kit.wire.websocket.handle_remote_response = (function c3kit$wire$websocket$handle_remote_response(remote_call,response){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remote response: ",response], null);
}),null)),null,(69),null);

return c3kit.wire.api.handle_api_response.call(null,response,remote_call);
});
c3kit.wire.websocket.build_remote_call = (function c3kit$wire$websocket$build_remote_call(kind,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"options","options",99638489),c3kit.apron.corec.__GT_options.call(null,opt_args),new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
c3kit.wire.websocket.make_call_BANG_ = (function c3kit$wire$websocket$make_call_BANG_(p__15565){
var map__15566 = p__15565;
var map__15566__$1 = cljs.core.__destructure_map.call(null,map__15566);
var remote_call = map__15566__$1;
var kind = cljs.core.get.call(null,map__15566__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var params = cljs.core.get.call(null,map__15566__$1,new cljs.core.Keyword(null,"params","params",710516235));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["call: ",kind,params], null);
}),null)),null,(70),null);

return c3kit.wire.websocketc.call_BANG_.call(null,c3kit.wire.websocket.client,kind,params,cljs.core.partial.call(null,c3kit.wire.websocket.handle_remote_response,remote_call));
});
c3kit.wire.websocket.call_BANG_ = (function c3kit$wire$websocket$call_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15590 = arguments.length;
var i__5727__auto___15591 = (0);
while(true){
if((i__5727__auto___15591 < len__5726__auto___15590)){
args__5732__auto__.push((arguments[i__5727__auto___15591]));

var G__15592 = (i__5727__auto___15591 + (1));
i__5727__auto___15591 = G__15592;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return c3kit.wire.websocket.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(c3kit.wire.websocket.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (kind,params,handler,opt_args){
var remote_call = c3kit.wire.websocket.build_remote_call.call(null,kind,params,handler,opt_args);
if(cljs.core.truth_(cljs.core.deref.call(null,c3kit.wire.websocket.open_QMARK_))){
return c3kit.wire.websocket.make_call_BANG_.call(null,remote_call);
} else {
return cljs.core.swap_BANG_.call(null,c3kit.wire.websocket.pending_calls,cljs.core.conj,remote_call);
}
}));

(c3kit.wire.websocket.call_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.websocket.call_BANG_.cljs$lang$applyTo = (function (seq15567){
var G__15568 = cljs.core.first.call(null,seq15567);
var seq15567__$1 = cljs.core.next.call(null,seq15567);
var G__15569 = cljs.core.first.call(null,seq15567__$1);
var seq15567__$2 = cljs.core.next.call(null,seq15567__$1);
var G__15570 = cljs.core.first.call(null,seq15567__$2);
var seq15567__$3 = cljs.core.next.call(null,seq15567__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15568,G__15569,G__15570,seq15567__$3);
}));

c3kit.wire.websocket.on_open = (function c3kit$wire$websocket$on_open(_){
var calls = cljs.core.deref.call(null,c3kit.wire.websocket.pending_calls);
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.pending_calls,cljs.core.PersistentVector.EMPTY);

var seq__15581 = cljs.core.seq.call(null,calls);
var chunk__15583 = null;
var count__15585 = (0);
var i__15586 = (0);
while(true){
if((i__15586 < count__15585)){
var call = cljs.core._nth.call(null,chunk__15583,i__15586);
c3kit.wire.websocket.make_call_BANG_.call(null,call);


var G__15593 = seq__15581;
var G__15594 = chunk__15583;
var G__15595 = count__15585;
var G__15596 = (i__15586 + (1));
seq__15581 = G__15593;
chunk__15583 = G__15594;
count__15585 = G__15595;
i__15586 = G__15596;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15581);
if(temp__5804__auto__){
var seq__15581__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15581__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__15581__$1);
var G__15599 = cljs.core.chunk_rest.call(null,seq__15581__$1);
var G__15600 = c__5525__auto__;
var G__15601 = cljs.core.count.call(null,c__5525__auto__);
var G__15602 = (0);
seq__15581 = G__15599;
chunk__15583 = G__15600;
count__15585 = G__15601;
i__15586 = G__15602;
continue;
} else {
var call = cljs.core.first.call(null,seq__15581__$1);
c3kit.wire.websocket.make_call_BANG_.call(null,call);


var G__15603 = cljs.core.next.call(null,seq__15581__$1);
var G__15604 = null;
var G__15605 = (0);
var G__15606 = (0);
seq__15581 = G__15603;
chunk__15583 = G__15604;
count__15585 = G__15605;
i__15586 = G__15606;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.websocket !== 'undefined') && (typeof c3kit.wire.websocket.push_handler !== 'undefined')){
} else {
c3kit.wire.websocket.push_handler = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.websocket","push-handler"),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","ping","ws/ping",-1670118340),(function (_){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (message){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled push event: ",message], null);
}),null)),null,(73),null);
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","hello","ws/hello",-245030281),(function (p__15597){
var map__15598 = p__15597;
var map__15598__$1 = cljs.core.__destructure_map.call(null,map__15598);
var params = cljs.core.get.call(null,map__15598__$1,new cljs.core.Keyword(null,"params","params",710516235));
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello: ",params], null);
}),null)),null,(74),null);
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","open","ws/open",-1763599228),(function (_){
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.open_QMARK_,true);

if(cljs.core.truth_(cljs.core.deref.call(null,c3kit.wire.websocket.reconnection_QMARK_))){
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.reconnection_QMARK_,false);

var temp__5804__auto___15657 = new cljs.core.Keyword(null,"ws-on-reconnected","ws-on-reconnected",2030895392).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(temp__5804__auto___15657)){
var on_reconnected_15658 = temp__5804__auto___15657;
on_reconnected_15658.call(null);
} else {
}
} else {
}

var calls = cljs.core.deref.call(null,c3kit.wire.websocket.pending_calls);
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.pending_calls,cljs.core.PersistentVector.EMPTY);

var seq__15617 = cljs.core.seq.call(null,calls);
var chunk__15618 = null;
var count__15619 = (0);
var i__15620 = (0);
while(true){
if((i__15620 < count__15619)){
var call = cljs.core._nth.call(null,chunk__15618,i__15620);
c3kit.wire.websocket.make_call_BANG_.call(null,call);


var G__15659 = seq__15617;
var G__15660 = chunk__15618;
var G__15661 = count__15619;
var G__15662 = (i__15620 + (1));
seq__15617 = G__15659;
chunk__15618 = G__15660;
count__15619 = G__15661;
i__15620 = G__15662;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15617);
if(temp__5804__auto__){
var seq__15617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15617__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__15617__$1);
var G__15664 = cljs.core.chunk_rest.call(null,seq__15617__$1);
var G__15665 = c__5525__auto__;
var G__15666 = cljs.core.count.call(null,c__5525__auto__);
var G__15667 = (0);
seq__15617 = G__15664;
chunk__15618 = G__15665;
count__15619 = G__15666;
i__15620 = G__15667;
continue;
} else {
var call = cljs.core.first.call(null,seq__15617__$1);
c3kit.wire.websocket.make_call_BANG_.call(null,call);


var G__15671 = cljs.core.next.call(null,seq__15617__$1);
var G__15672 = null;
var G__15673 = (0);
var G__15674 = (0);
seq__15617 = G__15671;
chunk__15618 = G__15672;
count__15619 = G__15673;
i__15620 = G__15674;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","close","ws/close",1835153450),(function (_){
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.open_QMARK_,false);

cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.reconnection_QMARK_,true);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connection closed... reconnecting"], null);
}),null)),null,(75),null);

return c3kit.wire.js.timeout.call(null,(1000),c3kit.wire.websocket.connect_BANG_.call(null));
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","error","ws/error",-978964716),(function (_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket error"], null);
}),null)),null,(77),null);
}));
c3kit.wire.websocket.message_handler = (function c3kit$wire$websocket$message_handler(message){
return c3kit.wire.websocket.push_handler.call(null,message);
});
c3kit.wire.websocket.connect_BANG_ = (function c3kit$wire$websocket$connect_BANG_(){
return c3kit.wire.websocketc.connect_BANG_.call(null,c3kit.wire.websocket.client,new cljs.core.Keyword(null,"ws-uri-path","ws-uri-path",132764557).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config)),new cljs.core.Keyword(null,"ws-csrf-token","ws-csrf-token",-1873854868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config)));
});
c3kit.wire.websocket.start_BANG_ = (function c3kit$wire$websocket$start_BANG_(){
if(cljs.core.truth_(c3kit.wire.websocket.client)){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"ws-csrf-token","ws-csrf-token",-1873854868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config)))){
(c3kit.wire.websocket.client = c3kit.wire.websocketc.create.call(null,c3kit.wire.websocket.message_handler,new cljs.core.Keyword(null,"atom-fn","atom-fn",-354652779),reagent.core.atom));

return c3kit.wire.websocket.connect_BANG_.call(null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CSRF Token missing.  Unable to start websocket."], null);
}),null)),null,(79),null);
}
}
});
c3kit.wire.websocket.stop_BANG_ = (function c3kit$wire$websocket$stop_BANG_(){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stopping websocket"], null);
}),null)),null,(80),null);
});
c3kit.wire.websocket.disconnected_button = (function c3kit$wire$websocket$disconnected_button(){
var open_QMARK_ = reagent.core.atom.call(null,false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contextual-menu-anchor","div.contextual-menu-anchor",-514628572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#-disconnected-button.disconnected.naked","button#-disconnected-button.disconnected.naked",395710365),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,open_QMARK_,true);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fas.fa-exclamation-triangle.animation.error.small-margin-left","span.fas.fa-exclamation-triangle.animation.error.small-margin-left",1886480601)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,open_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#-disconnected-menu-overlay.contextual-menu","div#-disconnected-menu-overlay.contextual-menu",752932392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,open_QMARK_,false);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#-disconnected-menu.card","div#-disconnected-menu.card",876871192),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.small-margin-bottom","h5.small-margin-bottom",1748139976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fas.fa-link","span.fas.fa-link",-1115277902)], null),"Connection Broken"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.margin-bottom","p.margin-bottom",1527696980),"Your connection with the server has been broken. ","We are trying to reconnect.  If that doesn't seem to help, please try reloading this page."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),c3kit.wire.js.page_reload_BANG_], null),"Reload Page"], null)], null)], null):null)], null);
});
});
c3kit.wire.websocket.connection_status = (function c3kit$wire$websocket$connection_status(){
if(cljs.core.truth_(cljs.core.deref.call(null,c3kit.wire.websocket.open_QMARK_))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.websocket.disconnected_button], null);
}
});

//# sourceMappingURL=websocket.js.map
