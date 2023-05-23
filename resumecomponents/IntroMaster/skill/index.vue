<template>
    <div class="container">
        <div class="main">
			
			<text v-for="(item, index) in list" :key="index">
				<text class="list_zero">-</text>{{item}}
			</text>
        </div>
    </div>
</template>

<script>
import { skillList } from '@/resumeData.js'

export default {
	name:"IntroSkill",
    data () {
        return {
            list: skillList
        }
    },
    onShareAppMessage () {
    }
}
</script>

<style scoped lang="scss">
@import "../../style/comm.scss";

.container {
    padding: 40rpx 0;
    @include w_h(750);
    @include flex(column, flex-start, center);
    .main {
        @include w_h(670);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
		text{
			display: inline-block;
			@include font(28rpx, #444, 40, 400);
			text-align: left;
			line-height: 58rpx;
			margin: 12rpx 20rpx;
		}
		.list_zero{
			color: #444;
			font-size: 40rpx;
		}
    }
}
</style>
