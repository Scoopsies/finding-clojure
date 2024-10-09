// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.board_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.board');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.corec');
goog.require('tic_tac_toe.corejs');
var description__8970__auto___14764 = speclj.components.new_description.call(null,"board",false,"tic-tac-toe.board-spec");
var _STAR_parent_description_STAR__orig_val__14686_14765 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14687_14766 = description__8970__auto___14764;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14687_14766);

try{var seq__14688_14767 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (it__9340__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__14728 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__14729 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__14729);

try{return it__9340__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__14728);
}});})(_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
),(function (){var description__8970__auto____$1 = speclj.components.new_description.call(null,"render-board",false,"tic-tac-toe.board-spec");
var _STAR_parent_description_STAR__orig_val__14730_14771 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14731_14772 = description__8970__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14731_14772);

try{var seq__14732_14773 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"should render an empty :3x3 board",((function (_STAR_parent_description_STAR__orig_val__14730_14771,_STAR_parent_description_STAR__temp_val__14731_14772,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.board.render_board.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),"X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390)], null);
}),null))));

var value__9470__auto___14777 = "#board";
var node__9471__auto___14778 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___14777);
if(cljs.core.truth_(node__9471__auto___14778)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___14777;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var value__9470__auto___14779 = ".board3x3";
var node__9471__auto___14780 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___14779);
if(cljs.core.truth_(node__9471__auto___14780)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___14779;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___14781 = cljs.core.mapv.call(null,cljs.core.str,cljs.core.range.call(null,(1),(10)));
var actual__9108__auto___14782 = c3kit.wire.spec_helper.select_map.call(null,c3kit.wire.spec_helper.text,".cell3x3");
if(cljs.core._EQ_.call(null,expected__9107__auto___14781,actual__9108__auto___14782)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14781;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14782;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = (9);
var actual__9108__auto__ = cljs.core.count.call(null,c3kit.wire.spec_helper.select_all.call(null,".cell3x3"));
if(cljs.core._EQ_.call(null,expected__9107__auto__,actual__9108__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14730_14771,_STAR_parent_description_STAR__temp_val__14731_14772,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
,false),speclj.components.new_characteristic.call(null,"should render an empty :4x4 board",((function (_STAR_parent_description_STAR__orig_val__14730_14771,_STAR_parent_description_STAR__temp_val__14731_14772,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.board.render_board.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),"X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390)], null);
}),null))));

var value__9470__auto___14783 = "#board";
var node__9471__auto___14784 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___14783);
if(cljs.core.truth_(node__9471__auto___14784)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___14783;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var value__9470__auto___14785 = ".board4x4";
var node__9471__auto___14786 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___14785);
if(cljs.core.truth_(node__9471__auto___14786)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___14785;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___14787 = cljs.core.mapv.call(null,cljs.core.str,cljs.core.range.call(null,(1),(17)));
var actual__9108__auto___14788 = c3kit.wire.spec_helper.select_map.call(null,c3kit.wire.spec_helper.text,".cell4x4");
if(cljs.core._EQ_.call(null,expected__9107__auto___14787,actual__9108__auto___14788)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14787;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14788;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = (16);
var actual__9108__auto__ = cljs.core.count.call(null,c3kit.wire.spec_helper.select_all.call(null,".cell4x4"));
if(cljs.core._EQ_.call(null,expected__9107__auto__,actual__9108__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14730_14771,_STAR_parent_description_STAR__temp_val__14731_14772,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
,false),speclj.components.new_characteristic.call(null,"should render an empty :3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__14730_14771,_STAR_parent_description_STAR__temp_val__14731_14772,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.board.render_board.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),"X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390)], null);
}),null))));

var value__9470__auto___14789 = "#board";
var node__9471__auto___14790 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___14789);
if(cljs.core.truth_(node__9471__auto___14790)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___14789;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var value__9470__auto___14791 = ".board3x3x3";
var node__9471__auto___14792 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___14791);
if(cljs.core.truth_(node__9471__auto___14792)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___14791;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___14793 = cljs.core.mapv.call(null,cljs.core.str,cljs.core.range.call(null,(1),(28)));
var actual__9108__auto___14794 = c3kit.wire.spec_helper.select_map.call(null,c3kit.wire.spec_helper.text,".cell3x3x3");
if(cljs.core._EQ_.call(null,expected__9107__auto___14793,actual__9108__auto___14794)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14793;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14794;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = (27);
var actual__9108__auto__ = cljs.core.count.call(null,c3kit.wire.spec_helper.select_all.call(null,".cell3x3x3"));
if(cljs.core._EQ_.call(null,expected__9107__auto__,actual__9108__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14730_14771,_STAR_parent_description_STAR__temp_val__14731_14772,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
,false),speclj.components.new_characteristic.call(null,"should render occupied values on a board",((function (_STAR_parent_description_STAR__orig_val__14730_14771,_STAR_parent_description_STAR__temp_val__14731_14772,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.board.render_board.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"O",(3),"X","O",(6),(7),(8)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),"X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390)], null);
}),null))));

