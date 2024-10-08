// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('c3kit.apron.schema');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('com.cognitect.transit.types');
goog.require('clojure.walk');
c3kit.apron.schema.coerce_ex = (function c3kit$apron$schema$coerce_ex(value,type){
var value_str = cljs.core.pr_str.call(null,value);
var value_str__$1 = ((((50) < ((value_str).length)))?[cljs.core.subs.call(null,value_str,(0),(45)),"..."].join(''):value_str);
return cljs.core.ex_info.call(null,["can't coerce ",value_str__$1," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),type], null));
});
c3kit.apron.schema.validation_ex = (function c3kit$apron$schema$validation_ex(message,value){
return cljs.core.ex_info.call(null,(function (){var or__5002__auto__ = message;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "is invalid";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
c3kit.apron.schema.date = Date;
c3kit.apron.schema.present_QMARK_ = (function c3kit$apron$schema$present_QMARK_(v){
return (!((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_.call(null,v)))))));
});
c3kit.apron.schema.required = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),c3kit.apron.schema.present_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"is required"], null);
c3kit.apron.schema.nil_or = (function c3kit$apron$schema$nil_or(f){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/nil-or deprecated.  Use nil?-or instead"], null);
}),null)),null,(35),null);

return cljs.core.some_fn.call(null,cljs.core.nil_QMARK_,f);
});
c3kit.apron.schema.nil_QMARK__or = (function c3kit$apron$schema$nil_QMARK__or(f){
return cljs.core.some_fn.call(null,cljs.core.nil_QMARK_,f);
});
c3kit.apron.schema.email_pattern = /[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/;
c3kit.apron.schema.email_QMARK_ = (function c3kit$apron$schema$email_QMARK_(value){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,c3kit.apron.schema.email_pattern,value));
});
c3kit.apron.schema.bigdec_QMARK_ = (function c3kit$apron$schema$bigdec_QMARK_(v){
return typeof v === 'number';
});
c3kit.apron.schema.uri_QMARK_ = (function c3kit$apron$schema$uri_QMARK_(value){
return typeof value === 'string';
});
c3kit.apron.schema.is_enum_QMARK_ = (function c3kit$apron$schema$is_enum_QMARK_(enum$){
var enum_name = cljs.core.name.call(null,new cljs.core.Keyword(null,"enum","enum",1679018432).cljs$core$IFn$_invoke$arity$1(enum$));
var enum_set = c3kit.apron.corec.map_set.call(null,(function (p1__14052_SHARP_){
return cljs.core.keyword.call(null,enum_name,cljs.core.name.call(null,p1__14052_SHARP_));
}),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(enum$));
return (function (value){
return (((value == null)) || (cljs.core.contains_QMARK_.call(null,enum_set,value)));
});
});
c3kit.apron.schema.parse_BANG_ = (function c3kit$apron$schema$parse_BANG_(f,v){
var result = f.call(null,v);
if(cljs.core.truth_(isNaN(result))){
throw Error("parsed NaN");
} else {
return result;
}
});
c3kit.apron.schema.__GT_boolean = (function c3kit$apron$schema$__GT_boolean(value){
if((value == null)){
return null;
} else {
if(cljs.core.boolean_QMARK_.call(null,value)){
return value;
} else {
if(typeof value === 'string'){
return cljs.core.not_EQ_.call(null,"false",clojure.string.lower_case.call(null,value));
} else {
return cljs.core.boolean$.call(null,value);

}
}
}
});
c3kit.apron.schema.__GT_string = (function c3kit$apron$schema$__GT_string(value){
var G__14053 = value;
if((G__14053 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14053);
}
});
c3kit.apron.schema.str_or_nil = (function c3kit$apron$schema$str_or_nil(v){
return c3kit.apron.schema.__GT_string.call(null,v);
});
c3kit.apron.schema.__GT_keyword = (function c3kit$apron$schema$__GT_keyword(value){
if((value == null)){
return null;
} else {
if((value instanceof cljs.core.Keyword)){
return value;
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
if(clojure.string.starts_with_QMARK_.call(null,s,":")){
return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else {
return cljs.core.keyword.call(null,s);
}

}
}
});
c3kit.apron.schema.__GT_float = (function c3kit$apron$schema$__GT_float(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_.call(null,parseFloat,v);
}catch (e14054){var _ = e14054;
throw c3kit.apron.schema.coerce_ex.call(null,v,"float");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if(c3kit.apron.schema.bigdec_QMARK_.call(null,v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"float");

}
}
}
}
}
}
});
c3kit.apron.schema.__GT_int = (function c3kit$apron$schema$__GT_int(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_.call(null,parseInt,v);
}catch (e14055){var _ = e14055;
throw c3kit.apron.schema.coerce_ex.call(null,v,"int");
}}
} else {
if((v instanceof cljs.core.Keyword)){
throw c3kit.apron.schema.coerce_ex.call(null,v,"int");
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
return v;
} else {
if(typeof v === 'number'){
return cljs.core.long$.call(null,v);
} else {
if(c3kit.apron.schema.bigdec_QMARK_.call(null,v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"int");

}
}
}
}
}
}
}
});
c3kit.apron.schema.__GT_bigdec = (function c3kit$apron$schema$__GT_bigdec(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_.call(null,parseFloat,v);
}catch (e14056){var _ = e14056;
throw c3kit.apron.schema.coerce_ex.call(null,v,"bigdec");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"bigdec");

}
}
}
}
}
});
c3kit.apron.schema.__GT_date = (function c3kit$apron$schema$__GT_date(v){
if((v == null)){
return null;
} else {
if((v instanceof c3kit.apron.schema.date)){
return v;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
var G__14057 = (new Date());
G__14057.setTime(v);

return G__14057;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_.call(null,v,"#inst")){
return clojure.edn.read_string.call(null,v);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_sql_date = (function c3kit$apron$schema$__GT_sql_date(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
var G__14058 = (new Date());
G__14058.setTime(v);

return G__14058;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_.call(null,v,"#inst")){
return clojure.edn.read_string.call(null,v);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"sql-date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"sql-date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_timestamp = (function c3kit$apron$schema$__GT_timestamp(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_.call(null,v)){
var G__14059 = (new Date());
G__14059.setTime(v);

return G__14059;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_.call(null,v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_.call(null,v,"#inst")){
return clojure.edn.read_string.call(null,v);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"timestamp");

}
}
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"timestamp");

}
}
}
}
}
});
c3kit.apron.schema.__GT_uri = (function c3kit$apron$schema$__GT_uri(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"uri");

}
}
});
c3kit.apron.schema.__GT_map = (function c3kit$apron$schema$__GT_map(m){
if((m == null)){
return m;
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return m;
} else {
if(cljs.core.sequential_QMARK_.call(null,m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,m,"map");

}
}
}
});
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
c3kit.apron.schema.__GT_uuid = (function c3kit$apron$schema$__GT_uuid(v){
if((v == null)){
return null;
} else {
if(cljs.core.uuid_QMARK_.call(null,v)){
return v;
} else {
if(typeof v === 'string'){
return cljs.core.uuid.call(null,v);
} else {
throw c3kit.apron.schema.coerce_ex.call(null,v,"uuid");

}
}
}
});
c3kit.apron.schema.multiple_QMARK_ = (function c3kit$apron$schema$multiple_QMARK_(thing){
return ((cljs.core.sequential_QMARK_.call(null,thing)) || (cljs.core.set_QMARK_.call(null,thing)));
});
c3kit.apron.schema.__GT_vec = (function c3kit$apron$schema$__GT_vec(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_.call(null,v)){
return cljs.core.vec.call(null,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
c3kit.apron.schema.__GT_seq = (function c3kit$apron$schema$__GT_seq(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_.call(null,v)){
return v;
} else {
return (new cljs.core.List(null,v,null,(1),null));

}
}
});
c3kit.apron.schema.type_validators = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"kw-ref","kw-ref",1430852082),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"any","any",1705907423)],[c3kit.apron.schema.nil_QMARK__or.call(null,(function (p1__14069_SHARP_){
return (p1__14069_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.number_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.ifn_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,(function (p1__14070_SHARP_){
return (p1__14070_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.integer_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.number_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.string_QMARK_),cljs.core.constantly.call(null,true),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,c3kit.apron.schema.bigdec_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,c3kit.apron.schema.uri_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.uuid_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,c3kit.apron.schema.multiple_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,(function (p1__14072_SHARP_){
return (p1__14072_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.boolean_QMARK_),c3kit.apron.schema.nil_QMARK__or.call(null,cljs.core.map_QMARK_),cljs.core.constantly.call(null,true)]);
c3kit.apron.schema.type_coercers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"long","long",-171452093),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"kw-ref","kw-ref",1430852082),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"any","any",1705907423)],[c3kit.apron.schema.__GT_sql_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,cljs.core.identity,c3kit.apron.schema.__GT_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,c3kit.apron.schema.__GT_string,cljs.core.identity,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_bigdec,c3kit.apron.schema.__GT_uri,c3kit.apron.schema.__GT_uuid,cljs.core.identity,c3kit.apron.schema.__GT_timestamp,c3kit.apron.schema.__GT_boolean,c3kit.apron.schema.__GT_map,cljs.core.identity]);
c3kit.apron.schema.valid_types = cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.keys.call(null,c3kit.apron.schema.type_coercers),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"one-of","one-of",144367098)], null)));
c3kit.apron.schema.normalize_seq_shorthand = (function c3kit$apron$schema$normalize_seq_shorthand(p__14083){
var map__14084 = p__14083;
var map__14084__$1 = cljs.core.__destructure_map.call(null,map__14084);
var spec = map__14084__$1;
var type = cljs.core.get.call(null,map__14084__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,type))){
throw cljs.core.ex_info.call(null,"seq shorthand type must contain 1 type",spec);
} else {
}

