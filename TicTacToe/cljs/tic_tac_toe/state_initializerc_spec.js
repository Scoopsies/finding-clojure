// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.state_initializerc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.data.data_ioc');
goog.require('tic_tac_toe.printablesc');
goog.require('tic_tac_toe.state_initializerc');
tic_tac_toe.state_initializerc_spec.game0 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.Keyword(null,"end-game?","end-game?",-146020529),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"id","id",-1388402092),"O",new cljs.core.Keyword(null,"menu?","menu?",847361238),new cljs.core.Keyword(null,"move-order","move-order",-792510441),"X",new cljs.core.Keyword(null,"board","board",-1907017633)],[true,new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","","Play Again?","1. Yes","2. No"], null),false,new cljs.core.Keyword(null,"gui","gui",604532813),(0),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"human","human",-772334390)], null),true,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3),(4),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O",(2),"X","O",(5),"X",(7),(8)], null)]);
tic_tac_toe.state_initializerc_spec.game1 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.Keyword(null,"end-game?","end-game?",-146020529),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"id","id",-1388402092),"O",new cljs.core.Keyword(null,"menu?","menu?",847361238),new cljs.core.Keyword(null,"move-order","move-order",-792510441),"X",new cljs.core.Keyword(null,"board","board",-1907017633)],[true,new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","","Play Again?","1. Yes","2. No"], null),false,new cljs.core.Keyword(null,"gui","gui",604532813),(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"easy","easy",315769928)], null),true,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(4),(2),(8),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","O",(3),"X","O",(6),(7),"X"], null)]);
tic_tac_toe.state_initializerc_spec.game2 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.Keyword(null,"end-game?","end-game?",-146020529),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"id","id",-1388402092),"O",new cljs.core.Keyword(null,"menu?","menu?",847361238),new cljs.core.Keyword(null,"move-order","move-order",-792510441),"X",new cljs.core.Keyword(null,"board","board",-1907017633)],[true,new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","","Play Again?","1. Yes","2. No"], null),false,new cljs.core.Keyword(null,"gui","gui",604532813),(2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"human","human",-772334390)], null),true,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(1),(3),(2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X","O","O",(5),(6),(7),(8)], null)]);
tic_tac_toe.state_initializerc_spec.default_data = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.state_initializerc_spec.game0,tic_tac_toe.state_initializerc_spec.game1,tic_tac_toe.state_initializerc_spec.game2], null);
var description__7937__auto___14498 = speclj.components.new_description.call(null,"state initializer",false,"tic-tac-toe.state-initializerc-spec");
var _STAR_parent_description_STAR__orig_val__14396_14499 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14397_14500 = description__7937__auto___14498;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14397_14500);

try{var seq__14398_14501 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__14450 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__14451 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__14451);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__14450);
}});})(_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
return tic_tac_toe.data.data_ioc.write_db.call(null,tic_tac_toe.state_initializerc_spec.default_data);
});})(_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"retrieve-game",false,"tic-tac-toe.state-initializerc-spec");
var _STAR_parent_description_STAR__orig_val__14452_14505 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14453_14506 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14453_14506);

