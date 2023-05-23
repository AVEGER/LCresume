"use strict";
const resumeData = require("../../../resumeData.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "IntroSkill",
  data() {
    return {
      list: resumeData.skillList
    };
  },
  onShareAppMessage() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-29c11ba1"], ["__file", "S:/LJCProgarm/LCresume/resumecomponents/IntroMaster/skill/index.vue"]]);
wx.createComponent(Component);