var expected__9107__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","2","O","4","X","O","7","8","9"], null);
var actual__9108__auto__ = c3kit.wire.spec_helper.select_map.call(null,c3kit.wire.spec_helper.text,".cell3x3");
if(cljs.core._EQ_.call(null,expected__9107__auto__,actual__9108__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14730_14771,_STAR_parent_description_STAR__temp_val__14731_14772,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
,false)],null)));
var chunk__14733_14774 = null;
var count__14734_14775 = (0);
var i__14735_14776 = (0);
while(true){
if((i__14735_14776 < count__14734_14775)){
var component__8971__auto___14795 = cljs.core._nth.call(null,chunk__14733_14774,i__14735_14776);
speclj.components.install.call(null,component__8971__auto___14795,description__8970__auto____$1);


var G__14796 = seq__14732_14773;
var G__14797 = chunk__14733_14774;
var G__14798 = count__14734_14775;
var G__14799 = (i__14735_14776 + (1));
seq__14732_14773 = G__14796;
chunk__14733_14774 = G__14797;
count__14734_14775 = G__14798;
i__14735_14776 = G__14799;
continue;
} else {
var temp__5804__auto___14800 = cljs.core.seq.call(null,seq__14732_14773);
if(temp__5804__auto___14800){
var seq__14732_14801__$1 = temp__5804__auto___14800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14732_14801__$1)){
var c__5525__auto___14802 = cljs.core.chunk_first.call(null,seq__14732_14801__$1);
var G__14803 = cljs.core.chunk_rest.call(null,seq__14732_14801__$1);
var G__14804 = c__5525__auto___14802;
var G__14805 = cljs.core.count.call(null,c__5525__auto___14802);
var G__14806 = (0);
seq__14732_14773 = G__14803;
chunk__14733_14774 = G__14804;
count__14734_14775 = G__14805;
i__14735_14776 = G__14806;
continue;
} else {
var component__8971__auto___14807 = cljs.core.first.call(null,seq__14732_14801__$1);
speclj.components.install.call(null,component__8971__auto___14807,description__8970__auto____$1);


var G__14808 = cljs.core.next.call(null,seq__14732_14801__$1);
var G__14809 = null;
var G__14810 = (0);
var G__14811 = (0);
seq__14732_14773 = G__14808;
chunk__14733_14774 = G__14809;
count__14734_14775 = G__14810;
i__14735_14776 = G__14811;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14730_14771);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto____$1);
}

