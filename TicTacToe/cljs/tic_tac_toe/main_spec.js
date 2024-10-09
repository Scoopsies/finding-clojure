// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
tic_tac_toe.main_spec.should_menu = (function tic_tac_toe$main_spec$should_menu(player_token){
var value__9470__auto___14232 = "#menu";
var node__9471__auto___14233 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___14232);
if(cljs.core.truth_(node__9471__auto___14233)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___14232;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___14240 = ["Who will play as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_token),"?"].join('');
var actual__9108__auto___14241 = c3kit.wire.spec_helper.text.call(null,"#-printable-0");
if(cljs.core._EQ_.call(null,expected__9107__auto___14240,actual__9108__auto___14241)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14240;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14241;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___14242 = "1. Human";
var actual__9108__auto___14243 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___14242,actual__9108__auto___14243)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14242;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14243;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___14244 = "2. Computer Easy";
var actual__9108__auto___14245 = c3kit.wire.spec_helper.text.call(null,"#-select-2");
if(cljs.core._EQ_.call(null,expected__9107__auto___14244,actual__9108__auto___14245)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14244;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14245;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___14246 = "3. Computer Medium";
var actual__9108__auto___14247 = c3kit.wire.spec_helper.text.call(null,"#-select-3");
if(cljs.core._EQ_.call(null,expected__9107__auto___14246,actual__9108__auto___14247)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14246;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14247;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = "4. Computer Hard";
var actual__9108__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-4");
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
});
var description__8970__auto___14264 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__14234_14265 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__14235_14266 = description__8970__auto___14264;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__14235_14266);

try{var seq__14236_14267 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who will play as X?","1. Human","2. Computer Easy","3. Computer Medium","4. Computer Hard"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264))
),speclj.components.new_characteristic.call(null,"Gets the initial state",((function (_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264){
return (function (){
var expected__9107__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who will play as X?","1. Human","2. Computer Easy","3. Computer Medium","4. Computer Hard"], null)], null);
var actual__9108__auto__ = cljs.core.deref.call(null,tic_tac_toe.main.state);
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
});})(_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264))
,false),speclj.components.new_characteristic.call(null,"Adds a title at the top of the screen",((function (_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264){
return (function (){
var value__9470__auto___14271 = "title";
var node__9471__auto___14272 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___14271);
if(cljs.core.truth_(node__9471__auto___14272)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___14271;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto__ = "Tic-Tac-Toe";
var actual__9108__auto__ = c3kit.wire.spec_helper.text.call(null,"#title h1");
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
});})(_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264))
,false),speclj.components.new_characteristic.call(null,"Displays player x menu options",((function (_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264){
return (function (){
return tic_tac_toe.main_spec.should_menu.call(null,"X");
});})(_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264))
,false),speclj.components.new_characteristic.call(null,"Displays player O menu if player clicks button 1",((function (_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#-select-1");

return tic_tac_toe.main_spec.should_menu.call(null,"O");
});})(_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264))
,false),speclj.components.new_characteristic.call(null,"Displays board size menu options",((function (_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#-select-1");

c3kit.wire.spec_helper.click_BANG_.call(null,"#-select-1");

var expected__9107__auto___14273 = "What size board?";
var actual__9108__auto___14274 = c3kit.wire.spec_helper.text.call(null,"#-printable-0");
if(cljs.core._EQ_.call(null,expected__9107__auto___14273,actual__9108__auto___14274)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14273;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14274;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___14275 = "1. 3x3";
var actual__9108__auto___14276 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___14275,actual__9108__auto___14276)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14275;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14276;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___14277 = "2. 4x4";
var actual__9108__auto___14278 = c3kit.wire.spec_helper.text.call(null,"#-select-2");
if(cljs.core._EQ_.call(null,expected__9107__auto___14277,actual__9108__auto___14278)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___14277;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___14278;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = "3. 3x3x3 (3-D)";
var actual__9108__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-3");
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
});})(_STAR_parent_description_STAR__orig_val__14234_14265,_STAR_parent_description_STAR__temp_val__14235_14266,description__8970__auto___14264))
,false)],null)));
var chunk__14237_14268 = null;
var count__14238_14269 = (0);
var i__14239_14270 = (0);
while(true){
if((i__14239_14270 < count__14238_14269)){
var component__8971__auto___14279 = cljs.core._nth.call(null,chunk__14237_14268,i__14239_14270);
speclj.components.install.call(null,component__8971__auto___14279,description__8970__auto___14264);


var G__14280 = seq__14236_14267;
var G__14281 = chunk__14237_14268;
var G__14282 = count__14238_14269;
var G__14283 = (i__14239_14270 + (1));
seq__14236_14267 = G__14280;
chunk__14237_14268 = G__14281;
count__14238_14269 = G__14282;
i__14239_14270 = G__14283;
continue;
} else {
var temp__5804__auto___14284 = cljs.core.seq.call(null,seq__14236_14267);
if(temp__5804__auto___14284){
var seq__14236_14285__$1 = temp__5804__auto___14284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14236_14285__$1)){
var c__5525__auto___14286 = cljs.core.chunk_first.call(null,seq__14236_14285__$1);
var G__14287 = cljs.core.chunk_rest.call(null,seq__14236_14285__$1);
var G__14288 = c__5525__auto___14286;
var G__14289 = cljs.core.count.call(null,c__5525__auto___14286);
var G__14290 = (0);
seq__14236_14267 = G__14287;
chunk__14237_14268 = G__14288;
count__14238_14269 = G__14289;
i__14239_14270 = G__14290;
continue;
} else {
var component__8971__auto___14291 = cljs.core.first.call(null,seq__14236_14285__$1);
speclj.components.install.call(null,component__8971__auto___14291,description__8970__auto___14264);


var G__14292 = cljs.core.next.call(null,seq__14236_14285__$1);
var G__14293 = null;
var G__14294 = (0);
var G__14295 = (0);
seq__14236_14267 = G__14292;
chunk__14237_14268 = G__14293;
count__14238_14269 = G__14294;
i__14239_14270 = G__14295;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__14234_14265);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto___14264);
}


//# sourceMappingURL=main_spec.js.map
