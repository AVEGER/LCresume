<template>
	<div id="resume">
		<!-- 个人信息 -->
		<div class='head'>
			<image src='https://i.imgtg.com/2023/05/22/OaB15v.jpg' style='position: relation;width:100%'></image>
			<div class="head_img_box">
				<text style='font-size:180%;font-weight: bold;text-align: center;padding: 5% 0;'>{{baseinfo.name}}</text>
				<text
					style='font-size:150%;padding:5% 0;border-top:2px solid #00A982;border-bottom:2px solid #00A982;margin:3% 0;text-align: center'>{{baseinfo.post}}</text>
				<div>
					<div class='head-info'>
						<text>男 / {{baseinfo.age}}</text>
						<text>{{baseinfo.schoolMajor}}</text>
						<text>工作年限:{{baseinfo.startwork}}年</text>
					</div>
					<div class='head-icon'>
						<text class="iconfont icon-zhuye" bindtap='copyBlog'></text>
						<text class="iconfont icon-github" bindtap='copyGithub'></text>
						<text class="iconfont icon-duanxin" bindtap="copyMail"></text>
						<text class="iconfont icon-phone" bindtap='actionSheetTap'></text>
					</div>
				</div>
			</div>
		</div>

		<div class='body' style="height: 900rpx;">
			<!-- 个人技能 -->
			<div>
				<div class='subtitle'>工作技能</div>
				<div class="comline"></div>
				<div>
					<text class='skill'>技能</text>
					<text class='tag'>掌握</text>
				</div>
				<div class="detail" v-for="(item, index) in skillul" :key="index">
				      <div>{{index +1}}) {{ item }}</div>
				</div>
			</div>

			<!-- 工作经历 -->
			<div>
				<div class='subtitle'>工作经历</div>
				<div class="comline"></div>
				<div v-for="(item, index) in worklist" :key="index">
					<div class='experience-item'>
						<div class='experience-name'>{{item.companyName}}</div>
						<div class='experience-subname'>
							<text>{{item.job}}</text>
							<text class='date-ranges'>{{item.time}}</text>
						</div>
						<div class='explain'>
							<text v-for="(item1, index) in item.desc" :key="index">{{item1}}</text>
						</div>
					</div>
				</div>
			</div>

			<!-- 个人介绍 -->
			<div style="padding-bottom: 180rpx;">
				<div class='subtitle'>自我介绍</div>
				<div class="comline"></div>
				<div class='introduce-content'>
					<text>{{introduce}}</text>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { getInfo } from "@/utils/comutils";
	export default {
		name: "ZresumeMain",
		data() {
			return {
				baseinfo:this.$baseinfo,
				skillul:[],
				worklist:[],
				introduce:''
			}
		},
		created() {
			this.initData()
		},
		methods: {
			initData(){
				this.skillul = this.$getresume('skill')
				this.worklist = this.$getresume('work')
				this.introduce = this.$getresume('baseinfo').introduce
			}
		},
	}
</script>

<style lang="scss" scoped>
	.head {
		display: flex;
		flex-direction: column;
		align-items: center;
		text {
			color: white;
		}
	}
	.head_img_box {
		width: 300rpx;
		position: absolute;
		top: 20rpx;
		left: 50%;
		margin-left: -150rpx;
		display: flex;
		flex-direction: column;
	}

	.head-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		text {
			display: inline-block;
			font-size: 75%;
			padding-bottom: 2%;
			text-align: center;
		}
	}

	.head-icon {
		display: flex;
		flex-direction: row;
		justify-content: center;
		text {
			margin: 5% 5%;
		}
	}

	.body {
		padding: 5%;
	}

	.subtitle {
		width: 220rpx;
		margin: 3% auto;
		background-color: #eee;
		color: #00b38a;
		padding: 1% 8%;
		border-radius: 30px;
		text-align: center;
	}
	.comline{
		display:block;
		height: 1px;
		background-color: #666;
		position: relative;
		top: -22px;
		z-index: -1;
	}

	.skill,
	.tool {
		font-size: 90%;
		font-weight: 600;
	}

	.detail {
		font-size: 85%;
		text-indent: 8%;
	}

	.tag {
		float: right;
		font-size: 70%;
		color: #00b38a;
		border: 1px solid #00b38a;
		padding: 0 1%;
		border-radius: 5px;
	}

	@font-face {
		font-family: "iconfont";
		src: url('iconfont.eot?t=1545200281871');
		/* IE9*/
		src: url('iconfont.eot?t=1545200281871#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
			url('iconfont.ttf?t=1545200281871') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
			url('iconfont.svg?t=1545200281871#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-duanxin:before {
		content: "\e647";
	}

	.icon-zhuye:before {
		content: "\e627";
	}

	.icon-phone:before {
		content: "\e618";
	}

	.icon-github:before {
		content: "\f1b4";
	}

	.introduce-content {
		font-size: 85%;
		text-indent: 8%;
		line-height: 150%;
	}

	/* 工作经历组件样式 */
	.experience-item {
		padding: 2% 0;
	}

	.experience-name {
		font-size: 90%;
		font-weight: 600;
	}

	.experience-subname {
		margin-top: 2%;
		font-size: 80%;
		color: #666;
	}

	.date-ranges {
		float: right;
		text-align: right;
		padding: 0 1%;
	}

	.explain {
		margin-top: 2%;
		display: flex;
		flex-direction: column;
	}

	.explain text {
		font-size: 85%;
		text-indent: 8%;
		line-height: 150%
	}
</style>