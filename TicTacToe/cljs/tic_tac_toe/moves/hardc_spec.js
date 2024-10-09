// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.hardc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.spec_helperc');
goog.require('tic_tac_toe.moves.hardc');
tic_tac_toe.moves.hardc_spec.state3x3 = new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),"O",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
tic_tac_toe.moves.hardc_spec.state4x4 = cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723));
tic_tac_toe.moves.hardc_spec.state3x3x3 = cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var description__7937__auto___9891 = speclj.components.new_description.call(null,"hardc -move",false,"tic-tac-toe.moves.hardc-spec");
var _STAR_parent_description_STAR__orig_val__9389_9892 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9390_9893 = description__7937__auto___9891;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9390_9893);

try{var seq__9391_9894 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"pick-move",false,"tic-tac-toe.moves.hardc-spec");
var _STAR_parent_description_STAR__orig_val__9801_9898 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9802_9899 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9802_9899);

try{var seq__9803_9900 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.moves.hardc-spec");
var _STAR_parent_description_STAR__orig_val__9849_9904 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9850_9905 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9850_9905);

try{var seq__9851_9906 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"takes a win over a block",((function (_STAR_parent_description_STAR__orig_val__9849_9904,_STAR_parent_description_STAR__temp_val__9850_9905,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var expected__8074__auto___9910 = (2);
var actual__8075__auto___9911 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(2),"X","X",(5),"X",(7),(8)], null)));
if(cljs.core._EQ_.call(null,expected__8074__auto___9910,actual__8075__auto___9911)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9910;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9911;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = (0);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),"X","O",(4),"X","O","X",(8)], null)));
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
});})(_STAR_parent_description_STAR__orig_val__9849_9904,_STAR_parent_description_STAR__temp_val__9850_9905,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false),speclj.components.new_characteristic.call(null,"takes a block if no win is available",((function (_STAR_parent_description_STAR__orig_val__9849_9904,_STAR_parent_description_STAR__temp_val__9850_9905,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var expected__8074__auto___9912 = (2);
var actual__8075__auto___9913 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),(3),"O",(5),(6),(7),(8)], null)));
if(cljs.core._EQ_.call(null,expected__8074__auto___9912,actual__8075__auto___9913)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9912;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9913;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = (8);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),"O",(5),"X","X",(8)], null)));
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
});})(_STAR_parent_description_STAR__orig_val__9849_9904,_STAR_parent_description_STAR__temp_val__9850_9905,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false),speclj.components.new_characteristic.call(null,"plays the middle if corner is played first",((function (_STAR_parent_description_STAR__orig_val__9849_9904,_STAR_parent_description_STAR__temp_val__9850_9905,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var seq__9859 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(6),(8)], null));
var chunk__9860 = null;
var count__9861 = (0);
var i__9862 = (0);
while(true){
if((i__9862 < count__9861)){
var x = cljs.core._nth.call(null,chunk__9860,i__9862);
var expected__8074__auto___9914 = (4);
var actual__8075__auto___9915 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.range.call(null,(9)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9914,actual__8075__auto___9915)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9914;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9915;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9916 = seq__9859;
var G__9917 = chunk__9860;
var G__9918 = count__9861;
var G__9919 = (i__9862 + (1));
seq__9859 = G__9916;
chunk__9860 = G__9917;
count__9861 = G__9918;
i__9862 = G__9919;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9859);
if(temp__5804__auto__){
var seq__9859__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9859__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9859__$1);
var G__9920 = cljs.core.chunk_rest.call(null,seq__9859__$1);
var G__9921 = c__5525__auto__;
var G__9922 = cljs.core.count.call(null,c__5525__auto__);
var G__9923 = (0);
seq__9859 = G__9920;
chunk__9860 = G__9921;
count__9861 = G__9922;
i__9862 = G__9923;
continue;
} else {
var x = cljs.core.first.call(null,seq__9859__$1);
var expected__8074__auto___9924 = (4);
var actual__8075__auto___9925 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.range.call(null,(9)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9924,actual__8075__auto___9925)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9924;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9925;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9926 = cljs.core.next.call(null,seq__9859__$1);
var G__9927 = null;
var G__9928 = (0);
var G__9929 = (0);
seq__9859 = G__9926;
chunk__9860 = G__9927;
count__9861 = G__9928;
i__9862 = G__9929;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__9849_9904,_STAR_parent_description_STAR__temp_val__9850_9905,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false),speclj.components.new_characteristic.call(null,"plays the corner if middle is played first",((function (_STAR_parent_description_STAR__orig_val__9849_9904,_STAR_parent_description_STAR__temp_val__9850_9905,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var expected__8074__auto__ = (8);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),"X",(5),(6),(7),(8)], null)));
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
});})(_STAR_parent_description_STAR__orig_val__9849_9904,_STAR_parent_description_STAR__temp_val__9850_9905,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false)],null)));
var chunk__9852_9907 = null;
var count__9853_9908 = (0);
var i__9854_9909 = (0);
while(true){
if((i__9854_9909 < count__9853_9908)){
var component__7938__auto___9930 = cljs.core._nth.call(null,chunk__9852_9907,i__9854_9909);
speclj.components.install.call(null,component__7938__auto___9930,description__7937__auto____$2);


var G__9931 = seq__9851_9906;
var G__9932 = chunk__9852_9907;
var G__9933 = count__9853_9908;
var G__9934 = (i__9854_9909 + (1));
seq__9851_9906 = G__9931;
chunk__9852_9907 = G__9932;
count__9853_9908 = G__9933;
i__9854_9909 = G__9934;
continue;
} else {
var temp__5804__auto___9935 = cljs.core.seq.call(null,seq__9851_9906);
if(temp__5804__auto___9935){
var seq__9851_9936__$1 = temp__5804__auto___9935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9851_9936__$1)){
var c__5525__auto___9937 = cljs.core.chunk_first.call(null,seq__9851_9936__$1);
var G__9938 = cljs.core.chunk_rest.call(null,seq__9851_9936__$1);
var G__9939 = c__5525__auto___9937;
var G__9940 = cljs.core.count.call(null,c__5525__auto___9937);
var G__9941 = (0);
seq__9851_9906 = G__9938;
chunk__9852_9907 = G__9939;
count__9853_9908 = G__9940;
i__9854_9909 = G__9941;
continue;
} else {
var component__7938__auto___9942 = cljs.core.first.call(null,seq__9851_9936__$1);
speclj.components.install.call(null,component__7938__auto___9942,description__7937__auto____$2);


var G__9943 = cljs.core.next.call(null,seq__9851_9936__$1);
var G__9944 = null;
var G__9945 = (0);
var G__9946 = (0);
seq__9851_9906 = G__9943;
chunk__9852_9907 = G__9944;
count__9853_9908 = G__9945;
i__9854_9909 = G__9946;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9849_9904);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.moves.hardc-spec");
var _STAR_parent_description_STAR__orig_val__9863_9947 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9864_9948 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9864_9948);

