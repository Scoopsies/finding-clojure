// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.corec_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.moves.corec');
goog.require('tic_tac_toe.spec_helperc');
tic_tac_toe.moves.corec_spec.map_add = (function tic_tac_toe$moves$corec_spec$map_add(n,coll){
return cljs.core.map.call(null,(function (p1__6786_SHARP_){
return (((9) * n) + p1__6786_SHARP_);
}),coll);
});
tic_tac_toe.moves.corec_spec.take_win_plane_QMARK_ = (function tic_tac_toe$moves$corec_spec$take_win_plane_QMARK_(n){
var board = cljs.core.range.call(null,(27));
var test = (function (result,played_spots){
var seq__6798 = cljs.core.seq.call(null,played_spots);
var chunk__6799 = null;
var count__6800 = (0);
var i__6801 = (0);
while(true){
if((i__6801 < count__6800)){
var x = cljs.core._nth.call(null,chunk__6799,i__6801);
speclj.core.should_EQ_.call(null,result,tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board)));


var G__6843 = seq__6798;
var G__6844 = chunk__6799;
var G__6845 = count__6800;
var G__6846 = (i__6801 + (1));
seq__6798 = G__6843;
chunk__6799 = G__6844;
count__6800 = G__6845;
i__6801 = G__6846;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6798);
if(temp__5804__auto__){
var seq__6798__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6798__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6798__$1);
var G__6847 = cljs.core.chunk_rest.call(null,seq__6798__$1);
var G__6848 = c__5525__auto__;
var G__6849 = cljs.core.count.call(null,c__5525__auto__);
var G__6850 = (0);
seq__6798 = G__6847;
chunk__6799 = G__6848;
count__6800 = G__6849;
i__6801 = G__6850;
continue;
} else {
var x = cljs.core.first.call(null,seq__6798__$1);
speclj.core.should_EQ_.call(null,result,tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board)));


var G__6851 = cljs.core.next.call(null,seq__6798__$1);
var G__6852 = null;
var G__6853 = (0);
var G__6854 = (0);
seq__6798 = G__6851;
chunk__6799 = G__6852;
count__6800 = G__6853;
i__6801 = G__6854;
continue;
}
} else {
return null;
}
}
break;
}
});
test.call(null,(((9) * n) + (0)),cljs.core.map.call(null,(function (p1__6789_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6789_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null)], null)));

test.call(null,(((9) * n) + (1)),cljs.core.map.call(null,(function (p1__6790_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6790_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null)], null)));

test.call(null,(((9) * n) + (2)),cljs.core.map.call(null,(function (p1__6791_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6791_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(8)], null)], null)));

test.call(null,(((9) * n) + (3)),cljs.core.map.call(null,(function (p1__6792_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6792_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null)], null)));

test.call(null,(((9) * n) + (4)),cljs.core.map.call(null,(function (p1__6793_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6793_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null)], null)));

test.call(null,(((9) * n) + (5)),cljs.core.map.call(null,(function (p1__6794_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6794_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null)));

test.call(null,(((9) * n) + (6)),cljs.core.map.call(null,(function (p1__6795_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6795_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null)], null)));

test.call(null,(((9) * n) + (7)),cljs.core.map.call(null,(function (p1__6796_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6796_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(8)], null)], null)));

return test.call(null,(((9) * n) + (8)),cljs.core.map.call(null,(function (p1__6797_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__6797_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null)], null)));
});
speclj.core.describe.call(null,"moves-core",speclj.core.context.call(null,"take-block",speclj.core.it.call(null,"tests",speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.corec.take_block.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O",(4),(5),"O",(7),"X"], null))))),speclj.core.context.call(null,"take-block",speclj.core.it.call(null,"returns index of blocking move",speclj.core.should_EQ_.call(null,(2),tic_tac_toe.moves.corec.take_block.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(2),"X","X",(5),(6),(7),(8)], null))))),speclj.core.context.call(null,"take-win",speclj.core.with_stubs.call(null),speclj.core.redefs_around.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.boardc.get_active_player,speclj.core.stub.call(null,new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"X"], null))], null)),speclj.core.context.call(null,"3x3",speclj.core.it.call(null,"takes any presented win",(function (){var board = cljs.core.range.call(null,(9));
var test = (function (result,played_spots){
var seq__6839 = cljs.core.seq.call(null,played_spots);
var chunk__6840 = null;
var count__6841 = (0);
var i__6842 = (0);
while(true){
if((i__6842 < count__6841)){
var x = cljs.core._nth.call(null,chunk__6840,i__6842);
speclj.core.should_EQ_.call(null,result,tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board)));


var G__6859 = seq__6839;
var G__6860 = chunk__6840;
var G__6861 = count__6841;
var G__6862 = (i__6842 + (1));
seq__6839 = G__6859;
chunk__6840 = G__6860;
count__6841 = G__6861;
i__6842 = G__6862;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6839);
if(temp__5804__auto__){
var seq__6839__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6839__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6839__$1);
var G__6863 = cljs.core.chunk_rest.call(null,seq__6839__$1);
var G__6864 = c__5525__auto__;
var G__6865 = cljs.core.count.call(null,c__5525__auto__);
var G__6866 = (0);
seq__6839 = G__6863;
chunk__6840 = G__6864;
count__6841 = G__6865;
i__6842 = G__6866;
continue;
} else {
var x = cljs.core.first.call(null,seq__6839__$1);
speclj.core.should_EQ_.call(null,result,tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board)));


var G__6867 = cljs.core.next.call(null,seq__6839__$1);
var G__6868 = null;
var G__6869 = (0);
var G__6870 = (0);
seq__6839 = G__6867;
chunk__6840 = G__6868;
count__6841 = G__6869;
i__6842 = G__6870;
continue;
}
} else {
return null;
}
}
break;
}
});
test.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null)], null));

