(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{536:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return c}));r(10);var n=r(0),o=r.n(n),a=r(40),i=r(550);e.default=function(t){return o.a.createElement(i.a,Object.assign({},t,{chartTitle:"Race % DPS Gain"}),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement(a.Trans,{id:"If you are interested in how the different races in World of Warcraft compare for this build, you can check out the following chart. However, keep in mind that race differences are usually rather small and can change with balance and gameplay changes. You can always play the race you want to play and do not have to feel compelled to choose based on this chart."}))))};var c="2247404640"},546:function(t,e,r){t.exports=r(547)},547:function(t,e,r){r(3),r(4),r(12),r(88),r(2),r(32),r(15),r(9);var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n=u;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?p:h,l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var u="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function m(){}function g(){}function v(){}var y={};y[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==r&&n.call(b,a)&&(y=b);var x=v.prototype=m.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var c=s(t[r],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=x.constructor=v,v.constructor=g,v[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(l(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},548:function(t,e,r){r(3),r(4),r(12),r(88),r(2),r(32),r(15),r(9),function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag",s="object"==typeof t,u=e.regeneratorRuntime;if(u)s&&(t.exports=u);else{(u=e.regeneratorRuntime=s?t.exports:{}).wrap=b;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={},g={};g[i]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(P([])));y&&y!==n&&o.call(y,i)&&(g=y);var w=k.prototype=E.prototype=Object.create(g);L.prototype=w.constructor=k,k.constructor=L,k[l]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},O(S.prototype),S.prototype[c]=function(){return this},u.AsyncIterator=S,u.async=function(t,e,r,n){var o=new S(b(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(w),w[l]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function b(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return V()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=x(t,e,r);if("normal"===l.type){if(n=r.done?d:f,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=d,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function E(){}function L(){}function k(){}function O(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){var e;this._invoke=function(r,n){function a(){return new Promise((function(e,a){!function e(r,n,a,i){var c=x(t[r],t,n);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(s).then((function(t){l.value=t,a(l)}),i)}i(c.arg)}(r,n,e,a)}))}return e=e?e.then(a,a):a()}}function N(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:V}}function V(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},549:function(t,e,r){var n,o,a;n={},o=0,a=function(t){var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)},t.exports=function(t,e,r){var i;e&&"function"!=typeof e&&(r=e.context||r,i=e.setup,e=e.callback);var c,l,s=document.createElement("script"),u=!1,h=function(){u||(u=!0,l(),e&&e.call(r,c))},f=function(){c=new Error(t||"EMPTY"),h()};if(!s.readyState||"async"in s)l=function(){s.onload=s.onerror=null},s.onerror=f,s.onload=h,s.async=!0,s.charset="utf-8",i&&i.call(r,s),s.src=t,a(s);else{var p=o++,d={loaded:!0,complete:!0},m=!1;l=function(){s.onreadystatechange=s.onerror=null,n[p]=void 0},s.onreadystatechange=function(){var t=s.readyState;if(!c){if(!m&&d[t]&&(m=!0,a(s)),"loaded"===t&&(s.children,"loading"===s.readyState))return f();"complete"===s.readyState&&h()}},s.onerror=f,n[p]=s,i&&i.call(r,s),s.src=t}}},550:function(t,e,r){"use strict";r(137),r(138),r(32);var n=r(0),o=r.n(n),a=r(546),i=r.n(a),c=(r(548),r(88),r(2),r(20),r(549)),l=r.n(c),s=r(39);function u(t){return new Intl.NumberFormat("en-US").format(t)}var h=r(31);function f(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,o)}function p(t,e,r,n,o,a){for(var i=0,c=0;c<t.getNumberOfRows();c++){var l=t.getValue(c,1);l>i&&(i=l)}t.sort({column:1,desc:!0}),t.insertColumn(2,{type:"string",role:"tooltip",p:{html:!0}}),t.insertColumn(3,{type:"string",role:"style"});for(var h=["Human","Dwarf","Night Elf","Night Elf (Day)","Night Elf (Night)","Gnome","Worgen","Draenei","Lightforged Draenei","Void Elf","Dark Iron Dwarf","Kul Tiran","Mechagnome"],f=["Orc","Troll","Tauren","Goblin","Undead","Blood Elf","Highmountain Tauren","Nightborne","Mag'har Orc","Zandalari Troll (Pa'ku)","Zandalari Troll (Kimbul)","Zandalari Troll (Bwonsamdi)","Vulpera"],p=0;p<t.getNumberOfRows();p++){var d="",m=t.getValue(p,0).split("--")[0];d=h.includes(m)?"stroke-width: 3; stroke-color: #1144AA; color: #3366CC":f.includes(m)?"stroke-width: 3; stroke-color: #770000; color: #AA0000":"stroke-width: 3; stroke-color: #4d4d4d; color: #808080";var g=t.getValue(p,1),v=100*((o+g)/o-1),y='\n      <div class="chart-tooltip">\n          <b>'+m+"</b><br/>\n          <b>Increase:</b> "+u(v.toFixed(2))+"% ("+u(g)+" )\n      </div>";t.setValue(p,3,d),t.setValue(p,2,y),t.setValue(p,1,v)}for(var w=[],b=0;b<t.getNumberOfRows();b++){var x=t.getValue(b,0);w.push(Object(s.k)(x,e,r,n,a)),t.setValue(b,0,"")}for(var E=document.getElementById("google-chart-labels"),L=0,k=w;L<k.length;L++){var O=k[L];E.innerHTML+=O}return{data:t,maxDPS:i}}function d(t,e,r,n,o,a,i){for(var c=e.addColumn("number"),l=0,h=0;h<e.getNumberOfRows();h++){for(var f=0,p=1;p<c;p++)e.getValue(h,p)>f&&(f=e.getValue(h,p));f>l&&(l=f),e.setValue(h,c,f)}e.sort([{column:c,desc:!0}]),e.removeColumn(c);for(var d=2;d<=e.getNumberOfColumns();d+=2)e.insertColumn(d,{type:"string",role:"tooltip",p:{html:!0}});for(var m=0;m<e.getNumberOfRows();m++)for(var g=0,v=0,y=1;y<e.getNumberOfColumns();y+=2){var w=e.getValue(m,y),b=w-v,x=100*((a+w)/a-1),E=x-g,L="azerite-stacks"===t?"Stacks: ":"essences"===t?"Rank: ":"corruptions-absolute"===t?"Corruption: ":"corruptions-relative"===t?"":"Item Level: ",k='\n        <div class="chart-tooltip">\n          <b>'+e.getValue(m,0).split("--")[0]+"<br/> "+L+e.getColumnLabel(y)+"</b><br/>\n          <b>Total:</b> "+u(x.toFixed(2))+" % ("+u(w.toFixed())+")<br/>\n          <b>Increase:</b> "+u(E.toFixed(2))+"% ("+u(b.toFixed())+" )\n        </div>";e.setValue(m,y+1,k),e.setValue(m,y,E),g=x>g?x:g,v=w>v?w:v}var O=[];switch(t){case"azerite-levels":case"azerite-stacks":for(var S=0;S<e.getNumberOfRows();S++){var N=e.getValue(S,0);O.push(Object(s.h)(N,r,n,o,i)),e.setValue(S,0,"")}break;case"essences":for(var T=0;T<e.getNumberOfRows();T++){var j=e.getValue(T,0);O.push(Object(s.g)(j,r,n,o,i)),e.setValue(T,0,"")}break;case"trinkets":for(var _=0;_<e.getNumberOfRows();_++){var P=e.getValue(_,0);O.push(Object(s.m)(P,r,n,o,i)),e.setValue(_,0,"")}break;case"corruptions-absolute":case"corruptions-relative":for(var V=0;V<e.getNumberOfRows();V++){var C=e.getValue(V,0);O.push(Object(s.i)(C,r,n,o,i)),e.setValue(V,0,"")}}for(var z=document.getElementById("google-chart-labels"),I=0,G=O;I<G.length;I++){var R=G[I];z.innerHTML+=R}return{data:e,maxDPS:l}}function m(){var t;return t=i.a.mark((function t(e,r,n){var o,a,c,u,f,m,g,v,y,w,b;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.google){t.next=3;break}return t.next=3,new Promise((function(t,e){l()("https://www.gstatic.com/charts/loader.js",(function(r){r&&e(r),t()}))}));case 3:o=window.google,a=document.getElementById("google-chart"),c=e.resultsRaw,u=e.simulationType,f=e.spec,m=e.templateTalents,g=e.templateDPS,v=e.wowClass,y=JSON.parse(c),w=Object(h.e)(m),b=function(){var t,e=new o.visualization.arrayToDataTable(y);switch(u){case"races":t=p(e,v,f,w,g,n);break;case"azerite-levels":case"azerite-stacks":case"essences":case"trinkets":case"corruptions-absolute":case"corruptions-relative":t=d(u,e,v,f,w,g,n)}Object(s.f)();var i=t,c=i.data,l=i.maxDPS,h=100*((g+l)/g-1),m=Math.floor(h),b=m%2==0?m:m+1,x=[];switch(u){case"races":for(var E=1;E<=2*b;E++)x.push(.5*E);break;case"azerite-levels":case"azerite-stacks":case"essences":case"trinkets":case"corruptions-absolute":for(var L=1;L<=b/2;L++)x.push(2*L);break;case"corruptions-relative":for(var k=.05;k<=h;k+=.05)x.push(k)}var O,S,N,T,j,_,P,V=a.parentElement,C=V.innerWidth-2*window.getComputedStyle(V,null).getPropertyValue("padding-left"),z=document.documentElement.clientWidth>=768?C:700,I={title:r,backgroundColor:"#303030",height:130+25.5*y.length,width:z,isStacked:"races"!==u,chartArea:{top:50,bottom:100,right:100,left:330},fontName:'"Roboto", "Helvetica", "Arial", sans-serif',titleTextStyle:{fontSize:18,color:"white"},vAxis:{textStyle:{fontSize:14,color:"white"}},hAxis:{gridlines:{count:x.length},format:"#.##'%'",textStyle:{fontSize:14,color:"white"},ticks:x,title:"% DPS Gain",titleTextStyle:{fontSize:18,color:"white"},viewWindowMode:"maximized",viewWindow:{min:0}},legend:{position:"races"===u?"none":"right",textStyle:{fontSize:14,color:"white"}},tooltip:{isHtml:!0}};new o.visualization.BarChart(a).draw((O=c,S=new window.google.visualization.DataView(O),N=S.getFilteredRows([{column:1,value:null}]),S.hideRows(N),S.toDataTable()),I),(T=document.getElementById("results-loader")).parentNode.removeChild(T),j=I.chartArea,_=document.getElementById("google-chart"),P=document.getElementById("chart-overlay"),_.onmousemove=function(t){var e=_.getBoundingClientRect(),r=e.left+j.left+window.scrollX,n=e.right-j.right+window.scrollX,o=e.top+j.top+window.scrollY,a=e.bottom-j.bottom+window.scrollY;t.pageX>=r&&t.pageX<=n&&t.pageY>=o&&t.pageY<=a?(P.style.display="block",P.style.top=o+"px",P.style.left=t.pageX+"px",P.style.height=_.offsetHeight-j.top-j.bottom+"px"):P.style.display="none"}},o.charts.load("current",{packages:["corechart"]}),o.charts.setOnLoadCallback(b);case 11:case"end":return t.stop()}}),t)})),(m=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))}).apply(this,arguments)}var g=r(527),v=r.n(g),y=r(89),w=r.n(y),b=r(529),x=r.n(b),E=(r(3),r(4),r(7),r(37));var L=r(41),k=r.n(L);var O=E.b.div.withConfig({componentId:"sc-1cvojtj-0"})(["> h3{margin-bottom:0;}> p{align-items:stretch;display:flex;margin-top:0;> textarea{background-color:",";border:none;color:",";padding:8px;resize:vertical;width:100%;}> button{background-color:",";border-radius:0;}}"],(function(t){return t.theme.palette.primary.light}),(function(t){return t.theme.palette.common.white}),(function(t){return t.theme.palette.primary.light})),S=function(t){var e=t.elementId,r=t.text,n=t.title,a=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["elementId","text","title"]);return o.a.createElement(O,a,o.a.createElement("h3",null,n),o.a.createElement("p",null,o.a.createElement("textarea",{id:e,rows:"1",defaultValue:r,readOnly:!0}),o.a.createElement(k.a,{onClick:function(){!function(t){document.getElementById(t).select(),document.execCommand("Copy")}(e)}},"Copy")))},N=r(526),T=r(528);var j=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=n.prototype;return a.componentDidMount=function(){var t=this.props,e=t.chartTitle,r=t.i18nPlugin;(function(t,e,r){return m.apply(this,arguments)})(t.pageContext,e,r.lang).catch((function(t){console.error(t)}))},a.render=function(){var t=this.props,e=t.children,r=t.data,n=t.i18nPlugin,a=t.pageContext,i=n.t,c=a.azeriteForgeWeights,l=a.azeritePowerWeights,u=a.fightStyle,h=a.fightLength,f=a.fightLengthVariation,p=(a.name,a.simcBuildTimestamp),d=a.simcGitRevision,m=a.simulationFeaturedOrder,g=a.simulationCategory,y=a.simulationType,b=a.spec,E=a.targetError,L=a.templateGear,k=a.templateTalents,O=a.templateDPS,j=a.tier,_=a.variation,P=a.wowBuild,V=a.wowClass,C=a.wowVersion;return o.a.createElement("div",null,o.a.createElement("h1",null,w()(y)," ",v()(u)," ",v()(j)," ",Object(s.d)(i,b,_)," ",w()(i(V))),e,o.a.createElement(N.a,{data:r,fightStyle:u,simulationFeaturedOrder:m,simulationCategory:g,simulationType:y,spec:b,t:i,tier:j,variation:_}),o.a.createElement(T.a,{i18nPlugin:n,fightLength:h,fightLengthVariation:f,simcBuildTimestamp:p,simulationCategory:g,simcGitRevision:d,targetError:E,templateGear:L,templateTalents:k,templateDPS:O,wowBuild:P,wowClass:V,wowVersion:C}),c&&o.a.createElement(S,{elementId:"azerite-forge-weights",text:c,title:"AzeriteForge Import String"}),l&&o.a.createElement(S,{elementId:"azerite-power-weights",text:l,title:"AzeritePowerWeights Import String"}),y.includes("azerite")&&o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("span",{className:"azerite-tier3-specific"},"Outer Ring (Spec Specific)")," | ",o.a.createElement("span",{className:"azerite-tier3-generic"},"Outer Ring (Generic)")," | ",o.a.createElement("span",{className:"azerite-tier2"},"Inner Ring")),y.includes("essences")&&o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement("span",{className:"azerite-essence-major"},"Major + Minor")," | ",o.a.createElement("span",{className:"azerite-essence-minor"},"Minor")),o.a.createElement(x.a,{id:"results-loader",color:"secondary"}),o.a.createElement("div",{id:"chart-overlay"}),o.a.createElement("div",{id:"google-chart-labels"}),o.a.createElement("div",{id:"google-chart"}))},n}(o.a.Component);e.a=j}}]);