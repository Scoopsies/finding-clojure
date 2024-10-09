// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.mini_maxc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.mini_maxc');
speclj.core.describe.call(null,"mini-max",speclj.core.describe.call(null,"score-moves",speclj.core.context.call(null,"min-max-move",speclj.core.it.call(null,"scores a win for maximizer",speclj.core.should_EQ_.call(null,(999),tic_tac_toe.moves.mini_maxc.min_max_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X","O","X","O","O","X",(8)], null),true,(0)))),speclj.core.it.call(null,"scores a win for minimizer",speclj.core.should_EQ_.call(null,(-999),tic_tac_toe.moves.mini_maxc.min_max_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X","O","X","O","O","X",(8)], null),false,(0)))),speclj.core.it.call(null,"scores a Draw for maximizer",speclj.core.should_EQ_.call(null,(0),tic_tac_toe.moves.mini_maxc.min_max_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"O","X","X","X","O","O","X","O"], null),true,(0)))),speclj.core.it.call(null,"scores a Draw for minimizer",speclj.core.should_EQ_.call(null,(0),tic_tac_toe.moves.mini_maxc.min_max_move.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"O","X","X","X","O","O","X","O"], null),false,(0)))))));

//# sourceMappingURL=mini_maxc_spec.js.map