try{var seq__9865_9949 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns the proper default value",((function (_STAR_parent_description_STAR__orig_val__9863_9947,_STAR_parent_description_STAR__temp_val__9864_9948,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var expected__8074__auto___9953 = (5);
var actual__8075__auto___9954 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.range.call(null,(16)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9953,actual__8075__auto___9954)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9953;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9954;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto___9955 = (6);
var actual__8075__auto___9956 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null),cljs.core.range.call(null,(16)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9955,actual__8075__auto___9956)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9955;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9956;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto___9957 = (9);
var actual__8075__auto___9958 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null),cljs.core.range.call(null,(16)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9957,actual__8075__auto___9958)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9957;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9958;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto___9959 = (10);
var actual__8075__auto___9960 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15)], null),cljs.core.range.call(null,(16)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9959,actual__8075__auto___9960)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9959;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9960;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto___9961 = (0);
var actual__8075__auto___9962 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5)], null),cljs.core.range.call(null,(16)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9961,actual__8075__auto___9962)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9961;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9962;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto___9963 = (3);
var actual__8075__auto___9964 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6)], null),cljs.core.range.call(null,(16)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9963,actual__8075__auto___9964)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9963;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9964;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto___9965 = (12);
var actual__8075__auto___9966 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)], null),cljs.core.range.call(null,(16)))));
if(cljs.core._EQ_.call(null,expected__8074__auto___9965,actual__8075__auto___9966)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9965;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9966;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = (15);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null),cljs.core.range.call(null,(16)))));
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
});})(_STAR_parent_description_STAR__orig_val__9863_9947,_STAR_parent_description_STAR__temp_val__9864_9948,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false),speclj.components.new_characteristic.call(null,"takes a win if presented",((function (_STAR_parent_description_STAR__orig_val__9863_9947,_STAR_parent_description_STAR__temp_val__9864_9948,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var expected__8074__auto__ = (3);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),cljs.core.range.call(null,(16)))));
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
});})(_STAR_parent_description_STAR__orig_val__9863_9947,_STAR_parent_description_STAR__temp_val__9864_9948,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false),speclj.components.new_characteristic.call(null,"takes a block if presented",((function (_STAR_parent_description_STAR__orig_val__9863_9947,_STAR_parent_description_STAR__temp_val__9864_9948,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var expected__8074__auto__ = (3);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null),cljs.core.range.call(null,(16)))));
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
});})(_STAR_parent_description_STAR__orig_val__9863_9947,_STAR_parent_description_STAR__temp_val__9864_9948,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false)],null)));
var chunk__9866_9950 = null;
var count__9867_9951 = (0);
var i__9868_9952 = (0);
while(true){
if((i__9868_9952 < count__9867_9951)){
var component__7938__auto___9967 = cljs.core._nth.call(null,chunk__9866_9950,i__9868_9952);
speclj.components.install.call(null,component__7938__auto___9967,description__7937__auto____$2);


var G__9968 = seq__9865_9949;
var G__9969 = chunk__9866_9950;
var G__9970 = count__9867_9951;
var G__9971 = (i__9868_9952 + (1));
seq__9865_9949 = G__9968;
chunk__9866_9950 = G__9969;
count__9867_9951 = G__9970;
i__9868_9952 = G__9971;
continue;
} else {
var temp__5804__auto___9972 = cljs.core.seq.call(null,seq__9865_9949);
if(temp__5804__auto___9972){
var seq__9865_9973__$1 = temp__5804__auto___9972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9865_9973__$1)){
var c__5525__auto___9974 = cljs.core.chunk_first.call(null,seq__9865_9973__$1);
var G__9975 = cljs.core.chunk_rest.call(null,seq__9865_9973__$1);
var G__9976 = c__5525__auto___9974;
var G__9977 = cljs.core.count.call(null,c__5525__auto___9974);
var G__9978 = (0);
seq__9865_9949 = G__9975;
chunk__9866_9950 = G__9976;
count__9867_9951 = G__9977;
i__9868_9952 = G__9978;
continue;
} else {
var component__7938__auto___9979 = cljs.core.first.call(null,seq__9865_9973__$1);
speclj.components.install.call(null,component__7938__auto___9979,description__7937__auto____$2);


var G__9980 = cljs.core.next.call(null,seq__9865_9973__$1);
var G__9981 = null;
var G__9982 = (0);
var G__9983 = (0);
seq__9865_9949 = G__9980;
chunk__9866_9950 = G__9981;
count__9867_9951 = G__9982;
i__9868_9952 = G__9983;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9863_9947);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"3x3x3",false,"tic-tac-toe.moves.hardc-spec");
var _STAR_parent_description_STAR__orig_val__9869_9984 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9870_9985 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9870_9985);

