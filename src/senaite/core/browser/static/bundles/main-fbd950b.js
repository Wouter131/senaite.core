!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/++plone++senaite.core.static/bundles",n(n.s=1)}([function(e,t){e.exports=jQuery},function(e,t,n){n(2),e.exports=n(5)},function(e,t,n){"use strict";var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a},l=n(3);document.addEventListener("DOMContentLoaded",(function(){console.debug("*** SENAITE CORE JS LOADED ***"),window.i18n=l.i18n,window._t=l._t,window._p=l._p,window.portal_url=document.querySelector("body").dataset.portalUrl,tinymce.init({selector:"textarea.mce_editable,div.ArchetypesRichWidget textarea,textarea[name='form.widgets.IRichTextBehavior.text']",plugins:["paste","link","autoresize","fullscreen","table","code"],content_css:"/++plone++senaite.core.static/bundles/main.css"}),(0,r.default)("#sidebar-header").on("click",(function(){(0,r.default)("#sidebar").toggleClass("minimized")}))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._p=t._t=t.i18n=void 0;var a,o=n(4),r=(a=o)&&a.__esModule?a:{default:a};var l=t.i18n=new r.default,u=null,i=(t._t=function(e,t){return null===u&&(console.debug("*** Loading `senaite.core` i18n MessageFactory ***"),l.loadCatalog("senaite.core"),u=l.MessageFactory("senaite.core")),u(e,t)},null);t._p=function(e,t){return null===i&&(console.debug("*** Loading `plone` i18n MessageFactory ***"),l.loadCatalog("plone"),i=l.MessageFactory("plone")),i(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};t.default=function(){var e=this;e.baseUrl=(0,r.default)("body").attr("data-i18ncatalogurl"),e.currentLanguage=(0,r.default)("html").attr("lang")||"en",e.currentLanguage.split("-").length>1&&(e.currentLanguage=e.currentLanguage.split("-")[0]+"_"+e.currentLanguage.split("-")[1].toUpperCase()),e.storage=null,e.catalogs={},e.ttl=864e5,Date.now||(Date.now=function(){return(new Date).valueOf()});try{"localStorage"in window&&null!==window.localStorage&&"JSON"in window&&null!==window.JSON&&(e.storage=window.localStorage)}catch(e){}e.configure=function(t){for(var n in t)e[n]=t[n]},e._setCatalog=function(t,n,a){t in e.catalogs||(e.catalogs[t]={}),e.catalogs[t][n]=a},e._storeCatalog=function(t,n,a){var o=t+"-"+n;null!==e.storage&&null!==a&&(e.storage.setItem(o,JSON.stringify(a)),e.storage.setItem(o+"-updated",Date.now()))},e.getUrl=function(t,n){return e.baseUrl+"?domain="+t+"&language="+n},e.loadCatalog=function(t,n){if(void 0===n&&(n=e.currentLanguage),null!==e.storage){var a=t+"-"+n;if(a in e.storage&&Date.now()-parseInt(e.storage.getItem(a+"-updated"),10)<e.ttl){var o=JSON.parse(e.storage.getItem(a));return void e._setCatalog(t,n,o)}}e.baseUrl&&r.default.getJSON(e.getUrl(t,n),(function(a){null!==a&&(e._setCatalog(t,n,a),e._storeCatalog(t,n,a))}))},e.MessageFactory=function(t,n){return n=n||e.currentLanguage,function(a,o){var r,l,u;if(r=t in e.catalogs&&n in e.catalogs[t]&&a in e.catalogs[t][n]?e.catalogs[t][n][a]:a,o)for(u in o)o.hasOwnProperty(u)&&(l=new RegExp("\\$\\{"+u+"\\}","g"),r=r.replace(l,o[u]));return r}}}},function(e,t,n){}]);