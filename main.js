import App from './App'
import { getInfo } from "@/utils/comutils.js"
import { initAge, initWorkYear } from "@/utils/resume.js"
import { baseInfo } from "@/resumeData.js"
 
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  // 设置全局的 $ 方法
  app.config.globalProperties.$getresume = function(arg){
	  return getInfo(arg)
  }
  //全局个人基本信息
  app.config.globalProperties.$baseinfo = {
	  age:initAge(),
	  startwork:initWorkYear(),
	  schoolMajor:baseInfo.schoolMajor,
	  level:baseInfo.level,
	  name:baseInfo.name,
	  post:baseInfo.post,
	  address:baseInfo.address,
	  phone:baseInfo.phone,
  }
  return {
    app
  }
}
// #endif
