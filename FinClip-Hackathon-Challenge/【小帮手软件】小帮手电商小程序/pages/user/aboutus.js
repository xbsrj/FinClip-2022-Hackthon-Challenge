(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/aboutus"],{"0a1a":function(t,e,n){"use strict";(function(t){n("2968");r(n("66fd"));var e=r(n("ed79"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"0aa2":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"131f":function(t,e,n){},"16cc":function(t,e,n){"use strict";n.r(e);var r=n("1a21"),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e["default"]=o.a},"1a21":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=c(n("a34a")),o=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,o,c,a){try{var u=t[c](a),i=u.value}catch(f){return void n(f)}u.done?e(i):Promise.resolve(i).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function u(t){a(c,r,o,u,i,"next",t)}function i(t){a(c,r,o,u,i,"throw",t)}u(void 0)}))}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){n.e("components/common/copyright").then(function(){return resolve(n("749f"))}.bind(null,n)).catch(n.oe)},d={components:{copyright:s},data:function(){return{content:""}},computed:f(f({},(0,o.mapState)(["theme"])),{},{contentHtml:function(){var t=this.$util.formatRichText(this.content);return console.log("contentHtml:",t),t}}),onLoad:function(t){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==e.theme){n.next=3;break}return n.next=3,e.$util.loadSetting();case 3:return console.log("options:",t),n.next=6,e.loadData();case 6:case"end":return n.stop()}}),n)})))()},onPullDownRefresh:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("下拉刷新"),n.next=3,e.loadData();case 3:t.stopPullDownRefresh();case 4:case"end":return n.stop()}}),n)})))()},methods:{loadData:function(){var t=this;return u(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("loadData"),e.next=3,t.$apis.richtext("关于我们");case 3:n=e.sent,console.log("res:",n),t.content=n.data.content,console.log("content:",t.content);case 7:case"end":return e.stop()}}),e)})))()}}};e.default=d}).call(this,n("543d")["default"])},6234:function(t,e,n){"use strict";var r=n("131f"),o=n.n(r);o.a},ed79:function(t,e,n){"use strict";n.r(e);var r=n("0aa2"),o=n("16cc");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("6234");var a,u=n("f0c5"),i=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=i.exports}},[["0a1a","common/runtime","common/vendor"]]]);