var spec_type = cljs.core.first.call(null,type);
var base_spec_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"validate","validate",-201300827),null,new cljs.core.Keyword(null,"present","present",-1224645465),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"validations","validations",1347149461),null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null);
if((spec_type instanceof cljs.core.Keyword)){
var entry_spec = cljs.core.assoc.call(null,cljs.core.select_keys.call(null,spec,base_spec_keys),new cljs.core.Keyword(null,"type","type",1174270348),spec_type);
return cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.dissoc,spec,base_spec_keys),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),entry_spec);
} else {
if(((cljs.core.map_QMARK_.call(null,spec_type)) && (cljs.core.contains_QMARK_.call(null,spec_type,new cljs.core.Keyword(null,"type","type",1174270348))))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),c3kit.apron.schema.normalize_spec.call(null,spec_type));
} else {
var entry_spec = c3kit.apron.schema.normalize_spec.call(null,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,spec,base_spec_keys),new cljs.core.Keyword(null,"type","type",1174270348),spec_type));
return cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.dissoc,spec,base_spec_keys),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),entry_spec);

}
}
});
c3kit.apron.schema.normalize_map_shorthand = (function c3kit$apron$schema$normalize_map_shorthand(p__14086){
var map__14087 = p__14086;
var map__14087__$1 = cljs.core.__destructure_map.call(null,map__14087);
var spec = map__14087__$1;
var type = cljs.core.get.call(null,map__14087__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"schema","schema",-1582001791),type);
});
c3kit.apron.schema.normalize_set_shorthand = (function c3kit$apron$schema$normalize_set_shorthand(p__14091){
var map__14092 = p__14091;
var map__14092__$1 = cljs.core.__destructure_map.call(null,map__14092);
var spec = map__14092__$1;
var type = cljs.core.get.call(null,map__14092__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.mapv.call(null,c3kit.apron.schema.normalize_spec,type));
});
/**
 * Returns true if the schema-or-spec has been normalized, false otherwise.
 */
c3kit.apron.schema.normalized_QMARK_ = (function c3kit$apron$schema$normalized_QMARK_(schema_or_spec){
return new cljs.core.Keyword("c3kit.apron.schema","normalized?","c3kit.apron.schema/normalized?",-968870980).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema_or_spec));
});
c3kit.apron.schema.normal_spec_form_QMARK_ = (function c3kit$apron$schema$normal_spec_form_QMARK_(spec){
return ((cljs.core.map_QMARK_.call(null,spec)) && ((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec) instanceof cljs.core.Keyword)));
});
/**
 * If the spec is using a shorthand, it will be expanded.
 */
c3kit.apron.schema.normalize_spec = (function c3kit$apron$schema$normalize_spec(spec){
if(cljs.core.truth_(c3kit.apron.schema.normalized_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.core.with_meta.call(null,((c3kit.apron.schema.normal_spec_form_QMARK_.call(null,spec))?spec:(((spec instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),spec], null):((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_seq_shorthand.call(null,spec):((cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_map_shorthand.call(null,spec):((cljs.core.set_QMARK_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)))?c3kit.apron.schema.normalize_set_shorthand.call(null,spec):(function(){throw cljs.core.ex_info.call(null,["invalid spec: ",cljs.core.pr_str.call(null,spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec], null))})()
))))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("c3kit.apron.schema","normalized?","c3kit.apron.schema/normalized?",-968870980),true], null));
}
});
/**
 * Returns the schema with all shorthand specs expanded.
 */
c3kit.apron.schema.normalize_schema = (function c3kit$apron$schema$normalize_schema(schema){
if(cljs.core.truth_(c3kit.apron.schema.normalized_QMARK_.call(null,schema))){
return schema;
} else {
return cljs.core.with_meta.call(null,cljs.core.merge.call(null,cljs.core.update_vals.call(null,cljs.core.dissoc.call(null,schema,new cljs.core.Keyword(null,"*","*",-1294732318)),c3kit.apron.schema.normalize_spec),cljs.core.select_keys.call(null,schema,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318)], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("c3kit.apron.schema","normalized?","c3kit.apron.schema/normalized?",-968870980),true], null));
}
});
/**
 * Used as a :present value to remove the entry from presentation
 */
