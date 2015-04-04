// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/gemini/gmd/dataQuality/templates/Scope.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3c!-- specific for Gemini --\x3e\r\n\t\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n\t\tdata-dojo-props\x3d"target:\'gmd:scope\',minOccurs:0,showHeader:false"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:DQ_Scope\',minOccurs:0"\x3e\r\n\t\t\t\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gmd:level\',\r\n\t\t\t\t\tlabel:\'${i18nIso.DQ_Scope.level}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/maintenance/MD_ScopeCode"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gmd:levelDescription\',minOccurs:0,maxOccurs:\'unbounded\',\r\n\t\t\t\t\tlabel:\'${i18nIso.DQ_Scope.levelDescription}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:MD_ScopeDescription\',minOccurs:0"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice"\x3e\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:attributes\',minOccurs:1,maxOccurs:\'unbounded\',\r\n\t\t\t\t\t\t\t\tlabel:\'${i18nIso.MD_ScopeDescription.attributes}\'"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'xlink:href\',minOccurs:1,\r\n\t\t\t\t\t\t\t\t\tlabel:\'${i18nIso.general.reference}\'"\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\t\r\n\t\t\t\t\t\t\x3c/div\x3e\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:features\',minOccurs:1,maxOccurs:\'unbounded\',\r\n\t\t\t\t\t\t\t\tlabel:\'${i18nIso.MD_ScopeDescription.features}\'"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'xlink:href\',minOccurs:1,\r\n\t\t\t\t\t\t\t\t\tlabel:\'${i18nIso.general.reference}\'"\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\t\r\n\t\t\t\t\t\t\x3c/div\x3e\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:featureInstances\',minOccurs:1,maxOccurs:\'unbounded\',\r\n\t\t\t\t\t\t\t\tlabel:\'${i18nIso.MD_ScopeDescription.featureInstances}\'"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'xlink:href\',minOccurs:1,\r\n\t\t\t\t\t\t\t\t\tlabel:\'${i18nIso.general.reference}\'"\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\t\r\n\t\t\t\t\t\t\x3c/div\x3e\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:attributeInstances\',minOccurs:1,maxOccurs:\'unbounded\',\r\n\t\t\t\t\t\t\t\tlabel:\'${i18nIso.MD_ScopeDescription.attributeInstances}\'"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'xlink:href\',minOccurs:1,\r\n\t\t\t\t\t\t\t\t\tlabel:\'${i18nIso.general.reference}\'"\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\t\r\n\t\t\t\t\t\t\x3c/div\x3e\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\t  data-dojo-props\x3d"target:\'gmd:dataset\',\r\n\t\t\t\t\t\t  \tlabel:\'${i18nIso.MD_ScopeDescription.dataset}\'"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\t  data-dojo-props\x3d"target:\'gmd:other\',\r\n\t\t\t\t\t\t  \tlabel:\'${i18nIso.MD_ScopeDescription.other}\'"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\x3c/div\x3e\t\t\t\t\t\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/gemini/gmd/dataQuality/Scope","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Attribute ../../../../form/Element ../../../../form/ElementChoice ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListReference ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ../../../iso/gmd/maintenance/MD_ScopeCode dojo/text!./templates/Scope.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,
m,n,p,q,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.gemini.gmd.dataQuality.Scope",a,f);return a});