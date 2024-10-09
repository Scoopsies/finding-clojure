// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.state_initializerc');
goog.require('cljs.core');
goog.require('tic_tac_toe.data.data_ioc');
goog.require('tic_tac_toe.printablesc');
goog.require('tic_tac_toe.boardc');
tic_tac_toe.state_initializerc.retrieve_game = (function tic_tac_toe$state_initializerc$retrieve_game(id){
return cljs.core.nth.call(null,tic_tac_toe.data.data_ioc.read_db.call(null),id);
});
tic_tac_toe.state_initializerc.initialize_replay = (function tic_tac_toe$state_initializerc$initialize_replay(id){
var map__7350 = tic_tac_toe.state_initializerc.retrieve_game.call(null,id);
var map__7350__$1 = cljs.core.__destructure_map.call(null,map__7350);
var board_size = cljs.core.get.call(null,map__7350__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
var ui = cljs.core.get.call(null,map__7350__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var move_order = cljs.core.get.call(null,map__7350__$1,new cljs.core.Keyword(null,"move-order","move-order",-792510441));
var new_board = tic_tac_toe.boardc.create_board.call(null,board_size);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"printables","printables",1718670765),new cljs.core.Keyword(null,"replay-moves","replay-moves",1560924210),new cljs.core.Keyword(null,"ui","ui",-469653645),"O",new cljs.core.Keyword(null,"move-order","move-order",-792510441),"X",new cljs.core.Keyword(null,"board","board",-1907017633)],[false,board_size,tic_tac_toe.printablesc.get_move_printables.call(null,new_board),move_order,ui,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"replay","replay",-681122389)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"replay","replay",-681122389)], null),new_board]);
});
tic_tac_toe.state_initializerc.unfinished_QMARK_ = (function tic_tac_toe$state_initializerc$unfinished_QMARK_(last_game){
return cljs.core.not.call(null,(function (){var or__5002__auto__ = cljs.core.not.call(null,last_game);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return tic_tac_toe.boardc.game_over_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(last_game));
}
})());
});
tic_tac_toe.state_initializerc.handle_last_game = (function tic_tac_toe$state_initializerc$handle_last_game(){
var last_game = tic_tac_toe.data.data_ioc.pull_last_db.call(null);
if(tic_tac_toe.state_initializerc.unfinished_QMARK_.call(null,last_game)){
return last_game;
} else {
return null;
}
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.state_initializerc !== 'undefined') && (typeof tic_tac_toe.state_initializerc.__GT_initial_state !== 'undefined')){
} else {
tic_tac_toe.state_initializerc.__GT_initial_state = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.state-initializerc","->initial-state"),new cljs.core.Keyword(null,"replay?","replay?",1482446367),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.state_initializerc.__GT_initial_state,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state){
var last_game = tic_tac_toe.state_initializerc.handle_last_game.call(null);
if(cljs.core.truth_(last_game)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.continue_printables,new cljs.core.Keyword(null,"last-game","last-game",1547493148),last_game,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false);
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_x_printables,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false);
}
}));
cljs.core._add_method.call(null,tic_tac_toe.state_initializerc.__GT_initial_state,true,(function (state){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state);
var state__$1 = cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.merge.call(null,tic_tac_toe.state_initializerc.initialize_replay.call(null,id),state__$1);
}));
tic_tac_toe.state_initializerc.print_menu = (function tic_tac_toe$state_initializerc$print_menu(){
var seq__7351 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Would you like to play in the terminal or the gui?","1. Terminal","2. Gui","3. Exit"], null));
var chunk__7352 = null;
var count__7353 = (0);
var i__7354 = (0);
while(true){
if((i__7354 < count__7353)){
var menu = cljs.core._nth.call(null,chunk__7352,i__7354);
cljs.core.println.call(null,menu);


var G__7355 = seq__7351;
var G__7356 = chunk__7352;
var G__7357 = count__7353;
var G__7358 = (i__7354 + (1));
seq__7351 = G__7355;
chunk__7352 = G__7356;
count__7353 = G__7357;
i__7354 = G__7358;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__7351);
if(temp__5804__auto__){
var seq__7351__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7351__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__7351__$1);
var G__7359 = cljs.core.chunk_rest.call(null,seq__7351__$1);
var G__7360 = c__5525__auto__;
var G__7361 = cljs.core.count.call(null,c__5525__auto__);
var G__7362 = (0);
seq__7351 = G__7359;
chunk__7352 = G__7360;
count__7353 = G__7361;
i__7354 = G__7362;
continue;
} else {
var menu = cljs.core.first.call(null,seq__7351__$1);
cljs.core.println.call(null,menu);


var G__7363 = cljs.core.next.call(null,seq__7351__$1);
var G__7364 = null;
var G__7365 = (0);
var G__7366 = (0);
seq__7351 = G__7363;
chunk__7352 = G__7364;
count__7353 = G__7365;
i__7354 = G__7366;
continue;
}
} else {
return null;
}
}
break;
}
});
tic_tac_toe.state_initializerc.get_ui = (function tic_tac_toe$state_initializerc$get_ui(){
while(true){
tic_tac_toe.state_initializerc.print_menu.call(null);

var selection = tic_tac_toe.state_initializerc.read_line.call(null);
if(cljs.core._EQ_.call(null,selection,"1")){
return "--tui";
} else {
if(cljs.core._EQ_.call(null,selection,"2")){
return "--gui";
} else {
if(cljs.core._EQ_.call(null,selection,"3")){
return cljs.core.println.call(null,"Exiting...");
} else {
continue;

}
}
}
break;
}
});
tic_tac_toe.state_initializerc.contains_ui_QMARK_ = (function tic_tac_toe$state_initializerc$contains_ui_QMARK_(args){
var or__5002__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["--tui",null], null), null),args);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["--gui",null], null), null),args);
}
});
tic_tac_toe.state_initializerc.parse_args = (function tic_tac_toe$state_initializerc$parse_args(var_args){
var G__7368 = arguments.length;
switch (G__7368) {
case 1:
return tic_tac_toe.state_initializerc.parse_args.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tic_tac_toe.state_initializerc.parse_args.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.state_initializerc.parse_args.cljs$core$IFn$_invoke$arity$1 = (function (args){
if(cljs.core.truth_(tic_tac_toe.state_initializerc.contains_ui_QMARK_.call(null,args))){
return tic_tac_toe.state_initializerc.parse_args.call(null,args,cljs.core.PersistentArrayMap.EMPTY);
} else {
return tic_tac_toe.state_initializerc.parse_args.call(null,cljs.core.conj.call(null,args,tic_tac_toe.state_initializerc.get_ui.call(null)),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(tic_tac_toe.state_initializerc.parse_args.cljs$core$IFn$_invoke$arity$2 = (function (args,state){
if(cljs.core.empty_QMARK_.call(null,args)){
return tic_tac_toe.state_initializerc.__GT_initial_state.call(null,state);
} else {
var flag = cljs.core.first.call(null,args);
if(cljs.core._EQ_.call(null,flag,"--tui")){
return tic_tac_toe.state_initializerc.parse_args.call(null,cljs.core.rest.call(null,args),cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"tui","tui",-1217057309)], null)));
} else {
if(cljs.core._EQ_.call(null,flag,"--gui")){
return tic_tac_toe.state_initializerc.parse_args.call(null,cljs.core.rest.call(null,args),cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gui","gui",604532813)], null)));
} else {
if(cljs.core._EQ_.call(null,flag,"--game")){
return tic_tac_toe.state_initializerc.parse_args.call(null,cljs.core.drop.call(null,(2),args),cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"replay?","replay?",1482446367),true,new cljs.core.Keyword(null,"id","id",-1388402092),Integer.parseInt(cljs.core.second.call(null,args))], null)));
} else {
if(cljs.core._EQ_.call(null,flag,"--edndb")){
cljs.core.reset_BANG_.call(null,tic_tac_toe.data.data_ioc.data_store,new cljs.core.Keyword(null,"edn","edn",1317840885));

return tic_tac_toe.state_initializerc.parse_args.call(null,cljs.core.rest.call(null,args),state);
} else {
if(cljs.core._EQ_.call(null,flag,"--sqldb")){
cljs.core.reset_BANG_.call(null,tic_tac_toe.data.data_ioc.data_store,new cljs.core.Keyword(null,"psql","psql",-591812834));

return tic_tac_toe.state_initializerc.parse_args.call(null,cljs.core.rest.call(null,args),state);
} else {
throw (new tic_tac_toe.state_initializerc.Exception([cljs.core.str.cljs$core$IFn$_invoke$arity$1(flag)," is not a valid flag."].join('')));

}
}
}
}
}
}
}));

(tic_tac_toe.state_initializerc.parse_args.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=state_initializerc.js.map
