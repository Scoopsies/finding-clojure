// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.data.data_ioc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.data.data_ioc');
tic_tac_toe.data.data_ioc_spec.clj_state1 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","","Play Again?","1. Yes","2. No"], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813),"O",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3),(4),(6)], null),"X",new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,"O",null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,"O",null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,(7),null,(1),null)),(new cljs.core.List(null,(8),null,(1),null)))))], null);
tic_tac_toe.data.data_ioc_spec.clj_state2 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","","Play Again?","1. Yes","2. No"], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309),"O",new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(4),(1),(3),(0)], null),"X",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,"O",null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,"O",null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,(7),null,(1),null)),(new cljs.core.List(null,(8),null,(1),null)))))], null);
tic_tac_toe.data.data_ioc_spec.clj_state3 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X wins!","","Play Again?","1. Yes","2. No"], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813),"O",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"move-order","move-order",-792510441),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(4),(1),(3),(0)], null),"X",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,"O",null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,"O",null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,"X",null,(1),null)),(new cljs.core.List(null,(7),null,(1),null)),(new cljs.core.List(null,(8),null,(1),null)))))], null);
tic_tac_toe.data.data_ioc_spec.default_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state1,new cljs.core.Keyword(null,"id","id",-1388402092),(1)),cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state2,new cljs.core.Keyword(null,"id","id",-1388402092),(2))], null);
tic_tac_toe.data.data_ioc_spec.data_store_specs = (function tic_tac_toe$data$data_ioc_spec$data_store_specs(){
var description__7937__auto__ = speclj.components.new_description.call(null,"data store",false,"tic-tac-toe.data.data-ioc-spec");
var _STAR_parent_description_STAR__orig_val__9460_9580 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9461_9581 = description__7937__auto__;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9461_9581);

try{var seq__9462_9585 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"read-data",false,"tic-tac-toe.data.data-ioc-spec");
var _STAR_parent_description_STAR__orig_val__9522_9594 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9523_9595 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9523_9595);

try{var seq__9524_9596 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns data stored in the <data>",((function (_STAR_parent_description_STAR__orig_val__9522_9594,_STAR_parent_description_STAR__temp_val__9523_9595,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
var expected__8074__auto__ = tic_tac_toe.data.data_ioc_spec.default_data;
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9522_9594,_STAR_parent_description_STAR__temp_val__9523_9595,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false)],null)));
var chunk__9525_9597 = null;
var count__9526_9598 = (0);
var i__9527_9599 = (0);
while(true){
if((i__9527_9599 < count__9526_9598)){
var component__7938__auto___9602 = cljs.core._nth.call(null,chunk__9525_9597,i__9527_9599);
speclj.components.install.call(null,component__7938__auto___9602,description__7937__auto____$1);


var G__9603 = seq__9524_9596;
var G__9604 = chunk__9525_9597;
var G__9605 = count__9526_9598;
var G__9606 = (i__9527_9599 + (1));
seq__9524_9596 = G__9603;
chunk__9525_9597 = G__9604;
count__9526_9598 = G__9605;
i__9527_9599 = G__9606;
continue;
} else {
var temp__5804__auto___9607 = cljs.core.seq.call(null,seq__9524_9596);
if(temp__5804__auto___9607){
var seq__9524_9608__$1 = temp__5804__auto___9607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9524_9608__$1)){
var c__5525__auto___9609 = cljs.core.chunk_first.call(null,seq__9524_9608__$1);
var G__9610 = cljs.core.chunk_rest.call(null,seq__9524_9608__$1);
var G__9611 = c__5525__auto___9609;
var G__9612 = cljs.core.count.call(null,c__5525__auto___9609);
var G__9613 = (0);
seq__9524_9596 = G__9610;
chunk__9525_9597 = G__9611;
count__9526_9598 = G__9612;
i__9527_9599 = G__9613;
continue;
} else {
var component__7938__auto___9614 = cljs.core.first.call(null,seq__9524_9608__$1);
speclj.components.install.call(null,component__7938__auto___9614,description__7937__auto____$1);


var G__9615 = cljs.core.next.call(null,seq__9524_9608__$1);
var G__9616 = null;
var G__9617 = (0);
var G__9618 = (0);
seq__9524_9596 = G__9615;
chunk__9525_9597 = G__9616;
count__9526_9598 = G__9617;
i__9527_9599 = G__9618;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9522_9594);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"write-data",false,"tic-tac-toe.data.data-ioc-spec");
var _STAR_parent_description_STAR__orig_val__9530_9619 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9531_9620 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9531_9620);

