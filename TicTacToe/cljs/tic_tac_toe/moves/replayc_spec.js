// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.replayc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.replayc');
var description__7937__auto___9746 = speclj.components.new_description.call(null,"replay -move",false,"tic-tac-toe.moves.replayc-spec");
var _STAR_parent_description_STAR__orig_val__9720_9747 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9721_9748 = description__7937__auto___9746;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9721_9748);

try{var seq__9722_9749 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9720_9747,_STAR_parent_description_STAR__temp_val__9721_9748,description__7937__auto___9746){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9736 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9737 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9737);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9736);
}});})(_STAR_parent_description_STAR__orig_val__9720_9747,_STAR_parent_description_STAR__temp_val__9721_9748,description__7937__auto___9746))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9720_9747,_STAR_parent_description_STAR__temp_val__9721_9748,description__7937__auto___9746){
return (function (it__7999__auto__){
var thread_sleep_orig_val__9738 = tic_tac_toe.moves.replayc.thread_sleep;
var thread_sleep_temp_val__9739 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.moves.replayc.thread_sleep = thread_sleep_temp_val__9739);

try{return it__7999__auto__.call(null);
}finally {(tic_tac_toe.moves.replayc.thread_sleep = thread_sleep_orig_val__9738);
}});})(_STAR_parent_description_STAR__orig_val__9720_9747,_STAR_parent_description_STAR__temp_val__9721_9748,description__7937__auto___9746))
),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-replay-move",false,"tic-tac-toe.moves.replayc-spec");
var _STAR_parent_description_STAR__orig_val__9740_9753 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9741_9754 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9741_9754);

try{var seq__9742_9755 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns the first of the moves",((function (_STAR_parent_description_STAR__orig_val__9740_9753,_STAR_parent_description_STAR__temp_val__9741_9754,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9720_9747,_STAR_parent_description_STAR__temp_val__9721_9748,description__7937__auto___9746){
return (function (){
var expected__8074__auto___9759 = (0);
var actual__8075__auto___9760 = tic_tac_toe.moves.replayc.get_replay_move.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null)], null));
if(cljs.core._EQ_.call(null,expected__8074__auto___9759,actual__8075__auto___9760)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9759;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9760;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = (1);
var actual__8075__auto__ = tic_tac_toe.moves.replayc.get_replay_move.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null)], null));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9740_9753,_STAR_parent_description_STAR__temp_val__9741_9754,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9720_9747,_STAR_parent_description_STAR__temp_val__9721_9748,description__7937__auto___9746))
,false),speclj.components.new_characteristic.call(null,"invokes thread sleep to make a delay between moves",((function (_STAR_parent_description_STAR__orig_val__9740_9753,_STAR_parent_description_STAR__temp_val__9741_9754,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9720_9747,_STAR_parent_description_STAR__temp_val__9721_9748,description__7937__auto___9746){
return (function (){
tic_tac_toe.moves.replayc.get_replay_move.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null)], null));

var name__8321__auto__ = new cljs.core.Keyword(null,"sleep","sleep",-1932665860);
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
});})(_STAR_parent_description_STAR__orig_val__9740_9753,_STAR_parent_description_STAR__temp_val__9741_9754,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9720_9747,_STAR_parent_description_STAR__temp_val__9721_9748,description__7937__auto___9746))
,false)],null)));
var chunk__9743_9756 = null;
var count__9744_9757 = (0);
var i__9745_9758 = (0);
while(true){
if((i__9745_9758 < count__9744_9757)){
var component__7938__auto___9761 = cljs.core._nth.call(null,chunk__9743_9756,i__9745_9758);
speclj.components.install.call(null,component__7938__auto___9761,description__7937__auto____$1);


var G__9762 = seq__9742_9755;
var G__9763 = chunk__9743_9756;
var G__9764 = count__9744_9757;
var G__9765 = (i__9745_9758 + (1));
seq__9742_9755 = G__9762;
chunk__9743_9756 = G__9763;
count__9744_9757 = G__9764;
i__9745_9758 = G__9765;
continue;
} else {
var temp__5804__auto___9766 = cljs.core.seq.call(null,seq__9742_9755);
if(temp__5804__auto___9766){
var seq__9742_9767__$1 = temp__5804__auto___9766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9742_9767__$1)){
var c__5525__auto___9768 = cljs.core.chunk_first.call(null,seq__9742_9767__$1);
var G__9769 = cljs.core.chunk_rest.call(null,seq__9742_9767__$1);
var G__9770 = c__5525__auto___9768;
var G__9771 = cljs.core.count.call(null,c__5525__auto___9768);
var G__9772 = (0);
seq__9742_9755 = G__9769;
chunk__9743_9756 = G__9770;
count__9744_9757 = G__9771;
i__9745_9758 = G__9772;
continue;
} else {
var component__7938__auto___9773 = cljs.core.first.call(null,seq__9742_9767__$1);
speclj.components.install.call(null,component__7938__auto___9773,description__7937__auto____$1);


var G__9774 = cljs.core.next.call(null,seq__9742_9767__$1);
var G__9775 = null;
var G__9776 = (0);
var G__9777 = (0);
seq__9742_9755 = G__9774;
chunk__9743_9756 = G__9775;
count__9744_9757 = G__9776;
i__9745_9758 = G__9777;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9740_9753);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__9723_9750 = null;
var count__9724_9751 = (0);
var i__9725_9752 = (0);
while(true){
if((i__9725_9752 < count__9724_9751)){
var component__7938__auto___9778 = cljs.core._nth.call(null,chunk__9723_9750,i__9725_9752);
speclj.components.install.call(null,component__7938__auto___9778,description__7937__auto___9746);


var G__9779 = seq__9722_9749;
var G__9780 = chunk__9723_9750;
var G__9781 = count__9724_9751;
var G__9782 = (i__9725_9752 + (1));
seq__9722_9749 = G__9779;
chunk__9723_9750 = G__9780;
count__9724_9751 = G__9781;
i__9725_9752 = G__9782;
continue;
} else {
var temp__5804__auto___9783 = cljs.core.seq.call(null,seq__9722_9749);
if(temp__5804__auto___9783){
var seq__9722_9784__$1 = temp__5804__auto___9783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9722_9784__$1)){
var c__5525__auto___9785 = cljs.core.chunk_first.call(null,seq__9722_9784__$1);
var G__9786 = cljs.core.chunk_rest.call(null,seq__9722_9784__$1);
var G__9787 = c__5525__auto___9785;
var G__9788 = cljs.core.count.call(null,c__5525__auto___9785);
var G__9789 = (0);
seq__9722_9749 = G__9786;
chunk__9723_9750 = G__9787;
count__9724_9751 = G__9788;
i__9725_9752 = G__9789;
continue;
} else {
var component__7938__auto___9790 = cljs.core.first.call(null,seq__9722_9784__$1);
speclj.components.install.call(null,component__7938__auto___9790,description__7937__auto___9746);


var G__9791 = cljs.core.next.call(null,seq__9722_9784__$1);
var G__9792 = null;
var G__9793 = (0);
var G__9794 = (0);
seq__9722_9749 = G__9791;
chunk__9723_9750 = G__9792;
count__9724_9751 = G__9793;
i__9725_9752 = G__9794;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9720_9747);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___9746);
}


//# sourceMappingURL=replayc_spec.js.map
