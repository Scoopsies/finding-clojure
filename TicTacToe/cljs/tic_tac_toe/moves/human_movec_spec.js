// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.human_movec_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.moves.human_movec');
speclj.core.describe.call(null,"human-move",speclj.core.with_stubs.call(null),speclj.core.context.call(null,"get-player-move",speclj.core.it.call(null,"returns a decrease integer of user input number",speclj.core.should_EQ_.call(null,(0),tic_tac_toe.moves.human_movec_spec.with_in_str.call(null,"1",tic_tac_toe.moves.human_movec.get_human_move.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null)))),speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.human_movec_spec.with_in_str.call(null,"3",tic_tac_toe.moves.human_movec.get_human_move.call(null,cljs.core.range.call(null,(0),(9)))))),speclj.core.it.call(null,"not a valid move followed by valid gives decrease integer of valid",(function (){var println_orig_val__6754 = cljs.core.println;
var println_temp_val__6755 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"println","println",1920840330));
(cljs.core.println = println_temp_val__6755);

try{return speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.human_movec_spec.with_in_str.call(null,"33\n3",tic_tac_toe.moves.human_movec.get_human_move.call(null,cljs.core.range.call(null,(0),(9)))));
}finally {(cljs.core.println = println_orig_val__6754);
}})())),speclj.core.context.call(null,"print-valid-move-error",speclj.core.it.call(null,"returns an error message",speclj.core.should_EQ_.call(null,"Ham Sandwich is not a valid move\nPlease enter a valid move.\n\n",(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6758_6768 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6759_6769 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6760_6770 = true;
var _STAR_print_fn_STAR__temp_val__6761_6771 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6760_6770);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6761_6771);

try{tic_tac_toe.moves.human_movec.print_valid_move_error.call(null,"Ham Sandwich");
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6759_6769);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6758_6768);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()))));

//# sourceMappingURL=human_movec_spec.js.map
