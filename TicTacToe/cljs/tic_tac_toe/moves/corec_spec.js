// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.moves.corec_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.moves.corec');
goog.require('tic_tac_toe.spec_helperc');
tic_tac_toe.moves.corec_spec.map_add = (function tic_tac_toe$moves$corec_spec$map_add(n,coll){
return cljs.core.map.call(null,(function (p1__9288_SHARP_){
return (((9) * n) + p1__9288_SHARP_);
}),coll);
});
tic_tac_toe.moves.corec_spec.take_win_plane_QMARK_ = (function tic_tac_toe$moves$corec_spec$take_win_plane_QMARK_(n){
var board = cljs.core.range.call(null,(27));
var test = (function (result,played_spots){
var seq__9300 = cljs.core.seq.call(null,played_spots);
var chunk__9301 = null;
var count__9302 = (0);
var i__9303 = (0);
while(true){
if((i__9303 < count__9302)){
var x = cljs.core._nth.call(null,chunk__9301,i__9303);
var expected__8074__auto___9304 = result;
var actual__8075__auto___9305 = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board));
if(cljs.core._EQ_.call(null,expected__8074__auto___9304,actual__8075__auto___9305)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9304;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9305;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9308 = seq__9300;
var G__9309 = chunk__9301;
var G__9310 = count__9302;
var G__9311 = (i__9303 + (1));
seq__9300 = G__9308;
chunk__9301 = G__9309;
count__9302 = G__9310;
i__9303 = G__9311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9300);
if(temp__5804__auto__){
var seq__9300__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9300__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9300__$1);
var G__9312 = cljs.core.chunk_rest.call(null,seq__9300__$1);
var G__9313 = c__5525__auto__;
var G__9314 = cljs.core.count.call(null,c__5525__auto__);
var G__9315 = (0);
seq__9300 = G__9312;
chunk__9301 = G__9313;
count__9302 = G__9314;
i__9303 = G__9315;
continue;
} else {
var x = cljs.core.first.call(null,seq__9300__$1);
var expected__8074__auto___9320 = result;
var actual__8075__auto___9321 = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board));
if(cljs.core._EQ_.call(null,expected__8074__auto___9320,actual__8075__auto___9321)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9320;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9321;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9324 = cljs.core.next.call(null,seq__9300__$1);
var G__9325 = null;
var G__9326 = (0);
var G__9327 = (0);
seq__9300 = G__9324;
chunk__9301 = G__9325;
count__9302 = G__9326;
i__9303 = G__9327;
continue;
}
} else {
return null;
}
}
break;
}
});
test.call(null,(((9) * n) + (0)),cljs.core.map.call(null,(function (p1__9291_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9291_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(6)], null)], null)));

test.call(null,(((9) * n) + (1)),cljs.core.map.call(null,(function (p1__9292_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9292_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null)], null)));

test.call(null,(((9) * n) + (2)),cljs.core.map.call(null,(function (p1__9293_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9293_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(8)], null)], null)));

test.call(null,(((9) * n) + (3)),cljs.core.map.call(null,(function (p1__9294_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9294_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5)], null)], null)));

test.call(null,(((9) * n) + (4)),cljs.core.map.call(null,(function (p1__9295_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9295_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null)], null)));

test.call(null,(((9) * n) + (5)),cljs.core.map.call(null,(function (p1__9296_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9296_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null)));

test.call(null,(((9) * n) + (6)),cljs.core.map.call(null,(function (p1__9297_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9297_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8)], null)], null)));

test.call(null,(((9) * n) + (7)),cljs.core.map.call(null,(function (p1__9298_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9298_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(8)], null)], null)));

return test.call(null,(((9) * n) + (8)),cljs.core.map.call(null,(function (p1__9299_SHARP_){
return tic_tac_toe.moves.corec_spec.map_add.call(null,n,p1__9299_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null)], null)));
});
var description__7937__auto___9670 = speclj.components.new_description.call(null,"moves-core",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9306_9671 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9307_9672 = description__7937__auto___9670;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9307_9672);

try{var seq__9316_9673 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"take-block",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9498_9677 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9499_9678 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9499_9678);

