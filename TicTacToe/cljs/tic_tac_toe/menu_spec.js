// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.menu_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('reagent.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.menu');
tic_tac_toe.menu_spec.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var description__10025__auto___10780 = speclj.components.new_description.call(null,"menu",false,"tic-tac-toe.menu-spec");
var _STAR_parent_description_STAR__orig_val__10750_10781 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10751_10782 = description__10025__auto___10780;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10751_10782);

try{var seq__10752_10783 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__10025__auto____$1 = speclj.components.new_description.call(null,"render-menu",false,"tic-tac-toe.menu-spec");
var _STAR_parent_description_STAR__orig_val__10768_10787 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10769_10788 = description__10025__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10769_10788);

try{var seq__10770_10789 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"shows header for current state",((function (_STAR_parent_description_STAR__orig_val__10768_10787,_STAR_parent_description_STAR__temp_val__10769_10788,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_menu.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null);
}),null))));

var expected__10162__auto__ = "title";
var actual__10163__auto__ = c3kit.wire.spec_helper.text.call(null,"#-printable-0");
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
});})(_STAR_parent_description_STAR__orig_val__10768_10787,_STAR_parent_description_STAR__temp_val__10769_10788,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780))
,false),speclj.components.new_characteristic.call(null,"shows button for state with one option",((function (_STAR_parent_description_STAR__orig_val__10768_10787,_STAR_parent_description_STAR__temp_val__10769_10788,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_menu.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title","option1"], null)], null);
}),null))));

var expected__10162__auto__ = "option1";
var actual__10163__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-1");
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
});})(_STAR_parent_description_STAR__orig_val__10768_10787,_STAR_parent_description_STAR__temp_val__10769_10788,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780))
,false),speclj.components.new_characteristic.call(null,"shows buttons for state with multiple options",((function (_STAR_parent_description_STAR__orig_val__10768_10787,_STAR_parent_description_STAR__temp_val__10769_10788,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_menu.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title","option1","option2","option3"], null)], null);
}),null))));

var expected__10162__auto___10793 = "option1";
var actual__10163__auto___10794 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__10162__auto___10793,actual__10163__auto___10794)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10793;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10794;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10795 = "option2";
var actual__10163__auto___10796 = c3kit.wire.spec_helper.text.call(null,"#-select-2");
if(cljs.core._EQ_.call(null,expected__10162__auto___10795,actual__10163__auto___10796)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10795;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10796;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto__ = "option3";
var actual__10163__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-3");
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
});})(_STAR_parent_description_STAR__orig_val__10768_10787,_STAR_parent_description_STAR__temp_val__10769_10788,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780))
,false)],null)));
var chunk__10771_10790 = null;
var count__10772_10791 = (0);
var i__10773_10792 = (0);
while(true){
if((i__10773_10792 < count__10772_10791)){
var component__10026__auto___10797 = cljs.core._nth.call(null,chunk__10771_10790,i__10773_10792);
speclj.components.install.call(null,component__10026__auto___10797,description__10025__auto____$1);


var G__10798 = seq__10770_10789;
var G__10799 = chunk__10771_10790;
var G__10800 = count__10772_10791;
var G__10801 = (i__10773_10792 + (1));
seq__10770_10789 = G__10798;
chunk__10771_10790 = G__10799;
count__10772_10791 = G__10800;
i__10773_10792 = G__10801;
continue;
} else {
var temp__5804__auto___10802 = cljs.core.seq.call(null,seq__10770_10789);
if(temp__5804__auto___10802){
var seq__10770_10803__$1 = temp__5804__auto___10802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10770_10803__$1)){
var c__5525__auto___10804 = cljs.core.chunk_first.call(null,seq__10770_10803__$1);
var G__10805 = cljs.core.chunk_rest.call(null,seq__10770_10803__$1);
var G__10806 = c__5525__auto___10804;
var G__10807 = cljs.core.count.call(null,c__5525__auto___10804);
var G__10808 = (0);
seq__10770_10789 = G__10805;
chunk__10771_10790 = G__10806;
count__10772_10791 = G__10807;
i__10773_10792 = G__10808;
continue;
} else {
var component__10026__auto___10809 = cljs.core.first.call(null,seq__10770_10803__$1);
speclj.components.install.call(null,component__10026__auto___10809,description__10025__auto____$1);


var G__10810 = cljs.core.next.call(null,seq__10770_10803__$1);
var G__10811 = null;
var G__10812 = (0);
var G__10813 = (0);
seq__10770_10789 = G__10810;
chunk__10771_10790 = G__10811;
count__10772_10791 = G__10812;
i__10773_10792 = G__10813;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10768_10787);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10025__auto____$1);
}