try{var seq__9532_9621 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"writes to the <data>",((function (_STAR_parent_description_STAR__orig_val__9530_9619,_STAR_parent_description_STAR__temp_val__9531_9620,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
tic_tac_toe.data.data_ioc.write_db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state1,new cljs.core.Keyword(null,"id","id",-1388402092),(1))], null));

var expected__8074__auto___9625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state1,new cljs.core.Keyword(null,"id","id",-1388402092),(1))], null);
var actual__8075__auto___9626 = tic_tac_toe.data.data_ioc.read_db.call(null);
if(cljs.core._EQ_.call(null,expected__8074__auto___9625,actual__8075__auto___9626)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9625;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9626;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

tic_tac_toe.data.data_ioc.write_db.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state2,new cljs.core.Keyword(null,"id","id",-1388402092),(1))], null));

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state2,new cljs.core.Keyword(null,"id","id",-1388402092),(1))], null);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9530_9619,_STAR_parent_description_STAR__temp_val__9531_9620,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false)],null)));
var chunk__9533_9622 = null;
var count__9534_9623 = (0);
var i__9535_9624 = (0);
while(true){
if((i__9535_9624 < count__9534_9623)){
var component__7938__auto___9627 = cljs.core._nth.call(null,chunk__9533_9622,i__9535_9624);
speclj.components.install.call(null,component__7938__auto___9627,description__7937__auto____$1);


var G__9628 = seq__9532_9621;
var G__9629 = chunk__9533_9622;
var G__9630 = count__9534_9623;
var G__9631 = (i__9535_9624 + (1));
seq__9532_9621 = G__9628;
chunk__9533_9622 = G__9629;
count__9534_9623 = G__9630;
i__9535_9624 = G__9631;
continue;
} else {
var temp__5804__auto___9632 = cljs.core.seq.call(null,seq__9532_9621);
if(temp__5804__auto___9632){
var seq__9532_9633__$1 = temp__5804__auto___9632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9532_9633__$1)){
var c__5525__auto___9634 = cljs.core.chunk_first.call(null,seq__9532_9633__$1);
var G__9635 = cljs.core.chunk_rest.call(null,seq__9532_9633__$1);
var G__9636 = c__5525__auto___9634;
var G__9637 = cljs.core.count.call(null,c__5525__auto___9634);
var G__9638 = (0);
seq__9532_9621 = G__9635;
chunk__9533_9622 = G__9636;
count__9534_9623 = G__9637;
i__9535_9624 = G__9638;
continue;
} else {
var component__7938__auto___9639 = cljs.core.first.call(null,seq__9532_9633__$1);
speclj.components.install.call(null,component__7938__auto___9639,description__7937__auto____$1);


var G__9640 = cljs.core.next.call(null,seq__9532_9633__$1);
var G__9641 = null;
var G__9642 = (0);
var G__9643 = (0);
seq__9532_9621 = G__9640;
chunk__9533_9622 = G__9641;
count__9534_9623 = G__9642;
i__9535_9624 = G__9643;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9530_9619);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-last",false,"tic-tac-toe.data.data-ioc-spec");
var _STAR_parent_description_STAR__orig_val__9542_9644 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9543_9645 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9543_9645);

