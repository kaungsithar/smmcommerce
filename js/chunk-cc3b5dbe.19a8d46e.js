(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc3b5dbe"],{"2fba":function(t,e,n){"use strict";var a=n("6bc1"),i=n.n(a);i.a},"3cb6":function(t,e,n){"use strict";var a=n("a53b"),i=n.n(a);i.a},5922:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iphoneframe-container"},[n("BackButton",{on:{click:function(e){return t.$emit("showAccountInfo")}}}),n("PreviewCardWithIphoneFrame",{staticClass:"w-100",attrs:{image:t.previewCardImage,title:t.previewCardTitle,desc:t.previewCardDesc,firstButtonText:"Find related products",secondButtonText:"Find all products",thirdButtonText:"Contact us"}})],1)},i=[],o=n("9223"),r=n("74c9"),c={components:{BackButton:r["a"],PreviewCardWithIphoneFrame:o["a"]},data:function(){return{pageActive:!0,previewCardDefaults:{title:"Your Product Category",desc:"Description for production information will be provided here",image:"https://images.pexels.com/photos/2666467/pexels-photo-2666467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},stageInfoText:{title:"Provide your contact Information",desc:"Fill your contact information once"},toggles:{contactUsCard:{title:"Feature 'Contact Us' Information",desc:"Enable this option will feature 'Contact us' information as a separate card in product list"},contactUsButton:{title:"Show 'Contact us' button inside product card",desc:"Enable this option will feature 'Contact us' information as a separate card in product list"},checkFacebook:{title:"Show 'Check our facebook' button inside product card",desc:"Enable this option will show 'Check our facebook' button in product card"},feature:{title:"Feature my company",desc:"Enable this option will show 'Check our facebook' button inproduct card"}},companyName:"",companyAddress:"",companyImage:""}},computed:{previewCardTitle:function(){return this.companyName?this.companyName:this.previewCardDefaults.title},previewCardDesc:function(){return this.companyAddress?this.companyAddress:this.previewCardDefaults.desc},previewCardImage:function(){return this.companyImage?this.companyImage:this.previewCardDefaults.image}}},s=c,u=(n("3cb6"),n("2877")),l=Object(u["a"])(s,a,i,!1,null,null,null);e["default"]=l.exports},"6bc1":function(t,e,n){},"6d8d":function(t,e,n){"use strict";var a=n("7493"),i=n.n(a);i.a},7493:function(t,e,n){},"74c9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white d-flex flex-center",class:{wave:t.animate},on:{click:t.animateWave}},[n("BackIcon")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"enable-background":"new 0 0 443.52 443.52"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 443.52 443.52","xml:space":"preserve"}},[n("g",[n("g",[n("path",{attrs:{d:"M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8\r\n\t\t\tc-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712\r\n\t\t\tL143.492,221.863z"}})])])])},r=[],c=n("2877"),s={},u=Object(c["a"])(s,o,r,!1,null,null,null),l=u.exports,d={components:{BackIcon:l},data:function(){return{animate:!1}},methods:{animateWave:function(){var t=this;this.animate=!0,setTimeout((function(){t.$emit("click")}),50)}}},p=d,m=(n("6d8d"),Object(c["a"])(p,a,i,!1,null,"9c5abeb0",null));e["a"]=m.exports},9223:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"iphone-frame"},[t._m(0),n("div",{staticClass:"preview-card"},[n("div",{staticClass:"cover-image",style:t.cardImage}),n("div",{staticClass:"content"},[n("strong",[t._v(t._s(t.title))]),n("span",[t._v(t._s(t.desc))]),t.firstButtonText?n("button",[t._v(t._s(t.firstButtonText))]):t._e(),t.secondButtonText?n("button",[t._v(t._s(t.secondButtonText))]):t._e(),t.thirdButtonText?n("button",[t._v(t._s(t.thirdButtonText))]):t._e()])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("strong",[t._v("Preview")]),n("br"),n("span",[t._v("This view will be shown in messenger")])])}],o={props:{image:String,title:String,desc:String,firstButtonText:String,secondButtonText:String,thirdButtonText:String},computed:{cardImage:function(){return{background:'url("'.concat(this.image,'")  center / cover no-repeat'),color:"red"}}}},r=o,c=(n("2fba"),n("2877")),s=Object(c["a"])(r,a,i,!1,null,null,null);e["a"]=s.exports},a53b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-cc3b5dbe.19a8d46e.js.map