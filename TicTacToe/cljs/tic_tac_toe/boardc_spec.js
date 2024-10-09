// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.boardc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.spec_helperc');
var description__7937__auto___11957 = speclj.components.new_description.call(null,"board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__10959_11958 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10960_11959 = description__7937__auto___11957;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10960_11959);

try{var seq__10961_11960 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-active-player",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11461_11964 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11462_11965 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11462_11965);

try{var seq__11463_11966 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns O if there are mores Xs on the board",((function (_STAR_parent_description_STAR__orig_val__11461_11964,_STAR_parent_description_STAR__temp_val__11462_11965,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = "O";
var actual__8075__auto__ = tic_tac_toe.boardc.get_active_player.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null));
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
});})(_STAR_parent_description_STAR__orig_val__11461_11964,_STAR_parent_description_STAR__temp_val__11462_11965,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns X if there are more O's on the board",((function (_STAR_parent_description_STAR__orig_val__11461_11964,_STAR_parent_description_STAR__temp_val__11462_11965,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = "X";
var actual__8075__auto__ = tic_tac_toe.boardc.get_active_player.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","X"], null));
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
});})(_STAR_parent_description_STAR__orig_val__11461_11964,_STAR_parent_description_STAR__temp_val__11462_11965,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns X if there are equal X's and O's",((function (_STAR_parent_description_STAR__orig_val__11461_11964,_STAR_parent_description_STAR__temp_val__11462_11965,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = "X";
var actual__8075__auto__ = tic_tac_toe.boardc.get_active_player.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O","O"], null));
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
});})(_STAR_parent_description_STAR__orig_val__11461_11964,_STAR_parent_description_STAR__temp_val__11462_11965,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11464_11967 = null;
var count__11465_11968 = (0);
var i__11466_11969 = (0);
while(true){
if((i__11466_11969 < count__11465_11968)){
var component__7938__auto___11970 = cljs.core._nth.call(null,chunk__11464_11967,i__11466_11969);
speclj.components.install.call(null,component__7938__auto___11970,description__7937__auto____$1);


var G__11971 = seq__11463_11966;
var G__11972 = chunk__11464_11967;
var G__11973 = count__11465_11968;
var G__11974 = (i__11466_11969 + (1));
seq__11463_11966 = G__11971;
chunk__11464_11967 = G__11972;
count__11465_11968 = G__11973;
i__11466_11969 = G__11974;
continue;
} else {
var temp__5804__auto___11975 = cljs.core.seq.call(null,seq__11463_11966);
if(temp__5804__auto___11975){
var seq__11463_11976__$1 = temp__5804__auto___11975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11463_11976__$1)){
var c__5525__auto___11977 = cljs.core.chunk_first.call(null,seq__11463_11976__$1);
var G__11978 = cljs.core.chunk_rest.call(null,seq__11463_11976__$1);
var G__11979 = c__5525__auto___11977;
var G__11980 = cljs.core.count.call(null,c__5525__auto___11977);
var G__11981 = (0);
seq__11463_11966 = G__11978;
chunk__11464_11967 = G__11979;
count__11465_11968 = G__11980;
i__11466_11969 = G__11981;
continue;
} else {
var component__7938__auto___11982 = cljs.core.first.call(null,seq__11463_11976__$1);
speclj.components.install.call(null,component__7938__auto___11982,description__7937__auto____$1);


var G__11983 = cljs.core.next.call(null,seq__11463_11976__$1);
var G__11984 = null;
var G__11985 = (0);
var G__11986 = (0);
seq__11463_11966 = G__11983;
chunk__11464_11967 = G__11984;
count__11465_11968 = G__11985;
i__11466_11969 = G__11986;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11461_11964);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-available-moves",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11467_11987 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11468_11988 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11468_11988);

try{var seq__11469_11989 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns all moves if all moves are available",((function (_STAR_parent_description_STAR__orig_val__11467_11987,_STAR_parent_description_STAR__temp_val__11468_11988,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = cljs.core.range.call(null,(9));
var actual__8075__auto__ = tic_tac_toe.boardc.get_available_moves.call(null,cljs.core.range.call(null,(9)));
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
});})(_STAR_parent_description_STAR__orig_val__11467_11987,_STAR_parent_description_STAR__temp_val__11468_11988,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns no moves if no moves are available",((function (_STAR_parent_description_STAR__orig_val__11467_11987,_STAR_parent_description_STAR__temp_val__11468_11988,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = cljs.core.PersistentVector.EMPTY;
var actual__8075__auto__ = tic_tac_toe.boardc.get_available_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O","O","X","X","O","O","X"], null));
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
});})(_STAR_parent_description_STAR__orig_val__11467_11987,_STAR_parent_description_STAR__temp_val__11468_11988,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns just the available moves",((function (_STAR_parent_description_STAR__orig_val__11467_11987,_STAR_parent_description_STAR__temp_val__11468_11988,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto___11993 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(6)], null);
var actual__8075__auto___11994 = tic_tac_toe.boardc.get_available_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"O",(3),"X","X",(6),"O","X"], null));
if(cljs.core._EQ_.call(null,expected__8074__auto___11993,actual__8075__auto___11994)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___11993;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___11994;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(6),(7),(8)], null);
var actual__8075__auto__ = tic_tac_toe.boardc.get_available_moves.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(2),"X","X",(5),(6),(7),(8)], null));
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
});})(_STAR_parent_description_STAR__orig_val__11467_11987,_STAR_parent_description_STAR__temp_val__11468_11988,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11470_11990 = null;
var count__11471_11991 = (0);
var i__11472_11992 = (0);
while(true){
if((i__11472_11992 < count__11471_11991)){
var component__7938__auto___11995 = cljs.core._nth.call(null,chunk__11470_11990,i__11472_11992);
speclj.components.install.call(null,component__7938__auto___11995,description__7937__auto____$1);


var G__11996 = seq__11469_11989;
var G__11997 = chunk__11470_11990;
var G__11998 = count__11471_11991;
var G__11999 = (i__11472_11992 + (1));
seq__11469_11989 = G__11996;
chunk__11470_11990 = G__11997;
count__11471_11991 = G__11998;
i__11472_11992 = G__11999;
continue;
} else {
var temp__5804__auto___12000 = cljs.core.seq.call(null,seq__11469_11989);
if(temp__5804__auto___12000){
var seq__11469_12001__$1 = temp__5804__auto___12000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11469_12001__$1)){
var c__5525__auto___12002 = cljs.core.chunk_first.call(null,seq__11469_12001__$1);
var G__12003 = cljs.core.chunk_rest.call(null,seq__11469_12001__$1);
var G__12004 = c__5525__auto___12002;
var G__12005 = cljs.core.count.call(null,c__5525__auto___12002);
var G__12006 = (0);
seq__11469_11989 = G__12003;
chunk__11470_11990 = G__12004;
count__11471_11991 = G__12005;
i__11472_11992 = G__12006;
continue;
} else {
var component__7938__auto___12007 = cljs.core.first.call(null,seq__11469_12001__$1);
speclj.components.install.call(null,component__7938__auto___12007,description__7937__auto____$1);


var G__12008 = cljs.core.next.call(null,seq__11469_12001__$1);
var G__12009 = null;
var G__12010 = (0);
var G__12011 = (0);
seq__11469_11989 = G__12008;
chunk__11470_11990 = G__12009;
count__11471_11991 = G__12010;
i__11472_11992 = G__12011;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11467_11987);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"update-board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11473_12012 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11474_12013 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11474_12013);

try{var seq__11475_12014 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"finds active player and plays selection on board",((function (_STAR_parent_description_STAR__orig_val__11473_12012,_STAR_parent_description_STAR__temp_val__11474_12013,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__8075__auto__ = tic_tac_toe.boardc.update_board.call(null,(0),cljs.core.range.call(null,(9)));
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
});})(_STAR_parent_description_STAR__orig_val__11473_12012,_STAR_parent_description_STAR__temp_val__11474_12013,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"finds active player and turns selection into active player.",((function (_STAR_parent_description_STAR__orig_val__11473_12012,_STAR_parent_description_STAR__temp_val__11474_12013,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"O",(3),(4),(5),(6),(7),(8)], null);
var actual__8075__auto__ = tic_tac_toe.boardc.update_board.call(null,(2),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null));
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
});})(_STAR_parent_description_STAR__orig_val__11473_12012,_STAR_parent_description_STAR__temp_val__11474_12013,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"if given 3 arguments, puts player-token on board ",((function (_STAR_parent_description_STAR__orig_val__11473_12012,_STAR_parent_description_STAR__temp_val__11474_12013,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"X",(3),(4),(5),(6),(7),(8)], null);
var actual__8075__auto__ = tic_tac_toe.boardc.update_board.call(null,"X",(2),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null));
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
});})(_STAR_parent_description_STAR__orig_val__11473_12012,_STAR_parent_description_STAR__temp_val__11474_12013,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11476_12015 = null;
var count__11477_12016 = (0);
var i__11478_12017 = (0);
while(true){
if((i__11478_12017 < count__11477_12016)){
var component__7938__auto___12018 = cljs.core._nth.call(null,chunk__11476_12015,i__11478_12017);
speclj.components.install.call(null,component__7938__auto___12018,description__7937__auto____$1);


var G__12019 = seq__11475_12014;
var G__12020 = chunk__11476_12015;
var G__12021 = count__11477_12016;
var G__12022 = (i__11478_12017 + (1));
seq__11475_12014 = G__12019;
chunk__11476_12015 = G__12020;
count__11477_12016 = G__12021;
i__11478_12017 = G__12022;
continue;
} else {
var temp__5804__auto___12023 = cljs.core.seq.call(null,seq__11475_12014);
if(temp__5804__auto___12023){
var seq__11475_12024__$1 = temp__5804__auto___12023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11475_12024__$1)){
var c__5525__auto___12025 = cljs.core.chunk_first.call(null,seq__11475_12024__$1);
var G__12026 = cljs.core.chunk_rest.call(null,seq__11475_12024__$1);
var G__12027 = c__5525__auto___12025;
var G__12028 = cljs.core.count.call(null,c__5525__auto___12025);
var G__12029 = (0);
seq__11475_12014 = G__12026;
chunk__11476_12015 = G__12027;
count__11477_12016 = G__12028;
i__11478_12017 = G__12029;
continue;
} else {
var component__7938__auto___12030 = cljs.core.first.call(null,seq__11475_12024__$1);
speclj.components.install.call(null,component__7938__auto___12030,description__7937__auto____$1);


var G__12031 = cljs.core.next.call(null,seq__11475_12024__$1);
var G__12032 = null;
var G__12033 = (0);
var G__12034 = (0);
seq__11475_12014 = G__12031;
chunk__11476_12015 = G__12032;
count__11477_12016 = G__12033;
i__11478_12017 = G__12034;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11473_12012);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"rotate-plane-x",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11479_12035 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11480_12036 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11480_12036);

try{var seq__11481_12037 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"makes a sideways plane",((function (_STAR_parent_description_STAR__orig_val__11479_12035,_STAR_parent_description_STAR__temp_val__11480_12036,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var plane_0 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(15),(6),(21),(12),(3),(18),(9),(0)], null);
var plane_1 = cljs.core.map.call(null,cljs.core.inc,plane_0);
var plane_2 = cljs.core.map.call(null,cljs.core.inc,plane_1);
var expected__8074__auto___12041 = plane_0;
var actual__8075__auto___12042 = tic_tac_toe.boardc.rotate_plane_x.call(null,cljs.core.range.call(null,(27)),(0));
if(cljs.core._EQ_.call(null,expected__8074__auto___12041,actual__8075__auto___12042)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___12041;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___12042;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto___12043 = plane_1;
var actual__8075__auto___12044 = tic_tac_toe.boardc.rotate_plane_x.call(null,cljs.core.range.call(null,(27)),(1));
if(cljs.core._EQ_.call(null,expected__8074__auto___12043,actual__8075__auto___12044)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___12043;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___12044;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = plane_2;
var actual__8075__auto__ = tic_tac_toe.boardc.rotate_plane_x.call(null,cljs.core.range.call(null,(27)),(2));
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
});})(_STAR_parent_description_STAR__orig_val__11479_12035,_STAR_parent_description_STAR__temp_val__11480_12036,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11482_12038 = null;
var count__11483_12039 = (0);
var i__11484_12040 = (0);
while(true){
if((i__11484_12040 < count__11483_12039)){
var component__7938__auto___12045 = cljs.core._nth.call(null,chunk__11482_12038,i__11484_12040);
speclj.components.install.call(null,component__7938__auto___12045,description__7937__auto____$1);


var G__12046 = seq__11481_12037;
var G__12047 = chunk__11482_12038;
var G__12048 = count__11483_12039;
var G__12049 = (i__11484_12040 + (1));
seq__11481_12037 = G__12046;
chunk__11482_12038 = G__12047;
count__11483_12039 = G__12048;
i__11484_12040 = G__12049;
continue;
} else {
var temp__5804__auto___12050 = cljs.core.seq.call(null,seq__11481_12037);
if(temp__5804__auto___12050){
var seq__11481_12051__$1 = temp__5804__auto___12050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11481_12051__$1)){
var c__5525__auto___12052 = cljs.core.chunk_first.call(null,seq__11481_12051__$1);
var G__12053 = cljs.core.chunk_rest.call(null,seq__11481_12051__$1);
var G__12054 = c__5525__auto___12052;
var G__12055 = cljs.core.count.call(null,c__5525__auto___12052);
var G__12056 = (0);
seq__11481_12037 = G__12053;
chunk__11482_12038 = G__12054;
count__11483_12039 = G__12055;
i__11484_12040 = G__12056;
continue;
} else {
var component__7938__auto___12057 = cljs.core.first.call(null,seq__11481_12051__$1);
speclj.components.install.call(null,component__7938__auto___12057,description__7937__auto____$1);


var G__12058 = cljs.core.next.call(null,seq__11481_12051__$1);
var G__12059 = null;
var G__12060 = (0);
var G__12061 = (0);
seq__11481_12037 = G__12058;
chunk__11482_12038 = G__12059;
count__11483_12039 = G__12060;
i__11484_12040 = G__12061;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11479_12035);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"rotate-cube-x",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11485_12062 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11486_12063 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11486_12063);

try{var seq__11487_12064 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"makes a sideways board",((function (_STAR_parent_description_STAR__orig_val__11485_12062,_STAR_parent_description_STAR__temp_val__11486_12063,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto___12068 = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(20),(5),(14),(23),(8),(17),(26),(1),(10),(19),(4),(13),(22),(7),(16),(25),(0),(9),(18),(3),(12),(21),(6),(15),(24)], null);
var actual__8075__auto___12069 = tic_tac_toe.boardc.rotate_cube_x.call(null,cljs.core.range.call(null,(27)));
if(cljs.core._EQ_.call(null,expected__8074__auto___12068,actual__8075__auto___12069)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___12068;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___12069;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(20),(5),(14),(23),(8),(17),(26),(1),(10),(19),(4),(13),(22),(7),(16),(25),(0),(9),"X",(3),(12),(21),(6),(15),(24)], null);
var actual__8075__auto__ = tic_tac_toe.boardc.rotate_cube_x.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18)], null),cljs.core.range.call(null,(27))));
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
});})(_STAR_parent_description_STAR__orig_val__11485_12062,_STAR_parent_description_STAR__temp_val__11486_12063,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11488_12065 = null;
var count__11489_12066 = (0);
var i__11490_12067 = (0);
while(true){
if((i__11490_12067 < count__11489_12066)){
var component__7938__auto___12070 = cljs.core._nth.call(null,chunk__11488_12065,i__11490_12067);
speclj.components.install.call(null,component__7938__auto___12070,description__7937__auto____$1);


var G__12071 = seq__11487_12064;
var G__12072 = chunk__11488_12065;
var G__12073 = count__11489_12066;
var G__12074 = (i__11490_12067 + (1));
seq__11487_12064 = G__12071;
chunk__11488_12065 = G__12072;
count__11489_12066 = G__12073;
i__11490_12067 = G__12074;
continue;
} else {
var temp__5804__auto___12075 = cljs.core.seq.call(null,seq__11487_12064);
if(temp__5804__auto___12075){
var seq__11487_12076__$1 = temp__5804__auto___12075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11487_12076__$1)){
var c__5525__auto___12077 = cljs.core.chunk_first.call(null,seq__11487_12076__$1);
var G__12078 = cljs.core.chunk_rest.call(null,seq__11487_12076__$1);
var G__12079 = c__5525__auto___12077;
var G__12080 = cljs.core.count.call(null,c__5525__auto___12077);
var G__12081 = (0);
seq__11487_12064 = G__12078;
chunk__11488_12065 = G__12079;
count__11489_12066 = G__12080;
i__11490_12067 = G__12081;
continue;
} else {
var component__7938__auto___12082 = cljs.core.first.call(null,seq__11487_12076__$1);
speclj.components.install.call(null,component__7938__auto___12082,description__7937__auto____$1);


var G__12083 = cljs.core.next.call(null,seq__11487_12076__$1);
var G__12084 = null;
var G__12085 = (0);
var G__12086 = (0);
seq__11487_12064 = G__12083;
chunk__11488_12065 = G__12084;
count__11489_12066 = G__12085;
i__11490_12067 = G__12086;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11485_12062);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"rotate-plane-y",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11491_12087 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11492_12088 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11492_12088);

try{var seq__11493_12089 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11509_12093 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11510_12094 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11510_12094);

try{var seq__11511_12095 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns a 90 degree rotation of the board",((function (_STAR_parent_description_STAR__orig_val__11509_12093,_STAR_parent_description_STAR__temp_val__11510_12094,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11491_12087,_STAR_parent_description_STAR__temp_val__11492_12088,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto___12099 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(1),(4),(7),(0),(3),(6)], null);
var actual__8075__auto___12100 = tic_tac_toe.boardc.rotate_plane_y.call(null,cljs.core.range.call(null,(9)));
if(cljs.core._EQ_.call(null,expected__8074__auto___12099,actual__8075__auto___12100)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___12099;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___12100;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto___12101 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(14),(17),(10),(13),(16),(9),(12),(15)], null);
var actual__8075__auto___12102 = tic_tac_toe.boardc.rotate_plane_y.call(null,cljs.core.drop.call(null,(9),cljs.core.range.call(null,(18))));
if(cljs.core._EQ_.call(null,expected__8074__auto___12101,actual__8075__auto___12102)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___12101;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___12102;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(23),(26),(19),(22),(25),(18),(21),(24)], null);
var actual__8075__auto__ = tic_tac_toe.boardc.rotate_plane_y.call(null,cljs.core.drop.call(null,(18),cljs.core.range.call(null,(27))));
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
});})(_STAR_parent_description_STAR__orig_val__11509_12093,_STAR_parent_description_STAR__temp_val__11510_12094,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11491_12087,_STAR_parent_description_STAR__temp_val__11492_12088,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11512_12096 = null;
var count__11513_12097 = (0);
var i__11514_12098 = (0);
while(true){
if((i__11514_12098 < count__11513_12097)){
var component__7938__auto___12103 = cljs.core._nth.call(null,chunk__11512_12096,i__11514_12098);
speclj.components.install.call(null,component__7938__auto___12103,description__7937__auto____$2);


var G__12104 = seq__11511_12095;
var G__12105 = chunk__11512_12096;
var G__12106 = count__11513_12097;
var G__12107 = (i__11514_12098 + (1));
seq__11511_12095 = G__12104;
chunk__11512_12096 = G__12105;
count__11513_12097 = G__12106;
i__11514_12098 = G__12107;
continue;
} else {
var temp__5804__auto___12108 = cljs.core.seq.call(null,seq__11511_12095);
if(temp__5804__auto___12108){
var seq__11511_12109__$1 = temp__5804__auto___12108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11511_12109__$1)){
var c__5525__auto___12110 = cljs.core.chunk_first.call(null,seq__11511_12109__$1);
var G__12111 = cljs.core.chunk_rest.call(null,seq__11511_12109__$1);
var G__12112 = c__5525__auto___12110;
var G__12113 = cljs.core.count.call(null,c__5525__auto___12110);
var G__12114 = (0);
seq__11511_12095 = G__12111;
chunk__11512_12096 = G__12112;
count__11513_12097 = G__12113;
i__11514_12098 = G__12114;
continue;
} else {
var component__7938__auto___12115 = cljs.core.first.call(null,seq__11511_12109__$1);
speclj.components.install.call(null,component__7938__auto___12115,description__7937__auto____$2);


var G__12116 = cljs.core.next.call(null,seq__11511_12109__$1);
var G__12117 = null;
var G__12118 = (0);
var G__12119 = (0);
seq__11511_12095 = G__12116;
chunk__11512_12096 = G__12117;
count__11513_12097 = G__12118;
i__11514_12098 = G__12119;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11509_12093);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11515_12120 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11516_12121 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11516_12121);

try{var seq__11517_12122 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns a 90 degree rotation of the board",((function (_STAR_parent_description_STAR__orig_val__11515_12120,_STAR_parent_description_STAR__temp_val__11516_12121,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11491_12087,_STAR_parent_description_STAR__temp_val__11492_12088,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(7),(11),(15),(2),(6),(10),(14),(1),(5),(9),(13),(0),(4),(8),(12)], null);
var actual__8075__auto__ = tic_tac_toe.boardc.rotate_plane_y.call(null,cljs.core.range.call(null,(16)));
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
});})(_STAR_parent_description_STAR__orig_val__11515_12120,_STAR_parent_description_STAR__temp_val__11516_12121,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11491_12087,_STAR_parent_description_STAR__temp_val__11492_12088,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11518_12123 = null;
var count__11519_12124 = (0);
var i__11520_12125 = (0);
while(true){
if((i__11520_12125 < count__11519_12124)){
var component__7938__auto___12126 = cljs.core._nth.call(null,chunk__11518_12123,i__11520_12125);
speclj.components.install.call(null,component__7938__auto___12126,description__7937__auto____$2);


var G__12127 = seq__11517_12122;
var G__12128 = chunk__11518_12123;
var G__12129 = count__11519_12124;
var G__12130 = (i__11520_12125 + (1));
seq__11517_12122 = G__12127;
chunk__11518_12123 = G__12128;
count__11519_12124 = G__12129;
i__11520_12125 = G__12130;
continue;
} else {
var temp__5804__auto___12131 = cljs.core.seq.call(null,seq__11517_12122);
if(temp__5804__auto___12131){
var seq__11517_12132__$1 = temp__5804__auto___12131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11517_12132__$1)){
var c__5525__auto___12133 = cljs.core.chunk_first.call(null,seq__11517_12132__$1);
var G__12134 = cljs.core.chunk_rest.call(null,seq__11517_12132__$1);
var G__12135 = c__5525__auto___12133;
var G__12136 = cljs.core.count.call(null,c__5525__auto___12133);
var G__12137 = (0);
seq__11517_12122 = G__12134;
chunk__11518_12123 = G__12135;
count__11519_12124 = G__12136;
i__11520_12125 = G__12137;
continue;
} else {
var component__7938__auto___12138 = cljs.core.first.call(null,seq__11517_12132__$1);
speclj.components.install.call(null,component__7938__auto___12138,description__7937__auto____$2);


var G__12139 = cljs.core.next.call(null,seq__11517_12132__$1);
var G__12140 = null;
var G__12141 = (0);
var G__12142 = (0);
seq__11517_12122 = G__12139;
chunk__11518_12123 = G__12140;
count__11519_12124 = G__12141;
i__11520_12125 = G__12142;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11515_12120);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})()],null)));
var chunk__11494_12090 = null;
var count__11495_12091 = (0);
var i__11496_12092 = (0);
while(true){
if((i__11496_12092 < count__11495_12091)){
var component__7938__auto___12143 = cljs.core._nth.call(null,chunk__11494_12090,i__11496_12092);
speclj.components.install.call(null,component__7938__auto___12143,description__7937__auto____$1);


var G__12144 = seq__11493_12089;
var G__12145 = chunk__11494_12090;
var G__12146 = count__11495_12091;
var G__12147 = (i__11496_12092 + (1));
seq__11493_12089 = G__12144;
chunk__11494_12090 = G__12145;
count__11495_12091 = G__12146;
i__11496_12092 = G__12147;
continue;
} else {
var temp__5804__auto___12148 = cljs.core.seq.call(null,seq__11493_12089);
if(temp__5804__auto___12148){
var seq__11493_12149__$1 = temp__5804__auto___12148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11493_12149__$1)){
var c__5525__auto___12150 = cljs.core.chunk_first.call(null,seq__11493_12149__$1);
var G__12151 = cljs.core.chunk_rest.call(null,seq__11493_12149__$1);
var G__12152 = c__5525__auto___12150;
var G__12153 = cljs.core.count.call(null,c__5525__auto___12150);
var G__12154 = (0);
seq__11493_12089 = G__12151;
chunk__11494_12090 = G__12152;
count__11495_12091 = G__12153;
i__11496_12092 = G__12154;
continue;
} else {
var component__7938__auto___12155 = cljs.core.first.call(null,seq__11493_12149__$1);
speclj.components.install.call(null,component__7938__auto___12155,description__7937__auto____$1);


var G__12156 = cljs.core.next.call(null,seq__11493_12149__$1);
var G__12157 = null;
var G__12158 = (0);
var G__12159 = (0);
seq__11493_12089 = G__12156;
chunk__11494_12090 = G__12157;
count__11495_12091 = G__12158;
i__11496_12092 = G__12159;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11491_12087);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"rotate-cube-y",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11521_12160 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11522_12161 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11522_12161);