try{var seq__9544_9646 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns the last map in the <data>",((function (_STAR_parent_description_STAR__orig_val__9542_9644,_STAR_parent_description_STAR__temp_val__9543_9645,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
var expected__8074__auto__ = cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state2,new cljs.core.Keyword(null,"id","id",-1388402092),(2));
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.pull_last_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9542_9644,_STAR_parent_description_STAR__temp_val__9543_9645,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false),speclj.components.new_characteristic.call(null,"returns nil if <data> is empty",((function (_STAR_parent_description_STAR__orig_val__9542_9644,_STAR_parent_description_STAR__temp_val__9543_9645,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
tic_tac_toe.data.data_ioc.write_db.call(null,cljs.core.PersistentVector.EMPTY);

var temp__5804__auto__ = tic_tac_toe.data.data_ioc.pull_last_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9542_9644,_STAR_parent_description_STAR__temp_val__9543_9645,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false)],null)));
var chunk__9545_9647 = null;
var count__9546_9648 = (0);
var i__9547_9649 = (0);
while(true){
if((i__9547_9649 < count__9546_9648)){
var component__7938__auto___9650 = cljs.core._nth.call(null,chunk__9545_9647,i__9547_9649);
speclj.components.install.call(null,component__7938__auto___9650,description__7937__auto____$1);


var G__9651 = seq__9544_9646;
var G__9652 = chunk__9545_9647;
var G__9653 = count__9546_9648;
var G__9654 = (i__9547_9649 + (1));
seq__9544_9646 = G__9651;
chunk__9545_9647 = G__9652;
count__9546_9648 = G__9653;
i__9547_9649 = G__9654;
continue;
} else {
var temp__5804__auto___9655 = cljs.core.seq.call(null,seq__9544_9646);
if(temp__5804__auto___9655){
var seq__9544_9656__$1 = temp__5804__auto___9655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9544_9656__$1)){
var c__5525__auto___9657 = cljs.core.chunk_first.call(null,seq__9544_9656__$1);
var G__9658 = cljs.core.chunk_rest.call(null,seq__9544_9656__$1);
var G__9659 = c__5525__auto___9657;
var G__9660 = cljs.core.count.call(null,c__5525__auto___9657);
var G__9661 = (0);
seq__9544_9646 = G__9658;
chunk__9545_9647 = G__9659;
count__9546_9648 = G__9660;
i__9547_9649 = G__9661;
continue;
} else {
var component__7938__auto___9662 = cljs.core.first.call(null,seq__9544_9656__$1);
speclj.components.install.call(null,component__7938__auto___9662,description__7937__auto____$1);


var G__9663 = cljs.core.next.call(null,seq__9544_9656__$1);
var G__9664 = null;
var G__9665 = (0);
var G__9666 = (0);
seq__9544_9646 = G__9663;
chunk__9545_9647 = G__9664;
count__9546_9648 = G__9665;
i__9547_9649 = G__9666;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9542_9644);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-new-id",false,"tic-tac-toe.data.data-ioc-spec");
var _STAR_parent_description_STAR__orig_val__9552_9667 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9553_9668 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9553_9668);

try{var seq__9554_9669 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns an id incremented by 1 from the last id",((function (_STAR_parent_description_STAR__orig_val__9552_9667,_STAR_parent_description_STAR__temp_val__9553_9668,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
var expected__8074__auto__ = (3);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.__GT_new_id.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9552_9667,_STAR_parent_description_STAR__temp_val__9553_9668,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false),speclj.components.new_characteristic.call(null,"returns 1 if the edn vector is empty",((function (_STAR_parent_description_STAR__orig_val__9552_9667,_STAR_parent_description_STAR__temp_val__9553_9668,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
tic_tac_toe.data.data_ioc.write_db.call(null,cljs.core.PersistentVector.EMPTY);

var expected__8074__auto__ = (1);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.__GT_new_id.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9552_9667,_STAR_parent_description_STAR__temp_val__9553_9668,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false)],null)));
var chunk__9555_9670 = null;
var count__9556_9671 = (0);
var i__9557_9672 = (0);
while(true){
if((i__9557_9672 < count__9556_9671)){
var component__7938__auto___9673 = cljs.core._nth.call(null,chunk__9555_9670,i__9557_9672);
speclj.components.install.call(null,component__7938__auto___9673,description__7937__auto____$1);


var G__9674 = seq__9554_9669;
var G__9675 = chunk__9555_9670;
var G__9676 = count__9556_9671;
var G__9677 = (i__9557_9672 + (1));
seq__9554_9669 = G__9674;
chunk__9555_9670 = G__9675;
count__9556_9671 = G__9676;
i__9557_9672 = G__9677;
continue;
} else {
var temp__5804__auto___9678 = cljs.core.seq.call(null,seq__9554_9669);
if(temp__5804__auto___9678){
var seq__9554_9679__$1 = temp__5804__auto___9678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9554_9679__$1)){
var c__5525__auto___9680 = cljs.core.chunk_first.call(null,seq__9554_9679__$1);
var G__9681 = cljs.core.chunk_rest.call(null,seq__9554_9679__$1);
var G__9682 = c__5525__auto___9680;
var G__9683 = cljs.core.count.call(null,c__5525__auto___9680);
var G__9684 = (0);
seq__9554_9669 = G__9681;
chunk__9555_9670 = G__9682;
count__9556_9671 = G__9683;
i__9557_9672 = G__9684;
continue;
} else {
var component__7938__auto___9685 = cljs.core.first.call(null,seq__9554_9679__$1);
speclj.components.install.call(null,component__7938__auto___9685,description__7937__auto____$1);


var G__9686 = cljs.core.next.call(null,seq__9554_9679__$1);
var G__9687 = null;
var G__9688 = (0);
var G__9689 = (0);
seq__9554_9669 = G__9686;
chunk__9555_9670 = G__9687;
count__9556_9671 = G__9688;
i__9557_9672 = G__9689;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9552_9667);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"add-db",false,"tic-tac-toe.data.data-ioc-spec");
var _STAR_parent_description_STAR__orig_val__9558_9690 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9559_9691 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9559_9691);

