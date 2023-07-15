<template>
	<div class="firstBox" style="background-color: #ddd9d9;padding: 24rpx 20rpx 26rpx;">
		<div class="Top_box com_molude_box">
			<div class="Top_box_info1 comm_bottom_border">
				<image src="@/static/resumeMan.png" mode="aspectFill" />
				<div>
					<text>{{baseinfo.name}}</text>
					<text class="fcolor999">{{baseinfo.post}}</text>
				</div>
			</div>
			<div class="comm_bottom_border">
				<div class="Top_box_info2">
					<text v-for="item of this.global_info" :key="item.index">{{item}}</text>
				</div>
				<div class="Top_box_info2">
					<text v-for="item of this.global_info1" :key="item.index">{{item}}</text>
				</div>
			</div>
			<div class="commbox">{{baseinfo.address}}</div>
			<div class="commbox">离职，近期可到岗</div>
		</div>

		<div class="Top_content_box com_molude_box">
			<div class="comm_bottom_border fcolor999">联系方式</div>
			<div class="comm_bottom_border">电话<text class="fcolor999">{{baseinfo.phone}}</text></div>
			<div>邮箱<text class="fcolor999">15273774468@163.com</text></div>
		</div>

		<div class="Top_content_box com_molude_box">
			<div class="comm_bottom_border fcolor999">工作经历</div>
			<div>比一比有限公司<text class="fcolor999">2022.5 -- 至今</text></div>
			<div>顺势腾飞有限公司<text class="fcolor999">2022.2 -- 2023.4</text></div>
			<div>部队某旅<text class="fcolor999">2019.9 -- 2021.12</text></div>
		</div>

		<div class="Top_skill_box com_molude_box">
			<div class="comm_bottom_border fcolor999">技术技能</div>
			<text style="color: #000;" v-for="(item, index) of this.skill_list" :key="index"
				class="fcolor999">- {{item}}</text>
		</div>

		<div class="Bootom_box Top_skill_box com_molude_box">
			<div class="comm_bottom_border fcolor999">项目经历</div>
			<div class="bottom_proiect_box" v-for="(item, index) of global_project_List" :key="index">
				<text style="color: #000;">{{item.name}}</text>
				<div><text class="fcolor999">项目描述</text>{{item.summary}}</div>
				<div><text class="fcolor999">技术栈</text>{{item.stack}}</div>
				<div class="comm_bottom_border">
					<text class="fcolor999">责任描述</text>
					<text v-for="(items, index) of item.desc" :key="index">{{items}}</text>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FirstMood',
		data() {
			return {
				global_info: JSON.parse(wx.getStorageSync('global_info')),
				global_info1: JSON.parse(wx.getStorageSync('global_info1')),
				skill_list: JSON.parse(wx.getStorageSync('global_skill_list')),
				global_project_List: JSON.parse(wx.getStorageSync('global_project_List')),
				baseinfo:this.$baseinfo
			};
		},
		created() {},
		methods: {}
	}
</script>

<style scoped>
</style>