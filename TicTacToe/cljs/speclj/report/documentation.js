// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.report.documentation');
goog.require('cljs.core');
goog.require('speclj.platform');
goog.require('speclj.report.progress');
goog.require('speclj.reporting');
speclj.report.documentation.level_of = (function speclj$report$documentation$level_of(component){
var component__$1 = cljs.core.deref.call(null,component.parent);
var level = (0);
while(true){
if(cljs.core.truth_(component__$1)){
var G__14869 = cljs.core.deref.call(null,component__$1.parent);
var G__14870 = (level + (1));
component__$1 = G__14869;
level = G__14870;
continue;
} else {
return level;
}
break;
}
});
speclj.report.documentation.maybe_focused = (function speclj$report$documentation$maybe_focused(component,text){
if(cljs.core.not.call(null,cljs.core.deref.call(null,component.is_focused_QMARK_))){
return text;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.reporting.yellow.call(null,"[FOCUS]"))].join('');
}
});

/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.documentation.DocumentationReporter = (function (){
});
(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (_this,message){
var self__ = this;
var _this__$1 = this;
cljs.core.println.call(null,message);

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (_this,description){
var self__ = this;
var _this__$1 = this;
var level = speclj.report.documentation.level_of.call(null,description);
if((level === (0))){
cljs.core.println.call(null);
} else {
}

cljs.core.println.call(null,speclj.report.documentation.maybe_focused.call(null,description,cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.reporting.indent.call(null,level,description.name))));

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (_this,result){
var self__ = this;
var _this__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of.call(null,characteristic);
cljs.core.println.call(null,speclj.report.documentation.maybe_focused.call(null,characteristic,speclj.reporting.green.call(null,speclj.reporting.indent.call(null,(level - (1)),"- ",characteristic.name))));

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (_this,result){
var self__ = this;
var _this__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of.call(null,characteristic);
cljs.core.println.call(null,speclj.reporting.yellow.call(null,speclj.reporting.indent.call(null,(level - (1)),"- ",characteristic.name," (PENDING: ",speclj.platform.error_message.call(null,result.exception),")")));

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (_this,result){
var self__ = this;
var _this__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of.call(null,characteristic);
cljs.core.println.call(null,speclj.report.documentation.maybe_focused.call(null,characteristic,speclj.reporting.red.call(null,speclj.reporting.indent.call(null,(level - (1)),"- ",characteristic.name," (FAILED)"))));

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (_this,result){
var self__ = this;
var _this__$1 = this;
return cljs.core.println.call(null,speclj.reporting.red.call(null,result.exception.toString()));
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (_this,results){
var self__ = this;
var _this__$1 = this;
return speclj.report.progress.print_summary.call(null,results);
}));

(speclj.report.documentation.DocumentationReporter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(speclj.report.documentation.DocumentationReporter.cljs$lang$type = true);

(speclj.report.documentation.DocumentationReporter.cljs$lang$ctorStr = "speclj.report.documentation/DocumentationReporter");

(speclj.report.documentation.DocumentationReporter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"speclj.report.documentation/DocumentationReporter");
}));

/**
 * Positional factory function for speclj.report.documentation/DocumentationReporter.
 */
speclj.report.documentation.__GT_DocumentationReporter = (function speclj$report$documentation$__GT_DocumentationReporter(){
return (new speclj.report.documentation.DocumentationReporter());
});

speclj.report.documentation.new_documentation_reporter = (function speclj$report$documentation$new_documentation_reporter(){
return (new speclj.report.documentation.DocumentationReporter());
});
goog.exportSymbol('speclj.report.documentation.new_documentation_reporter', speclj.report.documentation.new_documentation_reporter);

//# sourceMappingURL=documentation.js.map
