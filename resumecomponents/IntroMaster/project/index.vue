<template>
    <div class="container">
        <div class="main">
            <div class="project" v-for="(item, index) in list" :key="index">
                <text class="name">{{item.name}}</text>
                <div class="header">
                    <span>{{item.work}}</span>
                    <span>{{item.time}}</span>
                </div>
                <div class="content">
                    <text v-for="(s, i) in item.desc" :key="i">{{s}}</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { projectList } from '@/resumeData.js'

export default {
	name:"IntroProject",
    data () {
        return {
            list: projectList
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../style/comm.scss";

.container {
    @include w_h(750);
    padding: 40rpx 0;
    @include flex(column, flex-start, center);
    .main {
        @include w_h(670);
        border-radius: 8rpx;
        box-shadow: 0 10rpx 20rpx #1296db;
        .project {
            margin: 40rpx;
            @include flex(column, flex-start, flex-start);
            .name {
                @include font(40, #1296db, 40, 600);
                text-align: left;
            }
            .header {
                width: 100%;
                margin-top: 40rpx;
                @include flex(row, space-between, center);
                flex-wrap: wrap;
                span {
                    @include font(32, #333, 40, 500);
                }
            }
            .content {
                text-align: left;
                @include font(28, #444, 36, 400);
                text {
					display: inline-block;
                    margin-top: 20rpx;
                }
            }
        }
    }
}
</style>
