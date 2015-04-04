// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/gemini/gmd/freeText/templates/LanguageCode.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3c!-- specific for Gemini --\x3e\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement"\r\n\t\tdata-dojo-props\x3d"target:\'gmd:LanguageCode\'"\x3e\r\n\r\n\t\t\x3c!-- \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e --\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n\t\t\tdata-dojo-props\x3d"value:\'${inspireCodeListPrefix}LanguageCode\'"\x3e\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n\t\t\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nGemini.LanguageCode.eng}\',value:\'eng\',selected:true"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nGemini.LanguageCode.cym}\',value:\'cym\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nGemini.LanguageCode.gle}\',value:\'gle\'"\x3e\x3c/div\x3e\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nGemini.LanguageCode.gla}\',value:\'gla\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nGemini.LanguageCode.cor}\',value:\'cor\'"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nGemini.LanguageCode.sco}\',value:\'sco\'"\x3e\x3c/div\x3e\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\t\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/gemini/gmd/freeText/LanguageCode","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/InputSelectOne ../../../../form/Options ../../../../form/Option ../../../../form/iso/CodeListAttribute ../../../../form/iso/CodeListValueAttribute ../../../../form/iso/CodeListElement dojo/text!./templates/LanguageCode.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.gemini.gmd.freeText.LanguageCode",
a,f);return a});