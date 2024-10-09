// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.corec_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.corec');
var description__7937__auto___12967 = speclj.components.new_description.call(null,"Corec",false,"tic-tac-toe.corec-spec");
var _STAR_parent_description_STAR__orig_val__12949_12968 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12950_12969 = description__7937__auto___12967;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12950_12969);

try{var seq__12951_12970 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"switch-player",false,"tic-tac-toe.corec-spec");
var _STAR_parent_description_STAR__orig_val__12961_12974 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12962_12975 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12962_12975);

try{var seq__12963_12976 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"switches X to O",((function (_STAR_parent_description_STAR__orig_val__12961_12974,_STAR_parent_description_STAR__temp_val__12962_12975,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12949_12968,_STAR_parent_description_STAR__temp_val__12950_12969,description__7937__auto___12967){
return (function (){
var expected__8074__auto__ = "O";
var actual__8075__auto__ = tic_tac_toe.corec.switch_player.call(null,"X");
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
});})(_STAR_parent_description_STAR__orig_val__12961_12974,_STAR_parent_description_STAR__temp_val__12962_12975,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12949_12968,_STAR_parent_description_STAR__temp_val__12950_12969,description__7937__auto___12967))
,false),speclj.components.new_characteristic.call(null,"switches O to X",((function (_STAR_parent_description_STAR__orig_val__12961_12974,_STAR_parent_description_STAR__temp_val__12962_12975,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12949_12968,_STAR_parent_description_STAR__temp_val__12950_12969,description__7937__auto___12967){
return (function (){
var expected__8074__auto__ = "X";
var actual__8075__auto__ = tic_tac_toe.corec.switch_player.call(null,"O");
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
});})(_STAR_parent_description_STAR__orig_val__12961_12974,_STAR_parent_description_STAR__temp_val__12962_12975,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12949_12968,_STAR_parent_description_STAR__temp_val__12950_12969,description__7937__auto___12967))
,false)],null)));
var chunk__12964_12977 = null;
var count__12965_12978 = (0);
var i__12966_12979 = (0);
while(true){
if((i__12966_12979 < count__12965_12978)){
var component__7938__auto___12980 = cljs.core._nth.call(null,chunk__12964_12977,i__12966_12979);
speclj.components.install.call(null,component__7938__auto___12980,description__7937__auto____$1);


var G__12981 = seq__12963_12976;
var G__12982 = chunk__12964_12977;
var G__12983 = count__12965_12978;
var G__12984 = (i__12966_12979 + (1));
seq__12963_12976 = G__12981;
chunk__12964_12977 = G__12982;
count__12965_12978 = G__12983;
i__12966_12979 = G__12984;
continue;
} else {
var temp__5804__auto___12985 = cljs.core.seq.call(null,seq__12963_12976);
if(temp__5804__auto___12985){
var seq__12963_12986__$1 = temp__5804__auto___12985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12963_12986__$1)){
var c__5525__auto___12987 = cljs.core.chunk_first.call(null,seq__12963_12986__$1);
var G__12988 = cljs.core.chunk_rest.call(null,seq__12963_12986__$1);
var G__12989 = c__5525__auto___12987;
var G__12990 = cljs.core.count.call(null,c__5525__auto___12987);
var G__12991 = (0);
seq__12963_12976 = G__12988;
chunk__12964_12977 = G__12989;
count__12965_12978 = G__12990;
i__12966_12979 = G__12991;
continue;
} else {
var component__7938__auto___12992 = cljs.core.first.call(null,seq__12963_12986__$1);
speclj.components.install.call(null,component__7938__auto___12992,description__7937__auto____$1);


var G__12993 = cljs.core.next.call(null,seq__12963_12986__$1);
var G__12994 = null;
var G__12995 = (0);
var G__12996 = (0);
seq__12963_12976 = G__12993;
chunk__12964_12977 = G__12994;
count__12965_12978 = G__12995;
i__12966_12979 = G__12996;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12961_12974);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__12952_12971 = null;
var count__12953_12972 = (0);
var i__12954_12973 = (0);
while(true){
if((i__12954_12973 < count__12953_12972)){
var component__7938__auto___12997 = cljs.core._nth.call(null,chunk__12952_12971,i__12954_12973);
speclj.components.install.call(null,component__7938__auto___12997,description__7937__auto___12967);


var G__12998 = seq__12951_12970;
var G__12999 = chunk__12952_12971;
var G__13000 = count__12953_12972;
var G__13001 = (i__12954_12973 + (1));
seq__12951_12970 = G__12998;
chunk__12952_12971 = G__12999;
count__12953_12972 = G__13000;
i__12954_12973 = G__13001;
continue;
} else {
var temp__5804__auto___13002 = cljs.core.seq.call(null,seq__12951_12970);
if(temp__5804__auto___13002){
var seq__12951_13003__$1 = temp__5804__auto___13002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12951_13003__$1)){
var c__5525__auto___13004 = cljs.core.chunk_first.call(null,seq__12951_13003__$1);
var G__13005 = cljs.core.chunk_rest.call(null,seq__12951_13003__$1);
var G__13006 = c__5525__auto___13004;
var G__13007 = cljs.core.count.call(null,c__5525__auto___13004);
var G__13008 = (0);
seq__12951_12970 = G__13005;
chunk__12952_12971 = G__13006;
count__12953_12972 = G__13007;
i__12954_12973 = G__13008;
continue;
} else {
var component__7938__auto___13009 = cljs.core.first.call(null,seq__12951_13003__$1);
speclj.components.install.call(null,component__7938__auto___13009,description__7937__auto___12967);


var G__13010 = cljs.core.next.call(null,seq__12951_13003__$1);
var G__13011 = null;
var G__13012 = (0);
var G__13013 = (0);
seq__12951_12970 = G__13010;
chunk__12952_12971 = G__13011;
count__12953_12972 = G__13012;
i__12954_12973 = G__13013;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12949_12968);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___12967);
}


//# sourceMappingURL=corec_spec.js.map