try{var seq__9500_9679 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"tests",((function (_STAR_parent_description_STAR__orig_val__9498_9677,_STAR_parent_description_STAR__temp_val__9499_9678,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var expected__8074__auto__ = (2);
var actual__8075__auto__ = tic_tac_toe.moves.corec.take_block.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(2),"O",(4),(5),"O",(7),"X"], null));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9498_9677,_STAR_parent_description_STAR__temp_val__9499_9678,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false)],null)));
var chunk__9501_9680 = null;
var count__9502_9681 = (0);
var i__9503_9682 = (0);
while(true){
if((i__9503_9682 < count__9502_9681)){
var component__7938__auto___9683 = cljs.core._nth.call(null,chunk__9501_9680,i__9503_9682);
speclj.components.install.call(null,component__7938__auto___9683,description__7937__auto____$1);


var G__9684 = seq__9500_9679;
var G__9685 = chunk__9501_9680;
var G__9686 = count__9502_9681;
var G__9687 = (i__9503_9682 + (1));
seq__9500_9679 = G__9684;
chunk__9501_9680 = G__9685;
count__9502_9681 = G__9686;
i__9503_9682 = G__9687;
continue;
} else {
var temp__5804__auto___9688 = cljs.core.seq.call(null,seq__9500_9679);
if(temp__5804__auto___9688){
var seq__9500_9689__$1 = temp__5804__auto___9688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9500_9689__$1)){
var c__5525__auto___9690 = cljs.core.chunk_first.call(null,seq__9500_9689__$1);
var G__9691 = cljs.core.chunk_rest.call(null,seq__9500_9689__$1);
var G__9692 = c__5525__auto___9690;
var G__9693 = cljs.core.count.call(null,c__5525__auto___9690);
var G__9694 = (0);
seq__9500_9679 = G__9691;
chunk__9501_9680 = G__9692;
count__9502_9681 = G__9693;
i__9503_9682 = G__9694;
continue;
} else {
var component__7938__auto___9695 = cljs.core.first.call(null,seq__9500_9689__$1);
speclj.components.install.call(null,component__7938__auto___9695,description__7937__auto____$1);


var G__9696 = cljs.core.next.call(null,seq__9500_9689__$1);
var G__9697 = null;
var G__9698 = (0);
var G__9699 = (0);
seq__9500_9679 = G__9696;
chunk__9501_9680 = G__9697;
count__9502_9681 = G__9698;
i__9503_9682 = G__9699;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9498_9677);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"take-block",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9504_9700 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9505_9701 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9505_9701);

try{var seq__9506_9702 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns index of blocking move",((function (_STAR_parent_description_STAR__orig_val__9504_9700,_STAR_parent_description_STAR__temp_val__9505_9701,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var expected__8074__auto__ = (2);
var actual__8075__auto__ = tic_tac_toe.moves.corec.take_block.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(2),"X","X",(5),(6),(7),(8)], null));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9504_9700,_STAR_parent_description_STAR__temp_val__9505_9701,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false)],null)));
var chunk__9507_9703 = null;
var count__9508_9704 = (0);
var i__9509_9705 = (0);
while(true){
if((i__9509_9705 < count__9508_9704)){
var component__7938__auto___9706 = cljs.core._nth.call(null,chunk__9507_9703,i__9509_9705);
speclj.components.install.call(null,component__7938__auto___9706,description__7937__auto____$1);


var G__9707 = seq__9506_9702;
var G__9708 = chunk__9507_9703;
var G__9709 = count__9508_9704;
var G__9710 = (i__9509_9705 + (1));
seq__9506_9702 = G__9707;
chunk__9507_9703 = G__9708;
count__9508_9704 = G__9709;
i__9509_9705 = G__9710;
continue;
} else {
var temp__5804__auto___9711 = cljs.core.seq.call(null,seq__9506_9702);
if(temp__5804__auto___9711){
var seq__9506_9712__$1 = temp__5804__auto___9711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9506_9712__$1)){
var c__5525__auto___9713 = cljs.core.chunk_first.call(null,seq__9506_9712__$1);
var G__9714 = cljs.core.chunk_rest.call(null,seq__9506_9712__$1);
var G__9715 = c__5525__auto___9713;
var G__9716 = cljs.core.count.call(null,c__5525__auto___9713);
var G__9717 = (0);
seq__9506_9702 = G__9714;
chunk__9507_9703 = G__9715;
count__9508_9704 = G__9716;
i__9509_9705 = G__9717;
continue;
} else {
var component__7938__auto___9718 = cljs.core.first.call(null,seq__9506_9712__$1);
speclj.components.install.call(null,component__7938__auto___9718,description__7937__auto____$1);


var G__9719 = cljs.core.next.call(null,seq__9506_9712__$1);
var G__9720 = null;
var G__9721 = (0);
var G__9722 = (0);
seq__9506_9702 = G__9719;
chunk__9507_9703 = G__9720;
count__9508_9704 = G__9721;
i__9509_9705 = G__9722;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9504_9700);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"take-win",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9510_9723 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9511_9724 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9511_9724);

try{var seq__9512_9725 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (it__8307__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9590 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9591 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9591);

try{return it__8307__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9590);
}});})(_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (it__7999__auto__){
var get_active_player_orig_val__9592 = tic_tac_toe.boardc.get_active_player;
var get_active_player_temp_val__9593 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"active-player","active-player",23744659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),"X"], null));
(tic_tac_toe.boardc.get_active_player = get_active_player_temp_val__9593);

