// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.easyc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.moves.corec');
var description__7937__auto___9031 = speclj.components.new_description.call(null,"moves-easyc",false,"tic-tac-toe.moves.easyc-spec");
var _STAR_parent_description_STAR__orig_val__9017_9032 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9018_9033 = description__7937__auto___9031;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9018_9033);

try{var seq__9019_9034 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9017_9032,_STAR_parent_description_STAR__temp_val__9018_9033,description__7937__auto___9031){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9027 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9028 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9028);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9027);
}});})(_STAR_parent_description_STAR__orig_val__9017_9032,_STAR_parent_description_STAR__temp_val__9018_9033,description__7937__auto___9031))
),speclj.components.new_characteristic.call(null,"invokes board/get-random-available",((function (_STAR_parent_description_STAR__orig_val__9017_9032,_STAR_parent_description_STAR__temp_val__9018_9033,description__7937__auto___9031){
return (function (){
var get_random_available_orig_val__9029 = tic_tac_toe.boardc.get_random_available;
var get_random_available_temp_val__9030 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"get-random","get-random",-709236220),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.boardc.get_random_available = get_random_available_temp_val__9030);

try{tic_tac_toe.moves.corec.pick_move.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))], null));

var name__8321__auto__ = new cljs.core.Keyword(null,"get-random","get-random",-709236220);
var options__8322__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8323__auto__ = speclj.stub.invocations_of.call(null,name__8321__auto__);
var times__8324__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8322__auto__);
var times_QMARK___8325__auto__ = typeof times__8324__auto__ === 'number';
var check_params_QMARK___8326__auto__ = cljs.core.contains_QMARK_.call(null,options__8322__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8327__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8322__auto__);
var with__8327__auto____$1 = (((with__8327__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8327__auto__);
var invocations_str__8328__auto__ = (function (p1__8318__8329__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8318__8329__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8325__auto__) && (check_params_QMARK___8326__auto__))){
var matching_invocations__8330__auto__ = cljs.core.filter.call(null,(function (p1__8319__8331__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8327__auto____$1,p1__8319__8331__auto__);
}),invocations__8323__auto__);
var matching_count__8332__auto__ = cljs.core.count.call(null,matching_invocations__8330__auto__);
if(cljs.core._EQ_.call(null,times__8324__auto__,matching_count__8332__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8324__auto__)," ",invocations_str__8328__auto__.call(null,times__8324__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8321__auto__)," with ",cljs.core.pr_str.call(null,with__8327__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8332__auto__)," ",invocations_str__8328__auto__.call(null,matching_count__8332__auto__)].join('')));
}
} else {
if(check_params_QMARK___8326__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8320__8333__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8327__auto____$1,p1__8320__8333__auto__);
}),invocations__8323__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8321__auto__)," with ",cljs.core.pr_str.call(null,with__8327__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8323__auto__)].join('')));
}
} else {
if(times_QMARK___8325__auto__){
if(cljs.core._EQ_.call(null,times__8324__auto__,cljs.core.count.call(null,invocations__8323__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8324__auto__)," ",invocations_str__8328__auto__.call(null,times__8324__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8321__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8323__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8323__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8321__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8323__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.boardc.get_random_available = get_random_available_orig_val__9029);
}});})(_STAR_parent_description_STAR__orig_val__9017_9032,_STAR_parent_description_STAR__temp_val__9018_9033,description__7937__auto___9031))
,false)],null)));
var chunk__9020_9035 = null;
var count__9021_9036 = (0);
var i__9022_9037 = (0);
while(true){
if((i__9022_9037 < count__9021_9036)){
var component__7938__auto___9038 = cljs.core._nth.call(null,chunk__9020_9035,i__9022_9037);
speclj.components.install.call(null,component__7938__auto___9038,description__7937__auto___9031);


var G__9039 = seq__9019_9034;
var G__9040 = chunk__9020_9035;
var G__9041 = count__9021_9036;
var G__9042 = (i__9022_9037 + (1));
seq__9019_9034 = G__9039;
chunk__9020_9035 = G__9040;
count__9021_9036 = G__9041;
i__9022_9037 = G__9042;
continue;
} else {
var temp__5804__auto___9043 = cljs.core.seq.call(null,seq__9019_9034);
if(temp__5804__auto___9043){
var seq__9019_9044__$1 = temp__5804__auto___9043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9019_9044__$1)){
var c__5525__auto___9045 = cljs.core.chunk_first.call(null,seq__9019_9044__$1);
var G__9046 = cljs.core.chunk_rest.call(null,seq__9019_9044__$1);
var G__9047 = c__5525__auto___9045;
var G__9048 = cljs.core.count.call(null,c__5525__auto___9045);
var G__9049 = (0);
seq__9019_9034 = G__9046;
chunk__9020_9035 = G__9047;
count__9021_9036 = G__9048;
i__9022_9037 = G__9049;
continue;
} else {
var component__7938__auto___9050 = cljs.core.first.call(null,seq__9019_9044__$1);
speclj.components.install.call(null,component__7938__auto___9050,description__7937__auto___9031);


var G__9051 = cljs.core.next.call(null,seq__9019_9044__$1);
var G__9052 = null;
var G__9053 = (0);
var G__9054 = (0);
seq__9019_9034 = G__9051;
chunk__9020_9035 = G__9052;
count__9021_9036 = G__9053;
i__9022_9037 = G__9054;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9017_9032);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___9031);
}


//# sourceMappingURL=easyc_spec.js.map
