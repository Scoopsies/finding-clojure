// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.menu_spec');
goog.require('cljs.core');
goog.require('c3kit.wire.spec_helper');
goog.require('reagent.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.menu');
tic_tac_toe.menu_spec.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var description__8970__auto___12168 = speclj.components.new_description.call(null,"menu",false,"tic-tac-toe.menu-spec");
var _STAR_parent_description_STAR__orig_val__11954_12169 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11955_12170 = description__8970__auto___12168;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11955_12170);

try{var seq__11956_12171 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),(function (){var description__8970__auto____$1 = speclj.components.new_description.call(null,"render-menu",false,"tic-tac-toe.menu-spec");
var _STAR_parent_description_STAR__orig_val__12110_12175 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12111_12176 = description__8970__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12111_12176);

try{var seq__12112_12177 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"shows header for current state",((function (_STAR_parent_description_STAR__orig_val__12110_12175,_STAR_parent_description_STAR__temp_val__12111_12176,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_menu.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null);
}),null))));

var expected__9107__auto__ = "title";
var actual__9108__auto__ = c3kit.wire.spec_helper.text.call(null,"#-printable-0");
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
});})(_STAR_parent_description_STAR__orig_val__12110_12175,_STAR_parent_description_STAR__temp_val__12111_12176,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168))
,false),speclj.components.new_characteristic.call(null,"shows button for state with one option",((function (_STAR_parent_description_STAR__orig_val__12110_12175,_STAR_parent_description_STAR__temp_val__12111_12176,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_menu.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title","option1"], null)], null);
}),null))));

var expected__9107__auto__ = "option1";
var actual__9108__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-1");
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
});})(_STAR_parent_description_STAR__orig_val__12110_12175,_STAR_parent_description_STAR__temp_val__12111_12176,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168))
,false),speclj.components.new_characteristic.call(null,"shows buttons for state with multiple options",((function (_STAR_parent_description_STAR__orig_val__12110_12175,_STAR_parent_description_STAR__temp_val__12111_12176,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_menu.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title","option1","option2","option3"], null)], null);
}),null))));

var expected__9107__auto___12181 = "option1";
var actual__9108__auto___12182 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___12181,actual__9108__auto___12182)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12181;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12182;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12183 = "option2";
var actual__9108__auto___12184 = c3kit.wire.spec_helper.text.call(null,"#-select-2");
if(cljs.core._EQ_.call(null,expected__9107__auto___12183,actual__9108__auto___12184)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12183;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12184;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto__ = "option3";
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
});})(_STAR_parent_description_STAR__orig_val__12110_12175,_STAR_parent_description_STAR__temp_val__12111_12176,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168))
,false)],null)));
var chunk__12113_12178 = null;
var count__12114_12179 = (0);
var i__12115_12180 = (0);
while(true){
if((i__12115_12180 < count__12114_12179)){
var component__8971__auto___12185 = cljs.core._nth.call(null,chunk__12113_12178,i__12115_12180);
speclj.components.install.call(null,component__8971__auto___12185,description__8970__auto____$1);


var G__12186 = seq__12112_12177;
var G__12187 = chunk__12113_12178;
var G__12188 = count__12114_12179;
var G__12189 = (i__12115_12180 + (1));
seq__12112_12177 = G__12186;
chunk__12113_12178 = G__12187;
count__12114_12179 = G__12188;
i__12115_12180 = G__12189;
continue;
} else {
var temp__5804__auto___12190 = cljs.core.seq.call(null,seq__12112_12177);
if(temp__5804__auto___12190){
var seq__12112_12191__$1 = temp__5804__auto___12190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12112_12191__$1)){
var c__5525__auto___12192 = cljs.core.chunk_first.call(null,seq__12112_12191__$1);
var G__12193 = cljs.core.chunk_rest.call(null,seq__12112_12191__$1);
var G__12194 = c__5525__auto___12192;
var G__12195 = cljs.core.count.call(null,c__5525__auto___12192);
var G__12196 = (0);
seq__12112_12177 = G__12193;
chunk__12113_12178 = G__12194;
count__12114_12179 = G__12195;
i__12115_12180 = G__12196;
continue;
} else {
var component__8971__auto___12197 = cljs.core.first.call(null,seq__12112_12191__$1);
speclj.components.install.call(null,component__8971__auto___12197,description__8970__auto____$1);


var G__12198 = cljs.core.next.call(null,seq__12112_12191__$1);
var G__12199 = null;
var G__12200 = (0);
var G__12201 = (0);
seq__12112_12177 = G__12198;
chunk__12113_12178 = G__12199;
count__12114_12179 = G__12200;
i__12115_12180 = G__12201;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12110_12175);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto____$1);
}

