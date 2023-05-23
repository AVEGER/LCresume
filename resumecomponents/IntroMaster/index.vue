<template>
	<view style="padding-bottom: 130rpx;">
		<IntroBasic v-if="isPage == 0"/>
		<IntroSkill v-else-if="isPage == 1"/>
		<IntroContract v-else-if="isPage == 4"/>
		<IntroProject v-else-if="isPage == 3"/>
		<IntroWork v-else-if="isPage == 2"/>
	</view>
	<CustomBottom :list="introList" @changIndex="getIndex"></CustomBottom>
</template>

<script>
import CustomBottom from "@/components/CustomTabbar";
import IntroBasic from "@/resumecomponents/IntroMaster/basic"
import IntroContract from "@/resumecomponents/IntroMaster/contract"
import IntroProject from "@/resumecomponents/IntroMaster/project"
import IntroSkill from "@/resumecomponents/IntroMaster/skill"
import IntroWork from "@/resumecomponents/IntroMaster/work"
	export default {
		data() {
			return {
				isPage:0,
				introList:[{
						text: "基本信息",
						iconPath: "/static/tabs/basic.png",
						selectedIconPath: "/static/tabs/basic-s.png",
					},{
						text: "个人技能",
						iconPath: "/static/tabs/skill.png",
						selectedIconPath: "/static/tabs/skill-s.png",
					},{
						text: "工作经历",
						iconPath: "/static/tabs/work.png",
						selectedIconPath: "/static/tabs/work-s.png",
					},{
						text: "项目经历",
						iconPath: "/static/tabs/project.png",
						selectedIconPath: "/static/tabs/project-s.png",
					},{
						text: "联系方式",
						iconPath: "/static/tabs/contract.png",
						selectedIconPath: "/static/tabs/contract-s.png",
					},
				]
			};
		},
		components:{
			CustomBottom,
			IntroBasic,
			IntroContract,
			IntroProject,
			IntroSkill,
			IntroWork
		},
		created() {},
		methods:{
			getIndex(e){
				this.isPage = e
			}
		}
	}
</script>