try{var seq__9560_9694 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"adds content to end of data vector with new id",((function (_STAR_parent_description_STAR__orig_val__9558_9690,_STAR_parent_description_STAR__temp_val__9559_9691,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
tic_tac_toe.data.data_ioc.add_db.call(null,tic_tac_toe.data.data_ioc_spec.clj_state3);

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state1,new cljs.core.Keyword(null,"id","id",-1388402092),(1)),cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state2,new cljs.core.Keyword(null,"id","id",-1388402092),(2)),cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state3,new cljs.core.Keyword(null,"id","id",-1388402092),(3))], null);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9558_9690,_STAR_parent_description_STAR__temp_val__9559_9691,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false),speclj.components.new_characteristic.call(null,"retains content when adding",((function (_STAR_parent_description_STAR__orig_val__9558_9690,_STAR_parent_description_STAR__temp_val__9559_9691,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
tic_tac_toe.data.data_ioc.write_db.call(null,cljs.core.PersistentVector.EMPTY);

tic_tac_toe.data.data_ioc.add_db.call(null,tic_tac_toe.data.data_ioc_spec.clj_state1);

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state1,new cljs.core.Keyword(null,"id","id",-1388402092),(1))], null);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9558_9690,_STAR_parent_description_STAR__temp_val__9559_9691,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false)],null)));
var chunk__9561_9695 = null;
var count__9562_9696 = (0);
var i__9563_9697 = (0);
while(true){
if((i__9563_9697 < count__9562_9696)){
var component__7938__auto___9704 = cljs.core._nth.call(null,chunk__9561_9695,i__9563_9697);
speclj.components.install.call(null,component__7938__auto___9704,description__7937__auto____$1);


var G__9705 = seq__9560_9694;
var G__9706 = chunk__9561_9695;
var G__9707 = count__9562_9696;
var G__9708 = (i__9563_9697 + (1));
seq__9560_9694 = G__9705;
chunk__9561_9695 = G__9706;
count__9562_9696 = G__9707;
i__9563_9697 = G__9708;
continue;
} else {
var temp__5804__auto___9709 = cljs.core.seq.call(null,seq__9560_9694);
if(temp__5804__auto___9709){
var seq__9560_9710__$1 = temp__5804__auto___9709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9560_9710__$1)){
var c__5525__auto___9711 = cljs.core.chunk_first.call(null,seq__9560_9710__$1);
var G__9712 = cljs.core.chunk_rest.call(null,seq__9560_9710__$1);
var G__9713 = c__5525__auto___9711;
var G__9714 = cljs.core.count.call(null,c__5525__auto___9711);
var G__9715 = (0);
seq__9560_9694 = G__9712;
chunk__9561_9695 = G__9713;
count__9562_9696 = G__9714;
i__9563_9697 = G__9715;
continue;
} else {
var component__7938__auto___9720 = cljs.core.first.call(null,seq__9560_9710__$1);
speclj.components.install.call(null,component__7938__auto___9720,description__7937__auto____$1);


var G__9721 = cljs.core.next.call(null,seq__9560_9710__$1);
var G__9722 = null;
var G__9723 = (0);
var G__9724 = (0);
seq__9560_9694 = G__9721;
chunk__9561_9695 = G__9722;
count__9562_9696 = G__9723;
i__9563_9697 = G__9724;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9558_9690);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"update-last",false,"tic-tac-toe.data.data-ioc-spec");
var _STAR_parent_description_STAR__orig_val__9568_9725 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9569_9726 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9569_9726);

