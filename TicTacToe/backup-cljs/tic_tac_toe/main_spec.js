// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
tic_tac_toe.main_spec.should_menu = (function tic_tac_toe$main_spec$should_menu(player_token){
var value__10525__auto___10884 = "#menu";
var node__10526__auto___10885 = c3kit.wire.spec_helper.select.call(null,value__10525__auto___10884);
if(cljs.core.truth_(node__10526__auto___10885)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10525__auto___10884;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()].join('')));
}

var expected__10162__auto___10890 = ["Who will play as ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_token),"?"].join('');
var actual__10163__auto___10891 = c3kit.wire.spec_helper.text.call(null,"#-printable-0");
if(cljs.core._EQ_.call(null,expected__10162__auto___10890,actual__10163__auto___10891)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10890;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10891;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10892 = "1. Human";
var actual__10163__auto___10893 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__10162__auto___10892,actual__10163__auto___10893)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10892;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10893;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10894 = "2. Computer Easy";
var actual__10163__auto___10895 = c3kit.wire.spec_helper.text.call(null,"#-select-2");
if(cljs.core._EQ_.call(null,expected__10162__auto___10894,actual__10163__auto___10895)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10894;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10895;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10896 = "3. Computer Medium";
var actual__10163__auto___10897 = c3kit.wire.spec_helper.text.call(null,"#-select-3");
if(cljs.core._EQ_.call(null,expected__10162__auto___10896,actual__10163__auto___10897)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10896;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10897;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto__ = "4. Computer Hard";
var actual__10163__auto__ = c3kit.wire.spec_helper.text.call(null,"#-select-4");
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
});
var description__10025__auto___10898 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10882_10899 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10883_10900 = description__10025__auto___10898;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10883_10900);

try{var seq__10886_10901 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898))
),speclj.components.new_characteristic.call(null,"Gets the initial state",((function (_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898){
return (function (){
var expected__10162__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who will play as X?","1. Human","2. Computer Easy","3. Computer Medium","4. Computer Hard"], null)], null);
var actual__10163__auto__ = cljs.core.deref.call(null,tic_tac_toe.main.state);
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
});})(_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898))
,false),speclj.components.new_characteristic.call(null,"Adds a title at the top of the screen",((function (_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898){
return (function (){
var value__10525__auto___10905 = "title";
var node__10526__auto___10906 = c3kit.wire.spec_helper.select.call(null,value__10525__auto___10905);
if(cljs.core.truth_(node__10526__auto___10906)){
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(function (){var temp__5806__auto__ = value__10525__auto___10905;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()].join('')));
}

var expected__10162__auto__ = "Tic-Tac-Toe";
var actual__10163__auto__ = c3kit.wire.spec_helper.text.call(null,"#title h1");
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
});})(_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898))
,false),speclj.components.new_characteristic.call(null,"Displays player x menu options",((function (_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898){
return (function (){
return tic_tac_toe.main_spec.should_menu.call(null,"X");
});})(_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898))
,false),speclj.components.new_characteristic.call(null,"Displays player O menu if player clicks button 1",((function (_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#-select-1");

return tic_tac_toe.main_spec.should_menu.call(null,"O");
});})(_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898))
,false),speclj.components.new_characteristic.call(null,"Displays board size menu options",((function (_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#-select-1");

var expected__10162__auto___10907 = "What size board?";
var actual__10163__auto___10908 = c3kit.wire.spec_helper.text.call(null,"#-printable-0");
if(cljs.core._EQ_.call(null,expected__10162__auto___10907,actual__10163__auto___10908)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10907;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10908;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10909 = "1. 3x3";
var actual__10163__auto___10910 = c3kit.wire.spec_helper.text.call(null,"#-select-1");
if(cljs.core._EQ_.call(null,expected__10162__auto___10909,actual__10163__auto___10910)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10909;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10910;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto___10911 = "2. 4x4";
var actual__10163__auto___10912 = c3kit.wire.spec_helper.text.call(null,"#-select-2");
if(cljs.core._EQ_.call(null,expected__10162__auto___10911,actual__10163__auto___10912)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__10162__auto___10911;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__10163__auto___10912;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__10130__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__10130__auto__);
}
})()," (using =)"].join('')));
}

var expected__10162__auto__ = "3. 3x3x3 (3-D)";
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
});})(_STAR_parent_description_STAR__orig_val__10882_10899,_STAR_parent_description_STAR__temp_val__10883_10900,description__10025__auto___10898))
,false)],null)));
var chunk__10887_10902 = null;
var count__10888_10903 = (0);
var i__10889_10904 = (0);
while(true){
if((i__10889_10904 < count__10888_10903)){
var component__10026__auto___10913 = cljs.core._nth.call(null,chunk__10887_10902,i__10889_10904);
speclj.components.install.call(null,component__10026__auto___10913,description__10025__auto___10898);


var G__10914 = seq__10886_10901;
var G__10915 = chunk__10887_10902;
var G__10916 = count__10888_10903;
var G__10917 = (i__10889_10904 + (1));
seq__10886_10901 = G__10914;
chunk__10887_10902 = G__10915;
count__10888_10903 = G__10916;
i__10889_10904 = G__10917;
continue;
} else {
var temp__5804__auto___10918 = cljs.core.seq.call(null,seq__10886_10901);
if(temp__5804__auto___10918){
var seq__10886_10919__$1 = temp__5804__auto___10918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10886_10919__$1)){
var c__5525__auto___10920 = cljs.core.chunk_first.call(null,seq__10886_10919__$1);
var G__10921 = cljs.core.chunk_rest.call(null,seq__10886_10919__$1);
var G__10922 = c__5525__auto___10920;
var G__10923 = cljs.core.count.call(null,c__5525__auto___10920);
var G__10924 = (0);
seq__10886_10901 = G__10921;
chunk__10887_10902 = G__10922;
count__10888_10903 = G__10923;
i__10889_10904 = G__10924;
continue;
} else {
var component__10026__auto___10925 = cljs.core.first.call(null,seq__10886_10919__$1);
speclj.components.install.call(null,component__10026__auto___10925,description__10025__auto___10898);


var G__10926 = cljs.core.next.call(null,seq__10886_10919__$1);
var G__10927 = null;
var G__10928 = (0);
var G__10929 = (0);
seq__10886_10901 = G__10926;
chunk__10887_10902 = G__10927;
count__10888_10903 = G__10928;
i__10889_10904 = G__10929;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10882_10899);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10025__auto___10898);
}


//# sourceMappingURL=main_spec.js.map
