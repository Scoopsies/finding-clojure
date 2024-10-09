// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.board_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.board');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.corec');
goog.require('tic_tac_toe.corejs');
var description__8287__auto___11779 = speclj.components.new_description.call(null,"board",false,"tic-tac-toe.board-spec");
var _STAR_parent_description_STAR__orig_val__11651_11780 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11652_11781 = description__8287__auto___11779;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11652_11781);

try{var seq__11653_11782 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (it__8657__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__11743 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__11744 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__11744);

try{return it__8657__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__11743);
}});})(_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
),(function (){var description__8287__auto____$1 = speclj.components.new_description.call(null,"render-board",false,"tic-tac-toe.board-spec");
var _STAR_parent_description_STAR__orig_val__11745_11786 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11746_11787 = description__8287__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11746_11787);

try{var seq__11747_11788 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"should render an empty :3x3 board",((function (_STAR_parent_description_STAR__orig_val__11745_11786,_STAR_parent_description_STAR__temp_val__11746_11787,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.board.render_board.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),"X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390)], null);
}),null))));

var value__11137__auto___11792 = "#board";
var node__11138__auto___11793 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___11792);
if(cljs.core.truth_(node__11138__auto___11793)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___11792;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var value__11137__auto___11794 = ".board3x3";
var node__11138__auto___11795 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___11794);
if(cljs.core.truth_(node__11138__auto___11795)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___11794;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var expected__8424__auto___11796 = cljs.core.mapv.call(null,cljs.core.str,cljs.core.range.call(null,(1),(10)));
var actual__8425__auto___11797 = c3kit.wire.spec_helper.select_map.call(null,c3kit.wire.spec_helper.text,".cell3x3");
if(cljs.core._EQ_.call(null,expected__8424__auto___11796,actual__8425__auto___11797)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___11796;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___11797;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto__ = (9);
var actual__8425__auto__ = cljs.core.count.call(null,c3kit.wire.spec_helper.select_all.call(null,".cell3x3"));
if(cljs.core._EQ_.call(null,expected__8424__auto__,actual__8425__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11745_11786,_STAR_parent_description_STAR__temp_val__11746_11787,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
,false),speclj.components.new_characteristic.call(null,"should render an empty :4x4 board",((function (_STAR_parent_description_STAR__orig_val__11745_11786,_STAR_parent_description_STAR__temp_val__11746_11787,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.board.render_board.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),"X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390)], null);
}),null))));

var value__11137__auto___11798 = "#board";
var node__11138__auto___11799 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___11798);
if(cljs.core.truth_(node__11138__auto___11799)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___11798;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var value__11137__auto___11800 = ".board4x4";
var node__11138__auto___11801 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___11800);
if(cljs.core.truth_(node__11138__auto___11801)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___11800;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var expected__8424__auto___11802 = cljs.core.mapv.call(null,cljs.core.str,cljs.core.range.call(null,(1),(17)));
var actual__8425__auto___11803 = c3kit.wire.spec_helper.select_map.call(null,c3kit.wire.spec_helper.text,".cell4x4");
if(cljs.core._EQ_.call(null,expected__8424__auto___11802,actual__8425__auto___11803)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___11802;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___11803;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto__ = (16);
var actual__8425__auto__ = cljs.core.count.call(null,c3kit.wire.spec_helper.select_all.call(null,".cell4x4"));
if(cljs.core._EQ_.call(null,expected__8424__auto__,actual__8425__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11745_11786,_STAR_parent_description_STAR__temp_val__11746_11787,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
,false),speclj.components.new_characteristic.call(null,"should render an empty :3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__11745_11786,_STAR_parent_description_STAR__temp_val__11746_11787,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.board.render_board.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),"X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390)], null);
}),null))));

