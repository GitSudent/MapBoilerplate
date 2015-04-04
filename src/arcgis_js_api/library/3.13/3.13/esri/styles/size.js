// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
define("esri/styles/size",["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],function(s,t,v,w,d){function u(a,b){var c,e,h;if(a)switch(c={},b){case "point":c.color=new d(a.color);c.noDataColor=new d(a.noDataColor);c.outline={color:new d(a.outline.color),width:a.outline.width};c.size=a.size;c.noDataSize=a.noDataSize;c.minSize=a.minSize;c.maxSize=a.maxSize;break;case "line":c.color=new d(a.color);c.noDataColor=new d(a.noDataColor);c.width=a.width;c.noDataWidth=a.noDataWidth;c.minWidth=
a.minWidth;c.maxWidth=a.maxWidth;break;case "polygon":e=a.marker,h=a.background,c.marker={color:new d(e.color),noDataColor:new d(e.noDataColor),outline:{color:new d(e.outline.color),width:e.outline.width},size:e.size,noDataSize:e.noDataSize,minSize:e.minSize,maxSize:e.maxSize},c.background={color:new d(h.color),outline:{color:new d(h.outline.color),width:h.outline.width}}}return c}function n(a){var b;a&&(b=t.mixin({},a),b.color&&(b.color=new d(b.color)),b.noDataColor&&(b.noDataColor=new d(b.noDataColor)),
b.outline&&(b.outline={color:b.outline.color&&new d(b.outline.color),width:b.outline.width}));return b}function x(a){"esriGeometryPoint"===a||"esriGeometryMultipoint"===a?a="point":"esriGeometryPolyline"===a?a="line":"esriGeometryPolygon"===a&&(a="polygon");return a}var k=[128,128,128,1],p=[128,128,128,1],f=[128,128,128,0.8],g=[128,128,128,0.8],f={primary:{color:[227,139,79,0.8],noDataColor:f,outline:{color:[255,255,255,1],width:1},noDataSize:4,size:12,minSize:8,maxSize:50},secondary:[{color:[128,
128,128,0.8],noDataColor:f,outline:{color:[255,255,255,1],width:1},noDataSize:4,size:12,minSize:8,maxSize:50},{color:[255,255,255,0.8],noDataColor:f,outline:{color:[128,128,128,1],width:1},noDataSize:4,size:12,minSize:8,maxSize:50}]},g={primary:{color:[227,139,79,0.8],noDataColor:g,outline:{color:[51,51,51,1],width:1},noDataSize:4,size:12,minSize:8,maxSize:50},secondary:[{color:[178,178,178,0.8],noDataColor:g,outline:{color:[51,51,51,1],width:1},noDataSize:4,size:12,minSize:8,maxSize:50},{color:[26,
26,26,0.8],noDataColor:g,outline:{color:[128,128,128,1],width:1},noDataSize:4,size:12,minSize:8,maxSize:50}]},l={r:0,g:0,b:0,a:0},q={color:l,outline:{color:{r:166,g:166,b:166,a:1},width:1}},l={color:l,outline:{color:{r:166,g:166,b:166,a:1},width:1}},m={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by varying their size to show data.",basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm".split(" "),dark:["satellite","hybrid",
"dark-gray"]},pointSchemes:{light:f,dark:g},lineSchemes:{light:{primary:{color:[226,119,40,1],noDataColor:k,noDataWidth:1,width:1,minWidth:1,maxWidth:18},secondary:[{color:[77,77,77,1],noDataColor:k,noDataWidth:1,width:1,minWidth:1,maxWidth:18},{color:[153,153,153,1],noDataColor:k,noDataWidth:1,width:1,minWidth:1,maxWidth:18}]},dark:{primary:{color:[226,119,40,1],noDataColor:p,noDataWidth:1,width:1,minWidth:1,maxWidth:18},secondary:[{color:[255,255,255,1],noDataColor:p,noDataWidth:1,width:1,minWidth:1,
maxWidth:18},{color:[153,153,153,1],noDataColor:p,noDataWidth:1,width:1,minWidth:1,maxWidth:18}]}},polygonSchemes:{light:{primary:{marker:f.primary,background:l},secondary:[{marker:f.secondary[0],background:l},{marker:f.secondary[1],background:l}]},dark:{primary:{marker:g.primary,background:q},secondary:[{marker:g.secondary[0],background:q},{marker:g.secondary[1],background:q}]}}}},r={};(function(){var a,b,c,e,h,d,f,g;for(a in m)for(e in b=m[a],c=b.basemapGroups,h=r[a]={basemaps:[].concat(c.light).concat(c.dark),
point:{},line:{},polygon:{}},c){d=c[e];for(f=0;f<d.length;f++)g=d[f],b.pointSchemes&&(h.point[g]=b.pointSchemes[e]),b.lineSchemes&&(h.line[g]=b.lineSchemes[e]),b.polygonSchemes&&(h.polygon[g]=b.polygonSchemes[e])}})();k={getAvailableThemes:function(a){var b=[],c,e,d;for(c in m)e=m[c],d=r[c],a&&-1===s.indexOf(d.basemaps,a)||b.push({name:e.name,label:e.label,description:e.description,basemaps:d.basemaps.slice(0)});return b},getSchemes:function(a){var b=a.theme,c=a.basemap,e=x(a.geometryType);a=r[b];
var d;(a=(a=a&&a[e])&&a[c])&&(d={primaryScheme:u(a.primary,e),secondarySchemes:s.map(a.secondary,function(a){return u(a,e)})});return d},cloneScheme:function(a){var b;a&&(b=n(a),b.marker&&(b.marker=n(b.marker)),b.background&&(b.background=n(b.background)));return b}};v("extend-esri")&&t.setObject("styles.size",k,w);return k});