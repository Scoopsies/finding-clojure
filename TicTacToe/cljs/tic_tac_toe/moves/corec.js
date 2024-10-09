// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.corec');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.corec');
tic_tac_toe.moves.corec.take_win = (function tic_tac_toe$moves$corec$take_win(var_args){
var G__6723 = arguments.length;
switch (G__6723) {
case 1:
return tic_tac_toe.moves.corec.take_win.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return tic_tac_toe.moves.corec.take_win.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.moves.corec.take_win.cljs$core$IFn$_invoke$arity$1 = (function (board){
return tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.boardc.get_active_player.call(null,board),board,tic_tac_toe.boardc.get_available_moves.call(null,board));
}));

(tic_tac_toe.moves.corec.take_win.cljs$core$IFn$_invoke$arity$3 = (function (player_token,board,moves){
while(true){
var move = cljs.core.first.call(null,moves);
var updated_board = tic_tac_toe.boardc.update_board.call(null,player_token,move,board);
var winning_move_QMARK_ = (function (){var or__5002__auto__ = cljs.core.empty_QMARK_.call(null,moves);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return tic_tac_toe.boardc.win_QMARK_.call(null,player_token,updated_board);
}
})();
if(cljs.core.truth_(winning_move_QMARK_)){
return move;
} else {
var G__6725 = player_token;
var G__6726 = board;
var G__6727 = cljs.core.rest.call(null,moves);
player_token = G__6725;
board = G__6726;
moves = G__6727;
continue;
}
break;
}
}));

(tic_tac_toe.moves.corec.take_win.cljs$lang$maxFixedArity = 3);

tic_tac_toe.moves.corec.take_block = (function tic_tac_toe$moves$corec$take_block(board){
var active_player = tic_tac_toe.boardc.get_active_player.call(null,board);
var player_token = tic_tac_toe.corec.switch_player.call(null,active_player);
var moves = tic_tac_toe.boardc.get_available_moves.call(null,board);
return tic_tac_toe.moves.corec.take_win.call(null,player_token,board,moves);
});
tic_tac_toe.moves.corec.get_move_param = (function tic_tac_toe$moves$corec$get_move_param(state){
var active_player = tic_tac_toe.boardc.get_active_player.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state));
return state.call(null,active_player);
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.moves !== 'undefined') && (typeof tic_tac_toe.moves.corec !== 'undefined') && (typeof tic_tac_toe.moves.corec.pick_move !== 'undefined')){
} else {
tic_tac_toe.moves.corec.pick_move = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.moves.corec","pick-move"),tic_tac_toe.moves.corec.get_move_param,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}

//# sourceMappingURL=corec.js.map
