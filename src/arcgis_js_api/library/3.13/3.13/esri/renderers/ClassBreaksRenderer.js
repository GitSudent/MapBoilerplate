// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
define("esri/renderers/ClassBreaksRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../symbols/jsonUtils ./Renderer".split(" "),function(k,m,g,q,r,p,n,s){k=k(s,{declaredClass:"esri.renderer.ClassBreaksRenderer",constructor:function(a,c){this.breaks=[];this._symbols={};this.infos=[];this.isMaxInclusive=!0;if(a&&!a.declaredClass){var b=a;this.attributeField=b.field;this.defaultSymbol=(a=b.defaultSymbol)&&(a.declaredClass?a:n.fromJson(a));this.backgroundFillSymbol=
(a=b.backgroundFillSymbol)&&(a.declaredClass?a:n.fromJson(a));this._copy(["defaultLabel","classificationMethod:rest","normalizationType:rest","normalizationField","normalizationTotal"],b,this);var e=b.minValue;(b=b.classBreakInfos)&&(b[0]&&p.isDefined(b[0].classMaxValue))&&m.forEach(b,function(a){var b=a.classMaxValue;a.minValue=e;e=a.maxValue=b},this);m.forEach(b,this._addBreakInfo,this)}else this.defaultSymbol=a,this.attributeField=c},addBreak:function(a,c,b){a=g.isObject(a)?a:{minValue:a,maxValue:c,
symbol:b};this._addBreakInfo(a)},removeBreak:function(a,c){var b,e=this.breaks,d,h=e.length,f=this._symbols;for(d=0;d<h;d++)if(b=e[d],b[0]==a&&b[1]==c){e.splice(d,1);delete f[a+"-"+c];this.infos.splice(d,1);break}},clearBreaks:function(){this.breaks=[];this._symbols={};this.infos=[]},getBreakIndex:function(a){var c=this.attributeField,b=a.attributes,e=this.breaks,d=e.length,h=this.isMaxInclusive;if(g.isFunction(c))a=c(a);else{a=parseFloat(b[c]);var c=this.normalizationType,f;c&&(f=parseFloat(this.normalizationTotal),
b=parseFloat(b[this.normalizationField]),"log"===c?a=Math.log(a)*Math.LOG10E:"percent-of-total"===c&&!isNaN(f)?a=100*(a/f):"field"===c&&!isNaN(b)&&(a/=b))}for(b=0;b<d;b++)if(c=e[b],c[0]<=a&&(h?a<=c[1]:a<c[1]))return b;return-1},getBreakInfo:function(a){a=this.getBreakIndex(a);return-1!==a?this.infos[a]:null},getSymbol:function(a){return(a=this.breaks[this.getBreakIndex(a)])?this._symbols[a[0]+"-"+a[1]]:this.defaultSymbol},setMaxInclusive:function(a){this.isMaxInclusive=a},_normalizationTypeEnums:[["field",
"esriNormalizeByField"],["log","esriNormalizeByLog"],["percent-of-total","esriNormalizeByPercentOfTotal"]],_classificationMethodEnums:[["natural-breaks","esriClassifyNaturalBreaks"],["equal-interval","esriClassifyEqualInterval"],["quantile","esriClassifyQuantile"],["standard-deviation","esriClassifyStandardDeviation"],["geometrical-interval","esriClassifyGeometricalInterval"]],_copy:function(a,c,b){m.forEach(a,function(a){var d=a.split(":"),h,f,g;1<d.length&&(a=d[0],h=this["_"+a+"Enums"],"rest"===
d[1]?(f="1",g="0"):"sdk"===d[1]&&(f="0",g="1"));d=c[a];if(void 0!==d&&(b[a]=d,h&&f)){var l,k=h.length;for(l=0;l<k;l++)if(h[l][f]===d){b[a]=h[l][g];break}}},this)},_addBreakInfo:function(a){var c=a.minValue,b=a.maxValue;this.breaks.push([c,b]);this.infos.push(a);var e=a.symbol;e&&!e.declaredClass&&(a.symbol=n.fromJson(e));this._symbols[c+"-"+b]=a.symbol},toJson:function(){var a=this.infos||[],c=p.fixJson,b=a[0]&&a[0].minValue,e=this.backgroundFillSymbol,a=g.mixin(this.inherited(arguments),{type:"classBreaks",
field:this.attributeField,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),backgroundFillSymbol:e&&e.toJson(),minValue:-Infinity===b?-Number.MAX_VALUE:b,classBreakInfos:m.map(a,function(a){a=g.mixin({},a);a.symbol=a.symbol&&a.symbol.toJson();a.classMaxValue=Infinity===a.maxValue?Number.MAX_VALUE:a.maxValue;delete a.minValue;delete a.maxValue;return c(a)})});this._copy(["defaultLabel","classificationMethod:sdk","normalizationType:sdk","normalizationField","normalizationTotal"],this,a);
a.hasOwnProperty("normalizationType")&&!a.normalizationType&&delete a.normalizationType;a.hasOwnProperty("classificationMethod")&&!a.classificationMethod&&delete a.classificationMethod;return c(a)}});q("extend-esri")&&g.setObject("renderer.ClassBreaksRenderer",k,r);return k});