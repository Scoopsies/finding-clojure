// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.play_gamec_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.data.data_ioc');
goog.require('tic_tac_toe.play_gamec');
goog.require('tic_tac_toe.printablesc');
tic_tac_toe.play_gamec_spec.board_size_menu = tic_tac_toe.printablesc.get_board_size_menu.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null));
var description__10025__auto___11646 = speclj.components.new_description.call(null,"play-gamec",false,"tic-tac-toe.play-gamec-spec");
var _STAR_parent_description_STAR__orig_val__11386_11647 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11387_11648 = description__10025__auto___11646;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11387_11648);

try{var seq__11388_11649 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (it__10395__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__11569 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__11570 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__11570);

try{return it__10395__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__11569);
}});})(_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.data.data_ioc.data_store,new cljs.core.Keyword(null,"memory","memory",-1449401430));

return tic_tac_toe.data.data_ioc.write_db.call(null,cljs.core.PersistentVector.EMPTY);
});})(_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
),(function (){var description__10025__auto____$1 = speclj.components.new_description.call(null,"handle-replay",false,"tic-tac-toe.play-gamec-spec");
var _STAR_parent_description_STAR__orig_val__11571_11655 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11572_11656 = description__10025__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11572_11656);

try{var seq__11573_11657 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns the state of the last game if selection is 1",((function (_STAR_parent_description_STAR__orig_val__11571_11655,_STAR_parent_description_STAR__temp_val__11572_11656,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.handle_continue.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"1");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11571_11655,_STAR_parent_description_STAR__temp_val__11572_11656,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"it changes last games :ui to current games :ui",((function (_STAR_parent_description_STAR__orig_val__11571_11655,_STAR_parent_description_STAR__temp_val__11572_11656,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.handle_continue.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"1");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11571_11655,_STAR_parent_description_STAR__temp_val__11572_11656,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"disassociates last-game and associates player-x printables if selection 2",((function (_STAR_parent_description_STAR__orig_val__11571_11655,_STAR_parent_description_STAR__temp_val__11572_11656,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_x_printables], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.handle_continue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null),"2");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11571_11655,_STAR_parent_description_STAR__temp_val__11572_11656,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"returns original state if no matching selection",((function (_STAR_parent_description_STAR__orig_val__11571_11655,_STAR_parent_description_STAR__temp_val__11572_11656,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null);
var expected__10162__auto___11665 = state;
var actual__10163__auto___11666 = tic_tac_toe.play_gamec.handle_continue.call(null,state,"3");
if(cljs.core._EQ_.call(null,expected__10162__auto___11665,actual__10163__auto___11666)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___11665;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___11666;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto__ = state;
var actual__10163__auto__ = tic_tac_toe.play_gamec.handle_continue.call(null,state,null);
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11571_11655,_STAR_parent_description_STAR__temp_val__11572_11656,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false)],null)));
var chunk__11574_11658 = null;
var count__11575_11659 = (0);
var i__11576_11660 = (0);
while(true){
if((i__11576_11660 < count__11575_11659)){
var component__10026__auto___11684 = cljs.core._nth.call(null,chunk__11574_11658,i__11576_11660);
speclj.components.install.call(null,component__10026__auto___11684,description__10025__auto____$1);


var G__11688 = seq__11573_11657;
var G__11689 = chunk__11574_11658;
var G__11690 = count__11575_11659;
var G__11691 = (i__11576_11660 + (1));
seq__11573_11657 = G__11688;
chunk__11574_11658 = G__11689;
count__11575_11659 = G__11690;
i__11576_11660 = G__11691;
continue;
} else {
var temp__5804__auto___11695 = cljs.core.seq.call(null,seq__11573_11657);
if(temp__5804__auto___11695){
var seq__11573_11696__$1 = temp__5804__auto___11695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11573_11696__$1)){
var c__5525__auto___11697 = cljs.core.chunk_first.call(null,seq__11573_11696__$1);
var G__11698 = cljs.core.chunk_rest.call(null,seq__11573_11696__$1);
var G__11699 = c__5525__auto___11697;
var G__11700 = cljs.core.count.call(null,c__5525__auto___11697);
var G__11701 = (0);
seq__11573_11657 = G__11698;
chunk__11574_11658 = G__11699;
count__11575_11659 = G__11700;
i__11576_11660 = G__11701;
continue;
} else {
var component__10026__auto___11702 = cljs.core.first.call(null,seq__11573_11696__$1);
speclj.components.install.call(null,component__10026__auto___11702,description__10025__auto____$1);


var G__11703 = cljs.core.next.call(null,seq__11573_11696__$1);
var G__11704 = null;
var G__11705 = (0);
var G__11706 = (0);
seq__11573_11657 = G__11703;
chunk__11574_11658 = G__11704;
count__11575_11659 = G__11705;
i__11576_11660 = G__11706;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11571_11655);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10025__auto____$1);
}

