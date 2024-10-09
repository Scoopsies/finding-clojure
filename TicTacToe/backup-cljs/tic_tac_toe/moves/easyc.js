// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.easyc');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.moves.corec');
cljs.core._add_method.call(null,tic_tac_toe.moves.corec.pick_move,new cljs.core.Keyword(null,"easy","easy",315769928),(function (p__6774){
var map__6775 = p__6774;
var map__6775__$1 = cljs.core.__destructure_map.call(null,map__6775);
var board = cljs.core.get.call(null,map__6775__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return tic_tac_toe.boardc.get_random_available.call(null,board);
}));

//# sourceMappingURL=easyc.js.map
