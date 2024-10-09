// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.hardc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.spec_helperc');
goog.require('tic_tac_toe.moves.hardc');
tic_tac_toe.moves.hardc_spec.state3x3 = new cljs.core.PersistentArrayMap(null, 3, ["X",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),"O",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
tic_tac_toe.moves.hardc_spec.state4x4 = cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723));
tic_tac_toe.moves.hardc_spec.state3x3x3 = cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.core.describe.call(null,"hardc -move",speclj.core.context.call(null,"pick-move",speclj.core.context.call(null,"3x3",speclj.core.it.call(null,"takes a win over a block",speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(2),"X","X",(5),"X",(7),(8)], null)))),speclj.core.should_EQ_.call(null,(0),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),"X","O",(4),"X","O","X",(8)], null))))),speclj.core.it.call(null,"takes a block if no win is available",speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),(3),"O",(5),(6),(7),(8)], null)))),speclj.core.should_EQ_.call(null,(8),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),"O",(5),"X","X",(8)], null))))),speclj.core.it.call(null,"plays the middle if corner is played first",(function (){var seq__6764 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(6),(8)], null));
var chunk__6765 = null;
var count__6766 = (0);
var i__6767 = (0);
while(true){
if((i__6767 < count__6766)){
var x = cljs.core._nth.call(null,chunk__6765,i__6767);
speclj.core.should_EQ_.call(null,(4),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.range.call(null,(9))))));


var G__6802 = seq__6764;
var G__6803 = chunk__6765;
var G__6804 = count__6766;
var G__6805 = (i__6767 + (1));
seq__6764 = G__6802;
chunk__6765 = G__6803;
count__6766 = G__6804;
i__6767 = G__6805;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6764);
if(temp__5804__auto__){
var seq__6764__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6764__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6764__$1);
var G__6806 = cljs.core.chunk_rest.call(null,seq__6764__$1);
var G__6807 = c__5525__auto__;
var G__6808 = cljs.core.count.call(null,c__5525__auto__);
var G__6809 = (0);
seq__6764 = G__6806;
chunk__6765 = G__6807;
count__6766 = G__6808;
i__6767 = G__6809;
continue;
} else {
var x = cljs.core.first.call(null,seq__6764__$1);
speclj.core.should_EQ_.call(null,(4),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.range.call(null,(9))))));


var G__6810 = cljs.core.next.call(null,seq__6764__$1);
var G__6811 = null;
var G__6812 = (0);
var G__6813 = (0);
seq__6764 = G__6810;
chunk__6765 = G__6811;
count__6766 = G__6812;
i__6767 = G__6813;
continue;
}
} else {
return null;
}
}
break;
}
})()),speclj.core.it.call(null,"plays the corner if middle is played first",speclj.core.should_EQ_.call(null,(8),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),"X",(5),(6),(7),(8)], null)))))),speclj.core.context.call(null,"4x4",speclj.core.it.call(null,"returns the proper default value",speclj.core.should_EQ_.call(null,(5),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.range.call(null,(16)))))),speclj.core.should_EQ_.call(null,(6),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null),cljs.core.range.call(null,(16)))))),speclj.core.should_EQ_.call(null,(9),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)], null),cljs.core.range.call(null,(16)))))),speclj.core.should_EQ_.call(null,(10),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15)], null),cljs.core.range.call(null,(16)))))),speclj.core.should_EQ_.call(null,(0),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5)], null),cljs.core.range.call(null,(16)))))),speclj.core.should_EQ_.call(null,(3),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6)], null),cljs.core.range.call(null,(16)))))),speclj.core.should_EQ_.call(null,(12),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)], null),cljs.core.range.call(null,(16)))))),speclj.core.should_EQ_.call(null,(15),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10)], null),cljs.core.range.call(null,(16))))))),speclj.core.it.call(null,"takes a win if presented",speclj.core.should_EQ_.call(null,(3),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),cljs.core.range.call(null,(16))))))),speclj.core.it.call(null,"takes a block if presented",speclj.core.should_EQ_.call(null,(3),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state4x4,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null),cljs.core.range.call(null,(16)))))))),speclj.core.context.call(null,"3x3x3",speclj.core.with_stubs.call(null),speclj.core.it.call(null,"takes a win if available",(function (){var x_board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.range.call(null,(27)));
var full_board = tic_tac_toe.spec_helperc.populate_board.call(null,"O",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null),x_board);
return speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),full_board)));
})()),speclj.core.it.call(null,"takes a block if no win available.",(function (){var x_board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13)], null),cljs.core.range.call(null,(27)));
var full_board = tic_tac_toe.spec_helperc.populate_board.call(null,"O",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5)], null),x_board);
return speclj.core.should_EQ_.call(null,(26),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),full_board)));
})()),speclj.core.it.call(null,"takes the center if no win or block available",(function (){var empty_board = cljs.core.range.call(null,(27));
var seq__6778_6818 = cljs.core.seq.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(13),null], null), null),empty_board));
var chunk__6779_6819 = null;
var count__6780_6820 = (0);
var i__6781_6821 = (0);
while(true){
if((i__6781_6821 < count__6780_6820)){
var x_6822 = cljs.core._nth.call(null,chunk__6779_6819,i__6781_6821);
speclj.core.should_EQ_.call(null,(13),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6822], null),empty_board))));