return description__10025__auto____$1;
})(),(function (){var description__10025__auto____$1 = speclj.components.new_description.call(null,"state-changer",false,"tic-tac-toe.play-gamec-spec");
var _STAR_parent_description_STAR__orig_val__11577_11716 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11578_11717 = description__10025__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11578_11717);

try{var seq__11579_11718 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,15,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"invokes handle-replay",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var handle_continue_orig_val__11603 = tic_tac_toe.play_gamec.handle_continue;
var handle_continue_temp_val__11604 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_gamec.handle_continue = handle_continue_temp_val__11604);

try{tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null),"1");

var name__10409__auto__ = new cljs.core.Keyword(null,"replay","replay",-681122389);
var options__10410__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null),"1"], null)], null);
var invocations__10411__auto__ = speclj.stub.invocations_of.call(null,name__10409__auto__);
var times__10412__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__10410__auto__);
var times_QMARK___10413__auto__ = typeof times__10412__auto__ === 'number';
var check_params_QMARK___10414__auto__ = cljs.core.contains_QMARK_.call(null,options__10410__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__10415__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__10410__auto__);
var with__10415__auto____$1 = (((with__10415__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__10415__auto__);
var invocations_str__10416__auto__ = (function (p1__10406__10417__auto__){
if(cljs.core._EQ_.call(null,(1),p1__10406__10417__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___10413__auto__) && (check_params_QMARK___10414__auto__))){
var matching_invocations__10418__auto__ = cljs.core.filter.call(null,(function (p1__10407__10419__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10415__auto____$1,p1__10407__10419__auto__);
}),invocations__10411__auto__);
var matching_count__10420__auto__ = cljs.core.count.call(null,matching_invocations__10418__auto__);
if(cljs.core._EQ_.call(null,times__10412__auto__,matching_count__10420__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10412__auto__)," ",invocations_str__10416__auto__.call(null,times__10412__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10409__auto__)," with ",cljs.core.pr_str.call(null,with__10415__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__10420__auto__)," ",invocations_str__10416__auto__.call(null,matching_count__10420__auto__)].join('')));
}
} else {
if(check_params_QMARK___10414__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10408__10421__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__10415__auto____$1,p1__10408__10421__auto__);
}),invocations__10411__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10409__auto__)," with ",cljs.core.pr_str.call(null,with__10415__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__10411__auto__)].join('')));
}
} else {
if(times_QMARK___10413__auto__){
if(cljs.core._EQ_.call(null,times__10412__auto__,cljs.core.count.call(null,invocations__10411__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__10412__auto__)," ",invocations_str__10416__auto__.call(null,times__10412__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10409__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10411__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__10411__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__10409__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__10411__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.play_gamec.handle_continue = handle_continue_orig_val__11603);
}});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"X plays as a human",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.PersistentArrayMap.EMPTY,"1");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"X plays as an easy computer",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.PersistentArrayMap.EMPTY,"2");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"X plays as a medium computer",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.PersistentArrayMap.EMPTY,"3");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"X plays as a hard computer",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.PersistentArrayMap.EMPTY,"4");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"O plays as a human",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.play_gamec_spec.board_size_menu], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"1");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"O plays as an easy computer",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.play_gamec_spec.board_size_menu], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"2");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"O plays as medium computer",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.play_gamec_spec.board_size_menu], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"3");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"O plays as a hard computer",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.play_gamec_spec.board_size_menu], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"4");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"Chooses a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 6, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,cljs.core.range.call(null,(9)))], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"1");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"Chooses a 4x4 board",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 6, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(16)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,cljs.core.range.call(null,(16)))], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"2");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"Chooses a 3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 6, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(27)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,cljs.core.range.call(null,(27)))], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"3");
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"plays X on square 0",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 7, ["X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null))], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))], null),(0));
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"plays O on square 1",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 7, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null))], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 5, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null),(1));
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"plays X on square 2",((function (_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 7, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X",(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X",(3),(4),(5),(6),(7),(8)], null))], null);
var actual__10163__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 5, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null)], null),(2));
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11577_11716,_STAR_parent_description_STAR__temp_val__11578_11717,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false)],null)));
var chunk__11580_11719 = null;
var count__11581_11720 = (0);
var i__11582_11721 = (0);
while(true){
if((i__11582_11721 < count__11581_11720)){
var component__10026__auto___11781 = cljs.core._nth.call(null,chunk__11580_11719,i__11582_11721);
speclj.components.install.call(null,component__10026__auto___11781,description__10025__auto____$1);


var G__11782 = seq__11579_11718;
var G__11783 = chunk__11580_11719;
var G__11784 = count__11581_11720;
var G__11785 = (i__11582_11721 + (1));
seq__11579_11718 = G__11782;
chunk__11580_11719 = G__11783;
count__11581_11720 = G__11784;
i__11582_11721 = G__11785;
continue;
} else {
var temp__5804__auto___11786 = cljs.core.seq.call(null,seq__11579_11718);
if(temp__5804__auto___11786){
var seq__11579_11787__$1 = temp__5804__auto___11786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11579_11787__$1)){
var c__5525__auto___11788 = cljs.core.chunk_first.call(null,seq__11579_11787__$1);
var G__11789 = cljs.core.chunk_rest.call(null,seq__11579_11787__$1);
var G__11790 = c__5525__auto___11788;
var G__11791 = cljs.core.count.call(null,c__5525__auto___11788);
var G__11792 = (0);
seq__11579_11718 = G__11789;
chunk__11580_11719 = G__11790;
count__11581_11720 = G__11791;
i__11582_11721 = G__11792;
continue;
} else {
var component__10026__auto___11793 = cljs.core.first.call(null,seq__11579_11787__$1);
speclj.components.install.call(null,component__10026__auto___11793,description__10025__auto____$1);


var G__11794 = cljs.core.next.call(null,seq__11579_11787__$1);
var G__11795 = null;
var G__11796 = (0);
var G__11797 = (0);
seq__11579_11718 = G__11794;
chunk__11580_11719 = G__11795;
count__11581_11720 = G__11796;
i__11582_11721 = G__11797;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11577_11716);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10025__auto____$1);
}