try{var seq__9570_9727 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"replaces last with content and retains id",((function (_STAR_parent_description_STAR__orig_val__9568_9725,_STAR_parent_description_STAR__temp_val__9569_9726,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__){
return (function (){
tic_tac_toe.data.data_ioc.update_db.call(null,cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state2,new cljs.core.Keyword(null,"id","id",-1388402092),(2)));

var expected__8074__auto___9731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state1,new cljs.core.Keyword(null,"id","id",-1388402092),(1)),cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state2,new cljs.core.Keyword(null,"id","id",-1388402092),(2))], null);
var actual__8075__auto___9732 = tic_tac_toe.data.data_ioc.read_db.call(null);
if(cljs.core._EQ_.call(null,expected__8074__auto___9731,actual__8075__auto___9732)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9731;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9732;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}

var updated_state = cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state2,new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true);
tic_tac_toe.data.data_ioc.update_db.call(null,updated_state);

var expected__8074__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,tic_tac_toe.data.data_ioc_spec.clj_state1,new cljs.core.Keyword(null,"id","id",-1388402092),(1)),updated_state], null);
var actual__8075__auto__ = tic_tac_toe.data.data_ioc.read_db.call(null);
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
});})(_STAR_parent_description_STAR__orig_val__9568_9725,_STAR_parent_description_STAR__temp_val__9569_9726,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9460_9580,_STAR_parent_description_STAR__temp_val__9461_9581,description__7937__auto__))
,false)],null)));
var chunk__9571_9728 = null;
var count__9572_9729 = (0);
var i__9573_9730 = (0);
while(true){
if((i__9573_9730 < count__9572_9729)){
var component__7938__auto___9733 = cljs.core._nth.call(null,chunk__9571_9728,i__9573_9730);
speclj.components.install.call(null,component__7938__auto___9733,description__7937__auto____$1);


var G__9734 = seq__9570_9727;
var G__9735 = chunk__9571_9728;
var G__9736 = count__9572_9729;
var G__9737 = (i__9573_9730 + (1));
seq__9570_9727 = G__9734;
chunk__9571_9728 = G__9735;
count__9572_9729 = G__9736;
i__9573_9730 = G__9737;
continue;
} else {
var temp__5804__auto___9738 = cljs.core.seq.call(null,seq__9570_9727);
if(temp__5804__auto___9738){
var seq__9570_9739__$1 = temp__5804__auto___9738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9570_9739__$1)){
var c__5525__auto___9740 = cljs.core.chunk_first.call(null,seq__9570_9739__$1);
var G__9741 = cljs.core.chunk_rest.call(null,seq__9570_9739__$1);
var G__9742 = c__5525__auto___9740;
var G__9743 = cljs.core.count.call(null,c__5525__auto___9740);
var G__9744 = (0);
seq__9570_9727 = G__9741;
chunk__9571_9728 = G__9742;
count__9572_9729 = G__9743;
i__9573_9730 = G__9744;
continue;
} else {
var component__7938__auto___9745 = cljs.core.first.call(null,seq__9570_9739__$1);
speclj.components.install.call(null,component__7938__auto___9745,description__7937__auto____$1);


var G__9746 = cljs.core.next.call(null,seq__9570_9739__$1);
var G__9747 = null;
var G__9748 = (0);
var G__9749 = (0);
seq__9570_9727 = G__9746;
chunk__9571_9728 = G__9747;
count__9572_9729 = G__9748;
i__9573_9730 = G__9749;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9568_9725);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__9463_9589 = null;
var count__9464_9590 = (0);
var i__9465_9591 = (0);
while(true){
if((i__9465_9591 < count__9464_9590)){
var component__7938__auto___9750 = cljs.core._nth.call(null,chunk__9463_9589,i__9465_9591);
speclj.components.install.call(null,component__7938__auto___9750,description__7937__auto__);


var G__9751 = seq__9462_9585;
var G__9752 = chunk__9463_9589;
var G__9753 = count__9464_9590;
var G__9754 = (i__9465_9591 + (1));
seq__9462_9585 = G__9751;
chunk__9463_9589 = G__9752;
count__9464_9590 = G__9753;
i__9465_9591 = G__9754;
continue;
} else {
var temp__5804__auto___9755 = cljs.core.seq.call(null,seq__9462_9585);
if(temp__5804__auto___9755){
var seq__9462_9756__$1 = temp__5804__auto___9755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9462_9756__$1)){
var c__5525__auto___9757 = cljs.core.chunk_first.call(null,seq__9462_9756__$1);
var G__9758 = cljs.core.chunk_rest.call(null,seq__9462_9756__$1);
var G__9759 = c__5525__auto___9757;
var G__9760 = cljs.core.count.call(null,c__5525__auto___9757);
var G__9761 = (0);
seq__9462_9585 = G__9758;
chunk__9463_9589 = G__9759;
count__9464_9590 = G__9760;
i__9465_9591 = G__9761;
continue;
} else {
var component__7938__auto___9764 = cljs.core.first.call(null,seq__9462_9756__$1);
speclj.components.install.call(null,component__7938__auto___9764,description__7937__auto__);


var G__9765 = cljs.core.next.call(null,seq__9462_9756__$1);
var G__9766 = null;
var G__9767 = (0);
var G__9768 = (0);
seq__9462_9585 = G__9765;
chunk__9463_9589 = G__9766;
count__9464_9590 = G__9767;
i__9465_9591 = G__9768;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9460_9580);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto__);
}