c3kit.apron.schema.omit = cljs.core.constantly.call(null,null);
c3kit.apron.schema.kind = (function c3kit$apron$schema$kind(key){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"value","value",305978217),key,new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__14094_SHARP_){
return (((p1__14094_SHARP_ == null)) || (cljs.core._EQ_.call(null,key,p1__14094_SHARP_)));
})], null),new cljs.core.Keyword(null,"coerce","coerce",1917884504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__14095_SHARP_){
var or__5002__auto__ = p1__14095_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return key;
}
})], null),new cljs.core.Keyword(null,"message","message",-406056002),["mismatch; must be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null);
});
c3kit.apron.schema.id = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ref","ref",1289896967)], null);
c3kit.apron.schema.type_coercer_BANG_ = (function c3kit$apron$schema$type_coercer_BANG_(type){
var or__5002__auto__ = cljs.core.get.call(null,c3kit.apron.schema.type_coercers,type);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.call(null,["unhandled coercion type: ",cljs.core.pr_str.call(null,type)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coerce?","coerce?",2077677821),true], null));
}
});
c3kit.apron.schema.type_validator_BANG_ = (function c3kit$apron$schema$type_validator_BANG_(type){
var or__5002__auto__ = cljs.core.get.call(null,c3kit.apron.schema.type_validators,type);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.call(null,["unhandled validation type: ",cljs.core.pr_str.call(null,type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

/**
 * @interface
 */
c3kit.apron.schema.FieldError = function(){};


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.CoerceError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.CoerceError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14097,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14101 = k14097;
var G__14101__$1 = (((G__14101 instanceof cljs.core.Keyword))?G__14101.fqn:null);
switch (G__14101__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14097,else__5303__auto__);

}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__14102){
var vec__14103 = p__14102;
var k__5324__auto__ = cljs.core.nth.call(null,vec__14103,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__14103,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#c3kit.apron.schema.CoerceError{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14096){
var self__ = this;
var G__14096__$1 = this;
return (new cljs.core.RecordIter((0),G__14096__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1845798480 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14098,other14099){
var self__ = this;
var this14098__$1 = this;
return (((!((other14099 == null)))) && ((((this14098__$1.constructor === other14099.constructor)) && (((cljs.core._EQ_.call(null,this14098__$1.message,other14099.message)) && (cljs.core._EQ_.call(null,this14098__$1.__extmap,other14099.__extmap)))))));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14097){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14106 = k14097;
var G__14106__$1 = (((G__14106 instanceof cljs.core.Keyword))?G__14106.fqn:null);
switch (G__14106__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k14097);

}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14096){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14107 = cljs.core.keyword_identical_QMARK_;
var expr__14108 = k__5309__auto__;
if(cljs.core.truth_(pred__14107.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__14108))){
return (new c3kit.apron.schema.CoerceError(G__14096,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.CoerceError(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__14096),null));
}
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.CoerceError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.CoerceError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14096){
var self__ = this;
var this__5299__auto____$1 = this;
return (new c3kit.apron.schema.CoerceError(self__.message,G__14096,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.CoerceError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(c3kit.apron.schema.CoerceError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(c3kit.apron.schema.CoerceError.cljs$lang$type = true);

(c3kit.apron.schema.CoerceError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/CoerceError",null,(1),null));
}));

(c3kit.apron.schema.CoerceError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"c3kit.apron.schema/CoerceError");
}));

/**
 * Positional factory function for c3kit.apron.schema/CoerceError.
 */
c3kit.apron.schema.__GT_CoerceError = (function c3kit$apron$schema$__GT_CoerceError(message){
return (new c3kit.apron.schema.CoerceError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/CoerceError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_CoerceError = (function c3kit$apron$schema$map__GT_CoerceError(G__14100){
var extmap__5342__auto__ = (function (){var G__14110 = cljs.core.dissoc.call(null,G__14100,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__14100)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14110);
} else {
return G__14110;
}
})();
return (new c3kit.apron.schema.CoerceError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__14100),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.ValidateError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.ValidateError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14112,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14117 = k14112;
var G__14117__$1 = (((G__14117 instanceof cljs.core.Keyword))?G__14117.fqn:null);
switch (G__14117__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14112,else__5303__auto__);

}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__14118){
var vec__14119 = p__14118;
var k__5324__auto__ = cljs.core.nth.call(null,vec__14119,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__14119,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#c3kit.apron.schema.ValidateError{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14111){
var self__ = this;
var G__14111__$1 = this;
return (new cljs.core.RecordIter((0),G__14111__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1231026224 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14113,other14114){
var self__ = this;
var this14113__$1 = this;
return (((!((other14114 == null)))) && ((((this14113__$1.constructor === other14114.constructor)) && (((cljs.core._EQ_.call(null,this14113__$1.message,other14114.message)) && (cljs.core._EQ_.call(null,this14113__$1.__extmap,other14114.__extmap)))))));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14112){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14123 = k14112;
var G__14123__$1 = (((G__14123 instanceof cljs.core.Keyword))?G__14123.fqn:null);
switch (G__14123__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k14112);

}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14111){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14124 = cljs.core.keyword_identical_QMARK_;
var expr__14125 = k__5309__auto__;
if(cljs.core.truth_(pred__14124.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__14125))){
return (new c3kit.apron.schema.ValidateError(G__14111,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.ValidateError(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__14111),null));
}
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ValidateError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.ValidateError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14111){
var self__ = this;
var this__5299__auto____$1 = this;
return (new c3kit.apron.schema.ValidateError(self__.message,G__14111,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ValidateError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(c3kit.apron.schema.ValidateError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(c3kit.apron.schema.ValidateError.cljs$lang$type = true);

(c3kit.apron.schema.ValidateError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/ValidateError",null,(1),null));
}));

(c3kit.apron.schema.ValidateError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"c3kit.apron.schema/ValidateError");
}));

/**
 * Positional factory function for c3kit.apron.schema/ValidateError.
 */
c3kit.apron.schema.__GT_ValidateError = (function c3kit$apron$schema$__GT_ValidateError(message){
return (new c3kit.apron.schema.ValidateError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/ValidateError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_ValidateError = (function c3kit$apron$schema$map__GT_ValidateError(G__14115){
var extmap__5342__auto__ = (function (){var G__14129 = cljs.core.dissoc.call(null,G__14115,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__14115)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14129);
} else {
return G__14129;
}
})();
return (new c3kit.apron.schema.ValidateError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__14115),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.ConformError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.ConformError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14135,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14146 = k14135;
var G__14146__$1 = (((G__14146 instanceof cljs.core.Keyword))?G__14146.fqn:null);
switch (G__14146__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14135,else__5303__auto__);

}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__14147){
var vec__14148 = p__14147;
var k__5324__auto__ = cljs.core.nth.call(null,vec__14148,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__14148,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#c3kit.apron.schema.ConformError{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14134){
var self__ = this;
var G__14134__$1 = this;
return (new cljs.core.RecordIter((0),G__14134__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-668996003 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14137,other14138){
var self__ = this;
var this14137__$1 = this;
return (((!((other14138 == null)))) && ((((this14137__$1.constructor === other14138.constructor)) && (((cljs.core._EQ_.call(null,this14137__$1.message,other14138.message)) && (cljs.core._EQ_.call(null,this14137__$1.__extmap,other14138.__extmap)))))));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14135){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14152 = k14135;
var G__14152__$1 = (((G__14152 instanceof cljs.core.Keyword))?G__14152.fqn:null);
switch (G__14152__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k14135);

}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14134){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14153 = cljs.core.keyword_identical_QMARK_;
var expr__14154 = k__5309__auto__;
if(cljs.core.truth_(pred__14153.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__14154))){
return (new c3kit.apron.schema.ConformError(G__14134,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.ConformError(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__14134),null));
}
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.ConformError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.ConformError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14134){
var self__ = this;
var this__5299__auto____$1 = this;
return (new c3kit.apron.schema.ConformError(self__.message,G__14134,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.ConformError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(c3kit.apron.schema.ConformError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(c3kit.apron.schema.ConformError.cljs$lang$type = true);

(c3kit.apron.schema.ConformError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/ConformError",null,(1),null));
}));

(c3kit.apron.schema.ConformError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"c3kit.apron.schema/ConformError");
}));

/**
 * Positional factory function for c3kit.apron.schema/ConformError.
 */
c3kit.apron.schema.__GT_ConformError = (function c3kit$apron$schema$__GT_ConformError(message){
return (new c3kit.apron.schema.ConformError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/ConformError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_ConformError = (function c3kit$apron$schema$map__GT_ConformError(G__14139){
var extmap__5342__auto__ = (function (){var G__14160 = cljs.core.dissoc.call(null,G__14139,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__14139)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14160);
} else {
return G__14160;
}
})();
return (new c3kit.apron.schema.ConformError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__14139),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.FieldError}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.PresentError = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.PresentError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14162,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14171 = k14162;
var G__14171__$1 = (((G__14171 instanceof cljs.core.Keyword))?G__14171.fqn:null);
switch (G__14171__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14162,else__5303__auto__);

}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5323__auto__,p__14172){
var vec__14173 = p__14172;
var k__5324__auto__ = cljs.core.nth.call(null,vec__14173,(0),null);
var v__5325__auto__ = cljs.core.nth.call(null,vec__14173,(1),null);
return f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__);
}),init__5322__auto__,this__5320__auto____$1);
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5316__auto__,pr_pair__5318__auto__,"#c3kit.apron.schema.PresentError{",", ","}",opts__5317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14161){
var self__ = this;
var G__14161__$1 = this;
return (new cljs.core.RecordIter((0),G__14161__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-923193472 ^ cljs.core.hash_unordered_coll.call(null,coll__5297__auto__));
}).call(null,this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14163,other14164){
var self__ = this;
var this14163__$1 = this;
return (((!((other14164 == null)))) && ((((this14163__$1.constructor === other14164.constructor)) && (((cljs.core._EQ_.call(null,this14163__$1.message,other14164.message)) && (cljs.core._EQ_.call(null,this14163__$1.__extmap,other14164.__extmap)))))));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5311__auto__)),null));
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14162){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14178 = k14162;
var G__14178__$1 = (((G__14178 instanceof cljs.core.Keyword))?G__14178.fqn:null);
switch (G__14178__$1) {
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k14162);

}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14161){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14179 = cljs.core.keyword_identical_QMARK_;
var expr__14180 = k__5309__auto__;
if(cljs.core.truth_(pred__14179.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__14180))){
return (new c3kit.apron.schema.PresentError(G__14161,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.PresentError(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5309__auto__,G__14161),null));
}
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.PresentError.prototype.c3kit$apron$schema$FieldError$ = cljs.core.PROTOCOL_SENTINEL);

(c3kit.apron.schema.PresentError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14161){
var self__ = this;
var this__5299__auto____$1 = this;
return (new c3kit.apron.schema.PresentError(self__.message,G__14161,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.PresentError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5306__auto__,(0)),cljs.core._nth.call(null,entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(c3kit.apron.schema.PresentError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(c3kit.apron.schema.PresentError.cljs$lang$type = true);

(c3kit.apron.schema.PresentError.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/PresentError",null,(1),null));
}));

(c3kit.apron.schema.PresentError.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write.call(null,writer__5347__auto__,"c3kit.apron.schema/PresentError");
}));

/**
 * Positional factory function for c3kit.apron.schema/PresentError.
 */
c3kit.apron.schema.__GT_PresentError = (function c3kit$apron$schema$__GT_PresentError(message){
return (new c3kit.apron.schema.PresentError(message,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/PresentError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_PresentError = (function c3kit$apron$schema$map__GT_PresentError(G__14167){
var extmap__5342__auto__ = (function (){var G__14182 = cljs.core.dissoc.call(null,G__14167,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__14167)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14182);
} else {
return G__14182;
}
})();
return (new c3kit.apron.schema.PresentError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__14167),null,cljs.core.not_empty.call(null,extmap__5342__auto__),null));
});

