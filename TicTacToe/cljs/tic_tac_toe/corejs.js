// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.corejs');
goog.require('cljs.core');
goog.require('tic_tac_toe.play_gamec');
tic_tac_toe.corejs.update_state = (function tic_tac_toe$corejs$update_state(selection,state){
return cljs.core.reset_BANG_.call(null,state,tic_tac_toe.play_gamec.get_next_state.call(null,cljs.core.deref.call(null,state),selection));
});

//# sourceMappingURL=corejs.js.map