return description__8970__auto____$1;
})(),(function (){var description__8970__auto____$1 = speclj.components.new_description.call(null,"take-computer-turn",false,"tic-tac-toe.board-spec");
var _STAR_parent_description_STAR__orig_val__14736_14812 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14737_14813 = description__8970__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14737_14813);

try{var seq__14738_14814 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"invokes set-timeout for 1000 seconds",((function (_STAR_parent_description_STAR__orig_val__14736_14812,_STAR_parent_description_STAR__temp_val__14737_14813,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (){
var set_timeout_orig_val__14748 = tic_tac_toe.board.set_timeout;
var update_state_orig_val__14749 = tic_tac_toe.corejs.update_state;
var pick_move_orig_val__14750 = tic_tac_toe.moves.corec.pick_move;
var set_timeout_temp_val__14751 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"setTimeout","setTimeout",2080423150),cljs.core.PersistentArrayMap.EMPTY);
var update_state_temp_val__14752 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update-state","update-state",-653396259),cljs.core.PersistentArrayMap.EMPTY);
var pick_move_temp_val__14753 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"pick-move","pick-move",-1600012788),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.board.set_timeout = set_timeout_temp_val__14751);

(tic_tac_toe.corejs.update_state = update_state_temp_val__14752);

(tic_tac_toe.moves.corec.pick_move = pick_move_temp_val__14753);

try{tic_tac_toe.board.take_computer_turn.call(null,(new cljs.core.Delay((function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),null)));

var name__9354__auto__ = new cljs.core.Keyword(null,"setTimeout","setTimeout",2080423150);
var options__9355__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9356__auto__ = speclj.stub.invocations_of.call(null,name__9354__auto__);
var times__9357__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9355__auto__);
var times_QMARK___9358__auto__ = typeof times__9357__auto__ === 'number';
var check_params_QMARK___9359__auto__ = cljs.core.contains_QMARK_.call(null,options__9355__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9360__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9355__auto__);
var with__9360__auto____$1 = (((with__9360__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__9360__auto__);
var invocations_str__9361__auto__ = (function (p1__9351__9362__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9351__9362__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___9358__auto__) && (check_params_QMARK___9359__auto__))){
var matching_invocations__9363__auto__ = cljs.core.filter.call(null,(function (p1__9352__9364__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9360__auto____$1,p1__9352__9364__auto__);
}),invocations__9356__auto__);
var matching_count__9365__auto__ = cljs.core.count.call(null,matching_invocations__9363__auto__);
if(cljs.core._EQ_.call(null,times__9357__auto__,matching_count__9365__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9357__auto__)," ",invocations_str__9361__auto__.call(null,times__9357__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9354__auto__)," with ",cljs.core.pr_str.call(null,with__9360__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9365__auto__)," ",invocations_str__9361__auto__.call(null,matching_count__9365__auto__)].join('')));
}
} else {
if(check_params_QMARK___9359__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9353__9366__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9360__auto____$1,p1__9353__9366__auto__);
}),invocations__9356__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9354__auto__)," with ",cljs.core.pr_str.call(null,with__9360__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9356__auto__)].join('')));
}
} else {
if(times_QMARK___9358__auto__){
if(cljs.core._EQ_.call(null,times__9357__auto__,cljs.core.count.call(null,invocations__9356__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9357__auto__)," ",invocations_str__9361__auto__.call(null,times__9357__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9354__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9356__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9356__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9354__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9356__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.moves.corec.pick_move = pick_move_orig_val__14750);

(tic_tac_toe.corejs.update_state = update_state_orig_val__14749);

(tic_tac_toe.board.set_timeout = set_timeout_orig_val__14748);
}});})(_STAR_parent_description_STAR__orig_val__14736_14812,_STAR_parent_description_STAR__temp_val__14737_14813,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
,false)],null)));
var chunk__14739_14815 = null;
var count__14740_14816 = (0);
var i__14741_14817 = (0);
while(true){
if((i__14741_14817 < count__14740_14816)){
var component__8971__auto___14818 = cljs.core._nth.call(null,chunk__14739_14815,i__14741_14817);
speclj.components.install.call(null,component__8971__auto___14818,description__8970__auto____$1);


var G__14819 = seq__14738_14814;
var G__14820 = chunk__14739_14815;
var G__14821 = count__14740_14816;
var G__14822 = (i__14741_14817 + (1));
seq__14738_14814 = G__14819;
chunk__14739_14815 = G__14820;
count__14740_14816 = G__14821;
i__14741_14817 = G__14822;
continue;
} else {
var temp__5804__auto___14823 = cljs.core.seq.call(null,seq__14738_14814);
if(temp__5804__auto___14823){
var seq__14738_14824__$1 = temp__5804__auto___14823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14738_14824__$1)){
var c__5525__auto___14825 = cljs.core.chunk_first.call(null,seq__14738_14824__$1);
var G__14826 = cljs.core.chunk_rest.call(null,seq__14738_14824__$1);
var G__14827 = c__5525__auto___14825;
var G__14828 = cljs.core.count.call(null,c__5525__auto___14825);
var G__14829 = (0);
seq__14738_14814 = G__14826;
chunk__14739_14815 = G__14827;
count__14740_14816 = G__14828;
i__14741_14817 = G__14829;
continue;
} else {
var component__8971__auto___14830 = cljs.core.first.call(null,seq__14738_14824__$1);
speclj.components.install.call(null,component__8971__auto___14830,description__8970__auto____$1);


var G__14831 = cljs.core.next.call(null,seq__14738_14824__$1);
var G__14832 = null;
var G__14833 = (0);
var G__14834 = (0);
seq__14738_14814 = G__14831;
chunk__14739_14815 = G__14832;
count__14740_14816 = G__14833;
i__14741_14817 = G__14834;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14736_14812);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto____$1);
}