c3kit.apron.schema._create_field_error = (function c3kit$apron$schema$_create_field_error(ctor,default_message,options){
var ex = new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(options);
var data = cljs.core.ex_data.call(null,ex);
var message = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = cljs.core.ex_message.call(null,ex);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return default_message;
}
}
}
})();
return cljs.core.with_meta.call(null,ctor.call(null,message),cljs.core.merge.call(null,data,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"message","message",-406056002))));
});
/**
 * Return the message of an error.
 */
c3kit.apron.schema.error_message = (function c3kit$apron$schema$error_message(error){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
});
/**
 * Return the exception attached to a FieldError if any, otherwise nil.
 */
c3kit.apron.schema.error_exception = (function c3kit$apron$schema$error_exception(field_error){
return new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,field_error));
});
/**
 * Return the value that caused the FieldError, if any, otherwise nil.
 */
c3kit.apron.schema.error_value = (function c3kit$apron$schema$error_value(field_error){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,field_error));
});
/**
 * Return the target type of a CoerceError, if any, otherwise nil.
 */
c3kit.apron.schema.error_type = (function c3kit$apron$schema$error_type(field_error){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,field_error));
});
/**
 * Return the data map associated with the FieldError.
 */
c3kit.apron.schema.error_data = (function c3kit$apron$schema$error_data(field_error){
return cljs.core.meta.call(null,field_error);
});
c3kit.apron.schema.error__GT_exception = (function c3kit$apron$schema$error__GT_exception(error){
return cljs.core.ex_info.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if the value is a FieldError, false otherwise.
 */
c3kit.apron.schema.field_error_QMARK_ = (function c3kit$apron$schema$field_error_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.c3kit$apron$schema$FieldError$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,c3kit.apron.schema.FieldError,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,c3kit.apron.schema.FieldError,value);
}
});
/**
 * Returns a sequence of all the FieldErrors in a processed entity.
 */
c3kit.apron.schema.error_seq = (function c3kit$apron$schema$error_seq(entity){
if(c3kit.apron.schema.field_error_QMARK_.call(null,entity)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null);
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
return cljs.core.mapcat.call(null,c3kit.apron.schema.error_seq,cljs.core.vals.call(null,entity));
} else {
if(c3kit.apron.schema.multiple_QMARK_.call(null,entity)){
return cljs.core.mapcat.call(null,c3kit.apron.schema.error_seq,entity);
} else {
return null;

}
}
}
});
/**
 * Return true if the processed entity has errors, false otherwise.
 */
c3kit.apron.schema.error_QMARK_ = (function c3kit$apron$schema$error_QMARK_(entity){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,c3kit.apron.schema.error_seq.call(null,entity)));
});
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_field_spec !== 'undefined')){
} else {
c3kit.apron.schema._process_field_spec = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.apron.schema","-process-field-spec"),(function (process,_spec,_value){
return process;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_entity_level_spec !== 'undefined')){
} else {
c3kit.apron.schema._process_entity_level_spec = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.apron.schema","-process-entity-level-spec"),(function (process,_key,_spec,_entity){
return process;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.apron !== 'undefined') && (typeof c3kit.apron.schema !== 'undefined') && (typeof c3kit.apron.schema._process_error !== 'undefined')){
} else {
c3kit.apron.schema._process_error = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.apron.schema","-process-error"),(function (process,_options){
return process;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,c3kit.apron.schema._process_error,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (_,options){
return c3kit.apron.schema._create_field_error.call(null,c3kit.apron.schema.__GT_CoerceError,"coercion failed",options);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_error,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (_,options){
return c3kit.apron.schema._create_field_error.call(null,c3kit.apron.schema.__GT_ValidateError,"is invalid",options);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_error,new cljs.core.Keyword(null,"conform","conform",1846236460),(function (_,options){
return c3kit.apron.schema._create_field_error.call(null,c3kit.apron.schema.__GT_ConformError,"conform failed",options);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_error,new cljs.core.Keyword(null,"present","present",-1224645465),(function (_,options){
return c3kit.apron.schema._create_field_error.call(null,c3kit.apron.schema.__GT_PresentError,"present failed",options);
}));
c3kit.apron.schema.field_result_or_error = (function c3kit$apron$schema$field_result_or_error(process,spec,value){
try{return c3kit.apron.schema._process_field_spec.call(null,process,spec,value);
}catch (e14203){var e = e14203;
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}});
c3kit.apron.schema.entity_result_or_error = (function c3kit$apron$schema$entity_result_or_error(process,key,spec,entity){
try{return c3kit.apron.schema._process_entity_level_spec.call(null,process,key,spec,entity);
}catch (e14207){var e = e14207;
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}});
cljs.core._add_method.call(null,c3kit.apron.schema._process_field_spec,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (_,spec,value){
var map__14209 = spec;
var map__14209__$1 = cljs.core.__destructure_map.call(null,map__14209);
var type = cljs.core.get.call(null,map__14209__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__14209__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var coerce_fns = cljs.core.conj.call(null,c3kit.apron.schema.__GT_vec.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504).cljs$core$IFn$_invoke$arity$1(spec)),c3kit.apron.schema.type_coercer_BANG_.call(null,type));
try{var result = cljs.core.reduce.call(null,(function (result,coerce_fn){
return coerce_fn.call(null,result);
}),value,coerce_fns);
return result;
}catch (e14212){var e = e14212;
return c3kit.apron.schema._process_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}}));
c3kit.apron.schema.process_validations = (function c3kit$apron$schema$process_validations(validations,value){
var seq__14214 = cljs.core.seq.call(null,validations);
var chunk__14215 = null;
var count__14216 = (0);
var i__14217 = (0);
while(true){
if((i__14217 < count__14216)){
var map__14247 = cljs.core._nth.call(null,chunk__14215,i__14217);
var map__14247__$1 = cljs.core.__destructure_map.call(null,map__14247);
var validate = cljs.core.get.call(null,map__14247__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var message = cljs.core.get.call(null,map__14247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var validate_fns_14280 = ((c3kit.apron.schema.multiple_QMARK_.call(null,validate))?validate:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validate], null));
var seq__14250_14282 = cljs.core.seq.call(null,validate_fns_14280);
var chunk__14251_14283 = null;
var count__14252_14285 = (0);
var i__14253_14286 = (0);
while(true){
if((i__14253_14286 < count__14252_14285)){
var v_fn_14287 = cljs.core._nth.call(null,chunk__14251_14283,i__14253_14286);
if(cljs.core.truth_(v_fn_14287.call(null,value))){
} else {
throw c3kit.apron.schema.validation_ex.call(null,message,value);
}


var G__14288 = seq__14250_14282;
var G__14289 = chunk__14251_14283;
var G__14290 = count__14252_14285;
var G__14291 = (i__14253_14286 + (1));
seq__14250_14282 = G__14288;
chunk__14251_14283 = G__14289;
count__14252_14285 = G__14290;
i__14253_14286 = G__14291;
continue;
} else {
var temp__5804__auto___14293 = cljs.core.seq.call(null,seq__14250_14282);
if(temp__5804__auto___14293){
var seq__14250_14294__$1 = temp__5804__auto___14293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14250_14294__$1)){
var c__5525__auto___14295 = cljs.core.chunk_first.call(null,seq__14250_14294__$1);
var G__14296 = cljs.core.chunk_rest.call(null,seq__14250_14294__$1);
var G__14297 = c__5525__auto___14295;
var G__14298 = cljs.core.count.call(null,c__5525__auto___14295);
var G__14299 = (0);
seq__14250_14282 = G__14296;
chunk__14251_14283 = G__14297;
count__14252_14285 = G__14298;
i__14253_14286 = G__14299;
continue;
} else {
var v_fn_14301 = cljs.core.first.call(null,seq__14250_14294__$1);
if(cljs.core.truth_(v_fn_14301.call(null,value))){
} else {
throw c3kit.apron.schema.validation_ex.call(null,message,value);
}


var G__14302 = cljs.core.next.call(null,seq__14250_14294__$1);
var G__14303 = null;
var G__14304 = (0);
var G__14305 = (0);
seq__14250_14282 = G__14302;
chunk__14251_14283 = G__14303;
count__14252_14285 = G__14304;
i__14253_14286 = G__14305;
continue;
}
} else {
}
}
break;
}


var G__14306 = seq__14214;
var G__14307 = chunk__14215;
var G__14308 = count__14216;
var G__14309 = (i__14217 + (1));
seq__14214 = G__14306;
chunk__14215 = G__14307;
count__14216 = G__14308;
i__14217 = G__14309;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__14214);
if(temp__5804__auto__){
var seq__14214__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14214__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__14214__$1);
var G__14310 = cljs.core.chunk_rest.call(null,seq__14214__$1);
var G__14311 = c__5525__auto__;
var G__14312 = cljs.core.count.call(null,c__5525__auto__);
var G__14313 = (0);
seq__14214 = G__14310;
chunk__14215 = G__14311;
count__14216 = G__14312;
i__14217 = G__14313;
continue;
} else {
var map__14258 = cljs.core.first.call(null,seq__14214__$1);
var map__14258__$1 = cljs.core.__destructure_map.call(null,map__14258);
var validate = cljs.core.get.call(null,map__14258__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var message = cljs.core.get.call(null,map__14258__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var validate_fns_14314 = ((c3kit.apron.schema.multiple_QMARK_.call(null,validate))?validate:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [validate], null));
var seq__14259_14315 = cljs.core.seq.call(null,validate_fns_14314);
var chunk__14260_14316 = null;
var count__14261_14317 = (0);
var i__14262_14318 = (0);
while(true){
if((i__14262_14318 < count__14261_14317)){
var v_fn_14320 = cljs.core._nth.call(null,chunk__14260_14316,i__14262_14318);
if(cljs.core.truth_(v_fn_14320.call(null,value))){
} else {
throw c3kit.apron.schema.validation_ex.call(null,message,value);
}


var G__14321 = seq__14259_14315;
var G__14322 = chunk__14260_14316;
var G__14323 = count__14261_14317;
var G__14324 = (i__14262_14318 + (1));
seq__14259_14315 = G__14321;
chunk__14260_14316 = G__14322;
count__14261_14317 = G__14323;
i__14262_14318 = G__14324;
continue;
} else {
var temp__5804__auto___14325__$1 = cljs.core.seq.call(null,seq__14259_14315);
if(temp__5804__auto___14325__$1){
var seq__14259_14326__$1 = temp__5804__auto___14325__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14259_14326__$1)){
var c__5525__auto___14328 = cljs.core.chunk_first.call(null,seq__14259_14326__$1);
var G__14329 = cljs.core.chunk_rest.call(null,seq__14259_14326__$1);
var G__14330 = c__5525__auto___14328;
var G__14331 = cljs.core.count.call(null,c__5525__auto___14328);
var G__14332 = (0);
seq__14259_14315 = G__14329;
chunk__14260_14316 = G__14330;
count__14261_14317 = G__14331;
i__14262_14318 = G__14332;
continue;
} else {
var v_fn_14333 = cljs.core.first.call(null,seq__14259_14326__$1);
if(cljs.core.truth_(v_fn_14333.call(null,value))){
} else {
throw c3kit.apron.schema.validation_ex.call(null,message,value);
}


var G__14334 = cljs.core.next.call(null,seq__14259_14326__$1);
var G__14335 = null;
var G__14336 = (0);
var G__14337 = (0);
seq__14259_14315 = G__14334;
chunk__14260_14316 = G__14335;
count__14261_14317 = G__14336;
i__14262_14318 = G__14337;
continue;
}
} else {
}
}
break;
}


var G__14338 = cljs.core.next.call(null,seq__14214__$1);
var G__14339 = null;
var G__14340 = (0);
var G__14341 = (0);
seq__14214 = G__14338;
chunk__14215 = G__14339;
count__14216 = G__14340;
i__14217 = G__14341;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core._add_method.call(null,c3kit.apron.schema._process_field_spec,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (_,spec,value){
var map__14265 = spec;
var map__14265__$1 = cljs.core.__destructure_map.call(null,map__14265);
var type = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var validate = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var validations = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"validations","validations",1347149461));
var message = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var validations__$1 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),c3kit.apron.schema.type_validator_BANG_.call(null,type),new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null),(cljs.core.truth_(validate)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),validate,new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null):cljs.core.PersistentVector.EMPTY),validations);
c3kit.apron.schema.process_validations.call(null,validations__$1,value);