return description__10025__auto____$1;
})(),(function (){var description__10025__auto____$1 = speclj.components.new_description.call(null,"render-game-over-menu",false,"tic-tac-toe.menu-spec");
var _STAR_parent_description_STAR__orig_val__10774_10814 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10775_10815 = description__10025__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10775_10815);

try{var seq__10776_10816 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"renders with O as the winner",((function (_STAR_parent_description_STAR__orig_val__10774_10814,_STAR_parent_description_STAR__temp_val__10775_10815,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__10525__auto___10820 = "#game-over";
var node__10526__auto___10821 = c3kit.wire.spec_helper.select.call(null,value__10525__auto___10820);
if(cljs.core.truth_(node__10526__auto___10821)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10525__auto___10820;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()].join('')));
}

var expected__10162__auto___10822 = "O Wins!";
var actual__10163__auto___10823 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__10162__auto___10822,actual__10163__auto___10823)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10822;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10823;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10824 = "Play Again?";
var actual__10163__auto___10825 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__10162__auto___10824,actual__10163__auto___10825)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10824;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10825;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10826 = "1. Yes";
var actual__10163__auto___10827 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__10162__auto___10826,actual__10163__auto___10827)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10826;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10827;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto__ = "2. No";
var actual__10163__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__10774_10814,_STAR_parent_description_STAR__temp_val__10775_10815,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780))
,false),speclj.components.new_characteristic.call(null,"renders with O as the winner",((function (_STAR_parent_description_STAR__orig_val__10774_10814,_STAR_parent_description_STAR__temp_val__10775_10815,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__10525__auto___10828 = "#game-over";
var node__10526__auto___10829 = c3kit.wire.spec_helper.select.call(null,value__10525__auto___10828);
if(cljs.core.truth_(node__10526__auto___10829)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10525__auto___10828;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()].join('')));
}

var expected__10162__auto___10830 = "O Wins!";
var actual__10163__auto___10831 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__10162__auto___10830,actual__10163__auto___10831)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10830;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10831;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10832 = "Play Again?";
var actual__10163__auto___10833 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__10162__auto___10832,actual__10163__auto___10833)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10832;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10833;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10834 = "1. Yes";
var actual__10163__auto___10835 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__10162__auto___10834,actual__10163__auto___10835)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10834;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10835;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto__ = "2. No";
var actual__10163__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__10774_10814,_STAR_parent_description_STAR__temp_val__10775_10815,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780))
,false),speclj.components.new_characteristic.call(null,"renders with X as the winner",((function (_STAR_parent_description_STAR__orig_val__10774_10814,_STAR_parent_description_STAR__temp_val__10775_10815,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__10525__auto___10836 = "#game-over";
var node__10526__auto___10837 = c3kit.wire.spec_helper.select.call(null,value__10525__auto___10836);
if(cljs.core.truth_(node__10526__auto___10837)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10525__auto___10836;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()].join('')));
}

var expected__10162__auto___10838 = "X Wins!";
var actual__10163__auto___10839 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__10162__auto___10838,actual__10163__auto___10839)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10838;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10839;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10840 = "Play Again?";
var actual__10163__auto___10841 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__10162__auto___10840,actual__10163__auto___10841)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10840;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10841;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10842 = "1. Yes";
var actual__10163__auto___10843 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__10162__auto___10842,actual__10163__auto___10843)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10842;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10843;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto__ = "2. No";
var actual__10163__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__10774_10814,_STAR_parent_description_STAR__temp_val__10775_10815,description__10025__auto____$1,_STAR_parent_description_STAR__orig_val__10750_10781,_STAR_parent_description_STAR__temp_val__10751_10782,description__10025__auto___10780))
,false)],null)));
var chunk__10777_10817 = null;
var count__10778_10818 = (0);
var i__10779_10819 = (0);
while(true){
if((i__10779_10819 < count__10778_10818)){
var component__10026__auto___10844 = cljs.core._nth.call(null,chunk__10777_10817,i__10779_10819);
speclj.components.install.call(null,component__10026__auto___10844,description__10025__auto____$1);


var G__10845 = seq__10776_10816;
var G__10846 = chunk__10777_10817;
var G__10847 = count__10778_10818;
var G__10848 = (i__10779_10819 + (1));
seq__10776_10816 = G__10845;
chunk__10777_10817 = G__10846;
count__10778_10818 = G__10847;
i__10779_10819 = G__10848;
continue;
} else {
var temp__5804__auto___10849 = cljs.core.seq.call(null,seq__10776_10816);
if(temp__5804__auto___10849){
var seq__10776_10850__$1 = temp__5804__auto___10849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10776_10850__$1)){
var c__5525__auto___10851 = cljs.core.chunk_first.call(null,seq__10776_10850__$1);
var G__10852 = cljs.core.chunk_rest.call(null,seq__10776_10850__$1);
var G__10853 = c__5525__auto___10851;
var G__10854 = cljs.core.count.call(null,c__5525__auto___10851);
var G__10855 = (0);
seq__10776_10816 = G__10852;
chunk__10777_10817 = G__10853;
count__10778_10818 = G__10854;
i__10779_10819 = G__10855;
continue;
} else {
var component__10026__auto___10856 = cljs.core.first.call(null,seq__10776_10850__$1);
speclj.components.install.call(null,component__10026__auto___10856,description__10025__auto____$1);


var G__10857 = cljs.core.next.call(null,seq__10776_10850__$1);
var G__10858 = null;
var G__10859 = (0);
var G__10860 = (0);
seq__10776_10816 = G__10857;
chunk__10777_10817 = G__10858;
count__10778_10818 = G__10859;
i__10779_10819 = G__10860;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10774_10814);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10025__auto____$1);
}

