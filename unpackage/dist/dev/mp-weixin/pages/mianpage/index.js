"use strict";
const utils_comutils = require("../../utils/comutils.js");
const common_vendor = require("../../common/vendor.js");
const FirstMood = () => "../../resumecomponents/FirstMood/index2.js";
const IntroMaster = () => "../../resumecomponents/IntroMaster/index2.js";
const Zresume = () => "../../resumecomponents/Zresume/index.js";
const _sfc_main = {
  data() {
    return {
      randNum: 2
    };
  },
  created() {
    this.randNum = utils_comutils.getRandomNumber(1, 3);
  },
  components: {
    FirstMood,
    IntroMaster,
    Zresume
  }
};
if (!Array) {
  const _component_FirstMood = common_vendor.resolveComponent("FirstMood");
  const _component_IntroMaster = common_vendor.resolveComponent("IntroMaster");
  const _component_Zresume = common_vendor.resolveComponent("Zresume");
  (_component_FirstMood + _component_IntroMaster + _component_Zresume)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.randNum == 1
  }, $data.randNum == 1 ? {} : $data.randNum == 2 ? {} : {}, {
    b: $data.randNum == 2
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "S:/LJCProgarm/LCresume/pages/mianpage/index.vue"]]);
wx.createPage(MiniProgramPage);
