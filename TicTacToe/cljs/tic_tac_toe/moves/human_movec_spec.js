// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.human_movec_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.human_movec');
var description__7937__auto___12222 = speclj.components.new_description.call(null,"human-move",false,"tic-tac-toe.moves.human-movec-spec");
var _STAR_parent_description_STAR__orig_val__12164_12223 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12165_12224 = description__7937__auto___12222;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12165_12224);

try{var seq__12166_12225 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__12164_12223,_STAR_parent_description_STAR__temp_val__12165_12224,description__7937__auto___12222){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__12196 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__12197 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__12197);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__12196);
}});})(_STAR_parent_description_STAR__orig_val__12164_12223,_STAR_parent_description_STAR__temp_val__12165_12224,description__7937__auto___12222))
),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-player-move",false,"tic-tac-toe.moves.human-movec-spec");
var _STAR_parent_description_STAR__orig_val__12198_12229 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12199_12230 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12199_12230);

try{var seq__12200_12231 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns a decrease integer of user input number",((function (_STAR_parent_description_STAR__orig_val__12198_12229,_STAR_parent_description_STAR__temp_val__12199_12230,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12164_12223,_STAR_parent_description_STAR__temp_val__12165_12224,description__7937__auto___12222){
return (function (){
var expected__8074__auto___12235 = (0);
var actual__8075__auto___12236 = tic_tac_toe.moves.human_movec_spec.with_in_str.call(null,"1",tic_tac_toe.moves.human_movec.get_human_move.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null)));
if(cljs.core._EQ_.call(null,expected__8074__auto___12235,actual__8075__auto___12236)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___12235;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___12236;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = (2);
var actual__8075__auto__ = tic_tac_toe.moves.human_movec_spec.with_in_str.call(null,"3",tic_tac_toe.moves.human_movec.get_human_move.call(null,cljs.core.range.call(null,(0),(9))));
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
});})(_STAR_parent_description_STAR__orig_val__12198_12229,_STAR_parent_description_STAR__temp_val__12199_12230,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12164_12223,_STAR_parent_description_STAR__temp_val__12165_12224,description__7937__auto___12222))
,false),speclj.components.new_characteristic.call(null,"not a valid move followed by valid gives decrease integer of valid",((function (_STAR_parent_description_STAR__orig_val__12198_12229,_STAR_parent_description_STAR__temp_val__12199_12230,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12164_12223,_STAR_parent_description_STAR__temp_val__12165_12224,description__7937__auto___12222){
return (function (){
var println_orig_val__12206 = cljs.core.println;
var println_temp_val__12207 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330),cljs.core.PersistentArrayMap.EMPTY);
(cljs.core.println = println_temp_val__12207);

try{var expected__8074__auto__ = (2);
var actual__8075__auto__ = tic_tac_toe.moves.human_movec_spec.with_in_str.call(null,"33\n3",tic_tac_toe.moves.human_movec.get_human_move.call(null,cljs.core.range.call(null,(0),(9))));
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
}finally {(cljs.core.println = println_orig_val__12206);
}});})(_STAR_parent_description_STAR__orig_val__12198_12229,_STAR_parent_description_STAR__temp_val__12199_12230,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12164_12223,_STAR_parent_description_STAR__temp_val__12165_12224,description__7937__auto___12222))
,false)],null)));
var chunk__12201_12232 = null;
var count__12202_12233 = (0);
var i__12203_12234 = (0);
while(true){
if((i__12203_12234 < count__12202_12233)){
var component__7938__auto___12237 = cljs.core._nth.call(null,chunk__12201_12232,i__12203_12234);
speclj.components.install.call(null,component__7938__auto___12237,description__7937__auto____$1);


var G__12238 = seq__12200_12231;
var G__12239 = chunk__12201_12232;
var G__12240 = count__12202_12233;
var G__12241 = (i__12203_12234 + (1));
seq__12200_12231 = G__12238;
chunk__12201_12232 = G__12239;
count__12202_12233 = G__12240;
i__12203_12234 = G__12241;
continue;
} else {
var temp__5804__auto___12242 = cljs.core.seq.call(null,seq__12200_12231);
if(temp__5804__auto___12242){
var seq__12200_12243__$1 = temp__5804__auto___12242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12200_12243__$1)){
var c__5525__auto___12244 = cljs.core.chunk_first.call(null,seq__12200_12243__$1);
var G__12245 = cljs.core.chunk_rest.call(null,seq__12200_12243__$1);
var G__12246 = c__5525__auto___12244;
var G__12247 = cljs.core.count.call(null,c__5525__auto___12244);
var G__12248 = (0);
seq__12200_12231 = G__12245;
chunk__12201_12232 = G__12246;
count__12202_12233 = G__12247;
i__12203_12234 = G__12248;
continue;
} else {
var component__7938__auto___12249 = cljs.core.first.call(null,seq__12200_12243__$1);
speclj.components.install.call(null,component__7938__auto___12249,description__7937__auto____$1);


var G__12250 = cljs.core.next.call(null,seq__12200_12243__$1);
var G__12251 = null;
var G__12252 = (0);
var G__12253 = (0);
seq__12200_12231 = G__12250;
chunk__12201_12232 = G__12251;
count__12202_12233 = G__12252;
i__12203_12234 = G__12253;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12198_12229);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"print-valid-move-error",false,"tic-tac-toe.moves.human-movec-spec");
var _STAR_parent_description_STAR__orig_val__12208_12254 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12209_12255 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12209_12255);