try{return it__7999__auto__.call(null);
}finally {(tic_tac_toe.boardc.get_active_player = get_active_player_orig_val__9592);
}});})(_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"3x3",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9594_9729 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9595_9730 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9595_9730);

try{var seq__9596_9731 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"takes any presented win",((function (_STAR_parent_description_STAR__orig_val__9594_9729,_STAR_parent_description_STAR__temp_val__9595_9730,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var board = cljs.core.range.call(null,(9));
var test = (function (result,played_spots){
var seq__9604 = cljs.core.seq.call(null,played_spots);
var chunk__9605 = null;
var count__9606 = (0);
var i__9607 = (0);
while(true){
if((i__9607 < count__9606)){
var x = cljs.core._nth.call(null,chunk__9605,i__9607);
var expected__8074__auto___9735 = result;
var actual__8075__auto___9736 = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board));
if(cljs.core._EQ_.call(null,expected__8074__auto___9735,actual__8075__auto___9736)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9735;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9736;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9737 = seq__9604;
var G__9738 = chunk__9605;
var G__9739 = count__9606;
var G__9740 = (i__9607 + (1));
seq__9604 = G__9737;
chunk__9605 = G__9738;
count__9606 = G__9739;
i__9607 = G__9740;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9604);
if(temp__5804__auto__){
var seq__9604__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9604__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9604__$1);
var G__9741 = cljs.core.chunk_rest.call(null,seq__9604__$1);
var G__9742 = c__5525__auto__;
var G__9743 = cljs.core.count.call(null,c__5525__auto__);
var G__9744 = (0);
seq__9604 = G__9741;
chunk__9605 = G__9742;
count__9606 = G__9743;
i__9607 = G__9744;
continue;
} else {
var x = cljs.core.first.call(null,seq__9604__$1);
var expected__8074__auto___9745 = result;
var actual__8075__auto___9746 = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board));
if(cljs.core._EQ_.call(null,expected__8074__auto___9745,actual__8075__auto___9746)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9745;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9746;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9747 = cljs.core.next.call(null,seq__9604__$1);
var G__9748 = null;
var G__9749 = (0);
var G__9750 = (0);
seq__9604 = G__9747;
chunk__9605 = G__9748;
count__9606 = G__9749;
i__9607 = G__9750;
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
});})(_STAR_parent_description_STAR__orig_val__9594_9729,_STAR_parent_description_STAR__temp_val__9595_9730,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false)],null)));
var chunk__9597_9732 = null;
var count__9598_9733 = (0);
var i__9599_9734 = (0);
while(true){
if((i__9599_9734 < count__9598_9733)){
var component__7938__auto___9751 = cljs.core._nth.call(null,chunk__9597_9732,i__9599_9734);
speclj.components.install.call(null,component__7938__auto___9751,description__7937__auto____$2);


var G__9752 = seq__9596_9731;
var G__9753 = chunk__9597_9732;
var G__9754 = count__9598_9733;
var G__9755 = (i__9599_9734 + (1));
seq__9596_9731 = G__9752;
chunk__9597_9732 = G__9753;
count__9598_9733 = G__9754;
i__9599_9734 = G__9755;
continue;
} else {
var temp__5804__auto___9756 = cljs.core.seq.call(null,seq__9596_9731);
if(temp__5804__auto___9756){
var seq__9596_9757__$1 = temp__5804__auto___9756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9596_9757__$1)){
var c__5525__auto___9758 = cljs.core.chunk_first.call(null,seq__9596_9757__$1);
var G__9759 = cljs.core.chunk_rest.call(null,seq__9596_9757__$1);
var G__9760 = c__5525__auto___9758;
var G__9761 = cljs.core.count.call(null,c__5525__auto___9758);
var G__9762 = (0);
seq__9596_9731 = G__9759;
chunk__9597_9732 = G__9760;
count__9598_9733 = G__9761;
i__9599_9734 = G__9762;
continue;
} else {
var component__7938__auto___9763 = cljs.core.first.call(null,seq__9596_9757__$1);
speclj.components.install.call(null,component__7938__auto___9763,description__7937__auto____$2);


var G__9764 = cljs.core.next.call(null,seq__9596_9757__$1);
var G__9765 = null;
var G__9766 = (0);
var G__9767 = (0);
seq__9596_9731 = G__9764;
chunk__9597_9732 = G__9765;
count__9598_9733 = G__9766;
i__9599_9734 = G__9767;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9594_9729);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"4x4",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9608_9768 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9609_9769 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9609_9769);

