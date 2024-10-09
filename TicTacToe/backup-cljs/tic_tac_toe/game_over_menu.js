// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.game_over_menu');
goog.require('cljs.core');
goog.require('tic_tac_toe.corejs');
tic_tac_toe.game_over_menu.render_game_over = (function tic_tac_toe$game_over_menu$render_game_over(state){
var printables = new cljs.core.Keyword(null,"printables","printables",1718670765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#game-over","div#game-over",-350860148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#winner","h2#winner",1486323389),cljs.core.first.call(null,printables)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4#play-again","h4#play-again",-524806000),"Play Again?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#-select-1","button#-select-1",675002916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.corejs.update_state.call(null,"1",state);
})], null),"1. Yes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#-select-2","button#-select-2",-810282889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.corejs.update_state.call(null,"2",state);
})], null),"2. No"], null)], null);
});

//# sourceMappingURL=game_over_menu.js.map
