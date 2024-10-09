// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.play_gamec_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.data.data_ioc');
goog.require('tic_tac_toe.play_gamec');
goog.require('tic_tac_toe.printablesc');
tic_tac_toe.play_gamec_spec.board_size_menu = tic_tac_toe.printablesc.get_board_size_menu.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null));
var description__7937__auto___13607 = speclj.components.new_description.call(null,"play-gamec",false,"tic-tac-toe.play-gamec-spec");
var _STAR_parent_description_STAR__orig_val__13553_13608 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13554_13609 = description__7937__auto___13607;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13554_13609);

try{var seq__13555_13610 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__13583 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__13584 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__13584);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__13583);
}});})(_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.data.data_ioc.data_store,new cljs.core.Keyword(null,"memory","memory",-1449401430));

return tic_tac_toe.data.data_ioc.write_db.call(null,cljs.core.PersistentVector.EMPTY);
});})(_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"handle-replay",false,"tic-tac-toe.play-gamec-spec");
var _STAR_parent_description_STAR__orig_val__13585_13614 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13586_13615 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13586_13615);

try{var seq__13587_13616 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns the state of the last game if selection is 1",((function (_STAR_parent_description_STAR__orig_val__13585_13614,_STAR_parent_description_STAR__temp_val__13586_13615,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.handle_continue.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"1");
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
});})(_STAR_parent_description_STAR__orig_val__13585_13614,_STAR_parent_description_STAR__temp_val__13586_13615,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"it changes last games :ui to current games :ui",((function (_STAR_parent_description_STAR__orig_val__13585_13614,_STAR_parent_description_STAR__temp_val__13586_13615,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.handle_continue.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"1");
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
});})(_STAR_parent_description_STAR__orig_val__13585_13614,_STAR_parent_description_STAR__temp_val__13586_13615,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"disassociates last-game and associates player-x printables if selection 2",((function (_STAR_parent_description_STAR__orig_val__13585_13614,_STAR_parent_description_STAR__temp_val__13586_13615,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_x_printables], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.handle_continue.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null),"2");
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
});})(_STAR_parent_description_STAR__orig_val__13585_13614,_STAR_parent_description_STAR__temp_val__13586_13615,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"returns original state if no matching selection",((function (_STAR_parent_description_STAR__orig_val__13585_13614,_STAR_parent_description_STAR__temp_val__13586_13615,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null);
var expected__8074__auto___13620 = state;
var actual__8075__auto___13621 = tic_tac_toe.play_gamec.handle_continue.call(null,state,"3");
if(cljs.core._EQ_.call(null,expected__8074__auto___13620,actual__8075__auto___13621)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___13620;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___13621;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = state;
var actual__8075__auto__ = tic_tac_toe.play_gamec.handle_continue.call(null,state,null);
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
});})(_STAR_parent_description_STAR__orig_val__13585_13614,_STAR_parent_description_STAR__temp_val__13586_13615,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false)],null)));
var chunk__13588_13617 = null;
var count__13589_13618 = (0);
var i__13590_13619 = (0);
while(true){
if((i__13590_13619 < count__13589_13618)){
var component__7938__auto___13622 = cljs.core._nth.call(null,chunk__13588_13617,i__13590_13619);
speclj.components.install.call(null,component__7938__auto___13622,description__7937__auto____$1);


var G__13623 = seq__13587_13616;
var G__13624 = chunk__13588_13617;
var G__13625 = count__13589_13618;
var G__13626 = (i__13590_13619 + (1));
seq__13587_13616 = G__13623;
chunk__13588_13617 = G__13624;
count__13589_13618 = G__13625;
i__13590_13619 = G__13626;
continue;
} else {
var temp__5804__auto___13627 = cljs.core.seq.call(null,seq__13587_13616);
if(temp__5804__auto___13627){
var seq__13587_13628__$1 = temp__5804__auto___13627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13587_13628__$1)){
var c__5525__auto___13629 = cljs.core.chunk_first.call(null,seq__13587_13628__$1);
var G__13630 = cljs.core.chunk_rest.call(null,seq__13587_13628__$1);
var G__13631 = c__5525__auto___13629;
var G__13632 = cljs.core.count.call(null,c__5525__auto___13629);
var G__13633 = (0);
seq__13587_13616 = G__13630;
chunk__13588_13617 = G__13631;
count__13589_13618 = G__13632;
i__13590_13619 = G__13633;
continue;
} else {
var component__7938__auto___13634 = cljs.core.first.call(null,seq__13587_13628__$1);
speclj.components.install.call(null,component__7938__auto___13634,description__7937__auto____$1);


var G__13635 = cljs.core.next.call(null,seq__13587_13628__$1);
var G__13636 = null;
var G__13637 = (0);
var G__13638 = (0);
seq__13587_13616 = G__13635;
chunk__13588_13617 = G__13636;
count__13589_13618 = G__13637;
i__13590_13619 = G__13638;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13585_13614);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"state-changer",false,"tic-tac-toe.play-gamec-spec");
var _STAR_parent_description_STAR__orig_val__13591_13639 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13592_13640 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13592_13640);

