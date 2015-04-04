// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/extent/templates/GeographicElement.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n\t\tdata-dojo-props\x3d"target:\'gmd:geographicElement\',minOccurs:1,maxOccurs:1,\r\n\t\t\tlabel:\'${i18nIso.EX_Extent.geographicElement}\'"\x3e\r\n\t\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n\t\t\tdata-dojo-props\x3d"target:\'gmd:EX_GeographicBoundingBox\',minOccurs:0"\x3e\r\n\t\t\t\x3cdiv class\x3d"gxeGeoExtentSection"\x3e\t\r\n\t\t\t\r\n\t\t\t\t\x3cdiv class\x3d"gxeGeoExtentCoordinates"\x3e\t\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:westBoundLongitude\',\r\n\t\t\t\t\t\t  label:\'${i18nIso.EX_GeographicBoundingBox.westBoundLongitude}\'"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gco:Decimal\',value:-180"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"hint:\'${i18nBase.hints.longitude}\'"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GeoExtentTool"\r\n\t\t\t\t\t\t\t\t\tdata-dojo-props\x3d"label:\'${i18nBase.geoExtent.button}\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:eastBoundLongitude\',\r\n\t\t\t\t\t\t  label:\'${i18nIso.EX_GeographicBoundingBox.eastBoundLongitude}\'"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gco:Decimal\',value:180"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"hint:\'${i18nBase.hints.longitude}\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:southBoundLatitude\',\r\n\t\t\t\t\t\t  label:\'${i18nIso.EX_GeographicBoundingBox.southBoundLatitude}\'"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gco:Decimal\',value:-90"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"hint:\'${i18nBase.hints.latitude}\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gmd:northBoundLatitude\',\r\n\t\t\t\t\t\t  label:\'${i18nIso.EX_GeographicBoundingBox.northBoundLatitude}\'"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d"target:\'gco:Decimal\',value:90"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d"hint:\'${i18nBase.hints.latitude}\'"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\r\n\t\t\t\t\x3cdiv class\x3d"gxeGeoExtentViewSection gxeViewOnly"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"gxeGeoExtentBottom"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\r\n\t\x3c/div\x3e\t\t\t\r\n\t\t\t\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/extent/GeographicElement","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputNumber ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement ../../../../form/iso/GeoExtentTool ../../../../form/iso/ObjectReference dojo/text!./templates/GeographicElement.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.extent.GeographicElement",
a,f);return a});