try{var seq__9610_9770 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"takes any presented win",((function (_STAR_parent_description_STAR__orig_val__9608_9768,_STAR_parent_description_STAR__temp_val__9609_9769,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var board = cljs.core.range.call(null,(16));
var test = (function (result,played_spots){
var seq__9618 = cljs.core.seq.call(null,played_spots);
var chunk__9619 = null;
var count__9620 = (0);
var i__9621 = (0);
while(true){
if((i__9621 < count__9620)){
var x = cljs.core._nth.call(null,chunk__9619,i__9621);
var expected__8074__auto___9774 = result;
var actual__8075__auto___9775 = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board));
if(cljs.core._EQ_.call(null,expected__8074__auto___9774,actual__8075__auto___9775)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9774;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9775;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9776 = seq__9618;
var G__9777 = chunk__9619;
var G__9778 = count__9620;
var G__9779 = (i__9621 + (1));
seq__9618 = G__9776;
chunk__9619 = G__9777;
count__9620 = G__9778;
i__9621 = G__9779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9618);
if(temp__5804__auto__){
var seq__9618__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9618__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9618__$1);
var G__9780 = cljs.core.chunk_rest.call(null,seq__9618__$1);
var G__9781 = c__5525__auto__;
var G__9782 = cljs.core.count.call(null,c__5525__auto__);
var G__9783 = (0);
seq__9618 = G__9780;
chunk__9619 = G__9781;
count__9620 = G__9782;
i__9621 = G__9783;
continue;
} else {
var x = cljs.core.first.call(null,seq__9618__$1);
var expected__8074__auto___9784 = result;
var actual__8075__auto___9785 = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",x,board));
if(cljs.core._EQ_.call(null,expected__8074__auto___9784,actual__8075__auto___9785)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto___9784;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto___9785;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}


var G__9786 = cljs.core.next.call(null,seq__9618__$1);
var G__9787 = null;
var G__9788 = (0);
var G__9789 = (0);
seq__9618 = G__9786;
chunk__9619 = G__9787;
count__9620 = G__9788;
i__9621 = G__9789;
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
});})(_STAR_parent_description_STAR__orig_val__9608_9768,_STAR_parent_description_STAR__temp_val__9609_9769,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false)],null)));
var chunk__9611_9771 = null;
var count__9612_9772 = (0);
var i__9613_9773 = (0);
while(true){
if((i__9613_9773 < count__9612_9772)){
var component__7938__auto___9790 = cljs.core._nth.call(null,chunk__9611_9771,i__9613_9773);
speclj.components.install.call(null,component__7938__auto___9790,description__7937__auto____$2);


var G__9791 = seq__9610_9770;
var G__9792 = chunk__9611_9771;
var G__9793 = count__9612_9772;
var G__9794 = (i__9613_9773 + (1));
seq__9610_9770 = G__9791;
chunk__9611_9771 = G__9792;
count__9612_9772 = G__9793;
i__9613_9773 = G__9794;
continue;
} else {
var temp__5804__auto___9795 = cljs.core.seq.call(null,seq__9610_9770);
if(temp__5804__auto___9795){
var seq__9610_9796__$1 = temp__5804__auto___9795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9610_9796__$1)){
var c__5525__auto___9797 = cljs.core.chunk_first.call(null,seq__9610_9796__$1);
var G__9798 = cljs.core.chunk_rest.call(null,seq__9610_9796__$1);
var G__9799 = c__5525__auto___9797;
var G__9800 = cljs.core.count.call(null,c__5525__auto___9797);
var G__9801 = (0);
seq__9610_9770 = G__9798;
chunk__9611_9771 = G__9799;
count__9612_9772 = G__9800;
i__9613_9773 = G__9801;
continue;
} else {
var component__7938__auto___9802 = cljs.core.first.call(null,seq__9610_9796__$1);
speclj.components.install.call(null,component__7938__auto___9802,description__7937__auto____$2);


var G__9803 = cljs.core.next.call(null,seq__9610_9796__$1);
var G__9804 = null;
var G__9805 = (0);
var G__9806 = (0);
seq__9610_9770 = G__9803;
chunk__9611_9771 = G__9804;
count__9612_9772 = G__9805;
i__9613_9773 = G__9806;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9608_9768);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})(),(function (){var description__7937__auto____$2 = speclj.components.new_description.call(null,"3x3x3",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9622_9807 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9623_9808 = description__7937__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9623_9808);

try{var seq__9624_9809 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"facing forwards",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9646_9813 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9647_9814 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9647_9814);

try{var seq__9648_9815 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"takes any presented win on plane 0",((function (_STAR_parent_description_STAR__orig_val__9646_9813,_STAR_parent_description_STAR__temp_val__9647_9814,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
return tic_tac_toe.moves.corec_spec.take_win_plane_QMARK_.call(null,(0));
});})(_STAR_parent_description_STAR__orig_val__9646_9813,_STAR_parent_description_STAR__temp_val__9647_9814,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false),speclj.components.new_characteristic.call(null,"takes any presented win on plane 1",((function (_STAR_parent_description_STAR__orig_val__9646_9813,_STAR_parent_description_STAR__temp_val__9647_9814,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
return tic_tac_toe.moves.corec_spec.take_win_plane_QMARK_.call(null,(1));
});})(_STAR_parent_description_STAR__orig_val__9646_9813,_STAR_parent_description_STAR__temp_val__9647_9814,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false),speclj.components.new_characteristic.call(null,"takes any presented win on plane 2",((function (_STAR_parent_description_STAR__orig_val__9646_9813,_STAR_parent_description_STAR__temp_val__9647_9814,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
return tic_tac_toe.moves.corec_spec.take_win_plane_QMARK_.call(null,(2));
});})(_STAR_parent_description_STAR__orig_val__9646_9813,_STAR_parent_description_STAR__temp_val__9647_9814,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false)],null)));
var chunk__9649_9816 = null;
var count__9650_9817 = (0);
var i__9651_9818 = (0);
while(true){
if((i__9651_9818 < count__9650_9817)){
var component__7938__auto___9819 = cljs.core._nth.call(null,chunk__9649_9816,i__9651_9818);
speclj.components.install.call(null,component__7938__auto___9819,description__7937__auto____$3);


var G__9820 = seq__9648_9815;
var G__9821 = chunk__9649_9816;
var G__9822 = count__9650_9817;
var G__9823 = (i__9651_9818 + (1));
seq__9648_9815 = G__9820;
chunk__9649_9816 = G__9821;
count__9650_9817 = G__9822;
i__9651_9818 = G__9823;
continue;
} else {
var temp__5804__auto___9824 = cljs.core.seq.call(null,seq__9648_9815);
if(temp__5804__auto___9824){
var seq__9648_9825__$1 = temp__5804__auto___9824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9648_9825__$1)){
var c__5525__auto___9826 = cljs.core.chunk_first.call(null,seq__9648_9825__$1);
var G__9827 = cljs.core.chunk_rest.call(null,seq__9648_9825__$1);
var G__9828 = c__5525__auto___9826;
var G__9829 = cljs.core.count.call(null,c__5525__auto___9826);
var G__9830 = (0);
seq__9648_9815 = G__9827;
chunk__9649_9816 = G__9828;
count__9650_9817 = G__9829;
i__9651_9818 = G__9830;
continue;
} else {
var component__7938__auto___9831 = cljs.core.first.call(null,seq__9648_9825__$1);
speclj.components.install.call(null,component__7938__auto___9831,description__7937__auto____$3);


var G__9832 = cljs.core.next.call(null,seq__9648_9825__$1);
var G__9833 = null;
var G__9834 = (0);
var G__9835 = (0);
seq__9648_9815 = G__9832;
chunk__9649_9816 = G__9833;
count__9650_9817 = G__9834;
i__9651_9818 = G__9835;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9646_9813);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})(),(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"facing sideways",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9652_9836 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9653_9837 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9653_9837);