return description__10025__auto____$1;
})(),(function (){var description__10025__auto____$1 = speclj.components.new_description.call(null,"make-move",false,"tic-tac-toe.play-gamec-spec");
var _STAR_parent_description_STAR__orig_val__11613_11798 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11614_11799 = description__10025__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11614_11799);

try{var seq__11615_11800 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"adds data if no data exists before",((function (_STAR_parent_description_STAR__orig_val__11613_11798,_STAR_parent_description_STAR__temp_val__11614_11799,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
var board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null);
var updated_board = tic_tac_toe.boardc.update_board.call(null,(1),board);
var printables = tic_tac_toe.printablesc.get_move_printables.call(null,updated_board);
tic_tac_toe.play_gamec.make_move.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null),(1));

var expected__10162__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),printables], null)], null);
var actual__10163__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11613_11798,_STAR_parent_description_STAR__temp_val__11614_11799,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"adds data if has no id",((function (_STAR_parent_description_STAR__orig_val__11613_11798,_STAR_parent_description_STAR__temp_val__11614_11799,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
tic_tac_toe.data.data_ioc.write_db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)], null));

var board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null);
var updated_board = tic_tac_toe.boardc.update_board.call(null,(1),board);
var printables = tic_tac_toe.printablesc.get_move_printables.call(null,updated_board);
tic_tac_toe.play_gamec.make_move.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null),(1));

var expected__10162__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),printables], null)], null);
var actual__10163__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11613_11798,_STAR_parent_description_STAR__temp_val__11614_11799,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false),speclj.components.new_characteristic.call(null,"overwrites last if it does have id",((function (_STAR_parent_description_STAR__orig_val__11613_11798,_STAR_parent_description_STAR__temp_val__11614_11799,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646){
return (function (){
tic_tac_toe.data.data_ioc.write_db.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null)], null));

var board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null);
var updated_board = tic_tac_toe.boardc.update_board.call(null,(1),board);
var printables = tic_tac_toe.printablesc.get_move_printables.call(null,updated_board);
tic_tac_toe.play_gamec.make_move.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null),(1));