try{var seq__11523_12162 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns whole board rotated 90 degrees on the y axis",((function (_STAR_parent_description_STAR__orig_val__11521_12160,_STAR_parent_description_STAR__temp_val__11522_12161,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8),(1),(4),(7),(0),(3),(6),(11),(14),(17),(10),(13),(16),(9),(12),(15),(20),(23),(26),(19),(22),(25),(18),(21),(24)], null);
var actual__8075__auto__ = tic_tac_toe.boardc.rotate_cube_y.call(null,cljs.core.range.call(null,(27)));
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
});})(_STAR_parent_description_STAR__orig_val__11521_12160,_STAR_parent_description_STAR__temp_val__11522_12161,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11524_12163 = null;
var count__11525_12164 = (0);
var i__11526_12165 = (0);
while(true){
if((i__11526_12165 < count__11525_12164)){
var component__7938__auto___12166 = cljs.core._nth.call(null,chunk__11524_12163,i__11526_12165);
speclj.components.install.call(null,component__7938__auto___12166,description__7937__auto____$1);


var G__12167 = seq__11523_12162;
var G__12168 = chunk__11524_12163;
var G__12169 = count__11525_12164;
var G__12170 = (i__11526_12165 + (1));
seq__11523_12162 = G__12167;
chunk__11524_12163 = G__12168;
count__11525_12164 = G__12169;
i__11526_12165 = G__12170;
continue;
} else {
var temp__5804__auto___12171 = cljs.core.seq.call(null,seq__11523_12162);
if(temp__5804__auto___12171){
var seq__11523_12172__$1 = temp__5804__auto___12171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11523_12172__$1)){
var c__5525__auto___12173 = cljs.core.chunk_first.call(null,seq__11523_12172__$1);
var G__12174 = cljs.core.chunk_rest.call(null,seq__11523_12172__$1);
var G__12175 = c__5525__auto___12173;
var G__12176 = cljs.core.count.call(null,c__5525__auto___12173);
var G__12177 = (0);
seq__11523_12162 = G__12174;
chunk__11524_12163 = G__12175;
count__11525_12164 = G__12176;
i__11526_12165 = G__12177;
continue;
} else {
var component__7938__auto___12178 = cljs.core.first.call(null,seq__11523_12172__$1);
speclj.components.install.call(null,component__7938__auto___12178,description__7937__auto____$1);


var G__12179 = cljs.core.next.call(null,seq__11523_12172__$1);
var G__12180 = null;
var G__12181 = (0);
var G__12182 = (0);
seq__11523_12162 = G__12179;
chunk__11524_12163 = G__12180;
count__11525_12164 = G__12181;
i__11526_12165 = G__12182;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11521_12160);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"row-size",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11527_12183 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11528_12184 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11528_12184);

try{var seq__11529_12185 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 3 on 3x3 board",((function (_STAR_parent_description_STAR__orig_val__11527_12183,_STAR_parent_description_STAR__temp_val__11528_12184,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = (3);
var actual__8075__auto__ = tic_tac_toe.boardc.get_row_size.call(null,cljs.core.range.call(null,(9)));
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
});})(_STAR_parent_description_STAR__orig_val__11527_12183,_STAR_parent_description_STAR__temp_val__11528_12184,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns 4 on 4x4 board",((function (_STAR_parent_description_STAR__orig_val__11527_12183,_STAR_parent_description_STAR__temp_val__11528_12184,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = (4);
var actual__8075__auto__ = tic_tac_toe.boardc.get_row_size.call(null,cljs.core.range.call(null,(16)));
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
});})(_STAR_parent_description_STAR__orig_val__11527_12183,_STAR_parent_description_STAR__temp_val__11528_12184,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11530_12186 = null;
var count__11531_12187 = (0);
var i__11532_12188 = (0);
while(true){
if((i__11532_12188 < count__11531_12187)){
var component__7938__auto___12189 = cljs.core._nth.call(null,chunk__11530_12186,i__11532_12188);
speclj.components.install.call(null,component__7938__auto___12189,description__7937__auto____$1);


var G__12190 = seq__11529_12185;
var G__12191 = chunk__11530_12186;
var G__12192 = count__11531_12187;
var G__12193 = (i__11532_12188 + (1));
seq__11529_12185 = G__12190;
chunk__11530_12186 = G__12191;
count__11531_12187 = G__12192;
i__11532_12188 = G__12193;
continue;
} else {
var temp__5804__auto___12194 = cljs.core.seq.call(null,seq__11529_12185);
if(temp__5804__auto___12194){
var seq__11529_12195__$1 = temp__5804__auto___12194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11529_12195__$1)){
var c__5525__auto___12196 = cljs.core.chunk_first.call(null,seq__11529_12195__$1);
var G__12197 = cljs.core.chunk_rest.call(null,seq__11529_12195__$1);
var G__12198 = c__5525__auto___12196;
var G__12199 = cljs.core.count.call(null,c__5525__auto___12196);
var G__12200 = (0);
seq__11529_12185 = G__12197;
chunk__11530_12186 = G__12198;
count__11531_12187 = G__12199;
i__11532_12188 = G__12200;
continue;
} else {
var component__7938__auto___12201 = cljs.core.first.call(null,seq__11529_12195__$1);
speclj.components.install.call(null,component__7938__auto___12201,description__7937__auto____$1);


var G__12202 = cljs.core.next.call(null,seq__11529_12195__$1);
var G__12203 = null;
var G__12204 = (0);
var G__12205 = (0);
seq__11529_12185 = G__12202;
chunk__11530_12186 = G__12203;
count__11531_12187 = G__12204;
i__11532_12188 = G__12205;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11527_12183);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"win? - 2d",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11533_12206 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11534_12207 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11534_12207);

try{var seq__11535_12208 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"rows",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11557_12212 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11558_12213 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11558_12213);

try{var seq__11559_12214 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching 3 horizontals is a win on 3 x 3 board",((function (_STAR_parent_description_STAR__orig_val__11557_12212,_STAR_parent_description_STAR__temp_val__11558_12213,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12218 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(value__8062__auto___12218)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12218;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12219 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(value__8062__auto___12219)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12219;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11557_12212,_STAR_parent_description_STAR__temp_val__11558_12213,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching 4 horizontals is a win on 4 x 4 board",((function (_STAR_parent_description_STAR__orig_val__11557_12212,_STAR_parent_description_STAR__temp_val__11558_12213,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12220 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto___12220)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12220;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12221 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6),(7)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto___12221)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12221;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12222 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9),(10),(11)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto___12222)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12222;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(13),(14),(15)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11557_12212,_STAR_parent_description_STAR__temp_val__11558_12213,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"3x3 win doesn't count for 4x4 board",((function (_STAR_parent_description_STAR__orig_val__11557_12212,_STAR_parent_description_STAR__temp_val__11558_12213,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto___12223 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(temp__5804__auto___12223)){
var value__8068__auto___12224 = temp__5804__auto___12223;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto___12224;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
}

var temp__5804__auto___12225 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(temp__5804__auto___12225)){
var value__8068__auto___12226 = temp__5804__auto___12225;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto___12226;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
}

var temp__5804__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11557_12212,_STAR_parent_description_STAR__temp_val__11558_12213,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11560_12215 = null;
var count__11561_12216 = (0);
var i__11562_12217 = (0);
while(true){
if((i__11562_12217 < count__11561_12216)){
var component__7938__auto___12227 = cljs.core._nth.call(null,chunk__11560_12215,i__11562_12217);
speclj.components.install.call(null,component__7938__auto___12227,description__7937__auto____$2);


var G__12228 = seq__11559_12214;
var G__12229 = chunk__11560_12215;
var G__12230 = count__11561_12216;
var G__12231 = (i__11562_12217 + (1));
seq__11559_12214 = G__12228;
chunk__11560_12215 = G__12229;
count__11561_12216 = G__12230;
i__11562_12217 = G__12231;
continue;
} else {
var temp__5804__auto___12232 = cljs.core.seq.call(null,seq__11559_12214);
if(temp__5804__auto___12232){
var seq__11559_12233__$1 = temp__5804__auto___12232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11559_12233__$1)){
var c__5525__auto___12234 = cljs.core.chunk_first.call(null,seq__11559_12233__$1);
var G__12235 = cljs.core.chunk_rest.call(null,seq__11559_12233__$1);
var G__12236 = c__5525__auto___12234;
var G__12237 = cljs.core.count.call(null,c__5525__auto___12234);
var G__12238 = (0);
seq__11559_12214 = G__12235;
chunk__11560_12215 = G__12236;
count__11561_12216 = G__12237;
i__11562_12217 = G__12238;
continue;
} else {
var component__7938__auto___12239 = cljs.core.first.call(null,seq__11559_12233__$1);
speclj.components.install.call(null,component__7938__auto___12239,description__7937__auto____$2);


var G__12240 = cljs.core.next.call(null,seq__11559_12233__$1);
var G__12241 = null;
var G__12242 = (0);
var G__12243 = (0);
seq__11559_12214 = G__12240;
chunk__11560_12215 = G__12241;
count__11561_12216 = G__12242;
i__11562_12217 = G__12243;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11557_12212);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"columns",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11563_12244 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11564_12245 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11564_12245);

try{var seq__11565_12246 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"Matching 3 verticals is a win on a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__11563_12244,_STAR_parent_description_STAR__temp_val__11564_12245,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12250 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(value__8062__auto___12250)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12250;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12251 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(value__8062__auto___12251)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12251;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11563_12244,_STAR_parent_description_STAR__temp_val__11564_12245,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching 4 horizontals is a win on 4 x 4 board",((function (_STAR_parent_description_STAR__orig_val__11563_12244,_STAR_parent_description_STAR__temp_val__11564_12245,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12252 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8),(12)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto___12252)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12252;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12253 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(9),(13)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto___12253)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12253;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12254 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6),(10),(14)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto___12254)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12254;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(7),(11),(15)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11563_12244,_STAR_parent_description_STAR__temp_val__11564_12245,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"3x3 win doesn't count for 4 x 4 board",((function (_STAR_parent_description_STAR__orig_val__11563_12244,_STAR_parent_description_STAR__temp_val__11564_12245,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto___12255 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(temp__5804__auto___12255)){
var value__8068__auto___12256 = temp__5804__auto___12255;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto___12256;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
}

var temp__5804__auto___12257 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(temp__5804__auto___12257)){
var value__8068__auto___12258 = temp__5804__auto___12257;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto___12258;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
}

var temp__5804__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11563_12244,_STAR_parent_description_STAR__temp_val__11564_12245,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11566_12247 = null;
var count__11567_12248 = (0);
var i__11568_12249 = (0);
while(true){
if((i__11568_12249 < count__11567_12248)){
var component__7938__auto___12259 = cljs.core._nth.call(null,chunk__11566_12247,i__11568_12249);
speclj.components.install.call(null,component__7938__auto___12259,description__7937__auto____$2);


var G__12260 = seq__11565_12246;
var G__12261 = chunk__11566_12247;
var G__12262 = count__11567_12248;
var G__12263 = (i__11568_12249 + (1));
seq__11565_12246 = G__12260;
chunk__11566_12247 = G__12261;
count__11567_12248 = G__12262;
i__11568_12249 = G__12263;
continue;
} else {
var temp__5804__auto___12264 = cljs.core.seq.call(null,seq__11565_12246);
if(temp__5804__auto___12264){
var seq__11565_12265__$1 = temp__5804__auto___12264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11565_12265__$1)){
var c__5525__auto___12266 = cljs.core.chunk_first.call(null,seq__11565_12265__$1);
var G__12267 = cljs.core.chunk_rest.call(null,seq__11565_12265__$1);
var G__12268 = c__5525__auto___12266;
var G__12269 = cljs.core.count.call(null,c__5525__auto___12266);
var G__12270 = (0);
seq__11565_12246 = G__12267;
chunk__11566_12247 = G__12268;
count__11567_12248 = G__12269;
i__11568_12249 = G__12270;
continue;
} else {
var component__7938__auto___12271 = cljs.core.first.call(null,seq__11565_12265__$1);
speclj.components.install.call(null,component__7938__auto___12271,description__7937__auto____$2);


var G__12272 = cljs.core.next.call(null,seq__11565_12265__$1);
var G__12273 = null;
var G__12274 = (0);
var G__12275 = (0);
seq__11565_12246 = G__12272;
chunk__11566_12247 = G__12273;
count__11567_12248 = G__12274;
i__11568_12249 = G__12275;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11563_12244);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"diagonal",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11569_12276 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11570_12277 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11570_12277);

try{var seq__11571_12278 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching diagonals are a win for 3 x 3",((function (_STAR_parent_description_STAR__orig_val__11569_12276,_STAR_parent_description_STAR__temp_val__11570_12277,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12282 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(value__8062__auto___12282)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12282;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11569_12276,_STAR_parent_description_STAR__temp_val__11570_12277,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching diagonals are a win for 4 x 4",((function (_STAR_parent_description_STAR__orig_val__11569_12276,_STAR_parent_description_STAR__temp_val__11570_12277,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12283 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(10),(15)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto___12283)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12283;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6),(9),(12)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11569_12276,_STAR_parent_description_STAR__temp_val__11570_12277,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"3x3 win doesn't count for 4 x 4 board",((function (_STAR_parent_description_STAR__orig_val__11569_12276,_STAR_parent_description_STAR__temp_val__11570_12277,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto___12284 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(temp__5804__auto___12284)){
var value__8068__auto___12285 = temp__5804__auto___12284;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto___12285;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
}

var temp__5804__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),cljs.core.range.call(null,(16))));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11569_12276,_STAR_parent_description_STAR__temp_val__11570_12277,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11533_12206,_STAR_parent_description_STAR__temp_val__11534_12207,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11572_12279 = null;
var count__11573_12280 = (0);
var i__11574_12281 = (0);
while(true){
if((i__11574_12281 < count__11573_12280)){
var component__7938__auto___12286 = cljs.core._nth.call(null,chunk__11572_12279,i__11574_12281);
speclj.components.install.call(null,component__7938__auto___12286,description__7937__auto____$2);


var G__12287 = seq__11571_12278;
var G__12288 = chunk__11572_12279;
var G__12289 = count__11573_12280;
var G__12290 = (i__11574_12281 + (1));
seq__11571_12278 = G__12287;
chunk__11572_12279 = G__12288;
count__11573_12280 = G__12289;
i__11574_12281 = G__12290;
continue;
} else {
var temp__5804__auto___12291 = cljs.core.seq.call(null,seq__11571_12278);
if(temp__5804__auto___12291){
var seq__11571_12292__$1 = temp__5804__auto___12291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11571_12292__$1)){
var c__5525__auto___12293 = cljs.core.chunk_first.call(null,seq__11571_12292__$1);
var G__12294 = cljs.core.chunk_rest.call(null,seq__11571_12292__$1);
var G__12295 = c__5525__auto___12293;
var G__12296 = cljs.core.count.call(null,c__5525__auto___12293);
var G__12297 = (0);
seq__11571_12278 = G__12294;
chunk__11572_12279 = G__12295;
count__11573_12280 = G__12296;
i__11574_12281 = G__12297;
continue;
} else {
var component__7938__auto___12298 = cljs.core.first.call(null,seq__11571_12292__$1);
speclj.components.install.call(null,component__7938__auto___12298,description__7937__auto____$2);


var G__12299 = cljs.core.next.call(null,seq__11571_12292__$1);
var G__12300 = null;
var G__12301 = (0);
var G__12302 = (0);
seq__11571_12278 = G__12299;
chunk__11572_12279 = G__12300;
count__11573_12280 = G__12301;
i__11574_12281 = G__12302;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11569_12276);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})()],null)));
var chunk__11536_12209 = null;
var count__11537_12210 = (0);
var i__11538_12211 = (0);
while(true){
if((i__11538_12211 < count__11537_12210)){
var component__7938__auto___12303 = cljs.core._nth.call(null,chunk__11536_12209,i__11538_12211);
speclj.components.install.call(null,component__7938__auto___12303,description__7937__auto____$1);


var G__12304 = seq__11535_12208;
var G__12305 = chunk__11536_12209;
var G__12306 = count__11537_12210;
var G__12307 = (i__11538_12211 + (1));
seq__11535_12208 = G__12304;
chunk__11536_12209 = G__12305;
count__11537_12210 = G__12306;
i__11538_12211 = G__12307;
continue;
} else {
var temp__5804__auto___12308 = cljs.core.seq.call(null,seq__11535_12208);
if(temp__5804__auto___12308){
var seq__11535_12309__$1 = temp__5804__auto___12308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11535_12309__$1)){
var c__5525__auto___12310 = cljs.core.chunk_first.call(null,seq__11535_12309__$1);
var G__12311 = cljs.core.chunk_rest.call(null,seq__11535_12309__$1);
var G__12312 = c__5525__auto___12310;
var G__12313 = cljs.core.count.call(null,c__5525__auto___12310);
var G__12314 = (0);
seq__11535_12208 = G__12311;
chunk__11536_12209 = G__12312;
count__11537_12210 = G__12313;
i__11538_12211 = G__12314;
continue;
} else {
var component__7938__auto___12315 = cljs.core.first.call(null,seq__11535_12309__$1);
speclj.components.install.call(null,component__7938__auto___12315,description__7937__auto____$1);


var G__12316 = cljs.core.next.call(null,seq__11535_12309__$1);
var G__12317 = null;
var G__12318 = (0);
var G__12319 = (0);
seq__11535_12208 = G__12316;
chunk__11536_12209 = G__12317;
count__11537_12210 = G__12318;
i__11538_12211 = G__12319;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11533_12206);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"win? 3-D",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11575_12320 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11576_12321 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11576_12321);