test.call(null,(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null)], null));

test.call(null,(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(8)], null)], null));

test.call(null,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null)], null));

test.call(null,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null)], null));

test.call(null,(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null));

test.call(null,(6),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null)], null));

test.call(null,(7),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(8)], null)], null));

return test.call(null,(8),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null)], null));
})())),speclj.core.context.call(null,"4x4",speclj.core.it.call(null,"takes any presented win",(function (){var board = cljs.core.range.call(null,(16));
var test = (function (result,played_spots){
var seq__6855 = cljs.core.seq.call(null,played_spots);
var chunk__6856 = null;
var count__6857 = (0);
var i__6858 = (0);
while(true){
if((i__6858 < count__6857)){
var x = cljs.core._nth.call(null,chunk__6856,i__6858);
speclj.core.should_EQ_.call(null,result,tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board)));


var G__6871 = seq__6855;
var G__6872 = chunk__6856;
var G__6873 = count__6857;
var G__6874 = (i__6858 + (1));
seq__6855 = G__6871;
chunk__6856 = G__6872;
count__6857 = G__6873;
i__6858 = G__6874;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6855);
if(temp__5804__auto__){
var seq__6855__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6855__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6855__$1);
var G__6875 = cljs.core.chunk_rest.call(null,seq__6855__$1);
var G__6876 = c__5525__auto__;
var G__6877 = cljs.core.count.call(null,c__5525__auto__);
var G__6878 = (0);
seq__6855 = G__6875;
chunk__6856 = G__6876;
count__6857 = G__6877;
i__6858 = G__6878;
continue;
} else {
var x = cljs.core.first.call(null,seq__6855__$1);
speclj.core.should_EQ_.call(null,result,tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board)));


var G__6879 = cljs.core.next.call(null,seq__6855__$1);
var G__6880 = null;
var G__6881 = (0);
var G__6882 = (0);
seq__6855 = G__6879;
chunk__6856 = G__6880;
count__6857 = G__6881;
i__6858 = G__6882;
continue;
}
} else {
return null;
}
}
break;
}
});
test.call(null,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(8),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(10),(15)], null)], null));

test.call(null,(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(9),(13)], null)], null));

test.call(null,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(10),(14)], null)], null));

test.call(null,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(9),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(11),(15)], null)], null));

test.call(null,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6),(7)], null)], null));

test.call(null,(5),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(9),(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6),(7)], null)], null));

test.call(null,(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(10),(14)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(7)], null)], null));

test.call(null,(7),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(11),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null)], null));

test.call(null,(8),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11)], null)], null));

test.call(null,(9),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(10),(11)], null)], null));

test.call(null,(10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6),(14)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9),(11)], null)], null));

test.call(null,(11),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(7),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9),(10)], null)], null));

test.call(null,(12),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6),(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(14),(15)], null)], null));

test.call(null,(13),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(14),(15)], null)], null));

test.call(null,(14),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(13),(15)], null)], null));

return test.call(null,(15),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(7),(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(13),(14)], null)], null));
})())),speclj.core.context.call(null,"3x3x3",speclj.core.context.call(null,"facing forwards",speclj.core.it.call(null,"takes any presented win on plane 0",tic_tac_toe.moves.corec_spec.take_win_plane_QMARK_.call(null,(0))),speclj.core.it.call(null,"takes any presented win on plane 1",tic_tac_toe.moves.corec_spec.take_win_plane_QMARK_.call(null,(1))),speclj.core.it.call(null,"takes any presented win on plane 2",tic_tac_toe.moves.corec_spec.take_win_plane_QMARK_.call(null,(2)))),speclj.core.context.call(null,"facing sideways",speclj.core.it.call(null,"takes a row win from side view of cube",speclj.core.should_EQ_.call(null,(21),tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(12)], null),cljs.core.range.call(null,(27)))))),speclj.core.it.call(null,"takes a diagonal win from side view of cube",speclj.core.should_EQ_.call(null,(25),tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(13)], null),cljs.core.range.call(null,(27))))))),speclj.core.context.call(null,"facing top",speclj.core.it.call(null,"takes a diagonal win from top view of cube",speclj.core.should_EQ_.call(null,(20),tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),cljs.core.range.call(null,(27)))))),speclj.core.it.call(null,"takes across cube diagonal win from top view of cube",speclj.core.should_EQ_.call(null,(20),tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null),cljs.core.range.call(null,(27))))))))),speclj.core.context.call(null,"get-move-params",speclj.core.it.call(null,"returns params for X on x's turn",speclj.core.should_EQ_.call(null,new cljs.core.Keyword(null,"human","human",-772334390),tic_tac_toe.moves.corec.get_move_param.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),"X",new cljs.core.Keyword(null,"human","human",-772334390)], null)))),speclj.core.it.call(null,"returns params for O on o's turn",speclj.core.should_EQ_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191),tic_tac_toe.moves.corec.get_move_param.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.range.call(null,(9))),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),"O",new cljs.core.Keyword(null,"hard","hard",2068420191)], null))))));

//# sourceMappingURL=corec_spec.js.map
