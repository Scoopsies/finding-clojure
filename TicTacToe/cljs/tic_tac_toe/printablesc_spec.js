// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.printablesc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.printablesc');
goog.require('tic_tac_toe.spec_helperc');
var description__7937__auto___13913 = speclj.components.new_description.call(null,"printables",false,"tic-tac-toe.printablesc-spec");
var _STAR_parent_description_STAR__orig_val__13855_13914 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13856_13915 = description__7937__auto___13913;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13856_13915);

try{var seq__13857_13916 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__13887 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__13888 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__13888);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__13887);
}});})(_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"print-board",false,"tic-tac-toe.printablesc-spec");
var _STAR_parent_description_STAR__orig_val__13889_13920 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13890_13921 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13890_13921);

try{var seq__13891_13922 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints the board with correct values incremented by 1",((function (_STAR_parent_description_STAR__orig_val__13889_13920,_STAR_parent_description_STAR__temp_val__13890_13921,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  1  |  2  |  3  ","  4  |  5  |  6  ","  7  |  8  |  9  "], null);
var actual__8075__auto__ = tic_tac_toe.printablesc.get_board_printables.call(null,cljs.core.range.call(null,(9)));
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
});})(_STAR_parent_description_STAR__orig_val__13889_13920,_STAR_parent_description_STAR__temp_val__13890_13921,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false),speclj.components.new_characteristic.call(null,"player tokens aren't effected by incrementation",((function (_STAR_parent_description_STAR__orig_val__13889_13920,_STAR_parent_description_STAR__temp_val__13890_13921,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  1  |  2  |  3  ","  4  |  X  |  6  ","  7  |  8  |  9  "], null);
var actual__8075__auto__ = tic_tac_toe.printablesc.get_board_printables.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null),cljs.core.range.call(null,(9))));
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
});})(_STAR_parent_description_STAR__orig_val__13889_13920,_STAR_parent_description_STAR__temp_val__13890_13921,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false),speclj.components.new_characteristic.call(null,"prints a 4 x 4 board",((function (_STAR_parent_description_STAR__orig_val__13889_13920,_STAR_parent_description_STAR__temp_val__13890_13921,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  1  |  2  |  3  |  4  ","  5  |  6  |  7  |  8  ","  9  |  10 |  11 |  12 ","  13 |  14 |  15 |  16 "], null);
var actual__8075__auto__ = tic_tac_toe.printablesc.get_board_printables.call(null,cljs.core.range.call(null,(16)));
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
});})(_STAR_parent_description_STAR__orig_val__13889_13920,_STAR_parent_description_STAR__temp_val__13890_13921,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false),speclj.components.new_characteristic.call(null,"prints a 3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__13889_13920,_STAR_parent_description_STAR__temp_val__13890_13921,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["  1  |  2  |  3    10 |  11 |  12   19 |  20 |  21 ","  4  |  5  |  6    13 |  14 |  15   22 |  23 |  24 ","  7  |  8  |  9    16 |  17 |  18   25 |  26 |  27 "], null);
var actual__8075__auto__ = tic_tac_toe.printablesc.get_board_printables.call(null,cljs.core.range.call(null,(27)));
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
});})(_STAR_parent_description_STAR__orig_val__13889_13920,_STAR_parent_description_STAR__temp_val__13890_13921,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false)],null)));
var chunk__13892_13923 = null;
var count__13893_13924 = (0);
var i__13894_13925 = (0);
while(true){
if((i__13894_13925 < count__13893_13924)){
var component__7938__auto___13926 = cljs.core._nth.call(null,chunk__13892_13923,i__13894_13925);
speclj.components.install.call(null,component__7938__auto___13926,description__7937__auto____$1);


var G__13927 = seq__13891_13922;
var G__13928 = chunk__13892_13923;
var G__13929 = count__13893_13924;
var G__13930 = (i__13894_13925 + (1));
seq__13891_13922 = G__13927;
chunk__13892_13923 = G__13928;
count__13893_13924 = G__13929;
i__13894_13925 = G__13930;
continue;
} else {
var temp__5804__auto___13931 = cljs.core.seq.call(null,seq__13891_13922);
if(temp__5804__auto___13931){
var seq__13891_13932__$1 = temp__5804__auto___13931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13891_13932__$1)){
var c__5525__auto___13933 = cljs.core.chunk_first.call(null,seq__13891_13932__$1);
var G__13934 = cljs.core.chunk_rest.call(null,seq__13891_13932__$1);
var G__13935 = c__5525__auto___13933;
var G__13936 = cljs.core.count.call(null,c__5525__auto___13933);
var G__13937 = (0);
seq__13891_13922 = G__13934;
chunk__13892_13923 = G__13935;
count__13893_13924 = G__13936;
i__13894_13925 = G__13937;
continue;
} else {
var component__7938__auto___13938 = cljs.core.first.call(null,seq__13891_13932__$1);
speclj.components.install.call(null,component__7938__auto___13938,description__7937__auto____$1);


var G__13939 = cljs.core.next.call(null,seq__13891_13932__$1);
var G__13940 = null;
var G__13941 = (0);
var G__13942 = (0);
seq__13891_13922 = G__13939;
chunk__13892_13923 = G__13940;
count__13893_13924 = G__13941;
i__13894_13925 = G__13942;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13889_13920);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-board-size-menu",false,"tic-tac-toe.printablesc-spec");
var _STAR_parent_description_STAR__orig_val__13895_13943 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13896_13944 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13896_13944);

