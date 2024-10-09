// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.mediumc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.mediumc');
goog.require('tic_tac_toe.spec_helperc');
tic_tac_toe.moves.mediumc_spec.state3x3 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
tic_tac_toe.moves.mediumc_spec.state3x3x3 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)], null);
speclj.core.describe.call(null,"medium -move",speclj.core.context.call(null,"get-medium-move",speclj.core.context.call(null,"3x3",speclj.core.with_stubs.call(null),speclj.core.redefs_around.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth,speclj.core.stub.call(null,new cljs.core.Keyword(null,"rand-nth","rand-nth",1426715838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),cljs.core.first], null))], null)),speclj.core.it.call(null,"returns index of winning move",speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O","O",(5),(6),(7),(8)], null)))),speclj.core.should_EQ_.call(null,(5),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O","O",(5),"X",(7),(8)], null))))),speclj.core.it.call(null,"returns index of blocking move if winning move isn't available",speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O",(4),(5),"O",(7),"X"], null)))),speclj.core.should_EQ_.call(null,(5),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),"O","O",(5),(6),"X",(8)], null))))),speclj.core.it.call(null,"returns random available move if can't win or block",speclj.core.should_EQ_.call(null,(0),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))))),speclj.core.should_EQ_.call(null,(1),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),(2),(3),(4),(5),(6),(7),(8)], null)))))),speclj.core.context.call(null,"3x3x3",speclj.core.with_stubs.call(null),speclj.core.redefs_around.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth,speclj.core.stub.call(null,new cljs.core.Keyword(null,"rand-nth","rand-nth",1426715838),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),cljs.core.first], null))], null)),speclj.core.it.call(null,"takes center if available",speclj.core.should_EQ_.call(null,(13),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(27)))))),speclj.core.it.call(null,"takes block if presented",(function (){var board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.range.call(null,(27)));
return speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),board)));
})(),(function (){var board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(25)], null),cljs.core.range.call(null,(27)));
return speclj.core.should_EQ_.call(null,(26),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),board)));
})()),speclj.core.it.call(null,"randomizes move if center is taken and block isn't possible",(function (){var board = tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13)], null),cljs.core.range.call(null,(27)));
return speclj.core.should_EQ_.call(null,(0),tic_tac_toe.moves.mediumc.pick_medium_move.call(null,cljs.core.assoc.call(null,tic_tac_toe.moves.mediumc_spec.state3x3x3,new cljs.core.Keyword(null,"board","board",-1907017633),board)));
})()))));

//# sourceMappingURL=mediumc_spec.js.map