return description__8970__auto____$1;
})(),(function (){var description__8970__auto____$1 = speclj.components.new_description.call(null,"render-game-over-menu",false,"tic-tac-toe.menu-spec");
var _STAR_parent_description_STAR__orig_val__12136_12202 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12137_12203 = description__8970__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12137_12203);

try{var seq__12138_12204 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"renders with O as the winner",((function (_STAR_parent_description_STAR__orig_val__12136_12202,_STAR_parent_description_STAR__temp_val__12137_12203,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__9470__auto___12208 = "#game-over";
var node__9471__auto___12209 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___12208);
if(cljs.core.truth_(node__9471__auto___12209)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___12208;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___12210 = "O Wins!";
var actual__9108__auto___12211 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__9107__auto___12210,actual__9108__auto___12211)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12210;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12211;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12212 = "Play Again?";
var actual__9108__auto___12213 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__9107__auto___12212,actual__9108__auto___12213)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12212;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12213;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12214 = "1. Yes";
var actual__9108__auto___12215 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___12214,actual__9108__auto___12215)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12214;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12215;
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
});})(_STAR_parent_description_STAR__orig_val__12136_12202,_STAR_parent_description_STAR__temp_val__12137_12203,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168))
,false),speclj.components.new_characteristic.call(null,"renders with O as the winner",((function (_STAR_parent_description_STAR__orig_val__12136_12202,_STAR_parent_description_STAR__temp_val__12137_12203,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__9470__auto___12216 = "#game-over";
var node__9471__auto___12217 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___12216);
if(cljs.core.truth_(node__9471__auto___12217)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___12216;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___12218 = "O Wins!";
var actual__9108__auto___12219 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__9107__auto___12218,actual__9108__auto___12219)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12218;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12219;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12226 = "Play Again?";
var actual__9108__auto___12227 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__9107__auto___12226,actual__9108__auto___12227)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12227;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12234 = "1. Yes";
var actual__9108__auto___12235 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___12234,actual__9108__auto___12235)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12234;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12235;
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
});})(_STAR_parent_description_STAR__orig_val__12136_12202,_STAR_parent_description_STAR__temp_val__12137_12203,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168))
,false),speclj.components.new_characteristic.call(null,"renders with X as the winner",((function (_STAR_parent_description_STAR__orig_val__12136_12202,_STAR_parent_description_STAR__temp_val__12137_12203,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168){
return (function (){
c3kit.wire.spec_helper.render.call(null,tic_tac_toe.menu.render_game_over.call(null,(new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X Wins!","","Play Again?","1. Yes","2. No"], null)], null);
}),null))));

var value__9470__auto___12238 = "#game-over";
var node__9471__auto___12239 = c3kit.wire.spec_helper.select.call(null,value__9470__auto___12238);
if(cljs.core.truth_(node__9471__auto___12239)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__9470__auto___12238;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()].join('')));
}

var expected__9107__auto___12240 = "X Wins!";
var actual__9108__auto___12241 = c3kit.wire.spec_helper.text.call(null,"#winner");
if(cljs.core._EQ_.call(null,expected__9107__auto___12240,actual__9108__auto___12241)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12240;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12241;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12242 = "Play Again?";
var actual__9108__auto___12243 = c3kit.wire.spec_helper.text.call(null,"#play-again");
if(cljs.core._EQ_.call(null,expected__9107__auto___12242,actual__9108__auto___12243)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12242;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12243;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})()," (using =)"].join('')));
}