try{var seq__13897_13945 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns correct menu for :tui",((function (_STAR_parent_description_STAR__orig_val__13895_13943,_STAR_parent_description_STAR__temp_val__13896_13944,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What size board?","1. 3x3","2. 4x4","3. 3x3x3 (3-D)"], null);
var actual__8075__auto__ = tic_tac_toe.printablesc.get_board_size_menu.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null));
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
});})(_STAR_parent_description_STAR__orig_val__13895_13943,_STAR_parent_description_STAR__temp_val__13896_13944,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false),speclj.components.new_characteristic.call(null,"returns correct menu for :gui",((function (_STAR_parent_description_STAR__orig_val__13895_13943,_STAR_parent_description_STAR__temp_val__13896_13944,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What size board?","1. 3x3","2. 4x4"], null);
var actual__8075__auto__ = tic_tac_toe.printablesc.get_board_size_menu.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null));
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
});})(_STAR_parent_description_STAR__orig_val__13895_13943,_STAR_parent_description_STAR__temp_val__13896_13944,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false)],null)));
var chunk__13898_13946 = null;
var count__13899_13947 = (0);
var i__13900_13948 = (0);
while(true){
if((i__13900_13948 < count__13899_13947)){
var component__7938__auto___13949 = cljs.core._nth.call(null,chunk__13898_13946,i__13900_13948);
speclj.components.install.call(null,component__7938__auto___13949,description__7937__auto____$1);


var G__13950 = seq__13897_13945;
var G__13951 = chunk__13898_13946;
var G__13952 = count__13899_13947;
var G__13953 = (i__13900_13948 + (1));
seq__13897_13945 = G__13950;
chunk__13898_13946 = G__13951;
count__13899_13947 = G__13952;
i__13900_13948 = G__13953;
continue;
} else {
var temp__5804__auto___13954 = cljs.core.seq.call(null,seq__13897_13945);
if(temp__5804__auto___13954){
var seq__13897_13955__$1 = temp__5804__auto___13954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13897_13955__$1)){
var c__5525__auto___13956 = cljs.core.chunk_first.call(null,seq__13897_13955__$1);
var G__13957 = cljs.core.chunk_rest.call(null,seq__13897_13955__$1);
var G__13958 = c__5525__auto___13956;
var G__13959 = cljs.core.count.call(null,c__5525__auto___13956);
var G__13960 = (0);
seq__13897_13945 = G__13957;
chunk__13898_13946 = G__13958;
count__13899_13947 = G__13959;
i__13900_13948 = G__13960;
continue;
} else {
var component__7938__auto___13961 = cljs.core.first.call(null,seq__13897_13955__$1);
speclj.components.install.call(null,component__7938__auto___13961,description__7937__auto____$1);


var G__13962 = cljs.core.next.call(null,seq__13897_13955__$1);
var G__13963 = null;
var G__13964 = (0);
var G__13965 = (0);
seq__13897_13945 = G__13962;
chunk__13898_13946 = G__13963;
count__13899_13947 = G__13964;
i__13900_13948 = G__13965;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13895_13943);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-winner-printable",false,"tic-tac-toe.printablesc-spec");
var _STAR_parent_description_STAR__orig_val__13901_13966 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13902_13967 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13902_13967);

