(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03454372"],{1354:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column vh-100"},[n("div",{staticClass:"page py-4",staticStyle:{"overflow-x":"hidden"}},[n("div",{ref:"iphone",staticClass:"iphoneframe-container"},[n("router-link",{attrs:{to:"/account"}},[n("BackButton")],1),n("transition",{attrs:{name:"fade-top"}},[n("PreviewCardWithIphoneFrame",{directives:[{name:"show",rawName:"v-show",value:e.showPreview,expression:"showPreview"}],staticClass:"w-100",attrs:{image:e.previewCardImage,title:e.previewCardTitle,titleMyan:e.previewCardTitleMyan,desc:e.previewCardDesc,descMyan:e.previewCardDescMyan,isFindOther:!0,isContactUs:!0,type:"service",firstButtonText:"Repair now",secondButtonText:"Connect with us",thirdButtonText:"Contact us"}})],1),e.showPreview?n("div",{staticClass:"mt-4 w-100 d-flex justify-content-center"},[n("button",{staticClass:"btn btn-circle",staticStyle:{width:"40px",height:"40px",background:"#B7B7B7"},on:{click:function(t){e.showPreview=!1}}},[n("CloseIcon",{staticClass:"close-icon"})],1)]):e._e(),n("div",{staticClass:"mt-4 w-100 title"},[n("StageTitle",{attrs:{stageNum:"5",title:e.stageInfoText.title,desc:e.stageInfoText.desc}})],1),n("div",{staticClass:"mt-4 w-100 p-3"},[n("AddedForm",{attrs:{info:e.info,type:"service"},on:{add:e.addServiceInformation,uploadPhoto:e.uploadPhoto},model:{value:e.serviceInfo,callback:function(t){e.serviceInfo=t},expression:"serviceInfo"}})],1),n("div",{staticClass:"w-100 d-flex justify-content-center"},[n("div",{staticClass:"d-flex flex-center btn btn-primary",on:{click:function(t){return e.Preview()}}},[n("EyeIcon",{staticClass:"eye-icon"}),n("span",{staticClass:"ml-1"},[e._v("Preview")])],1)]),n("div",{staticClass:"mt-4 w-100 d-flex flex-center"},[n("router-link",{attrs:{to:"/account/technicalsupports"}},[n("ForwardButton",{nativeOn:{click:function(t){return e.$emit("showPage",1)}}})],1)],1)],1)]),n("bottom-navigation-bar"),e.showLoading?n("Loading"):e._e(),e.shopExist?e._e():n("AlertBox",{attrs:{alertInfo:e.alertInfo},on:{goto:function(t){return e.route("/account/contactinfo")}}})],1)},r=[],o=(n("99af"),n("96cf"),n("1da1")),a=n("9223"),s=n("74c9"),c=n("9a80"),u=n("8a4e"),f=n("d141"),d=n("43a8"),l=n("a3e4"),v=n("bc3a"),p=n.n(v),h=n("b24e"),m=n("2ef0"),w=n("d6df"),I=n("3a5e"),b={components:{PreviewCardWithIphoneFrame:a["a"],StageTitle:d["a"],BackButton:s["a"],ForwardButton:c["a"],AddedForm:l["a"],CloseIcon:u["a"],Loading:I["a"],EyeIcon:f["a"],AlertBox:w["a"],BottomNavigationBar:h["a"]},data:function(){return{showLoading:!0,showPreview:!1,pageActive:!0,isEnabledAskCustomerInfo:!1,photoUploading:!1,serviceID:"",previewCardDefaults:{title:"Your service information is awesome",desc:"Let's us know your informataion on our service.We do appreciate it",image:"https://portalvhdslvb28rs1c3tmc.blob.core.windows.net/yammo/allstaricon/picture.png"},stageInfoText:{title:"'Service' information",desc:"Fill your service information once"},toggles:{askCustomerInfomation:{title:"Ask Customer Information",desc:"Enable this option will ask the customer name, contact number and address."}},serviceInfo:{title:"",desc:"",image:"",titleMyan:"",descMyan:"",fbPageUrl:""},info:{title:"Type 'Service information' title (Eng)",titleMyan:"Type 'Service information' title (Myan)",desc:"Type 'Service information' message (Eng)",descMyan:"Type 'Service information' message (Myan)",photoText:"add 'Service information' image",fbPageUrl:"Type Facebook Page url",type:"ServiceInformation",buttons:[{title:"Repair now"},{title:"Connect with us"},{title:"Contact us"}]},alertInfo:{title:"Alert",msg:"To fill your service information,you need to add contact information first.",buttons:[{text:"Add Shop",action:"goto"}]}}},methods:{addServiceInformation:Object(m["debounce"])(Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.validateForm(),t){e.next=3;break}return e.abrupt("return");case 3:if(n={Guid:this.serviceID,Title:this.serviceInfo.title,Message:this.serviceInfo.desc,ShopGuid:this.shopID},""!=this.promoteID){e.next=9;break}return e.next=7,p.a.post("service/upsert",n).then((function(e){i.serviceID=e.data}));case 7:e.next=11;break;case 9:return e.next=11,p.a.put("service/upsert",n);case 11:case"end":return e.stop()}}),e,this)}))),3e3),uploadPhoto:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i={Guid:t.serviceID,Photo:e,ShopGuid:t.shopID},t.photoUploading=!0,""!=t.serviceID){n.next=7;break}return n.next=5,p.a.post("service/uploadphoto",i).then((function(e){t.photoUploading=!1,t.serviceID=e.data}));case 5:n.next=9;break;case 7:return n.next=9,p.a.put("service/uploadphoto",i).then((function(){t.photoUploading=!1}));case 9:case"end":return n.stop()}}),n)})))()},getService:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.shopID&&"0"!=e.shopID){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,p.a.get("service?shopGuid=".concat(e.shopID,"&customerID=").concat(e.customerID)).then((function(t){null!=t.data&&(e.serviceInfo.title=t.data.tService.Title,e.serviceInfo.image=t.data.tService.PhotoUrl,e.serviceInfo.desc=t.data.tService.Message,e.serviceID=t.data.tService.Guid,e.isEnabledAskCustomerInfo=t.data.isEnabledAskCustInfo),e.showLoading=!1}));case 4:case"end":return t.stop()}}),t)})))()},addShopNature:Object(m["debounce"])(Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.validateForm(),t){e.next=3;break}return e.abrupt("return");case 3:return n={Guid:this.shopID,CustomerID:this.customerID,IsEnabledCustomerInfoForServiceInfo:this.isEnabledAskCustomerInfo},e.next=6,p.a.put("shop/shopNatureFromStepFive",n);case 6:case"end":return e.stop()}}),e,this)}))),3e3),validateForm:function(){return""!=this.serviceInfo.title||""!=this.serviceInfo.desc||""!=this.serviceInfo.image},Preview:function(){this.$refs.iphone.scrollIntoView(),this.showPreview=!0}},mounted:function(){this.getService()},watch:{shopID:function(){this.getService()}},computed:{previewCardTitle:function(){return this.serviceInfo.title?this.serviceInfo.title:this.previewCardDefaults.title},previewCardDesc:function(){return this.serviceInfo.desc?this.serviceInfo.desc:this.previewCardDefaults.desc},previewCardTitleMyan:function(){return this.serviceInfo.titleMyan?this.serviceInfo.titleMyan:this.previewCardDefaults.title},previewCardDescMyan:function(){return this.serviceInfo.descMyan?this.serviceInfo.descMyan:this.previewCardDefaults.desc},previewCardImage:function(){return this.serviceInfo.image?this.serviceInfo.image:this.previewCardDefaults.image},shopID:function(){return this.$store.state.shopID},customerID:function(){return this.$store.state.customerID},shopExist:function(){return"0"!=this.shopID}}},g=b,x=(n("5795"),n("81b8"),n("2877")),C=Object(x["a"])(g,i,r,!1,null,"58e459c2",null);t["default"]=C.exports},"1dde":function(e,t,n){var i=n("d039"),r=n("b622"),o=n("2d00"),a=r("species");e.exports=function(e){return o>=51||!i((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"254b":function(e,t,n){},2659:function(e,t,n){"use strict";var i=n("254b"),r=n.n(i);r.a},"4d14":function(e,t,n){},5795:function(e,t,n){"use strict";var i=n("6ff8"),r=n.n(i);r.a},"65f0":function(e,t,n){var i=n("861d"),r=n("e8b5"),o=n("b622"),a=o("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6ff8":function(e,t,n){},"81b8":function(e,t,n){"use strict";var i=n("4d14"),r=n.n(i);r.a},8418:function(e,t,n){"use strict";var i=n("c04e"),r=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=i(t);a in e?r.f(e,a,o(0,n)):e[a]=n}},"99af":function(e,t,n){"use strict";var i=n("23e7"),r=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),f=n("65f0"),d=n("1dde"),l=n("b622"),v=n("2d00"),p=l("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",w=v>=51||!r((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),I=d("concat"),b=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},g=!w||!I;i({target:"Array",proto:!0,forced:g},{concat:function(e){var t,n,i,r,o,a=s(this),d=f(a,0),l=0;for(t=-1,i=arguments.length;t<i;t++)if(o=-1===t?a:arguments[t],b(o)){if(r=c(o.length),l+r>h)throw TypeError(m);for(n=0;n<r;n++,l++)n in o&&u(d,l,o[n])}else{if(l>=h)throw TypeError(m);u(d,l++,o)}return d.length=l,d}})},d6df:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overlay"},[n("div",{staticClass:"alert-box d-flex flex-column"},[n("div",{staticClass:"d-flex title"},[n("span",[e._v(e._s(e.alertInfo.title))])]),n("div",{staticClass:"d-flex description"},[n("span",[e._v(e._s(e.alertInfo.msg))])]),n("div",{staticClass:"d-flex flex-column buttons"},e._l(e.alertInfo.buttons,(function(t,i){return n("button",{key:i,staticClass:"btn btn-add mb-3",class:{"btn-goback":"back"==t.action},on:{click:function(n){return e.$emit(t.action)}}},[e._v(" "+e._s(t.text)+" ")])})),0)])])},r=[],o={props:{alertInfo:{type:Object}}},a=o,s=(n("2659"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,"0aa19afc",null);t["a"]=c.exports},e8b5:function(e,t,n){var i=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}}}]);
//# sourceMappingURL=chunk-03454372.38042a43.js.map