var expected__10162__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),printables], null)], null);
var actual__10163__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
if(cljs.core._EQ_.call(null,expected__10162__auto__,actual__10163__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11613_11798,_STAR_parent_description_STAR__temp_val__11614_11799,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__11386_11647,_STAR_parent_description_STAR__temp_val__11387_11648,description__10025__auto___11646))
,false)],null)));
var chunk__11616_11801 = null;
var count__11617_11802 = (0);
var i__11618_11803 = (0);
while(true){
if((i__11618_11803 < count__11617_11802)){
var component__10026__auto___11804 = cljs.core._nth.call(null,chunk__11616_11801,i__11618_11803);
speclj.components.install.call(null,component__10026__auto___11804,description__10025__auto____$1);


var G__11805 = seq__11615_11800;
var G__11806 = chunk__11616_11801;
var G__11807 = count__11617_11802;
var G__11808 = (i__11618_11803 + (1));
seq__11615_11800 = G__11805;
chunk__11616_11801 = G__11806;
count__11617_11802 = G__11807;
i__11618_11803 = G__11808;
continue;
} else {
var temp__5804__auto___11809 = cljs.core.seq.call(null,seq__11615_11800);
if(temp__5804__auto___11809){
var seq__11615_11810__$1 = temp__5804__auto___11809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11615_11810__$1)){
var c__5525__auto___11811 = cljs.core.chunk_first.call(null,seq__11615_11810__$1);
var G__11812 = cljs.core.chunk_rest.call(null,seq__11615_11810__$1);
var G__11813 = c__5525__auto___11811;
var G__11814 = cljs.core.count.call(null,c__5525__auto___11811);
var G__11815 = (0);
seq__11615_11800 = G__11812;
chunk__11616_11801 = G__11813;
count__11617_11802 = G__11814;
i__11618_11803 = G__11815;
continue;
} else {
var component__10026__auto___11816 = cljs.core.first.call(null,seq__11615_11810__$1);
speclj.components.install.call(null,component__10026__auto___11816,description__10025__auto____$1);


var G__11817 = cljs.core.next.call(null,seq__11615_11810__$1);
var G__11818 = null;
var G__11819 = (0);
var G__11820 = (0);
seq__11615_11800 = G__11817;
chunk__11616_11801 = G__11818;
count__11617_11802 = G__11819;
i__11618_11803 = G__11820;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11613_11798);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10025__auto____$1);
}

return description__10025__auto____$1;
})()],null)));
var chunk__11389_11650 = null;
var count__11390_11651 = (0);
var i__11391_11652 = (0);
while(true){
if((i__11391_11652 < count__11390_11651)){
var component__10026__auto___11821 = cljs.core._nth.call(null,chunk__11389_11650,i__11391_11652);
speclj.components.install.call(null,component__10026__auto___11821,description__10025__auto___11646);


var G__11822 = seq__11388_11649;
var G__11823 = chunk__11389_11650;
var G__11824 = count__11390_11651;
var G__11825 = (i__11391_11652 + (1));
seq__11388_11649 = G__11822;
chunk__11389_11650 = G__11823;
count__11390_11651 = G__11824;
i__11391_11652 = G__11825;
continue;
} else {
var temp__5804__auto___11826 = cljs.core.seq.call(null,seq__11388_11649);
if(temp__5804__auto___11826){
var seq__11388_11827__$1 = temp__5804__auto___11826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11388_11827__$1)){
var c__5525__auto___11828 = cljs.core.chunk_first.call(null,seq__11388_11827__$1);
var G__11829 = cljs.core.chunk_rest.call(null,seq__11388_11827__$1);
var G__11830 = c__5525__auto___11828;
var G__11831 = cljs.core.count.call(null,c__5525__auto___11828);
var G__11832 = (0);
seq__11388_11649 = G__11829;
chunk__11389_11650 = G__11830;
count__11390_11651 = G__11831;
i__11391_11652 = G__11832;
continue;
} else {
var component__10026__auto___11833 = cljs.core.first.call(null,seq__11388_11827__$1);
speclj.components.install.call(null,component__10026__auto___11833,description__10025__auto___11646);


var G__11834 = cljs.core.next.call(null,seq__11388_11827__$1);
var G__11835 = null;
var G__11836 = (0);
var G__11837 = (0);
seq__11388_11649 = G__11834;
chunk__11389_11650 = G__11835;
count__11390_11651 = G__11836;
i__11391_11652 = G__11837;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11386_11647);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10025__auto___11646);
}


//# sourceMappingURL=play_gamec_spec.js.map