try{var seq__13903_13968 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns X wins!",((function (_STAR_parent_description_STAR__orig_val__13901_13966,_STAR_parent_description_STAR__temp_val__13902_13967,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = "X wins!";
var actual__8075__auto__ = tic_tac_toe.printablesc.get_winner_printable.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null)], null));
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
});})(_STAR_parent_description_STAR__orig_val__13901_13966,_STAR_parent_description_STAR__temp_val__13902_13967,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false),speclj.components.new_characteristic.call(null,"returns O wins!",((function (_STAR_parent_description_STAR__orig_val__13901_13966,_STAR_parent_description_STAR__temp_val__13902_13967,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = "O wins!";
var actual__8075__auto__ = tic_tac_toe.printablesc.get_winner_printable.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","O",(3),(4),(5),(6),(7),(8)], null)], null));
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
});})(_STAR_parent_description_STAR__orig_val__13901_13966,_STAR_parent_description_STAR__temp_val__13902_13967,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false),speclj.components.new_characteristic.call(null,"returns Draw",((function (_STAR_parent_description_STAR__orig_val__13901_13966,_STAR_parent_description_STAR__temp_val__13902_13967,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = "Draw";
var actual__8075__auto__ = tic_tac_toe.printablesc.get_winner_printable.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","X","X","X","O","O","X","X"], null)], null));
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
});})(_STAR_parent_description_STAR__orig_val__13901_13966,_STAR_parent_description_STAR__temp_val__13902_13967,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false)],null)));
var chunk__13904_13969 = null;
var count__13905_13970 = (0);
var i__13906_13971 = (0);
while(true){
if((i__13906_13971 < count__13905_13970)){
var component__7938__auto___13972 = cljs.core._nth.call(null,chunk__13904_13969,i__13906_13971);
speclj.components.install.call(null,component__7938__auto___13972,description__7937__auto____$1);


var G__13973 = seq__13903_13968;
var G__13974 = chunk__13904_13969;
var G__13975 = count__13905_13970;
var G__13976 = (i__13906_13971 + (1));
seq__13903_13968 = G__13973;
chunk__13904_13969 = G__13974;
count__13905_13970 = G__13975;
i__13906_13971 = G__13976;
continue;
} else {
var temp__5804__auto___13977 = cljs.core.seq.call(null,seq__13903_13968);
if(temp__5804__auto___13977){
var seq__13903_13978__$1 = temp__5804__auto___13977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13903_13978__$1)){
var c__5525__auto___13979 = cljs.core.chunk_first.call(null,seq__13903_13978__$1);
var G__13980 = cljs.core.chunk_rest.call(null,seq__13903_13978__$1);
var G__13981 = c__5525__auto___13979;
var G__13982 = cljs.core.count.call(null,c__5525__auto___13979);
var G__13983 = (0);
seq__13903_13968 = G__13980;
chunk__13904_13969 = G__13981;
count__13905_13970 = G__13982;
i__13906_13971 = G__13983;
continue;
} else {
var component__7938__auto___13984 = cljs.core.first.call(null,seq__13903_13978__$1);
speclj.components.install.call(null,component__7938__auto___13984,description__7937__auto____$1);


var G__13985 = cljs.core.next.call(null,seq__13903_13978__$1);
var G__13986 = null;
var G__13987 = (0);
var G__13988 = (0);
seq__13903_13968 = G__13985;
chunk__13904_13969 = G__13986;
count__13905_13970 = G__13987;
i__13906_13971 = G__13988;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13901_13966);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-game-over-printable",false,"tic-tac-toe.printablesc-spec");
var _STAR_parent_description_STAR__orig_val__13907_13989 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13908_13990 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13908_13990);

