// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.report.progress');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
speclj.report.progress.full_name = (function speclj$report$progress$full_name(characteristic){
var context = cljs.core.deref.call(null,characteristic.parent);
var name = characteristic.name;
while(true){
if(cljs.core.truth_(context)){
var G__10800 = cljs.core.deref.call(null,context.parent);
var G__10801 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context.name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
context = G__10800;
name = G__10801;
continue;
} else {
return name;
}
break;
}
});
speclj.report.progress.print_failure = (function speclj$report$progress$print_failure(id,result){
var characteristic = result.characteristic;
var failure = result.failure;
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),id,") ",speclj.report.progress.full_name.call(null,characteristic)));

cljs.core.println.call(null,speclj.reporting.red.call(null,speclj.reporting.indent.call(null,2.5,speclj.platform.error_message.call(null,failure))));

if(speclj.platform.failure_QMARK_.call(null,failure)){
return cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.platform.failure_source.call(null,failure))));
} else {
return cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,failure))));
}
});
speclj.report.progress.print_failures = (function speclj$report$progress$print_failures(failures){
if(cljs.core.seq.call(null,failures)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Failures:");
} else {
}

var n__5593__auto__ = cljs.core.count.call(null,failures);
var i = (0);
while(true){
if((i < n__5593__auto__)){
speclj.report.progress.print_failure.call(null,(i + (1)),cljs.core.nth.call(null,failures,i));

var G__10815 = (i + (1));
i = G__10815;
continue;
} else {
return null;
}
break;
}
});
speclj.report.progress.print_pendings = (function speclj$report$progress$print_pendings(pending_results){
if(cljs.core.truth_(speclj.config._STAR_omit_pending_QMARK__STAR_)){
return null;
} else {
if(cljs.core.seq.call(null,pending_results)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Pending:");
} else {
}

var seq__10809 = cljs.core.seq.call(null,pending_results);
var chunk__10810 = null;
var count__10811 = (0);
var i__10812 = (0);
while(true){
if((i__10812 < count__10811)){
var result = cljs.core._nth.call(null,chunk__10810,i__10812);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source.call(null,result.exception)].join('')));


var G__10853 = seq__10809;
var G__10854 = chunk__10810;
var G__10855 = count__10811;
var G__10856 = (i__10812 + (1));
seq__10809 = G__10853;
chunk__10810 = G__10854;
count__10811 = G__10855;
i__10812 = G__10856;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10809);
if(temp__5804__auto__){
var seq__10809__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10809__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10809__$1);
var G__10859 = cljs.core.chunk_rest.call(null,seq__10809__$1);
var G__10860 = c__5525__auto__;
var G__10861 = cljs.core.count.call(null,c__5525__auto__);
var G__10862 = (0);
seq__10809 = G__10859;
chunk__10810 = G__10860;
count__10811 = G__10861;
i__10812 = G__10862;
continue;
} else {
var result = cljs.core.first.call(null,seq__10809__$1);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.yellow.call(null,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name.call(null,result.characteristic))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message.call(null,result.exception))].join('')));

cljs.core.println.call(null,speclj.reporting.grey.call(null,["    ; ",speclj.platform.failure_source.call(null,result.exception)].join('')));


var G__10864 = cljs.core.next.call(null,seq__10809__$1);
var G__10865 = null;
var G__10866 = (0);
var G__10867 = (0);
seq__10809 = G__10864;
chunk__10810 = G__10865;
count__10811 = G__10866;
i__10812 = G__10867;
continue;
}
} else {
return null;
}
}
break;
}
}
});
speclj.report.progress.print_errors = (function speclj$report$progress$print_errors(error_results){
if(cljs.core.seq.call(null,error_results)){
cljs.core.println.call(null);

cljs.core.println.call(null,"Errors:");
} else {
}

var seq__10836_10886 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.iterate.call(null,cljs.core.inc,(1)),error_results)));
var chunk__10837_10888 = null;
var count__10838_10889 = (0);
var i__10839_10890 = (0);
while(true){
if((i__10839_10890 < count__10838_10889)){
var vec__10872_10892 = cljs.core._nth.call(null,chunk__10837_10888,i__10839_10890);
var number_10893 = cljs.core.nth.call(null,vec__10872_10892,(0),null);
var result_10894 = cljs.core.nth.call(null,vec__10872_10892,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_10893,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_10894.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_10894.exception))));


var G__10896 = seq__10836_10886;
var G__10897 = chunk__10837_10888;
var G__10898 = count__10838_10889;
var G__10899 = (i__10839_10890 + (1));
seq__10836_10886 = G__10896;
chunk__10837_10888 = G__10897;
count__10838_10889 = G__10898;
i__10839_10890 = G__10899;
continue;
} else {
var temp__5804__auto___10901 = cljs.core.seq.call(null,seq__10836_10886);
if(temp__5804__auto___10901){
var seq__10836_10902__$1 = temp__5804__auto___10901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10836_10902__$1)){
var c__5525__auto___10904 = cljs.core.chunk_first.call(null,seq__10836_10902__$1);
var G__10905 = cljs.core.chunk_rest.call(null,seq__10836_10902__$1);
var G__10906 = c__5525__auto___10904;
var G__10907 = cljs.core.count.call(null,c__5525__auto___10904);
var G__10908 = (0);
seq__10836_10886 = G__10905;
chunk__10837_10888 = G__10906;
count__10838_10889 = G__10907;
i__10839_10890 = G__10908;
continue;
} else {
var vec__10881_10909 = cljs.core.first.call(null,seq__10836_10902__$1);
var number_10910 = cljs.core.nth.call(null,vec__10881_10909,(0),null);
var result_10911 = cljs.core.nth.call(null,vec__10881_10909,(1),null);
cljs.core.println.call(null);

cljs.core.println.call(null,speclj.reporting.indent.call(null,(1),number_10910,") ",speclj.reporting.red.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_10911.exception))));

