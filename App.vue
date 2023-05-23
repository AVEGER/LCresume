<script>
	import {
		skillList,
		workList,
		projectList,
		baseInfo
	} from "@/resumeData.js"
	export default {
		onLaunch: function() {
			this.initData()
		},
		methods:{
			initData(){
				wx.setStorageSync('global_info', JSON.stringify(['性别','学历','年龄','经验']))
				wx.setStorageSync('global_info1', JSON.stringify(['男','大专','24','4年']))
				wx.setStorageSync('global_objInfo', JSON.stringify(baseInfo))
				wx.setStorageSync('global_skill_list', JSON.stringify(skillList))
				wx.setStorageSync('global_project_List', JSON.stringify(projectList))
				wx.setStorageSync('global_work_List', JSON.stringify(workList))
			}
		}
	}
</script>

<style>
	/*每个页面公共css */	
</style>