return value;
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_field_spec,new cljs.core.Keyword(null,"conform","conform",1846236460),(function (_,spec,value){
var coerce_result = c3kit.apron.schema.field_result_or_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),spec,value);
if(c3kit.apron.schema.field_error_QMARK_.call(null,coerce_result)){
return coerce_result;
} else {
var field_result_or_failure = c3kit.apron.schema.field_result_or_error.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),spec,coerce_result);
return field_result_or_failure;
}
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_field_spec,new cljs.core.Keyword(null,"present","present",-1224645465),(function (_,spec,value){
var present_fns = c3kit.apron.schema.__GT_vec.call(null,new cljs.core.Keyword(null,"present","present",-1224645465).cljs$core$IFn$_invoke$arity$1(spec));
return cljs.core.reduce.call(null,(function (result,present_fn){
return present_fn.call(null,result);
}),value,present_fns);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_entity_level_spec,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (_,key,spec,entity){
var map__14281 = spec;
var map__14281__$1 = cljs.core.__destructure_map.call(null,map__14281);
var coerce = cljs.core.get.call(null,map__14281__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var message = cljs.core.get.call(null,map__14281__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var coerce_fns = c3kit.apron.schema.__GT_vec.call(null,coerce);
try{var coerced_entity = cljs.core.reduce.call(null,(function (result,coerce_fn){
return cljs.core.assoc.call(null,result,key,coerce_fn.call(null,result));
}),entity,coerce_fns);
return cljs.core.get.call(null,coerced_entity,key);
}catch (e14284){var e = e14284;
return c3kit.apron.schema._process_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_entity_level_spec,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (_,key,spec,entity){
var map__14292 = spec;
var map__14292__$1 = cljs.core.__destructure_map.call(null,map__14292);
var validate = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var validations = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"validations","validations",1347149461));
var message = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var validations__$1 = cljs.core.concat.call(null,(cljs.core.truth_(validate)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),validate,new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null):cljs.core.PersistentVector.EMPTY),validations);
c3kit.apron.schema.process_validations.call(null,validations__$1,entity);

return cljs.core.get.call(null,entity,key);
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_entity_level_spec,new cljs.core.Keyword(null,"conform","conform",1846236460),(function (_,key,spec,entity){
var coerce_result = c3kit.apron.schema.entity_result_or_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),key,spec,entity);
if(c3kit.apron.schema.field_error_QMARK_.call(null,coerce_result)){
return coerce_result;
} else {
return c3kit.apron.schema.entity_result_or_error.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),key,spec,cljs.core.assoc.call(null,entity,key,coerce_result));
}
}));
cljs.core._add_method.call(null,c3kit.apron.schema._process_entity_level_spec,new cljs.core.Keyword(null,"present","present",-1224645465),(function (_,key,spec,entity){
var present_fns = c3kit.apron.schema.__GT_vec.call(null,new cljs.core.Keyword(null,"present","present",-1224645465).cljs$core$IFn$_invoke$arity$1(spec));
var presented_entity = cljs.core.reduce.call(null,(function (result,present_fn){
return cljs.core.assoc.call(null,result,key,present_fn.call(null,result));
}),entity,present_fns);
return cljs.core.get.call(null,presented_entity,key);
}));
c3kit.apron.schema.process_spec_on_seq_entries = (function c3kit$apron$schema$process_spec_on_seq_entries(process,spec,value){
if((value == null)){
return null;
} else {
if((!(c3kit.apron.schema.multiple_QMARK_.call(null,value)))){
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)),"] expected"].join('')], null));
} else {
var result = cljs.core.mapv.call(null,(function (p1__14327_SHARP_){
return c3kit.apron.schema._process_spec_on_value.call(null,process,spec,p1__14327_SHARP_);
}),value);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"present","present",-1224645465),process)){
return c3kit.apron.corec.removev.call(null,cljs.core.nil_QMARK_,result);
} else {
return result;
}

}
}
});
c3kit.apron.schema.process_seq_spec_on_value = (function c3kit$apron$schema$process_seq_spec_on_value(process,spec,value){
var entry_spec = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"any","any",1705907423)], null);
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),process)){
var value__$1 = c3kit.apron.schema.field_result_or_error.call(null,process,spec,value);
if(c3kit.apron.schema.error_QMARK_.call(null,value__$1)){
return value__$1;
} else {
return c3kit.apron.schema.process_spec_on_seq_entries.call(null,process,entry_spec,value__$1);
}
} else {
var value__$1 = c3kit.apron.schema.process_spec_on_seq_entries.call(null,process,entry_spec,value);
if(c3kit.apron.schema.error_QMARK_.call(null,value__$1)){
return value__$1;
} else {
return c3kit.apron.schema.field_result_or_error.call(null,process,spec,value__$1);
}
}
});
c3kit.apron.schema.process_map_spec_on_value = (function c3kit$apron$schema$process_map_spec_on_value(process,spec,value){
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),process)){
var value__$1 = c3kit.apron.schema.field_result_or_error.call(null,process,spec,value);
if(c3kit.apron.schema.error_QMARK_.call(null,value__$1)){
return value__$1;
} else {
return c3kit.apron.schema.process_schema_on_entity.call(null,process,schema,value__$1);
}
} else {
if(cljs.core.map_QMARK_.call(null,value)){
var entity = c3kit.apron.schema.process_schema_on_entity.call(null,process,schema,value);
if(c3kit.apron.schema.error_QMARK_.call(null,entity)){
return entity;
} else {
return c3kit.apron.schema.field_result_or_error.call(null,process,spec,entity);
}
} else {
return c3kit.apron.schema.field_result_or_error.call(null,process,spec,value);

}
}
});
c3kit.apron.schema.process_one_of_on_value = (function c3kit$apron$schema$process_one_of_on_value(process,spec,value){
var specs = new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.seq.call(null,specs)){
var results = cljs.core.mapv.call(null,(function (p1__14342_SHARP_){
return c3kit.apron.schema._process_spec_on_value.call(null,process,p1__14342_SHARP_,value);
}),specs);
var non_error_results = cljs.core.filter.call(null,(function (p1__14343_SHARP_){
return (!(c3kit.apron.schema.error_QMARK_.call(null,p1__14343_SHARP_)));
}),results);
if(cljs.core.seq.call(null,non_error_results)){
return cljs.core.first.call(null,non_error_results);
} else {
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "one-of: no matching spec";
}
})(),new cljs.core.Keyword(null,"errors","errors",-908790718),results], null));
}
} else {
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"one-of: empty specs"], null));
}
});
c3kit.apron.schema._process_spec_on_value = (function c3kit$apron$schema$_process_spec_on_value(process,spec,value){
var spec__$1 = c3kit.apron.schema.normalize_spec.call(null,spec);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec__$1);
var G__14344 = type;
var G__14344__$1 = (((G__14344 instanceof cljs.core.Keyword))?G__14344.fqn:null);
switch (G__14344__$1) {
case "seq":
return c3kit.apron.schema.process_seq_spec_on_value.call(null,process,spec__$1,value);

break;
case "map":
return c3kit.apron.schema.process_map_spec_on_value.call(null,process,spec__$1,value);

break;
case "one-of":
return c3kit.apron.schema.process_one_of_on_value.call(null,process,spec__$1,value);

break;
default:
return c3kit.apron.schema.field_result_or_error.call(null,process,spec__$1,value);

}
});
c3kit.apron.schema.process_entity_key_spec = (function c3kit$apron$schema$process_entity_key_spec(process,entity,p__14345){
var vec__14346 = p__14345;
var key = cljs.core.nth.call(null,vec__14346,(0),null);
var spec = cljs.core.nth.call(null,vec__14346,(1),null);
var value = cljs.core.get.call(null,entity,key);
var new_value = c3kit.apron.schema._process_spec_on_value.call(null,process,spec,value);
if((!((new_value == null)))){
return cljs.core.assoc.call(null,entity,key,new_value);
} else {
return cljs.core.dissoc.call(null,entity,key);
}
});
c3kit.apron.schema.process_entity_level_spec = (function c3kit$apron$schema$process_entity_level_spec(process,result,p__14349){
var vec__14350 = p__14349;
var key = cljs.core.nth.call(null,vec__14350,(0),null);
var spec = cljs.core.nth.call(null,vec__14350,(1),null);
var value = c3kit.apron.schema.entity_result_or_error.call(null,process,key,spec,new cljs.core.Keyword(null,"entity","entity",-450970276).cljs$core$IFn$_invoke$arity$1(result));
if((!((value == null)))){
if(c3kit.apron.schema.error_QMARK_.call(null,value)){
return cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),key], null),value);
} else {
return cljs.core.assoc_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),key], null),value);
}
} else {
return cljs.core.update.call(null,result,new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.dissoc,key);
}
});
c3kit.apron.schema.process_schema_on_entity = (function c3kit$apron$schema$process_schema_on_entity(process,schema,entity){
var entity__$1 = cljs.core.select_keys.call(null,entity,cljs.core.keys.call(null,schema));
var entity__$2 = cljs.core.reduce.call(null,cljs.core.partial.call(null,c3kit.apron.schema.process_entity_key_spec,process),entity__$1,cljs.core.dissoc.call(null,schema,new cljs.core.Keyword(null,"*","*",-1294732318)));
if(c3kit.apron.schema.error_QMARK_.call(null,entity__$2)){
return entity__$2;
} else {
var map__14353 = cljs.core.reduce.call(null,cljs.core.partial.call(null,c3kit.apron.schema.process_entity_level_spec,process),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity__$2], null),new cljs.core.Keyword(null,"*","*",-1294732318).cljs$core$IFn$_invoke$arity$1(schema));
var map__14353__$1 = cljs.core.__destructure_map.call(null,map__14353);
var entity__$3 = cljs.core.get.call(null,map__14353__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var errors = cljs.core.get.call(null,map__14353__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return cljs.core.merge.call(null,entity__$3,errors);
}
});
c3kit.apron.schema.coerce_entity_and_process_schema = (function c3kit$apron$schema$coerce_entity_and_process_schema(process,schema,entity){
try{return c3kit.apron.schema.process_schema_on_entity.call(null,process,schema,c3kit.apron.schema.__GT_map.call(null,entity));
}catch (e14354){var e = e14354;
return c3kit.apron.schema._process_error.call(null,process,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),entity,new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
}});
c3kit.apron.schema.process_value_or_error = (function c3kit$apron$schema$process_value_or_error(process,spec,value){
var result = c3kit.apron.schema._process_spec_on_value.call(null,process,spec,value);
var temp__5802__auto__ = cljs.core.first.call(null,c3kit.apron.schema.error_seq.call(null,result));
if(cljs.core.truth_(temp__5802__auto__)){
var error = temp__5802__auto__;
throw c3kit.apron.schema.error__GT_exception.call(null,error);
} else {
return result;
}
});
/**
 * returns coerced value or throws an exception
 */
