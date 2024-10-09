// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.game_over_menu_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.game_over_menu');
var description__8970__auto___12016 = speclj.components.new_description.call(null,"game-over-menu",false,"tic-tac-toe.game-over-menu-spec");
var _STAR_parent_description_STAR__orig_val__11946_12017 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11947_12018 = description__8970__auto___12016;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11947_12018);

try{var seq__11948_12019 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_characteristic.call(null,"renders with O as the winner",((function (_STAR_parent_description_STAR__orig_val__11946_12017,_STAR_parent_description_STAR__temp_val__11947_12018,description__8970__auto___12016){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.game_over_menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__9470__auto___12023 = "#game-over";
var node__9471__auto___12024 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___12023);
if(cljs.core.truth_(node__9471__auto___12024)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___12023;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___12025 = "O Wins!";
var actual__9108__auto___12026 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__9107__auto___12025,actual__9108__auto___12026)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12025;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12026;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12027 = "Play Again?";
var actual__9108__auto___12028 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__9107__auto___12027,actual__9108__auto___12028)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12027;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12028;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12029 = "1. Yes";
var actual__9108__auto___12030 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___12029,actual__9108__auto___12030)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12029;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12030;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = "2. No";
var actual__9108__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__11946_12017,_STAR_parent_description_STAR__temp_val__11947_12018,description__8970__auto___12016))
,false),speclj.components.new_characteristic.call(null,"renders with O as the winner",((function (_STAR_parent_description_STAR__orig_val__11946_12017,_STAR_parent_description_STAR__temp_val__11947_12018,description__8970__auto___12016){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.game_over_menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__9470__auto___12031 = "#game-over";
var node__9471__auto___12032 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___12031);
if(cljs.core.truth_(node__9471__auto___12032)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___12031;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___12033 = "O Wins!";
var actual__9108__auto___12034 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__9107__auto___12033,actual__9108__auto___12034)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12033;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12034;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12035 = "Play Again?";
var actual__9108__auto___12036 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__9107__auto___12035,actual__9108__auto___12036)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12035;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12036;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12037 = "1. Yes";
var actual__9108__auto___12038 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___12037,actual__9108__auto___12038)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12037;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12038;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = "2. No";
var actual__9108__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__11946_12017,_STAR_parent_description_STAR__temp_val__11947_12018,description__8970__auto___12016))
,false),speclj.components.new_characteristic.call(null,"renders with X as the winner",((function (_STAR_parent_description_STAR__orig_val__11946_12017,_STAR_parent_description_STAR__temp_val__11947_12018,description__8970__auto___12016){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.game_over_menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__9470__auto___12039 = "#game-over";
var node__9471__auto___12040 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___12039);
if(cljs.core.truth_(node__9471__auto___12040)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___12039;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___12041 = "X Wins!";
var actual__9108__auto___12042 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__9107__auto___12041,actual__9108__auto___12042)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12041;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12042;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12045 = "Play Again?";
var actual__9108__auto___12046 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__9107__auto___12045,actual__9108__auto___12046)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12045;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12046;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12047 = "1. Yes";
var actual__9108__auto___12048 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___12047,actual__9108__auto___12048)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12047;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12048;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = "2. No";
var actual__9108__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__11946_12017,_STAR_parent_description_STAR__temp_val__11947_12018,description__8970__auto___12016))
,false)],null)));
var chunk__11949_12020 = null;
var count__11950_12021 = (0);
var i__11951_12022 = (0);
while(true){
if((i__11951_12022 < count__11950_12021)){
var component__8971__auto___12049 = cljs.core._nth.call(null,chunk__11949_12020,i__11951_12022);
speclj.components.install.call(null,component__8971__auto___12049,description__8970__auto___12016);


var G__12050 = seq__11948_12019;
var G__12051 = chunk__11949_12020;
var G__12052 = count__11950_12021;
var G__12053 = (i__11951_12022 + (1));
seq__11948_12019 = G__12050;
chunk__11949_12020 = G__12051;
count__11950_12021 = G__12052;
i__11951_12022 = G__12053;
continue;
} else {
var temp__5804__auto___12054 = cljs.core.seq.call(null,seq__11948_12019);
if(temp__5804__auto___12054){
var seq__11948_12055__$1 = temp__5804__auto___12054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11948_12055__$1)){
var c__5525__auto___12056 = cljs.core.chunk_first.call(null,seq__11948_12055__$1);
var G__12057 = cljs.core.chunk_rest.call(null,seq__11948_12055__$1);
var G__12058 = c__5525__auto___12056;
var G__12059 = cljs.core.count.call(null,c__5525__auto___12056);
var G__12060 = (0);
seq__11948_12019 = G__12057;
chunk__11949_12020 = G__12058;
count__11950_12021 = G__12059;
i__11951_12022 = G__12060;
continue;
} else {
var component__8971__auto___12061 = cljs.core.first.call(null,seq__11948_12055__$1);
speclj.components.install.call(null,component__8971__auto___12061,description__8970__auto___12016);


var G__12062 = cljs.core.next.call(null,seq__11948_12055__$1);
var G__12063 = null;
var G__12064 = (0);
var G__12065 = (0);
seq__11948_12019 = G__12062;
chunk__11949_12020 = G__12063;
count__11950_12021 = G__12064;
i__11951_12022 = G__12065;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11946_12017);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto___12016);
}


//# sourceMappingURL=game_over_menu_spec.js.map
