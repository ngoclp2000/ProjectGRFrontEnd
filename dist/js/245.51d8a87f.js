"use strict";(self["webpackChunkecommercev2"]=self["webpackChunkecommercev2"]||[]).push([[245],{5909:function(e,t,a){a.d(t,{O:function(){return c}});var n=a(4870),l=a(3396);const c=()=>{const{proxy:e}=(0,l.FN)(),t=(0,n.qj)(e.$store.state.menuList),a=async a=>{t.forEach((e=>{e.key==a?e.isSelected=!0:e.isSelected=!1})),await e.$store.dispatch("updateMenuItems",t)};return{menuList:t,changeChosenTabMenuItem:a}}},1245:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(3396),l=a(7139);const c={class:"admin-container"},s={class:"information"},i={class:"avatar"},o=["src"],u={key:0,class:"main-information"},r={class:"name"},m={class:"email"},g={class:"main-menu"},v={class:"label-container"};function d(e,t,a,d,b,k){const p=(0,n.up)("main-menu-item"),I=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",{class:(0,l.C_)(["nav-bar",{"toggle-navbar":!d.toggleNavbarValue}])},[(0,n._)("div",s,[(0,n._)("div",i,[(0,n._)("img",{src:e.$store.state.account["avatar"],alt:""},null,8,o)]),d.toggleNavbarValue?((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",r,(0,l.zw)(e.$store.state.account["fullName"]),1),(0,n._)("div",m,(0,l.zw)(e.$store.state.account["email"]),1)])):(0,n.kq)("",!0)]),(0,n._)("div",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.menuList,(e=>((0,n.wg)(),(0,n.j4)(p,{key:e.key,menuItemObject:e,toggleNavbarValue:d.toggleNavbarValue,onClick:d.menuItemClick},null,8,["menuItemObject","toggleNavbarValue","onClick"])))),128))])],2),(0,n._)("div",{class:(0,l.C_)(["main-content-admin",{"toggle-navbar":!d.toggleNavbarValue}])},[(0,n._)("div",v,[(0,n._)("div",{class:"icon24 three-line",onClick:t[0]||(t[0]=(...e)=>d.toggleNavbar&&d.toggleNavbar(...e))})]),((0,n.wg)(),(0,n.j4)(n.n4,null,{fallback:(0,n.w5)((()=>[(0,n.Uk)(" Loading ")])),default:(0,n.w5)((()=>[(0,n.Wm)(I)])),_:1}))],2)])}const b={key:1,class:"content"};function k(e,t,a,c,s,i){return(0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)(["main-menu-item",{selected:a.menuItemObject.isSelected,"toggle-navbar":!a.toggleNavbarValue}]),onClick:t[0]||(t[0]=(...e)=>c.mainMenuItemClick&&c.mainMenuItemClick(...e))},[a.menuItemObject.iconClass?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,l.C_)(["logo",[a.menuItemObject.iconClass,a.menuItemObject.isSelected?"selected":""]])},null,2)):(0,n.kq)("",!0),a.toggleNavbarValue?((0,n.wg)(),(0,n.iD)("div",b,(0,l.zw)(a.menuItemObject.content),1)):(0,n.kq)("",!0)],2)}var p={props:{menuItemObject:{type:Object,default:null},toggleNavbarValue:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:t}){const{proxy:a}=(0,n.FN)(),l=()=>{t("click",e.menuItemObject.key)};return{mainMenuItemClick:l}}},I=a(89);const N=(0,I.Z)(p,[["render",k],["__scopeId","data-v-066e2a6a"]]);var f=N,w=a(5909),C=a(4870),_={components:{MainMenuItem:f},setup(){const{proxy:e}=(0,n.FN)(),{menuList:t}=(0,w.O)(),a=(0,C.iH)(!0);(0,n.bv)((()=>{}));const l=async a=>{let n="";t.forEach((e=>{e.key==a?(e.isSelected=!0,n=e.route):e.isSelected=!1})),await e.$store.dispatch("updateMenuItems",t),e.$router.push(n)},c=()=>{e.toggleNavbarValue=!e.toggleNavbarValue};return{menuList:t,menuItemClick:l,toggleNavbar:c,toggleNavbarValue:a}}};const y=(0,I.Z)(_,[["render",d]]);var j=y}}]);
//# sourceMappingURL=245.51d8a87f.js.map