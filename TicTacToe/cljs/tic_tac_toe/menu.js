// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.menu');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.wire.util');
goog.require('tic_tac_toe.corejs');
tic_tac_toe.menu.render_menu = (function tic_tac_toe$menu$render_menu(state){
var vec__11909 = new cljs.core.Keyword(null,"printables","printables",1718670765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var seq__11910 = cljs.core.seq.call(null,vec__11909);
var first__11911 = cljs.core.first.call(null,seq__11910);
var seq__11910__$1 = cljs.core.next.call(null,seq__11910);
var title = first__11911;
var options = seq__11910__$1;
var printables = vec__11909;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#menu","div#menu",-295612754),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#-printable-0","h2#-printable-0",2109973138),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),c3kit.wire.util.with_react_keys.call(null,cljs.core.doall.call(null,(function (){var iter__5480__auto__ = (function tic_tac_toe$menu$render_menu_$_iter__11912(s__11913){
return (new cljs.core.LazySeq(null,(function (){
var s__11913__$1 = s__11913;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11913__$1);
if(temp__5804__auto__){
var s__11913__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11913__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__11913__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__11915 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__11914 = (0);
while(true){
if((i__11914 < size__5479__auto__)){
var n = cljs.core._nth.call(null,c__5478__auto__,i__11914);
cljs.core.chunk_append.call(null,b__11915,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["-select-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__11914,n,c__5478__auto__,size__5479__auto__,b__11915,s__11913__$2,temp__5804__auto__,vec__11909,seq__11910,first__11911,seq__11910__$1,title,options,printables){
return (function (){
return tic_tac_toe.corejs.update_state.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),state);
});})(i__11914,n,c__5478__auto__,size__5479__auto__,b__11915,s__11913__$2,temp__5804__auto__,vec__11909,seq__11910,first__11911,seq__11910__$1,title,options,printables))
], null),cljs.core.nth.call(null,printables,n)], null));

var G__11924 = (i__11914 + (1));
i__11914 = G__11924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11915),tic_tac_toe$menu$render_menu_$_iter__11912.call(null,cljs.core.chunk_rest.call(null,s__11913__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11915),null);
}
} else {
var n = cljs.core.first.call(null,s__11913__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["-select-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (n,s__11913__$2,temp__5804__auto__,vec__11909,seq__11910,first__11911,seq__11910__$1,title,options,printables){
return (function (){
return tic_tac_toe.corejs.update_state.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),state);
});})(n,s__11913__$2,temp__5804__auto__,vec__11909,seq__11910,first__11911,seq__11910__$1,title,options,printables))
], null),cljs.core.nth.call(null,printables,n)], null),tic_tac_toe$menu$render_menu_$_iter__11912.call(null,cljs.core.rest.call(null,s__11913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(1),(cljs.core.count.call(null,options) + (1))));
})()))], null)], null);
});
tic_tac_toe.menu.render_game_over = (function tic_tac_toe$menu$render_game_over(state){
var printables = new cljs.core.Keyword(null,"printables","printables",1718670765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#game-over","div#game-over",-350860148),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#winner","h2#winner",1486323389),cljs.core.first.call(null,printables)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4#play-again","h4#play-again",-524806000),"Play Again?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#-select-1","button#-select-1",675002916),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.corejs.update_state.call(null,"1",state);
})], null),"1. Yes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#-select-2","button#-select-2",-810282889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.corejs.update_state.call(null,"2",state);
})], null),"2. No"], null)], null);
});

//# sourceMappingURL=menu.js.map
