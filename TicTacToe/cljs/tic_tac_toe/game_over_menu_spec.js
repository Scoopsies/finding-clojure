// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.game_over_menu_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.game_over_menu');
var description__8287__auto___12446 = speclj.components.new_description.call(null,"game-over-menu",false,"tic-tac-toe.game-over-menu-spec");
var _STAR_parent_description_STAR__orig_val__12392_12447 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12393_12448 = description__8287__auto___12446;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12393_12448);

try{var seq__12394_12449 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_characteristic.call(null,"renders with O as the winner",((function (_STAR_parent_description_STAR__orig_val__12392_12447,_STAR_parent_description_STAR__temp_val__12393_12448,description__8287__auto___12446){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.game_over_menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__11137__auto___12453 = "#game-over";
var node__11138__auto___12454 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___12453);
if(cljs.core.truth_(node__11138__auto___12454)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___12453;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var expected__8424__auto___12455 = "O Wins!";
var actual__8425__auto___12456 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__8424__auto___12455,actual__8425__auto___12456)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12455;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12456;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto___12457 = "Play Again?";
var actual__8425__auto___12458 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__8424__auto___12457,actual__8425__auto___12458)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12457;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12458;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto___12459 = "1. Yes";
var actual__8425__auto___12460 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__8424__auto___12459,actual__8425__auto___12460)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12459;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12460;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto__ = "2. No";
var actual__8425__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__12392_12447,_STAR_parent_description_STAR__temp_val__12393_12448,description__8287__auto___12446))
,false),speclj.components.new_characteristic.call(null,"renders with O as the winner",((function (_STAR_parent_description_STAR__orig_val__12392_12447,_STAR_parent_description_STAR__temp_val__12393_12448,description__8287__auto___12446){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.game_over_menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__11137__auto___12461 = "#game-over";
var node__11138__auto___12462 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___12461);
if(cljs.core.truth_(node__11138__auto___12462)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___12461;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var expected__8424__auto___12463 = "O Wins!";
var actual__8425__auto___12464 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__8424__auto___12463,actual__8425__auto___12464)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12463;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12464;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto___12465 = "Play Again?";
var actual__8425__auto___12466 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__8424__auto___12465,actual__8425__auto___12466)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12465;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12466;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto___12467 = "1. Yes";
var actual__8425__auto___12468 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__8424__auto___12467,actual__8425__auto___12468)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12467;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12468;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto__ = "2. No";
var actual__8425__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__12392_12447,_STAR_parent_description_STAR__temp_val__12393_12448,description__8287__auto___12446))
,false),speclj.components.new_characteristic.call(null,"renders with X as the winner",((function (_STAR_parent_description_STAR__orig_val__12392_12447,_STAR_parent_description_STAR__temp_val__12393_12448,description__8287__auto___12446){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.game_over_menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__11137__auto___12469 = "#game-over";
var node__11138__auto___12470 = c3kit.wire.spec_helper.select.call(null,value__11137__auto___12469);
if(cljs.core.truth_(node__11138__auto___12470)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__11137__auto___12469;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()].join('')));
}

var expected__8424__auto___12471 = "X Wins!";
var actual__8425__auto___12472 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__8424__auto___12471,actual__8425__auto___12472)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12471;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12472;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto___12473 = "Play Again?";
var actual__8425__auto___12474 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__8424__auto___12473,actual__8425__auto___12474)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12473;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12474;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto___12475 = "1. Yes";
var actual__8425__auto___12476 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__8424__auto___12475,actual__8425__auto___12476)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8424__auto___12475;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8425__auto___12476;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8392__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8392__auto__);
}
})()," (using =)"].join('')));
}

var expected__8424__auto__ = "2. No";
var actual__8425__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-2");
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
});})(_STAR_parent_description_STAR__orig_val__12392_12447,_STAR_parent_description_STAR__temp_val__12393_12448,description__8287__auto___12446))
,false)],null)));
var chunk__12395_12450 = null;
var count__12396_12451 = (0);
var i__12397_12452 = (0);
while(true){
if((i__12397_12452 < count__12396_12451)){
var component__8288__auto___12477 = cljs.core._nth.call(null,chunk__12395_12450,i__12397_12452);
speclj.components.install.call(null,component__8288__auto___12477,description__8287__auto___12446);


var G__12478 = seq__12394_12449;
var G__12479 = chunk__12395_12450;
var G__12480 = count__12396_12451;
var G__12481 = (i__12397_12452 + (1));
seq__12394_12449 = G__12478;
chunk__12395_12450 = G__12479;
count__12396_12451 = G__12480;
i__12397_12452 = G__12481;
continue;
} else {
var temp__5804__auto___12482 = cljs.core.seq.call(null,seq__12394_12449);
if(temp__5804__auto___12482){
var seq__12394_12483__$1 = temp__5804__auto___12482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12394_12483__$1)){
var c__5525__auto___12484 = cljs.core.chunk_first.call(null,seq__12394_12483__$1);
var G__12485 = cljs.core.chunk_rest.call(null,seq__12394_12483__$1);
var G__12486 = c__5525__auto___12484;
var G__12487 = cljs.core.count.call(null,c__5525__auto___12484);
var G__12488 = (0);
seq__12394_12449 = G__12485;
chunk__12395_12450 = G__12486;
count__12396_12451 = G__12487;
i__12397_12452 = G__12488;
continue;
} else {
var component__8288__auto___12489 = cljs.core.first.call(null,seq__12394_12483__$1);
speclj.components.install.call(null,component__8288__auto___12489,description__8287__auto___12446);


var G__12490 = cljs.core.next.call(null,seq__12394_12483__$1);
var G__12491 = null;
var G__12492 = (0);
var G__12493 = (0);
seq__12394_12449 = G__12490;
chunk__12395_12450 = G__12491;
count__12396_12451 = G__12492;
i__12397_12452 = G__12493;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12392_12447);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8287__auto___12446);
}


//# sourceMappingURL=game_over_menu_spec.js.map
