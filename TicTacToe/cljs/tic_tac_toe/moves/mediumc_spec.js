// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.mediumc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.mediumc');
goog.require('tic_tac_toe.spec_helperc');
tic_tac_toe.moves.mediumc_spec.state3x3 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
tic_tac_toe.moves.mediumc_spec.state3x3x3 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)], null);
var description__7937__auto___9287 = speclj.components.new_description.call(null,"medium -move",false,"tic-tac-toe.moves.mediumc-spec");
var _STAR_parent_description_STAR__orig_val__9157_9288 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9158_9289 = description__7937__auto___9287;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9158_9289);

try{var seq__9159_9290 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-medium-move",false,"tic-tac-toe.moves.mediumc-spec");
var _STAR_parent_description_STAR__orig_val__9225_9294 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9226_9295 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9226_9295);

try{var seq__9227_9296 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.moves.mediumc-spec");
var _STAR_parent_description_STAR__orig_val__9259_9300 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9260_9301 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9260_9301);

try{var seq__9261_9302 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9269 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9270 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9270);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9269);
}});})(_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (it__7999__auto__){
var rand_nth_orig_val__9271 = cljs.core.rand_nth;
var rand_nth_temp_val__9272 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"rand-nth","rand-nth",1426715838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),cljs.core.first], null));
(cljs.core.rand_nth = rand_nth_temp_val__9272);

try{return it__7999__auto__.call(null);
}finally {(cljs.core.rand_nth = rand_nth_orig_val__9271);
}});})(_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
),speclj.components.new_characteristic.call(null,"returns index of winning move",((function (_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (){
var expected__8074__auto___9306 = (2);
var actual__8075__auto___9307 = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O","O",(5),(6),(7),(8)], null)));
if(cljs.core._EQ_.call(null,expected__8074__auto___9306,actual__8075__auto___9307)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9306;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9307;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = (5);
var actual__8075__auto__ = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O","O",(5),"X",(7),(8)], null)));
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
});})(_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
,false),speclj.components.new_characteristic.call(null,"returns index of blocking move if winning move isn't available",((function (_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (){
var expected__8074__auto___9308 = (2);
var actual__8075__auto___9309 = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O",(4),(5),"O",(7),"X"], null)));
if(cljs.core._EQ_.call(null,expected__8074__auto___9308,actual__8075__auto___9309)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9308;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9309;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = (5);
var actual__8075__auto__ = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),"O","O",(5),(6),"X",(8)], null)));
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
});})(_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
,false),speclj.components.new_characteristic.call(null,"returns random available move if can't win or block",((function (_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (){
var expected__8074__auto___9310 = (0);
var actual__8075__auto___9311 = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9310,actual__8075__auto___9311)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9310;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9311;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = (1);
var actual__8075__auto__ = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)));
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
});})(_STAR_parent_description_STAR__orig_val__9259_9300,_STAR_parent_description_STAR__temp_val__9260_9301,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
,false)],null)));
var chunk__9262_9303 = null;
var count__9263_9304 = (0);
var i__9264_9305 = (0);
while(true){
if((i__9264_9305 < count__9263_9304)){
var component__7938__auto___9312 = cljs.core._nth.call(null,chunk__9262_9303,i__9264_9305);
speclj.components.install.call(null,component__7938__auto___9312,description__7937__auto____$2);


var G__9313 = seq__9261_9302;
var G__9314 = chunk__9262_9303;
var G__9315 = count__9263_9304;
var G__9316 = (i__9264_9305 + (1));
seq__9261_9302 = G__9313;
chunk__9262_9303 = G__9314;
count__9263_9304 = G__9315;
i__9264_9305 = G__9316;
continue;
} else {
var temp__5804__auto___9317 = cljs.core.seq.call(null,seq__9261_9302);
if(temp__5804__auto___9317){
var seq__9261_9318__$1 = temp__5804__auto___9317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9261_9318__$1)){
var c__5525__auto___9319 = cljs.core.chunk_first.call(null,seq__9261_9318__$1);
var G__9320 = cljs.core.chunk_rest.call(null,seq__9261_9318__$1);
var G__9321 = c__5525__auto___9319;
var G__9322 = cljs.core.count.call(null,c__5525__auto___9319);
var G__9323 = (0);
seq__9261_9302 = G__9320;
chunk__9262_9303 = G__9321;
count__9263_9304 = G__9322;
i__9264_9305 = G__9323;
continue;
} else {
var component__7938__auto___9324 = cljs.core.first.call(null,seq__9261_9318__$1);
speclj.components.install.call(null,component__7938__auto___9324,description__7937__auto____$2);


var G__9325 = cljs.core.next.call(null,seq__9261_9318__$1);
var G__9326 = null;
var G__9327 = (0);
var G__9328 = (0);
seq__9261_9302 = G__9325;
chunk__9262_9303 = G__9326;
count__9263_9304 = G__9327;
i__9264_9305 = G__9328;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9259_9300);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"3x3x3",false,"tic-tac-toe.moves.mediumc-spec");
var _STAR_parent_description_STAR__orig_val__9273_9329 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9274_9330 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9274_9330);

