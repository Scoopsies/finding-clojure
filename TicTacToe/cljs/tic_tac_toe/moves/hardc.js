// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.hardc');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.moves.corec');
goog.require('tic_tac_toe.moves.mini_maxc');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.moves !== 'undefined') && (typeof tic_tac_toe.moves.hardc !== 'undefined') && (typeof tic_tac_toe.moves.hardc.pick_hard_move !== 'undefined')){
} else {
tic_tac_toe.moves.hardc.pick_hard_move = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.moves.hardc","pick-hard-move"),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.moves.hardc.pick_hard_move,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state){
return tic_tac_toe.moves.mini_maxc.get_best_move.call(null,state);
}));
cljs.core._add_method.call(null,tic_tac_toe.moves.hardc.pick_hard_move,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),(function (p__6735){
var map__6736 = p__6735;
var map__6736__$1 = cljs.core.__destructure_map.call(null,map__6736);
var board = cljs.core.get.call(null,map__6736__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
if(cljs.core.truth_(tic_tac_toe.boardc.win_next_turn_QMARK_.call(null,board))){
return tic_tac_toe.moves.corec.take_win.call(null,board);
} else {
if(cljs.core.truth_(tic_tac_toe.boardc.lose_next_turn_QMARK_.call(null,board))){
return tic_tac_toe.moves.corec.take_block.call(null,board);
} else {
if(cljs.core.truth_(tic_tac_toe.boardc.middle_available_QMARK_.call(null,board))){
return tic_tac_toe.boardc.get_middle.call(null,board);
} else {
return tic_tac_toe.boardc.get_random_available.call(null,board);

}
}
}
}));
cljs.core._add_method.call(null,tic_tac_toe.moves.corec.pick_move,new cljs.core.Keyword(null,"hard","hard",2068420191),(function (state){
return tic_tac_toe.moves.hardc.pick_hard_move.call(null,state);
}));

//# sourceMappingURL=hardc.js.map