try{var seq__9871_9986 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9883 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9884 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9884);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9883);
}});})(_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
),speclj.components.new_characteristic.call(null,"takes a win if available",((function (_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var x_board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.range.call(null,(27)));
var full_board = tic_tac_toe.spec_helperc.populate_board.call(null,"O",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null),x_board);
var expected__8074__auto__ = (2);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),full_board));
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
});})(_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false),speclj.components.new_characteristic.call(null,"takes a block if no win available.",((function (_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var x_board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13)], null),cljs.core.range.call(null,(27)));
var full_board = tic_tac_toe.spec_helperc.populate_board.call(null,"O",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5)], null),x_board);
var expected__8074__auto__ = (26);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),full_board));
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
});})(_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false),speclj.components.new_characteristic.call(null,"takes the center if no win or block available",((function (_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var empty_board = cljs.core.range.call(null,(27));
var seq__9885_9990 = cljs.core.seq.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(13),null], null), null),empty_board));
var chunk__9886_9991 = null;
var count__9887_9992 = (0);
var i__9888_9993 = (0);
while(true){
if((i__9888_9993 < count__9887_9992)){
var x_9994 = cljs.core._nth.call(null,chunk__9886_9991,i__9888_9993);
var expected__8074__auto___9995 = (13);
var actual__8075__auto___9996 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_9994], null),empty_board)));
if(cljs.core._EQ_.call(null,expected__8074__auto___9995,actual__8075__auto___9996)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9995;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9996;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9997 = seq__9885_9990;
var G__9998 = chunk__9886_9991;
var G__9999 = count__9887_9992;
var G__10000 = (i__9888_9993 + (1));
seq__9885_9990 = G__9997;
chunk__9886_9991 = G__9998;
count__9887_9992 = G__9999;
i__9888_9993 = G__10000;
continue;
} else {
var temp__5804__auto___10001 = cljs.core.seq.call(null,seq__9885_9990);
if(temp__5804__auto___10001){
var seq__9885_10002__$1 = temp__5804__auto___10001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9885_10002__$1)){
var c__5525__auto___10003 = cljs.core.chunk_first.call(null,seq__9885_10002__$1);
var G__10004 = cljs.core.chunk_rest.call(null,seq__9885_10002__$1);
var G__10005 = c__5525__auto___10003;
var G__10006 = cljs.core.count.call(null,c__5525__auto___10003);
var G__10007 = (0);
seq__9885_9990 = G__10004;
chunk__9886_9991 = G__10005;
count__9887_9992 = G__10006;
i__9888_9993 = G__10007;
continue;
} else {
var x_10008 = cljs.core.first.call(null,seq__9885_10002__$1);
var expected__8074__auto___10009 = (13);
var actual__8075__auto___10010 = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_10008], null),empty_board)));
if(cljs.core._EQ_.call(null,expected__8074__auto___10009,actual__8075__auto___10010)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___10009;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___10010;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__10011 = cljs.core.next.call(null,seq__9885_10002__$1);
var G__10012 = null;
var G__10013 = (0);
var G__10014 = (0);
seq__9885_9990 = G__10011;
chunk__9886_9991 = G__10012;
count__9887_9992 = G__10013;
i__9888_9993 = G__10014;
continue;
}
} else {
}
}
break;
}