try{var seq__9654_9838 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"takes a row win from side view of cube",((function (_STAR_parent_description_STAR__orig_val__9652_9836,_STAR_parent_description_STAR__temp_val__9653_9837,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var expected__8074__auto__ = (21);
var actual__8075__auto__ = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(12)], null),cljs.core.range.call(null,(27))));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9652_9836,_STAR_parent_description_STAR__temp_val__9653_9837,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false),speclj.components.new_characteristic.call(null,"takes a diagonal win from side view of cube",((function (_STAR_parent_description_STAR__orig_val__9652_9836,_STAR_parent_description_STAR__temp_val__9653_9837,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var expected__8074__auto__ = (25);
var actual__8075__auto__ = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(13)], null),cljs.core.range.call(null,(27))));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9652_9836,_STAR_parent_description_STAR__temp_val__9653_9837,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false)],null)));
var chunk__9655_9839 = null;
var count__9656_9840 = (0);
var i__9657_9841 = (0);
while(true){
if((i__9657_9841 < count__9656_9840)){
var component__7938__auto___9842 = cljs.core._nth.call(null,chunk__9655_9839,i__9657_9841);
speclj.components.install.call(null,component__7938__auto___9842,description__7937__auto____$3);


var G__9843 = seq__9654_9838;
var G__9844 = chunk__9655_9839;
var G__9845 = count__9656_9840;
var G__9846 = (i__9657_9841 + (1));
seq__9654_9838 = G__9843;
chunk__9655_9839 = G__9844;
count__9656_9840 = G__9845;
i__9657_9841 = G__9846;
continue;
} else {
var temp__5804__auto___9847 = cljs.core.seq.call(null,seq__9654_9838);
if(temp__5804__auto___9847){
var seq__9654_9848__$1 = temp__5804__auto___9847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9654_9848__$1)){
var c__5525__auto___9849 = cljs.core.chunk_first.call(null,seq__9654_9848__$1);
var G__9850 = cljs.core.chunk_rest.call(null,seq__9654_9848__$1);
var G__9851 = c__5525__auto___9849;
var G__9852 = cljs.core.count.call(null,c__5525__auto___9849);
var G__9853 = (0);
seq__9654_9838 = G__9850;
chunk__9655_9839 = G__9851;
count__9656_9840 = G__9852;
i__9657_9841 = G__9853;
continue;
} else {
var component__7938__auto___9854 = cljs.core.first.call(null,seq__9654_9848__$1);
speclj.components.install.call(null,component__7938__auto___9854,description__7937__auto____$3);


var G__9855 = cljs.core.next.call(null,seq__9654_9848__$1);
var G__9856 = null;
var G__9857 = (0);
var G__9858 = (0);
seq__9654_9838 = G__9855;
chunk__9655_9839 = G__9856;
count__9656_9840 = G__9857;
i__9657_9841 = G__9858;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9652_9836);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})(),(function (){var description__7937__auto____$3 = speclj.components.new_description.call(null,"facing top",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9658_9859 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9659_9860 = description__7937__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9659_9860);

try{var seq__9660_9861 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"takes a diagonal win from top view of cube",((function (_STAR_parent_description_STAR__orig_val__9658_9859,_STAR_parent_description_STAR__temp_val__9659_9860,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var expected__8074__auto__ = (20);
var actual__8075__auto__ = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),cljs.core.range.call(null,(27))));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9658_9859,_STAR_parent_description_STAR__temp_val__9659_9860,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false),speclj.components.new_characteristic.call(null,"takes across cube diagonal win from top view of cube",((function (_STAR_parent_description_STAR__orig_val__9658_9859,_STAR_parent_description_STAR__temp_val__9659_9860,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var expected__8074__auto__ = (20);
var actual__8075__auto__ = tic_tac_toe.moves.corec.take_win.call(null,tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(13)], null),cljs.core.range.call(null,(27))));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9658_9859,_STAR_parent_description_STAR__temp_val__9659_9860,description__7937__auto____$3,_STAR_parent_description_STAR__orig_val__9622_9807,_STAR_parent_description_STAR__temp_val__9623_9808,description__7937__auto____$2,_STAR_parent_description_STAR__orig_val__9510_9723,_STAR_parent_description_STAR__temp_val__9511_9724,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false)],null)));
var chunk__9661_9862 = null;
var count__9662_9863 = (0);
var i__9663_9864 = (0);
while(true){
if((i__9663_9864 < count__9662_9863)){
var component__7938__auto___9865 = cljs.core._nth.call(null,chunk__9661_9862,i__9663_9864);
speclj.components.install.call(null,component__7938__auto___9865,description__7937__auto____$3);


var G__9866 = seq__9660_9861;
var G__9867 = chunk__9661_9862;
var G__9868 = count__9662_9863;
var G__9869 = (i__9663_9864 + (1));
seq__9660_9861 = G__9866;
chunk__9661_9862 = G__9867;
count__9662_9863 = G__9868;
i__9663_9864 = G__9869;
continue;
} else {
var temp__5804__auto___9870 = cljs.core.seq.call(null,seq__9660_9861);
if(temp__5804__auto___9870){
var seq__9660_9871__$1 = temp__5804__auto___9870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9660_9871__$1)){
var c__5525__auto___9872 = cljs.core.chunk_first.call(null,seq__9660_9871__$1);
var G__9873 = cljs.core.chunk_rest.call(null,seq__9660_9871__$1);
var G__9874 = c__5525__auto___9872;
var G__9875 = cljs.core.count.call(null,c__5525__auto___9872);
var G__9876 = (0);
seq__9660_9861 = G__9873;
chunk__9661_9862 = G__9874;
count__9662_9863 = G__9875;
i__9663_9864 = G__9876;
continue;
} else {
var component__7938__auto___9877 = cljs.core.first.call(null,seq__9660_9871__$1);
speclj.components.install.call(null,component__7938__auto___9877,description__7937__auto____$3);


var G__9878 = cljs.core.next.call(null,seq__9660_9871__$1);
var G__9879 = null;
var G__9880 = (0);
var G__9881 = (0);
seq__9660_9861 = G__9878;
chunk__9661_9862 = G__9879;
count__9662_9863 = G__9880;
i__9663_9864 = G__9881;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9658_9859);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$3);
}