return description__10025__auto____$1;
})()],null)));
var chunk__10753_10784 = null;
var count__10754_10785 = (0);
var i__10755_10786 = (0);
while(true){
if((i__10755_10786 < count__10754_10785)){
var component__10026__auto___10861 = cljs.core._nth.call(null,chunk__10753_10784,i__10755_10786);
speclj.components.install.call(null,component__10026__auto___10861,description__10025__auto___10780);


var G__10862 = seq__10752_10783;
var G__10863 = chunk__10753_10784;
var G__10864 = count__10754_10785;
var G__10865 = (i__10755_10786 + (1));
seq__10752_10783 = G__10862;
chunk__10753_10784 = G__10863;
count__10754_10785 = G__10864;
i__10755_10786 = G__10865;
continue;
} else {
var temp__5804__auto___10866 = cljs.core.seq.call(null,seq__10752_10783);
if(temp__5804__auto___10866){
var seq__10752_10867__$1 = temp__5804__auto___10866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10752_10867__$1)){
var c__5525__auto___10868 = cljs.core.chunk_first.call(null,seq__10752_10867__$1);
var G__10869 = cljs.core.chunk_rest.call(null,seq__10752_10867__$1);
var G__10870 = c__5525__auto___10868;
var G__10871 = cljs.core.count.call(null,c__5525__auto___10868);
var G__10872 = (0);
seq__10752_10783 = G__10869;
chunk__10753_10784 = G__10870;
count__10754_10785 = G__10871;
i__10755_10786 = G__10872;
continue;
} else {
var component__10026__auto___10873 = cljs.core.first.call(null,seq__10752_10867__$1);
speclj.components.install.call(null,component__10026__auto___10873,description__10025__auto___10780);


var G__10874 = cljs.core.next.call(null,seq__10752_10867__$1);
var G__10875 = null;
var G__10876 = (0);
var G__10877 = (0);
seq__10752_10783 = G__10874;
chunk__10753_10784 = G__10875;
count__10754_10785 = G__10876;
i__10755_10786 = G__10877;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10750_10781);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10025__auto___10780);
}


//# sourceMappingURL=menu_spec.js.map