try{var seq__14454_14507 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds the game with the matching id of 0",((function (_STAR_parent_description_STAR__orig_val__14452_14505,_STAR_parent_description_STAR__temp_val__14453_14506,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var expected__8074__auto__ = tic_tac_toe.state_initializerc_spec.game0;
var actual__8075__auto__ = tic_tac_toe.state_initializerc.retrieve_game.call(null,(0));
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
});})(_STAR_parent_description_STAR__orig_val__14452_14505,_STAR_parent_description_STAR__temp_val__14453_14506,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"finds the game with the matching id of 1",((function (_STAR_parent_description_STAR__orig_val__14452_14505,_STAR_parent_description_STAR__temp_val__14453_14506,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var expected__8074__auto__ = tic_tac_toe.state_initializerc_spec.game1;
var actual__8075__auto__ = tic_tac_toe.state_initializerc.retrieve_game.call(null,(1));
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
});})(_STAR_parent_description_STAR__orig_val__14452_14505,_STAR_parent_description_STAR__temp_val__14453_14506,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false)],null)));
var chunk__14455_14508 = null;
var count__14456_14509 = (0);
var i__14457_14510 = (0);
while(true){
if((i__14457_14510 < count__14456_14509)){
var component__7938__auto___14511 = cljs.core._nth.call(null,chunk__14455_14508,i__14457_14510);
speclj.components.install.call(null,component__7938__auto___14511,description__7937__auto____$1);


var G__14512 = seq__14454_14507;
var G__14513 = chunk__14455_14508;
var G__14514 = count__14456_14509;
var G__14515 = (i__14457_14510 + (1));
seq__14454_14507 = G__14512;
chunk__14455_14508 = G__14513;
count__14456_14509 = G__14514;
i__14457_14510 = G__14515;
continue;
} else {
var temp__5804__auto___14516 = cljs.core.seq.call(null,seq__14454_14507);
if(temp__5804__auto___14516){
var seq__14454_14517__$1 = temp__5804__auto___14516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14454_14517__$1)){
var c__5525__auto___14518 = cljs.core.chunk_first.call(null,seq__14454_14517__$1);
var G__14519 = cljs.core.chunk_rest.call(null,seq__14454_14517__$1);
var G__14520 = c__5525__auto___14518;
var G__14521 = cljs.core.count.call(null,c__5525__auto___14518);
var G__14522 = (0);
seq__14454_14507 = G__14519;
chunk__14455_14508 = G__14520;
count__14456_14509 = G__14521;
i__14457_14510 = G__14522;
continue;
} else {
var component__7938__auto___14523 = cljs.core.first.call(null,seq__14454_14517__$1);
speclj.components.install.call(null,component__7938__auto___14523,description__7937__auto____$1);


var G__14524 = cljs.core.next.call(null,seq__14454_14517__$1);
var G__14525 = null;
var G__14526 = (0);
var G__14527 = (0);
seq__14454_14507 = G__14524;
chunk__14455_14508 = G__14525;
count__14456_14509 = G__14526;
i__14457_14510 = G__14527;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14452_14505);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"initialize-data",false,"tic-tac-toe.state-initializerc-spec");
var _STAR_parent_description_STAR__orig_val__14458_14528 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14459_14529 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14459_14529);

try{var seq__14460_14530 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"scrubs non-essential data and generates new board for game 0",((function (_STAR_parent_description_STAR__orig_val__14458_14528,_STAR_parent_description_STAR__temp_val__14459_14529,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var expected__8074__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210),new cljs.core.Keyword(null,"ui","ui",-469653645),"O",new cljs.core.Keyword(null,"move-order","move-order",-792510441),"X",new cljs.core.Keyword(null,"board","board",-1907017633)],[false,new cljs.core.Keyword(null,"3x3","3x3",570362544),tic_tac_toe.printablesc.get_move_printables.call(null,cljs.core.range.call(null,(9))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3),(4),(6)], null),new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"replay","replay",-681122389)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"replay","replay",-681122389)], null),cljs.core.range.call(null,(9))]);
var actual__8075__auto__ = tic_tac_toe.state_initializerc.initialize_replay.call(null,(0));
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
});})(_STAR_parent_description_STAR__orig_val__14458_14528,_STAR_parent_description_STAR__temp_val__14459_14529,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"scrubs non-essential data and generates new board for game 1",((function (_STAR_parent_description_STAR__orig_val__14458_14528,_STAR_parent_description_STAR__temp_val__14459_14529,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var expected__8074__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210),new cljs.core.Keyword(null,"ui","ui",-469653645),"O",new cljs.core.Keyword(null,"move-order","move-order",-792510441),"X",new cljs.core.Keyword(null,"board","board",-1907017633)],[false,new cljs.core.Keyword(null,"3x3","3x3",570362544),tic_tac_toe.printablesc.get_move_printables.call(null,cljs.core.range.call(null,(9))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(4),(2),(8),(1)], null),new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"replay","replay",-681122389)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"replay","replay",-681122389)], null),cljs.core.range.call(null,(9))]);
var actual__8075__auto__ = tic_tac_toe.state_initializerc.initialize_replay.call(null,(1));
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
});})(_STAR_parent_description_STAR__orig_val__14458_14528,_STAR_parent_description_STAR__temp_val__14459_14529,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false)],null)));
var chunk__14461_14531 = null;
var count__14462_14532 = (0);
var i__14463_14533 = (0);
while(true){
if((i__14463_14533 < count__14462_14532)){
var component__7938__auto___14534 = cljs.core._nth.call(null,chunk__14461_14531,i__14463_14533);
speclj.components.install.call(null,component__7938__auto___14534,description__7937__auto____$1);


var G__14535 = seq__14460_14530;
var G__14536 = chunk__14461_14531;
var G__14537 = count__14462_14532;
var G__14538 = (i__14463_14533 + (1));
seq__14460_14530 = G__14535;
chunk__14461_14531 = G__14536;
count__14462_14532 = G__14537;
i__14463_14533 = G__14538;
continue;
} else {
var temp__5804__auto___14539 = cljs.core.seq.call(null,seq__14460_14530);
if(temp__5804__auto___14539){
var seq__14460_14540__$1 = temp__5804__auto___14539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14460_14540__$1)){
var c__5525__auto___14541 = cljs.core.chunk_first.call(null,seq__14460_14540__$1);
var G__14542 = cljs.core.chunk_rest.call(null,seq__14460_14540__$1);
var G__14543 = c__5525__auto___14541;
var G__14544 = cljs.core.count.call(null,c__5525__auto___14541);
var G__14545 = (0);
seq__14460_14530 = G__14542;
chunk__14461_14531 = G__14543;
count__14462_14532 = G__14544;
i__14463_14533 = G__14545;
continue;
} else {
var component__7938__auto___14546 = cljs.core.first.call(null,seq__14460_14540__$1);
speclj.components.install.call(null,component__7938__auto___14546,description__7937__auto____$1);


var G__14547 = cljs.core.next.call(null,seq__14460_14540__$1);
var G__14548 = null;
var G__14549 = (0);
var G__14550 = (0);
seq__14460_14530 = G__14547;
chunk__14461_14531 = G__14548;
count__14462_14532 = G__14549;
i__14463_14533 = G__14550;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14458_14528);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"->initial-state",false,"tic-tac-toe.state-initializerc-spec");
var _STAR_parent_description_STAR__orig_val__14464_14551 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14465_14552 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14465_14552);

