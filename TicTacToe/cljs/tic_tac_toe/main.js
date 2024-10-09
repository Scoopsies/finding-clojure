// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('tic_tac_toe.printablesc');
goog.require('tic_tac_toe.menu');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.moves.easyc');
goog.require('tic_tac_toe.moves.mediumc');
goog.require('tic_tac_toe.moves.hardc');
goog.require('tic_tac_toe.moves.replayc');
tic_tac_toe.main.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"printables","printables",1718670765),tic_tac_toe.printablesc.player_x_printables], null));
tic_tac_toe.main.game_in_progress_QMARK_ = (function tic_tac_toe$main$game_in_progress_QMARK_(state){
var and__5000__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"game-over?","game-over?",432859304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
} else {
return and__5000__auto__;
}
});
tic_tac_toe.main.app = (function tic_tac_toe$main$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#content","div#content",-850771127),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tic-Tac-Toe"], null)], null),(cljs.core.truth_(tic_tac_toe.main.game_in_progress_QMARK_.call(null,tic_tac_toe.main.state))?tic_tac_toe.board.render_board.call(null,tic_tac_toe.main.state):(cljs.core.truth_(new cljs.core.Keyword(null,"game-over?","game-over?",432859304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state)))?tic_tac_toe.menu.render_game_over.call(null,tic_tac_toe.main.state):tic_tac_toe.menu.render_menu.call(null,tic_tac_toe.main.state)
))], null);
});
tic_tac_toe.main.main = (function tic_tac_toe$main$main(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null),c3kit.wire.js.element_by_id.call(null,"app"));
});
goog.exportSymbol('tic_tac_toe.main.main', tic_tac_toe.main.main);

//# sourceMappingURL=main.js.map