c3kit.apron.schema.coerce_value_BANG_ = (function c3kit$apron$schema$coerce_value_BANG_(var_args){
var G__14357 = arguments.length;
switch (G__14357) {
case 3:
return c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.coerce_value_BANG_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.coerce_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),spec,value);
}));

(c3kit.apron.schema.coerce_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.coerce_value = (function c3kit$apron$schema$coerce_value(var_args){
var G__14359 = arguments.length;
switch (G__14359) {
case 3:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.coerce_value.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/coerce-value is DEPRECATED.  Use schema/coerce-value! instead."], null);
}),null)),null,(38),null);

return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),spec,value);
}));

(c3kit.apron.schema.coerce_value.cljs$lang$maxFixedArity = 3);

/**
 * throws an exception when validation fails, value otherwise
 */
c3kit.apron.schema.validate_value_BANG_ = (function c3kit$apron$schema$validate_value_BANG_(var_args){
var G__14361 = arguments.length;
switch (G__14361) {
case 3:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.validate_value_BANG_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),spec,value);
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * return true or false
 */
c3kit.apron.schema.valid_value_QMARK_ = (function c3kit$apron$schema$valid_value_QMARK_(var_args){
var G__14364 = arguments.length;
switch (G__14364) {
case 3:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.valid_value_QMARK_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
try{c3kit.apron.schema.validate_value_BANG_.call(null,spec,value);

return true;
}catch (e14366){var _ = e14366;
return false;
}}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * coerce and validate, returns coerced value or throws
 */
c3kit.apron.schema.conform_value_BANG_ = (function c3kit$apron$schema$conform_value_BANG_(var_args){
var G__14368 = arguments.length;
switch (G__14368) {
case 3:
return c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.conform_value_BANG_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.conform_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"conform","conform",1846236460),spec,value);
}));

(c3kit.apron.schema.conform_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.conform_value = (function c3kit$apron$schema$conform_value(var_args){
var G__14373 = arguments.length;
switch (G__14373) {
case 3:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.conform_value.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/conform-value is DEPRECATED.  Use schema/conform-value! instead."], null);
}),null)),null,(39),null);

return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"conform","conform",1846236460),spec,value);
}));

(c3kit.apron.schema.conform_value.cljs$lang$maxFixedArity = 3);

/**
 * returns a presentable representation of the value, or throws
 */
c3kit.apron.schema.present_value_BANG_ = (function c3kit$apron$schema$present_value_BANG_(var_args){
var G__14376 = arguments.length;
switch (G__14376) {
case 3:
return c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.present_value_BANG_.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.present_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"present","present",-1224645465),spec,value);
}));