var value__11137__auto___11804 = "#board";
var node__11138__auto___11805 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___11804);
if(cljs.core.truth_(node__11138__auto___11805)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___11804;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var value__11137__auto___11806 = ".board3x3x3";
var node__11138__auto___11807 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___11806);
if(cljs.core.truth_(node__11138__auto___11807)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___11806;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var expected__8424__auto___11808 = cljs.core.mapv.call(null,cljs.core.str,cljs.core.range.call(null,(1),(28)));
var actual__8425__auto___11809 = c3kit.wire.spec_helper.select_map.call(null,c3kit.wire.spec_helper.text,".cell3x3x3");
if(cljs.core._EQ_.call(null,expected__8424__auto___11808,actual__8425__auto___11809)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___11808;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___11809;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto__ = (27);
var actual__8425__auto__ = cljs.core.count.call(null,c3kit.wire.spec_helper.select_all.call(null,".cell3x3x3"));
if(cljs.core._EQ_.call(null,expected__8424__auto__,actual__8425__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11745_11786,_STAR_parent_description_STAR__temp_val__11746_11787,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
,false),speclj.components.new_characteristic.call(null,"should render occupied values on a board",((function (_STAR_parent_description_STAR__orig_val__11745_11786,_STAR_parent_description_STAR__temp_val__11746_11787,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.board.render_board.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"O",(3),"X","O",(6),(7),(8)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),"X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390)], null);
}),null))));

var expected__8424__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","2","O","4","X","O","7","8","9"], null);
var actual__8425__auto__ = c3kit.wire.spec_helper.select_map.call(null,c3kit.wire.spec_helper.text,".cell3x3");
if(cljs.core._EQ_.call(null,expected__8424__auto__,actual__8425__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11745_11786,_STAR_parent_description_STAR__temp_val__11746_11787,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
,false)],null)));
var chunk__11748_11789 = null;
var count__11749_11790 = (0);
var i__11750_11791 = (0);
while(true){
if((i__11750_11791 < count__11749_11790)){
var component__8288__auto___11810 = cljs.core._nth.call(null,chunk__11748_11789,i__11750_11791);
speclj.components.install.call(null,component__8288__auto___11810,description__8287__auto____$1);


var G__11811 = seq__11747_11788;
var G__11812 = chunk__11748_11789;
var G__11813 = count__11749_11790;
var G__11814 = (i__11750_11791 + (1));
seq__11747_11788 = G__11811;
chunk__11748_11789 = G__11812;
count__11749_11790 = G__11813;
i__11750_11791 = G__11814;
continue;
} else {
var temp__5804__auto___11815 = cljs.core.seq.call(null,seq__11747_11788);
if(temp__5804__auto___11815){
var seq__11747_11816__$1 = temp__5804__auto___11815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11747_11816__$1)){
var c__5525__auto___11817 = cljs.core.chunk_first.call(null,seq__11747_11816__$1);
var G__11818 = cljs.core.chunk_rest.call(null,seq__11747_11816__$1);
var G__11819 = c__5525__auto___11817;
var G__11820 = cljs.core.count.call(null,c__5525__auto___11817);
var G__11821 = (0);
seq__11747_11788 = G__11818;
chunk__11748_11789 = G__11819;
count__11749_11790 = G__11820;
i__11750_11791 = G__11821;
continue;
} else {
var component__8288__auto___11822 = cljs.core.first.call(null,seq__11747_11816__$1);
speclj.components.install.call(null,component__8288__auto___11822,description__8287__auto____$1);


var G__11823 = cljs.core.next.call(null,seq__11747_11816__$1);
var G__11824 = null;
var G__11825 = (0);
var G__11826 = (0);
seq__11747_11788 = G__11823;
chunk__11748_11789 = G__11824;
count__11749_11790 = G__11825;
i__11750_11791 = G__11826;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11745_11786);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8287__auto____$1);
}