try{var seq__14466_14553 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"invokes initialize-data with id if :replay? true",((function (_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var initialize_replay_orig_val__14474 = tic_tac_toe.state_initializerc.initialize_replay;
var initialize_replay_temp_val__14475 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.state_initializerc.initialize_replay = initialize_replay_temp_val__14475);

try{tic_tac_toe.state_initializerc.__GT_initial_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"replay?","replay?",1482446367),true,new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null));

var name__8321__auto__ = new cljs.core.Keyword(null,"initialize","initialize",609952913);
var options__8322__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null);
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
}finally {(tic_tac_toe.state_initializerc.initialize_replay = initialize_replay_orig_val__14474);
}});})(_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"invokes handle-last-game if no :replay?",((function (_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var pull_last_db_orig_val__14476 = tic_tac_toe.data.data_ioc.pull_last_db;
var pull_last_db_temp_val__14477 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"pull","pull",-860544805),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.data.data_ioc.pull_last_db = pull_last_db_temp_val__14477);

try{tic_tac_toe.state_initializerc.__GT_initial_state.call(null,cljs.core.PersistentArrayMap.EMPTY);

var name__8321__auto__ = new cljs.core.Keyword(null,"pull","pull",-860544805);
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
}finally {(tic_tac_toe.data.data_ioc.pull_last_db = pull_last_db_orig_val__14476);
}});})(_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"assigns previous game printables if last-game unfinished",((function (_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var last_game = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false], null);
var result_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.continue_printables,new cljs.core.Keyword(null,"last-game","last-game",1547493148),last_game,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false], null);
tic_tac_toe.data.data_ioc.write_db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_game], null));

var expected__8074__auto__ = result_state;
var actual__8075__auto__ = tic_tac_toe.state_initializerc.__GT_initial_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null));
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
});})(_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"assigns player-x printables if last-game was finished",((function (_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var last_game = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true], null);
var result_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_x_printables,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false], null);
tic_tac_toe.data.data_ioc.write_db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_game], null));