return description__7937__auto__;
});
var description__7937__auto___9769 = speclj.components.new_description.call(null,"Memory-IO",false,"tic-tac-toe.data.data-ioc-spec");
var _STAR_parent_description_STAR__orig_val__9582_9770 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9583_9771 = description__7937__auto___9769;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9583_9771);

try{var seq__9584_9772 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9582_9770,_STAR_parent_description_STAR__temp_val__9583_9771,description__7937__auto___9769){
return (function (it__7999__auto__){
var data_store_orig_val__9600 = tic_tac_toe.data.data_ioc.data_store;
var data_store_temp_val__9601 = cljs.core.atom.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430));
(tic_tac_toe.data.data_ioc.data_store = data_store_temp_val__9601);

try{return it__7999__auto__.call(null);
}finally {(tic_tac_toe.data.data_ioc.data_store = data_store_orig_val__9600);
}});})(_STAR_parent_description_STAR__orig_val__9582_9770,_STAR_parent_description_STAR__temp_val__9583_9771,description__7937__auto___9769))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__9582_9770,_STAR_parent_description_STAR__temp_val__9583_9771,description__7937__auto___9769){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.data.data_ioc.memory,tic_tac_toe.data.data_ioc_spec.default_data);
});})(_STAR_parent_description_STAR__orig_val__9582_9770,_STAR_parent_description_STAR__temp_val__9583_9771,description__7937__auto___9769))
),tic_tac_toe.data.data_ioc_spec.data_store_specs.call(null)],null)));
var chunk__9586_9773 = null;
var count__9587_9774 = (0);
var i__9588_9775 = (0);
while(true){
if((i__9588_9775 < count__9587_9774)){
var component__7938__auto___9776 = cljs.core._nth.call(null,chunk__9586_9773,i__9588_9775);
speclj.components.install.call(null,component__7938__auto___9776,description__7937__auto___9769);


var G__9777 = seq__9584_9772;
var G__9778 = chunk__9586_9773;
var G__9779 = count__9587_9774;
var G__9780 = (i__9588_9775 + (1));
seq__9584_9772 = G__9777;
chunk__9586_9773 = G__9778;
count__9587_9774 = G__9779;
i__9588_9775 = G__9780;
continue;
} else {
var temp__5804__auto___9781 = cljs.core.seq.call(null,seq__9584_9772);
if(temp__5804__auto___9781){
var seq__9584_9784__$1 = temp__5804__auto___9781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9584_9784__$1)){
var c__5525__auto___9785 = cljs.core.chunk_first.call(null,seq__9584_9784__$1);
var G__9786 = cljs.core.chunk_rest.call(null,seq__9584_9784__$1);
var G__9787 = c__5525__auto___9785;
var G__9788 = cljs.core.count.call(null,c__5525__auto___9785);
var G__9789 = (0);
seq__9584_9772 = G__9786;
chunk__9586_9773 = G__9787;
count__9587_9774 = G__9788;
i__9588_9775 = G__9789;
continue;
} else {
var component__7938__auto___9790 = cljs.core.first.call(null,seq__9584_9784__$1);
speclj.components.install.call(null,component__7938__auto___9790,description__7937__auto___9769);


var G__9791 = cljs.core.next.call(null,seq__9584_9784__$1);
var G__9792 = null;
var G__9793 = (0);
var G__9794 = (0);
seq__9584_9772 = G__9791;
chunk__9586_9773 = G__9792;
count__9587_9774 = G__9793;
i__9588_9775 = G__9794;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9582_9770);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___9769);
}


//# sourceMappingURL=data_ioc_spec.js.map