return description__8287__auto____$1;
})(),(function (){var description__8287__auto____$1 = speclj.components.new_description.call(null,"take-computer-turn",false,"tic-tac-toe.board-spec");
var _STAR_parent_description_STAR__orig_val__11751_11827 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11752_11828 = description__8287__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11752_11828);

try{var seq__11753_11829 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"invokes js/setTimeOut for 1000 seconds",((function (_STAR_parent_description_STAR__orig_val__11751_11827,_STAR_parent_description_STAR__temp_val__11752_11828,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (){
var setTimeout_orig_val__11763 = setTimeout;
var update_state_orig_val__11764 = tic_tac_toe.corejs.update_state;
var pick_move_orig_val__11765 = tic_tac_toe.moves.corec.pick_move;
var setTimeout_temp_val__11766 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"setTimeout","setTimeout",2080423150),cljs.core.PersistentArrayMap.EMPTY);
var update_state_temp_val__11767 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update-state","update-state",-653396259),cljs.core.PersistentArrayMap.EMPTY);
var pick_move_temp_val__11768 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"pick-move","pick-move",-1600012788),cljs.core.PersistentArrayMap.EMPTY);
(setTimeout = setTimeout_temp_val__11766);

(tic_tac_toe.corejs.update_state = update_state_temp_val__11767);

(tic_tac_toe.moves.corec.pick_move = pick_move_temp_val__11768);

try{tic_tac_toe.board.take_computer_turn.call(null,(new cljs.core.Delay((function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),null)));

var name__8671__auto___11833 = new cljs.core.Keyword(null,"setTimeout","setTimeout",2080423150);
var options__8672__auto___11834 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(1000)], null)], null);
var invocations__8673__auto___11835 = speclj.stub.invocations_of.call(null,name__8671__auto___11833);
var times__8674__auto___11836 = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8672__auto___11834);
var times_QMARK___8675__auto___11837 = typeof times__8674__auto___11836 === 'number';
var check_params_QMARK___8676__auto___11838 = cljs.core.contains_QMARK_.call(null,options__8672__auto___11834,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8677__auto___11839 = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8672__auto___11834);
var with__8677__auto___11840__$1 = (((with__8677__auto___11839 == null))?cljs.core.PersistentVector.EMPTY:with__8677__auto___11839);
var invocations_str__8678__auto___11841 = (function (p1__8668__8679__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8668__8679__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8675__auto___11837) && (check_params_QMARK___8676__auto___11838))){
var matching_invocations__8680__auto___11842 = cljs.core.filter.call(null,(function (p1__8669__8681__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8677__auto___11840__$1,p1__8669__8681__auto__);
}),invocations__8673__auto___11835);
var matching_count__8682__auto___11843 = cljs.core.count.call(null,matching_invocations__8680__auto___11842);
if(cljs.core._EQ_.call(null,times__8674__auto___11836,matching_count__8682__auto___11843)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8674__auto___11836)," ",invocations_str__8678__auto___11841.call(null,times__8674__auto___11836)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto___11833)," with ",cljs.core.pr_str.call(null,with__8677__auto___11840__$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8682__auto___11843)," ",invocations_str__8678__auto___11841.call(null,matching_count__8682__auto___11843)].join('')));
}
} else {
if(check_params_QMARK___8676__auto___11838){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8670__8683__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8677__auto___11840__$1,p1__8670__8683__auto__);
}),invocations__8673__auto___11835))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto___11833)," with ",cljs.core.pr_str.call(null,with__8677__auto___11840__$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8673__auto___11835)].join('')));
}
} else {
if(times_QMARK___8675__auto___11837){
if(cljs.core._EQ_.call(null,times__8674__auto___11836,cljs.core.count.call(null,invocations__8673__auto___11835))){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8674__auto___11836)," ",invocations_str__8678__auto___11841.call(null,times__8674__auto___11836)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto___11833),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8673__auto___11835))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8673__auto___11835)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto___11833),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8673__auto___11835))].join('')));
}

}
}
}

