// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('c3kit.wire.ajax');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.api');
goog.require('c3kit.wire.flash');
goog.require('c3kit.wire.js');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('reagent.core');
c3kit.wire.ajax.active_ajax_requests = reagent.core.atom.call(null,(0));
c3kit.wire.ajax.activity_QMARK_ = (function c3kit$wire$ajax$activity_QMARK_(){
return cljs.core.not_EQ_.call(null,(0),cljs.core.deref.call(null,c3kit.wire.ajax.active_ajax_requests));
});
c3kit.wire.ajax.server_down_QMARK_ = (function c3kit$wire$ajax$server_down_QMARK_(p__15588){
var map__15589 = p__15588;
var map__15589__$1 = cljs.core.__destructure_map.call(null,map__15589);
var error_code = cljs.core.get.call(null,map__15589__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var status = cljs.core.get.call(null,map__15589__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var and__5000__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),error_code);
if(and__5000__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(502),null], null), null).call(null,status);
} else {
return and__5000__auto__;
}
});
c3kit.wire.ajax.handle_server_down = (function c3kit$wire$ajax$handle_server_down(ajax_call){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Appears that server is down.  Will retry after in a moment."], null);
}),null)),null,(71),null);

c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.server_down_flash);

return c3kit.wire.js.timeout.call(null,(3000),(function (){
return c3kit.wire.ajax._do_ajax_request.call(null,ajax_call);
}));
});
c3kit.wire.ajax.handle_unexpected_response = (function c3kit$wire$ajax$handle_unexpected_response(response,ajax_call){
var temp__5802__auto__ = new cljs.core.Keyword(null,"on-http-error","on-http-error",268314602).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core.truth_(temp__5802__auto__)){
var on_http_error = temp__5802__auto__;
return on_http_error.call(null,response);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unexpected AJAX response: ",response,ajax_call], null);
}),null)),null,(72),null);
}
});
c3kit.wire.ajax.handle_unsuccessful_response = (function c3kit$wire$ajax$handle_unsuccessful_response(response,ajax_call){
if(cljs.core.truth_(c3kit.wire.ajax.server_down_QMARK_.call(null,response))){
return c3kit.wire.ajax.handle_server_down.call(null,ajax_call);
} else {
if(cljs.core._EQ_.call(null,(403),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.forbidden_flash);
} else {
return c3kit.wire.ajax.handle_unexpected_response.call(null,response,ajax_call);

}
}
});
c3kit.wire.ajax.triage_response = (function c3kit$wire$ajax$triage_response(response,ajax_call){
if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.api.handle_api_response.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response),ajax_call);
} else {
var temp__5802__auto__ = new cljs.core.Keyword(null,"ajax-on-unsuccessful-response","ajax-on-unsuccessful-response",-334902909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(temp__5802__auto__)){
var handler = temp__5802__auto__;
return handler.call(null,response,ajax_call);
} else {
return c3kit.wire.ajax.handle_unsuccessful_response.call(null,response,ajax_call);
}

}
});
/**
 * Create a prep fn to add a CSRF header to each request
 *   (prep-csrf "X-CSRF-Token"] csrf-token)
 */
c3kit.wire.ajax.prep_csrf = (function c3kit$wire$ajax$prep_csrf(header,token){
return (function (ajax_call){
return cljs.core.assoc_in.call(null,ajax_call,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"headers","headers",-835030129),header], null),token);
});
});
c3kit.wire.ajax.params_key = (function c3kit$wire$ajax$params_key(ajax_call){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["HEAD",null,"GET",null], null), null).call(null,new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(ajax_call)))){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
var G__15611 = new cljs.core.Keyword(null,"params-type","params-type",1941495334).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core._EQ_.call(null,null,G__15611)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transit","transit",359458387),G__15611)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),G__15611)){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),G__15611)){
return new cljs.core.Keyword(null,"form-params","form-params",1884296467);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885),G__15611)){
return new cljs.core.Keyword(null,"edn-params","edn-params",894273052);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1279968570),G__15611)){
return new cljs.core.Keyword(null,"json-params","json-params",-1112693596);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"multipart","multipart",1158197946),G__15611)){
return new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15611)].join('')));

}
}
}
}
}
}
}
}
});
c3kit.wire.ajax.pass_through_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)], null);
c3kit.wire.ajax.request_map = (function c3kit$wire$ajax$request_map(ajax_call){
var prep = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"ajax-prep-fn","ajax-prep-fn",1814062099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.identity;
}
})();
var map__15622 = prep.call(null,ajax_call);
var map__15622__$1 = cljs.core.__destructure_map.call(null,map__15622);
var ajax_call__$1 = map__15622__$1;
var options = cljs.core.get.call(null,map__15622__$1,new cljs.core.Keyword(null,"options","options",99638489));
var params = cljs.core.get.call(null,map__15622__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__15624 = cljs.core.select_keys.call(null,options,c3kit.wire.ajax.pass_through_keys);
if(cljs.core.truth_(params)){
return cljs.core.assoc.call(null,G__15624,c3kit.wire.ajax.params_key.call(null,ajax_call__$1),params);
} else {
return G__15624;
}
});
c3kit.wire.ajax._do_ajax_request = (function c3kit$wire$ajax$_do_ajax_request(p__15632){
var map__15633 = p__15632;
var map__15633__$1 = cljs.core.__destructure_map.call(null,map__15633);
var ajax_call = map__15633__$1;
var method = cljs.core.get.call(null,map__15633__$1,new cljs.core.Keyword(null,"method","method",55703592));
var method_fn = cljs.core.get.call(null,map__15633__$1,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696));
var url = cljs.core.get.call(null,map__15633__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.call(null,map__15633__$1,new cljs.core.Keyword(null,"params","params",710516235));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",method,url,params], null);
}),null)),null,(76),null);

