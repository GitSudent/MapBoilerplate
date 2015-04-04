// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/xml/XmlGenerator","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ./xmlUtil ../../../../kernel".split(" "),function(g,m,n,w,s,x){g=g(null,{nl:"\r\n",tb:"\t",xmlHeader:'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e',constructor:function(a){m.mixin(this,a)},generate:function(a,b,e,d){a={gxeDocument:a,transformer:d};b=this._collect(b,null,{ignoreOptionallyOff:!1,validationTracker:e});b=this._walk(b,!0,a);e&&e.whenComplete();return b},_checkTarget:function(a,
b,e){var d,c="",f="";d=b.widget;b=d.target;a.transformer&&(b=a.transformer.checkTarget(d,b));a=[b];d.inputWidget&&d.inputWidget.subTarget&&(d=m.trim(d.inputWidget.subTarget),0<d.length&&(a.push(d),b=d,c=e+"\x3c"+a[0]+"\x3e",f=e+"\x3c/"+a[0]+"\x3e"));return{aNames:a,sBegin:c,sEnd:f,sName:b}},_collect:function(a,b,e){var d,c,f;f=c=!1;a._isGxeElement?(f=a._isOptionallyOff,a.multiplicityHeader&&a.multiplicityHeader.useTabs&&(f=a.multiplicityHeader._isOptionallyOff)):f=a._isOptionallyOff;if(a._isGxeElement){if(e.ignoreOptionallyOff||
!f)c={isAttribute:!1,widget:a,depth:0,xvalue:null,serialize:!0,references:[],attributeRefs:[],elementRefs:[]},c.xvalue=a.checkXmlValue(),a.isDocumentTitle&&(e.validationTracker.documentTitle=c.xvalue),f=a.validateValue(e.validationTracker),f.isValid||(c.serialize=!1),b&&(c.depth=b.depth+1,b.references.push(c),b.elementRefs.push(c)),b=c,c=!0}else if(a._isGxeAttribute){if(e.ignoreOptionallyOff||!f)d={isAttribute:!0,widget:a,xvalue:null,serialize:!0},d.xvalue=a.checkXmlValue(),a.isDocumentTitle&&(e.validationTracker.documentTitle=
d.xvalue),f=a.validateValue(e.validationTracker),f.isValid||(d.serialize=!1),b&&(b.references.push(d),b.attributeRefs.push(d),d.serialize&&a.isIsoCodeListValue?(b.xvalue=d.xvalue,null===d.xvalue&&(b.serialize=!1)):!d.serialize&&a.isIsoCodeListValue&&(b.serialize=!1))}else if(e.ignoreOptionallyOff||!f)c=!0;c&&n.forEach(a.getChildren(),function(a){this._collect(a,b,e)},this);return b},_renderNamespaces:function(a,b,e,d){if(!b)return a;b=e.getNamespaces();d.transformer&&(b=d.transformer.toDocumentType.getNamespaces());
n.forEach(b,function(b){b.prefix&&b.uri&&(a+=" xmlns:"+b.prefix+'\x3d"'+b.uri+'"')});return a},_walk:function(a,b,e){if(!a.serialize)return"";var d=function(a,b,d,e,c,f,g){c=e+"\x3c"+d+c;0===f.length&&0===g.length?c+="/\x3e":(c+="\x3e",0<f.length&&(c+=f),0<g.length&&(c+=g+e),c+="\x3c/"+d+"\x3e");return a+c+b},c,f,l="",p="",h=this.nl,g="",q=[];for(c=0;c<a.depth;c++)h+=this.tb;b&&(l=this._renderNamespaces(l,b,e.gxeDocument,e));a.serialize&&null!==a.xvalue&&(a.xvalue.push?n.forEach(a.xvalue,function(a){q.push(s.escape(a))},
this):g=s.escape(a.xvalue));n.forEach(a.attributeRefs,function(a){a.serialize&&null!==a.xvalue&&(f=s.escape(a.xvalue),l+=" "+a.widget.target.replace("@","")+'\x3d"'+f+'"')},this);n.forEach(a.elementRefs,function(a){a=this._walk(a,!1,e);null!==a&&0<a.length&&(p+=a)},this);var m=0===l.length&&0===g.length&&0===q.length&&0===p.length;if(m&&!a.widget.serializeIfEmpty)return null;var r=this._checkTarget(e,a,h),t=r.sBegin,u=r.sEnd,v=r.sName;for(c=0;c<r.aNames.length-1;c++)h+=this.tb;var k=null;m&&a.widget.serializeIfEmpty?
k=t+h+"\x3c"+v+"/\x3e"+u:0===q.length?k=d(t,u,v,h,l,g,p):(k="",n.forEach(q,function(a){k+=d(t,u,v,h,l,a,p)}));b&&(k=this.xmlHeader+k);return k}});w("extend-esri")&&m.setObject("dijit.metadata.base.xml.XmlGenerator",g,x);return g});