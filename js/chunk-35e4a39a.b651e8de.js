(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35e4a39a"],{"41ca":function(e,t,s){},"453d":function(e,t,s){},"96da":function(e,t,s){"use strict";var a=s("41ca"),r=s.n(a);r.a},b1da:function(e,t,s){"use strict";var a=s("453d"),r=s.n(a);r.a},b5c6:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"d-flex flex-column vh-100"},[s("div",{staticClass:"page py-4",staticStyle:{"overflow-x":"hidden"}},[s("div",{staticClass:"d-flex justify-content-between ml-3 mb-3 pl-3 pr-2-5"},[e._m(0),s("div",{staticClass:"count"},[e._v(e._s(e.count))])]),s("router-link",{attrs:{to:"/account/manageorders"}},[s("BackButton")],1),s("div",{staticClass:"d-flex align-items-center pt-5 ml-3 mb-3 px-3"},[s("span",{staticClass:"head-icon"},[s("SearchIcon",{staticClass:"icon"})],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search here"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._l(e.orderList,(function(t){return s("div",{key:t.user.user.ID,staticClass:"Customer"},[s("div",{class:e.show==t.user.user.ID?"d-flex justify-content-between bg-gray":"d-flex justify-content-between",on:{click:function(s){return e.showItem(t.user.user.ID)}}},[s("div",{staticClass:"d-flex align-items-center px-3 py-2"},[s("div",{staticClass:"d-flex align-items-center Customer-item ml-3"},[s("div",{staticClass:"d-flex flex-column align-items-center"},[s("div",{staticClass:"circle-image mr-3",style:e.image}),e.show==t.user.user.ID?s("span",{staticClass:"arrow-up mr-3",on:{click:function(t){return t.stopPropagation(),e.hideItem(t)}}},[s("ArrowUpIcon",{staticClass:"arrow"})],1):e._e()]),s("div",{staticClass:"d-flex flex-column mr-3"},[s("span",{staticClass:"Customer--header"},[e._v(e._s(t.user.user.Username))]),s("div",{staticClass:"Customer--subheader"},[s("span",{staticClass:"pt-1"},[e._v(e._s(t.user.user.Phone))]),s("span",{staticClass:"py-1"},[e._v(e._s(t.user.user.Address))]),s("span",{staticClass:"Customer--time"},[e._v("15 mins ago")])])])])]),s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center py-2 px-1-0 icon-container",on:{click:function(s){return s.stopPropagation(),e.confirmedOrder(t.user.voucherCode,t.user.user.UserAccountID)}}},[s("span",[s("CorrectIcon",{staticClass:"icon"})],1),s("span",{staticClass:"icon--subheader"},[e._v("Confirmed")])]),s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center py-2 px-2-0 icon-container"},[s("span",[s("PhoneRingIcon",{staticClass:"icon"})],1),s("span",{staticClass:"icon--subheader"},[e._v("Call")])])]),e.show==t.user.user.ID?s("div",{staticClass:"Product d-flex flex-column bgWhiteGray"},e._l(t.orderDetail,(function(t){return s("div",{key:t.ID,staticClass:"Product-item ml-3 px-3 py-3"},[s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"Product-image mr-3",style:e.image}),s("div",{staticClass:"d-flex flex-column mr-3"},[s("span",{staticClass:"Product--header"},[e._v(e._s(t.ItemName))]),s("div",{staticClass:"Product--subheader"},[s("span",{staticClass:"pt-1"},[e._v(e._s(t.SalePrice)+" MMK")]),s("span",{staticClass:"Product--quantity"},[e._v(e._s(t.ItemQty)+" Qtys")])])])]),s("div",{staticClass:"d-flex"})])})),0):e._e()])}))],2),e.showLoading?s("Loading"):e._e(),s("bottom-navigation-bar")],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header flex-column"},[s("span",{staticClass:"header-text"},[e._v("Order Received")]),s("span",{staticClass:"header-subtext"},[e._v("This view will be shown in messenger.")])])}],n=(s("99af"),s("c740"),s("a434"),s("ac1f"),s("841c"),s("96cf"),s("1da1")),c=s("b24e"),i=s("486a"),o=s("1cd3"),u=s("7c1b"),d=s("8c54"),l=s("74c9"),m=s("3a5e"),h=s("bc3a"),f=s.n(h),p={components:{BottomNavigationBar:c["a"],SearchIcon:i["a"],PhoneRingIcon:o["a"],ArrowUpIcon:u["a"],CorrectIcon:d["a"],BackButton:l["a"],Loading:m["a"]},data:function(){return{search:"",showLoading:!0,show:0,status:"ORDERED",order:[],image:{backgroundImage:"url(https://via.placeholder.com/150)"}}},methods:{showItem:function(e){this.show=e},hideItem:function(){this.show=0},getOrder:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("order/list?shopID=".concat(e.shop.id,"&orderStatus=").concat(e.status,"&name=").concat(e.search));case 2:s=t.sent,null!=s.data&&(e.order=s.data),e.showLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},confirmedOrder:function(e,t){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,f.a.get("order/confirmedorder?voucherCode=".concat(e,"&userAccID=").concat(t,"&orderStatus=").concat(s.status,"&shopID=").concat(s.shop.id));case 2:r=a.sent,200==r.status&&(n=s.order.findIndex((function(e){return e.user.voucherCode==r.data.VoucherCode&&e.user.user.UserAccountID==r.data.UserAccountID})),s.order.splice(n,1),s.$store.commit("updateReceivedCount"));case 4:case"end":return a.stop()}}),a)})))()}},watch:{search:function(){this.getOrder()}},computed:{count:function(){return this.$store.state.received},orderList:function(){return this.order},shop:function(){return this.$store.state.shop}},mounted:function(){this.getOrder()}},v=p,C=(s("b1da"),s("96da"),s("2877")),g=Object(C["a"])(v,a,r,!1,null,"41bcfea2",null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-35e4a39a.b651e8de.js.map