var c__9549__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__9550__auto__ = (function (){var switch__9369__auto__ = (function (state_15654){
var state_val_15656 = (state_15654[(1)]);
if((state_val_15656 === (1))){
var inst_15636 = (state_15654[(7)]);
var inst_15634 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.inc);
var inst_15636__$1 = c3kit.wire.ajax.request_map.call(null,ajax_call);
var inst_15637 = method_fn.call(null,url,inst_15636__$1);
var state_15654__$1 = (function (){var statearr_15687 = state_15654;
(statearr_15687[(8)] = inst_15634);

(statearr_15687[(7)] = inst_15636__$1);

return statearr_15687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15654__$1,(2),inst_15637);
} else {
if((state_val_15656 === (2))){
var inst_15636 = (state_15654[(7)]);
var inst_15639 = (state_15654[(2)]);
var inst_15640 = cljs.core.__destructure_map.call(null,inst_15639);
var inst_15641 = cljs.core.get.call(null,inst_15640,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var inst_15642 = cljs.core.get.call(null,inst_15640,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_15643 = cljs.core.get.call(null,inst_15640,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_15644 = (function (){var request = inst_15636;
var map__15635 = inst_15640;
var response = inst_15640;
var error_code = inst_15641;
var status = inst_15642;
var body = inst_15643;
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [">",method,url,error_code,status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(body)], null);
});
})();
var inst_15646 = (new cljs.core.Delay(inst_15644,null));
var inst_15647 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_15646,null,(78),null);
var inst_15649 = c3kit.wire.ajax.triage_response.call(null,inst_15640,ajax_call);
var inst_15650 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.dec);
var state_15654__$1 = (function (){var statearr_15688 = state_15654;
(statearr_15688[(9)] = inst_15647);

(statearr_15688[(10)] = inst_15649);

return statearr_15688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15654__$1,inst_15650);
} else {
return null;
}
}
});
return (function() {
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto__ = null;
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto____0 = (function (){
var statearr_15689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15689[(0)] = c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto__);

(statearr_15689[(1)] = (1));

return statearr_15689;
});
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto____1 = (function (state_15654){
while(true){
var ret_value__9371__auto__ = (function (){try{while(true){
var result__9372__auto__ = switch__9369__auto__.call(null,state_15654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9372__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9372__auto__;
}
break;
}
}catch (e15690){var ex__9373__auto__ = e15690;
var statearr_15691_15703 = state_15654;
(statearr_15691_15703[(2)] = ex__9373__auto__);


if(cljs.core.seq.call(null,(state_15654[(4)]))){
var statearr_15692_15704 = state_15654;
(statearr_15692_15704[(1)] = cljs.core.first.call(null,(state_15654[(4)])));

} else {
throw ex__9373__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15709 = state_15654;
state_15654 = G__15709;
continue;
} else {
return ret_value__9371__auto__;
}
break;
}
});
c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto__ = function(state_15654){
switch(arguments.length){
case 0:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto____0.call(this);
case 1:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto____1.call(this,state_15654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$0 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto____0;
c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto__.cljs$core$IFn$_invoke$arity$1 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto____1;
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__9370__auto__;
})()
})();
var state__9551__auto__ = (function (){var statearr_15694 = f__9550__auto__.call(null);
(statearr_15694[(6)] = c__9549__auto__);

return statearr_15694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9551__auto__);
}));

return c__9549__auto__;
});
c3kit.wire.ajax.build_ajax_call = (function c3kit$wire$ajax$build_ajax_call(method,method_fn,url,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),c3kit.apron.corec.__GT_options.call(null,opt_args),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696),method_fn,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
c3kit.wire.ajax._method_parts = (function c3kit$wire$ajax$_method_parts(method){
var G__15696 = method;
var G__15696__$1 = (((G__15696 instanceof cljs.core.Keyword))?G__15696.fqn:null);
switch (G__15696__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",cljs_http.client.get], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST",cljs_http.client.post], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15696__$1)].join('')));

}
});
c3kit.wire.ajax.get_BANG_ = (function c3kit$wire$ajax$get_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15727 = arguments.length;
var i__5727__auto___15728 = (0);
while(true){
if((i__5727__auto___15728 < len__5726__auto___15727)){
args__5732__auto__.push((arguments[i__5727__auto___15728]));

var G__15729 = (i__5727__auto___15728 + (1));
i__5727__auto___15728 = G__15729;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,"GET",cljs_http.client.get,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.get_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.get_BANG_.cljs$lang$applyTo = (function (seq15697){
var G__15698 = cljs.core.first.call(null,seq15697);
var seq15697__$1 = cljs.core.next.call(null,seq15697);
var G__15699 = cljs.core.first.call(null,seq15697__$1);
var seq15697__$2 = cljs.core.next.call(null,seq15697__$1);
var G__15700 = cljs.core.first.call(null,seq15697__$2);
var seq15697__$3 = cljs.core.next.call(null,seq15697__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15698,G__15699,G__15700,seq15697__$3);
}));

c3kit.wire.ajax.post_BANG_ = (function c3kit$wire$ajax$post_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15734 = arguments.length;
var i__5727__auto___15735 = (0);
while(true){
if((i__5727__auto___15735 < len__5726__auto___15734)){
args__5732__auto__.push((arguments[i__5727__auto___15735]));

var G__15736 = (i__5727__auto___15735 + (1));
i__5727__auto___15735 = G__15736;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,"POST",cljs_http.client.post,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.post_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.post_BANG_.cljs$lang$applyTo = (function (seq15705){
var G__15706 = cljs.core.first.call(null,seq15705);
var seq15705__$1 = cljs.core.next.call(null,seq15705);
var G__15707 = cljs.core.first.call(null,seq15705__$1);
var seq15705__$2 = cljs.core.next.call(null,seq15705__$1);
var G__15708 = cljs.core.first.call(null,seq15705__$2);
var seq15705__$3 = cljs.core.next.call(null,seq15705__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15706,G__15707,G__15708,seq15705__$3);
}));

c3kit.wire.ajax.request_BANG_ = (function c3kit$wire$ajax$request_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15744 = arguments.length;
var i__5727__auto___15745 = (0);
while(true){
if((i__5727__auto___15745 < len__5726__auto___15744)){
args__5732__auto__.push((arguments[i__5727__auto___15745]));

var G__15746 = (i__5727__auto___15745 + (1));
i__5727__auto___15745 = G__15746;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,params,handler,opt_args){
var method_name = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var method_fn = (function() { 
var G__15748__delegate = function (url__$1,p__15719){
var vec__15720 = p__15719;
var req = cljs.core.nth.call(null,vec__15720,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url__$1], null)));
};
var G__15748 = function (url__$1,var_args){
var p__15719 = null;
if (arguments.length > 1) {
var G__15749__i = 0, G__15749__a = new Array(arguments.length -  1);
while (G__15749__i < G__15749__a.length) {G__15749__a[G__15749__i] = arguments[G__15749__i + 1]; ++G__15749__i;}
  p__15719 = new cljs.core.IndexedSeq(G__15749__a,0,null);
} 
return G__15748__delegate.call(this,url__$1,p__15719);};
G__15748.cljs$lang$maxFixedArity = 1;
G__15748.cljs$lang$applyTo = (function (arglist__15750){
var url__$1 = cljs.core.first(arglist__15750);
var p__15719 = cljs.core.rest(arglist__15750);
return G__15748__delegate(url__$1,p__15719);
});
G__15748.cljs$core$IFn$_invoke$arity$variadic = G__15748__delegate;
return G__15748;
})()
;
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,method_name,method_fn,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.request_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(c3kit.wire.ajax.request_BANG_.cljs$lang$applyTo = (function (seq15713){
var G__15714 = cljs.core.first.call(null,seq15713);
var seq15713__$1 = cljs.core.next.call(null,seq15713);
var G__15715 = cljs.core.first.call(null,seq15713__$1);
var seq15713__$2 = cljs.core.next.call(null,seq15713__$1);
var G__15716 = cljs.core.first.call(null,seq15713__$2);
var seq15713__$3 = cljs.core.next.call(null,seq15713__$2);
var G__15717 = cljs.core.first.call(null,seq15713__$3);
var seq15713__$4 = cljs.core.next.call(null,seq15713__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15714,G__15715,G__15716,G__15717,seq15713__$4);
}));


//# sourceMappingURL=ajax.js.map