var expected__8074__auto__ = result_state;
var actual__8075__auto__ = tic_tac_toe.state_initializerc.__GT_initial_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null));
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
});})(_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"assigns player-x printables if no last game",((function (_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var result_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_x_printables,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false], null);
tic_tac_toe.data.data_ioc.write_db.call(null,cljs.core.PersistentVector.EMPTY);

var expected__8074__auto__ = result_state;
var actual__8075__auto__ = tic_tac_toe.state_initializerc.__GT_initial_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null));
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
});})(_STAR_parent_description_STAR__orig_val__14464_14551,_STAR_parent_description_STAR__temp_val__14465_14552,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false)],null)));
var chunk__14467_14554 = null;
var count__14468_14555 = (0);
var i__14469_14556 = (0);
while(true){
if((i__14469_14556 < count__14468_14555)){
var component__7938__auto___14557 = cljs.core._nth.call(null,chunk__14467_14554,i__14469_14556);
speclj.components.install.call(null,component__7938__auto___14557,description__7937__auto____$1);


var G__14558 = seq__14466_14553;
var G__14559 = chunk__14467_14554;
var G__14560 = count__14468_14555;
var G__14561 = (i__14469_14556 + (1));
seq__14466_14553 = G__14558;
chunk__14467_14554 = G__14559;
count__14468_14555 = G__14560;
i__14469_14556 = G__14561;
continue;
} else {
var temp__5804__auto___14562 = cljs.core.seq.call(null,seq__14466_14553);
if(temp__5804__auto___14562){
var seq__14466_14563__$1 = temp__5804__auto___14562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14466_14563__$1)){
var c__5525__auto___14564 = cljs.core.chunk_first.call(null,seq__14466_14563__$1);
var G__14565 = cljs.core.chunk_rest.call(null,seq__14466_14563__$1);
var G__14566 = c__5525__auto___14564;
var G__14567 = cljs.core.count.call(null,c__5525__auto___14564);
var G__14568 = (0);
seq__14466_14553 = G__14565;
chunk__14467_14554 = G__14566;
count__14468_14555 = G__14567;
i__14469_14556 = G__14568;
continue;
} else {
var component__7938__auto___14569 = cljs.core.first.call(null,seq__14466_14563__$1);
speclj.components.install.call(null,component__7938__auto___14569,description__7937__auto____$1);


var G__14570 = cljs.core.next.call(null,seq__14466_14563__$1);
var G__14571 = null;
var G__14572 = (0);
var G__14573 = (0);
seq__14466_14553 = G__14570;
chunk__14467_14554 = G__14571;
count__14468_14555 = G__14572;
i__14469_14556 = G__14573;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14464_14551);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"contains-ui?",false,"tic-tac-toe.state-initializerc-spec");
var _STAR_parent_description_STAR__orig_val__14478_14574 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14479_14575 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14479_14575);

