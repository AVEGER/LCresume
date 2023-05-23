<template>
	<div class="btn_box" :style="{width: btnwidth}">
		<button class="container" @click="topage">{{text}}</button>
	</div>
</template>

<script>
	export default {
		name:"EnterBtn",
		props:{
			text:'',
			url:'',
			btnwidth:'500rpx'
		},
		methods:{
			topage(){
				wx.navigateTo({
					url:this.url.toLowerCase()
				})
			}
		}
	}
</script>

<style scoped>
.btn_box{
	margin: 0 auto;
}
.container {
  font-family: monospace;
  font-size: 1.2rem;
  color: #FAFAFA;
  text-transform: uppercase;
  border-radius: 10px;
  border: 2rpx solid #FAFAFA;
  background: #252525;
  box-shadow: 3rpx 3rpx #fafafa;
  cursor: pointer;
  margin: 35px 0;
}

.container:active {
  box-shadow: none;
  transform: translate(3rpx, 3rpx);
}
</style>