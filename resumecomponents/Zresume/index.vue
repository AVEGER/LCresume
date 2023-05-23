<template>
	<div style="">
		<ZresumeMain v-if="isPage == 0"/>
		<ZresumeProject v-else/>
	</div>
	<CustomBottom :list="ZreusmeList" @changIndex="getIndex"></CustomBottom>
</template>

<script>
import CustomBottom from "@/components/CustomTabbar";
import ZresumeMain from "@/resumecomponents/Zresume/main/index.vue";
import ZresumeProject from "@/resumecomponents/Zresume/project/index.vue";
export default {
		data() {
			return {
				isPage:0,
				ZreusmeList:[{
						text: "简历",
						iconPath: "/static/tabs/basic.png",
						selectedIconPath: "/static/tabs/basic-s.png",
					},{
						text: "项目",
						iconPath: "/static/tabs/skill.png",
						selectedIconPath: "/static/tabs/skill-s.png",
					}
				]
			};
		},
		components:{
			CustomBottom,
			ZresumeMain,
			ZresumeProject
		},
		created() {
		},
		methods:{
			getIndex(e){
				this.isPage = e
			}
		}
	}
</script>

<style></style>