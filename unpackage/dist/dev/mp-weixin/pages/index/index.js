"use strict";
const common_vendor = require("../../common/vendor.js");
const enterMood = () => "../../components/EnterBtn/index.js";
const _sfc_main = {
  data() {
    return {};
  },
  components: {
    enterMood
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_enterMood = common_vendor.resolveComponent("enterMood");
  _component_enterMood();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      btnwidth: "500rpx",
      text: "点击进入",
      url: "/pages/mianpage/index"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "S:/LJCProgarm/LCresume/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
