// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.replayc');
goog.require('cljs.core');
goog.require('tic_tac_toe.moves.corec');
tic_tac_toe.moves.replayc.thread_sleep = (function tic_tac_toe$moves$replayc$thread_sleep(){
return null;
});
tic_tac_toe.moves.replayc.get_replay_move = (function tic_tac_toe$moves$replayc$get_replay_move(p__6836){
var map__6837 = p__6836;
var map__6837__$1 = cljs.core.__destructure_map.call(null,map__6837);
var replay_moves = cljs.core.get.call(null,map__6837__$1,new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210));
tic_tac_toe.moves.replayc.thread_sleep.call(null);

return cljs.core.first.call(null,replay_moves);
});
cljs.core._add_method.call(null,tic_tac_toe.moves.corec.pick_move,new cljs.core.Keyword(null,"replay","replay",-681122389),(function (state){
return tic_tac_toe.moves.replayc.get_replay_move.call(null,state);
}));

//# sourceMappingURL=replayc.js.map