return description__7937__auto____$3;
})()],null)));
var chunk__9625_9810 = null;
var count__9626_9811 = (0);
var i__9627_9812 = (0);
while(true){
if((i__9627_9812 < count__9626_9811)){
var component__7938__auto___9882 = cljs.core._nth.call(null,chunk__9625_9810,i__9627_9812);
speclj.components.install.call(null,component__7938__auto___9882,description__7937__auto____$2);


var G__9883 = seq__9624_9809;
var G__9884 = chunk__9625_9810;
var G__9885 = count__9626_9811;
var G__9886 = (i__9627_9812 + (1));
seq__9624_9809 = G__9883;
chunk__9625_9810 = G__9884;
count__9626_9811 = G__9885;
i__9627_9812 = G__9886;
continue;
} else {
var temp__5804__auto___9887 = cljs.core.seq.call(null,seq__9624_9809);
if(temp__5804__auto___9887){
var seq__9624_9888__$1 = temp__5804__auto___9887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9624_9888__$1)){
var c__5525__auto___9889 = cljs.core.chunk_first.call(null,seq__9624_9888__$1);
var G__9890 = cljs.core.chunk_rest.call(null,seq__9624_9888__$1);
var G__9891 = c__5525__auto___9889;
var G__9892 = cljs.core.count.call(null,c__5525__auto___9889);
var G__9893 = (0);
seq__9624_9809 = G__9890;
chunk__9625_9810 = G__9891;
count__9626_9811 = G__9892;
i__9627_9812 = G__9893;
continue;
} else {
var component__7938__auto___9894 = cljs.core.first.call(null,seq__9624_9888__$1);
speclj.components.install.call(null,component__7938__auto___9894,description__7937__auto____$2);


var G__9895 = cljs.core.next.call(null,seq__9624_9888__$1);
var G__9896 = null;
var G__9897 = (0);
var G__9898 = (0);
seq__9624_9809 = G__9895;
chunk__9625_9810 = G__9896;
count__9626_9811 = G__9897;
i__9627_9812 = G__9898;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9622_9807);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$2);
}