var name__8671__auto__ = new cljs.core.Keyword(null,"update-state","update-state",-653396259);
var options__8672__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8673__auto__ = speclj.stub.invocations_of.call(null,name__8671__auto__);
var times__8674__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8672__auto__);
var times_QMARK___8675__auto__ = typeof times__8674__auto__ === 'number';
var check_params_QMARK___8676__auto__ = cljs.core.contains_QMARK_.call(null,options__8672__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8677__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8672__auto__);
var with__8677__auto____$1 = (((with__8677__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8677__auto__);
var invocations_str__8678__auto__ = (function (p1__8668__8679__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8668__8679__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8675__auto__) && (check_params_QMARK___8676__auto__))){
var matching_invocations__8680__auto__ = cljs.core.filter.call(null,(function (p1__8669__8681__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8677__auto____$1,p1__8669__8681__auto__);
}),invocations__8673__auto__);
var matching_count__8682__auto__ = cljs.core.count.call(null,matching_invocations__8680__auto__);
if(cljs.core._EQ_.call(null,times__8674__auto__,matching_count__8682__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8674__auto__)," ",invocations_str__8678__auto__.call(null,times__8674__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto__)," with ",cljs.core.pr_str.call(null,with__8677__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8682__auto__)," ",invocations_str__8678__auto__.call(null,matching_count__8682__auto__)].join('')));
}
} else {
if(check_params_QMARK___8676__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8670__8683__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8677__auto____$1,p1__8670__8683__auto__);
}),invocations__8673__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto__)," with ",cljs.core.pr_str.call(null,with__8677__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8673__auto__)].join('')));
}
} else {
if(times_QMARK___8675__auto__){
if(cljs.core._EQ_.call(null,times__8674__auto__,cljs.core.count.call(null,invocations__8673__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8674__auto__)," ",invocations_str__8678__auto__.call(null,times__8674__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8673__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8673__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8673__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.moves.corec.pick_move = pick_move_orig_val__11765);

(tic_tac_toe.corejs.update_state = update_state_orig_val__11764);

(setTimeout = setTimeout_orig_val__11763);
}});})(_STAR_parent_description_STAR__orig_val__11751_11827,_STAR_parent_description_STAR__temp_val__11752_11828,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
,false)],null)));
var chunk__11754_11830 = null;
var count__11755_11831 = (0);
var i__11756_11832 = (0);
while(true){
if((i__11756_11832 < count__11755_11831)){
var component__8288__auto___11844 = cljs.core._nth.call(null,chunk__11754_11830,i__11756_11832);
speclj.components.install.call(null,component__8288__auto___11844,description__8287__auto____$1);


var G__11845 = seq__11753_11829;
var G__11846 = chunk__11754_11830;
var G__11847 = count__11755_11831;
var G__11848 = (i__11756_11832 + (1));
seq__11753_11829 = G__11845;
chunk__11754_11830 = G__11846;
count__11755_11831 = G__11847;
i__11756_11832 = G__11848;
continue;
} else {
var temp__5804__auto___11849 = cljs.core.seq.call(null,seq__11753_11829);
if(temp__5804__auto___11849){
var seq__11753_11850__$1 = temp__5804__auto___11849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11753_11850__$1)){
var c__5525__auto___11851 = cljs.core.chunk_first.call(null,seq__11753_11850__$1);
var G__11852 = cljs.core.chunk_rest.call(null,seq__11753_11850__$1);
var G__11853 = c__5525__auto___11851;
var G__11854 = cljs.core.count.call(null,c__5525__auto___11851);
var G__11855 = (0);
seq__11753_11829 = G__11852;
chunk__11754_11830 = G__11853;
count__11755_11831 = G__11854;
i__11756_11832 = G__11855;
continue;
} else {
var component__8288__auto___11856 = cljs.core.first.call(null,seq__11753_11850__$1);
speclj.components.install.call(null,component__8288__auto___11856,description__8287__auto____$1);


var G__11857 = cljs.core.next.call(null,seq__11753_11850__$1);
var G__11858 = null;
var G__11859 = (0);
var G__11860 = (0);
seq__11753_11829 = G__11857;
chunk__11754_11830 = G__11858;
count__11755_11831 = G__11859;
i__11756_11832 = G__11860;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11751_11827);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8287__auto____$1);
}

