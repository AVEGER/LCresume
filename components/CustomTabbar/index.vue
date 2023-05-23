<template>
	<div class="tab-bar">
		<div class="tab-wap">
			<div class="tab-item" @click='switchTab(item, index)' v-for="(item, index) of this.list" :key="index">
				<block>
					<image :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
					<div :style="{color: selected == index ? selectedColor : color}">{{item.text}}</div>
				</block>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CustomBottom",
		props:{
			list:{}
		},
		data() {
			return {
				isIpx: false,
				selected: 0,
				color: "#7F8389",
				selectedColor: "#192330",
				borderStyle: "black",
				backgroundColor: "#ffffff",
			};
		},
		created() {
				
		},
		methods: {
			switchTab(data, index) {
				this.selected = index
				this.$emit("changIndex", index)
			},
		}
	}
</script>

<style scoped>
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 24rpx;
		background-color: #999;
	}
	.tab-wap {
		display: flex;
		position: relative;
		background: #fff;
	}
	.tab-item {
		background: #fff;
		flex: 1;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 20rpx 0;
	}
	.tab-item div {
		font-size: 20rpx;
		position: relative;
		line-height: 30rpx;
	}
	
	.tab-item image {
		width: 54rpx;
		height: 54rpx;
		display: inline-block;
	}
	
	.tab-item.active {
		padding: 20rpx 0 40rpx;
	}
</style>