return description__7937__auto____$2;
})()],null)));
var chunk__9513_9726 = null;
var count__9514_9727 = (0);
var i__9515_9728 = (0);
while(true){
if((i__9515_9728 < count__9514_9727)){
var component__7938__auto___9899 = cljs.core._nth.call(null,chunk__9513_9726,i__9515_9728);
speclj.components.install.call(null,component__7938__auto___9899,description__7937__auto____$1);


var G__9900 = seq__9512_9725;
var G__9901 = chunk__9513_9726;
var G__9902 = count__9514_9727;
var G__9903 = (i__9515_9728 + (1));
seq__9512_9725 = G__9900;
chunk__9513_9726 = G__9901;
count__9514_9727 = G__9902;
i__9515_9728 = G__9903;
continue;
} else {
var temp__5804__auto___9904 = cljs.core.seq.call(null,seq__9512_9725);
if(temp__5804__auto___9904){
var seq__9512_9905__$1 = temp__5804__auto___9904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9512_9905__$1)){
var c__5525__auto___9906 = cljs.core.chunk_first.call(null,seq__9512_9905__$1);
var G__9907 = cljs.core.chunk_rest.call(null,seq__9512_9905__$1);
var G__9908 = c__5525__auto___9906;
var G__9909 = cljs.core.count.call(null,c__5525__auto___9906);
var G__9910 = (0);
seq__9512_9725 = G__9907;
chunk__9513_9726 = G__9908;
count__9514_9727 = G__9909;
i__9515_9728 = G__9910;
continue;
} else {
var component__7938__auto___9911 = cljs.core.first.call(null,seq__9512_9905__$1);
speclj.components.install.call(null,component__7938__auto___9911,description__7937__auto____$1);


var G__9912 = cljs.core.next.call(null,seq__9512_9905__$1);
var G__9913 = null;
var G__9914 = (0);
var G__9915 = (0);
seq__9512_9725 = G__9912;
chunk__9513_9726 = G__9913;
count__9514_9727 = G__9914;
i__9515_9728 = G__9915;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9510_9723);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})(),(function (){var description__7937__auto____$1 = speclj.components.new_description.call(null,"get-move-params",false,"tic-tac-toe.moves.corec-spec");
var _STAR_parent_description_STAR__orig_val__9664_9916 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9665_9917 = description__7937__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9665_9917);

try{var seq__9666_9918 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns params for X on x's turn",((function (_STAR_parent_description_STAR__orig_val__9664_9916,_STAR_parent_description_STAR__temp_val__9665_9917,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var expected__8074__auto__ = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__8075__auto__ = tic_tac_toe.moves.corec.get_move_param.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.range.call(null,(9)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),"X",new cljs.core.Keyword(null,"human","human",-772334390)], null));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9664_9916,_STAR_parent_description_STAR__temp_val__9665_9917,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false),speclj.components.new_characteristic.call(null,"returns params for O on o's turn",((function (_STAR_parent_description_STAR__orig_val__9664_9916,_STAR_parent_description_STAR__temp_val__9665_9917,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670){
return (function (){
var expected__8074__auto__ = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__8075__auto__ = tic_tac_toe.moves.corec.get_move_param.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.spec_helperc.populate_board.call(null,"X",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.range.call(null,(9))),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),"O",new cljs.core.Keyword(null,"hard","hard",2068420191)], null));
if(cljs.core._EQ_.call(null,expected__8074__auto__,actual__8075__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(function (){var temp__5806__auto__ = expected__8074__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5806__auto__ = actual__8075__auto__;
if((temp__5806__auto__ == null)){
return "nil";
} else {
var thing__8042__auto__ = temp__5806__auto__;
return cljs.core.pr_str.call(null,thing__8042__auto__);
}
})()," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9664_9916,_STAR_parent_description_STAR__temp_val__9665_9917,description__7937__auto____$1,_STAR_parent_description_STAR__orig_val__9306_9671,_STAR_parent_description_STAR__temp_val__9307_9672,description__7937__auto___9670))
,false)],null)));
var chunk__9667_9919 = null;
var count__9668_9920 = (0);
var i__9669_9921 = (0);
while(true){
if((i__9669_9921 < count__9668_9920)){
var component__7938__auto___9922 = cljs.core._nth.call(null,chunk__9667_9919,i__9669_9921);
speclj.components.install.call(null,component__7938__auto___9922,description__7937__auto____$1);


var G__9923 = seq__9666_9918;
var G__9924 = chunk__9667_9919;
var G__9925 = count__9668_9920;
var G__9926 = (i__9669_9921 + (1));
seq__9666_9918 = G__9923;
chunk__9667_9919 = G__9924;
count__9668_9920 = G__9925;
i__9669_9921 = G__9926;
continue;
} else {
var temp__5804__auto___9927 = cljs.core.seq.call(null,seq__9666_9918);
if(temp__5804__auto___9927){
var seq__9666_9928__$1 = temp__5804__auto___9927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9666_9928__$1)){
var c__5525__auto___9929 = cljs.core.chunk_first.call(null,seq__9666_9928__$1);
var G__9930 = cljs.core.chunk_rest.call(null,seq__9666_9928__$1);
var G__9931 = c__5525__auto___9929;
var G__9932 = cljs.core.count.call(null,c__5525__auto___9929);
var G__9933 = (0);
seq__9666_9918 = G__9930;
chunk__9667_9919 = G__9931;
count__9668_9920 = G__9932;
i__9669_9921 = G__9933;
continue;
} else {
var component__7938__auto___9934 = cljs.core.first.call(null,seq__9666_9928__$1);
speclj.components.install.call(null,component__7938__auto___9934,description__7937__auto____$1);


var G__9935 = cljs.core.next.call(null,seq__9666_9928__$1);
var G__9936 = null;
var G__9937 = (0);
var G__9938 = (0);
seq__9666_9918 = G__9935;
chunk__9667_9919 = G__9936;
count__9668_9920 = G__9937;
i__9669_9921 = G__9938;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9664_9916);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto____$1);
}

