"use strict";const o=require("../../../common/vendor.js"),e=require("../../../common/assets.js"),t={name:"IntroContract",data:()=>({}),methods:{copy(e){o.index.setClipboardData({data:e,success:function(){o.index.showToast({title:"复制成功",duration:2e3})}})},playphone(){o.index.makePhoneCall({phoneNumber:"15273774468",fail:()=>{console.log("取消拨打电话！")}})}},onShareAppMessage(){}};const s=o._export_sfc(t,[["render",function(t,s,n,a,c,r){return{a:e._imports_0$1,b:o.o((o=>r.copy("http://aveger.github.io/"))),c:e._imports_1,d:o.o((o=>r.copy("15273774468@163.com"))),e:e._imports_2,f:o.o((o=>r.copy("https://www.cnblogs.com/aveger/"))),g:e._imports_3,h:o.o((o=>r.copy("https://github.com/AVEGER"))),i:o.o((o=>r.playphone()))}}],["__scopeId","data-v-2cfe761e"]]);wx.createComponent(s);