<template>
	<view class="mainShow_box">
		<FirstMood v-if="randNum == 1"/>
		<IntroMaster v-else-if="randNum == 2"/>
		<Zresume v-else/>
	</view>
</template>

<script>
import { getRandomNumber } from '@/utils/comutils.js';
import FirstMood from '@/resumecomponents/FirstMood';
import IntroMaster from '@/resumecomponents/IntroMaster';
import Zresume from '@/resumecomponents/Zresume/index.vue';
	export default {
		data() {
			return {
				randNum:2
			};
		},
		created() {
			this.randNum = getRandomNumber(1,3)
		},
		components:{
			FirstMood,
			IntroMaster,
			Zresume
		}
	}
</script>

<style lang="scss">
.mainShow_box{
	
}
.firstBox{
	.com_molude_box{
	  border-radius: 8px;
	  border: 1rpx solid #b4b1b1;
	  background: linear-gradient(315deg, #cfcaca, #f6f0f0);
	  box-shadow:  -5px -5px 10px #d8d3d3,5px 5px 10px #f4eded;
	  margin-bottom: 28rpx;
	  padding:36rpx 20rpx 20rpx;
	  box-sizing: border-box;
	}
	.comm_bottom_border{
	  border-bottom: 2rpx solid #666;
	  padding-bottom: 20rpx;
	}
	.fcolor999{
	  color: #999;
	}
	
	.Top_box{
	  height: 450rpx;
	  image{
	    width: 100rpx;
	    height: 100rpx;
	  }
	  .commbox{
	    height: 62rpx;
	    color: #999;
	    line-height: 62rpx;
	  }
	  .Top_box_info1{
	    display: flex;
	    >view{
	      margin-left: 28rpx;
	    }
	    text{
	      display: block;
	    }
	    text:nth-child(1){
	      font-size: 48rpx;
	    }
	    text:nth-child(2){
	      font-size: 32rpx;
	    }
	  }
	  .Top_box_info2{
	    display: flex;
	    justify-content: space-around;
	    padding-top: 10rpx;
	  }
	}
	
	.Top_content_box{
	  height: 270rpx;
	  view:nth-child(2){
	    padding-top: 10rpx;
	  }
	  view:nth-child(3){
	    padding-top: 10rpx;
	  }
	  text{
	    display: inline-block;
	    float: right;
	    font-family:fangsong;
	  }
	}
	
	.Top_skill_box{
	  text{
	    display: block;
	    margin:20rpx 0;
	  }
	  .bottom_proiect_box{
	    color: #000;
	  }
	}
	
	.Bootom_box{
	  margin-bottom: 30rpx;
	}
}

</style>