return description__8287__auto____$1;
})(),(function (){var description__8287__auto____$1 = speclj.components.new_description.call(null,"handle-click",false,"tic-tac-toe.board-spec");
var _STAR_parent_description_STAR__orig_val__11769_11861 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11770_11862 = description__8287__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11770_11862);

try{var seq__11771_11863 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil if it's the computers turn",((function (_STAR_parent_description_STAR__orig_val__11769_11861,_STAR_parent_description_STAR__temp_val__11770_11862,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (){
var expected__8424__auto__ = null;
var actual__8425__auto__ = tic_tac_toe.board.handle_click.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))], null);
}),null)),(1));
if(cljs.core._EQ_.call(null,expected__8424__auto__,actual__8425__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11769_11861,_STAR_parent_description_STAR__temp_val__11770_11862,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
,false),speclj.components.new_characteristic.call(null,"returns nil if the index has already been selected",((function (_STAR_parent_description_STAR__orig_val__11769_11861,_STAR_parent_description_STAR__temp_val__11770_11862,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (){
var expected__8424__auto__ = null;
var actual__8425__auto__ = tic_tac_toe.board.handle_click.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null);
}),null)),(0));
if(cljs.core._EQ_.call(null,expected__8424__auto__,actual__8425__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11769_11861,_STAR_parent_description_STAR__temp_val__11770_11862,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
,false),speclj.components.new_characteristic.call(null,"invokes update-state if human turn and valid move index",((function (_STAR_parent_description_STAR__orig_val__11769_11861,_STAR_parent_description_STAR__temp_val__11770_11862,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779){
return (function (){
var update_state_orig_val__11777 = tic_tac_toe.corejs.update_state;
var update_state_temp_val__11778 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update-state","update-state",-653396259),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.corejs.update_state = update_state_temp_val__11778);

try{tic_tac_toe.board.handle_click.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))], null);
}),null)),(1));

var name__8671__auto__ = new cljs.core.Keyword(null,"update-state","update-state",-653396259);
var options__8672__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8673__auto__ = speclj.stub.invocations_of.call(null,name__8671__auto__);
var times__8674__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8672__auto__);
var times_QMARK___8675__auto__ = typeof times__8674__auto__ === 'number';
var check_params_QMARK___8676__auto__ = cljs.core.contains_QMARK_.call(null,options__8672__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8677__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8672__auto__);
var with__8677__auto____$1 = (((with__8677__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8677__auto__);
var invocations_str__8678__auto__ = (function (p1__8668__8679__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8668__8679__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8675__auto__) && (check_params_QMARK___8676__auto__))){
var matching_invocations__8680__auto__ = cljs.core.filter.call(null,(function (p1__8669__8681__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8677__auto____$1,p1__8669__8681__auto__);
}),invocations__8673__auto__);
var matching_count__8682__auto__ = cljs.core.count.call(null,matching_invocations__8680__auto__);
if(cljs.core._EQ_.call(null,times__8674__auto__,matching_count__8682__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8674__auto__)," ",invocations_str__8678__auto__.call(null,times__8674__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto__)," with ",cljs.core.pr_str.call(null,with__8677__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8682__auto__)," ",invocations_str__8678__auto__.call(null,matching_count__8682__auto__)].join('')));
}
} else {
if(check_params_QMARK___8676__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8670__8683__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8677__auto____$1,p1__8670__8683__auto__);
}),invocations__8673__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto__)," with ",cljs.core.pr_str.call(null,with__8677__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8673__auto__)].join('')));
}
} else {
if(times_QMARK___8675__auto__){
if(cljs.core._EQ_.call(null,times__8674__auto__,cljs.core.count.call(null,invocations__8673__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8674__auto__)," ",invocations_str__8678__auto__.call(null,times__8674__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8673__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__8673__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8671__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8673__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.corejs.update_state = update_state_orig_val__11777);
}});})(_STAR_parent_description_STAR__orig_val__11769_11861,_STAR_parent_description_STAR__temp_val__11770_11862,description__8287__auto____$1,_STAR_parent_description_STAR__orig_val__11651_11780,_STAR_parent_description_STAR__temp_val__11652_11781,description__8287__auto___11779))
,false)],null)));
var chunk__11772_11864 = null;
var count__11773_11865 = (0);
var i__11774_11866 = (0);
while(true){
if((i__11774_11866 < count__11773_11865)){
var component__8288__auto___11867 = cljs.core._nth.call(null,chunk__11772_11864,i__11774_11866);
speclj.components.install.call(null,component__8288__auto___11867,description__8287__auto____$1);


var G__11868 = seq__11771_11863;
var G__11869 = chunk__11772_11864;
var G__11870 = count__11773_11865;
var G__11871 = (i__11774_11866 + (1));
seq__11771_11863 = G__11868;
chunk__11772_11864 = G__11869;
count__11773_11865 = G__11870;
i__11774_11866 = G__11871;
continue;
} else {
var temp__5804__auto___11872 = cljs.core.seq.call(null,seq__11771_11863);
if(temp__5804__auto___11872){
var seq__11771_11873__$1 = temp__5804__auto___11872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11771_11873__$1)){
var c__5525__auto___11874 = cljs.core.chunk_first.call(null,seq__11771_11873__$1);
var G__11875 = cljs.core.chunk_rest.call(null,seq__11771_11873__$1);
var G__11876 = c__5525__auto___11874;
var G__11877 = cljs.core.count.call(null,c__5525__auto___11874);
var G__11878 = (0);
seq__11771_11863 = G__11875;
chunk__11772_11864 = G__11876;
count__11773_11865 = G__11877;
i__11774_11866 = G__11878;
continue;
} else {
var component__8288__auto___11879 = cljs.core.first.call(null,seq__11771_11873__$1);
speclj.components.install.call(null,component__8288__auto___11879,description__8287__auto____$1);


var G__11880 = cljs.core.next.call(null,seq__11771_11873__$1);
var G__11881 = null;
var G__11882 = (0);
var G__11883 = (0);
seq__11771_11863 = G__11880;
chunk__11772_11864 = G__11881;
count__11773_11865 = G__11882;
i__11774_11866 = G__11883;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11769_11861);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8287__auto____$1);
}

