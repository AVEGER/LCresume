"use strict";
const resumeData = require("../../../resumeData.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "IntroProject",
  data() {
    return {
      list: resumeData.projectList
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.work),
        c: common_vendor.t(item.time),
        d: common_vendor.f(item.desc, (s, i, i1) => {
          return {
            a: common_vendor.t(s),
            b: i
          };
        }),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1b5fd026"], ["__file", "S:/LJCProgarm/LCresume/resumecomponents/IntroMaster/project/index.vue"]]);
wx.createComponent(Component);
