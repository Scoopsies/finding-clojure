// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.board');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.wire.util');
goog.require('tic_tac_toe.corejs');
goog.require('tic_tac_toe.moves.corec');
tic_tac_toe.board.format_value = (function tic_tac_toe$board$format_value(board,n){
if(typeof cljs.core.nth.call(null,board,n) === 'number'){
return (cljs.core.nth.call(null,board,n) + (1));
} else {
return cljs.core.nth.call(null,board,n);
}
});
tic_tac_toe.board.human_turn_QMARK_ = (function tic_tac_toe$board$human_turn_QMARK_(state){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"human","human",-772334390),tic_tac_toe.moves.corec.get_move_param.call(null,cljs.core.deref.call(null,state)));
});
tic_tac_toe.board.computer_turn_QMARK_ = (function tic_tac_toe$board$computer_turn_QMARK_(state){
return (!(tic_tac_toe.board.human_turn_QMARK_.call(null,state)));
});
tic_tac_toe.board.clickable_QMARK_ = (function tic_tac_toe$board$clickable_QMARK_(state,board,n){
return ((tic_tac_toe.board.human_turn_QMARK_.call(null,state)) && (typeof cljs.core.nth.call(null,board,n) === 'number'));
});
tic_tac_toe.board.handle_click = (function tic_tac_toe$board$handle_click(state,n){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(tic_tac_toe.board.clickable_QMARK_.call(null,state,board,n)){
return tic_tac_toe.corejs.update_state.call(null,cljs.core.nth.call(null,board,n),state);
} else {
return null;
}
});
tic_tac_toe.board.take_computer_turn = (function tic_tac_toe$board$take_computer_turn(state){
return setTimeout(tic_tac_toe.corejs.update_state.call(null,tic_tac_toe.moves.corec.pick_move.call(null,cljs.core.deref.call(null,state)),state),(1000));
});
tic_tac_toe.board.render_board = (function tic_tac_toe$board$render_board(state){
var dref_state = cljs.core.deref.call(null,state);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(dref_state);
var board_size = cljs.core.name.call(null,new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(dref_state));
if(tic_tac_toe.board.computer_turn_QMARK_.call(null,state)){
tic_tac_toe.board.take_computer_turn.call(null,state);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"board",new cljs.core.Keyword(null,"class","class",-2030961996),["board",board_size].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),c3kit.wire.util.with_react_keys.call(null,cljs.core.doall.call(null,(function (){var iter__5480__auto__ = (function tic_tac_toe$board$render_board_$_iter__11642(s__11643){
return (new cljs.core.LazySeq(null,(function (){
var s__11643__$1 = s__11643;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11643__$1);
if(temp__5804__auto__){
var s__11643__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11643__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11643__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11645 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11644 = (0);
while(true){
if((i__11644 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__11644);
cljs.core.chunk_append.call(null,b__11645,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["-cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["cell",board_size].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__11644,n,c__5478__auto__,size__5479__auto__,b__11645,s__11643__$2,temp__5804__auto__,dref_state,board,board_size){
return (function (){
return tic_tac_toe.board.handle_click.call(null,state,n);
});})(i__11644,n,c__5478__auto__,size__5479__auto__,b__11645,s__11643__$2,temp__5804__auto__,dref_state,board,board_size))
], null),tic_tac_toe.board.format_value.call(null,board,n)], null));

var G__11646 = (i__11644 + (1));
i__11644 = G__11646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11645),tic_tac_toe$board$render_board_$_iter__11642.call(null,cljs.core.chunk_rest.call(null,s__11643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11645),null);
}
} else {
var n = cljs.core.first.call(null,s__11643__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["-cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),["cell",board_size].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (n,s__11643__$2,temp__5804__auto__,dref_state,board,board_size){
return (function (){
return tic_tac_toe.board.handle_click.call(null,state,n);
});})(n,s__11643__$2,temp__5804__auto__,dref_state,board,board_size))
], null),tic_tac_toe.board.format_value.call(null,board,n)], null),tic_tac_toe$board$render_board_$_iter__11642.call(null,cljs.core.rest.call(null,s__11643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
})()))], null)], null);
});

//# sourceMappingURL=board.js.map
