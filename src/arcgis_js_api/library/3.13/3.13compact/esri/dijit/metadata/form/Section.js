// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/templates/Section.html":'\x3cdiv class\x3d"gxeSection"\x3e\r\n  \x3cdiv class\x3d"gxeHeader" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeContainer" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/form/Section","dojo/_base/declare dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/has ../base/Templated dojo/text!./templates/Section.html ../../../kernel".split(" "),function(b,c,l,d,e,f,g,h,k){b=b([g],{templateString:h,label:null,showHeader:!0,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.initializeSection(),this.inherited(arguments))},getLabelString:function(){var a=this.label;return"undefined"!==typeof a&&
null!=a?a:null},initializeSection:function(){var a=this.getLabelString();this.showHeader?this.setLabel(a):this.headerNode&&(e.destroy(this.headerNode),this.labelNode=this.headerNode=null)},setLabel:function(a){this.labelNode&&("undefined"===typeof a&&(a=null),this.label=a,this.setI18nNodeText(this.labelNode,a),null!==a&&d.add(this.domNode,"gxeIndent"))}});f("extend-esri")&&c.setObject("dijit.metadata.form.Section",b,k);return b});