return description__7937__auto____$1;
})()],null)));
var chunk__9317_9674 = null;
var count__9318_9675 = (0);
var i__9319_9676 = (0);
while(true){
if((i__9319_9676 < count__9318_9675)){
var component__7938__auto___9939 = cljs.core._nth.call(null,chunk__9317_9674,i__9319_9676);
speclj.components.install.call(null,component__7938__auto___9939,description__7937__auto___9670);


var G__9940 = seq__9316_9673;
var G__9941 = chunk__9317_9674;
var G__9942 = count__9318_9675;
var G__9943 = (i__9319_9676 + (1));
seq__9316_9673 = G__9940;
chunk__9317_9674 = G__9941;
count__9318_9675 = G__9942;
i__9319_9676 = G__9943;
continue;
} else {
var temp__5804__auto___9944 = cljs.core.seq.call(null,seq__9316_9673);
if(temp__5804__auto___9944){
var seq__9316_9945__$1 = temp__5804__auto___9944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9316_9945__$1)){
var c__5525__auto___9946 = cljs.core.chunk_first.call(null,seq__9316_9945__$1);
var G__9947 = cljs.core.chunk_rest.call(null,seq__9316_9945__$1);
var G__9948 = c__5525__auto___9946;
var G__9949 = cljs.core.count.call(null,c__5525__auto___9946);
var G__9950 = (0);
seq__9316_9673 = G__9947;
chunk__9317_9674 = G__9948;
count__9318_9675 = G__9949;
i__9319_9676 = G__9950;
continue;
} else {
var component__7938__auto___9951 = cljs.core.first.call(null,seq__9316_9945__$1);
speclj.components.install.call(null,component__7938__auto___9951,description__7937__auto___9670);


var G__9952 = cljs.core.next.call(null,seq__9316_9945__$1);
var G__9953 = null;
var G__9954 = (0);
var G__9955 = (0);
seq__9316_9673 = G__9952;
chunk__9317_9674 = G__9953;
count__9318_9675 = G__9954;
i__9319_9676 = G__9955;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9306_9671);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7937__auto___9670);
}


//# sourceMappingURL=corec_spec.js.map
