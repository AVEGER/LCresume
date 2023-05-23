"use strict";
const resumeData = require("../../../resumeData.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "IntroWork",
  data() {
    return {
      list: resumeData.workList
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.companyName),
        b: common_vendor.t(item.job),
        c: common_vendor.t(item.time),
        d: common_vendor.f(item.tags, (tag, i, i1) => {
          return {
            a: common_vendor.t(tag),
            b: i
          };
        }),
        e: common_vendor.f(item.desc, (x, i, i1) => {
          return {
            a: common_vendor.t(x),
            b: i
          };
        }),
        f: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f71b8bb"], ["__file", "S:/LJCProgarm/LCresume/resumecomponents/IntroMaster/work/index.vue"]]);
wx.createComponent(Component);