try{var seq__11577_12322 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,12,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"forward-facing",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11769_12326 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11770_12327 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11770_12327);

try{var seq__11771_12328 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"rows",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11793_12332 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11794_12333 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11794_12333);

try{var seq__11795_12334 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching any row on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11793_12332,_STAR_parent_description_STAR__temp_val__11794_12333,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12338 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12338)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12338;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12339 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12339)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12339;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11793_12332,_STAR_parent_description_STAR__temp_val__11794_12333,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching any row on plane 1 is a win.",((function (_STAR_parent_description_STAR__orig_val__11793_12332,_STAR_parent_description_STAR__temp_val__11794_12333,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12340 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12340)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12340;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12341 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(13),(14)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12341)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12341;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(16),(17)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11793_12332,_STAR_parent_description_STAR__temp_val__11794_12333,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching any row on plane 2 is a win",((function (_STAR_parent_description_STAR__orig_val__11793_12332,_STAR_parent_description_STAR__temp_val__11794_12333,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12342 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(19),(20)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12342)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12342;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12343 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(22),(23)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12343)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12343;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(25),(26)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11793_12332,_STAR_parent_description_STAR__temp_val__11794_12333,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11796_12335 = null;
var count__11797_12336 = (0);
var i__11798_12337 = (0);
while(true){
if((i__11798_12337 < count__11797_12336)){
var component__7938__auto___12344 = cljs.core._nth.call(null,chunk__11796_12335,i__11798_12337);
speclj.components.install.call(null,component__7938__auto___12344,description__7937__auto____$3);


var G__12345 = seq__11795_12334;
var G__12346 = chunk__11796_12335;
var G__12347 = count__11797_12336;
var G__12348 = (i__11798_12337 + (1));
seq__11795_12334 = G__12345;
chunk__11796_12335 = G__12346;
count__11797_12336 = G__12347;
i__11798_12337 = G__12348;
continue;
} else {
var temp__5804__auto___12349 = cljs.core.seq.call(null,seq__11795_12334);
if(temp__5804__auto___12349){
var seq__11795_12350__$1 = temp__5804__auto___12349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11795_12350__$1)){
var c__5525__auto___12351 = cljs.core.chunk_first.call(null,seq__11795_12350__$1);
var G__12352 = cljs.core.chunk_rest.call(null,seq__11795_12350__$1);
var G__12353 = c__5525__auto___12351;
var G__12354 = cljs.core.count.call(null,c__5525__auto___12351);
var G__12355 = (0);
seq__11795_12334 = G__12352;
chunk__11796_12335 = G__12353;
count__11797_12336 = G__12354;
i__11798_12337 = G__12355;
continue;
} else {
var component__7938__auto___12356 = cljs.core.first.call(null,seq__11795_12350__$1);
speclj.components.install.call(null,component__7938__auto___12356,description__7937__auto____$3);


var G__12357 = cljs.core.next.call(null,seq__11795_12350__$1);
var G__12358 = null;
var G__12359 = (0);
var G__12360 = (0);
seq__11795_12334 = G__12357;
chunk__11796_12335 = G__12358;
count__11797_12336 = G__12359;
i__11798_12337 = G__12360;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11793_12332);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})(),(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"columns",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11799_12361 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11800_12362 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11800_12362);