var G__6823 = seq__6778_6818;
var G__6824 = chunk__6779_6819;
var G__6825 = count__6780_6820;
var G__6826 = (i__6781_6821 + (1));
seq__6778_6818 = G__6823;
chunk__6779_6819 = G__6824;
count__6780_6820 = G__6825;
i__6781_6821 = G__6826;
continue;
} else {
var temp__5804__auto___6827 = cljs.core.seq.call(null,seq__6778_6818);
if(temp__5804__auto___6827){
var seq__6778_6828__$1 = temp__5804__auto___6827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6778_6828__$1)){
var c__5525__auto___6829 = cljs.core.chunk_first.call(null,seq__6778_6828__$1);
var G__6830 = cljs.core.chunk_rest.call(null,seq__6778_6828__$1);
var G__6831 = c__5525__auto___6829;
var G__6832 = cljs.core.count.call(null,c__5525__auto___6829);
var G__6833 = (0);
seq__6778_6818 = G__6830;
chunk__6779_6819 = G__6831;
count__6780_6820 = G__6832;
i__6781_6821 = G__6833;
continue;
} else {
var x_6834 = cljs.core.first.call(null,seq__6778_6828__$1);
speclj.core.should_EQ_.call(null,(13),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6834], null),empty_board))));


var G__6835 = cljs.core.next.call(null,seq__6778_6828__$1);
var G__6836 = null;
var G__6837 = (0);
var G__6838 = (0);
seq__6778_6818 = G__6835;
chunk__6779_6819 = G__6836;
count__6780_6820 = G__6837;
i__6781_6821 = G__6838;
continue;
}
} else {
}
}
break;
}

return speclj.core.should_EQ_.call(null,(13),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),empty_board)));
})()),speclj.core.it.call(null,"makes a random move if no win, block, or center available",(function (){var rand_nth_orig_val__6782 = cljs.core.rand_nth;
var rand_nth_temp_val__6783 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"rand-nth","rand-nth",1426715838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),cljs.core.first], null));
(cljs.core.rand_nth = rand_nth_temp_val__6783);

try{var board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),cljs.core.range.call(null,(27)));
return speclj.core.should_EQ_.call(null,(0),tic_tac_toe.moves.hardc.pick_hard_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.hardc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),board)));
}finally {(cljs.core.rand_nth = rand_nth_orig_val__6782);
}})()))));

//# sourceMappingURL=hardc_spec.js.map
