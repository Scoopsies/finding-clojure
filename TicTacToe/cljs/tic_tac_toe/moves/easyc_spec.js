// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.easyc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.moves.corec');
speclj.core.describe.call(null,"moves-easyc",speclj.core.with_stubs.call(null),speclj.core.it.call(null,"invokes board/get-random-available",(function (){var get_random_available_orig_val__6619 = tic_tac_toe.boardc.get_random_available;
var get_random_available_temp_val__6620 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"get-random","get-random",-709236220));
(tic_tac_toe.boardc.get_random_available = get_random_available_temp_val__6620);

try{tic_tac_toe.moves.corec.pick_move.call(null,new cljs.core.PersistentArrayMap(null, 2, ["X",new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9))], null));

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"get-random","get-random",-709236220));
}finally {(tic_tac_toe.boardc.get_random_available = get_random_available_orig_val__6619);
}})()));

//# sourceMappingURL=easyc_spec.js.map
