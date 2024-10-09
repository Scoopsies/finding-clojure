// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.human_movec');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.moves.corec');
tic_tac_toe.moves.human_movec.valid_move_QMARK_ = (function tic_tac_toe$moves$human_movec$valid_move_QMARK_(valid_moves,player_move){
return cljs.core.some.call(null,(function (p1__6739_SHARP_){
return cljs.core._EQ_.call(null,player_move,p1__6739_SHARP_);
}),valid_moves);
});
tic_tac_toe.moves.human_movec.print_valid_move_error = (function tic_tac_toe$moves$human_movec$print_valid_move_error(player_move){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player_move)," is not a valid move"].join(''));

cljs.core.println.call(null,"Please enter a valid move.");

return cljs.core.println.call(null,"");
});
tic_tac_toe.moves.human_movec.get_human_move = (function tic_tac_toe$moves$human_movec$get_human_move(board){
while(true){
var player_move = tic_tac_toe.moves.human_movec.read_line.call(null);
var valid_moves = cljs.core.map.call(null,((function (board,player_move){
return (function (p1__6740_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__6740_SHARP_ + (1)));
});})(board,player_move))
,tic_tac_toe.boardc.get_available_moves.call(null,board));
if(cljs.core.truth_(tic_tac_toe.moves.human_movec.valid_move_QMARK_.call(null,valid_moves,player_move))){
return (Integer.parseInt(player_move) - (1));
} else {
tic_tac_toe.moves.human_movec.print_valid_move_error.call(null,player_move);

var G__6743 = board;
board = G__6743;
continue;
}
break;
}
});
cljs.core._add_method.call(null,tic_tac_toe.moves.corec.pick_move,new cljs.core.Keyword(null,"human","human",-772334390),(function (state){
return tic_tac_toe.moves.human_movec.get_human_move.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state));
}));

//# sourceMappingURL=human_movec.js.map
