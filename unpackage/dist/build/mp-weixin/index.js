"use strict";const t=require("./common/vendor.js"),e={data:()=>({isPage:0,introList:[{text:"基本信息",iconPath:"/static/tabs/basic.png",selectedIconPath:"/static/tabs/basic-s.png/"},{text:"个人技能",iconPath:"/static/tabs/skill.png",selectedIconPath:"/static/tabs/skill-s.png/"},{text:"工作经历",iconPath:"/static/tabs/work.png",selectedIconPath:"/static/tabs/work-s.png/"},{text:"项目经历",iconPath:"/static/tabs/project.png",selectedIconPath:"/static/tabs/project-s.png/"},{text:"联系方式",iconPath:"/static/tabs/contract.png",selectedIconPath:"/static/tabs/contract-s.png/"}]}),components:{CustomBottom:()=>"./components/CustomTabbar/index.js",IntroBasic:()=>"./resumecomponents/IntroMaster/basic/index.js",IntroContract:()=>"./resumecomponents/IntroMaster/contract/index.js",IntroProject:()=>"./resumecomponents/IntroMaster/project/index.js",IntroSkill:()=>"./resumecomponents/IntroMaster/skill/index.js",IntroWork:()=>"./resumecomponents/IntroMaster/work/index.js"},created(){},methods:{getIndex(t){this.isPage=t}}};if(!Array){(t.resolveComponent("IntroBasic")+t.resolveComponent("IntroSkill")+t.resolveComponent("IntroContract")+t.resolveComponent("IntroProject")+t.resolveComponent("IntroWork")+t.resolveComponent("CustomBottom"))()}const s=t._export_sfc(e,[["render",function(e,s,o,n,a,r){return t.e({a:0==a.isPage},(0==a.isPage||1==a.isPage||4==a.isPage||3==a.isPage||a.isPage,{}),{b:1==a.isPage,c:4==a.isPage,d:3==a.isPage,e:2==a.isPage,f:t.o(r.getIndex),g:t.p({list:a.introList})})}]]);exports.MiniProgramPage=s;
