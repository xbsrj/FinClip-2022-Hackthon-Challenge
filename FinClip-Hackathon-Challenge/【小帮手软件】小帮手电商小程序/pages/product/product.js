(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"0506":function(e,o,t){"use strict";(function(e){t("2968");s(t("66fd"));var o=s(t("251b"));function s(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("543d")["createPage"])},"251b":function(e,o,t){"use strict";t.r(o);var s=t("3335"),n=t("6a5f");for(var i in n)"default"!==i&&function(e){t.d(o,e,(function(){return n[e]}))}(i);t("7707");var c,r=t("f0c5"),a=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],c);o["default"]=a.exports},3335:function(e,o,t){"use strict";var s;t.d(o,"b",(function(){return n})),t.d(o,"c",(function(){return i})),t.d(o,"a",(function(){return s}));var n=function(){var e=this,o=e.$createElement,t=(e._self._c,!e.isPoint&&e.goods.flashsale_id>0?e._f("moneyFormat")(e.goods.flashsale_price_low):null),s=!e.isPoint&&e.goods.flashsale_id>0&&e.goods.coupon_par>0?e._f("moneyFormat")(e.goods.flashsale_price_low-e.goods.coupon_par):null,n=e.isPoint||!(e.goods.flashsale_id>0)||e.goods.coupon_par>0?null:e._f("moneyFormat")(e.goods.price_low),i=e.isPoint||e.goods.flashsale_id>0?null:e._f("moneyFormat")(e.goods.price_low),c=e.isPoint||e.goods.flashsale_id>0||!(e.goods.coupon_par>0)?null:e._f("moneyFormat")(e.goods.price_low-e.goods.coupon_par),r=e.isPoint||e.goods.flashsale_id>0||e.goods.coupon_par>0?null:e._f("moneyFormat")(e.goods.price_market),a=e.isPoint?e._f("moneyFormat")(e.goods.point_low):null,l=e.isPoint?e._f("moneyFormat")(e.goods.price_market):null,p=e.isPoint?null:e._f("moneyFormat")(e.specPrice),u=!e.isPoint&&e.specPriceCoupon<e.specPrice?e._f("moneyFormat")(e.specPriceCoupon):null,h=e.isPoint&&""!=e.specPointPrice?e._f("moneyFormat")(e.specPointPrice):null;e.$mp.data=Object.assign({},{$root:{f0:t,f1:s,f2:n,f3:i,f4:c,f5:r,f6:a,f7:l,f8:p,f9:u,f10:h}})},i=[]},"6a5f":function(e,o,t){"use strict";t.r(o);var s=t("a8c9"),n=t.n(s);for(var i in s)"default"!==i&&function(e){t.d(o,e,(function(){return s[e]}))}(i);o["default"]=n.a},7707:function(e,o,t){"use strict";var s=t("aa9c"),n=t.n(s);n.a},a8c9:function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=i(t("a34a")),n=t("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function c(e,o){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=r(e))||o&&e&&"number"===typeof e.length){t&&(e=t);var s=0,n=function(){};return{s:n,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==t.return||t.return()}finally{if(a)throw i}}}}function r(e,o){if(e){if("string"===typeof e)return a(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,o):void 0}}function a(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,s=new Array(o);t<o;t++)s[t]=e[t];return s}function l(e,o,t,s,n,i,c){try{var r=e[i](c),a=r.value}catch(l){return void t(l)}r.done?o(a):Promise.resolve(a).then(s,n)}function p(e){return function(){var o=this,t=arguments;return new Promise((function(s,n){var i=e.apply(o,t);function c(e){l(i,s,n,c,r,"next",e)}function r(e){l(i,s,n,c,r,"throw",e)}c(void 0)}))}}function u(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);o&&(s=s.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,s)}return t}function h(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?u(Object(t),!0).forEach((function(o){d(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function d(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var g=function(){t.e("components/common/copyright").then(function(){return resolve(t("749f"))}.bind(null,t)).catch(t.oe)},f=function(){t.e("components/uni-number-box").then(function(){return resolve(t("0b32"))}.bind(null,t)).catch(t.oe)},m=function(){t.e("components/common/share").then(function(){return resolve(t("2e5b"))}.bind(null,t)).catch(t.oe)},_=function(){t.e("components/common/contact").then(function(){return resolve(t("5f19"))}.bind(null,t)).catch(t.oe)},v={components:{uniNumberBox:f,share:m,copyright:g,contact:_},data:function(){return{autoplaySwiper:!0,isVideoPlaying:!1,saleTimer:0,saleCountdown:"",waitTimer:0,waitCountdown:"",id:0,isPoint:!1,from:"",goods:{},specClass:"none",specSelected:{spec1:"",spec2:""},action:"cart",actionNumber:1,favorite:!1,goodsSpec:[],spec1:[],spec2:[],hasStock:!0}},computed:h(h({},(0,n.mapState)(["theme","shareCode","editionSetting"])),{},{flashsaleState:function(){if(this.goods.flashsale_id>0){var e=new Date;console.log("curTime:",e);var o=new Date(this.goods.flashsale_sale_time);console.log("saleTime:",o);var t=new Date(this.goods.flashsale_end_time);return console.log("endTime:",t),e>=t?(console.log(0),0):e>=o?(console.log(1),1):(console.log(2),2)}return 0},buyTip:function(){if(this.goods.coupon_par>0)switch(this.flashsaleState){case 0:return"领券购买";case 1:return"立即抢购";case 2:return"即将开抢"}else switch(this.flashsaleState){case 0:return"立即购买";case 1:return"立即抢购";case 2:return"即将开抢"}},imgList:function(){return console.log("images:",this.goods.images),this.goods.images&&this.goods.images.length>0?this.goods.images.split(","):this.goods.cover?this.goods.cover.split(","):[]},actionTip:function(){return this.hasStock?"cart"===this.action?"加入购物车":this.flashsaleState>0?"立即抢购":this.goods.coupon_par>0?"领券购买":"立即购买":"库存不足"},priceStartTip:function(){return this.goods.price_high>this.goods.price_low?"起":""},pointStartTip:function(){return this.goods.point_high>this.goods.point_low?"起":""},specTip:function(){var e,o="";return e=!0,this.spec1.length>0&&""==this.specSelected.spec1&&(e=!1,o=this.goods.spec1+" "),console.log("tip:",o),this.spec2.length>0&&""==this.specSelected.spec2&&(e=!1,o+=this.goods.spec2),console.log("tip:",o),o=e?"已选择："+this.specSelected.spec1+" "+this.specSelected.spec2:"请选择："+o,console.log("tip:",o),o},specAssign:function(){var e,o=this;return console.log("specSelected:",this.specSelected),console.log("goodsSpec:",this.goodsSpec),e=this.goodsSpec.filter((function(e){return e.spec1_child==o.specSelected.spec1&&e.spec2_child==o.specSelected.spec2})),console.log("specAssign:",e),e},specID:function(){var e=0;return console.log("specAssign:",this.specAssign),this.specAssign.length>0&&(e=this.specAssign[0].ID),console.log("specID:",e),e},specPrice:function(){if(console.log("specAssign:",this.specAssign),this.flashsaleState>0){if(this.specAssign.length>0)return this.specAssign[0].flashsale_price;if(this.goods.flashsale_price_low>=this.goods.flashsale_price_high)return this.goods.flashsale_price_low;var e=this.goods.flashsale_price_low,o=this.goods.flashsale_price_high;return e+" - "+o}if(this.specAssign.length>0)return this.specAssign[0].price;if(this.goods.price_low>=this.goods.price_high)return this.goods.price_low;var t=this.goods.price_low,s=this.goods.price_high;return t+" - "+s},specPriceCoupon:function(){return console.log("specPrice:",this.specPrice),isNaN(this.specPrice)?"errPrice":this.specPrice-this.goods.coupon_par},specPoint:function(){if(console.log("specAssign:",this.specAssign),this.specAssign.length>0)return this.specAssign[0].point;if(this.goods.point_low>=this.goods.point_high)return this.goods.point_low;var e=this.goods.point_low,o=this.goods.point_high;return e+" - "+o},specPointPrice:function(){if(console.log("specAssign:",this.specAssign),this.specAssign.length>0)return this.specAssign[0].point_price;if(this.goods.point_price_low>=this.goods.point_price_high)return this.goods.point_price_low;var e=this.goods.point_price_low,o=this.goods.point_price_high;return e+" - "+o},specStock:function(){var e="quantity_stock";return this.flashsaleState>0&&(e="flashsale_stock"),this.specAssign.length>0?this.specAssign[0][e]:this.goods[e]},specThumb:function(){return this.specAssign.length>0&&this.specAssign[0].thumb.length>0?this.specAssign[0].thumb:this.goods.cover},contentHtml:function(){if(this.goods.content){var e=this.$util.formatRichText(this.goods.content);return console.log("contentHtml:",e),e}return""}}),watch:{specStock:function(e,o){console.log("specStock",e),e<=0?(console.log("库存不足"),this.hasStock=!1):(console.log("有库存"),this.hasStock=!0)}},onLoad:function(o){var t=this;return p(s.default.mark((function n(){var i,c;return s.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),""!==t.theme){s.next=4;break}return s.next=4,t.$util.loadSetting();case 4:return console.log("options:",o),console.log("isPoint:",o.is_point),console.log("from:",o.from),console.log("query string:",o.query),o.is_point&&(t.isPoint=JSON.parse(o.is_point)),t.from=o.from,"mp"===t.from?(console.log("来自客服消息"),i=JSON.parse(o.query),console.log("query object:",i),t.id=+i.id):(console.log("直接获取id"),t.id=+o.id),t.$util.sendThis(t),s.next=14,t.$util.saveShareInner(o);case 14:return console.log("shareQuery:",t.shareQuery),t.shareQuery&&"product"===t.shareQuery[0]&&(t.id=+t.shareQuery[1],t.isPoint=JSON.parse(t.shareQuery[2]),c={data:[]},t.saveShareQuery(c)),s.next=18,t.loadData();case 18:console.log("spec len"),console.log("spec1 len:",t.spec1.length),console.log("spec2 len:",t.spec2.length),1===t.spec1.length&&(t.spec1[0].selected=!0,t.specSelected.spec1=t.spec1[0].name),1===t.spec2.length&&(t.spec2[0].selected=!0,t.specSelected.spec2=t.spec2[0].name),t.updateView();case 24:case"end":return s.stop()}}),n)})))()},onPullDownRefresh:function(){var o=this;return p(s.default.mark((function t(){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("下拉刷新"),t.next=3,o.loadData();case 3:console.log("spec len"),console.log("spec1 len:",o.spec1.length),console.log("spec2 len:",o.spec2.length),1===o.spec1.length&&(o.spec1[0].selected=!0,o.specSelected.spec1=o.spec1[0].name),1===o.spec2.length&&(o.spec2[0].selected=!0,o.specSelected.spec2=o.spec2[0].name),o.updateView(),e.stopPullDownRefresh();case 10:case"end":return t.stop()}}),t)})))()},onShareAppMessage:function(e){var o,t;return"button"===e.from&&(console.log("来自页面内分享按钮"),console.log(e.target)),this.goods.coupon_par>0?(o="券后",t=this.goods.price_low-this.goods.coupon_par):(o="",t=this.goods.price_low),this.isPoint?{title:this.goods.point_low+"积分"+this.pointStartTip+" "+this.goods.title,path:"/pages/product/product?share_code=".concat(this.shareCode,"&id=").concat(this.id,"&is_point=").concat(this.isPoint)}:{title:o+"¥"+t+this.priceStartTip+" "+this.goods.title,path:"/pages/product/product?share_code=".concat(this.shareCode,"&id=").concat(this.id,"&is_point=").concat(this.isPoint)}},onBackPress:function(){console.log("onBackPress"),clearInterval(this.saleTimer),clearInterval(this.waitTimer)},onHide:function(){console.log("onHide"),clearInterval(this.saleTimer),clearInterval(this.waitTimer)},onUnload:function(){console.log("onUnload"),clearInterval(this.saleTimer),clearInterval(this.waitTimer)},methods:h(h({},(0,n.mapMutations)(["saveShareQuery","saveInviterCode"])),{},{playVideo:function(){console.log("playVideo");var e=wx.createVideoContext("video");e.play(),this.isVideoPlaying=!0,this.autoplaySwiper=!1},endedPlay:function(){this.isVideoPlaying=!1,this.autoplaySwiper=!0},swiperChange:function(e){console.log("swiperChange");var o=wx.createVideoContext("video");o.stop(),this.isVideoPlaying=!1,this.autoplaySwiper=!0},loadData:function(){var e=arguments,o=this;return p(s.default.mark((function t(){var n,i,c,r;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:"add",e.length>1?e[1]:void 0,t.next=4,o.$apis.productDetail(o.id);case 4:return o.goods=t.sent,console.log("goods",o.goods),t.next=8,o.$apis.productSpec(o.id);case 8:return o.goodsSpec=t.sent,console.log("goodsSpec",o.goodsSpec),n=1,o.isPoint&&(n=2),t.next=14,o.$apis.auth.favoriteGet(n,o.id);case 14:return o.favorite=t.sent,console.log("favorite",o.favorite),t.next=18,o.$apis.auth.couponGetByPid(o.id);case 18:if(i=t.sent,console.log("coupon",i),i.data.par>=o.goods.coupon_par&&(o.goods.coupon_par=i.data.par,o.goods.coupon_issue_id=0),0!==o.goodsSpec.length){t.next=23;break}return t.abrupt("return");case 23:c=[],r=[],o.spec1=[],o.spec2=[],o.goodsSpec.forEach((function(e){c.includes(e.spec1_child)||""!==e.spec1_child&&"无"!==e.spec1_child&&(c.push(e.spec1_child),o.spec1.push({name:e.spec1_child,selected:!1,enable:!0})),r.includes(e.spec2_child)||""!==e.spec2_child&&"无"!==e.spec2_child&&(r.push(e.spec2_child),o.spec2.push({name:e.spec2_child,selected:!1,enable:!0}))})),console.log("spec1",o.spec1),console.log("spec2",o.spec2),o.waitTimer>0&&clearInterval(o.waitTimer),o.saleTimer>0&&clearInterval(o.saleTimer),1===o.flashsaleState&&(o.saleTimer=setInterval((function(){o.saleCountdown=o.$util.time.countdown(o.goods.flashsale_end_time,"flashsale"),console.log("saleCountdown:",o.saleCountdown),o.saleCountdown<=0&&(clearInterval(o.saleTimer),o.saleCountdown=0,o.loadData())}),1e3)),2===o.flashsaleState&&(o.waitTimer=setInterval((function(){o.waitCountdown=o.$util.time.countdown(o.goods.flashsale_sale_time,"flashsale"),console.log("waitCountdown:",o.waitCountdown),o.waitCountdown<=0&&(clearInterval(o.waitTimer),o.waitCountdown=0,o.loadData())}),1e3));case 34:case"end":return t.stop()}}),t)})))()},numberChange:function(e){console.log("data:",e),this.actionNumber=e.number},navToCoupon:function(){console.log("navToCoupon");var o="/pages/user/coupon?index=3";e.navigateTo({url:o})},doAction:function(o){var t=this;return p(s.default.mark((function n(){var i,c,r,a,l;return s.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(console.log("doAction: ",o),console.log("specID: ",t.specID),console.log("actionNumber: ",t.actionNumber),console.log("id: ",t.id),console.log("hasStock:",t.hasStock),t.hasStock){s.next=7;break}return s.abrupt("return");case 7:if(!(t.goodsSpec.length>0&&0===t.specID&&(t.spec1.length>0||t.spec2.length>0))){s.next=10;break}return t.$helper.msg(t.specTip),s.abrupt("return");case 10:if(!(t.actionNumber>t.specStock)){s.next=13;break}return t.$helper.msg("库存不足"),s.abrupt("return");case 13:s.t0=o,s.next="buy"===s.t0?16:"cart"===s.t0?27:33;break;case 16:if(console.log("coupon_issue_id:",t.goods.coupon_issue_id),!(t.goods.coupon_issue_id>0)){s.next=22;break}return s.next=20,t.$apis.auth.couponReceive(t.goods.coupon_issue_id);case 20:i=s.sent,console.log("res:",i);case 22:return c=[{flashsale_id:t.goods.flashsale_id,is_point:t.isPoint,pid:parseInt(t.id),psid:t.specID,quantity:t.actionNumber,title:t.goods.title,spec1_child:t.specSelected.spec1,spec2_child:t.specSelected.spec2,price:t.specPrice,point:t.specPoint,point_price:t.specPointPrice,thumb:t.specThumb}],console.log("goodsData:",c),t.goodsData=c,e.navigateTo({url:"/pages/order/createOrder?from=product&is_point=".concat(t.isPoint)}),s.abrupt("break",34);case 27:return r={is_point:t.isPoint,pid:parseInt(t.id),psid:t.specID,quantity:t.actionNumber},s.next=30,t.$apis.auth.cartAdd(r);case 30:return a=s.sent,a.errMsg||(l=a,console.log("cid:",l),t.$helper.msg("成功加入购物车"),setTimeout((function(){t.toggleSpec()}),800)),s.abrupt("break",34);case 33:return s.abrupt("break",34);case 34:case"end":return s.stop()}}),n)})))()},toggleSpec:function(e){var o=this;"show"===this.specClass?(this.specClass="hide",setTimeout((function(){o.specClass="none"}),250)):"none"===this.specClass&&(this.specClass="show",this.action=e)},selectSpec:function(e,o){var t,s=this;t="spec1"==e?"spec2":"spec1";var n=this[e];if(console.log(n),n[o].enable){var i,r=n[o].selected;if(n.forEach((function(e){console.log(e),e.selected=!1})),n[o].selected=!r,console.log(n),n[o].selected)this.specSelected[e]=n[o].name,i=this.goodsSpec.filter((function(o){return console.log("item:",o),console.log("spec:",e),o[e+"_child"]==s.specSelected[e]})),console.log("tempEnable:",i),i.length>0&&(this[t].forEach((function(e){e.enable=!1})),this[t].forEach((function(e){var o,s=c(i);try{for(s.s();!(o=s.n()).done;){var n=o.value;if(e.name===n[t+"_child"]){e.enable=!0;break}}}catch(r){s.e(r)}finally{s.f()}})),console.log("other spec enabel:",this[t]));else this.specSelected[e]="",this[t].forEach((function(e){e.enable=!0}))}},toFavorite:function(){var e=this;return p(s.default.mark((function o(){var t,n;return s.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(console.log(e.favorite),t=1,e.isPoint&&(t=2),!e.favorite){o.next=9;break}return o.next=6,e.$apis.auth.favoriteDel(t,e.id);case 6:n=o.sent,o.next=12;break;case 9:return o.next=11,e.$apis.auth.favoriteAdd(t,e.id);case 11:n=o.sent;case 12:n.errMsg||(e.favorite=!e.favorite,"favorite"===e.from&&e.$helper.prePage().refreshList(!0));case 13:case"end":return o.stop()}}),o)})))()},updateView:function(){console.log("updateView"),this.$apis.auth.viewProductAdd(this.id)},stopPrevent:function(){}})};o.default=v}).call(this,t("543d")["default"])},aa9c:function(e,o,t){}},[["0506","common/runtime","common/vendor"]]]);