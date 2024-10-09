// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('tic_tac_toe.data.data_ioc');
goog.require('cljs.core');
goog.require('clojure.edn');
tic_tac_toe.data.data_ioc.data_store = cljs.core.atom.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430));

/**
 * @interface
 */
tic_tac_toe.data.data_ioc.DataIO = function(){};

var tic_tac_toe$data$data_ioc$DataIO$read_data$dyn_6621 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (tic_tac_toe.data.data_ioc.read_data[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (tic_tac_toe.data.data_ioc.read_data["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DataIO.read-data",this$);
}
}
});
tic_tac_toe.data.data_ioc.read_data = (function tic_tac_toe$data$data_ioc$read_data(this$){
if((((!((this$ == null)))) && ((!((this$.tic_tac_toe$data$data_ioc$DataIO$read_data$arity$1 == null)))))){
return this$.tic_tac_toe$data$data_ioc$DataIO$read_data$arity$1(this$);
} else {
return tic_tac_toe$data$data_ioc$DataIO$read_data$dyn_6621.call(null,this$);
}
});

var tic_tac_toe$data$data_ioc$DataIO$write_data$dyn_6622 = (function (this$,content){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (tic_tac_toe.data.data_ioc.write_data[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,content);
} else {
var m__5349__auto__ = (tic_tac_toe.data.data_ioc.write_data["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,content);
} else {
throw cljs.core.missing_protocol.call(null,"DataIO.write-data",this$);
}
}
});
tic_tac_toe.data.data_ioc.write_data = (function tic_tac_toe$data$data_ioc$write_data(this$,content){
if((((!((this$ == null)))) && ((!((this$.tic_tac_toe$data$data_ioc$DataIO$write_data$arity$2 == null)))))){
return this$.tic_tac_toe$data$data_ioc$DataIO$write_data$arity$2(this$,content);
} else {
return tic_tac_toe$data$data_ioc$DataIO$write_data$dyn_6622.call(null,this$,content);
}
});

var tic_tac_toe$data$data_ioc$DataIO$get_last$dyn_6623 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (tic_tac_toe.data.data_ioc.get_last[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (tic_tac_toe.data.data_ioc.get_last["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DataIO.get-last",this$);
}
}
});
tic_tac_toe.data.data_ioc.get_last = (function tic_tac_toe$data$data_ioc$get_last(this$){
if((((!((this$ == null)))) && ((!((this$.tic_tac_toe$data$data_ioc$DataIO$get_last$arity$1 == null)))))){
return this$.tic_tac_toe$data$data_ioc$DataIO$get_last$arity$1(this$);
} else {
return tic_tac_toe$data$data_ioc$DataIO$get_last$dyn_6623.call(null,this$);
}
});

var tic_tac_toe$data$data_ioc$DataIO$get_new_id$dyn_6624 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (tic_tac_toe.data.data_ioc.get_new_id[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$);
} else {
var m__5349__auto__ = (tic_tac_toe.data.data_ioc.get_new_id["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DataIO.get-new-id",this$);
}
}
});
tic_tac_toe.data.data_ioc.get_new_id = (function tic_tac_toe$data$data_ioc$get_new_id(this$){
if((((!((this$ == null)))) && ((!((this$.tic_tac_toe$data$data_ioc$DataIO$get_new_id$arity$1 == null)))))){
return this$.tic_tac_toe$data$data_ioc$DataIO$get_new_id$arity$1(this$);
} else {
return tic_tac_toe$data$data_ioc$DataIO$get_new_id$dyn_6624.call(null,this$);
}
});

var tic_tac_toe$data$data_ioc$DataIO$add_data$dyn_6626 = (function (this$,content){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (tic_tac_toe.data.data_ioc.add_data[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,content);
} else {
var m__5349__auto__ = (tic_tac_toe.data.data_ioc.add_data["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,content);
} else {
throw cljs.core.missing_protocol.call(null,"DataIO.add-data",this$);
}
}
});
tic_tac_toe.data.data_ioc.add_data = (function tic_tac_toe$data$data_ioc$add_data(this$,content){
if((((!((this$ == null)))) && ((!((this$.tic_tac_toe$data$data_ioc$DataIO$add_data$arity$2 == null)))))){
return this$.tic_tac_toe$data$data_ioc$DataIO$add_data$arity$2(this$,content);
} else {
return tic_tac_toe$data$data_ioc$DataIO$add_data$dyn_6626.call(null,this$,content);
}
});

var tic_tac_toe$data$data_ioc$DataIO$update_last$dyn_6627 = (function (this$,content){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (tic_tac_toe.data.data_ioc.update_last[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,content);
} else {
var m__5349__auto__ = (tic_tac_toe.data.data_ioc.update_last["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,content);
} else {
throw cljs.core.missing_protocol.call(null,"DataIO.update-last",this$);
}
}
});
tic_tac_toe.data.data_ioc.update_last = (function tic_tac_toe$data$data_ioc$update_last(this$,content){
if((((!((this$ == null)))) && ((!((this$.tic_tac_toe$data$data_ioc$DataIO$update_last$arity$2 == null)))))){
return this$.tic_tac_toe$data$data_ioc$DataIO$update_last$arity$2(this$,content);
} else {
return tic_tac_toe$data$data_ioc$DataIO$update_last$dyn_6627.call(null,this$,content);
}
});

tic_tac_toe.data.data_ioc.memory = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);

/**
* @constructor
 * @implements {tic_tac_toe.data.data_ioc.DataIO}
*/
tic_tac_toe.data.data_ioc.MemoryIO = (function (){
});
(tic_tac_toe.data.data_ioc.MemoryIO.prototype.tic_tac_toe$data$data_ioc$DataIO$ = cljs.core.PROTOCOL_SENTINEL);

(tic_tac_toe.data.data_ioc.MemoryIO.prototype.tic_tac_toe$data$data_ioc$DataIO$read_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,tic_tac_toe.data.data_ioc.memory);
}));

