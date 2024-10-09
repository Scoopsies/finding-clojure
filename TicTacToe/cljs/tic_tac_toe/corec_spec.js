// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.corec_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.corec');
speclj.core.describe.call(null,"Corec",speclj.core.context.call(null,"switch-player",speclj.core.it.call(null,"switches X to O",speclj.core.should_EQ_.call(null,"O",tic_tac_toe.corec.switch_player.call(null,"X"))),speclj.core.it.call(null,"switches O to X",speclj.core.should_EQ_.call(null,"X",tic_tac_toe.corec.switch_player.call(null,"O")))));

//# sourceMappingURL=corec_spec.js.map