(c3kit.apron.schema.present_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * DEPRECATED
 */
c3kit.apron.schema.present_value = (function c3kit$apron$schema$present_value(var_args){
var G__14379 = arguments.length;
switch (G__14379) {
case 3:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.present_value.call(null,cljs.core.get.call(null,schema,key),value);
}));

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/present-value is DEPRECATED.  Use schema/present-value! instead."], null);
}),null)),null,(40),null);

return c3kit.apron.schema.process_value_or_error.call(null,new cljs.core.Keyword(null,"present","present",-1224645465),spec,value);
}));

(c3kit.apron.schema.present_value.cljs$lang$maxFixedArity = 3);

/**
 * Returns coerced entity or SchemaError if any coercion failed. Use error? to check result.
 *   Use Case: 'I want to change my data into the types specified by the schema.'
 */
c3kit.apron.schema.coerce = (function c3kit$apron$schema$coerce(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema.call(null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),schema,entity);
});
/**
 * Returns entity with all values true, or SchemaError when one or more invalid fields. Use error? to check result.
 *   Use Case: 'I want to make sure all the data is valid according to the schema.'
 */
c3kit.apron.schema.validate = (function c3kit$apron$schema$validate(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),schema,entity);
});
/**
 * Returns coerced entity or SchemaError upon any coercion or validation failure. Use error? to check result.
 *   Use Case: 'I want to coerce my data then validate the coerced data, all according to the schema.'
 *   Use Case: Data comes in from a web-form so strings have to be coerced into numbers, etc., then
 *          we need to validate that the data is good.
 */
c3kit.apron.schema.conform = (function c3kit$apron$schema$conform(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema.call(null,new cljs.core.Keyword(null,"conform","conform",1846236460),schema,entity);
});
/**
 * Returns presented entity with FieldErrors where the process failed. Use error? to check result.
 */
c3kit.apron.schema.present = (function c3kit$apron$schema$present(schema,entity){
return c3kit.apron.schema.coerce_entity_and_process_schema.call(null,new cljs.core.Keyword(null,"present","present",-1224645465),schema,entity);
});
c3kit.apron.schema.as_map_or_nil = (function c3kit$apron$schema$as_map_or_nil(thing){
if(cljs.core.seq.call(null,thing)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,thing);
} else {
return null;
}
});
c3kit.apron.schema.error_map = (function c3kit$apron$schema$error_map(result){
if(c3kit.apron.schema.field_error_QMARK_.call(null,result)){
return result;
} else {
if(cljs.core.map_QMARK_.call(null,result)){
return c3kit.apron.schema.as_map_or_nil.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p__14381){
var vec__14382 = p__14381;
var k = cljs.core.nth.call(null,vec__14382,(0),null);
var v = cljs.core.nth.call(null,vec__14382,(1),null);
var temp__5804__auto__ = c3kit.apron.schema.error_map.call(null,v);
if(cljs.core.truth_(temp__5804__auto__)){
var v__$1 = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
} else {
return null;
}
}),result)));
} else {
if(c3kit.apron.schema.multiple_QMARK_.call(null,result)){
return c3kit.apron.schema.as_map_or_nil.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,(function (k,v){
var temp__5804__auto__ = c3kit.apron.schema.error_map.call(null,v);
if(cljs.core.truth_(temp__5804__auto__)){
var v__$1 = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
} else {
return null;
}
}),result)));
} else {
return null;

}
}
}
});
/**
 * nil when there are no errors, otherwise a map {<field> <error message>}.
 */
c3kit.apron.schema.message_map = (function c3kit$apron$schema$message_map(result){
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
var temp__5804__auto__ = c3kit.apron.schema.error_map.call(null,result);
if(cljs.core.truth_(temp__5804__auto__)){
var errors = temp__5804__auto__;
return clojure.walk.postwalk.call(null,(function (v){
if(c3kit.apron.schema.field_error_QMARK_.call(null,v)){
return c3kit.apron.schema.error_message.call(null,v);
} else {
return v;
}
}),errors);
} else {
return null;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.error_message_map = (function c3kit$apron$schema$error_message_map(result){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/error-message-map is DEPRECATED.  Use schema/message-map instead."], null);
}),null)),null,(41),null);

return c3kit.apron.schema.message_map.call(null,result);
});
/**
 * seq of 'friendly' error messages; nil if none.
 */
c3kit.apron.schema.message_seq = (function c3kit$apron$schema$message_seq(result){
var temp__5804__auto__ = c3kit.apron.schema.message_map.call(null,result);
if(cljs.core.truth_(temp__5804__auto__)){
var errors = temp__5804__auto__;
var errors__$1 = errors;
var stack = cljs.core.List.EMPTY;
var path = cljs.core.List.EMPTY;
var result__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,errors__$1)){
if(cljs.core.empty_QMARK_.call(null,stack)){
return result__$1;
} else {
var G__14391 = cljs.core.first.call(null,stack);
var G__14392 = cljs.core.rest.call(null,stack);
var G__14393 = cljs.core.rest.call(null,path);
var G__14394 = result__$1;
errors__$1 = G__14391;
stack = G__14392;
path = G__14393;
result__$1 = G__14394;
continue;
}
} else {
var vec__14388 = cljs.core.first.call(null,errors__$1);
var k = cljs.core.nth.call(null,vec__14388,(0),null);
var v = cljs.core.nth.call(null,vec__14388,(1),null);
var new_path = cljs.core.cons.call(null,((cljs.core.int_QMARK_.call(null,k))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(k):cljs.core.name.call(null,k)),path);
if(cljs.core.map_QMARK_.call(null,v)){
var G__14395 = v;
var G__14396 = cljs.core.conj.call(null,stack,cljs.core.rest.call(null,errors__$1));
var G__14397 = new_path;
var G__14398 = result__$1;
errors__$1 = G__14395;
stack = G__14396;
path = G__14397;
result__$1 = G__14398;
continue;
} else {
var value = [clojure.string.join.call(null,".",cljs.core.reverse.call(null,new_path))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
var G__14399 = cljs.core.rest.call(null,errors__$1);
var G__14400 = stack;
var G__14401 = path;
var G__14402 = cljs.core.conj.call(null,result__$1,value);
errors__$1 = G__14399;
stack = G__14400;
path = G__14401;
result__$1 = G__14402;
continue;
}
}
break;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.messages = (function c3kit$apron$schema$messages(result){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/messages is DEPRECATED.  Use schema/message-seq instead."], null);
}),null)),null,(42),null);

return c3kit.apron.schema.message_seq.call(null,result);
});
/**
 * Runs coerce on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.coerce_message_map = (function c3kit$apron$schema$coerce_message_map(schema,entity){
return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.coerce.call(null,schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.coerce_errors = (function c3kit$apron$schema$coerce_errors(schema,entity){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/coerce-errors is DEPRECATED.  Use schema/coerce-message-map instead."], null);
}),null)),null,(43),null);

return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.coerce.call(null,schema,entity));
});
/**
 * Runs validate on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.validate_message_map = (function c3kit$apron$schema$validate_message_map(schema,entity){
return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.validate.call(null,schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.validate_errors = (function c3kit$apron$schema$validate_errors(schema,entity){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/validate-errors is DEPRECATED.  Use schema/validate-message-map instead."], null);
}),null)),null,(44),null);

return c3kit.apron.schema.validate_message_map.call(null,schema,entity);
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.validation_errors = (function c3kit$apron$schema$validation_errors(schema,entity){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/validation-errors is DEPRECATED.  Use schema/validate-message-map instead."], null);
}),null)),null,(45),null);

return c3kit.apron.schema.validate_message_map.call(null,schema,entity);
});
/**
 * Runs conform on the entity and returns a map of error message, or nil if none.
 */
c3kit.apron.schema.conform_message_map = (function c3kit$apron$schema$conform_message_map(schema,entity){
return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.conform.call(null,schema,entity));
});
/**
 * DEPRECATED
 */
c3kit.apron.schema.conform_errors = (function c3kit$apron$schema$conform_errors(schema,entity){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.schema",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["schema/conform-errors is DEPRECATED.  Use schema/conform-message-map instead."], null);
}),null)),null,(46),null);

return c3kit.apron.schema.message_map.call(null,c3kit.apron.schema.conform.call(null,schema,entity));
});
/**
 * Returns a coerced entity or throws an exception if there are errors.
 */
c3kit.apron.schema.coerce_BANG_ = (function c3kit$apron$schema$coerce_BANG_(schema,entity){
var result = c3kit.apron.schema.coerce.call(null,schema,entity);
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
throw cljs.core.ex_info.call(null,"Uncoercable entity",result);
} else {
return result;
}
});
/**
 * Returns a validated entity or throws an exception if there are errors.
 */