try{var seq__12210_12256 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns an error message",((function (_STAR_parent_description_STAR__orig_val__12208_12254,_STAR_parent_description_STAR__temp_val__12209_12255,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12164_12223,_STAR_parent_description_STAR__temp_val__12165_12224,description__7937__auto___12222){
return (function (){
var expected__8074__auto__ = "Ham Sandwich is not a valid move\nPlease enter a valid move.\n\n";
var actual__8075__auto__ = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12218_12260 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12219_12261 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12220_12262 = true;
var _STAR_print_fn_STAR__temp_val__12221_12263 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12220_12262);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12221_12263);

try{tic_tac_toe.moves.human_movec.print_valid_move_error.call(null,"Ham Sandwich");
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12219_12261);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12218_12260);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
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
});})(_STAR_parent_description_STAR__orig_val__12208_12254,_STAR_parent_description_STAR__temp_val__12209_12255,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__12164_12223,_STAR_parent_description_STAR__temp_val__12165_12224,description__7937__auto___12222))
,false)],null)));
var chunk__12211_12257 = null;
var count__12212_12258 = (0);
var i__12213_12259 = (0);
while(true){
if((i__12213_12259 < count__12212_12258)){
var component__7938__auto___12264 = cljs.core._nth.call(null,chunk__12211_12257,i__12213_12259);
speclj.components.install.call(null,component__7938__auto___12264,description__7937__auto____$1);


var G__12265 = seq__12210_12256;
var G__12266 = chunk__12211_12257;
var G__12267 = count__12212_12258;
var G__12268 = (i__12213_12259 + (1));
seq__12210_12256 = G__12265;
chunk__12211_12257 = G__12266;
count__12212_12258 = G__12267;
i__12213_12259 = G__12268;
continue;
} else {
var temp__5804__auto___12269 = cljs.core.seq.call(null,seq__12210_12256);
if(temp__5804__auto___12269){
var seq__12210_12270__$1 = temp__5804__auto___12269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12210_12270__$1)){
var c__5525__auto___12271 = cljs.core.chunk_first.call(null,seq__12210_12270__$1);
var G__12272 = cljs.core.chunk_rest.call(null,seq__12210_12270__$1);
var G__12273 = c__5525__auto___12271;
var G__12274 = cljs.core.count.call(null,c__5525__auto___12271);
var G__12275 = (0);
seq__12210_12256 = G__12272;
chunk__12211_12257 = G__12273;
count__12212_12258 = G__12274;
i__12213_12259 = G__12275;
continue;
} else {
var component__7938__auto___12276 = cljs.core.first.call(null,seq__12210_12270__$1);
speclj.components.install.call(null,component__7938__auto___12276,description__7937__auto____$1);


var G__12277 = cljs.core.next.call(null,seq__12210_12270__$1);
var G__12278 = null;
var G__12279 = (0);
var G__12280 = (0);
seq__12210_12256 = G__12277;
chunk__12211_12257 = G__12278;
count__12212_12258 = G__12279;
i__12213_12259 = G__12280;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12208_12254);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__12167_12226 = null;
var count__12168_12227 = (0);
var i__12169_12228 = (0);
while(true){
if((i__12169_12228 < count__12168_12227)){
var component__7938__auto___12281 = cljs.core._nth.call(null,chunk__12167_12226,i__12169_12228);
speclj.components.install.call(null,component__7938__auto___12281,description__7937__auto___12222);


var G__12282 = seq__12166_12225;
var G__12283 = chunk__12167_12226;
var G__12284 = count__12168_12227;
var G__12285 = (i__12169_12228 + (1));
seq__12166_12225 = G__12282;
chunk__12167_12226 = G__12283;
count__12168_12227 = G__12284;
i__12169_12228 = G__12285;
continue;
} else {
var temp__5804__auto___12286 = cljs.core.seq.call(null,seq__12166_12225);
if(temp__5804__auto___12286){
var seq__12166_12287__$1 = temp__5804__auto___12286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12166_12287__$1)){
var c__5525__auto___12288 = cljs.core.chunk_first.call(null,seq__12166_12287__$1);
var G__12289 = cljs.core.chunk_rest.call(null,seq__12166_12287__$1);
var G__12290 = c__5525__auto___12288;
var G__12291 = cljs.core.count.call(null,c__5525__auto___12288);
var G__12292 = (0);
seq__12166_12225 = G__12289;
chunk__12167_12226 = G__12290;
count__12168_12227 = G__12291;
i__12169_12228 = G__12292;
continue;
} else {
var component__7938__auto___12293 = cljs.core.first.call(null,seq__12166_12287__$1);
speclj.components.install.call(null,component__7938__auto___12293,description__7937__auto___12222);


var G__12294 = cljs.core.next.call(null,seq__12166_12287__$1);
var G__12295 = null;
var G__12296 = (0);
var G__12297 = (0);
seq__12166_12225 = G__12294;
chunk__12167_12226 = G__12295;
count__12168_12227 = G__12296;
i__12169_12228 = G__12297;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12164_12223);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___12222);
}


//# sourceMappingURL=human_movec_spec.js.map
