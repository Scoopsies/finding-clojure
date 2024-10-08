// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__6695__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6696__i = 0, G__6696__a = new Array(arguments.length -  0);
while (G__6696__i < G__6696__a.length) {G__6696__a[G__6696__i] = arguments[G__6696__i + 0]; ++G__6696__i;}
  args = new cljs.core.IndexedSeq(G__6696__a,0,null);
} 
return G__6695__delegate.call(this,args);};
G__6695.cljs$lang$maxFixedArity = 0;
G__6695.cljs$lang$applyTo = (function (arglist__6699){
var args = cljs.core.seq(arglist__6699);
return G__6695__delegate(args);
});
G__6695.cljs$core$IFn$_invoke$arity$variadic = G__6695__delegate;
return G__6695;
})()
);

(o.error = (function() { 
var G__6701__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6702__i = 0, G__6702__a = new Array(arguments.length -  0);
while (G__6702__i < G__6702__a.length) {G__6702__a[G__6702__i] = arguments[G__6702__i + 0]; ++G__6702__i;}
  args = new cljs.core.IndexedSeq(G__6702__a,0,null);
} 
return G__6701__delegate.call(this,args);};
G__6701.cljs$lang$maxFixedArity = 0;
G__6701.cljs$lang$applyTo = (function (arglist__6703){
var args = cljs.core.seq(arglist__6703);
return G__6701__delegate(args);
});
G__6701.cljs$core$IFn$_invoke$arity$variadic = G__6701__delegate;
return G__6701;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
