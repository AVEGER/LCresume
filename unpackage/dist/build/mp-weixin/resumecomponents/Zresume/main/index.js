"use strict";const t=require("../../../common/vendor.js"),e=require("../../../common/assets.js"),s={name:"ZresumeMain",data(){return{baseinfo:this.$baseinfo,skillul:[],worklist:[],introduce:""}},created(){this.initData()},methods:{initData(){this.skillul=this.$getresume("skill"),this.worklist=this.$getresume("work"),this.introduce=this.$getresume("baseinfo").introduce}}};const i=t._export_sfc(s,[["render",function(s,i,o,r,a,n){return{a:e._imports_0$2,b:t.t(a.baseinfo.age),c:t.t(a.baseinfo.schoolMajor),d:t.t(a.baseinfo.startwork),e:t.f(a.skillul,((e,s,i)=>({a:t.t(s+1),b:t.t(e),c:s}))),f:t.f(a.worklist,((e,s,i)=>({a:t.t(e.companyName),b:t.t(e.job),c:t.t(e.time),d:t.f(e.desc,((e,s,i)=>({a:t.t(e),b:s}))),e:s}))),g:t.t(a.introduce)}}],["__scopeId","data-v-ede5d520"]]);wx.createComponent(i);