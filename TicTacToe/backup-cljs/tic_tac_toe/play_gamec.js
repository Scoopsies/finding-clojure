// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.play_gamec');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.data.data_ioc');
goog.require('tic_tac_toe.printablesc');
goog.require('tic_tac_toe.moves.corec');
goog.require('tic_tac_toe.moves.easyc');
goog.require('tic_tac_toe.moves.mediumc');
goog.require('tic_tac_toe.moves.hardc');
goog.require('tic_tac_toe.moves.human_movec');
goog.require('tic_tac_toe.moves.replayc');
tic_tac_toe.play_gamec.get_play_again = (function tic_tac_toe$play_gamec$get_play_again(state,selection){
if(cljs.core._EQ_.call(null,selection,"1")){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_x_printables,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false], null);
} else {
if(cljs.core._EQ_.call(null,selection,"2")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"end-game?","end-game?",-146020529),true,new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["See you next time!"], null)], null);
} else {
return state;

}
}
});
tic_tac_toe.play_gamec.assoc_move = (function tic_tac_toe$play_gamec$assoc_move(state,move){
var x_move = state.call(null,"X");
if(cljs.core.truth_(x_move)){
return cljs.core.assoc.call(null,state,"O",move,new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_board_size_menu.call(null,state));
} else {
return cljs.core.assoc.call(null,state,"X",move,new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_o_printables);
}
});
tic_tac_toe.play_gamec.get_move_fns = (function tic_tac_toe$play_gamec$get_move_fns(state,selection){
if(cljs.core._EQ_.call(null,selection,"1")){
return tic_tac_toe.play_gamec.assoc_move.call(null,state,new cljs.core.Keyword(null,"human","human",-772334390));
} else {
if(cljs.core._EQ_.call(null,selection,"2")){
return tic_tac_toe.play_gamec.assoc_move.call(null,state,new cljs.core.Keyword(null,"easy","easy",315769928));
} else {
if(cljs.core._EQ_.call(null,selection,"3")){
return tic_tac_toe.play_gamec.assoc_move.call(null,state,new cljs.core.Keyword(null,"medium","medium",-1864319384));
} else {
if(cljs.core._EQ_.call(null,selection,"4")){
return tic_tac_toe.play_gamec.assoc_move.call(null,state,new cljs.core.Keyword(null,"hard","hard",2068420191));
} else {
return state;

}
}
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.play_gamec !== 'undefined') && (typeof tic_tac_toe.play_gamec.associate_board !== 'undefined')){
} else {
tic_tac_toe.play_gamec.associate_board = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.play-gamec","associate-board"),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.play_gamec.associate_board,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state,selection){
if(cljs.core._EQ_.call(null,selection,"1")){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9)));
} else {
if(cljs.core._EQ_.call(null,selection,"2")){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(16)));
} else {
if(cljs.core._EQ_.call(null,selection,"3")){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(27)));
} else {
return state;

}
}
}
}));
cljs.core._add_method.call(null,tic_tac_toe.play_gamec.associate_board,new cljs.core.Keyword(null,"gui","gui",604532813),(function (state,selection){
if(cljs.core._EQ_.call(null,selection,"1")){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9)));
} else {
if(cljs.core._EQ_.call(null,selection,"2")){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(16)));
} else {
return state;

}
}
}));
tic_tac_toe.play_gamec.get_board = (function tic_tac_toe$play_gamec$get_board(state,selection){
var updated_state = tic_tac_toe.play_gamec.associate_board.call(null,state,selection);
if(cljs.core._EQ_.call(null,updated_state,state)){
return state;
} else {
return cljs.core.assoc.call(null,updated_state,new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(updated_state)));
}
});
tic_tac_toe.play_gamec.update_move_order = (function tic_tac_toe$play_gamec$update_move_order(p__11377,selection){
var map__11378 = p__11377;
var map__11378__$1 = cljs.core.__destructure_map.call(null,map__11378);
var move_order = cljs.core.get.call(null,map__11378__$1,new cljs.core.Keyword(null,"move-order","move-order",-792510441));
if(cljs.core.truth_(selection)){
return cljs.core.vec.call(null,cljs.core.conj.call(null,move_order,selection));
} else {
return move_order;
}
});
tic_tac_toe.play_gamec.__GT_make_move_state = (function tic_tac_toe$play_gamec$__GT_make_move_state(state,selection){
var move_order = tic_tac_toe.play_gamec.update_move_order.call(null,state,selection);
var updated_board = tic_tac_toe.boardc.update_board.call(null,selection,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state));
var replay_moves = new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(tic_tac_toe.boardc.game_over_QMARK_.call(null,updated_board))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),updated_board,new cljs.core.Keyword(null,"move-order","move-order",-792510441),move_order,new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_game_over_printable.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),updated_board], null)),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true);
} else {
if(cljs.core.truth_(replay_moves)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),updated_board,new cljs.core.Keyword(null,"move-order","move-order",-792510441),move_order,new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,updated_board),new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210),cljs.core.rest.call(null,replay_moves));
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),updated_board,new cljs.core.Keyword(null,"move-order","move-order",-792510441),move_order,new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.get_move_printables.call(null,updated_board));

}
}
});
tic_tac_toe.play_gamec.make_move = (function tic_tac_toe$play_gamec$make_move(state,selection){
var updated_state = tic_tac_toe.play_gamec.__GT_make_move_state.call(null,state,selection);
if(cljs.core.truth_(new cljs.core.Keyword(null,"replay?","replay?",1482446367).cljs$core$IFn$_invoke$arity$1(state))){
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(updated_state))){
tic_tac_toe.data.data_ioc.update_db.call(null,updated_state);
} else {
tic_tac_toe.data.data_ioc.add_db.call(null,updated_state);

}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"replay?","replay?",1482446367).cljs$core$IFn$_invoke$arity$1(state))){
return updated_state;
} else {
return tic_tac_toe.data.data_ioc.pull_last_db.call(null);
}
});
tic_tac_toe.play_gamec.x_or_o_not_set_QMARK_ = (function tic_tac_toe$play_gamec$x_or_o_not_set_QMARK_(state){
return ((cljs.core.not.call(null,state.call(null,"X"))) || (cljs.core.not.call(null,state.call(null,"O"))));
});
tic_tac_toe.play_gamec.board_not_set_QMARK_ = (function tic_tac_toe$play_gamec$board_not_set_QMARK_(state){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state));
});
tic_tac_toe.play_gamec.handle_continue = (function tic_tac_toe$play_gamec$handle_continue(state,selection){
if(cljs.core._EQ_.call(null,selection,"1")){
return cljs.core.assoc.call(null,new cljs.core.Keyword(null,"last-game","last-game",1547493148).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(state));
} else {
if(cljs.core._EQ_.call(null,selection,"2")){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"last-game","last-game",1547493148)),new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_x_printables);
} else {
return state;

}
}
});
tic_tac_toe.play_gamec.get_next_state = (function tic_tac_toe$play_gamec$get_next_state(state,selection){
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-game","last-game",1547493148).cljs$core$IFn$_invoke$arity$1(state))){
return tic_tac_toe.play_gamec.handle_continue.call(null,state,selection);
} else {
if(tic_tac_toe.play_gamec.x_or_o_not_set_QMARK_.call(null,state)){
return tic_tac_toe.play_gamec.get_move_fns.call(null,state,selection);
} else {
if(tic_tac_toe.play_gamec.board_not_set_QMARK_.call(null,state)){
return tic_tac_toe.play_gamec.get_board.call(null,state,selection);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"game-over?","game-over?",432859304).cljs$core$IFn$_invoke$arity$1(state))){
return tic_tac_toe.play_gamec.get_play_again.call(null,state,selection);
} else {
return tic_tac_toe.play_gamec.make_move.call(null,state,selection);

}
}
}
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.play_gamec !== 'undefined') && (typeof tic_tac_toe.play_gamec.loop_game_play !== 'undefined')){
} else {
tic_tac_toe.play_gamec.loop_game_play = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.play-gamec","loop-game-play"),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tic_tac_toe.play_gamec.get_selection = (function tic_tac_toe$play_gamec$get_selection(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"end-game?","end-game?",-146020529).cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"game-over?","game-over?",432859304).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__5000__auto__;
}
})())){
return tic_tac_toe.moves.corec.pick_move.call(null,state);
} else {
return tic_tac_toe.play_gamec.read_line.call(null);

}
}
});
cljs.core._add_method.call(null,tic_tac_toe.play_gamec.loop_game_play,new cljs.core.Keyword(null,"tui","tui",-1217057309),(function (state){
while(true){
tic_tac_toe.printablesc.print_formatted.call(null,new cljs.core.Keyword(null,"printables","printables",1718670765).cljs$core$IFn$_invoke$arity$1(state));

var selection = tic_tac_toe.play_gamec.get_selection.call(null,state);
var updated_state = tic_tac_toe.play_gamec.get_next_state.call(null,state,selection);
if(cljs.core.truth_(new cljs.core.Keyword(null,"end-game?","end-game?",-146020529).cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
var G__11379 = updated_state;
state = G__11379;
continue;
}
break;
}
}));

//# sourceMappingURL=play_gamec.js.map