var expected__9107__auto___12244 = "1. Yes";
var actual__9108__auto___12245 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__9107__auto___12244,actual__9108__auto___12245)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__9107__auto___12244;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__9075__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__9075__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__9108__auto___12245;
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
});})(_STAR_parent_description_STAR__orig_val__12136_12202,_STAR_parent_description_STAR__temp_val__12137_12203,description__8970__auto____$1,_STAR_parent_description_STAR__orig_val__11954_12169,_STAR_parent_description_STAR__temp_val__11955_12170,description__8970__auto___12168))
,false)],null)));
var chunk__12139_12205 = null;
var count__12140_12206 = (0);
var i__12141_12207 = (0);
while(true){
if((i__12141_12207 < count__12140_12206)){
var component__8971__auto___12246 = cljs.core._nth.call(null,chunk__12139_12205,i__12141_12207);
speclj.components.install.call(null,component__8971__auto___12246,description__8970__auto____$1);


var G__12247 = seq__12138_12204;
var G__12248 = chunk__12139_12205;
var G__12249 = count__12140_12206;
var G__12250 = (i__12141_12207 + (1));
seq__12138_12204 = G__12247;
chunk__12139_12205 = G__12248;
count__12140_12206 = G__12249;
i__12141_12207 = G__12250;
continue;
} else {
var temp__5804__auto___12251 = cljs.core.seq.call(null,seq__12138_12204);
if(temp__5804__auto___12251){
var seq__12138_12252__$1 = temp__5804__auto___12251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12138_12252__$1)){
var c__5525__auto___12253 = cljs.core.chunk_first.call(null,seq__12138_12252__$1);
var G__12254 = cljs.core.chunk_rest.call(null,seq__12138_12252__$1);
var G__12255 = c__5525__auto___12253;
var G__12256 = cljs.core.count.call(null,c__5525__auto___12253);
var G__12257 = (0);
seq__12138_12204 = G__12254;
chunk__12139_12205 = G__12255;
count__12140_12206 = G__12256;
i__12141_12207 = G__12257;
continue;
} else {
var component__8971__auto___12258 = cljs.core.first.call(null,seq__12138_12252__$1);
speclj.components.install.call(null,component__8971__auto___12258,description__8970__auto____$1);


var G__12259 = cljs.core.next.call(null,seq__12138_12252__$1);
var G__12260 = null;
var G__12261 = (0);
var G__12262 = (0);
seq__12138_12204 = G__12259;
chunk__12139_12205 = G__12260;
count__12140_12206 = G__12261;
i__12141_12207 = G__12262;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12136_12202);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto____$1);
}

return description__8970__auto____$1;
})()],null)));
var chunk__11957_12172 = null;
var count__11958_12173 = (0);
var i__11959_12174 = (0);
while(true){
if((i__11959_12174 < count__11958_12173)){
var component__8971__auto___12263 = cljs.core._nth.call(null,chunk__11957_12172,i__11959_12174);
speclj.components.install.call(null,component__8971__auto___12263,description__8970__auto___12168);


var G__12264 = seq__11956_12171;
var G__12265 = chunk__11957_12172;
var G__12266 = count__11958_12173;
var G__12267 = (i__11959_12174 + (1));
seq__11956_12171 = G__12264;
chunk__11957_12172 = G__12265;
count__11958_12173 = G__12266;
i__11959_12174 = G__12267;
continue;
} else {
var temp__5804__auto___12268 = cljs.core.seq.call(null,seq__11956_12171);
if(temp__5804__auto___12268){
var seq__11956_12269__$1 = temp__5804__auto___12268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11956_12269__$1)){
var c__5525__auto___12270 = cljs.core.chunk_first.call(null,seq__11956_12269__$1);
var G__12271 = cljs.core.chunk_rest.call(null,seq__11956_12269__$1);
var G__12272 = c__5525__auto___12270;
var G__12273 = cljs.core.count.call(null,c__5525__auto___12270);
var G__12274 = (0);
seq__11956_12171 = G__12271;
chunk__11957_12172 = G__12272;
count__11958_12173 = G__12273;
i__11959_12174 = G__12274;
continue;
} else {
var component__8971__auto___12275 = cljs.core.first.call(null,seq__11956_12269__$1);
speclj.components.install.call(null,component__8971__auto___12275,description__8970__auto___12168);


var G__12276 = cljs.core.next.call(null,seq__11956_12269__$1);
var G__12277 = null;
var G__12278 = (0);
var G__12279 = (0);
seq__11956_12171 = G__12276;
chunk__11957_12172 = G__12277;
count__11958_12173 = G__12278;
i__11959_12174 = G__12279;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11954_12169);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8970__auto___12168);
}


//# sourceMappingURL=menu_spec.js.map