try{var seq__13909_13991 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"prints the correct message",((function (_STAR_parent_description_STAR__orig_val__13907_13989,_STAR_parent_description_STAR__temp_val__13908_13990,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","","Play Again?","1. Yes","2. No"], null);
var actual__8075__auto__ = tic_tac_toe.printablesc.get_game_over_printable.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null)], null));
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
});})(_STAR_parent_description_STAR__orig_val__13907_13989,_STAR_parent_description_STAR__temp_val__13908_13990,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__13855_13914,_STAR_parent_description_STAR__temp_val__13856_13915,description__7937__auto___13913))
,false)],null)));
var chunk__13910_13992 = null;
var count__13911_13993 = (0);
var i__13912_13994 = (0);
while(true){
if((i__13912_13994 < count__13911_13993)){
var component__7938__auto___13995 = cljs.core._nth.call(null,chunk__13910_13992,i__13912_13994);
speclj.components.install.call(null,component__7938__auto___13995,description__7937__auto____$1);


var G__13996 = seq__13909_13991;
var G__13997 = chunk__13910_13992;
var G__13998 = count__13911_13993;
var G__13999 = (i__13912_13994 + (1));
seq__13909_13991 = G__13996;
chunk__13910_13992 = G__13997;
count__13911_13993 = G__13998;
i__13912_13994 = G__13999;
continue;
} else {
var temp__5804__auto___14000 = cljs.core.seq.call(null,seq__13909_13991);
if(temp__5804__auto___14000){
var seq__13909_14001__$1 = temp__5804__auto___14000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13909_14001__$1)){
var c__5525__auto___14002 = cljs.core.chunk_first.call(null,seq__13909_14001__$1);
var G__14003 = cljs.core.chunk_rest.call(null,seq__13909_14001__$1);
var G__14004 = c__5525__auto___14002;
var G__14005 = cljs.core.count.call(null,c__5525__auto___14002);
var G__14006 = (0);
seq__13909_13991 = G__14003;
chunk__13910_13992 = G__14004;
count__13911_13993 = G__14005;
i__13912_13994 = G__14006;
continue;
} else {
var component__7938__auto___14007 = cljs.core.first.call(null,seq__13909_14001__$1);
speclj.components.install.call(null,component__7938__auto___14007,description__7937__auto____$1);


var G__14008 = cljs.core.next.call(null,seq__13909_14001__$1);
var G__14009 = null;
var G__14010 = (0);
var G__14011 = (0);
seq__13909_13991 = G__14008;
chunk__13910_13992 = G__14009;
count__13911_13993 = G__14010;
i__13912_13994 = G__14011;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13907_13989);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__13858_13917 = null;
var count__13859_13918 = (0);
var i__13860_13919 = (0);
while(true){
if((i__13860_13919 < count__13859_13918)){
var component__7938__auto___14012 = cljs.core._nth.call(null,chunk__13858_13917,i__13860_13919);
speclj.components.install.call(null,component__7938__auto___14012,description__7937__auto___13913);


var G__14013 = seq__13857_13916;
var G__14014 = chunk__13858_13917;
var G__14015 = count__13859_13918;
var G__14016 = (i__13860_13919 + (1));
seq__13857_13916 = G__14013;
chunk__13858_13917 = G__14014;
count__13859_13918 = G__14015;
i__13860_13919 = G__14016;
continue;
} else {
var temp__5804__auto___14017 = cljs.core.seq.call(null,seq__13857_13916);
if(temp__5804__auto___14017){
var seq__13857_14018__$1 = temp__5804__auto___14017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13857_14018__$1)){
var c__5525__auto___14019 = cljs.core.chunk_first.call(null,seq__13857_14018__$1);
var G__14020 = cljs.core.chunk_rest.call(null,seq__13857_14018__$1);
var G__14021 = c__5525__auto___14019;
var G__14022 = cljs.core.count.call(null,c__5525__auto___14019);
var G__14023 = (0);
seq__13857_13916 = G__14020;
chunk__13858_13917 = G__14021;
count__13859_13918 = G__14022;
i__13860_13919 = G__14023;
continue;
} else {
var component__7938__auto___14024 = cljs.core.first.call(null,seq__13857_14018__$1);
speclj.components.install.call(null,component__7938__auto___14024,description__7937__auto___13913);


var G__14025 = cljs.core.next.call(null,seq__13857_14018__$1);
var G__14026 = null;
var G__14027 = (0);
var G__14028 = (0);
seq__13857_13916 = G__14025;
chunk__13858_13917 = G__14026;
count__13859_13918 = G__14027;
i__13860_13919 = G__14028;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13855_13914);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___13913);
}


//# sourceMappingURL=printablesc_spec.js.map
