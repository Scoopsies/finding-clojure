// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.mini_maxc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.mini_maxc');
var description__7937__auto___9554 = speclj.components.new_description.call(null,"mini-max",false,"tic-tac-toe.moves.mini-maxc-spec");
var _STAR_parent_description_STAR__orig_val__9512_9555 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9513_9556 = description__7937__auto___9554;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9513_9556);

try{var seq__9514_9557 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"score-moves",false,"tic-tac-toe.moves.mini-maxc-spec");
var _STAR_parent_description_STAR__orig_val__9536_9561 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9537_9562 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9537_9562);

try{var seq__9538_9563 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"min-max-move",false,"tic-tac-toe.moves.mini-maxc-spec");
var _STAR_parent_description_STAR__orig_val__9548_9567 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9549_9568 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9549_9568);

try{var seq__9550_9569 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"scores a win for maximizer",((function (_STAR_parent_description_STAR__orig_val__9548_9567,_STAR_parent_description_STAR__temp_val__9549_9568,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9536_9561,_STAR_parent_description_STAR__temp_val__9537_9562,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9512_9555,_STAR_parent_description_STAR__temp_val__9513_9556,description__7937__auto___9554){
return (function (){
var expected__8074__auto__ = (999);
var actual__8075__auto__ = tic_tac_toe.moves.mini_maxc.min_max_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X","O","X","O","O","X",(8)], null),true,(0));
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
});})(_STAR_parent_description_STAR__orig_val__9548_9567,_STAR_parent_description_STAR__temp_val__9549_9568,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9536_9561,_STAR_parent_description_STAR__temp_val__9537_9562,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9512_9555,_STAR_parent_description_STAR__temp_val__9513_9556,description__7937__auto___9554))
,false),speclj.components.new_characteristic.call(null,"scores a win for minimizer",((function (_STAR_parent_description_STAR__orig_val__9548_9567,_STAR_parent_description_STAR__temp_val__9549_9568,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9536_9561,_STAR_parent_description_STAR__temp_val__9537_9562,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9512_9555,_STAR_parent_description_STAR__temp_val__9513_9556,description__7937__auto___9554){
return (function (){
var expected__8074__auto__ = (-999);
var actual__8075__auto__ = tic_tac_toe.moves.mini_maxc.min_max_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X","O","X","O","O","X",(8)], null),false,(0));
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
});})(_STAR_parent_description_STAR__orig_val__9548_9567,_STAR_parent_description_STAR__temp_val__9549_9568,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9536_9561,_STAR_parent_description_STAR__temp_val__9537_9562,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9512_9555,_STAR_parent_description_STAR__temp_val__9513_9556,description__7937__auto___9554))
,false),speclj.components.new_characteristic.call(null,"scores a Draw for maximizer",((function (_STAR_parent_description_STAR__orig_val__9548_9567,_STAR_parent_description_STAR__temp_val__9549_9568,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9536_9561,_STAR_parent_description_STAR__temp_val__9537_9562,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9512_9555,_STAR_parent_description_STAR__temp_val__9513_9556,description__7937__auto___9554){
return (function (){
var expected__8074__auto__ = (0);
var actual__8075__auto__ = tic_tac_toe.moves.mini_maxc.min_max_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"O","X","X","X","O","O","X","O"], null),true,(0));
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
});})(_STAR_parent_description_STAR__orig_val__9548_9567,_STAR_parent_description_STAR__temp_val__9549_9568,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9536_9561,_STAR_parent_description_STAR__temp_val__9537_9562,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9512_9555,_STAR_parent_description_STAR__temp_val__9513_9556,description__7937__auto___9554))
,false),speclj.components.new_characteristic.call(null,"scores a Draw for minimizer",((function (_STAR_parent_description_STAR__orig_val__9548_9567,_STAR_parent_description_STAR__temp_val__9549_9568,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9536_9561,_STAR_parent_description_STAR__temp_val__9537_9562,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9512_9555,_STAR_parent_description_STAR__temp_val__9513_9556,description__7937__auto___9554){
return (function (){
var expected__8074__auto__ = (0);
var actual__8075__auto__ = tic_tac_toe.moves.mini_maxc.min_max_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"O","X","X","X","O","O","X","O"], null),false,(0));
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
});})(_STAR_parent_description_STAR__orig_val__9548_9567,_STAR_parent_description_STAR__temp_val__9549_9568,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9536_9561,_STAR_parent_description_STAR__temp_val__9537_9562,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9512_9555,_STAR_parent_description_STAR__temp_val__9513_9556,description__7937__auto___9554))
,false)],null)));
var chunk__9551_9570 = null;
var count__9552_9571 = (0);
var i__9553_9572 = (0);
while(true){
if((i__9553_9572 < count__9552_9571)){
var component__7938__auto___9573 = cljs.core._nth.call(null,chunk__9551_9570,i__9553_9572);
speclj.components.install.call(null,component__7938__auto___9573,description__7937__auto____$2);


var G__9574 = seq__9550_9569;
var G__9575 = chunk__9551_9570;
var G__9576 = count__9552_9571;
var G__9577 = (i__9553_9572 + (1));
seq__9550_9569 = G__9574;
chunk__9551_9570 = G__9575;
count__9552_9571 = G__9576;
i__9553_9572 = G__9577;
continue;
} else {
var temp__5804__auto___9578 = cljs.core.seq.call(null,seq__9550_9569);
if(temp__5804__auto___9578){
var seq__9550_9579__$1 = temp__5804__auto___9578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9550_9579__$1)){
var c__5525__auto___9580 = cljs.core.chunk_first.call(null,seq__9550_9579__$1);
var G__9581 = cljs.core.chunk_rest.call(null,seq__9550_9579__$1);
var G__9582 = c__5525__auto___9580;
var G__9583 = cljs.core.count.call(null,c__5525__auto___9580);
var G__9584 = (0);
seq__9550_9569 = G__9581;
chunk__9551_9570 = G__9582;
count__9552_9571 = G__9583;
i__9553_9572 = G__9584;
continue;
} else {
var component__7938__auto___9585 = cljs.core.first.call(null,seq__9550_9579__$1);
speclj.components.install.call(null,component__7938__auto___9585,description__7937__auto____$2);


var G__9586 = cljs.core.next.call(null,seq__9550_9579__$1);
var G__9587 = null;
var G__9588 = (0);
var G__9589 = (0);
seq__9550_9569 = G__9586;
chunk__9551_9570 = G__9587;
count__9552_9571 = G__9588;
i__9553_9572 = G__9589;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9548_9567);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})()],null)));
var chunk__9539_9564 = null;
var count__9540_9565 = (0);
var i__9541_9566 = (0);
while(true){
if((i__9541_9566 < count__9540_9565)){
var component__7938__auto___9590 = cljs.core._nth.call(null,chunk__9539_9564,i__9541_9566);
speclj.components.install.call(null,component__7938__auto___9590,description__7937__auto____$1);


var G__9591 = seq__9538_9563;
var G__9592 = chunk__9539_9564;
var G__9593 = count__9540_9565;
var G__9594 = (i__9541_9566 + (1));
seq__9538_9563 = G__9591;
chunk__9539_9564 = G__9592;
count__9540_9565 = G__9593;
i__9541_9566 = G__9594;
continue;
} else {
var temp__5804__auto___9595 = cljs.core.seq.call(null,seq__9538_9563);
if(temp__5804__auto___9595){
var seq__9538_9596__$1 = temp__5804__auto___9595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9538_9596__$1)){
var c__5525__auto___9597 = cljs.core.chunk_first.call(null,seq__9538_9596__$1);
var G__9598 = cljs.core.chunk_rest.call(null,seq__9538_9596__$1);
var G__9599 = c__5525__auto___9597;
var G__9600 = cljs.core.count.call(null,c__5525__auto___9597);
var G__9601 = (0);
seq__9538_9563 = G__9598;
chunk__9539_9564 = G__9599;
count__9540_9565 = G__9600;
i__9541_9566 = G__9601;
continue;
} else {
var component__7938__auto___9602 = cljs.core.first.call(null,seq__9538_9596__$1);
speclj.components.install.call(null,component__7938__auto___9602,description__7937__auto____$1);


var G__9603 = cljs.core.next.call(null,seq__9538_9596__$1);
var G__9604 = null;
var G__9605 = (0);
var G__9606 = (0);
seq__9538_9563 = G__9603;
chunk__9539_9564 = G__9604;
count__9540_9565 = G__9605;
i__9541_9566 = G__9606;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9536_9561);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__9515_9558 = null;
var count__9516_9559 = (0);
var i__9517_9560 = (0);
while(true){
if((i__9517_9560 < count__9516_9559)){
var component__7938__auto___9607 = cljs.core._nth.call(null,chunk__9515_9558,i__9517_9560);
speclj.components.install.call(null,component__7938__auto___9607,description__7937__auto___9554);


var G__9608 = seq__9514_9557;
var G__9609 = chunk__9515_9558;
var G__9610 = count__9516_9559;
var G__9611 = (i__9517_9560 + (1));
seq__9514_9557 = G__9608;
chunk__9515_9558 = G__9609;
count__9516_9559 = G__9610;
i__9517_9560 = G__9611;
continue;
} else {
var temp__5804__auto___9612 = cljs.core.seq.call(null,seq__9514_9557);
if(temp__5804__auto___9612){
var seq__9514_9613__$1 = temp__5804__auto___9612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9514_9613__$1)){
var c__5525__auto___9614 = cljs.core.chunk_first.call(null,seq__9514_9613__$1);
var G__9615 = cljs.core.chunk_rest.call(null,seq__9514_9613__$1);
var G__9616 = c__5525__auto___9614;
var G__9617 = cljs.core.count.call(null,c__5525__auto___9614);
var G__9618 = (0);
seq__9514_9557 = G__9615;
chunk__9515_9558 = G__9616;
count__9516_9559 = G__9617;
i__9517_9560 = G__9618;
continue;
} else {
var component__7938__auto___9619 = cljs.core.first.call(null,seq__9514_9613__$1);
speclj.components.install.call(null,component__7938__auto___9619,description__7937__auto___9554);


var G__9620 = cljs.core.next.call(null,seq__9514_9613__$1);
var G__9621 = null;
var G__9622 = (0);
var G__9623 = (0);
seq__9514_9557 = G__9620;
chunk__9515_9558 = G__9621;
count__9516_9559 = G__9622;
i__9517_9560 = G__9623;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9512_9555);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___9554);
}


//# sourceMappingURL=mini_maxc_spec.js.map
