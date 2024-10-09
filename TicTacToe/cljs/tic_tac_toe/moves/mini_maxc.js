// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.mini_maxc');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.corec');
tic_tac_toe.moves.mini_maxc.min_max_move = (function tic_tac_toe$moves$mini_maxc$min_max_move(var_args){
var G__6663 = arguments.length;
switch (G__6663) {
case 3:
return tic_tac_toe.moves.mini_maxc.min_max_move.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return tic_tac_toe.moves.mini_maxc.min_max_move.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.moves.mini_maxc.min_max_move.cljs$core$IFn$_invoke$arity$3 = (function (board,maximizer_QMARK_,depth){
if(cljs.core.truth_(maximizer_QMARK_)){
return tic_tac_toe.moves.mini_maxc.min_max_move.call(null,board,maximizer_QMARK_,depth,tic_tac_toe.boardc.get_available_moves.call(null,board),(-100));
} else {
return tic_tac_toe.moves.mini_maxc.min_max_move.call(null,board,maximizer_QMARK_,depth,tic_tac_toe.boardc.get_available_moves.call(null,board),(100));
}
}));

(tic_tac_toe.moves.mini_maxc.min_max_move.cljs$core$IFn$_invoke$arity$5 = (function (board,maximizer_QMARK_,depth,moves,best_score){
while(true){
if(cljs.core.empty_QMARK_.call(null,moves)){
return best_score;
} else {
var move = cljs.core.first.call(null,moves);
var score = tic_tac_toe.moves.mini_maxc.mini_max.call(null,tic_tac_toe.boardc.update_board.call(null,move,board),cljs.core.not.call(null,maximizer_QMARK_),(depth + (1)));
if(cljs.core.truth_(maximizer_QMARK_)){
var G__6673 = board;
var G__6674 = maximizer_QMARK_;
var G__6675 = depth;
var G__6676 = cljs.core.rest.call(null,moves);
var G__6677 = (function (){var x__5087__auto__ = best_score;
var y__5088__auto__ = score;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
board = G__6673;
maximizer_QMARK_ = G__6674;
depth = G__6675;
moves = G__6676;
best_score = G__6677;
continue;
} else {
var G__6678 = board;
var G__6679 = maximizer_QMARK_;
var G__6680 = depth;
var G__6681 = cljs.core.rest.call(null,moves);
var G__6682 = (function (){var x__5090__auto__ = best_score;
var y__5091__auto__ = score;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
board = G__6678;
maximizer_QMARK_ = G__6679;
depth = G__6680;
moves = G__6681;
best_score = G__6682;
continue;
}
}
break;
}
}));

(tic_tac_toe.moves.mini_maxc.min_max_move.cljs$lang$maxFixedArity = 5);

tic_tac_toe.moves.mini_maxc.min_max_move = cljs.core.memoize.call(null,tic_tac_toe.moves.mini_maxc.min_max_move);
tic_tac_toe.moves.mini_maxc.score_game = (function tic_tac_toe$moves$mini_maxc$score_game(board,maximizer_QMARK_,depth){
var player = tic_tac_toe.boardc.get_active_player.call(null,board);
if(cljs.core.truth_(tic_tac_toe.boardc.win_QMARK_.call(null,player,board))){
if(cljs.core.truth_(maximizer_QMARK_)){
return ((1000) - depth);
} else {
return ((-1000) + depth);
}
} else {
if(cljs.core.truth_(tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.corec.switch_player.call(null,player),board))){
if(cljs.core.truth_(maximizer_QMARK_)){
return ((-1000) + depth);
} else {
return ((1000) - depth);
}
} else {
return (0);

}
}
});
tic_tac_toe.moves.mini_maxc.mini_max = (function tic_tac_toe$moves$mini_maxc$mini_max(board,maximizer_QMARK_,depth){
if(cljs.core.truth_((function (){var or__5002__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,board);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (depth > (6));
}
})())){
return tic_tac_toe.moves.mini_maxc.score_game.call(null,board,maximizer_QMARK_,depth);
} else {
return tic_tac_toe.moves.mini_maxc.min_max_move.call(null,board,maximizer_QMARK_,depth);
}
});
tic_tac_toe.moves.mini_maxc.mini_max = cljs.core.memoize.call(null,tic_tac_toe.moves.mini_maxc.mini_max);
tic_tac_toe.moves.mini_maxc.get_default_move = (function tic_tac_toe$moves$mini_maxc$get_default_move(moves){
var default_pairs = new cljs.core.PersistentArrayMap(null, 8, [(5),(0),(6),(3),(9),(12),(10),(15),(0),(5),(3),(6),(12),(9),(15),(10)], null);
var filter_fn = (function (p__6693){
var vec__6694 = p__6693;
var k = cljs.core.nth.call(null,vec__6694,(0),null);
var v = cljs.core.nth.call(null,vec__6694,(1),null);
var and__5000__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),moves);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([v]),moves));
} else {
return and__5000__auto__;
}
});
var default_move = cljs.core.first.call(null,cljs.core.filter.call(null,filter_fn,default_pairs));
if(cljs.core.truth_(default_move)){
return cljs.core.first.call(null,default_move);
} else {
return cljs.core.first.call(null,moves);
}
});
tic_tac_toe.moves.mini_maxc.mini_max_move = (function tic_tac_toe$moves$mini_maxc$mini_max_move(p__6702){
var map__6703 = p__6702;
var map__6703__$1 = cljs.core.__destructure_map.call(null,map__6703);
var board = cljs.core.get.call(null,map__6703__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var moves = tic_tac_toe.boardc.get_available_moves.call(null,board);
var move_boards = cljs.core.map.call(null,(function (p1__6698_SHARP_){
return tic_tac_toe.boardc.update_board.call(null,p1__6698_SHARP_,board);
}),moves);
var move_scores = cljs.core.map.call(null,(function (p1__6699_SHARP_){
return tic_tac_toe.moves.mini_maxc.mini_max.call(null,p1__6699_SHARP_,false,(0));
}),move_boards);
var move_score_map = cljs.core.zipmap.call(null,move_scores,moves);
return move_score_map.call(null,cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core._GT_,cljs.core.keys.call(null,move_score_map))));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.moves !== 'undefined') && (typeof tic_tac_toe.moves.mini_maxc !== 'undefined') && (typeof tic_tac_toe.moves.mini_maxc.get_best_move !== 'undefined')){
} else {
tic_tac_toe.moves.mini_maxc.get_best_move = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.moves.mini-maxc","get-best-move"),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.moves.mini_maxc.get_best_move,new cljs.core.Keyword(null,"3x3","3x3",570362544),(function (state){
return tic_tac_toe.moves.mini_maxc.mini_max_move.call(null,state);
}));
cljs.core._add_method.call(null,tic_tac_toe.moves.mini_maxc.get_best_move,new cljs.core.Keyword(null,"4x4","4x4",121507723),(function (state){
var map__6714 = state;
var map__6714__$1 = cljs.core.__destructure_map.call(null,map__6714);
var board = cljs.core.get.call(null,map__6714__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var moves = tic_tac_toe.boardc.get_available_moves.call(null,board);
if((cljs.core.count.call(null,moves) > (12))){
return tic_tac_toe.moves.mini_maxc.get_default_move.call(null,moves);
} else {
return tic_tac_toe.moves.mini_maxc.mini_max_move.call(null,state);
}
}));

//# sourceMappingURL=mini_maxc.js.map