try{var seq__13593_13641 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,15,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"invokes handle-replay",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var handle_continue_orig_val__13599 = tic_tac_toe.play_gamec.handle_continue;
var handle_continue_temp_val__13600 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"replay","replay",-681122389),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.play_gamec.handle_continue = handle_continue_temp_val__13600);

try{tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null),"1");

var name__8321__auto__ = new cljs.core.Keyword(null,"replay","replay",-681122389);
var options__8322__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-game","last-game",1547493148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null),"1"], null)], null);
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
}finally {(tic_tac_toe.play_gamec.handle_continue = handle_continue_orig_val__13599);
}});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"X plays as a human",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.PersistentArrayMap.EMPTY,"1");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"X plays as an easy computer",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.PersistentArrayMap.EMPTY,"2");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"X plays as a medium computer",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.PersistentArrayMap.EMPTY,"3");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"X plays as a hard computer",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.PersistentArrayMap.EMPTY,"4");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"O plays as a human",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.play_gamec_spec.board_size_menu], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"1");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"O plays as an easy computer",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.play_gamec_spec.board_size_menu], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"2");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"O plays as medium computer",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.play_gamec_spec.board_size_menu], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"3");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"O plays as a hard computer",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.play_gamec_spec.board_size_menu], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"4");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"Chooses a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 6, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,cljs.core.range.call(null,(9)))], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"1");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"Chooses a 4x4 board",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 6, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(16)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,cljs.core.range.call(null,(16)))], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"2");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"Chooses a 3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 6, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(27)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,cljs.core.range.call(null,(27)))], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null),"3");
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"plays X on square 0",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 7, ["X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null))], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 4, ["X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))], null),(0));
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"plays O on square 1",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 7, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null))], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 5, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null),(1));
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"plays X on square 2",((function (_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentArrayMap(null, 7, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X",(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X",(3),(4),(5),(6),(7),(8)], null))], null);
var actual__8075__auto__ = tic_tac_toe.play_gamec.get_next_state.call(null,new cljs.core.PersistentArrayMap(null, 5, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null)], null),(2));
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
});})(_STAR_parent_description_STAR__orig_val__13591_13639,_STAR_parent_description_STAR__temp_val__13592_13640,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false)],null)));
var chunk__13594_13642 = null;
var count__13595_13643 = (0);
var i__13596_13644 = (0);
while(true){
if((i__13596_13644 < count__13595_13643)){
var component__7938__auto___13645 = cljs.core._nth.call(null,chunk__13594_13642,i__13596_13644);
speclj.components.install.call(null,component__7938__auto___13645,description__7937__auto____$1);


var G__13646 = seq__13593_13641;
var G__13647 = chunk__13594_13642;
var G__13648 = count__13595_13643;
var G__13649 = (i__13596_13644 + (1));
seq__13593_13641 = G__13646;
chunk__13594_13642 = G__13647;
count__13595_13643 = G__13648;
i__13596_13644 = G__13649;
continue;
} else {
var temp__5804__auto___13650 = cljs.core.seq.call(null,seq__13593_13641);
if(temp__5804__auto___13650){
var seq__13593_13651__$1 = temp__5804__auto___13650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13593_13651__$1)){
var c__5525__auto___13652 = cljs.core.chunk_first.call(null,seq__13593_13651__$1);
var G__13653 = cljs.core.chunk_rest.call(null,seq__13593_13651__$1);
var G__13654 = c__5525__auto___13652;
var G__13655 = cljs.core.count.call(null,c__5525__auto___13652);
var G__13656 = (0);
seq__13593_13641 = G__13653;
chunk__13594_13642 = G__13654;
count__13595_13643 = G__13655;
i__13596_13644 = G__13656;
continue;
} else {
var component__7938__auto___13657 = cljs.core.first.call(null,seq__13593_13651__$1);
speclj.components.install.call(null,component__7938__auto___13657,description__7937__auto____$1);


var G__13658 = cljs.core.next.call(null,seq__13593_13651__$1);
var G__13659 = null;
var G__13660 = (0);
var G__13661 = (0);
seq__13593_13641 = G__13658;
chunk__13594_13642 = G__13659;
count__13595_13643 = G__13660;
i__13596_13644 = G__13661;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13591_13639);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"make-move",false,"tic-tac-toe.play-gamec-spec");
var _STAR_parent_description_STAR__orig_val__13601_13662 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13602_13663 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13602_13663);

