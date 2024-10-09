// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.printablesc');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
goog.require('clojure.string');
tic_tac_toe.printablesc.title = "  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n  \u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\n     \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551            \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551            \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557\n     \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551            \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551            \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D\n     \u2588\u2588\u2551   \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557       \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557       \u2588\u2588\u2551   \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n     \u255A\u2550\u255D   \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D       \u255A\u2550\u255D   \u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D       \u255A\u2550\u255D    \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D";
tic_tac_toe.printablesc.print_formatted = (function tic_tac_toe$printablesc$print_formatted(printables){
var seq__6667_6683 = cljs.core.seq.call(null,printables);
var chunk__6668_6684 = null;
var count__6669_6685 = (0);
var i__6670_6686 = (0);
while(true){
if((i__6670_6686 < count__6669_6685)){
var lines_6688 = cljs.core._nth.call(null,chunk__6668_6684,i__6670_6686);
cljs.core.println.call(null,lines_6688);


var G__6689 = seq__6667_6683;
var G__6690 = chunk__6668_6684;
var G__6691 = count__6669_6685;
var G__6692 = (i__6670_6686 + (1));
seq__6667_6683 = G__6689;
chunk__6668_6684 = G__6690;
count__6669_6685 = G__6691;
i__6670_6686 = G__6692;
continue;
} else {
var temp__5804__auto___6697 = cljs.core.seq.call(null,seq__6667_6683);
if(temp__5804__auto___6697){
var seq__6667_6700__$1 = temp__5804__auto___6697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6667_6700__$1)){
var c__5525__auto___6704 = cljs.core.chunk_first.call(null,seq__6667_6700__$1);
var G__6705 = cljs.core.chunk_rest.call(null,seq__6667_6700__$1);
var G__6706 = c__5525__auto___6704;
var G__6707 = cljs.core.count.call(null,c__5525__auto___6704);
var G__6708 = (0);
seq__6667_6683 = G__6705;
chunk__6668_6684 = G__6706;
count__6669_6685 = G__6707;
i__6670_6686 = G__6708;
continue;
} else {
var lines_6709 = cljs.core.first.call(null,seq__6667_6700__$1);
cljs.core.println.call(null,lines_6709);


var G__6710 = cljs.core.next.call(null,seq__6667_6700__$1);
var G__6711 = null;
var G__6712 = (0);
var G__6713 = (0);
seq__6667_6683 = G__6710;
chunk__6668_6684 = G__6711;
count__6669_6685 = G__6712;
i__6670_6686 = G__6713;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null,"");
});
tic_tac_toe.printablesc.single_digit_num_QMARK_ = (function tic_tac_toe$printablesc$single_digit_num_QMARK_(n){
return ((typeof n === 'number') && ((n > (8))));
});
tic_tac_toe.printablesc.space_row_values = (function tic_tac_toe$printablesc$space_row_values(rows){
return cljs.core.map.call(null,(function (p1__6687_SHARP_){
if(tic_tac_toe.printablesc.single_digit_num_QMARK_.call(null,p1__6687_SHARP_)){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__6687_SHARP_ + (1)))," "].join('');
} else {
if(typeof p1__6687_SHARP_ === 'number'){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__6687_SHARP_ + (1))),"  "].join('');
} else {
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6687_SHARP_),"  "].join('');

}
}
}),rows);
});
tic_tac_toe.printablesc.__GT_rows = (function tic_tac_toe$printablesc$__GT_rows(board){
return cljs.core.partition.call(null,tic_tac_toe.boardc.get_row_size.call(null,board),board);
});
tic_tac_toe.printablesc.space_rows = (function tic_tac_toe$printablesc$space_rows(rows){
return cljs.core.map.call(null,tic_tac_toe.printablesc.space_row_values,rows);
});
tic_tac_toe.printablesc.stringify_rows = (function tic_tac_toe$printablesc$stringify_rows(spaced_rows){
return cljs.core.map.call(null,clojure.string.join,cljs.core.map.call(null,(function (p1__6701_SHARP_){
return cljs.core.interpose.call(null,"|",p1__6701_SHARP_);
}),spaced_rows));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.printablesc !== 'undefined') && (typeof tic_tac_toe.printablesc.get_board_printables !== 'undefined')){
} else {
tic_tac_toe.printablesc.get_board_printables = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.printablesc","get-board-printables"),cljs.core.count,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.printablesc.get_board_printables,new cljs.core.Keyword(null,"default","default",-1987822328),(function (board){
return tic_tac_toe.printablesc.stringify_rows.call(null,tic_tac_toe.printablesc.space_rows.call(null,tic_tac_toe.printablesc.__GT_rows.call(null,board)));
}));
cljs.core._add_method.call(null,tic_tac_toe.printablesc.get_board_printables,(27),(function (board){
var formatted_rows = cljs.core.map.call(null,tic_tac_toe.printablesc.get_board_printables,cljs.core.partition.call(null,(9),board));
var iter__5480__auto__ = (function tic_tac_toe$printablesc$iter__6716(s__6717){
return (new cljs.core.LazySeq(null,(function (){
var s__6717__$1 = s__6717;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__6717__$1);
if(temp__5804__auto__){
var s__6717__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6717__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__6717__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__6719 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__6718 = (0);
while(true){
if((i__6718 < size__5479__auto__)){
var row = cljs.core._nth.call(null,c__5478__auto__,i__6718);
cljs.core.chunk_append.call(null,b__6719,cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (i__6718,row,c__5478__auto__,size__5479__auto__,b__6719,s__6717__$2,temp__5804__auto__,formatted_rows){
return (function (p1__6715_SHARP_){
return cljs.core.nth.call(null,p1__6715_SHARP_,row);
});})(i__6718,row,c__5478__auto__,size__5479__auto__,b__6719,s__6717__$2,temp__5804__auto__,formatted_rows))
,formatted_rows)));

var G__6730 = (i__6718 + (1));
i__6718 = G__6730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6719),tic_tac_toe$printablesc$iter__6716.call(null,cljs.core.chunk_rest.call(null,s__6717__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6719),null);
}
} else {
var row = cljs.core.first.call(null,s__6717__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (row,s__6717__$2,temp__5804__auto__,formatted_rows){
return (function (p1__6715_SHARP_){
return cljs.core.nth.call(null,p1__6715_SHARP_,row);
});})(row,s__6717__$2,temp__5804__auto__,formatted_rows))
,formatted_rows)),tic_tac_toe$printablesc$iter__6716.call(null,cljs.core.rest.call(null,s__6717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(3)));
}));
tic_tac_toe.printablesc.player_x_printables = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who will play as X?","1. Human","2. Computer Easy","3. Computer Medium","4. Computer Hard"], null);
tic_tac_toe.printablesc.player_o_printables = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who will play as O?","1. Human","2. Computer Easy","3. Computer Medium","4. Computer Hard"], null);
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.printablesc !== 'undefined') && (typeof tic_tac_toe.printablesc.get_board_size_menu !== 'undefined')){
} else {
tic_tac_toe.printablesc.get_board_size_menu = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.printablesc","get-board-size-menu"),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.printablesc.get_board_size_menu,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What size board?","1. 3x3","2. 4x4","3. 3x3x3 (3-D)"], null);
}));
cljs.core._add_method.call(null,tic_tac_toe.printablesc.get_board_size_menu,new cljs.core.Keyword(null,"gui","gui",604532813),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["What size board?","1. 3x3","2. 4x4"], null);
}));
tic_tac_toe.printablesc.get_winner_printable = (function tic_tac_toe$printablesc$get_winner_printable(p__6728){
var map__6729 = p__6728;
var map__6729__$1 = cljs.core.__destructure_map.call(null,map__6729);
var board = cljs.core.get.call(null,map__6729__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
if(cljs.core.truth_(tic_tac_toe.boardc.win_QMARK_.call(null,"X",board))){
return "X wins!";
} else {
if(cljs.core.truth_(tic_tac_toe.boardc.win_QMARK_.call(null,"O",board))){
return "O wins!";
} else {
if(tic_tac_toe.boardc.no_moves_QMARK_.call(null,board)){
return "Draw";
} else {
return null;
}
}
}
});
tic_tac_toe.printablesc.get_game_over_printable = (function tic_tac_toe$printablesc$get_game_over_printable(state){
var win_message = tic_tac_toe.printablesc.get_winner_printable.call(null,state);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [win_message,"","Play Again?","1. Yes","2. No"], null);
});
tic_tac_toe.printablesc.continue_printables = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Continue last game?","1. Yes","2. No (new game)"], null);
tic_tac_toe.printablesc.get_move_printables = (function tic_tac_toe$printablesc$get_move_printables(board){
var printable_board = tic_tac_toe.printablesc.get_board_printables.call(null,board);
return cljs.core.conj.call(null,cljs.core.vec.call(null,printable_board),"",["Please pick a number 1-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,board)),"."].join(''));
});

//# sourceMappingURL=printablesc.js.map
