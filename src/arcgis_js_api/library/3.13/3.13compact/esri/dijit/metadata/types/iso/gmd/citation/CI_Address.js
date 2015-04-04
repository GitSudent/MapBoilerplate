// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/citation/templates/CI_Address.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n\t\tdata-dojo-props\x3d"target:\'gmd:CI_Address\',minOccurs:0"\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:deliveryPoint\',minOccurs:0,maxOccurs:\'unbounded\',\r\n\t\t\t  label:\'${i18nIso.CI_Address.deliveryPoint}\'"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:city\',minOccurs:0,\r\n\t\t\t  label:\'${i18nIso.CI_Address.city}\'"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:administrativeArea\',minOccurs:0,\r\n\t\t\t  label:\'${i18nIso.CI_Address.administrativeArea}\'"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:postalCode\',minOccurs:0,\r\n\t\t\t  label:\'${i18nIso.CI_Address.postalCode}\'"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:country\',minOccurs:0,\r\n\t\t\t  label:\'${i18nIso.CI_Address.country}\'"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:electronicMailAddress\',minOccurs:0,maxOccurs:\'unbounded\',\r\n\t\t\t  label:\'${i18nIso.CI_Address.electronicMailAddress}\'"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\t\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/citation/CI_Address","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement dojo/text!./templates/CI_Address.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.citation.CI_Address",a,f);return a});