try{var seq__14480_14576 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil if it doesn't contain anything",((function (_STAR_parent_description_STAR__orig_val__14478_14574,_STAR_parent_description_STAR__temp_val__14479_14575,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var temp__5804__auto__ = tic_tac_toe.state_initializerc.contains_ui_QMARK_.call(null,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__14478_14574,_STAR_parent_description_STAR__temp_val__14479_14575,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"returns true if it contains --tui",((function (_STAR_parent_description_STAR__orig_val__14478_14574,_STAR_parent_description_STAR__temp_val__14479_14575,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var value__8062__auto__ = tic_tac_toe.state_initializerc.contains_ui_QMARK_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--tui"], null));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14478_14574,_STAR_parent_description_STAR__temp_val__14479_14575,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"returns true if it contains --gui",((function (_STAR_parent_description_STAR__orig_val__14478_14574,_STAR_parent_description_STAR__temp_val__14479_14575,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
var value__8062__auto__ = tic_tac_toe.state_initializerc.contains_ui_QMARK_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14478_14574,_STAR_parent_description_STAR__temp_val__14479_14575,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false)],null)));
var chunk__14481_14577 = null;
var count__14482_14578 = (0);
var i__14483_14579 = (0);
while(true){
if((i__14483_14579 < count__14482_14578)){
var component__7938__auto___14580 = cljs.core._nth.call(null,chunk__14481_14577,i__14483_14579);
speclj.components.install.call(null,component__7938__auto___14580,description__7937__auto____$1);


var G__14581 = seq__14480_14576;
var G__14582 = chunk__14481_14577;
var G__14583 = count__14482_14578;
var G__14584 = (i__14483_14579 + (1));
seq__14480_14576 = G__14581;
chunk__14481_14577 = G__14582;
count__14482_14578 = G__14583;
i__14483_14579 = G__14584;
continue;
} else {
var temp__5804__auto___14585 = cljs.core.seq.call(null,seq__14480_14576);
if(temp__5804__auto___14585){
var seq__14480_14586__$1 = temp__5804__auto___14585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14480_14586__$1)){
var c__5525__auto___14587 = cljs.core.chunk_first.call(null,seq__14480_14586__$1);
var G__14588 = cljs.core.chunk_rest.call(null,seq__14480_14586__$1);
var G__14589 = c__5525__auto___14587;
var G__14590 = cljs.core.count.call(null,c__5525__auto___14587);
var G__14591 = (0);
seq__14480_14576 = G__14588;
chunk__14481_14577 = G__14589;
count__14482_14578 = G__14590;
i__14483_14579 = G__14591;
continue;
} else {
var component__7938__auto___14592 = cljs.core.first.call(null,seq__14480_14586__$1);
speclj.components.install.call(null,component__7938__auto___14592,description__7937__auto____$1);


var G__14593 = cljs.core.next.call(null,seq__14480_14586__$1);
var G__14594 = null;
var G__14595 = (0);
var G__14596 = (0);
seq__14480_14576 = G__14593;
chunk__14481_14577 = G__14594;
count__14482_14578 = G__14595;
i__14483_14579 = G__14596;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14478_14574);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"parse-args",false,"tic-tac-toe.state-initializerc-spec");
var _STAR_parent_description_STAR__orig_val__14484_14597 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14485_14598 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14485_14598);