try{var seq__9275_9331 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9283 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9284 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9284);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9283);
}});})(_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (it__7999__auto__){
var rand_nth_orig_val__9285 = cljs.core.rand_nth;
var rand_nth_temp_val__9286 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"rand-nth","rand-nth",1426715838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),cljs.core.first], null));
(cljs.core.rand_nth = rand_nth_temp_val__9286);

try{return it__7999__auto__.call(null);
}finally {(cljs.core.rand_nth = rand_nth_orig_val__9285);
}});})(_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
),speclj.components.new_characteristic.call(null,"takes center if available",((function (_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (){
var expected__8074__auto__ = (13);
var actual__8075__auto__ = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(27))));
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
});})(_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
,false),speclj.components.new_characteristic.call(null,"takes block if presented",((function (_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (){
var board_9335 = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.range.call(null,(27)));
var expected__8074__auto___9336 = (2);
var actual__8075__auto___9337 = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),board_9335));
if(cljs.core._EQ_.call(null,expected__8074__auto___9336,actual__8075__auto___9337)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9336;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9337;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(25)], null),cljs.core.range.call(null,(27)));
var expected__8074__auto__ = (26);
var actual__8075__auto__ = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),board));
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
});})(_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
,false),speclj.components.new_characteristic.call(null,"randomizes move if center is taken and block isn't possible",((function (_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287){
return (function (){
var board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),cljs.core.range.call(null,(27)));
var expected__8074__auto__ = (0);
var actual__8075__auto__ = tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),board));
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
});})(_STAR_parent_description_STAR__orig_val__9273_9329,_STAR_parent_description_STAR__temp_val__9274_9330,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9225_9294,_STAR_parent_description_STAR__temp_val__9226_9295,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9157_9288,_STAR_parent_description_STAR__temp_val__9158_9289,description__7937__auto___9287))
,false)],null)));
var chunk__9276_9332 = null;
var count__9277_9333 = (0);
var i__9278_9334 = (0);
while(true){
if((i__9278_9334 < count__9277_9333)){
var component__7938__auto___9338 = cljs.core._nth.call(null,chunk__9276_9332,i__9278_9334);
speclj.components.install.call(null,component__7938__auto___9338,description__7937__auto____$2);


var G__9339 = seq__9275_9331;
var G__9340 = chunk__9276_9332;
var G__9341 = count__9277_9333;
var G__9342 = (i__9278_9334 + (1));
seq__9275_9331 = G__9339;
chunk__9276_9332 = G__9340;
count__9277_9333 = G__9341;
i__9278_9334 = G__9342;
continue;
} else {
var temp__5804__auto___9343 = cljs.core.seq.call(null,seq__9275_9331);
if(temp__5804__auto___9343){
var seq__9275_9344__$1 = temp__5804__auto___9343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9275_9344__$1)){
var c__5525__auto___9345 = cljs.core.chunk_first.call(null,seq__9275_9344__$1);
var G__9346 = cljs.core.chunk_rest.call(null,seq__9275_9344__$1);
var G__9347 = c__5525__auto___9345;
var G__9348 = cljs.core.count.call(null,c__5525__auto___9345);
var G__9349 = (0);
seq__9275_9331 = G__9346;
chunk__9276_9332 = G__9347;
count__9277_9333 = G__9348;
i__9278_9334 = G__9349;
continue;
} else {
var component__7938__auto___9350 = cljs.core.first.call(null,seq__9275_9344__$1);
speclj.components.install.call(null,component__7938__auto___9350,description__7937__auto____$2);


var G__9351 = cljs.core.next.call(null,seq__9275_9344__$1);
var G__9352 = null;
var G__9353 = (0);
var G__9354 = (0);
seq__9275_9331 = G__9351;
chunk__9276_9332 = G__9352;
count__9277_9333 = G__9353;
i__9278_9334 = G__9354;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9273_9329);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})()],null)));
var chunk__9228_9297 = null;
var count__9229_9298 = (0);
var i__9230_9299 = (0);
while(true){
if((i__9230_9299 < count__9229_9298)){
var component__7938__auto___9355 = cljs.core._nth.call(null,chunk__9228_9297,i__9230_9299);
speclj.components.install.call(null,component__7938__auto___9355,description__7937__auto____$1);


var G__9356 = seq__9227_9296;
var G__9357 = chunk__9228_9297;
var G__9358 = count__9229_9298;
var G__9359 = (i__9230_9299 + (1));
seq__9227_9296 = G__9356;
chunk__9228_9297 = G__9357;
count__9229_9298 = G__9358;
i__9230_9299 = G__9359;
continue;
} else {
var temp__5804__auto___9360 = cljs.core.seq.call(null,seq__9227_9296);
if(temp__5804__auto___9360){
var seq__9227_9361__$1 = temp__5804__auto___9360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9227_9361__$1)){
var c__5525__auto___9362 = cljs.core.chunk_first.call(null,seq__9227_9361__$1);
var G__9363 = cljs.core.chunk_rest.call(null,seq__9227_9361__$1);
var G__9364 = c__5525__auto___9362;
var G__9365 = cljs.core.count.call(null,c__5525__auto___9362);
var G__9366 = (0);
seq__9227_9296 = G__9363;
chunk__9228_9297 = G__9364;
count__9229_9298 = G__9365;
i__9230_9299 = G__9366;
continue;
} else {
var component__7938__auto___9367 = cljs.core.first.call(null,seq__9227_9361__$1);
speclj.components.install.call(null,component__7938__auto___9367,description__7937__auto____$1);


var G__9368 = cljs.core.next.call(null,seq__9227_9361__$1);
var G__9369 = null;
var G__9370 = (0);
var G__9371 = (0);
seq__9227_9296 = G__9368;
chunk__9228_9297 = G__9369;
count__9229_9298 = G__9370;
i__9230_9299 = G__9371;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9225_9294);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__9160_9291 = null;
var count__9161_9292 = (0);
var i__9162_9293 = (0);
while(true){
if((i__9162_9293 < count__9161_9292)){
var component__7938__auto___9372 = cljs.core._nth.call(null,chunk__9160_9291,i__9162_9293);
speclj.components.install.call(null,component__7938__auto___9372,description__7937__auto___9287);


var G__9373 = seq__9159_9290;
var G__9374 = chunk__9160_9291;
var G__9375 = count__9161_9292;
var G__9376 = (i__9162_9293 + (1));
seq__9159_9290 = G__9373;
chunk__9160_9291 = G__9374;
count__9161_9292 = G__9375;
i__9162_9293 = G__9376;
continue;
} else {
var temp__5804__auto___9377 = cljs.core.seq.call(null,seq__9159_9290);
if(temp__5804__auto___9377){
var seq__9159_9378__$1 = temp__5804__auto___9377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9159_9378__$1)){
var c__5525__auto___9379 = cljs.core.chunk_first.call(null,seq__9159_9378__$1);
var G__9380 = cljs.core.chunk_rest.call(null,seq__9159_9378__$1);
var G__9381 = c__5525__auto___9379;
var G__9382 = cljs.core.count.call(null,c__5525__auto___9379);
var G__9383 = (0);
seq__9159_9290 = G__9380;
chunk__9160_9291 = G__9381;
count__9161_9292 = G__9382;
i__9162_9293 = G__9383;
continue;
} else {
var component__7938__auto___9384 = cljs.core.first.call(null,seq__9159_9378__$1);
speclj.components.install.call(null,component__7938__auto___9384,description__7937__auto___9287);


var G__9385 = cljs.core.next.call(null,seq__9159_9378__$1);
var G__9386 = null;
var G__9387 = (0);
var G__9388 = (0);
seq__9159_9290 = G__9385;
chunk__9160_9291 = G__9386;
count__9161_9292 = G__9387;
i__9162_9293 = G__9388;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9157_9288);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___9287);
}


//# sourceMappingURL=mediumc_spec.js.map