try{var seq__11801_12363 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching any column on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11799_12361,_STAR_parent_description_STAR__temp_val__11800_12362,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12367 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12367)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12367;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12368 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12368)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12368;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11799_12361,_STAR_parent_description_STAR__temp_val__11800_12362,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching any column on plane 1 is a win",((function (_STAR_parent_description_STAR__orig_val__11799_12361,_STAR_parent_description_STAR__temp_val__11800_12362,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12369 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(12),(15)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12369)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12369;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12370 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(13),(16)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12370)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12370;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(14),(17)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11799_12361,_STAR_parent_description_STAR__temp_val__11800_12362,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching any column on plane 2 is a win",((function (_STAR_parent_description_STAR__orig_val__11799_12361,_STAR_parent_description_STAR__temp_val__11800_12362,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12371 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(21),(24)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12371)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12371;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12372 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(22),(25)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12372)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12372;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(23),(26)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11799_12361,_STAR_parent_description_STAR__temp_val__11800_12362,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11802_12364 = null;
var count__11803_12365 = (0);
var i__11804_12366 = (0);
while(true){
if((i__11804_12366 < count__11803_12365)){
var component__7938__auto___12373 = cljs.core._nth.call(null,chunk__11802_12364,i__11804_12366);
speclj.components.install.call(null,component__7938__auto___12373,description__7937__auto____$3);


var G__12374 = seq__11801_12363;
var G__12375 = chunk__11802_12364;
var G__12376 = count__11803_12365;
var G__12377 = (i__11804_12366 + (1));
seq__11801_12363 = G__12374;
chunk__11802_12364 = G__12375;
count__11803_12365 = G__12376;
i__11804_12366 = G__12377;
continue;
} else {
var temp__5804__auto___12378 = cljs.core.seq.call(null,seq__11801_12363);
if(temp__5804__auto___12378){
var seq__11801_12379__$1 = temp__5804__auto___12378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11801_12379__$1)){
var c__5525__auto___12380 = cljs.core.chunk_first.call(null,seq__11801_12379__$1);
var G__12381 = cljs.core.chunk_rest.call(null,seq__11801_12379__$1);
var G__12382 = c__5525__auto___12380;
var G__12383 = cljs.core.count.call(null,c__5525__auto___12380);
var G__12384 = (0);
seq__11801_12363 = G__12381;
chunk__11802_12364 = G__12382;
count__11803_12365 = G__12383;
i__11804_12366 = G__12384;
continue;
} else {
var component__7938__auto___12385 = cljs.core.first.call(null,seq__11801_12379__$1);
speclj.components.install.call(null,component__7938__auto___12385,description__7937__auto____$3);


var G__12386 = cljs.core.next.call(null,seq__11801_12379__$1);
var G__12387 = null;
var G__12388 = (0);
var G__12389 = (0);
seq__11801_12363 = G__12386;
chunk__11802_12364 = G__12387;
count__11803_12365 = G__12388;
i__11804_12366 = G__12389;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11799_12361);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})(),(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"diagonals",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11805_12390 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11806_12391 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11806_12391);

try{var seq__11807_12392 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching any diagonal on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11805_12390,_STAR_parent_description_STAR__temp_val__11806_12391,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12396 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12396)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12396;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11805_12390,_STAR_parent_description_STAR__temp_val__11806_12391,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching any diagonal on plane 1 is a win",((function (_STAR_parent_description_STAR__orig_val__11805_12390,_STAR_parent_description_STAR__temp_val__11806_12391,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12397 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(13),(17)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12397)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12397;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(13),(11)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11805_12390,_STAR_parent_description_STAR__temp_val__11806_12391,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching any diagonal on plane 2 is a win",((function (_STAR_parent_description_STAR__orig_val__11805_12390,_STAR_parent_description_STAR__temp_val__11806_12391,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12398 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(22),(26)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12398)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12398;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(22),(20)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11805_12390,_STAR_parent_description_STAR__temp_val__11806_12391,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching diagonal 'skewers' count as a win",((function (_STAR_parent_description_STAR__orig_val__11805_12390,_STAR_parent_description_STAR__temp_val__11806_12391,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12399 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13),(26)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12399)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12399;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12400 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(13),(24)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12400)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12400;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12401 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13),(20)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12401)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12401;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(13),(18)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11805_12390,_STAR_parent_description_STAR__temp_val__11806_12391,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11769_12326,_STAR_parent_description_STAR__temp_val__11770_12327,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11808_12393 = null;
var count__11809_12394 = (0);
var i__11810_12395 = (0);
while(true){
if((i__11810_12395 < count__11809_12394)){
var component__7938__auto___12402 = cljs.core._nth.call(null,chunk__11808_12393,i__11810_12395);
speclj.components.install.call(null,component__7938__auto___12402,description__7937__auto____$3);


var G__12403 = seq__11807_12392;
var G__12404 = chunk__11808_12393;
var G__12405 = count__11809_12394;
var G__12406 = (i__11810_12395 + (1));
seq__11807_12392 = G__12403;
chunk__11808_12393 = G__12404;
count__11809_12394 = G__12405;
i__11810_12395 = G__12406;
continue;
} else {
var temp__5804__auto___12407 = cljs.core.seq.call(null,seq__11807_12392);
if(temp__5804__auto___12407){
var seq__11807_12408__$1 = temp__5804__auto___12407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11807_12408__$1)){
var c__5525__auto___12409 = cljs.core.chunk_first.call(null,seq__11807_12408__$1);
var G__12410 = cljs.core.chunk_rest.call(null,seq__11807_12408__$1);
var G__12411 = c__5525__auto___12409;
var G__12412 = cljs.core.count.call(null,c__5525__auto___12409);
var G__12413 = (0);
seq__11807_12392 = G__12410;
chunk__11808_12393 = G__12411;
count__11809_12394 = G__12412;
i__11810_12395 = G__12413;
continue;
} else {
var component__7938__auto___12414 = cljs.core.first.call(null,seq__11807_12408__$1);
speclj.components.install.call(null,component__7938__auto___12414,description__7937__auto____$3);


var G__12415 = cljs.core.next.call(null,seq__11807_12408__$1);
var G__12416 = null;
var G__12417 = (0);
var G__12418 = (0);
seq__11807_12392 = G__12415;
chunk__11808_12393 = G__12416;
count__11809_12394 = G__12417;
i__11810_12395 = G__12418;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11805_12390);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})()],null)));
var chunk__11772_12329 = null;
var count__11773_12330 = (0);
var i__11774_12331 = (0);
while(true){
if((i__11774_12331 < count__11773_12330)){
var component__7938__auto___12419 = cljs.core._nth.call(null,chunk__11772_12329,i__11774_12331);
speclj.components.install.call(null,component__7938__auto___12419,description__7937__auto____$2);


var G__12420 = seq__11771_12328;
var G__12421 = chunk__11772_12329;
var G__12422 = count__11773_12330;
var G__12423 = (i__11774_12331 + (1));
seq__11771_12328 = G__12420;
chunk__11772_12329 = G__12421;
count__11773_12330 = G__12422;
i__11774_12331 = G__12423;
continue;
} else {
var temp__5804__auto___12424 = cljs.core.seq.call(null,seq__11771_12328);
if(temp__5804__auto___12424){
var seq__11771_12425__$1 = temp__5804__auto___12424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11771_12425__$1)){
var c__5525__auto___12426 = cljs.core.chunk_first.call(null,seq__11771_12425__$1);
var G__12427 = cljs.core.chunk_rest.call(null,seq__11771_12425__$1);
var G__12428 = c__5525__auto___12426;
var G__12429 = cljs.core.count.call(null,c__5525__auto___12426);
var G__12430 = (0);
seq__11771_12328 = G__12427;
chunk__11772_12329 = G__12428;
count__11773_12330 = G__12429;
i__11774_12331 = G__12430;
continue;
} else {
var component__7938__auto___12431 = cljs.core.first.call(null,seq__11771_12425__$1);
speclj.components.install.call(null,component__7938__auto___12431,description__7937__auto____$2);


var G__12432 = cljs.core.next.call(null,seq__11771_12425__$1);
var G__12433 = null;
var G__12434 = (0);
var G__12435 = (0);
seq__11771_12328 = G__12432;
chunk__11772_12329 = G__12433;
count__11773_12330 = G__12434;
i__11774_12331 = G__12435;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11769_12326);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"side-ways facing",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11811_12436 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11812_12437 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11812_12437);

try{var seq__11813_12438 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"rows",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11835_12442 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11836_12443 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11836_12443);

