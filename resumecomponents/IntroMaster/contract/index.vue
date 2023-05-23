<template>
    <div class="container">
        <div class="main">
            <p class="tip">点击文本可复制</p>
            <div class="box" @click="copy('http://aveger.github.io/')">
                <image src="@/static/IntroImgs/home.png"/>
                <p>http://aveger.github.io</p>
            </div>
            <div class="box" @click="copy('15273774468@163.com')">
                <image src="@/static/IntroImgs/email.png"/>
                <p>15273774468@163.com</p>
            </div>
            <div class="box" @click="copy('https://www.cnblogs.com/aveger/')">
                <image class="blog-img" src="@/static/IntroImgs/blog.png"/>
                <p>博客地址</p>
            </div>
            <div class="box" @click="copy('https://github.com/AVEGER')">
                <image src="@/static/IntroImgs/github.png"/>
                <p>AVEGER</p>
            </div>
            <div class="box">
                <button  @click="playphone()">联系电话</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name:"IntroContract",
    data () {
        return {}
    },
    methods: {
        copy (data) {
			uni.setClipboardData({
				data: data,
				success: function () {
					uni.showToast({
						title: '复制成功',
						duration: 2000
					});
				}
			});
        },
		playphone(){
			uni.makePhoneCall({
				phoneNumber: '15273774468',
				fail:()=>{
					console.log('取消拨打电话！')
				}
			});
		}
    },
    onShareAppMessage () {
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/comm.scss";

.container {
    padding: 40rpx 0;
    @include w_h(750);
    @include flex(column, flex-start, center);
    .main {
        @include w_h(670);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
        .tip {
            margin: 40rpx 40rpx 40rpx;
            text-align: left;
            @include font(24, #666, 40, 400);
        }
        .box {
            @include w_h(590, 80);
            margin: 80rpx auto;
            @include flex(row, flex-start, center);
            border-radius: 8rpx;
            box-shadow: 0 10rpx 20rpx #0d73a6;
            image {
                margin-left: 20rpx;
                @include w_h(60, 60);
            }
            p {
                margin-left: 20rpx;
                @include font(32, #000, 40, 400);
            }
            button {
                @include font(32, #000, 40, 400);
            }
            .blog-img {
                @include w_h(45, 45);
                margin-left: 30rpx;
            }
        }
    }
}
</style>