try{var seq__13603_13664 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"adds data if no data exists before",((function (_STAR_parent_description_STAR__orig_val__13601_13662,_STAR_parent_description_STAR__temp_val__13602_13663,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
var board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null);
var updated_board = tic_tac_toe.boardc.update_board.call(null,(1),board);
var printables = tic_tac_toe.printablesc.get_move_printables.call(null,updated_board);
tic_tac_toe.play_gamec.make_move.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null),(1));

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),printables], null)], null);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__13601_13662,_STAR_parent_description_STAR__temp_val__13602_13663,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"adds data if has no id",((function (_STAR_parent_description_STAR__orig_val__13601_13662,_STAR_parent_description_STAR__temp_val__13602_13663,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
tic_tac_toe.data.data_ioc.write_db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null)], null));

var board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null);
var updated_board = tic_tac_toe.boardc.update_board.call(null,(1),board);
var printables = tic_tac_toe.printablesc.get_move_printables.call(null,updated_board);
tic_tac_toe.play_gamec.make_move.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null),(1));

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),printables], null)], null);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__13601_13662,_STAR_parent_description_STAR__temp_val__13602_13663,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false),speclj.components.new_characteristic.call(null,"overwrites last if it does have id",((function (_STAR_parent_description_STAR__orig_val__13601_13662,_STAR_parent_description_STAR__temp_val__13602_13663,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607){
return (function (){
tic_tac_toe.data.data_ioc.write_db.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null)], null));

var board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null);
var updated_board = tic_tac_toe.boardc.update_board.call(null,(1),board);
var printables = tic_tac_toe.printablesc.get_move_printables.call(null,updated_board);
tic_tac_toe.play_gamec.make_move.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null),(1));

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"printables","printables",1718670765),printables], null)], null);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__13601_13662,_STAR_parent_description_STAR__temp_val__13602_13663,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13553_13608,_STAR_parent_description_STAR__temp_val__13554_13609,description__7937__auto___13607))
,false)],null)));
var chunk__13604_13665 = null;
var count__13605_13666 = (0);
var i__13606_13667 = (0);
while(true){
if((i__13606_13667 < count__13605_13666)){
var component__7938__auto___13668 = cljs.core._nth.call(null,chunk__13604_13665,i__13606_13667);
speclj.components.install.call(null,component__7938__auto___13668,description__7937__auto____$1);


var G__13669 = seq__13603_13664;
var G__13670 = chunk__13604_13665;
var G__13671 = count__13605_13666;
var G__13672 = (i__13606_13667 + (1));
seq__13603_13664 = G__13669;
chunk__13604_13665 = G__13670;
count__13605_13666 = G__13671;
i__13606_13667 = G__13672;
continue;
} else {
var temp__5804__auto___13673 = cljs.core.seq.call(null,seq__13603_13664);
if(temp__5804__auto___13673){
var seq__13603_13674__$1 = temp__5804__auto___13673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13603_13674__$1)){
var c__5525__auto___13675 = cljs.core.chunk_first.call(null,seq__13603_13674__$1);
var G__13676 = cljs.core.chunk_rest.call(null,seq__13603_13674__$1);
var G__13677 = c__5525__auto___13675;
var G__13678 = cljs.core.count.call(null,c__5525__auto___13675);
var G__13679 = (0);
seq__13603_13664 = G__13676;
chunk__13604_13665 = G__13677;
count__13605_13666 = G__13678;
i__13606_13667 = G__13679;
continue;
} else {
var component__7938__auto___13680 = cljs.core.first.call(null,seq__13603_13674__$1);
speclj.components.install.call(null,component__7938__auto___13680,description__7937__auto____$1);


var G__13681 = cljs.core.next.call(null,seq__13603_13674__$1);
var G__13682 = null;
var G__13683 = (0);
var G__13684 = (0);
seq__13603_13664 = G__13681;
chunk__13604_13665 = G__13682;
count__13605_13666 = G__13683;
i__13606_13667 = G__13684;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13601_13662);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__13556_13611 = null;
var count__13557_13612 = (0);
var i__13558_13613 = (0);
while(true){
if((i__13558_13613 < count__13557_13612)){
var component__7938__auto___13685 = cljs.core._nth.call(null,chunk__13556_13611,i__13558_13613);
speclj.components.install.call(null,component__7938__auto___13685,description__7937__auto___13607);


var G__13686 = seq__13555_13610;
var G__13687 = chunk__13556_13611;
var G__13688 = count__13557_13612;
var G__13689 = (i__13558_13613 + (1));
seq__13555_13610 = G__13686;
chunk__13556_13611 = G__13687;
count__13557_13612 = G__13688;
i__13558_13613 = G__13689;
continue;
} else {
var temp__5804__auto___13690 = cljs.core.seq.call(null,seq__13555_13610);
if(temp__5804__auto___13690){
var seq__13555_13691__$1 = temp__5804__auto___13690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13555_13691__$1)){
var c__5525__auto___13692 = cljs.core.chunk_first.call(null,seq__13555_13691__$1);
var G__13693 = cljs.core.chunk_rest.call(null,seq__13555_13691__$1);
var G__13694 = c__5525__auto___13692;
var G__13695 = cljs.core.count.call(null,c__5525__auto___13692);
var G__13696 = (0);
seq__13555_13610 = G__13693;
chunk__13556_13611 = G__13694;
count__13557_13612 = G__13695;
i__13558_13613 = G__13696;
continue;
} else {
var component__7938__auto___13697 = cljs.core.first.call(null,seq__13555_13691__$1);
speclj.components.install.call(null,component__7938__auto___13697,description__7937__auto___13607);


var G__13698 = cljs.core.next.call(null,seq__13555_13691__$1);
var G__13699 = null;
var G__13700 = (0);
var G__13701 = (0);
seq__13555_13610 = G__13698;
chunk__13556_13611 = G__13699;
count__13557_13612 = G__13700;
i__13558_13613 = G__13701;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13553_13608);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___13607);
}


//# sourceMappingURL=play_gamec_spec.js.map