try{var seq__11837_12444 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching row on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11835_12442,_STAR_parent_description_STAR__temp_val__11836_12443,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12448 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(9),(0)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12448)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12448;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12449 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(12),(3)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12449)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12449;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(15),(6)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11835_12442,_STAR_parent_description_STAR__temp_val__11836_12443,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching row on plane 1 is a win",((function (_STAR_parent_description_STAR__orig_val__11835_12442,_STAR_parent_description_STAR__temp_val__11836_12443,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12450 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(10),(1)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12450)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12450;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12451 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(13),(4)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12451)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12451;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(13),(4)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11835_12442,_STAR_parent_description_STAR__temp_val__11836_12443,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching row on plane 2 is a win",((function (_STAR_parent_description_STAR__orig_val__11835_12442,_STAR_parent_description_STAR__temp_val__11836_12443,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12452 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(11),(2)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12452)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12452;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12453 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(14),(5)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12453)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12453;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(17),(8)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11835_12442,_STAR_parent_description_STAR__temp_val__11836_12443,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11838_12445 = null;
var count__11839_12446 = (0);
var i__11840_12447 = (0);
while(true){
if((i__11840_12447 < count__11839_12446)){
var component__7938__auto___12454 = cljs.core._nth.call(null,chunk__11838_12445,i__11840_12447);
speclj.components.install.call(null,component__7938__auto___12454,description__7937__auto____$3);


var G__12455 = seq__11837_12444;
var G__12456 = chunk__11838_12445;
var G__12457 = count__11839_12446;
var G__12458 = (i__11840_12447 + (1));
seq__11837_12444 = G__12455;
chunk__11838_12445 = G__12456;
count__11839_12446 = G__12457;
i__11840_12447 = G__12458;
continue;
} else {
var temp__5804__auto___12459 = cljs.core.seq.call(null,seq__11837_12444);
if(temp__5804__auto___12459){
var seq__11837_12460__$1 = temp__5804__auto___12459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11837_12460__$1)){
var c__5525__auto___12461 = cljs.core.chunk_first.call(null,seq__11837_12460__$1);
var G__12462 = cljs.core.chunk_rest.call(null,seq__11837_12460__$1);
var G__12463 = c__5525__auto___12461;
var G__12464 = cljs.core.count.call(null,c__5525__auto___12461);
var G__12465 = (0);
seq__11837_12444 = G__12462;
chunk__11838_12445 = G__12463;
count__11839_12446 = G__12464;
i__11840_12447 = G__12465;
continue;
} else {
var component__7938__auto___12466 = cljs.core.first.call(null,seq__11837_12460__$1);
speclj.components.install.call(null,component__7938__auto___12466,description__7937__auto____$3);


var G__12467 = cljs.core.next.call(null,seq__11837_12460__$1);
var G__12468 = null;
var G__12469 = (0);
var G__12470 = (0);
seq__11837_12444 = G__12467;
chunk__11838_12445 = G__12468;
count__11839_12446 = G__12469;
i__11840_12447 = G__12470;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11835_12442);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})(),(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"diagonals",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11841_12471 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11842_12472 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11842_12472);

try{var seq__11843_12473 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching diagonal on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11841_12471,_STAR_parent_description_STAR__temp_val__11842_12472,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12477 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(12),(6)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12477)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12477;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(12),(24)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11841_12471,_STAR_parent_description_STAR__temp_val__11842_12472,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching diagonal on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11841_12471,_STAR_parent_description_STAR__temp_val__11842_12472,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12478 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(13),(7)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12478)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12478;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(13),(25)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11841_12471,_STAR_parent_description_STAR__temp_val__11842_12472,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching diagonal on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11841_12471,_STAR_parent_description_STAR__temp_val__11842_12472,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12479 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(14),(8)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12479)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12479;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(14),(26)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11841_12471,_STAR_parent_description_STAR__temp_val__11842_12472,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11844_12474 = null;
var count__11845_12475 = (0);
var i__11846_12476 = (0);
while(true){
if((i__11846_12476 < count__11845_12475)){
var component__7938__auto___12480 = cljs.core._nth.call(null,chunk__11844_12474,i__11846_12476);
speclj.components.install.call(null,component__7938__auto___12480,description__7937__auto____$3);


var G__12481 = seq__11843_12473;
var G__12482 = chunk__11844_12474;
var G__12483 = count__11845_12475;
var G__12484 = (i__11846_12476 + (1));
seq__11843_12473 = G__12481;
chunk__11844_12474 = G__12482;
count__11845_12475 = G__12483;
i__11846_12476 = G__12484;
continue;
} else {
var temp__5804__auto___12485 = cljs.core.seq.call(null,seq__11843_12473);
if(temp__5804__auto___12485){
var seq__11843_12486__$1 = temp__5804__auto___12485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11843_12486__$1)){
var c__5525__auto___12487 = cljs.core.chunk_first.call(null,seq__11843_12486__$1);
var G__12488 = cljs.core.chunk_rest.call(null,seq__11843_12486__$1);
var G__12489 = c__5525__auto___12487;
var G__12490 = cljs.core.count.call(null,c__5525__auto___12487);
var G__12491 = (0);
seq__11843_12473 = G__12488;
chunk__11844_12474 = G__12489;
count__11845_12475 = G__12490;
i__11846_12476 = G__12491;
continue;
} else {
var component__7938__auto___12492 = cljs.core.first.call(null,seq__11843_12486__$1);
speclj.components.install.call(null,component__7938__auto___12492,description__7937__auto____$3);


var G__12493 = cljs.core.next.call(null,seq__11843_12486__$1);
var G__12494 = null;
var G__12495 = (0);
var G__12496 = (0);
seq__11843_12473 = G__12493;
chunk__11844_12474 = G__12494;
count__11845_12475 = G__12495;
i__11846_12476 = G__12496;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11841_12471);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})(),(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"columns",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11847_12497 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11848_12498 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11848_12498);

try{var seq__11849_12499 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching columns on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11847_12497,_STAR_parent_description_STAR__temp_val__11848_12498,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12503 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12503)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12503;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12504 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(14),(17)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12504)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12504;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(23),(26)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11847_12497,_STAR_parent_description_STAR__temp_val__11848_12498,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching columns on plane 1 is a win",((function (_STAR_parent_description_STAR__orig_val__11847_12497,_STAR_parent_description_STAR__temp_val__11848_12498,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12505 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(19)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12505)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12505;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12506 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(13),(16)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12506)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12506;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(22),(25)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11847_12497,_STAR_parent_description_STAR__temp_val__11848_12498,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching columns on plane 2 is a win",((function (_STAR_parent_description_STAR__orig_val__11847_12497,_STAR_parent_description_STAR__temp_val__11848_12498,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12507 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12507)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12507;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12508 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(12),(15)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12508)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12508;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(21),(24)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11847_12497,_STAR_parent_description_STAR__temp_val__11848_12498,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11811_12436,_STAR_parent_description_STAR__temp_val__11812_12437,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11850_12500 = null;
var count__11851_12501 = (0);
var i__11852_12502 = (0);
while(true){
if((i__11852_12502 < count__11851_12501)){
var component__7938__auto___12509 = cljs.core._nth.call(null,chunk__11850_12500,i__11852_12502);
speclj.components.install.call(null,component__7938__auto___12509,description__7937__auto____$3);


var G__12510 = seq__11849_12499;
var G__12511 = chunk__11850_12500;
var G__12512 = count__11851_12501;
var G__12513 = (i__11852_12502 + (1));
seq__11849_12499 = G__12510;
chunk__11850_12500 = G__12511;
count__11851_12501 = G__12512;
i__11852_12502 = G__12513;
continue;
} else {
var temp__5804__auto___12514 = cljs.core.seq.call(null,seq__11849_12499);
if(temp__5804__auto___12514){
var seq__11849_12515__$1 = temp__5804__auto___12514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11849_12515__$1)){
var c__5525__auto___12516 = cljs.core.chunk_first.call(null,seq__11849_12515__$1);
var G__12517 = cljs.core.chunk_rest.call(null,seq__11849_12515__$1);
var G__12518 = c__5525__auto___12516;
var G__12519 = cljs.core.count.call(null,c__5525__auto___12516);
var G__12520 = (0);
seq__11849_12499 = G__12517;
chunk__11850_12500 = G__12518;
count__11851_12501 = G__12519;
i__11852_12502 = G__12520;
continue;
} else {
var component__7938__auto___12521 = cljs.core.first.call(null,seq__11849_12515__$1);
speclj.components.install.call(null,component__7938__auto___12521,description__7937__auto____$3);


var G__12522 = cljs.core.next.call(null,seq__11849_12515__$1);
var G__12523 = null;
var G__12524 = (0);
var G__12525 = (0);
seq__11849_12499 = G__12522;
chunk__11850_12500 = G__12523;
count__11851_12501 = G__12524;
i__11852_12502 = G__12525;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11847_12497);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})()],null)));
var chunk__11814_12439 = null;
var count__11815_12440 = (0);
var i__11816_12441 = (0);
while(true){
if((i__11816_12441 < count__11815_12440)){
var component__7938__auto___12526 = cljs.core._nth.call(null,chunk__11814_12439,i__11816_12441);
speclj.components.install.call(null,component__7938__auto___12526,description__7937__auto____$2);


var G__12527 = seq__11813_12438;
var G__12528 = chunk__11814_12439;
var G__12529 = count__11815_12440;
var G__12530 = (i__11816_12441 + (1));
seq__11813_12438 = G__12527;
chunk__11814_12439 = G__12528;
count__11815_12440 = G__12529;
i__11816_12441 = G__12530;
continue;
} else {
var temp__5804__auto___12531 = cljs.core.seq.call(null,seq__11813_12438);
if(temp__5804__auto___12531){
var seq__11813_12532__$1 = temp__5804__auto___12531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11813_12532__$1)){
var c__5525__auto___12533 = cljs.core.chunk_first.call(null,seq__11813_12532__$1);
var G__12534 = cljs.core.chunk_rest.call(null,seq__11813_12532__$1);
var G__12535 = c__5525__auto___12533;
var G__12536 = cljs.core.count.call(null,c__5525__auto___12533);
var G__12537 = (0);
seq__11813_12438 = G__12534;
chunk__11814_12439 = G__12535;
count__11815_12440 = G__12536;
i__11816_12441 = G__12537;
continue;
} else {
var component__7938__auto___12538 = cljs.core.first.call(null,seq__11813_12532__$1);
speclj.components.install.call(null,component__7938__auto___12538,description__7937__auto____$2);


var G__12539 = cljs.core.next.call(null,seq__11813_12532__$1);
var G__12540 = null;
var G__12541 = (0);
var G__12542 = (0);
seq__11813_12438 = G__12539;
chunk__11814_12439 = G__12540;
count__11815_12440 = G__12541;
i__11816_12441 = G__12542;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11811_12436);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"bottom-up facing",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11853_12543 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11854_12544 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11854_12544);

try{var seq__11855_12545 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"rows",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11877_12549 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11878_12550 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11878_12550);

try{var seq__11879_12551 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching rows on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11877_12549,_STAR_parent_description_STAR__temp_val__11878_12550,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12555 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(17),(26)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12555)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12555;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12556 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(16),(25)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12556)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12556;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(15),(24)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11877_12549,_STAR_parent_description_STAR__temp_val__11878_12550,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching rows on plane 1 is a win",((function (_STAR_parent_description_STAR__orig_val__11877_12549,_STAR_parent_description_STAR__temp_val__11878_12550,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12557 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(14),(23)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12557)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12557;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12558 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(13),(22)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12558)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12558;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(12),(21)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11877_12549,_STAR_parent_description_STAR__temp_val__11878_12550,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching rows on plane 2 is a win",((function (_STAR_parent_description_STAR__orig_val__11877_12549,_STAR_parent_description_STAR__temp_val__11878_12550,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12559 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(20)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12559)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12559;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12560 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10),(19)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12560)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12560;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(9),(18)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11877_12549,_STAR_parent_description_STAR__temp_val__11878_12550,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11880_12552 = null;
var count__11881_12553 = (0);
var i__11882_12554 = (0);
while(true){
if((i__11882_12554 < count__11881_12553)){
var component__7938__auto___12561 = cljs.core._nth.call(null,chunk__11880_12552,i__11882_12554);
speclj.components.install.call(null,component__7938__auto___12561,description__7937__auto____$3);


var G__12562 = seq__11879_12551;
var G__12563 = chunk__11880_12552;
var G__12564 = count__11881_12553;
var G__12565 = (i__11882_12554 + (1));
seq__11879_12551 = G__12562;
chunk__11880_12552 = G__12563;
count__11881_12553 = G__12564;
i__11882_12554 = G__12565;
continue;
} else {
var temp__5804__auto___12566 = cljs.core.seq.call(null,seq__11879_12551);
if(temp__5804__auto___12566){
var seq__11879_12567__$1 = temp__5804__auto___12566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11879_12567__$1)){
var c__5525__auto___12568 = cljs.core.chunk_first.call(null,seq__11879_12567__$1);
var G__12569 = cljs.core.chunk_rest.call(null,seq__11879_12567__$1);
var G__12570 = c__5525__auto___12568;
var G__12571 = cljs.core.count.call(null,c__5525__auto___12568);
var G__12572 = (0);
seq__11879_12551 = G__12569;
chunk__11880_12552 = G__12570;
count__11881_12553 = G__12571;
i__11882_12554 = G__12572;
continue;
} else {
var component__7938__auto___12573 = cljs.core.first.call(null,seq__11879_12567__$1);
speclj.components.install.call(null,component__7938__auto___12573,description__7937__auto____$3);


var G__12574 = cljs.core.next.call(null,seq__11879_12567__$1);
var G__12575 = null;
var G__12576 = (0);
var G__12577 = (0);
seq__11879_12551 = G__12574;
chunk__11880_12552 = G__12575;
count__11881_12553 = G__12576;
i__11882_12554 = G__12577;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11877_12549);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})(),(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"diagonals",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11883_12578 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11884_12579 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11884_12579);

