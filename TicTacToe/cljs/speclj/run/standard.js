// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.run.standard');
goog.require('cljs.core');
goog.require('speclj.report.progress');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.tags');
speclj.run.standard.armed = false;
goog.exportSymbol('speclj.run.standard.armed', speclj.run.standard.armed);

speclj.run.standard.counter = cljs.core.atom.call(null,(0));

speclj.run.standard.arm = (function speclj$run$standard$arm(){
return (speclj.run.standard.armed = true);
});
goog.exportSymbol('speclj.run.standard.arm', speclj.run.standard.arm);

speclj.run.standard.disarm = (function speclj$run$standard$disarm(){
return (speclj.run.standard.armed = false);
});
goog.exportSymbol('speclj.run.standard.disarm', speclj.run.standard.disarm);

/**
* @constructor
 * @implements {speclj.running.Runner}
*/
speclj.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
});
(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_directories$arity$3 = (function (_this,_directories,_reporters){
var self__ = this;
var _this__$1 = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$_get_descriptions$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.deref.call(null,self__.descriptions);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$submit_description$arity$2 = (function (_this,description){
var self__ = this;
var _this__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,cljs.core.conj,description);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$_filter_descriptions$arity$2 = (function (_this,namespaces){
var self__ = this;
var _this__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,speclj.running.descriptions_with_namespaces,namespaces);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_description$arity$3 = (function (_this,description,reporters){
var self__ = this;
var _this__$1 = this;
var run_results = speclj.running.do_description.call(null,description,reporters);
return cljs.core.swap_BANG_.call(null,self__.results,cljs.core.into,run_results);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_and_report$arity$2 = (function (this$,reporters){
var self__ = this;
var this$__$1 = this;
var seq__11922_11940 = cljs.core.seq.call(null,speclj.running.filter_focused.call(null,cljs.core.deref.call(null,self__.descriptions)));
var chunk__11923_11941 = null;
var count__11924_11942 = (0);
var i__11925_11943 = (0);
while(true){
if((i__11925_11943 < count__11924_11942)){
var description_11944 = cljs.core._nth.call(null,chunk__11923_11941,i__11925_11943);
speclj.running.run_description.call(null,this$__$1,description_11944,reporters);


var G__11945 = seq__11922_11940;
var G__11946 = chunk__11923_11941;
var G__11947 = count__11924_11942;
var G__11948 = (i__11925_11943 + (1));
seq__11922_11940 = G__11945;
chunk__11923_11941 = G__11946;
count__11924_11942 = G__11947;
i__11925_11943 = G__11948;
continue;
} else {
var temp__5804__auto___11949 = cljs.core.seq.call(null,seq__11922_11940);
if(temp__5804__auto___11949){
var seq__11922_11950__$1 = temp__5804__auto___11949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11922_11950__$1)){
var c__5525__auto___11951 = cljs.core.chunk_first.call(null,seq__11922_11950__$1);
var G__11952 = cljs.core.chunk_rest.call(null,seq__11922_11950__$1);
var G__11953 = c__5525__auto___11951;
var G__11954 = cljs.core.count.call(null,c__5525__auto___11951);
var G__11955 = (0);
seq__11922_11940 = G__11952;
chunk__11923_11941 = G__11953;
count__11924_11942 = G__11954;
i__11925_11943 = G__11955;
continue;
} else {
var description_11957 = cljs.core.first.call(null,seq__11922_11950__$1);
speclj.running.run_description.call(null,this$__$1,description_11957,reporters);


var G__11958 = cljs.core.next.call(null,seq__11922_11950__$1);
var G__11959 = null;
var G__11960 = (0);
var G__11961 = (0);
seq__11922_11940 = G__11958;
chunk__11923_11941 = G__11959;
count__11924_11942 = G__11960;
i__11925_11943 = G__11961;
continue;
}
} else {
}
}
break;
}

return speclj.reporting.report_runs_STAR_.call(null,reporters,cljs.core.deref.call(null,self__.results));
}));

(speclj.run.standard.StandardRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"descriptions","descriptions",817338403,null),new cljs.core.Symbol(null,"results","results",506361414,null)], null);
}));

(speclj.run.standard.StandardRunner.cljs$lang$type = true);

(speclj.run.standard.StandardRunner.cljs$lang$ctorStr = "speclj.run.standard/StandardRunner");

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"speclj.run.standard/StandardRunner");
}));

/**
 * Positional factory function for speclj.run.standard/StandardRunner.
 */
speclj.run.standard.__GT_StandardRunner = (function speclj$run$standard$__GT_StandardRunner(num,descriptions,results){
return (new speclj.run.standard.StandardRunner(num,descriptions,results));
});

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
cljs.core._write.call(null,writer,["#<speclj.run.standard.StandardRunner(num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.num),", descriptions: "].join(''));

cljs.core._pr_writer.call(null,cljs.core.deref.call(null,x__$1.descriptions),writer,opts);

return cljs.core._write.call(null,writer,")>");
}));

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_opts){
var x__$1 = this;
return cljs.core._write.call(null,writer,["#<speclj.component.Description(name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.name),")>"].join(''));
}));
speclj.run.standard.new_standard_runner = (function speclj$run$standard$new_standard_runner(){
return (new speclj.run.standard.StandardRunner(cljs.core.swap_BANG_.call(null,speclj.run.standard.counter,cljs.core.inc),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
goog.exportSymbol('speclj.run.standard.new_standard_runner', speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,speclj.config.default_runner_fn,speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,speclj.config.default_runner,speclj.run.standard.new_standard_runner.call(null));
speclj.run.standard.execute_active_runner = (function speclj$run$standard$execute_active_runner(){
var temp__5804__auto___11966 = speclj.tags.describe_filter.call(null);
if(cljs.core.truth_(temp__5804__auto___11966)){
var filter_msg_11969 = temp__5804__auto___11966;
speclj.reporting.report_message_STAR_.call(null,speclj.config.active_reporters.call(null),filter_msg_11969);
} else {
}

return speclj.running.run_and_report.call(null,speclj.config.active_runner.call(null),speclj.config.active_reporters.call(null));
});
speclj.run.standard.config_with_defaults = (function speclj$run$standard$config_with_defaults(configurations){
var $ = cljs.core.apply.call(null,cljs.core.hash_map,configurations);
var $__$1 = cljs.core.update_keys.call(null,$,cljs.core.keyword);
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,speclj.config.default_config,new cljs.core.Keyword(null,"runner","runner",1945441304)),$__$1);
});
speclj.run.standard.run_specs = (function speclj$run$standard$run_specs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12041 = arguments.length;
var i__5727__auto___12042 = (0);
while(true){
if((i__5727__auto___12042 < len__5726__auto___12041)){
args__5732__auto__.push((arguments[i__5727__auto___12042]));

var G__12045 = (i__5727__auto___12042 + (1));
i__5727__auto___12042 = G__12045;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});
goog.exportSymbol('speclj.run.standard.run_specs', speclj.run.standard.run_specs);

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
return speclj.config.with_config.call(null,speclj.run.standard.config_with_defaults.call(null,configurations),(function (){
speclj.run.standard.execute_active_runner.call(null);

return speclj.results.fail_count.call(null,cljs.core.deref.call(null,speclj.config.active_runner.call(null).results));
}));
} else {
return null;
}
}));

(speclj.run.standard.run_specs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq11967){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11967));
}));


//# sourceMappingURL=standard.js.map