cljs.core.println.call(null,speclj.reporting.grey.call(null,speclj.reporting.indent.call(null,2.5,speclj.reporting.stack_trace_str.call(null,result_10911.exception))));


var G__10912 = cljs.core.next.call(null,seq__10836_10902__$1);
var G__10913 = null;
var G__10914 = (0);
var G__10915 = (0);
seq__10836_10886 = G__10912;
chunk__10837_10888 = G__10913;
count__10838_10889 = G__10914;
i__10839_10890 = G__10915;
continue;
}
} else {
}
}
break;
}

return cljs.core.flush.call(null);
});
speclj.report.progress.print_duration = (function speclj$report$progress$print_duration(results){
cljs.core.println.call(null);

return cljs.core.println.call(null,"Finished in",speclj.platform.format_seconds.call(null,speclj.reporting.tally_time.call(null,results)),"seconds");
});
speclj.report.progress.color_fn_for = (function speclj$report$progress$color_fn_for(result_map){
if(cljs.core.not_EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map))))){
return speclj.reporting.red;
} else {
if(cljs.core.not_EQ_.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(result_map)))){
return speclj.reporting.yellow;
} else {
return speclj.reporting.green;

}
}
});
speclj.report.progress.apply_pending_tally = (function speclj$report$progress$apply_pending_tally(report,tally){
if((new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.call(null,report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(tally))," pending"].join(''));
} else {
return report;
}
});
speclj.report.progress.apply_error_tally = (function speclj$report$progress$apply_error_tally(report,tally){
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.call(null,report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tally))," errors"].join(''));
} else {
return report;
}
});
speclj.report.progress.describe_counts_for = (function speclj$report$progress$describe_counts_for(result_map){
var tally = cljs.core.zipmap.call(null,cljs.core.keys.call(null,result_map),cljs.core.map.call(null,cljs.core.count,cljs.core.vals.call(null,result_map)));
var always_on_counts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,tally)))," examples"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(tally))," failures"].join('')], null);
return clojure.string.join.call(null,", ",speclj.report.progress.apply_error_tally.call(null,speclj.report.progress.apply_pending_tally.call(null,always_on_counts,tally),tally));
});
speclj.report.progress.print_tally = (function speclj$report$progress$print_tally(result_map){
var color_fn = speclj.report.progress.color_fn_for.call(null,result_map);
return cljs.core.println.call(null,color_fn.call(null,speclj.report.progress.describe_counts_for.call(null,result_map)));
});
speclj.report.progress.print_summary = (function speclj$report$progress$print_summary(results){
var result_map = speclj.results.categorize.call(null,results);
speclj.report.progress.print_failures.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_pendings.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_errors.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_duration.call(null,results);

return speclj.report.progress.print_tally.call(null,result_map);
});

/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.progress.ProgressReporter = (function (){
});
(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (_this,message){
var self__ = this;
var _this__$1 = this;
cljs.core.println.call(null,message);

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (_this,_description){
var self__ = this;
var _this__$1 = this;
return null;
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.green.call(null,"."));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.yellow.call(null,"*"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.red.call(null,"F"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (_this,_result){
var self__ = this;
var _this__$1 = this;
cljs.core.print.call(null,speclj.reporting.red.call(null,"E"));

return cljs.core.flush.call(null);
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (_this,results){
var self__ = this;
var _this__$1 = this;
cljs.core.println.call(null);

return speclj.report.progress.print_summary.call(null,results);
}));

(speclj.report.progress.ProgressReporter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(speclj.report.progress.ProgressReporter.cljs$lang$type = true);

(speclj.report.progress.ProgressReporter.cljs$lang$ctorStr = "speclj.report.progress/ProgressReporter");

(speclj.report.progress.ProgressReporter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"speclj.report.progress/ProgressReporter");
}));

/**
 * Positional factory function for speclj.report.progress/ProgressReporter.
 */
speclj.report.progress.__GT_ProgressReporter = (function speclj$report$progress$__GT_ProgressReporter(){
return (new speclj.report.progress.ProgressReporter());
});

speclj.report.progress.new_progress_reporter = (function speclj$report$progress$new_progress_reporter(){
return (new speclj.report.progress.ProgressReporter());
});
goog.exportSymbol('speclj.report.progress.new_progress_reporter', speclj.report.progress.new_progress_reporter);
cljs.core.reset_BANG_.call(null,speclj.config.default_reporters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [speclj.report.progress.new_progress_reporter.call(null)], null));

//# sourceMappingURL=progress.js.map
