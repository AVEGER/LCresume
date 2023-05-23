<template>
	<div class="project">
		<!-- 个人项目 -->
		<div id="project-swiper">
			<!-- <swiper indicator-dots="true" indicator-active-color="#00b38a" autoplay='true' circular='true' style='height:200px'>
	      <swiper-item><image src='../../img/project/project1.png'></image></swiper-item>
	      <swiper-item><image src='../../img/project/project2.png'></image></swiper-item>
	      <swiper-item><image src='../../img/project/project3.png'></image></swiper-item>
	      <swiper-item><image src='../../img/project/project4.png'></image></swiper-item>
	      <swiper-item><image src='../../img/project/project5.png'></image></swiper-item>
	    </swiper> -->
		</div>
		<div>
			<div id="project-content" v-for="(item, index) of projectlist" :key="index">
				<!-- 项目经验组件模板 -->
				<div class='project-item'>
					<div class='project-title'>
						<div></div>
						<text>项目{{item.number}}</text>
						<div></div>
					</div>

					<div class='project-box'>
						<text class='project-name'>{{item.name}}</text>
						<text class='tag' bindtap='copyDemo'>PC项目</text>
						<div>
							<text class='project-subname'>项目技术栈：</text>
							<div class='explain'>
								<text>{{item.stack}}</text>
							</div>
							<div></div>
						</div>
						<div>
							<text class='project-subname'>负责内容：</text>
							<div class='explain' v-for="(descitem, index) of item.desc" :key="index">
								<text>{{descitem}}</text>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { numberToChinese } from "@/utils/comutils.js"
	export default {
		name: "ZresumeProject",
		data() {
			return {
				projectlist: []
			}
		},
		created() {
			this.initData()
		},
		methods: {
			initData() {
				let arr = this.$getresume("project")
				arr.map((v,i)=>{
					v.number = numberToChinese(i+1)
				})
				this.projectlist = arr
			}
		},
	}
</script>

<style>
	.project {
		padding: 0 30rpx 120rpx;
	}

	#project-swiper {
		/* background-color: #00b38a;
	  padding: 5%; */
	}

	#project-swiper image {
		width: 100%;
		height: 100%;
	}

	#project-content {
		padding: 5%;
	}

	/* 项目经验组件样式 */
	.project-title {
		margin: 3% 0;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.project-title view {
		flex: 1;
		height: 1px;
		background-color: #eee;
	}

	.project-title text {
		background-color: #eee;
		color: #00b38a;
		margin: 0 1%;
		padding: 1% 8%;
		border-radius: 30px;
	}

	.project-box {
		padding: 4% 0;
	}

	.project-name {
		display: inline-block;
		font-size: 90%;
		font-weight: 600;
		margin-bottom: 2%;
	}

	.tag {
		float: right;
		font-size: 70%;
		color: #00b38a;
		border: 1px solid #00b38a;
		padding: 0 1%;
		border-radius: 5px;
	}

	.project-subname {
		font-size: 85%;
		color: #00b38a;
	}

	.explain {
		display: flex;
		flex-direction: column;
	}

	.explain text {
		margin-left: 2px;
		font-size: 85%;
		text-indent: 8%;
		line-height: 150%
	}
</style>