try{var seq__11885_12580 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching diagonals on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11883_12578,_STAR_parent_description_STAR__temp_val__11884_12579,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12584 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(16),(24)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12584)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12584;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(16),(6)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11883_12578,_STAR_parent_description_STAR__temp_val__11884_12579,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching diagonals on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11883_12578,_STAR_parent_description_STAR__temp_val__11884_12579,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12585 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(13),(21)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12585)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12585;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(13),(3)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11883_12578,_STAR_parent_description_STAR__temp_val__11884_12579,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching diagonals on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11883_12578,_STAR_parent_description_STAR__temp_val__11884_12579,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12586 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(10),(18)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12586)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12586;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(10),(0)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11883_12578,_STAR_parent_description_STAR__temp_val__11884_12579,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11886_12581 = null;
var count__11887_12582 = (0);
var i__11888_12583 = (0);
while(true){
if((i__11888_12583 < count__11887_12582)){
var component__7938__auto___12587 = cljs.core._nth.call(null,chunk__11886_12581,i__11888_12583);
speclj.components.install.call(null,component__7938__auto___12587,description__7937__auto____$3);


var G__12588 = seq__11885_12580;
var G__12589 = chunk__11886_12581;
var G__12590 = count__11887_12582;
var G__12591 = (i__11888_12583 + (1));
seq__11885_12580 = G__12588;
chunk__11886_12581 = G__12589;
count__11887_12582 = G__12590;
i__11888_12583 = G__12591;
continue;
} else {
var temp__5804__auto___12592 = cljs.core.seq.call(null,seq__11885_12580);
if(temp__5804__auto___12592){
var seq__11885_12593__$1 = temp__5804__auto___12592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11885_12593__$1)){
var c__5525__auto___12594 = cljs.core.chunk_first.call(null,seq__11885_12593__$1);
var G__12595 = cljs.core.chunk_rest.call(null,seq__11885_12593__$1);
var G__12596 = c__5525__auto___12594;
var G__12597 = cljs.core.count.call(null,c__5525__auto___12594);
var G__12598 = (0);
seq__11885_12580 = G__12595;
chunk__11886_12581 = G__12596;
count__11887_12582 = G__12597;
i__11888_12583 = G__12598;
continue;
} else {
var component__7938__auto___12599 = cljs.core.first.call(null,seq__11885_12593__$1);
speclj.components.install.call(null,component__7938__auto___12599,description__7937__auto____$3);


var G__12600 = cljs.core.next.call(null,seq__11885_12593__$1);
var G__12601 = null;
var G__12602 = (0);
var G__12603 = (0);
seq__11885_12580 = G__12600;
chunk__11886_12581 = G__12601;
count__11887_12582 = G__12602;
i__11888_12583 = G__12603;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11883_12578);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})(),(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"columns",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11889_12604 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11890_12605 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11890_12605);

