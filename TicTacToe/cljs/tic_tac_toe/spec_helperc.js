// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.spec_helperc');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.corec');
tic_tac_toe.spec_helperc.populate_board = (function tic_tac_toe$spec_helperc$populate_board(var_args){
var G__6666 = arguments.length;
switch (G__6666) {
case 3:
return tic_tac_toe.spec_helperc.populate_board.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return tic_tac_toe.spec_helperc.populate_board.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.spec_helperc.populate_board.cljs$core$IFn$_invoke$arity$3 = (function (player_token,positions,board){
return cljs.core.reduce.call(null,(function (p1__6662_SHARP_,p2__6660_SHARP_){
return tic_tac_toe.boardc.update_board.call(null,player_token,p2__6660_SHARP_,p1__6662_SHARP_);
}),board,positions);
}));

(tic_tac_toe.spec_helperc.populate_board.cljs$core$IFn$_invoke$arity$4 = (function (player_token,positions_1,positions_2,board){
var board__$1 = tic_tac_toe.spec_helperc.populate_board.call(null,player_token,positions_1,board);
var player_token__$1 = tic_tac_toe.corec.switch_player.call(null,player_token);
return tic_tac_toe.spec_helperc.populate_board.call(null,player_token__$1,positions_2,board__$1);
}));

(tic_tac_toe.spec_helperc.populate_board.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=spec_helperc.js.map
