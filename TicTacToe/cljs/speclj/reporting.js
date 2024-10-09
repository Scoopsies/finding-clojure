// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__9833_SHARP_){
return p1__9833_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_9921 = (function (reporter,message){
var x__5350__auto__ = (((reporter == null))?null:reporter);
var m__5351__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,reporter,message);
} else {
var m__5349__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_9921.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_9929 = (function (this$,description){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,description);
} else {
var m__5349__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_9929.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_9934 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_9934.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_9940 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_9940.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_9958 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_9958.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_9962 = (function (this$,results){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,results);
} else {
var m__5349__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_9962.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_9969 = (function (this$,exception){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,exception);
} else {
var m__5349__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_9969.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__9924 = cljs.core.seq.call(null,reporters);
var chunk__9925 = null;
var count__9926 = (0);
var i__9927 = (0);
while(true){
if((i__9927 < count__9926)){
var reporter = cljs.core._nth.call(null,chunk__9925,i__9927);
speclj.reporting.report_pass.call(null,reporter,result);


var G__9987 = seq__9924;
var G__9988 = chunk__9925;
var G__9989 = count__9926;
var G__9990 = (i__9927 + (1));
seq__9924 = G__9987;
chunk__9925 = G__9988;
count__9926 = G__9989;
i__9927 = G__9990;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9924);
if(temp__5804__auto__){
var seq__9924__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9924__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9924__$1);
var G__10004 = cljs.core.chunk_rest.call(null,seq__9924__$1);
var G__10005 = c__5525__auto__;
var G__10006 = cljs.core.count.call(null,c__5525__auto__);
var G__10007 = (0);
seq__9924 = G__10004;
chunk__9925 = G__10005;
count__9926 = G__10006;
i__9927 = G__10007;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__9924__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__10015 = cljs.core.next.call(null,seq__9924__$1);
var G__10016 = null;
var G__10017 = (0);
var G__10018 = (0);
seq__9924 = G__10015;
chunk__9925 = G__10016;
count__9926 = G__10017;
i__9927 = G__10018;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__9942 = cljs.core.seq.call(null,reporters);
var chunk__9943 = null;
var count__9944 = (0);
var i__9945 = (0);
while(true){
if((i__9945 < count__9944)){
var reporter = cljs.core._nth.call(null,chunk__9943,i__9945);
speclj.reporting.report_fail.call(null,reporter,result);


var G__10025 = seq__9942;
var G__10026 = chunk__9943;
var G__10027 = count__9944;
var G__10028 = (i__9945 + (1));
seq__9942 = G__10025;
chunk__9943 = G__10026;
count__9944 = G__10027;
i__9945 = G__10028;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9942);
if(temp__5804__auto__){
var seq__9942__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9942__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9942__$1);
var G__10029 = cljs.core.chunk_rest.call(null,seq__9942__$1);
var G__10030 = c__5525__auto__;
var G__10031 = cljs.core.count.call(null,c__5525__auto__);
var G__10032 = (0);
seq__9942 = G__10029;
chunk__9943 = G__10030;
count__9944 = G__10031;
i__9945 = G__10032;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__9942__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__10034 = cljs.core.next.call(null,seq__9942__$1);
var G__10035 = null;
var G__10036 = (0);
var G__10037 = (0);
seq__9942 = G__10034;
chunk__9943 = G__10035;
count__9944 = G__10036;
i__9945 = G__10037;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__9965 = cljs.core.seq.call(null,reporters);
var chunk__9966 = null;
var count__9967 = (0);
var i__9968 = (0);
while(true){
if((i__9968 < count__9967)){
var reporter = cljs.core._nth.call(null,chunk__9966,i__9968);
speclj.reporting.report_pending.call(null,reporter,result);


var G__10041 = seq__9965;
var G__10042 = chunk__9966;
var G__10043 = count__9967;
var G__10044 = (i__9968 + (1));
seq__9965 = G__10041;
chunk__9966 = G__10042;
count__9967 = G__10043;
i__9968 = G__10044;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9965);
if(temp__5804__auto__){
var seq__9965__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9965__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__9965__$1);
var G__10047 = cljs.core.chunk_rest.call(null,seq__9965__$1);
var G__10048 = c__5525__auto__;
var G__10049 = cljs.core.count.call(null,c__5525__auto__);
var G__10050 = (0);
seq__9965 = G__10047;
chunk__9966 = G__10048;
count__9967 = G__10049;
i__9968 = G__10050;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__9965__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__10053 = cljs.core.next.call(null,seq__9965__$1);
var G__10054 = null;
var G__10055 = (0);
var G__10056 = (0);
seq__9965 = G__10053;
chunk__9966 = G__10054;
count__9967 = G__10055;
i__9968 = G__10056;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__10021 = cljs.core.seq.call(null,reporters);
var chunk__10022 = null;
var count__10023 = (0);
var i__10024 = (0);
while(true){
if((i__10024 < count__10023)){
var reporter = cljs.core._nth.call(null,chunk__10022,i__10024);
speclj.reporting.report_error.call(null,reporter,result);


var G__10057 = seq__10021;
var G__10058 = chunk__10022;
var G__10059 = count__10023;
var G__10060 = (i__10024 + (1));
seq__10021 = G__10057;
chunk__10022 = G__10058;
count__10023 = G__10059;
i__10024 = G__10060;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10021);
if(temp__5804__auto__){
var seq__10021__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10021__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10021__$1);
var G__10061 = cljs.core.chunk_rest.call(null,seq__10021__$1);
var G__10062 = c__5525__auto__;
var G__10063 = cljs.core.count.call(null,c__5525__auto__);
var G__10064 = (0);
seq__10021 = G__10061;
chunk__10022 = G__10062;
count__10023 = G__10063;
i__10024 = G__10064;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__10021__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__10065 = cljs.core.next.call(null,seq__10021__$1);
var G__10066 = null;
var G__10067 = (0);
var G__10068 = (0);
seq__10021 = G__10065;
chunk__10022 = G__10066;
count__10023 = G__10067;
i__10024 = G__10068;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_10085 = speclj.platform.stack_trace.call(null,exception);
var elides_10086 = (0);
while(true){
if(cljs.core.seq.call(null,levels_10085)){
var level_10088 = cljs.core.first.call(null,levels_10085);
if(speclj.platform.elide_level_QMARK_.call(null,level_10088)){
var G__10089 = cljs.core.rest.call(null,levels_10085);
var G__10090 = (elides_10086 + (1));
levels_10085 = G__10089;
elides_10086 = G__10090;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_10086);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_10088));

var G__10092 = cljs.core.rest.call(null,levels_10085);
var G__10093 = (0);
levels_10085 = G__10092;
elides_10086 = G__10093;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_10086);
}
break;
}

var temp__5802__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5802__auto__)){
var cause = temp__5802__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10094_10103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10095_10105 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10096_10106 = true;
var _STAR_print_fn_STAR__temp_val__10097_10107 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10096_10106);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10097_10107);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10095_10105);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10094_10103);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10116 = arguments.length;
var i__5727__auto___10117 = (0);
while(true){
if((i__5727__auto___10117 < len__5726__auto___10116)){
args__5732__auto__.push((arguments[i__5727__auto___10117]));

var G__10118 = (i__5727__auto___10117 + (1));
i__5727__auto___10117 = G__10118;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__10101_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10101_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq10102){
var G__10104 = cljs.core.first.call(null,seq10102);
var seq10102__$1 = cljs.core.next.call(null,seq10102);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10104,seq10102__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___10187 = arguments.length;
var i__5727__auto___10193 = (0);
while(true){
if((i__5727__auto___10193 < len__5726__auto___10187)){
args__5732__auto__.push((arguments[i__5727__auto___10193]));

var G__10195 = (i__5727__auto___10193 + (1));
i__5727__auto___10193 = G__10195;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq10113){
var G__10114 = cljs.core.first.call(null,seq10113);
var seq10113__$1 = cljs.core.next.call(null,seq10113);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10114,seq10113__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__10155 = cljs.core.seq.call(null,reporters);
var chunk__10156 = null;
var count__10157 = (0);
var i__10158 = (0);
while(true){
if((i__10158 < count__10157)){
var reporter = cljs.core._nth.call(null,chunk__10156,i__10158);
speclj.reporting.report_description.call(null,reporter,description);


var G__10218 = seq__10155;
var G__10219 = chunk__10156;
var G__10220 = count__10157;
var G__10221 = (i__10158 + (1));
seq__10155 = G__10218;
chunk__10156 = G__10219;
count__10157 = G__10220;
i__10158 = G__10221;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10155);
if(temp__5804__auto__){
var seq__10155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10155__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10155__$1);
var G__10224 = cljs.core.chunk_rest.call(null,seq__10155__$1);
var G__10225 = c__5525__auto__;
var G__10226 = cljs.core.count.call(null,c__5525__auto__);
var G__10227 = (0);
seq__10155 = G__10224;
chunk__10156 = G__10225;
count__10157 = G__10226;
i__10158 = G__10227;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__10155__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__10229 = cljs.core.next.call(null,seq__10155__$1);
var G__10230 = null;
var G__10231 = (0);
var G__10232 = (0);
seq__10155 = G__10229;
chunk__10156 = G__10230;
count__10157 = G__10231;
i__10158 = G__10232;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__10208 = cljs.core.seq.call(null,reporters);
var chunk__10209 = null;
var count__10210 = (0);
var i__10211 = (0);
while(true){
if((i__10211 < count__10210)){
var reporter = cljs.core._nth.call(null,chunk__10209,i__10211);
speclj.reporting.report_runs.call(null,reporter,results);


var G__10250 = seq__10208;
var G__10251 = chunk__10209;
var G__10252 = count__10210;
var G__10253 = (i__10211 + (1));
seq__10208 = G__10250;
chunk__10209 = G__10251;
count__10210 = G__10252;
i__10211 = G__10253;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10208);
if(temp__5804__auto__){
var seq__10208__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10208__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10208__$1);
var G__10257 = cljs.core.chunk_rest.call(null,seq__10208__$1);
var G__10258 = c__5525__auto__;
var G__10259 = cljs.core.count.call(null,c__5525__auto__);
var G__10260 = (0);
seq__10208 = G__10257;
chunk__10209 = G__10258;
count__10210 = G__10259;
i__10211 = G__10260;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__10208__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__10272 = cljs.core.next.call(null,seq__10208__$1);
var G__10273 = null;
var G__10274 = (0);
var G__10275 = (0);
seq__10208 = G__10272;
chunk__10209 = G__10273;
count__10210 = G__10274;
i__10211 = G__10275;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__10243 = cljs.core.seq.call(null,reporters);
var chunk__10244 = null;
var count__10245 = (0);
var i__10246 = (0);
while(true){
if((i__10246 < count__10245)){
var reporter = cljs.core._nth.call(null,chunk__10244,i__10246);
speclj.reporting.report_message.call(null,reporter,message);


var G__10298 = seq__10243;
var G__10299 = chunk__10244;
var G__10300 = count__10245;
var G__10301 = (i__10246 + (1));
seq__10243 = G__10298;
chunk__10244 = G__10299;
count__10245 = G__10300;
i__10246 = G__10301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10243);
if(temp__5804__auto__){
var seq__10243__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10243__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10243__$1);
var G__10303 = cljs.core.chunk_rest.call(null,seq__10243__$1);
var G__10304 = c__5525__auto__;
var G__10305 = cljs.core.count.call(null,c__5525__auto__);
var G__10306 = (0);
seq__10243 = G__10303;
chunk__10244 = G__10304;
count__10245 = G__10305;
i__10246 = G__10306;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__10243__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__10309 = cljs.core.next.call(null,seq__10243__$1);
var G__10310 = null;
var G__10311 = (0);
var G__10312 = (0);
seq__10243 = G__10309;
chunk__10244 = G__10310;
count__10245 = G__10311;
i__10246 = G__10312;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__10294 = cljs.core.seq.call(null,reporters);
var chunk__10295 = null;
var count__10296 = (0);
var i__10297 = (0);
while(true){
if((i__10297 < count__10296)){
var reporter = cljs.core._nth.call(null,chunk__10295,i__10297);
speclj.reporting.report_error.call(null,reporter,exception);


var G__10351 = seq__10294;
var G__10352 = chunk__10295;
var G__10353 = count__10296;
var G__10354 = (i__10297 + (1));
seq__10294 = G__10351;
chunk__10295 = G__10352;
count__10296 = G__10353;
i__10297 = G__10354;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10294);
if(temp__5804__auto__){
var seq__10294__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10294__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__10294__$1);
var G__10361 = cljs.core.chunk_rest.call(null,seq__10294__$1);
var G__10362 = c__5525__auto__;
var G__10363 = cljs.core.count.call(null,c__5525__auto__);
var G__10364 = (0);
seq__10294 = G__10361;
chunk__10295 = G__10362;
count__10296 = G__10363;
i__10297 = G__10364;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__10294__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__10370 = cljs.core.next.call(null,seq__10294__$1);
var G__10371 = null;
var G__10372 = (0);
var G__10373 = (0);
seq__10294 = G__10370;
chunk__10295 = G__10371;
count__10296 = G__10372;
i__10297 = G__10373;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
