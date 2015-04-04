/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dom-construct","exports ./_base/kernel ./sniff ./_base/window ./dom ./dom-attr".split(" "),function(e,f,l,n,g,t){function m(a,b){var c=b.parentNode;c&&c.insertBefore(a,b)}function p(a){if("innerHTML"in a)try{a.innerHTML="";return}catch(b){}for(var c;c=a.lastChild;)a.removeChild(c)}var h={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table",
"colgroup"],li:["ul"]},u=/<\s*([\w\:]+)/,q={},v=0,r="__"+f._scopeName+"ToDomId",k;for(k in h)h.hasOwnProperty(k)&&(f=h[k],f.pre="option"==k?'\x3cselect multiple\x3d"multiple"\x3e':"\x3c"+f.join("\x3e\x3c")+"\x3e",f.post="\x3c/"+f.reverse().join("\x3e\x3c/")+"\x3e");var s;8>=l("ie")&&(s=function(a){a.__dojo_html5_tested="yes";var b=w("div",{innerHTML:"\x3cnav\x3ea\x3c/nav\x3e",style:{visibility:"hidden"}},a.body);1!==b.childNodes.length&&"abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g,
function(b){a.createElement(b)});x(b)});e.toDom=function(a,b){b=b||n.doc;var c=b[r];c||(b[r]=c=++v+"",q[c]=b.createElement("div"));8>=l("ie")&&!b.__dojo_html5_tested&&b.body&&s(b);a+="";var d=a.match(u),e=d?d[1].toLowerCase():"",c=q[c];if(d&&h[e]){d=h[e];c.innerHTML=d.pre+a+d.post;for(d=d.length;d;--d)c=c.firstChild}else c.innerHTML=a;if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(e=b.createDocumentFragment();d=c.firstChild;)e.appendChild(d);return e};e.place=function(a,b,c){b=g.byId(b);
"string"==typeof a&&(a=/^\s*</.test(a)?e.toDom(a,b.ownerDocument):g.byId(a));if("number"==typeof c){var d=b.childNodes;!d.length||d.length<=c?b.appendChild(a):m(a,d[0>c?0:c])}else switch(c){case "before":m(a,b);break;case "after":c=a;(d=b.parentNode)&&(d.lastChild==b?d.appendChild(c):d.insertBefore(c,b.nextSibling));break;case "replace":b.parentNode.replaceChild(a,b);break;case "only":e.empty(b);b.appendChild(a);break;case "first":if(b.firstChild){m(a,b.firstChild);break}default:b.appendChild(a)}return a};
var w=e.create=function(a,b,c,d){var f=n.doc;c&&(c=g.byId(c),f=c.ownerDocument);"string"==typeof a&&(a=f.createElement(a));b&&t.set(a,b);c&&e.place(a,c,d);return a};e.empty=function(a){p(g.byId(a))};var x=e.destroy=function(a){if(a=g.byId(a)){var b=a;a=a.parentNode;b.firstChild&&p(b);a&&(l("ie")&&a.canHaveChildren&&"removeNode"in b?b.removeNode(!1):a.removeChild(b))}}});