try{var seq__11891_12606 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"matching columns on plane 0 is a win",((function (_STAR_parent_description_STAR__orig_val__11889_12604,_STAR_parent_description_STAR__temp_val__11890_12605,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12610 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(7),(6)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12610)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12610;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12611 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(16),(15)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12611)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12611;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(25),(24)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11889_12604,_STAR_parent_description_STAR__temp_val__11890_12605,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching columns on plane 1 is a win",((function (_STAR_parent_description_STAR__orig_val__11889_12604,_STAR_parent_description_STAR__temp_val__11890_12605,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12612 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4),(3)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12612)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12612;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12613 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(13),(12)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12613)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12613;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(22),(21)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11889_12604,_STAR_parent_description_STAR__temp_val__11890_12605,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"matching columns on plane 2 is a win",((function (_STAR_parent_description_STAR__orig_val__11889_12604,_STAR_parent_description_STAR__temp_val__11890_12605,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12614 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(0)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12614)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12614;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12615 = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(10),(9)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto___12615)){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12615;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(19),(18)], null),cljs.core.range.call(null,(27))));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11889_12604,_STAR_parent_description_STAR__temp_val__11890_12605,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__11853_12543,_STAR_parent_description_STAR__temp_val__11854_12544,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11892_12607 = null;
var count__11893_12608 = (0);
var i__11894_12609 = (0);
while(true){
if((i__11894_12609 < count__11893_12608)){
var component__7938__auto___12616 = cljs.core._nth.call(null,chunk__11892_12607,i__11894_12609);
speclj.components.install.call(null,component__7938__auto___12616,description__7937__auto____$3);


var G__12617 = seq__11891_12606;
var G__12618 = chunk__11892_12607;
var G__12619 = count__11893_12608;
var G__12620 = (i__11894_12609 + (1));
seq__11891_12606 = G__12617;
chunk__11892_12607 = G__12618;
count__11893_12608 = G__12619;
i__11894_12609 = G__12620;
continue;
} else {
var temp__5804__auto___12621 = cljs.core.seq.call(null,seq__11891_12606);
if(temp__5804__auto___12621){
var seq__11891_12622__$1 = temp__5804__auto___12621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11891_12622__$1)){
var c__5525__auto___12623 = cljs.core.chunk_first.call(null,seq__11891_12622__$1);
var G__12624 = cljs.core.chunk_rest.call(null,seq__11891_12622__$1);
var G__12625 = c__5525__auto___12623;
var G__12626 = cljs.core.count.call(null,c__5525__auto___12623);
var G__12627 = (0);
seq__11891_12606 = G__12624;
chunk__11892_12607 = G__12625;
count__11893_12608 = G__12626;
i__11894_12609 = G__12627;
continue;
} else {
var component__7938__auto___12628 = cljs.core.first.call(null,seq__11891_12622__$1);
speclj.components.install.call(null,component__7938__auto___12628,description__7937__auto____$3);


var G__12629 = cljs.core.next.call(null,seq__11891_12622__$1);
var G__12630 = null;
var G__12631 = (0);
var G__12632 = (0);
seq__11891_12606 = G__12629;
chunk__11892_12607 = G__12630;
count__11893_12608 = G__12631;
i__11894_12609 = G__12632;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11889_12604);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})()],null)));
var chunk__11856_12546 = null;
var count__11857_12547 = (0);
var i__11858_12548 = (0);
while(true){
if((i__11858_12548 < count__11857_12547)){
var component__7938__auto___12633 = cljs.core._nth.call(null,chunk__11856_12546,i__11858_12548);
speclj.components.install.call(null,component__7938__auto___12633,description__7937__auto____$2);


var G__12634 = seq__11855_12545;
var G__12635 = chunk__11856_12546;
var G__12636 = count__11857_12547;
var G__12637 = (i__11858_12548 + (1));
seq__11855_12545 = G__12634;
chunk__11856_12546 = G__12635;
count__11857_12547 = G__12636;
i__11858_12548 = G__12637;
continue;
} else {
var temp__5804__auto___12638 = cljs.core.seq.call(null,seq__11855_12545);
if(temp__5804__auto___12638){
var seq__11855_12639__$1 = temp__5804__auto___12638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11855_12639__$1)){
var c__5525__auto___12640 = cljs.core.chunk_first.call(null,seq__11855_12639__$1);
var G__12641 = cljs.core.chunk_rest.call(null,seq__11855_12639__$1);
var G__12642 = c__5525__auto___12640;
var G__12643 = cljs.core.count.call(null,c__5525__auto___12640);
var G__12644 = (0);
seq__11855_12545 = G__12641;
chunk__11856_12546 = G__12642;
count__11857_12547 = G__12643;
i__11858_12548 = G__12644;
continue;
} else {
var component__7938__auto___12645 = cljs.core.first.call(null,seq__11855_12639__$1);
speclj.components.install.call(null,component__7938__auto___12645,description__7937__auto____$2);


var G__12646 = cljs.core.next.call(null,seq__11855_12639__$1);
var G__12647 = null;
var G__12648 = (0);
var G__12649 = (0);
seq__11855_12545 = G__12646;
chunk__11856_12546 = G__12647;
count__11857_12547 = G__12648;
i__11858_12548 = G__12649;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11853_12543);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"no-moves?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11895_12650 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11896_12651 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11896_12651);

try{var seq__11897_12652 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"checks if theres no available moves on 2d board",((function (_STAR_parent_description_STAR__orig_val__11895_12650,_STAR_parent_description_STAR__temp_val__11896_12651,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12656 = tic_tac_toe.boardc.no_moves_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","O","O","X","X","X","X","O"], null));
if(value__8062__auto___12656){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12656;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12657 = tic_tac_toe.boardc.no_moves_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","X","X","X","X","O","O","O","X"], null));
if(value__8062__auto___12657){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12657;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var value__8062__auto___12658 = tic_tac_toe.boardc.no_moves_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","X","X","X","X","O","O","O","X"], null));
if(value__8062__auto___12658){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12658;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var temp__5804__auto__ = tic_tac_toe.boardc.no_moves_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","X","X","X","X","O","O",(7),"X"], null));
if(temp__5804__auto__){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11895_12650,_STAR_parent_description_STAR__temp_val__11896_12651,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"checks if there is no available moves on a 3d board",((function (_STAR_parent_description_STAR__orig_val__11895_12650,_STAR_parent_description_STAR__temp_val__11896_12651,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto___12659 = tic_tac_toe.boardc.no_moves_QMARK_.call(null,cljs.core.repeat.call(null,(27),"X"));
if(value__8062__auto___12659){
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto___12659;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}

var temp__5804__auto__ = tic_tac_toe.boardc.no_moves_QMARK_.call(null,cljs.core.conj.call(null,cljs.core.repeat.call(null,(27),"X"),(0)));
if(temp__5804__auto__){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11895_12650,_STAR_parent_description_STAR__temp_val__11896_12651,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11898_12653 = null;
var count__11899_12654 = (0);
var i__11900_12655 = (0);
while(true){
if((i__11900_12655 < count__11899_12654)){
var component__7938__auto___12660 = cljs.core._nth.call(null,chunk__11898_12653,i__11900_12655);
speclj.components.install.call(null,component__7938__auto___12660,description__7937__auto____$2);


var G__12661 = seq__11897_12652;
var G__12662 = chunk__11898_12653;
var G__12663 = count__11899_12654;
var G__12664 = (i__11900_12655 + (1));
seq__11897_12652 = G__12661;
chunk__11898_12653 = G__12662;
count__11899_12654 = G__12663;
i__11900_12655 = G__12664;
continue;
} else {
var temp__5804__auto___12665 = cljs.core.seq.call(null,seq__11897_12652);
if(temp__5804__auto___12665){
var seq__11897_12666__$1 = temp__5804__auto___12665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11897_12666__$1)){
var c__5525__auto___12667 = cljs.core.chunk_first.call(null,seq__11897_12666__$1);
var G__12668 = cljs.core.chunk_rest.call(null,seq__11897_12666__$1);
var G__12669 = c__5525__auto___12667;
var G__12670 = cljs.core.count.call(null,c__5525__auto___12667);
var G__12671 = (0);
seq__11897_12652 = G__12668;
chunk__11898_12653 = G__12669;
count__11899_12654 = G__12670;
i__11900_12655 = G__12671;
continue;
} else {
var component__7938__auto___12672 = cljs.core.first.call(null,seq__11897_12666__$1);
speclj.components.install.call(null,component__7938__auto___12672,description__7937__auto____$2);


var G__12673 = cljs.core.next.call(null,seq__11897_12666__$1);
var G__12674 = null;
var G__12675 = (0);
var G__12676 = (0);
seq__11897_12652 = G__12673;
chunk__11898_12653 = G__12674;
count__11899_12654 = G__12675;
i__11900_12655 = G__12676;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11895_12650);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"Draw?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11901_12677 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11902_12678 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11902_12678);

try{var seq__11903_12679 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if x has won",((function (_STAR_parent_description_STAR__orig_val__11901_12677,_STAR_parent_description_STAR__temp_val__11902_12678,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto__ = tic_tac_toe.boardc.draw_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X","O","O",(5),(6),(7),(8)], null));
if(temp__5804__auto__){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11901_12677,_STAR_parent_description_STAR__temp_val__11902_12678,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns false if o has won",((function (_STAR_parent_description_STAR__orig_val__11901_12677,_STAR_parent_description_STAR__temp_val__11902_12678,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto__ = tic_tac_toe.boardc.draw_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","O","X","X",(5),"X",(7),(8)], null));
if(temp__5804__auto__){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11901_12677,_STAR_parent_description_STAR__temp_val__11902_12678,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns false if game isn't over",((function (_STAR_parent_description_STAR__orig_val__11901_12677,_STAR_parent_description_STAR__temp_val__11902_12678,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto__ = tic_tac_toe.boardc.draw_QMARK_.call(null,cljs.core.range.call(null,(9)));
if(temp__5804__auto__){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11901_12677,_STAR_parent_description_STAR__temp_val__11902_12678,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns true if no moves left, and no winners",((function (_STAR_parent_description_STAR__orig_val__11901_12677,_STAR_parent_description_STAR__temp_val__11902_12678,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.draw_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O","O","O","X","X","O","X"], null));
if(value__8062__auto__){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11901_12677,_STAR_parent_description_STAR__temp_val__11902_12678,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11904_12680 = null;
var count__11905_12681 = (0);
var i__11906_12682 = (0);
while(true){
if((i__11906_12682 < count__11905_12681)){
var component__7938__auto___12683 = cljs.core._nth.call(null,chunk__11904_12680,i__11906_12682);
speclj.components.install.call(null,component__7938__auto___12683,description__7937__auto____$2);


var G__12684 = seq__11903_12679;
var G__12685 = chunk__11904_12680;
var G__12686 = count__11905_12681;
var G__12687 = (i__11906_12682 + (1));
seq__11903_12679 = G__12684;
chunk__11904_12680 = G__12685;
count__11905_12681 = G__12686;
i__11906_12682 = G__12687;
continue;
} else {
var temp__5804__auto___12688 = cljs.core.seq.call(null,seq__11903_12679);
if(temp__5804__auto___12688){
var seq__11903_12689__$1 = temp__5804__auto___12688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11903_12689__$1)){
var c__5525__auto___12690 = cljs.core.chunk_first.call(null,seq__11903_12689__$1);
var G__12691 = cljs.core.chunk_rest.call(null,seq__11903_12689__$1);
var G__12692 = c__5525__auto___12690;
var G__12693 = cljs.core.count.call(null,c__5525__auto___12690);
var G__12694 = (0);
seq__11903_12679 = G__12691;
chunk__11904_12680 = G__12692;
count__11905_12681 = G__12693;
i__11906_12682 = G__12694;
continue;
} else {
var component__7938__auto___12695 = cljs.core.first.call(null,seq__11903_12689__$1);
speclj.components.install.call(null,component__7938__auto___12695,description__7937__auto____$2);


var G__12696 = cljs.core.next.call(null,seq__11903_12689__$1);
var G__12697 = null;
var G__12698 = (0);
var G__12699 = (0);
seq__11903_12679 = G__12696;
chunk__11904_12680 = G__12697;
count__11905_12681 = G__12698;
i__11906_12682 = G__12699;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11901_12677);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"game-over?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11907_12700 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11908_12701 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11908_12701);

try{var seq__11909_12702 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns true if draw",((function (_STAR_parent_description_STAR__orig_val__11907_12700,_STAR_parent_description_STAR__temp_val__11908_12701,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X","O","X","O","O","X","O"], null));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11907_12700,_STAR_parent_description_STAR__temp_val__11908_12701,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns true if win",((function (_STAR_parent_description_STAR__orig_val__11907_12700,_STAR_parent_description_STAR__temp_val__11908_12701,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O",(1),(2),(3),"O",(5),(6),(7),"O"], null));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11907_12700,_STAR_parent_description_STAR__temp_val__11908_12701,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns true if loss",((function (_STAR_parent_description_STAR__orig_val__11907_12700,_STAR_parent_description_STAR__temp_val__11908_12701,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),"O",(3),"O",(5),"O",(7),(8)], null));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11907_12700,_STAR_parent_description_STAR__temp_val__11908_12701,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns false if not win, loss, or draw.",((function (_STAR_parent_description_STAR__orig_val__11907_12700,_STAR_parent_description_STAR__temp_val__11908_12701,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),"O",(5),"O",(7),(8)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11907_12700,_STAR_parent_description_STAR__temp_val__11908_12701,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11910_12703 = null;
var count__11911_12704 = (0);
var i__11912_12705 = (0);
while(true){
if((i__11912_12705 < count__11911_12704)){
var component__7938__auto___12706 = cljs.core._nth.call(null,chunk__11910_12703,i__11912_12705);
speclj.components.install.call(null,component__7938__auto___12706,description__7937__auto____$2);


var G__12707 = seq__11909_12702;
var G__12708 = chunk__11910_12703;
var G__12709 = count__11911_12704;
var G__12710 = (i__11912_12705 + (1));
seq__11909_12702 = G__12707;
chunk__11910_12703 = G__12708;
count__11911_12704 = G__12709;
i__11912_12705 = G__12710;
continue;
} else {
var temp__5804__auto___12711 = cljs.core.seq.call(null,seq__11909_12702);
if(temp__5804__auto___12711){
var seq__11909_12712__$1 = temp__5804__auto___12711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11909_12712__$1)){
var c__5525__auto___12713 = cljs.core.chunk_first.call(null,seq__11909_12712__$1);
var G__12714 = cljs.core.chunk_rest.call(null,seq__11909_12712__$1);
var G__12715 = c__5525__auto___12713;
var G__12716 = cljs.core.count.call(null,c__5525__auto___12713);
var G__12717 = (0);
seq__11909_12702 = G__12714;
chunk__11910_12703 = G__12715;
count__11911_12704 = G__12716;
i__11912_12705 = G__12717;
continue;
} else {
var component__7938__auto___12718 = cljs.core.first.call(null,seq__11909_12712__$1);
speclj.components.install.call(null,component__7938__auto___12718,description__7937__auto____$2);


var G__12719 = cljs.core.next.call(null,seq__11909_12712__$1);
var G__12720 = null;
var G__12721 = (0);
var G__12722 = (0);
seq__11909_12702 = G__12719;
chunk__11910_12703 = G__12720;
count__11911_12704 = G__12721;
i__11912_12705 = G__12722;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11907_12700);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"create-board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11913_12723 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11914_12724 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11914_12724);

try{var seq__11915_12725 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"creates a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__11913_12723,_STAR_parent_description_STAR__temp_val__11914_12724,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = cljs.core.range.call(null,(9));
var actual__8075__auto__ = tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__11913_12723,_STAR_parent_description_STAR__temp_val__11914_12724,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"creates a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__11913_12723,_STAR_parent_description_STAR__temp_val__11914_12724,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = cljs.core.range.call(null,(16));
var actual__8075__auto__ = tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
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
});})(_STAR_parent_description_STAR__orig_val__11913_12723,_STAR_parent_description_STAR__temp_val__11914_12724,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"creates a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__11913_12723,_STAR_parent_description_STAR__temp_val__11914_12724,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = cljs.core.range.call(null,(27));
var actual__8075__auto__ = tic_tac_toe.boardc.create_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
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
});})(_STAR_parent_description_STAR__orig_val__11913_12723,_STAR_parent_description_STAR__temp_val__11914_12724,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11916_12726 = null;
var count__11917_12727 = (0);
var i__11918_12728 = (0);
while(true){
if((i__11918_12728 < count__11917_12727)){
var component__7938__auto___12729 = cljs.core._nth.call(null,chunk__11916_12726,i__11918_12728);
speclj.components.install.call(null,component__7938__auto___12729,description__7937__auto____$2);


var G__12730 = seq__11915_12725;
var G__12731 = chunk__11916_12726;
var G__12732 = count__11917_12727;
var G__12733 = (i__11918_12728 + (1));
seq__11915_12725 = G__12730;
chunk__11916_12726 = G__12731;
count__11917_12727 = G__12732;
i__11918_12728 = G__12733;
continue;
} else {
var temp__5804__auto___12734 = cljs.core.seq.call(null,seq__11915_12725);
if(temp__5804__auto___12734){
var seq__11915_12735__$1 = temp__5804__auto___12734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11915_12735__$1)){
var c__5525__auto___12736 = cljs.core.chunk_first.call(null,seq__11915_12735__$1);
var G__12737 = cljs.core.chunk_rest.call(null,seq__11915_12735__$1);
var G__12738 = c__5525__auto___12736;
var G__12739 = cljs.core.count.call(null,c__5525__auto___12736);
var G__12740 = (0);
seq__11915_12725 = G__12737;
chunk__11916_12726 = G__12738;
count__11917_12727 = G__12739;
i__11918_12728 = G__12740;
continue;
} else {
var component__7938__auto___12741 = cljs.core.first.call(null,seq__11915_12735__$1);
speclj.components.install.call(null,component__7938__auto___12741,description__7937__auto____$2);


var G__12742 = cljs.core.next.call(null,seq__11915_12735__$1);
var G__12743 = null;
var G__12744 = (0);
var G__12745 = (0);
seq__11915_12725 = G__12742;
chunk__11916_12726 = G__12743;
count__11917_12727 = G__12744;
i__11918_12728 = G__12745;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11913_12723);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"get-middle",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11919_12746 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11920_12747 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11920_12747);

try{var seq__11921_12748 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 4 for a 3x3",((function (_STAR_parent_description_STAR__orig_val__11919_12746,_STAR_parent_description_STAR__temp_val__11920_12747,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = (4);
var actual__8075__auto__ = tic_tac_toe.boardc.get_middle.call(null,cljs.core.range.call(null,(9)));
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
});})(_STAR_parent_description_STAR__orig_val__11919_12746,_STAR_parent_description_STAR__temp_val__11920_12747,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns 13 for a 3x3x3",((function (_STAR_parent_description_STAR__orig_val__11919_12746,_STAR_parent_description_STAR__temp_val__11920_12747,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = (13);
var actual__8075__auto__ = tic_tac_toe.boardc.get_middle.call(null,cljs.core.range.call(null,(27)));
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
});})(_STAR_parent_description_STAR__orig_val__11919_12746,_STAR_parent_description_STAR__temp_val__11920_12747,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns nil for a 4x4",((function (_STAR_parent_description_STAR__orig_val__11919_12746,_STAR_parent_description_STAR__temp_val__11920_12747,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = null;
var actual__8075__auto__ = tic_tac_toe.boardc.get_middle.call(null,cljs.core.range.call(null,(16)));
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
});})(_STAR_parent_description_STAR__orig_val__11919_12746,_STAR_parent_description_STAR__temp_val__11920_12747,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11922_12749 = null;
var count__11923_12750 = (0);
var i__11924_12751 = (0);
while(true){
if((i__11924_12751 < count__11923_12750)){
var component__7938__auto___12752 = cljs.core._nth.call(null,chunk__11922_12749,i__11924_12751);
speclj.components.install.call(null,component__7938__auto___12752,description__7937__auto____$2);


var G__12753 = seq__11921_12748;
var G__12754 = chunk__11922_12749;
var G__12755 = count__11923_12750;
var G__12756 = (i__11924_12751 + (1));
seq__11921_12748 = G__12753;
chunk__11922_12749 = G__12754;
count__11923_12750 = G__12755;
i__11924_12751 = G__12756;
continue;
} else {
var temp__5804__auto___12757 = cljs.core.seq.call(null,seq__11921_12748);
if(temp__5804__auto___12757){
var seq__11921_12758__$1 = temp__5804__auto___12757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11921_12758__$1)){
var c__5525__auto___12759 = cljs.core.chunk_first.call(null,seq__11921_12758__$1);
var G__12760 = cljs.core.chunk_rest.call(null,seq__11921_12758__$1);
var G__12761 = c__5525__auto___12759;
var G__12762 = cljs.core.count.call(null,c__5525__auto___12759);
var G__12763 = (0);
seq__11921_12748 = G__12760;
chunk__11922_12749 = G__12761;
count__11923_12750 = G__12762;
i__11924_12751 = G__12763;
continue;
} else {
var component__7938__auto___12764 = cljs.core.first.call(null,seq__11921_12758__$1);
speclj.components.install.call(null,component__7938__auto___12764,description__7937__auto____$2);


var G__12765 = cljs.core.next.call(null,seq__11921_12758__$1);
var G__12766 = null;
var G__12767 = (0);
var G__12768 = (0);
seq__11921_12748 = G__12765;
chunk__11922_12749 = G__12766;
count__11923_12750 = G__12767;
i__11924_12751 = G__12768;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11919_12746);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"middle-available?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11925_12769 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11926_12770 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11926_12770);

try{var seq__11927_12771 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns true if available on 3x3",((function (_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.middle_available_QMARK_.call(null,cljs.core.range.call(null,(9)));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns false if not available on 3x3",((function (_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto__ = tic_tac_toe.boardc.middle_available_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),"X",(5),(6),(7),(8)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns true if available on 3x3x3",((function (_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.middle_available_QMARK_.call(null,cljs.core.range.call(null,(27)));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns false if not available on 3x3x3",((function (_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var board = cljs.core.range.call(null,(27));
var middle = tic_tac_toe.boardc.get_middle.call(null,board);
var temp__5804__auto__ = tic_tac_toe.boardc.middle_available_QMARK_.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"O",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middle], null),board));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns false if on a board with out a middle",((function (_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto__ = tic_tac_toe.boardc.middle_available_QMARK_.call(null,cljs.core.range.call(null,(16)));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11925_12769,_STAR_parent_description_STAR__temp_val__11926_12770,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11928_12772 = null;
var count__11929_12773 = (0);
var i__11930_12774 = (0);
while(true){
if((i__11930_12774 < count__11929_12773)){
var component__7938__auto___12775 = cljs.core._nth.call(null,chunk__11928_12772,i__11930_12774);
speclj.components.install.call(null,component__7938__auto___12775,description__7937__auto____$2);


var G__12776 = seq__11927_12771;
var G__12777 = chunk__11928_12772;
var G__12778 = count__11929_12773;
var G__12779 = (i__11930_12774 + (1));
seq__11927_12771 = G__12776;
chunk__11928_12772 = G__12777;
count__11929_12773 = G__12778;
i__11930_12774 = G__12779;
continue;
} else {
var temp__5804__auto___12780 = cljs.core.seq.call(null,seq__11927_12771);
if(temp__5804__auto___12780){
var seq__11927_12781__$1 = temp__5804__auto___12780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11927_12781__$1)){
var c__5525__auto___12782 = cljs.core.chunk_first.call(null,seq__11927_12781__$1);
var G__12783 = cljs.core.chunk_rest.call(null,seq__11927_12781__$1);
var G__12784 = c__5525__auto___12782;
var G__12785 = cljs.core.count.call(null,c__5525__auto___12782);
var G__12786 = (0);
seq__11927_12771 = G__12783;
chunk__11928_12772 = G__12784;
count__11929_12773 = G__12785;
i__11930_12774 = G__12786;
continue;
} else {
var component__7938__auto___12787 = cljs.core.first.call(null,seq__11927_12781__$1);
speclj.components.install.call(null,component__7938__auto___12787,description__7937__auto____$2);


var G__12788 = cljs.core.next.call(null,seq__11927_12781__$1);
var G__12789 = null;
var G__12790 = (0);
var G__12791 = (0);
seq__11927_12771 = G__12788;
chunk__11928_12772 = G__12789;
count__11929_12773 = G__12790;
i__11930_12774 = G__12791;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11925_12769);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"win-next-turn?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11931_12792 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11932_12793 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11932_12793);

try{var seq__11933_12794 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns true for win from x in next turn",((function (_STAR_parent_description_STAR__orig_val__11931_12792,_STAR_parent_description_STAR__temp_val__11932_12793,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.win_next_turn_QMARK_.call(null,"X",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O","O",(5),(6),(7),(8)], null));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11931_12792,_STAR_parent_description_STAR__temp_val__11932_12793,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns true for win from o in next turn",((function (_STAR_parent_description_STAR__orig_val__11931_12792,_STAR_parent_description_STAR__temp_val__11932_12793,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.win_next_turn_QMARK_.call(null,"O",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),"O","O",(5),"X",(7),(8)], null));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11931_12792,_STAR_parent_description_STAR__temp_val__11932_12793,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns false if win can't be made in next turn by player",((function (_STAR_parent_description_STAR__orig_val__11931_12792,_STAR_parent_description_STAR__temp_val__11932_12793,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto___12798 = tic_tac_toe.boardc.win_next_turn_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(temp__5804__auto___12798)){
var value__8068__auto___12799 = temp__5804__auto___12798;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto___12799;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
}

var temp__5804__auto__ = tic_tac_toe.boardc.win_next_turn_QMARK_.call(null,"X",tic_tac_toe.spec_helperc.populate_board.call(null,"O",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.range.call(null,(9))));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11931_12792,_STAR_parent_description_STAR__temp_val__11932_12793,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11934_12795 = null;
var count__11935_12796 = (0);
var i__11936_12797 = (0);
while(true){
if((i__11936_12797 < count__11935_12796)){
var component__7938__auto___12800 = cljs.core._nth.call(null,chunk__11934_12795,i__11936_12797);
speclj.components.install.call(null,component__7938__auto___12800,description__7937__auto____$2);


var G__12801 = seq__11933_12794;
var G__12802 = chunk__11934_12795;
var G__12803 = count__11935_12796;
var G__12804 = (i__11936_12797 + (1));
seq__11933_12794 = G__12801;
chunk__11934_12795 = G__12802;
count__11935_12796 = G__12803;
i__11936_12797 = G__12804;
continue;
} else {
var temp__5804__auto___12805 = cljs.core.seq.call(null,seq__11933_12794);
if(temp__5804__auto___12805){
var seq__11933_12806__$1 = temp__5804__auto___12805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11933_12806__$1)){
var c__5525__auto___12807 = cljs.core.chunk_first.call(null,seq__11933_12806__$1);
var G__12808 = cljs.core.chunk_rest.call(null,seq__11933_12806__$1);
var G__12809 = c__5525__auto___12807;
var G__12810 = cljs.core.count.call(null,c__5525__auto___12807);
var G__12811 = (0);
seq__11933_12794 = G__12808;
chunk__11934_12795 = G__12809;
count__11935_12796 = G__12810;
i__11936_12797 = G__12811;
continue;
} else {
var component__7938__auto___12812 = cljs.core.first.call(null,seq__11933_12806__$1);
speclj.components.install.call(null,component__7938__auto___12812,description__7937__auto____$2);


var G__12813 = cljs.core.next.call(null,seq__11933_12806__$1);
var G__12814 = null;
var G__12815 = (0);
var G__12816 = (0);
seq__11933_12794 = G__12813;
chunk__11934_12795 = G__12814;
count__11935_12796 = G__12815;
i__11936_12797 = G__12816;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11931_12792);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"lose-next-turn?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11937_12817 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11938_12818 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11938_12818);

try{var seq__11939_12819 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns true if there is a win for opponent in next turn",((function (_STAR_parent_description_STAR__orig_val__11937_12817,_STAR_parent_description_STAR__temp_val__11938_12818,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var value__8062__auto__ = tic_tac_toe.boardc.lose_next_turn_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),"O","O",(5),(6),"X","X"], null));
if(cljs.core.truth_(value__8062__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(function (){var temp__5806__auto__ = value__8062__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),""].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__11937_12817,_STAR_parent_description_STAR__temp_val__11938_12818,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false),speclj.components.new_characteristic.call(null,"returns false if there is not a win for opponent in next turn",((function (_STAR_parent_description_STAR__orig_val__11937_12817,_STAR_parent_description_STAR__temp_val__11938_12818,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var temp__5804__auto__ = tic_tac_toe.boardc.lose_next_turn_QMARK_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var value__8068__auto__ = temp__5804__auto__;
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(function (){var temp__5806__auto__ = value__8068__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11937_12817,_STAR_parent_description_STAR__temp_val__11938_12818,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11940_12820 = null;
var count__11941_12821 = (0);
var i__11942_12822 = (0);
while(true){
if((i__11942_12822 < count__11941_12821)){
var component__7938__auto___12823 = cljs.core._nth.call(null,chunk__11940_12820,i__11942_12822);
speclj.components.install.call(null,component__7938__auto___12823,description__7937__auto____$2);


var G__12824 = seq__11939_12819;
var G__12825 = chunk__11940_12820;
var G__12826 = count__11941_12821;
var G__12827 = (i__11942_12822 + (1));
seq__11939_12819 = G__12824;
chunk__11940_12820 = G__12825;
count__11941_12821 = G__12826;
i__11942_12822 = G__12827;
continue;
} else {
var temp__5804__auto___12828 = cljs.core.seq.call(null,seq__11939_12819);
if(temp__5804__auto___12828){
var seq__11939_12829__$1 = temp__5804__auto___12828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11939_12829__$1)){
var c__5525__auto___12830 = cljs.core.chunk_first.call(null,seq__11939_12829__$1);
var G__12831 = cljs.core.chunk_rest.call(null,seq__11939_12829__$1);
var G__12832 = c__5525__auto___12830;
var G__12833 = cljs.core.count.call(null,c__5525__auto___12830);
var G__12834 = (0);
seq__11939_12819 = G__12831;
chunk__11940_12820 = G__12832;
count__11941_12821 = G__12833;
i__11942_12822 = G__12834;
continue;
} else {
var component__7938__auto___12835 = cljs.core.first.call(null,seq__11939_12829__$1);
speclj.components.install.call(null,component__7938__auto___12835,description__7937__auto____$2);


var G__12836 = cljs.core.next.call(null,seq__11939_12829__$1);
var G__12837 = null;
var G__12838 = (0);
var G__12839 = (0);
seq__11939_12819 = G__12836;
chunk__11940_12820 = G__12837;
count__11941_12821 = G__12838;
i__11942_12822 = G__12839;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11937_12817);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"get-random-available",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11943_12840 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11944_12841 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11944_12841);

try{var seq__11945_12842 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11943_12840,_STAR_parent_description_STAR__temp_val__11944_12841,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__11953 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__11954 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__11954);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__11953);
}});})(_STAR_parent_description_STAR__orig_val__11943_12840,_STAR_parent_description_STAR__temp_val__11944_12841,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11943_12840,_STAR_parent_description_STAR__temp_val__11944_12841,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (it__7999__auto__){
var rand_nth_orig_val__11955 = cljs.core.rand_nth;
var rand_nth_temp_val__11956 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"rand-nth","rand-nth",1426715838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),cljs.core.first], null));
(cljs.core.rand_nth = rand_nth_temp_val__11956);

try{return it__7999__auto__.call(null);
}finally {(cljs.core.rand_nth = rand_nth_orig_val__11955);
}});})(_STAR_parent_description_STAR__orig_val__11943_12840,_STAR_parent_description_STAR__temp_val__11944_12841,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
),speclj.components.new_characteristic.call(null,"returns a random available move",((function (_STAR_parent_description_STAR__orig_val__11943_12840,_STAR_parent_description_STAR__temp_val__11944_12841,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957){
return (function (){
var expected__8074__auto__ = (0);
var actual__8075__auto__ = tic_tac_toe.boardc.get_random_available.call(null,cljs.core.range.call(null,(9)));
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
});})(_STAR_parent_description_STAR__orig_val__11943_12840,_STAR_parent_description_STAR__temp_val__11944_12841,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__11575_12320,_STAR_parent_description_STAR__temp_val__11576_12321,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__10959_11958,_STAR_parent_description_STAR__temp_val__10960_11959,description__7937__auto___11957))
,false)],null)));
var chunk__11946_12843 = null;
var count__11947_12844 = (0);
var i__11948_12845 = (0);
while(true){
if((i__11948_12845 < count__11947_12844)){
var component__7938__auto___12846 = cljs.core._nth.call(null,chunk__11946_12843,i__11948_12845);
speclj.components.install.call(null,component__7938__auto___12846,description__7937__auto____$2);


var G__12847 = seq__11945_12842;
var G__12848 = chunk__11946_12843;
var G__12849 = count__11947_12844;
var G__12850 = (i__11948_12845 + (1));
seq__11945_12842 = G__12847;
chunk__11946_12843 = G__12848;
count__11947_12844 = G__12849;
i__11948_12845 = G__12850;
continue;
} else {
var temp__5804__auto___12851 = cljs.core.seq.call(null,seq__11945_12842);
if(temp__5804__auto___12851){
var seq__11945_12852__$1 = temp__5804__auto___12851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11945_12852__$1)){
var c__5525__auto___12853 = cljs.core.chunk_first.call(null,seq__11945_12852__$1);
var G__12854 = cljs.core.chunk_rest.call(null,seq__11945_12852__$1);
var G__12855 = c__5525__auto___12853;
var G__12856 = cljs.core.count.call(null,c__5525__auto___12853);
var G__12857 = (0);
seq__11945_12842 = G__12854;
chunk__11946_12843 = G__12855;
count__11947_12844 = G__12856;
i__11948_12845 = G__12857;
continue;
} else {
var component__7938__auto___12858 = cljs.core.first.call(null,seq__11945_12852__$1);
speclj.components.install.call(null,component__7938__auto___12858,description__7937__auto____$2);


var G__12859 = cljs.core.next.call(null,seq__11945_12852__$1);
var G__12860 = null;
var G__12861 = (0);
var G__12862 = (0);
seq__11945_12842 = G__12859;
chunk__11946_12843 = G__12860;
count__11947_12844 = G__12861;
i__11948_12845 = G__12862;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11943_12840);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})()],null)));
var chunk__11578_12323 = null;
var count__11579_12324 = (0);
var i__11580_12325 = (0);
while(true){
if((i__11580_12325 < count__11579_12324)){
var component__7938__auto___12863 = cljs.core._nth.call(null,chunk__11578_12323,i__11580_12325);
speclj.components.install.call(null,component__7938__auto___12863,description__7937__auto____$1);


var G__12864 = seq__11577_12322;
var G__12865 = chunk__11578_12323;
var G__12866 = count__11579_12324;
var G__12867 = (i__11580_12325 + (1));
seq__11577_12322 = G__12864;
chunk__11578_12323 = G__12865;
count__11579_12324 = G__12866;
i__11580_12325 = G__12867;
continue;
} else {
var temp__5804__auto___12868 = cljs.core.seq.call(null,seq__11577_12322);
if(temp__5804__auto___12868){
var seq__11577_12869__$1 = temp__5804__auto___12868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11577_12869__$1)){
var c__5525__auto___12870 = cljs.core.chunk_first.call(null,seq__11577_12869__$1);
var G__12871 = cljs.core.chunk_rest.call(null,seq__11577_12869__$1);
var G__12872 = c__5525__auto___12870;
var G__12873 = cljs.core.count.call(null,c__5525__auto___12870);
var G__12874 = (0);
seq__11577_12322 = G__12871;
chunk__11578_12323 = G__12872;
count__11579_12324 = G__12873;
i__11580_12325 = G__12874;
continue;
} else {
var component__7938__auto___12875 = cljs.core.first.call(null,seq__11577_12869__$1);
speclj.components.install.call(null,component__7938__auto___12875,description__7937__auto____$1);


var G__12876 = cljs.core.next.call(null,seq__11577_12869__$1);
var G__12877 = null;
var G__12878 = (0);
var G__12879 = (0);
seq__11577_12322 = G__12876;
chunk__11578_12323 = G__12877;
count__11579_12324 = G__12878;
i__11580_12325 = G__12879;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11575_12320);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__10962_11961 = null;
var count__10963_11962 = (0);
var i__10964_11963 = (0);
while(true){
if((i__10964_11963 < count__10963_11962)){
var component__7938__auto___12880 = cljs.core._nth.call(null,chunk__10962_11961,i__10964_11963);
speclj.components.install.call(null,component__7938__auto___12880,description__7937__auto___11957);


var G__12881 = seq__10961_11960;
var G__12882 = chunk__10962_11961;
var G__12883 = count__10963_11962;
var G__12884 = (i__10964_11963 + (1));
seq__10961_11960 = G__12881;
chunk__10962_11961 = G__12882;
count__10963_11962 = G__12883;
i__10964_11963 = G__12884;
continue;
} else {
var temp__5804__auto___12885 = cljs.core.seq.call(null,seq__10961_11960);
if(temp__5804__auto___12885){
var seq__10961_12886__$1 = temp__5804__auto___12885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10961_12886__$1)){
var c__5525__auto___12887 = cljs.core.chunk_first.call(null,seq__10961_12886__$1);
var G__12888 = cljs.core.chunk_rest.call(null,seq__10961_12886__$1);
var G__12889 = c__5525__auto___12887;
var G__12890 = cljs.core.count.call(null,c__5525__auto___12887);
var G__12891 = (0);
seq__10961_11960 = G__12888;
chunk__10962_11961 = G__12889;
count__10963_11962 = G__12890;
i__10964_11963 = G__12891;
continue;
} else {
var component__7938__auto___12892 = cljs.core.first.call(null,seq__10961_12886__$1);
speclj.components.install.call(null,component__7938__auto___12892,description__7937__auto___11957);


var G__12893 = cljs.core.next.call(null,seq__10961_12886__$1);
var G__12894 = null;
var G__12895 = (0);
var G__12896 = (0);
seq__10961_11960 = G__12893;
chunk__10962_11961 = G__12894;
count__10963_11962 = G__12895;
i__10964_11963 = G__12896;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10959_11958);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___11957);
}


//# sourceMappingURL=boardc_spec.js.map
