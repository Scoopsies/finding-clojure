// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.boardc');
goog.require('cljs.core');
goog.require('tic_tac_toe.corec');
tic_tac_toe.boardc.get_row_size = (function tic_tac_toe$boardc$get_row_size(board){
return (Math.sqrt(cljs.core.count.call(null,board)) | (0));
});
tic_tac_toe.boardc.__GT_grid = (function tic_tac_toe$boardc$__GT_grid(board){
return cljs.core.partition.call(null,tic_tac_toe.boardc.get_row_size.call(null,board),board);
});
tic_tac_toe.boardc.get_active_player = (function tic_tac_toe$boardc$get_active_player(board){
var amount_x = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,"X"),board));
var amount_o = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,"O"),board));
if((amount_x <= amount_o)){
return "X";
} else {
return "O";
}
});
tic_tac_toe.boardc.update_board = (function tic_tac_toe$boardc$update_board(var_args){
var G__6600 = arguments.length;
switch (G__6600) {
case 2:
return tic_tac_toe.boardc.update_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tic_tac_toe.boardc.update_board.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.boardc.update_board.cljs$core$IFn$_invoke$arity$2 = (function (selection,board){
return cljs.core.map.call(null,(function (p1__6597_SHARP_){
if(cljs.core._EQ_.call(null,selection,p1__6597_SHARP_)){
return tic_tac_toe.boardc.get_active_player.call(null,board);
} else {
return p1__6597_SHARP_;
}
}),board);
}));

(tic_tac_toe.boardc.update_board.cljs$core$IFn$_invoke$arity$3 = (function (player_token,selection,board){
return cljs.core.map.call(null,(function (p1__6598_SHARP_){
if(cljs.core._EQ_.call(null,selection,p1__6598_SHARP_)){
return player_token;
} else {
return p1__6598_SHARP_;
}
}),board);
}));

(tic_tac_toe.boardc.update_board.cljs$lang$maxFixedArity = 3);

tic_tac_toe.boardc.get_available_moves = (function tic_tac_toe$boardc$get_available_moves(board){
return cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.number_QMARK_),board);
});
tic_tac_toe.boardc.rotate_plane_y = (function tic_tac_toe$boardc$rotate_plane_y(board){
var row_size = tic_tac_toe.boardc.get_row_size.call(null,board);
var get_nth_row = (function (n,board__$1){
return cljs.core.map.call(null,(function (p1__6626_SHARP_){
return cljs.core.nth.call(null,p1__6626_SHARP_,n);
}),cljs.core.map.call(null,cljs.core.reverse,cljs.core.partition.call(null,row_size,board__$1)));
});
return cljs.core.mapcat.call(null,(function (p1__6627_SHARP_){
return get_nth_row.call(null,p1__6627_SHARP_,board);
}),cljs.core.range.call(null,row_size));
});
tic_tac_toe.boardc.rotate_cube_y = (function tic_tac_toe$boardc$rotate_cube_y(board){
return cljs.core.mapcat.call(null,tic_tac_toe.boardc.rotate_plane_y,cljs.core.partition.call(null,(9),board));
});
tic_tac_toe.boardc.rotate_plane_x = (function tic_tac_toe$boardc$rotate_plane_x(board,plane){
var get_nth_rotated_row = (function (n,board__$1,plane__$1){
return cljs.core.map.call(null,(function (p1__6628_SHARP_){
return cljs.core.nth.call(null,p1__6628_SHARP_,(((3) * n) + plane__$1));
}),cljs.core.partition.call(null,(9),board__$1));
});
return cljs.core.reverse.call(null,cljs.core.mapcat.call(null,(function (p1__6629_SHARP_){
return get_nth_rotated_row.call(null,p1__6629_SHARP_,board,plane);
}),cljs.core.range.call(null,(3))));
});
tic_tac_toe.boardc.rotate_cube_x = (function tic_tac_toe$boardc$rotate_cube_x(board){
return cljs.core.reverse.call(null,cljs.core.mapcat.call(null,(function (p1__6630_SHARP_){
return tic_tac_toe.boardc.rotate_plane_x.call(null,board,p1__6630_SHARP_);
}),cljs.core.range.call(null,(3))));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.boardc !== 'undefined') && (typeof tic_tac_toe.boardc.match_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.boardc.match_QMARK_ = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.boardc","match?"),(function (_,board,___$1){
return cljs.core.count.call(null,board);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.boardc.match_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (player_token,_,positions){
return cljs.core.some.call(null,(function (p1__6631_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.repeat.call(null,(3),player_token),p1__6631_SHARP_);
}),positions);
}));
cljs.core._add_method.call(null,tic_tac_toe.boardc.match_QMARK_,(16),(function (player_token,_,positions){
return cljs.core.some.call(null,(function (p1__6632_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.repeat.call(null,(4),player_token),p1__6632_SHARP_);
}),positions);
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.boardc !== 'undefined') && (typeof tic_tac_toe.boardc.get_rows !== 'undefined')){
} else {
tic_tac_toe.boardc.get_rows = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.boardc","get-rows"),cljs.core.count,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.boardc.get_rows,new cljs.core.Keyword(null,"default","default",-1987822328),(function (board){
return cljs.core.partition.call(null,tic_tac_toe.boardc.get_row_size.call(null,board),board);
}));
cljs.core._add_method.call(null,tic_tac_toe.boardc.get_rows,(27),(function (board){
return cljs.core.mapcat.call(null,tic_tac_toe.boardc.get_rows,cljs.core.partition.call(null,(9),board));
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.boardc !== 'undefined') && (typeof tic_tac_toe.boardc.get_columns !== 'undefined')){
} else {
tic_tac_toe.boardc.get_columns = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.boardc","get-columns"),cljs.core.count,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.boardc.get_columns,new cljs.core.Keyword(null,"default","default",-1987822328),(function (board){
return tic_tac_toe.boardc.get_rows.call(null,tic_tac_toe.boardc.rotate_plane_y.call(null,board));
}));
cljs.core._add_method.call(null,tic_tac_toe.boardc.get_columns,(27),(function (board){
return tic_tac_toe.boardc.get_rows.call(null,tic_tac_toe.boardc.rotate_cube_y.call(null,board));
}));
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.boardc !== 'undefined') && (typeof tic_tac_toe.boardc.get_diagonals !== 'undefined')){
} else {
tic_tac_toe.boardc.get_diagonals = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.boardc","get-diagonals"),(function (board){
return cljs.core.count.call(null,board);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.boardc.get_diagonals,(9),(function (board){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (p1__6633_SHARP_){
return cljs.core.nth.call(null,board,p1__6633_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null)),cljs.core.map.call(null,(function (p1__6634_SHARP_){
return cljs.core.nth.call(null,board,p1__6634_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null))], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.boardc.get_diagonals,(16),(function (board){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (p1__6637_SHARP_){
return cljs.core.nth.call(null,board,p1__6637_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(10),(15)], null)),cljs.core.map.call(null,(function (p1__6638_SHARP_){
return cljs.core.nth.call(null,board,p1__6638_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6),(9),(12)], null))], null);
}));
tic_tac_toe.boardc.get_nth_plane = (function tic_tac_toe$boardc$get_nth_plane(n,board){
return cljs.core.nth.call(null,cljs.core.partition.call(null,(9),board),n);
});
cljs.core._add_method.call(null,tic_tac_toe.boardc.get_diagonals,(27),(function (board){
var x_plane_diagonals = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (p1__6640_SHARP_){
return cljs.core.nth.call(null,board,p1__6640_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(13),(26)], null)),cljs.core.map.call(null,(function (p1__6641_SHARP_){
return cljs.core.nth.call(null,board,p1__6641_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(13),(18)], null)),cljs.core.map.call(null,(function (p1__6642_SHARP_){
return cljs.core.nth.call(null,board,p1__6642_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(13),(24)], null)),cljs.core.map.call(null,(function (p1__6643_SHARP_){
return cljs.core.nth.call(null,board,p1__6643_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13),(20)], null))], null);
return cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p1__6644_SHARP_){
return tic_tac_toe.boardc.get_diagonals.call(null,tic_tac_toe.boardc.get_nth_plane.call(null,p1__6644_SHARP_,board));
}),cljs.core.range.call(null,(3))),x_plane_diagonals);
}));
tic_tac_toe.boardc.row_match_QMARK_ = (function tic_tac_toe$boardc$row_match_QMARK_(player_token,board){
return tic_tac_toe.boardc.match_QMARK_.call(null,player_token,board,tic_tac_toe.boardc.get_rows.call(null,board));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.boardc !== 'undefined') && (typeof tic_tac_toe.boardc.column_match_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.boardc.column_match_QMARK_ = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.boardc","column-match?"),(function (_,board){
return cljs.core.count.call(null,board);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.boardc.column_match_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (player_token,board){
return tic_tac_toe.boardc.match_QMARK_.call(null,player_token,board,tic_tac_toe.boardc.get_columns.call(null,board));
}));
cljs.core._add_method.call(null,tic_tac_toe.boardc.column_match_QMARK_,(27),(function (player_token,board){
var parted_board = cljs.core.partition.call(null,(9),board);
return cljs.core.some.call(null,(function (p1__6648_SHARP_){
return tic_tac_toe.boardc.column_match_QMARK_.call(null,player_token,p1__6648_SHARP_);
}),parted_board);
}));
tic_tac_toe.boardc.diagonal_match_QMARK_ = (function tic_tac_toe$boardc$diagonal_match_QMARK_(player_token,board){
return tic_tac_toe.boardc.match_QMARK_.call(null,player_token,board,tic_tac_toe.boardc.get_diagonals.call(null,board));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.boardc !== 'undefined') && (typeof tic_tac_toe.boardc.win_QMARK_ !== 'undefined')){
} else {
tic_tac_toe.boardc.win_QMARK_ = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.boardc","win?"),(function (_,board){
return cljs.core.count.call(null,board);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.boardc.win_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (player_token,board){
var or__5002__auto__ = tic_tac_toe.boardc.column_match_QMARK_.call(null,player_token,board);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = tic_tac_toe.boardc.diagonal_match_QMARK_.call(null,player_token,board);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return tic_tac_toe.boardc.row_match_QMARK_.call(null,player_token,board);
}
}
}));
cljs.core._add_method.call(null,tic_tac_toe.boardc.win_QMARK_,(27),(function (player_token,board){
var side_view = tic_tac_toe.boardc.rotate_cube_x.call(null,board);
var top_view = tic_tac_toe.boardc.rotate_cube_x.call(null,tic_tac_toe.boardc.rotate_cube_y.call(null,board));
var check_for = (function (func){
return cljs.core.some.call(null,(function (p1__6650_SHARP_){
return func.call(null,player_token,p1__6650_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [board,side_view,top_view], null));
});
var or__5002__auto__ = check_for.call(null,tic_tac_toe.boardc.row_match_QMARK_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = check_for.call(null,tic_tac_toe.boardc.diagonal_match_QMARK_);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return check_for.call(null,tic_tac_toe.boardc.column_match_QMARK_);
}
}
}));
tic_tac_toe.boardc.no_moves_QMARK_ = (function tic_tac_toe$boardc$no_moves_QMARK_(board){
return cljs.core.empty_QMARK_.call(null,tic_tac_toe.boardc.get_available_moves.call(null,board));
});
tic_tac_toe.boardc.draw_QMARK_ = (function tic_tac_toe$boardc$draw_QMARK_(board){
return ((cljs.core.not.call(null,tic_tac_toe.boardc.win_QMARK_.call(null,"X",board))) && (((cljs.core.not.call(null,tic_tac_toe.boardc.win_QMARK_.call(null,"O",board))) && (tic_tac_toe.boardc.no_moves_QMARK_.call(null,board)))));
});
tic_tac_toe.boardc.game_over_QMARK_ = (function tic_tac_toe$boardc$game_over_QMARK_(board){
var or__5002__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,"X",board);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = tic_tac_toe.boardc.win_QMARK_.call(null,"O",board);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return tic_tac_toe.boardc.no_moves_QMARK_.call(null,board);
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.boardc !== 'undefined') && (typeof tic_tac_toe.boardc.create_board !== 'undefined')){
} else {
tic_tac_toe.boardc.create_board = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.boardc","create-board"),(function (size){
return size;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.boardc.create_board,new cljs.core.Keyword(null,"3x3","3x3",570362544),(function (_){
return cljs.core.range.call(null,(9));
}));
cljs.core._add_method.call(null,tic_tac_toe.boardc.create_board,new cljs.core.Keyword(null,"4x4","4x4",121507723),(function (_){
return cljs.core.range.call(null,(16));
}));
cljs.core._add_method.call(null,tic_tac_toe.boardc.create_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),(function (_){
return cljs.core.range.call(null,(27));
}));
tic_tac_toe.boardc.get_middle = (function tic_tac_toe$boardc$get_middle(board){
var board_size = cljs.core.count.call(null,board);
if(cljs.core.even_QMARK_.call(null,board_size)){
return null;
} else {
return (Math.floor((board_size / (2))) | (0));
}
});
tic_tac_toe.boardc.middle_available_QMARK_ = (function tic_tac_toe$boardc$middle_available_QMARK_(board){
var middle = tic_tac_toe.boardc.get_middle.call(null,board);
var available_moves = tic_tac_toe.boardc.get_available_moves.call(null,board);
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([middle]),available_moves);
});
tic_tac_toe.boardc.win_next_turn_QMARK_ = (function tic_tac_toe$boardc$win_next_turn_QMARK_(var_args){
var G__6653 = arguments.length;
switch (G__6653) {
case 1:
return tic_tac_toe.boardc.win_next_turn_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tic_tac_toe.boardc.win_next_turn_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.boardc.win_next_turn_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (board){
return tic_tac_toe.boardc.win_next_turn_QMARK_.call(null,tic_tac_toe.boardc.get_active_player.call(null,board),board);
}));

(tic_tac_toe.boardc.win_next_turn_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (player_token,board){
var moves = tic_tac_toe.boardc.get_available_moves.call(null,board);
var next_move_wins = cljs.core.filter.call(null,(function (p1__6651_SHARP_){
return tic_tac_toe.boardc.win_QMARK_.call(null,player_token,tic_tac_toe.boardc.update_board.call(null,player_token,p1__6651_SHARP_,board));
}),moves);
return cljs.core.not_empty.call(null,next_move_wins);
}));

(tic_tac_toe.boardc.win_next_turn_QMARK_.cljs$lang$maxFixedArity = 2);

tic_tac_toe.boardc.lose_next_turn_QMARK_ = (function tic_tac_toe$boardc$lose_next_turn_QMARK_(board){
var active_player = tic_tac_toe.boardc.get_active_player.call(null,board);
return tic_tac_toe.boardc.win_next_turn_QMARK_.call(null,tic_tac_toe.corec.switch_player.call(null,active_player),board);
});
tic_tac_toe.boardc.get_random_available = (function tic_tac_toe$boardc$get_random_available(board){
return cljs.core.rand_nth.call(null,tic_tac_toe.boardc.get_available_moves.call(null,board));
});

//# sourceMappingURL=boardc.js.map
