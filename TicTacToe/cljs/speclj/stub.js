// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.stub');
goog.require('cljs.core');
speclj.stub.check_recording = (function speclj$stub$check_recording(){
if(cljs.core.truth_(speclj.stub._STAR_stubbed_invocations_STAR_)){
return null;
} else {
throw (new Error("Stub recoding not bound.  Please add (with-stubs) to the decribe/context."));
}
});
/**
 * Removes all previous stub invocations to continue with a blank slate.
 */
speclj.stub.clear_BANG_ = (function speclj$stub$clear_BANG_(){
speclj.stub.check_recording.call(null);

return cljs.core.reset_BANG_.call(null,speclj.stub._STAR_stubbed_invocations_STAR_,cljs.core.PersistentVector.EMPTY);
});
speclj.stub._record_invocation = (function speclj$stub$_record_invocation(name,args){
speclj.stub.check_recording.call(null);

var args__$1 = ((cljs.core._EQ_.call(null,null,args))?cljs.core.PersistentVector.EMPTY:cljs.core.vec.call(null,args));
return cljs.core.swap_BANG_.call(null,speclj.stub._STAR_stubbed_invocations_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,args__$1], null));
});
speclj.stub.invoke_delegate = (function speclj$stub$invoke_delegate(name,delegate,args){
return cljs.core.apply.call(null,delegate,args);
});
speclj.stub.stub = (function speclj$stub$stub(var_args){
var G__14989 = arguments.length;
switch (G__14989) {
case 1:
return speclj.stub.stub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return speclj.stub.stub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.stub.stub.cljs$core$IFn$_invoke$arity$1 = (function (name){
return speclj.stub.stub.call(null,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(speclj.stub.stub.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
var delegate = new cljs.core.Keyword(null,"invoke","invoke",1145927159).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_((function (){var and__5000__auto__ = delegate;
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core.ifn_QMARK_.call(null,delegate)));
} else {
return and__5000__auto__;
}
})())){
throw (new Error("stub's :invoke argument must be an ifn"));
} else {
}

return (function() { 
var G__15017__delegate = function (args){
speclj.stub._record_invocation.call(null,name,args);

var result = (cljs.core.truth_(delegate)?speclj.stub.invoke_delegate.call(null,name,delegate,args):null);
var temp__5804__auto___15018 = new cljs.core.Keyword(null,"throw","throw",-1044625833).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5804__auto___15018)){
var throwable_15019 = temp__5804__auto___15018;
throw throwable_15019;
} else {
}

if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"return","return",-1891502105))){
return new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options);
} else {
return result;
}
};
var G__15017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15020__i = 0, G__15020__a = new Array(arguments.length -  0);
while (G__15020__i < G__15020__a.length) {G__15020__a[G__15020__i] = arguments[G__15020__i + 0]; ++G__15020__i;}
  args = new cljs.core.IndexedSeq(G__15020__a,0,null);
} 
return G__15017__delegate.call(this,args);};
G__15017.cljs$lang$maxFixedArity = 0;
G__15017.cljs$lang$applyTo = (function (arglist__15021){
var args = cljs.core.seq(arglist__15021);
return G__15017__delegate(args);
});
G__15017.cljs$core$IFn$_invoke$arity$variadic = G__15017__delegate;
return G__15017;
})()
;
}));

(speclj.stub.stub.cljs$lang$maxFixedArity = 2);

/**
 * Returns a list of argument lists representing each invocation of the specified stub.
 */
speclj.stub.invocations_of = (function speclj$stub$invocations_of(name){
return cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p1__15005_SHARP_){
return cljs.core._EQ_.call(null,name,cljs.core.first.call(null,p1__15005_SHARP_));
}),cljs.core.deref.call(null,speclj.stub._STAR_stubbed_invocations_STAR_)));
});
/**
 * Returns the list of arguments passed into the first invocation of the specified stub, nil if it was never invoked.
 */
speclj.stub.first_invocation_of = (function speclj$stub$first_invocation_of(name){
return cljs.core.first.call(null,speclj.stub.invocations_of.call(null,name));
});
/**
 * Returns the list of arguments passed into the last invocation of the specified stub, nil if it was never invoked.
 */
speclj.stub.last_invocation_of = (function speclj$stub$last_invocation_of(name){
return cljs.core.last.call(null,speclj.stub.invocations_of.call(null,name));
});
speclj.stub.params_match_QMARK_ = (function speclj$stub$params_match_QMARK_(expected,actual){
return ((cljs.core.sequential_QMARK_.call(null,expected)) && (((cljs.core.sequential_QMARK_.call(null,actual)) && (((cljs.core._EQ_.call(null,cljs.core.count.call(null,expected),cljs.core.count.call(null,actual))) && (cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (e,a){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"*","*",-1294732318),e)){
return true;
} else {
if(cljs.core.fn_QMARK_.call(null,e)){
var or__5002__auto__ = cljs.core._EQ_.call(null,e,a);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return e.call(null,a);
}
} else {
return cljs.core._EQ_.call(null,e,a);

}
}
}),expected,actual))))))));
});

//# sourceMappingURL=stub.js.map
