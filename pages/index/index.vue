<template>
	<div class="outsideBox" style="background:url('https://i.imgtg.com/2023/05/22/OaBx6j.jpg');">
		<div class="content">
			<image src="../../static/resumeMan.png" mode=""></image>
		</div>
		<enterMood btnwidth="500rpx" text='点击进入' url="/pages/mianpage/index"/>
	</div>
</template>

<script>
import enterMood from '@/components/EnterBtn/index.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			enterMood
		},
		onLoad() {},
		methods: {
		}
	}
</script>

<style lang="scss">
	.outsideBox{
		height: 100vh;
		padding: 200rpx 0 210rpx;
		box-sizing: border-box;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 290rpx;
		image{
			border-radius: 50%;
			width: 185rpx;
			height: 185rpx;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
</style>