return description__8970__auto____$1;
})(),(function (){var description__8970__auto____$1 = speclj.components.new_description.call(null,"handle-click",false,"tic-tac-toe.board-spec");
var _STAR_parent_description_STAR__orig_val__14754_14835 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14755_14836 = description__8970__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14755_14836);

try{var seq__14756_14837 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil if it's the computers turn",((function (_STAR_parent_description_STAR__orig_val__14754_14835,_STAR_parent_description_STAR__temp_val__14755_14836,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (){
var expected__9107__auto__ = null;
var actual__9108__auto__ = tic_tac_toe.board.handle_click.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"hard","hard",2068420191),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))], null);
}),null)),(1));
if(cljs.core._EQ_.call(null,expected__9107__auto__,actual__9108__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14754_14835,_STAR_parent_description_STAR__temp_val__14755_14836,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
,false),speclj.components.new_characteristic.call(null,"returns nil if the index has already been selected",((function (_STAR_parent_description_STAR__orig_val__14754_14835,_STAR_parent_description_STAR__temp_val__14755_14836,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (){
var expected__9107__auto__ = null;
var actual__9108__auto__ = tic_tac_toe.board.handle_click.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)], null);
}),null)),(0));
if(cljs.core._EQ_.call(null,expected__9107__auto__,actual__9108__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__14754_14835,_STAR_parent_description_STAR__temp_val__14755_14836,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
,false),speclj.components.new_characteristic.call(null,"invokes update-state if human turn and valid move index",((function (_STAR_parent_description_STAR__orig_val__14754_14835,_STAR_parent_description_STAR__temp_val__14755_14836,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764){
return (function (){
var update_state_orig_val__14762 = tic_tac_toe.corejs.update_state;
var update_state_temp_val__14763 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"update-state","update-state",-653396259),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.corejs.update_state = update_state_temp_val__14763);

try{tic_tac_toe.board.handle_click.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.Keyword(null,"human","human",-772334390),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))], null);
}),null)),(1));

var name__9354__auto__ = new cljs.core.Keyword(null,"update-state","update-state",-653396259);
var options__9355__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__9356__auto__ = speclj.stub.invocations_of.call(null,name__9354__auto__);
var times__9357__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__9355__auto__);
var times_QMARK___9358__auto__ = typeof times__9357__auto__ === 'number';
var check_params_QMARK___9359__auto__ = cljs.core.contains_QMARK_.call(null,options__9355__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__9360__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__9355__auto__);
var with__9360__auto____$1 = (((with__9360__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__9360__auto__);
var invocations_str__9361__auto__ = (function (p1__9351__9362__auto__){
if(cljs.core._EQ_.call(null,(1),p1__9351__9362__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___9358__auto__) && (check_params_QMARK___9359__auto__))){
var matching_invocations__9363__auto__ = cljs.core.filter.call(null,(function (p1__9352__9364__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9360__auto____$1,p1__9352__9364__auto__);
}),invocations__9356__auto__);
var matching_count__9365__auto__ = cljs.core.count.call(null,matching_invocations__9363__auto__);
if(cljs.core._EQ_.call(null,times__9357__auto__,matching_count__9365__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9357__auto__)," ",invocations_str__9361__auto__.call(null,times__9357__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9354__auto__)," with ",cljs.core.pr_str.call(null,with__9360__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__9365__auto__)," ",invocations_str__9361__auto__.call(null,matching_count__9365__auto__)].join('')));
}
} else {
if(check_params_QMARK___9359__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9353__9366__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__9360__auto____$1,p1__9353__9366__auto__);
}),invocations__9356__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9354__auto__)," with ",cljs.core.pr_str.call(null,with__9360__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__9356__auto__)].join('')));
}
} else {
if(times_QMARK___9358__auto__){
if(cljs.core._EQ_.call(null,times__9357__auto__,cljs.core.count.call(null,invocations__9356__auto__))){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__9357__auto__)," ",invocations_str__9361__auto__.call(null,times__9357__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9354__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9356__auto__))].join('')));
}
} else {
if(cljs.core.seq.call(null,invocations__9356__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__9354__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__9356__auto__))].join('')));
}

}
}
}
}finally {(tic_tac_toe.corejs.update_state = update_state_orig_val__14762);
}});})(_STAR_parent_description_STAR__orig_val__14754_14835,_STAR_parent_description_STAR__temp_val__14755_14836,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__14686_14765,_STAR_parent_description_STAR__temp_val__14687_14766,description__8970__auto___14764))
,false)],null)));
var chunk__14757_14838 = null;
var count__14758_14839 = (0);
var i__14759_14840 = (0);
while(true){
if((i__14759_14840 < count__14758_14839)){
var component__8971__auto___14841 = cljs.core._nth.call(null,chunk__14757_14838,i__14759_14840);
speclj.components.install.call(null,component__8971__auto___14841,description__8970__auto____$1);


var G__14842 = seq__14756_14837;
var G__14843 = chunk__14757_14838;
var G__14844 = count__14758_14839;
var G__14845 = (i__14759_14840 + (1));
seq__14756_14837 = G__14842;
chunk__14757_14838 = G__14843;
count__14758_14839 = G__14844;
i__14759_14840 = G__14845;
continue;
} else {
var temp__5804__auto___14846 = cljs.core.seq.call(null,seq__14756_14837);
if(temp__5804__auto___14846){
var seq__14756_14847__$1 = temp__5804__auto___14846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14756_14847__$1)){
var c__5525__auto___14848 = cljs.core.chunk_first.call(null,seq__14756_14847__$1);
var G__14849 = cljs.core.chunk_rest.call(null,seq__14756_14847__$1);
var G__14850 = c__5525__auto___14848;
var G__14851 = cljs.core.count.call(null,c__5525__auto___14848);
var G__14852 = (0);
seq__14756_14837 = G__14849;
chunk__14757_14838 = G__14850;
count__14758_14839 = G__14851;
i__14759_14840 = G__14852;
continue;
} else {
var component__8971__auto___14853 = cljs.core.first.call(null,seq__14756_14847__$1);
speclj.components.install.call(null,component__8971__auto___14853,description__8970__auto____$1);


var G__14854 = cljs.core.next.call(null,seq__14756_14847__$1);
var G__14855 = null;
var G__14856 = (0);
var G__14857 = (0);
seq__14756_14837 = G__14854;
chunk__14757_14838 = G__14855;
count__14758_14839 = G__14856;
i__14759_14840 = G__14857;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14754_14835);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto____$1);
}