var expected__8074__auto__ = (13);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),empty_board));
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
});})(_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false),speclj.components.new_characteristic.call(null,"makes a random move if no win, block, or center available",((function (_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891){
return (function (){
var rand_nth_orig_val__9889 = cljs.core.rand_nth;
var rand_nth_temp_val__9890 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"rand-nth","rand-nth",1426715838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),cljs.core.first], null));
(cljs.core.rand_nth = rand_nth_temp_val__9890);

try{var board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),cljs.core.range.call(null,(27)));
var expected__8074__auto__ = (0);
var actual__8075__auto__ = tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),board));
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
}finally {(cljs.core.rand_nth = rand_nth_orig_val__9889);
}});})(_STAR_parent_description_STAR__orig_val__9869_9984,_STAR_parent_description_STAR__temp_val__9870_9985,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9801_9898,_STAR_parent_description_STAR__temp_val__9802_9899,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9389_9892,_STAR_parent_description_STAR__temp_val__9390_9893,description__7937__auto___9891))
,false)],null)));
var chunk__9872_9987 = null;
var count__9873_9988 = (0);
var i__9874_9989 = (0);
while(true){
if((i__9874_9989 < count__9873_9988)){
var component__7938__auto___10015 = cljs.core._nth.call(null,chunk__9872_9987,i__9874_9989);
speclj.components.install.call(null,component__7938__auto___10015,description__7937__auto____$2);


var G__10016 = seq__9871_9986;
var G__10017 = chunk__9872_9987;
var G__10018 = count__9873_9988;
var G__10019 = (i__9874_9989 + (1));
seq__9871_9986 = G__10016;
chunk__9872_9987 = G__10017;
count__9873_9988 = G__10018;
i__9874_9989 = G__10019;
continue;
} else {
var temp__5804__auto___10020 = cljs.core.seq.call(null,seq__9871_9986);
if(temp__5804__auto___10020){
var seq__9871_10021__$1 = temp__5804__auto___10020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9871_10021__$1)){
var c__5525__auto___10022 = cljs.core.chunk_first.call(null,seq__9871_10021__$1);
var G__10023 = cljs.core.chunk_rest.call(null,seq__9871_10021__$1);
var G__10024 = c__5525__auto___10022;
var G__10025 = cljs.core.count.call(null,c__5525__auto___10022);
var G__10026 = (0);
seq__9871_9986 = G__10023;
chunk__9872_9987 = G__10024;
count__9873_9988 = G__10025;
i__9874_9989 = G__10026;
continue;
} else {
var component__7938__auto___10027 = cljs.core.first.call(null,seq__9871_10021__$1);
speclj.components.install.call(null,component__7938__auto___10027,description__7937__auto____$2);


var G__10028 = cljs.core.next.call(null,seq__9871_10021__$1);
var G__10029 = null;
var G__10030 = (0);
var G__10031 = (0);
seq__9871_9986 = G__10028;
chunk__9872_9987 = G__10029;
count__9873_9988 = G__10030;
i__9874_9989 = G__10031;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9869_9984);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})()],null)));
var chunk__9804_9901 = null;
var count__9805_9902 = (0);
var i__9806_9903 = (0);
while(true){
if((i__9806_9903 < count__9805_9902)){
var component__7938__auto___10032 = cljs.core._nth.call(null,chunk__9804_9901,i__9806_9903);
speclj.components.install.call(null,component__7938__auto___10032,description__7937__auto____$1);


var G__10033 = seq__9803_9900;
var G__10034 = chunk__9804_9901;
var G__10035 = count__9805_9902;
var G__10036 = (i__9806_9903 + (1));
seq__9803_9900 = G__10033;
chunk__9804_9901 = G__10034;
count__9805_9902 = G__10035;
i__9806_9903 = G__10036;
continue;
} else {
var temp__5804__auto___10037 = cljs.core.seq.call(null,seq__9803_9900);
if(temp__5804__auto___10037){
var seq__9803_10038__$1 = temp__5804__auto___10037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9803_10038__$1)){
var c__5525__auto___10039 = cljs.core.chunk_first.call(null,seq__9803_10038__$1);
var G__10040 = cljs.core.chunk_rest.call(null,seq__9803_10038__$1);
var G__10041 = c__5525__auto___10039;
var G__10042 = cljs.core.count.call(null,c__5525__auto___10039);
var G__10043 = (0);
seq__9803_9900 = G__10040;
chunk__9804_9901 = G__10041;
count__9805_9902 = G__10042;
i__9806_9903 = G__10043;
continue;
} else {
var component__7938__auto___10044 = cljs.core.first.call(null,seq__9803_10038__$1);
speclj.components.install.call(null,component__7938__auto___10044,description__7937__auto____$1);


var G__10045 = cljs.core.next.call(null,seq__9803_10038__$1);
var G__10046 = null;
var G__10047 = (0);
var G__10048 = (0);
seq__9803_9900 = G__10045;
chunk__9804_9901 = G__10046;
count__9805_9902 = G__10047;
i__9806_9903 = G__10048;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9801_9898);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__9392_9895 = null;
var count__9393_9896 = (0);
var i__9394_9897 = (0);
while(true){
if((i__9394_9897 < count__9393_9896)){
var component__7938__auto___10049 = cljs.core._nth.call(null,chunk__9392_9895,i__9394_9897);
speclj.components.install.call(null,component__7938__auto___10049,description__7937__auto___9891);


var G__10050 = seq__9391_9894;
var G__10051 = chunk__9392_9895;
var G__10052 = count__9393_9896;
var G__10053 = (i__9394_9897 + (1));
seq__9391_9894 = G__10050;
chunk__9392_9895 = G__10051;
count__9393_9896 = G__10052;
i__9394_9897 = G__10053;
continue;
} else {
var temp__5804__auto___10054 = cljs.core.seq.call(null,seq__9391_9894);
if(temp__5804__auto___10054){
var seq__9391_10055__$1 = temp__5804__auto___10054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9391_10055__$1)){
var c__5525__auto___10056 = cljs.core.chunk_first.call(null,seq__9391_10055__$1);
var G__10057 = cljs.core.chunk_rest.call(null,seq__9391_10055__$1);
var G__10058 = c__5525__auto___10056;
var G__10059 = cljs.core.count.call(null,c__5525__auto___10056);
var G__10060 = (0);
seq__9391_9894 = G__10057;
chunk__9392_9895 = G__10058;
count__9393_9896 = G__10059;
i__9394_9897 = G__10060;
continue;
} else {
var component__7938__auto___10061 = cljs.core.first.call(null,seq__9391_10055__$1);
speclj.components.install.call(null,component__7938__auto___10061,description__7937__auto___9891);


var G__10062 = cljs.core.next.call(null,seq__9391_10055__$1);
var G__10063 = null;
var G__10064 = (0);
var G__10065 = (0);
seq__9391_9894 = G__10062;
chunk__9392_9895 = G__10063;
count__9393_9896 = G__10064;
i__9394_9897 = G__10065;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9389_9892);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___9891);
}


//# sourceMappingURL=hardc_spec.js.map
