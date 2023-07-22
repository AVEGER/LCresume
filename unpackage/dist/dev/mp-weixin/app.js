"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const resumeData = require("./resumeData.js");
const utils_comutils = require("./utils/comutils.js");
const utils_resume = require("./utils/resume.js");
if (!Math) {
  "./pages/index/index.js";
  "./resumecomponents/FirstMood/index.js";
  "./pages/mianpage/index.js";
  "./resumecomponents/IntroMaster/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    this.initData();
  },
  methods: {
    initData() {
      common_vendor.wx$1.setStorageSync("global_info", JSON.stringify(["性别", "学历", "年龄", "经验"]));
      common_vendor.wx$1.setStorageSync("global_info1", JSON.stringify(["男", "大专", "24", "4年"]));
      common_vendor.wx$1.setStorageSync("global_objInfo", JSON.stringify(resumeData.baseInfo));
      common_vendor.wx$1.setStorageSync("global_skill_list", JSON.stringify(resumeData.skillList));
      common_vendor.wx$1.setStorageSync("global_project_List", JSON.stringify(resumeData.projectList));
      common_vendor.wx$1.setStorageSync("global_work_List", JSON.stringify(resumeData.workList));
    }
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "S:/LJCProgarm/Github/LCresume/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$getresume = function(arg) {
    return utils_comutils.getInfo(arg);
  };
  app.config.globalProperties.$baseinfo = {
    age: utils_resume.initAge(),
    startwork: utils_resume.initWorkYear(),
    schoolMajor: resumeData.baseInfo.schoolMajor,
    level: resumeData.baseInfo.level,
    name: resumeData.baseInfo.name,
    post: resumeData.baseInfo.post,
    address: resumeData.baseInfo.address,
    phone: resumeData.baseInfo.phone
  };
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