return description__8970__auto____$1;
})()],null)));
var chunk__14689_14768 = null;
var count__14690_14769 = (0);
var i__14691_14770 = (0);
while(true){
if((i__14691_14770 < count__14690_14769)){
var component__8971__auto___14858 = cljs.core._nth.call(null,chunk__14689_14768,i__14691_14770);
speclj.components.install.call(null,component__8971__auto___14858,description__8970__auto___14764);


var G__14859 = seq__14688_14767;
var G__14860 = chunk__14689_14768;
var G__14861 = count__14690_14769;
var G__14862 = (i__14691_14770 + (1));
seq__14688_14767 = G__14859;
chunk__14689_14768 = G__14860;
count__14690_14769 = G__14861;
i__14691_14770 = G__14862;
continue;
} else {
var temp__5804__auto___14863 = cljs.core.seq.call(null,seq__14688_14767);
if(temp__5804__auto___14863){
var seq__14688_14864__$1 = temp__5804__auto___14863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14688_14864__$1)){
var c__5525__auto___14865 = cljs.core.chunk_first.call(null,seq__14688_14864__$1);
var G__14866 = cljs.core.chunk_rest.call(null,seq__14688_14864__$1);
var G__14867 = c__5525__auto___14865;
var G__14868 = cljs.core.count.call(null,c__5525__auto___14865);
var G__14869 = (0);
seq__14688_14767 = G__14866;
chunk__14689_14768 = G__14867;
count__14690_14769 = G__14868;
i__14691_14770 = G__14869;
continue;
} else {
var component__8971__auto___14870 = cljs.core.first.call(null,seq__14688_14864__$1);
speclj.components.install.call(null,component__8971__auto___14870,description__8970__auto___14764);


var G__14871 = cljs.core.next.call(null,seq__14688_14864__$1);
var G__14872 = null;
var G__14873 = (0);
var G__14874 = (0);
seq__14688_14767 = G__14871;
chunk__14689_14768 = G__14872;
count__14690_14769 = G__14873;
i__14691_14770 = G__14874;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14686_14765);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto___14764);
}


//# sourceMappingURL=board_spec.js.map
