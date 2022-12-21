"use strict";(self["webpackChunkecommercev2"]=self["webpackChunkecommercev2"]||[]).push([[711],{3935:function(t,e,n){n.d(e,{Z:function(){return c}});var i=n(3396),l=n(7139);
/*! vue-number-input v2.0.1 | (c) 2018-present Chen Fengyuan | MIT */
const a=Number.isNaN||window.isNaN,r=/^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/,o=/\.\d*(?:0|9){10}\d*$/,u=(t,e=1e11)=>o.test(String(t))?Math.round(t*e)/e:t;var c=(0,i.aZ)({name:"VueNumberInput",props:{attrs:{type:Object,default:void 0},center:Boolean,controls:Boolean,disabled:Boolean,inputtable:{type:Boolean,default:!0},inline:Boolean,max:{type:Number,default:1/0},min:{type:Number,default:-1/0},name:{type:String,default:void 0},placeholder:{type:String,default:void 0},readonly:Boolean,rounded:Boolean,size:{type:String,default:void 0},step:{type:Number,default:1},modelValue:{type:Number,default:NaN}},emits:["update:modelValue"],data(){return{value:NaN}},computed:{increasable(){return a(this.value)||this.value<this.max},decreasable(){return a(this.value)||this.value>this.min}},watch:{modelValue:{immediate:!0,handler(t,e){a(t)&&"undefined"===typeof e||t===this.value||this.setValue(t)}}},methods:{isNaN:a,change(t){this.setValue(t.target.value)},paste(t){const e=t.clipboardData||window.clipboardData;e&&!r.test(e.getData("text"))&&t.preventDefault()},decrease(){if(this.decreasable){let{value:t}=this;a(t)&&(t=0),this.setValue(u(t-this.step))}},increase(){if(this.increasable){let{value:t}=this;a(t)&&(t=0),this.setValue(u(t+this.step))}},setValue(t){const e=this.value;let n="number"!==typeof t?parseFloat(t):t;a(n)||(this.min<=this.max&&(n=Math.min(this.max,Math.max(this.min,n))),this.rounded&&(n=Math.round(n))),this.value=n,n===e&&(this.$refs.input.value=String(n)),this.$emit("update:modelValue",n,e)}}});const s=["disabled"],d=["name","value","min","max","step","readonly","disabled","placeholder"],p=["disabled"];function m(t,e,n,a,r,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)(["vue-number-input",{"vue-number-input--inline":t.inline,"vue-number-input--center":t.center,"vue-number-input--controls":t.controls,[`vue-number-input--${t.size}`]:t.size}])},[t.controls?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"vue-number-input__button vue-number-input__button--minus",type:"button",tabindex:"-1",disabled:t.disabled||t.readonly||!t.decreasable,onClick:e[0]||(e[0]=(...e)=>t.decrease&&t.decrease(...e))},null,8,s)):(0,i.kq)("v-if",!0),(0,i._)("input",(0,i.dG)({ref:"input",class:"vue-number-input__input"},t.attrs,{type:"number",name:t.name,value:isNaN(t.value)?"":t.value,min:t.min,max:t.max,step:t.step,readonly:t.readonly||!t.inputtable,disabled:t.disabled||!t.decreasable&&!t.increasable,placeholder:t.placeholder,autocomplete:"off",onChange:e[1]||(e[1]=(...e)=>t.change&&t.change(...e)),onPaste:e[2]||(e[2]=(...e)=>t.paste&&t.paste(...e))}),null,16,d),t.controls?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"vue-number-input__button vue-number-input__button--plus",type:"button",tabindex:"-1",disabled:t.disabled||t.readonly||!t.increasable,onClick:e[3]||(e[3]=(...e)=>t.increase&&t.increase(...e))},null,8,p)):(0,i.kq)("v-if",!0)],2)}function v(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&i.firstChild?i.insertBefore(l,i.firstChild):i.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}var h='.vue-number-input[data-v-188efc8c]{display:block;font-size:0;max-width:100%;overflow:hidden;position:relative}.vue-number-input__button[data-v-188efc8c]{background-color:#fff;border:0;border-radius:.25rem;bottom:1px;position:absolute;top:1px;width:2.5rem;z-index:1}.vue-number-input__button[data-v-188efc8c]:focus{outline:none}.vue-number-input__button[data-v-188efc8c]:hover:after,.vue-number-input__button[data-v-188efc8c]:hover:before{background-color:#0074d9}.vue-number-input__button[data-v-188efc8c]:disabled{opacity:.65}.vue-number-input__button[data-v-188efc8c]:disabled:after,.vue-number-input__button[data-v-188efc8c]:disabled:before{background-color:#ddd}.vue-number-input__button[data-v-188efc8c]:after,.vue-number-input__button[data-v-188efc8c]:before{background-color:#111;content:"";left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:background-color .15s}.vue-number-input__button[data-v-188efc8c]:before{height:1px;width:50%}.vue-number-input__button[data-v-188efc8c]:after{height:50%;width:1px}.vue-number-input__button--minus[data-v-188efc8c]{border-bottom-right-radius:0;border-right:1px solid #ddd;border-top-right-radius:0;left:1px}.vue-number-input__button--minus[data-v-188efc8c]:after{visibility:hidden}.vue-number-input__button--plus[data-v-188efc8c]{border-bottom-left-radius:0;border-left:1px solid #ddd;border-top-left-radius:0;right:1px}.vue-number-input__input[data-v-188efc8c]{-moz-appearance:textfield;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;display:block;font-size:1rem;line-height:1.5;max-width:100%;min-height:1.5rem;min-width:3rem;padding:.4375rem .875rem;transition:border-color .15s;width:100%}.vue-number-input__input[data-v-188efc8c]::-webkit-inner-spin-button,.vue-number-input__input[data-v-188efc8c]::-webkit-outer-spin-button{-webkit-appearance:none}.vue-number-input__input[data-v-188efc8c]:focus{border-color:#0074d9;outline:none}.vue-number-input__input[data-v-188efc8c]:disabled,.vue-number-input__input[readonly][data-v-188efc8c]{background-color:#f8f8f8}.vue-number-input--inline[data-v-188efc8c]{display:inline-block}.vue-number-input--inline>input[data-v-188efc8c]{display:inline-block;width:12.5rem}.vue-number-input--center>input[data-v-188efc8c]{text-align:center}.vue-number-input--controls>input[data-v-188efc8c]{padding-left:3.375rem;padding-right:3.375rem}.vue-number-input--small>input[data-v-188efc8c]{border-radius:.1875rem;font-size:.875rem;padding:.25rem .5rem}.vue-number-input--small.vue-number-input--inline>input[data-v-188efc8c]{width:10rem}.vue-number-input--small.vue-number-input--controls>button[data-v-188efc8c]{width:2rem}.vue-number-input--small.vue-number-input--controls>input[data-v-188efc8c]{padding-left:2.5rem;padding-right:2.5rem}.vue-number-input--large>input[data-v-188efc8c]{border-radius:.3125rem;font-size:1.25rem;padding:.5rem 1rem}.vue-number-input--large.vue-number-input--inline>input[data-v-188efc8c]{width:15rem}.vue-number-input--large.vue-number-input--controls>button[data-v-188efc8c]{width:3rem}.vue-number-input--large.vue-number-input--controls>input[data-v-188efc8c]{padding-left:4rem;padding-right:4rem}';v(h),c.render=m,c.__scopeId="data-v-188efc8c"},7058:function(t,e,n){var i=n(916),l=n(4922);n(4460);class a extends i.Z{constructor(){super(),this.BaseAPIConfig=l.Z,this.controller="Product"}async getProductManage(t){return await this.getAsync(`${this.controller}/productManage`,t)}async getProductList(t){return await this.postAsync(`${this.controller}/dataProductList`,t)}}e["Z"]=new a},5954:function(t,e,n){n.d(e,{Z:function(){return d}});var i=n(3396);const l={class:"slider-container"},a=(0,i._)("div",{class:"icon24 previous"},null,-1),r=(0,i._)("div",{class:"icon24 next"},null,-1);function o(t,e,n,o,u,c){const s=(0,i.up)("agile");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(s,{autoplay:n.autoplay},{prevButton:(0,i.w5)((()=>[a])),nextButton:(0,i.w5)((()=>[r])),default:(0,i.w5)((()=>[(0,i.WI)(t.$slots,"slider-content")])),_:3},8,["autoplay"])])}var u={name:"BaseSlider",components:{},props:{autoplay:{type:Boolean,default:!1}},setup(t){const e=[];return{plugins:e}}},c=n(89);const s=(0,c.Z)(u,[["render",o]]);var d=s},5749:function(t,e,n){n.r(e),n.d(e,{default:function(){return Jt}});var i=n(3396),l=n(7139);const a={class:"product-page flex flex-column"},r={class:"product-navigation"},o=["href"],u={class:"product-page-main-content flex flex-row"},c={class:"product-page-image-container"},s={class:"list-product-image"},d={class:"product-page-main-information flex flex-column"},p={class:"product-main-information-name sub-information"},m={class:"product-main-information-code sub-information"},v={class:"product-main-information-price-status"},h={key:0,class:"old-price price flex flex-row sub-information flex-center"},g=(0,i._)("div",{class:"old-price-title price-title product-detail-title"}," Giá niêm yết ",-1),f={class:"old-price-value price-value product-detail-content"},b={class:"price flex flex-row sub-information flex-center"},x=(0,i._)("div",{class:"price-title product-detail-title"}," Giá bản lẻ ",-1),_={class:"price-value product-detail-content"},w={class:"status flex flex-row"},y=(0,i._)("div",{class:"status-title product-detail-title"}," Tình trạng ",-1),k={class:"status-value product-detail-content"},B=(0,i._)("div",{class:"product-main-information-delivery flex flex-row"},[(0,i._)("div",{class:"delivery-title product-detail-title"}," Vận chuyển "),(0,i._)("div",{class:"delivery-content product-detail-content"}," Giao nhanh trong vòng 2-4 tiếng khi đơn hàng được xác nhận. Các đơn hàng đặt sau 18:00 sẽ được giao trước 12:00 sáng ngày hôm sau. Liên hệ hỗ trợ: 024 71066866 ")],-1),N={class:"product-main-information-type flex flex-row flex-between"},S=(0,i._)("div",{class:"product-detail-title"}," Chọn loại ",-1),C={class:"product-detail-content"},D={class:"product-main-information-quantity flex flex-row flex-between"},I=(0,i._)("div",{class:"product-detail-title"}," Số lượng ",-1),H={class:"product-detail-content"},V={class:"product-main-information-placement flex flex-row"},P={class:"product-page-description"},z=(0,i._)("div",{class:"product-page-description-title flex flex-row grid-title"},[(0,i._)("div",{class:"flex5"}," Mô tả "),(0,i._)("div",{class:"flex2"}," Thông tin ")],-1),T={class:"product-page-description-content flex flex-row"},Z=["innerHTML"],W={class:"product-page-description-information flex2"},q={class:"product-description-list-information flex flex-column"},A={class:"flex2"},M={class:"flex1"},U={class:"product-page-rate"},G=(0,i._)("div",{class:"product-page-rate-title grid-title"},[(0,i._)("div",null," Đánh giá sản phẩm ")],-1),K={class:"product-page-rate-content"},O=(0,i._)("div",{class:"review-content"},null,-1),$={class:"product-rate-form flex flex-column"},E={class:"rate-star flex flex-row product-rate-item flex-center"},L=(0,i._)("div",{class:"rate-start-title flex1 product-rate-title"},[(0,i.Uk)(" Đánh giá "),(0,i._)("span",{class:"color-red"},"*")],-1),R={class:"flex5"},Y={class:"name-customer flex flex-row flex-center product-rate-item"},j=(0,i._)("div",{class:"name-customer-title flex1 product-rate-title"},[(0,i.Uk)(" Khách hàng "),(0,i._)("span",{class:"color-red"},"*")],-1),F={class:"name-customer-input flex5"},Q={class:"email-customer flex flex-row flex-center product-rate-item"},X=(0,i._)("div",{class:"email-customer-title flex1 product-rate-title"}," Email ",-1),J={class:"email-customer-input flex5"},tt={class:"phone-customer flex flex-row flex-center product-rate-item"},et=(0,i._)("div",{class:"phone-customer-title flex1 product-rate-title"},[(0,i.Uk)(" Điện thoại "),(0,i._)("span",{class:"color-red"},"*")],-1),nt={class:"phone-customer-input flex5"},it={class:"topic-customer flex flex-row flex-center product-rate-item"},lt=(0,i._)("div",{class:"topic-customer-title flex1 product-rate-title"},[(0,i.Uk)(" Tiêu đề "),(0,i._)("span",{class:"color-red"},"*")],-1),at={class:"topic-customer-input flex5"},rt={class:"content-customer flex flex-row flex-center product-rate-item"},ot=(0,i._)("div",{class:"content-customer-title flex1 product-rate-title"},[(0,i.Uk)(" Nội dung "),(0,i._)("span",{class:"color-red"},"*")],-1),ut={class:"content-customer-input flex5"},ct={class:"flex button-rate flex-row"},st=(0,i._)("div",{class:"flex1"},null,-1),dt={class:"flex5"},pt={class:"product-page-relation"},mt=(0,i._)("div",{class:"product-page-relation-title grid-title"},[(0,i._)("div",null," Sản phẩm liên quan ")],-1),vt={class:"product-page-relation-content"};function ht(t,e,n,ht,gt,ft){const bt=(0,i.up)("base-thumbnail-slider"),xt=(0,i.up)("base-multi-button"),_t=(0,i.up)("vue-number-input"),wt=(0,i.up)("base-button"),yt=(0,i.up)("star-rating"),kt=(0,i.up)("base-input"),Bt=(0,i.up)("grid-list-product-card");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",r,[(0,i._)("a",{href:ht.homepage},"Trang chủ/",8,o),(0,i.Uk)(" "+(0,l.zw)(ht.productName),1)]),(0,i._)("div",u,[(0,i._)("div",c,[(0,i._)("div",s,[(0,i.Wm)(bt,{listSlider:ht.listSlider},null,8,["listSlider"])])]),(0,i._)("div",d,[(0,i._)("div",p,(0,l.zw)(ht.product.productName),1),(0,i._)("div",m," SKU: "+(0,l.zw)(ht.product.productCode),1),(0,i._)("div",v,[0!=ht.product.productDiscount?((0,i.wg)(),(0,i.iD)("div",h,[g,(0,i._)("div",f,(0,l.zw)(ht.formatVND(ht.product.productPrice)),1)])):(0,i.kq)("",!0),(0,i._)("div",b,[x,(0,i._)("div",_,(0,l.zw)(ht.formatVND(ht.product.productDiscount)),1)]),(0,i._)("div",w,[y,(0,i._)("div",k,(0,l.zw)(1==ht.product.productStatus?"Còn hàng":"Hết hàng"),1)])]),B,(0,i._)("div",N,[S,(0,i._)("div",C,[(0,i.Wm)(xt,{listButtons:ht.listTypeButtons},null,8,["listButtons"])])]),(0,i._)("div",D,[I,(0,i._)("div",H,[(0,i.Wm)(_t,{modelValue:ht.value,"onUpdate:modelValue":e[0]||(e[0]=t=>ht.value=t),inputtable:!1,min:1,max:ht.product.productQuantity,size:"small",inline:"",controls:""},null,8,["modelValue","max"])])]),(0,i._)("div",V,[(0,i.Wm)(wt,{text:"MUA NGAY",customClass:"btn-white btn-padding no-active"}),(0,i.Wm)(wt,{text:"THÊM VÀO GIỎ",customClass:"btn-red btn-padding no-active",leftIcon:"shopping-cart-red"})])])]),(0,i._)("div",P,[z,(0,i._)("div",T,[(0,i._)("div",{class:"product-page-description-main flex5",innerHTML:ht.description},null,8,Z),(0,i._)("div",W,[(0,i._)("div",q,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(ht.descriptionInformation,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"flex flex-row list-information-item fw-400"},[(0,i._)("div",A,(0,l.zw)(t.title),1),(0,i._)("div",M,(0,l.zw)(t.content),1)])))),128))])])])]),(0,i._)("div",U,[G,(0,i._)("div",K,[O,(0,i._)("div",$,[(0,i._)("div",E,[L,(0,i._)("div",R,[(0,i.Wm)(yt,{rating:ht.rating,increment:.5,"star-size":25,"show-rating":!1},null,8,["rating","increment"])])]),(0,i._)("div",Y,[j,(0,i._)("div",F,[(0,i.Wm)(kt,{placeholder:"Nhập tên khách hàng..."})])]),(0,i._)("div",Q,[X,(0,i._)("div",J,[(0,i.Wm)(kt,{placeholder:"Nhập email..."})])]),(0,i._)("div",tt,[et,(0,i._)("div",nt,[(0,i.Wm)(kt,{placeholder:"Nhập số điện thoại..."})])]),(0,i._)("div",it,[lt,(0,i._)("div",at,[(0,i.Wm)(kt,{placeholder:"Nhập tiêu đề..."})])]),(0,i._)("div",rt,[ot,(0,i._)("div",ut,[(0,i.Wm)(kt,{placeholder:"Nhập nội dung..."})])]),(0,i._)("div",ct,[st,(0,i._)("div",dt,[(0,i.Wm)(wt,{text:"ĐÁNH GIÁ",customClass:"btn-white btn-padding "})])])])])]),(0,i._)("div",pt,[mt,(0,i._)("div",vt,[(0,i.Wm)(Bt,{listProduct:ht.productRelationProducts},null,8,["listProduct"])])])])}var gt=n(4870),ft=n(5954),bt=n(9242);const xt={class:"flex flex-column"},_t={class:"chosen-image"},wt=["src"],yt={class:"slider-chosen flex flex-row"},kt=["src","onClick"];function Bt(t,e,n,a,r,o){return(0,i.wg)(),(0,i.iD)("div",xt,[(0,i._)("div",_t,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.listSlider,((t,e)=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("img",{src:t.src,key:e,alt:""},null,8,wt)),[[bt.F8,a.chosenImageIndex==e]]))),128))]),(0,i._)("div",yt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.listSlider,((t,e)=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("img",{src:t.src,class:(0,l.C_)([e==a.chosenImageIndex?"selected":""]),key:e,alt:"",onClick:t=>a.chosenImageHandler(e)},null,10,kt)),[[bt.F8,a.calculateDisplayImage.indexOf(e)>=0]]))),128))])])}var Nt={name:"BaseThumbnailSlider",components:{},props:{listSlider:{type:Object,default:null}},setup(t){const{proxy:e}=(0,i.FN)(),n=(0,gt.iH)(0);(0,i.bv)((()=>{}));const l=t=>{n.value=t},a=(0,gt.iH)([n.value-2>=0?n.value-2:t.listSlider.length+n.value-2,n.value-1>=0?n.value-1:t.listSlider.length+n.value-1,n.value,n.value+1>=t.listSlider.length?n.value+1-t.listSlider.length:n.value+1,n.value+2>=t.listSlider.length?n.value+2-t.listSlider.length:n.value+2]);return(0,i.YP)((()=>n.value),(()=>{a.value=[n.value-2>=0?n.value-2:t.listSlider.length+n.value-2,n.value-1>=0?n.value-1:t.listSlider.length+n.value-1,n.value,n.value+1>=t.listSlider.length?n.value+1-t.listSlider.length:n.value+1,n.value+2>=t.listSlider.length?n.value+2-t.listSlider.length:n.value+2]})),{chosenImageIndex:n,chosenImageHandler:l,calculateDisplayImage:a}}},St=n(89);const Ct=(0,St.Z)(Nt,[["render",Bt],["__scopeId","data-v-7a592800"]]);var Dt=Ct;const It={class:"base-multi-button"},Ht={class:"flex-row"};function Vt(t,e,n,a,r,o){const u=(0,i.up)("base-button");return(0,i.wg)(),(0,i.iD)("div",It,[(0,i._)("div",Ht,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.listButtons,((t,e)=>((0,i.wg)(),(0,i.j4)(u,{key:e,text:t.text,customClass:" btn-red",onClick:t=>a.onClickButton(e),class:(0,l.C_)(["button-element",e==a.selectedButtonIndex?"selected":""])},null,8,["text","onClick","class"])))),128))])])}var Pt=n(9917),zt={name:"BaseMultiButton",components:{BaseButton:Pt.Z},props:{listButtons:{type:Object,default:null}},emits:["clickButton"],setup(t,{emit:e}){const n=(0,gt.iH)(0),i=i=>{n.value=i,e("clickButton",t.listButtons[i])};return{selectedButtonIndex:n,onClickButton:i}}};const Tt=(0,St.Z)(zt,[["render",Vt],["__scopeId","data-v-770351af"]]);var Zt=Tt,Wt=n(3935),qt=n(9056),At=n.n(qt),Mt=n(7606);const Ut={class:"grid-list-product-card"},Gt={class:"product-container"},Kt={key:0,class:"button-action flex flex-between"},Ot={key:0};function $t(t,e,n,l,a,r){const o=(0,i.up)("product-card");return(0,i.wg)(),(0,i.iD)("div",Ut,[(0,i._)("div",Gt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.listProduct,((t,e)=>((0,i.wg)(),(0,i.j4)(o,{key:e,hide:!(l.indexView<=e&&e<=l.indexView+5),productId:t.productId,productDiscount:t.productDiscount,productName:t.productName,productUnit:t.productUnit,productPrice:t.productPrice,productOldPrice:t.productOldPrice,productImage:t.productImage},null,8,["hide","productId","productDiscount","productName","productUnit","productPrice","productOldPrice","productImage"])))),128))]),n.listProduct?.length>6?((0,i.wg)(),(0,i.iD)("div",Kt,[0==l.indexView?((0,i.wg)(),(0,i.iD)("div",Ot)):(0,i.kq)("",!0),l.indexView>0?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"button-prev icon24 previous",onClick:e[0]||(e[0]=t=>l.handleClickButtonAction(-1))})):(0,i.kq)("",!0),l.indexView+5<n.listProduct?.length-1?((0,i.wg)(),(0,i.iD)("div",{key:2,class:"button-next icon24 next",onClick:e[1]||(e[1]=t=>l.handleClickButtonAction(1))})):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])}var Et=n(1042),Lt={name:"GridListProductCard",components:{ProductCard:Et.Z},props:{listProduct:{type:Object,default:null}},setup(t,{emit:e}){const n=(0,gt.iH)(0),i=e=>{(n.value>0||e>0)&&(e>0&&n.value==t.listProduct.length-1||(n.value=n.value+e))};return{indexView:n,handleClickButtonAction:i}}};const Rt=(0,St.Z)(Lt,[["render",$t]]);var Yt=Rt,jt=n(7058),Ft=n(2099),Qt={components:{BaseSlider:ft.Z,BaseThumbnailSlider:Dt,BaseMultiButton:Zt,VueNumberInput:Wt.Z,BaseButton:Pt.Z,StarRating:At(),BaseInput:Mt.Z,GridListProductCard:Yt},async setup(t,{emit:e}){const{proxy:n}=(0,i.FN)(),{formatVND:l}=(0,Ft.v)(),a=(0,gt.iH)({}),r=(0,gt.iH)(),o=(0,gt.iH)("Bánh bơ trứng Richy gói 270g"),u=(0,gt.iH)([]),c=(0,gt.iH)([]),s=(0,gt.iH)(1),d=(0,gt.iH)('<h2>Nước táo lên men Strongbow Apple Ciders Red Berries chai 330ml (Vị dâu đỏ)</h2>\n    <br/>\n    <h3>Thông tin sản phẩm</h3><br/>\n    <strong>Nước táo lên men Strongbow Apple Ciders Red Berries chai 330ml(Vị dâu đỏ)</strong> là loại thức uống có nguồn gốc từ châu Âu và đã phổ biến toàn cầu với cách thức chế biến đầy ấn tượng từ quá trình lên men táo tự nhiên, mang đến chất men thuần khiết và hài hòa.<br/>\n    <br/>\n    <strong>Nước táo lên men Strongbow Apple Ciders Red Berries chai 330ml(Vị dâu đỏ)</strong> phù hợp sử dụng trong những bữa tiệc đồ nướng, hải sản, lẩu, những dịp tụ tập, gặp mặt bạn bè hay khi đi du lịch, dã ngoại… Sản phẩm mang đến những trải nghiệm vị giác mới mẻ, đầy thú vị.<br/>\n    <br/>\n    <strong>Hướng dẫn sử dụng:</strong>\n  <br/>\n  <ol>\n  <li data-list="bullet">Dùng trực tiếp, ngon hơn dùng với đá.</li>\n  <li data-list="bullet">Sản phẩm dành cho người trên 18 tuổi.</li>\n  <li data-list="bullet">Không dành cho phụ nữ mang thai.</li>\n  <li data-list="bullet">Đã uống đồ uống có cồn thì không lái xe</li>\n  </ol>\n  <strong>Hướng dẫn bảo quản:</strong>\n  <br/>\n  <ol>\n  <li data-list="bullet">Bảo quản nơi sạch sẽ, khô ráo thoáng mát.</li>\n  <li data-list="bullet">Tránh ánh nắng mặt trời.</li>\n  <li data-list="bullet">Tránh bị đông đá.</li>\n  </ol>\n\n  <strong>Lưu ý:</strong>\n  <p><strong>- Hạn sử dụng thực tế quý khách vui lòng xem trên bao bì.</strong></p>\n  <p><strong>- Hình sản phẩm chỉ mang tính chất minh họa, hình thực tế bao bì của sản phẩm tùy thời điểm sẽ khác so với thực tế.</strong></p>  \n'),p=(0,gt.iH)([{title:"Xuất xứ",content:"United Kingdom"},{title:"Thành Phần",content:"Cider (nước ép táo lên men với sucrose), nước, siro, màu caramel (E150a), chất điều chỉnh độ acid (E296), khí carbonate, chất bảo quản Kali Metabisulfit (E224), hương táo tự nhiên"},{title:"Hướng Dẫn Sử Dụng",content:"Sử dụng trực tiếp. Ngon hơn khi dùng với đá"},{title:"Bảo Quản",content:"Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp"}]),m=(0,gt.iH)(0),v=(0,gt.iH)();return(0,i.bv)((async()=>{let t=n.$store.state.productView;const e=await jt.Z.getDataById(t);a.value=e.data?e.data.data:null,r.value=window._appConfig.homepage,c.value=[{text:"Hộp"},{text:"Thùng"},{text:"Gói 6"}],a.value&&a.value.productImage&&(Array.isArray(a.value.productImage)?a.value.productImage.forEach((t=>{u.value.push({src:t})})):u.value.push({src:a.value.productImage})),v.value=a.value.relationProduct})),{homepage:r,productName:o,listSlider:u,listTypeButtons:c,value:s,description:d,descriptionInformation:p,rating:m,productRelationProducts:v,product:a,formatVND:l}}};const Xt=(0,St.Z)(Qt,[["render",ht]]);var Jt=Xt}}]);
//# sourceMappingURL=711.9329a4ab.js.map