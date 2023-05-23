<template>
    <div class="container">
        <div class="main">
            <image src="@/static/resumeMan.png"/>
            <p class="name">李金城</p>
            <p class="subtitle">运维工程师</p>
        </div>
        <div class="base">
            <div class="box">
                <p>年龄: {{baseinfo.age}}</p>
                <p>学历: {{baseinfo.level}}</p>
                <p>所在地: 广东深圳</p>
                <p>工作经验: {{baseinfo.startwork}}年</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: "IntroBasic",
    data () {
        return {
            baseinfo: this.$baseinfo,
        }
    },
    created () {},
    methods: {},
}
</script>

<style lang="scss" scoped>
@import "../../style/comm.scss";

.container {
    padding-top: 40rpx;
    @include w_h(750);
    height: 100%;
    @include flex(column, flex-start, center);
    .main {
        @include w_h(670, 500);
        @include flex($j: center, $a: center);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #4f4fed;
        image {
            @include w_h(200, 200);
            border-radius: 100rpx;
        }
        .name {
            margin-top: 40rpx;
            text-align: center;
            @include font(40, #000, 40, 600);
        }
        .subtitle {
            margin-top: 40rpx;
            @include font(28, #333, 40);
        }
    }
    .base {
        margin-top: 10%;
        @include w_h(670);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #0095df;
		text-align: center;
        .box {
            margin-top: 20rpx;
            margin-bottom: 20rpx;
            p {
                @include font(32, #000, 60, 400);
            }
        }
    }
}
</style>