c3kit.apron.schema.validate_BANG_ = (function c3kit$apron$schema$validate_BANG_(schema,entity){
var result = c3kit.apron.schema.validate.call(null,schema,entity);
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
throw cljs.core.ex_info.call(null,"Invalid entity",result);
} else {
return result;
}
});
/**
 * Returns a conformed entity or throws an exception if there are errors.
 */
c3kit.apron.schema.conform_BANG_ = (function c3kit$apron$schema$conform_BANG_(schema,entity){
var result = c3kit.apron.schema.conform.call(null,schema,entity);
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
throw cljs.core.ex_info.call(null,"Unconformable entity",result);
} else {
return result;
}
});
/**
 * Returns a presented entity or throws an exception if there are errors.
 */
c3kit.apron.schema.present_BANG_ = (function c3kit$apron$schema$present_BANG_(schema,entity){
var result = c3kit.apron.schema.present.call(null,schema,entity);
if(c3kit.apron.schema.error_QMARK_.call(null,result)){
throw cljs.core.ex_info.call(null,"Unpresentable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.validate__GT_validations = (function c3kit$apron$schema$validate__GT_validations(p__14403){
var map__14404 = p__14403;
var map__14404__$1 = cljs.core.__destructure_map.call(null,map__14404);
var spec = map__14404__$1;
var validate = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"validate","validate",-201300827));
var message = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(validate)){
return cljs.core.update.call(null,cljs.core.dissoc.call(null,spec,new cljs.core.Keyword(null,"validate","validate",-201300827)),new cljs.core.Keyword(null,"validations","validations",1347149461),c3kit.apron.corec.conjv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),validate,new cljs.core.Keyword(null,"message","message",-406056002),message], null));
} else {
return spec;
}
});
c3kit.apron.schema.merge_specs = (function c3kit$apron$schema$merge_specs(a,b){
var a__$1 = c3kit.apron.schema.validate__GT_validations.call(null,a);
var b__$1 = c3kit.apron.schema.validate__GT_validations.call(null,b);
var temp__5802__auto__ = cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"validations","validations",1347149461).cljs$core$IFn$_invoke$arity$2(a__$1,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"validations","validations",1347149461).cljs$core$IFn$_invoke$arity$2(b__$1,cljs.core.PersistentVector.EMPTY)));
if(temp__5802__auto__){
var validations = temp__5802__auto__;
return cljs.core.assoc.call(null,cljs.core.merge.call(null,a__$1,b__$1),new cljs.core.Keyword(null,"validations","validations",1347149461),cljs.core.vec.call(null,validations));
} else {
return cljs.core.merge.call(null,a__$1,b__$1);
}
});
c3kit.apron.schema.merge_schemas = (function c3kit$apron$schema$merge_schemas(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14411 = arguments.length;
var i__5727__auto___14413 = (0);
while(true){
if((i__5727__auto___14413 < len__5726__auto___14411)){
args__5732__auto__.push((arguments[i__5727__auto___14413]));

var G__14414 = (i__5727__auto___14413 + (1));
i__5727__auto___14413 = G__14414;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
var entity_specs = cljs.core.apply.call(null,cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.call(null,new cljs.core.Keyword(null,"*","*",-1294732318),schemas));
var attr_specs = cljs.core.apply.call(null,cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.call(null,(function (p1__14405_SHARP_){
return cljs.core.dissoc.call(null,p1__14405_SHARP_,new cljs.core.Keyword(null,"*","*",-1294732318));
}),schemas));
if(cljs.core.seq.call(null,entity_specs)){
return cljs.core.assoc.call(null,attr_specs,new cljs.core.Keyword(null,"*","*",-1294732318),entity_specs);
} else {
return attr_specs;
}
}));

(c3kit.apron.schema.merge_schemas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.schema.merge_schemas.cljs$lang$applyTo = (function (seq14406){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14406));
}));

c3kit.apron.schema.validate_type = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__14409_SHARP_){
return cljs.core.contains_QMARK_.call(null,c3kit.apron.schema.valid_types,p1__14409_SHARP_);
}),new cljs.core.Keyword(null,"message","message",-406056002),"must be one of schema/valid-types"], null);
c3kit.apron.schema.process_spec_schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),"must be an ifn or seq of ifn"], null);
c3kit.apron.schema.validation_schema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"validations","validations",1347149461),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.apron.schema.required], null),new cljs.core.Keyword(null,"message","message",-406056002),"must be an ifn"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.seq,new cljs.core.Keyword(null,"message","message",-406056002),"must not be empty"], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),"must be an ifn or seq of ifn"], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
c3kit.apron.schema._spec_schema = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"validations","validations",1347149461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.apron.schema.required,c3kit.apron.schema.validate_type], null)], null),new cljs.core.Keyword(null,"validate","validate",-201300827),c3kit.apron.schema.process_spec_schema,new cljs.core.Keyword(null,"coerce","coerce",1917884504),c3kit.apron.schema.process_spec_schema,new cljs.core.Keyword(null,"present","present",-1224645465),c3kit.apron.schema.process_spec_schema,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"validations","validations",1347149461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"schema","schema",-1582001791),c3kit.apron.schema.validation_schema,new cljs.core.Keyword(null,"message","message",-406056002),"must be schema/validation-schema"], null)], null)], null);
c3kit.apron.schema.spec_schema = cljs.core.assoc.call(null,c3kit.apron.schema._spec_schema,new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"schema","schema",-1582001791),c3kit.apron.schema._spec_schema,new cljs.core.Keyword(null,"message","message",-406056002),"must be schema/spec-schema"], null),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"schema","schema",-1582001791),c3kit.apron.schema._spec_schema], null)], null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"message","message",-406056002),"must be a map"], null),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__14419_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(p1__14419_SHARP_))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14419_SHARP_));
} else {
return true;
}
}),new cljs.core.Keyword(null,"message","message",-406056002),"only used with type :seq"], null),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__14420_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(p1__14420_SHARP_))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"one-of","one-of",144367098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14420_SHARP_));
} else {
return true;
}
}),new cljs.core.Keyword(null,"message","message",-406056002),"only used with type :one-of"], null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__14421_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(p1__14421_SHARP_))){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__14421_SHARP_));
} else {
return true;
}
}),new cljs.core.Keyword(null,"message","message",-406056002),"only used with type :map"], null)], null));
c3kit.apron.schema.entity_spec_schema = cljs.core.assoc.call(null,c3kit.apron.schema.spec_schema,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"validate","validate",-201300827),c3kit.apron.schema.nil_QMARK__or.call(null,(function (p1__14423_SHARP_){
return cljs.core.contains_QMARK_.call(null,c3kit.apron.schema.valid_types,p1__14423_SHARP_);
})),new cljs.core.Keyword(null,"message","message",-406056002),"must be one of schema/valid-types"], null));
c3kit.apron.schema.conform_preserving_extras_BANG_ = (function c3kit$apron$schema$conform_preserving_extras_BANG_(schema,spec){
var extra = cljs.core.apply.call(null,cljs.core.dissoc,spec,cljs.core.keys.call(null,schema));
var conformed = c3kit.apron.schema.conform_BANG_.call(null,schema,spec);
return cljs.core.merge.call(null,conformed,extra);
});
/**
 * Normalizes, coerces, and validates all the specs in the schema.  Any problems in the schema will throw an exception.
 *   Any extra fields in the spec (:value, :db, ...) will be preserved.
 */
c3kit.apron.schema.conform_schema_BANG_ = (function c3kit$apron$schema$conform_schema_BANG_(schema){
var schema__$1 = c3kit.apron.schema.normalize_schema.call(null,schema);
var field_schema = cljs.core.update_vals.call(null,cljs.core.dissoc.call(null,schema__$1,new cljs.core.Keyword(null,"*","*",-1294732318)),(function (p1__14425_SHARP_){
return c3kit.apron.schema.conform_preserving_extras_BANG_.call(null,c3kit.apron.schema.spec_schema,p1__14425_SHARP_);
}));
var entity_schema = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"*","*",-1294732318).cljs$core$IFn$_invoke$arity$1(schema__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return cljs.core.update_vals.call(null,s,(function (p1__14426_SHARP_){
return c3kit.apron.schema.conform_preserving_extras_BANG_.call(null,c3kit.apron.schema.entity_spec_schema,p1__14426_SHARP_);
}));
} else {
return null;
}
})();
if(cljs.core.truth_(entity_schema)){
return cljs.core.assoc.call(null,field_schema,new cljs.core.Keyword(null,"*","*",-1294732318),entity_schema);
} else {
return field_schema;
}
});

//# sourceMappingURL=schema.js.map