try{var seq__14486_14599 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (it__7999__auto__){
var __GT_initial_state_orig_val__14494 = tic_tac_toe.state_initializerc.__GT_initial_state;
var __GT_initial_state_temp_val__14495 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.state_initializerc.__GT_initial_state = __GT_initial_state_temp_val__14495);

try{return it__7999__auto__.call(null);
}finally {(tic_tac_toe.state_initializerc.__GT_initial_state = __GT_initial_state_orig_val__14494);
}});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
),speclj.components.new_after.call(null,((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.data.data_ioc.data_store,new cljs.core.Keyword(null,"memory","memory",-1449401430));
});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
),speclj.components.new_characteristic.call(null,"returns adds tui if --tui flag",((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
tic_tac_toe.state_initializerc.parse_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--tui"], null));

var name__8321__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806);
var options__8322__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null)], null)], null);
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
});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"returns gui if --gui flag",((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
tic_tac_toe.state_initializerc.parse_args.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui"], null));

var name__8321__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806);
var options__8322__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null)], null)], null);
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
});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"returns replay true and id of 1",((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
tic_tac_toe.state_initializerc.parse_args.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui","--game","1"], null));

var name__8321__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806);
var options__8322__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"replay?","replay?",1482446367),true,new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null)], null)], null);
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
});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"returns replay true and id of 2",((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
tic_tac_toe.state_initializerc.parse_args.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--gui","--game","2"], null));

var name__8321__auto__ = new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806);
var options__8322__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"replay?","replay?",1482446367),true,new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null)], null)], null);
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
});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"throws an error if argument after game isn't a number",((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
try{tic_tac_toe.state_initializerc.parse_args.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--tui","--game","four"], null));

throw (function (){var expected_name__8256__auto__ = speclj.platform.type_name.call(null,speclj.platform.throwable);
var expected_gaps__8257__auto__ = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,expected_name__8256__auto__)," "));
var actual_string__8258__auto__ = (function (){var temp__5802__auto__ = null;
if(cljs.core.truth_(temp__5802__auto__)){
var actual__8259__auto__ = temp__5802__auto__;
return cljs.core.pr_str.call(null,actual__8259__auto__);
} else {
return "<nothing thrown>";
}
})();
return (new speclj.platform.SpecFailure(["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_name__8256__auto__)," thrown from: ",cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("sut","parse-args","sut/parse-args",-726505125,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--tui","--game","four"], null))),speclj.platform.endl,"         ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_gaps__8257__auto__),"     but got: ",actual_string__8258__auto__].join('')));
})();
}catch (e14496){var e__8265__auto__ = e14496;
if(speclj.platform.failure_QMARK_.call(null,e__8265__auto__)){
throw e__8265__auto__;
} else {
if((!((e__8265__auto__ instanceof speclj.platform.throwable)))){
throw (function (){var expected_name__8256__auto__ = speclj.platform.type_name.call(null,speclj.platform.throwable);
var expected_gaps__8257__auto__ = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,expected_name__8256__auto__)," "));
var actual_string__8258__auto__ = (function (){var temp__5802__auto__ = e__8265__auto__;
if(cljs.core.truth_(temp__5802__auto__)){
var actual__8259__auto__ = temp__5802__auto__;
return cljs.core.pr_str.call(null,actual__8259__auto__);
} else {
return "<nothing thrown>";
}
})();
return (new speclj.platform.SpecFailure(["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_name__8256__auto__)," thrown from: ",cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("sut","parse-args","sut/parse-args",-726505125,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--tui","--game","four"], null))),speclj.platform.endl,"         ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_gaps__8257__auto__),"     but got: ",actual_string__8258__auto__].join('')));
})();
} else {
return e__8265__auto__;

}
}
}});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"throws an error if no number after game",((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
try{tic_tac_toe.state_initializerc.parse_args.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--tui","--game"], null));

throw (function (){var expected_name__8256__auto__ = speclj.platform.type_name.call(null,speclj.platform.throwable);
var expected_gaps__8257__auto__ = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,expected_name__8256__auto__)," "));
var actual_string__8258__auto__ = (function (){var temp__5802__auto__ = null;
if(cljs.core.truth_(temp__5802__auto__)){
var actual__8259__auto__ = temp__5802__auto__;
return cljs.core.pr_str.call(null,actual__8259__auto__);
} else {
return "<nothing thrown>";
}
})();
return (new speclj.platform.SpecFailure(["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_name__8256__auto__)," thrown from: ",cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("sut","parse-args","sut/parse-args",-726505125,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--tui","--game"], null))),speclj.platform.endl,"         ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_gaps__8257__auto__),"     but got: ",actual_string__8258__auto__].join('')));
})();
}catch (e14497){var e__8265__auto__ = e14497;
if(speclj.platform.failure_QMARK_.call(null,e__8265__auto__)){
throw e__8265__auto__;
} else {
if((!((e__8265__auto__ instanceof speclj.platform.throwable)))){
throw (function (){var expected_name__8256__auto__ = speclj.platform.type_name.call(null,speclj.platform.throwable);
var expected_gaps__8257__auto__ = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,expected_name__8256__auto__)," "));
var actual_string__8258__auto__ = (function (){var temp__5802__auto__ = e__8265__auto__;
if(cljs.core.truth_(temp__5802__auto__)){
var actual__8259__auto__ = temp__5802__auto__;
return cljs.core.pr_str.call(null,actual__8259__auto__);
} else {
return "<nothing thrown>";
}
})();
return (new speclj.platform.SpecFailure(["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_name__8256__auto__)," thrown from: ",cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("sut","parse-args","sut/parse-args",-726505125,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--tui","--game"], null))),speclj.platform.endl,"         ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_gaps__8257__auto__),"     but got: ",actual_string__8258__auto__].join('')));
})();
} else {
return e__8265__auto__;

}
}
}});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"updates data-store to :edn if --edndb flag",((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
tic_tac_toe.state_initializerc.parse_args.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--edndb","--tui"], null));

var expected__8074__auto__ = new cljs.core.Keyword(null,"edn","edn",1317840885);
var actual__8075__auto__ = cljs.core.deref.call(null,tic_tac_toe.data.data_ioc.data_store);
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
});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false),speclj.components.new_characteristic.call(null,"updates data-store to :psql if --sqldb flag",((function (_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498){
return (function (){
tic_tac_toe.state_initializerc.parse_args.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--sqldb","--tui"], null));

var expected__8074__auto__ = new cljs.core.Keyword(null,"psql","psql",-591812834);
var actual__8075__auto__ = cljs.core.deref.call(null,tic_tac_toe.data.data_ioc.data_store);
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
});})(_STAR_parent_description_STAR__orig_val__14484_14597,_STAR_parent_description_STAR__temp_val__14485_14598,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__14396_14499,_STAR_parent_description_STAR__temp_val__14397_14500,description__7937__auto___14498))
,false)],null)));
var chunk__14487_14600 = null;
var count__14488_14601 = (0);
var i__14489_14602 = (0);
while(true){
if((i__14489_14602 < count__14488_14601)){
var component__7938__auto___14603 = cljs.core._nth.call(null,chunk__14487_14600,i__14489_14602);
speclj.components.install.call(null,component__7938__auto___14603,description__7937__auto____$1);


var G__14604 = seq__14486_14599;
var G__14605 = chunk__14487_14600;
var G__14606 = count__14488_14601;
var G__14607 = (i__14489_14602 + (1));
seq__14486_14599 = G__14604;
chunk__14487_14600 = G__14605;
count__14488_14601 = G__14606;
i__14489_14602 = G__14607;
continue;
} else {
var temp__5804__auto___14608 = cljs.core.seq.call(null,seq__14486_14599);
if(temp__5804__auto___14608){
var seq__14486_14609__$1 = temp__5804__auto___14608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14486_14609__$1)){
var c__5525__auto___14610 = cljs.core.chunk_first.call(null,seq__14486_14609__$1);
var G__14611 = cljs.core.chunk_rest.call(null,seq__14486_14609__$1);
var G__14612 = c__5525__auto___14610;
var G__14613 = cljs.core.count.call(null,c__5525__auto___14610);
var G__14614 = (0);
seq__14486_14599 = G__14611;
chunk__14487_14600 = G__14612;
count__14488_14601 = G__14613;
i__14489_14602 = G__14614;
continue;
} else {
var component__7938__auto___14615 = cljs.core.first.call(null,seq__14486_14609__$1);
speclj.components.install.call(null,component__7938__auto___14615,description__7937__auto____$1);


var G__14616 = cljs.core.next.call(null,seq__14486_14609__$1);
var G__14617 = null;
var G__14618 = (0);
var G__14619 = (0);
seq__14486_14599 = G__14616;
chunk__14487_14600 = G__14617;
count__14488_14601 = G__14618;
i__14489_14602 = G__14619;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14484_14597);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__14399_14502 = null;
var count__14400_14503 = (0);
var i__14401_14504 = (0);
while(true){
if((i__14401_14504 < count__14400_14503)){
var component__7938__auto___14620 = cljs.core._nth.call(null,chunk__14399_14502,i__14401_14504);
speclj.components.install.call(null,component__7938__auto___14620,description__7937__auto___14498);


var G__14621 = seq__14398_14501;
var G__14622 = chunk__14399_14502;
var G__14623 = count__14400_14503;
var G__14624 = (i__14401_14504 + (1));
seq__14398_14501 = G__14621;
chunk__14399_14502 = G__14622;
count__14400_14503 = G__14623;
i__14401_14504 = G__14624;
continue;
} else {
var temp__5804__auto___14625 = cljs.core.seq.call(null,seq__14398_14501);
if(temp__5804__auto___14625){
var seq__14398_14626__$1 = temp__5804__auto___14625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14398_14626__$1)){
var c__5525__auto___14627 = cljs.core.chunk_first.call(null,seq__14398_14626__$1);
var G__14628 = cljs.core.chunk_rest.call(null,seq__14398_14626__$1);
var G__14629 = c__5525__auto___14627;
var G__14630 = cljs.core.count.call(null,c__5525__auto___14627);
var G__14631 = (0);
seq__14398_14501 = G__14628;
chunk__14399_14502 = G__14629;
count__14400_14503 = G__14630;
i__14401_14504 = G__14631;
continue;
} else {
var component__7938__auto___14632 = cljs.core.first.call(null,seq__14398_14626__$1);
speclj.components.install.call(null,component__7938__auto___14632,description__7937__auto___14498);


var G__14633 = cljs.core.next.call(null,seq__14398_14626__$1);
var G__14634 = null;
var G__14635 = (0);
var G__14636 = (0);
seq__14398_14501 = G__14633;
chunk__14399_14502 = G__14634;
count__14400_14503 = G__14635;
i__14401_14504 = G__14636;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14396_14499);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___14498);
}


//# sourceMappingURL=state_initializerc_spec.js.map