return description__8287__auto____$1;
})()],null)));
var chunk__11654_11783 = null;
var count__11655_11784 = (0);
var i__11656_11785 = (0);
while(true){
if((i__11656_11785 < count__11655_11784)){
var component__8288__auto___11884 = cljs.core._nth.call(null,chunk__11654_11783,i__11656_11785);
speclj.components.install.call(null,component__8288__auto___11884,description__8287__auto___11779);


var G__11885 = seq__11653_11782;
var G__11886 = chunk__11654_11783;
var G__11887 = count__11655_11784;
var G__11888 = (i__11656_11785 + (1));
seq__11653_11782 = G__11885;
chunk__11654_11783 = G__11886;
count__11655_11784 = G__11887;
i__11656_11785 = G__11888;
continue;
} else {
var temp__5804__auto___11889 = cljs.core.seq.call(null,seq__11653_11782);
if(temp__5804__auto___11889){
var seq__11653_11890__$1 = temp__5804__auto___11889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11653_11890__$1)){
var c__5525__auto___11891 = cljs.core.chunk_first.call(null,seq__11653_11890__$1);
var G__11892 = cljs.core.chunk_rest.call(null,seq__11653_11890__$1);
var G__11893 = c__5525__auto___11891;
var G__11894 = cljs.core.count.call(null,c__5525__auto___11891);
var G__11895 = (0);
seq__11653_11782 = G__11892;
chunk__11654_11783 = G__11893;
count__11655_11784 = G__11894;
i__11656_11785 = G__11895;
continue;
} else {
var component__8288__auto___11896 = cljs.core.first.call(null,seq__11653_11890__$1);
speclj.components.install.call(null,component__8288__auto___11896,description__8287__auto___11779);


var G__11897 = cljs.core.next.call(null,seq__11653_11890__$1);
var G__11898 = null;
var G__11899 = (0);
var G__11900 = (0);
seq__11653_11782 = G__11897;
chunk__11654_11783 = G__11898;
count__11655_11784 = G__11899;
i__11656_11785 = G__11900;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11651_11780);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8287__auto___11779);
}


//# sourceMappingURL=board_spec.js.map