(tic_tac_toe.data.data_ioc.MemoryIO.prototype.tic_tac_toe$data$data_ioc$DataIO$write_data$arity$2 = (function (_,content){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,tic_tac_toe.data.data_ioc.memory,content);
}));

(tic_tac_toe.data.data_ioc.MemoryIO.prototype.tic_tac_toe$data$data_ioc$DataIO$get_last$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.last.call(null,cljs.core.deref.call(null,tic_tac_toe.data.data_ioc.memory));
}));

(tic_tac_toe.data.data_ioc.MemoryIO.prototype.tic_tac_toe$data$data_ioc$DataIO$get_new_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var last = tic_tac_toe.data.data_ioc.get_last.call(null,this$__$1);
var map__6625 = last;
var map__6625__$1 = cljs.core.__destructure_map.call(null,map__6625);
var id = cljs.core.get.call(null,map__6625__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(last)){
return (id + (1));
} else {
return (1);
}
}));

(tic_tac_toe.data.data_ioc.MemoryIO.prototype.tic_tac_toe$data$data_ioc$DataIO$add_data$arity$2 = (function (this$,content){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,tic_tac_toe.data.data_ioc.memory,cljs.core.conj,cljs.core.assoc.call(null,content,new cljs.core.Keyword(null,"id","id",-1388402092),tic_tac_toe.data.data_ioc.get_new_id.call(null,this$__$1)));
}));

(tic_tac_toe.data.data_ioc.MemoryIO.prototype.tic_tac_toe$data$data_ioc$DataIO$update_last$arity$2 = (function (this$,content){
var self__ = this;
var this$__$1 = this;
var popped_data = cljs.core.pop.call(null,tic_tac_toe.data.data_ioc.read_data.call(null,this$__$1));
tic_tac_toe.data.data_ioc.write_data.call(null,this$__$1,popped_data);

return tic_tac_toe.data.data_ioc.add_data.call(null,this$__$1,content);
}));

(tic_tac_toe.data.data_ioc.MemoryIO.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(tic_tac_toe.data.data_ioc.MemoryIO.cljs$lang$type = true);

(tic_tac_toe.data.data_ioc.MemoryIO.cljs$lang$ctorStr = "tic-tac-toe.data.data-ioc/MemoryIO");

(tic_tac_toe.data.data_ioc.MemoryIO.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"tic-tac-toe.data.data-ioc/MemoryIO");
}));

/**
 * Positional factory function for tic-tac-toe.data.data-ioc/MemoryIO.
 */
tic_tac_toe.data.data_ioc.__GT_MemoryIO = (function tic_tac_toe$data$data_ioc$__GT_MemoryIO(){
return (new tic_tac_toe.data.data_ioc.MemoryIO());
});

if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.data !== 'undefined') && (typeof tic_tac_toe.data.data_ioc !== 'undefined') && (typeof tic_tac_toe.data.data_ioc.__GT_data_io !== 'undefined')){
} else {
tic_tac_toe.data.data_ioc.__GT_data_io = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.data.data-ioc","->data-io"),(function (){
return cljs.core.deref.call(null,tic_tac_toe.data.data_ioc.data_store);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,tic_tac_toe.data.data_ioc.__GT_data_io,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (){
return tic_tac_toe.data.data_ioc.__GT_MemoryIO.call(null);
}));
tic_tac_toe.data.data_ioc.read_db = (function tic_tac_toe$data$data_ioc$read_db(){
return tic_tac_toe.data.data_ioc.read_data.call(null,tic_tac_toe.data.data_ioc.__GT_data_io.call(null));
});
tic_tac_toe.data.data_ioc.write_db = (function tic_tac_toe$data$data_ioc$write_db(content){
return tic_tac_toe.data.data_ioc.write_data.call(null,tic_tac_toe.data.data_ioc.__GT_data_io.call(null),content);
});
tic_tac_toe.data.data_ioc.pull_last_db = (function tic_tac_toe$data$data_ioc$pull_last_db(){
return tic_tac_toe.data.data_ioc.get_last.call(null,tic_tac_toe.data.data_ioc.__GT_data_io.call(null));
});
tic_tac_toe.data.data_ioc.__GT_new_id = (function tic_tac_toe$data$data_ioc$__GT_new_id(){
return tic_tac_toe.data.data_ioc.get_new_id.call(null,tic_tac_toe.data.data_ioc.__GT_data_io.call(null));
});
tic_tac_toe.data.data_ioc.add_db = (function tic_tac_toe$data$data_ioc$add_db(content){
return tic_tac_toe.data.data_ioc.add_data.call(null,tic_tac_toe.data.data_ioc.__GT_data_io.call(null),content);
});
tic_tac_toe.data.data_ioc.update_db = (function tic_tac_toe$data$data_ioc$update_db(content){
return tic_tac_toe.data.data_ioc.update_last.call(null,tic_tac_toe.data.data_ioc.__GT_data_io.call(null),content);
});

//# sourceMappingURL=data_ioc.js.map
