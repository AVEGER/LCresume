"use strict";
const utils_comutils = require("../../../utils/comutils.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "ZresumeProject",
  data() {
    return {
      projectlist: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      let arr = this.$getresume("project");
      arr.map((v, i) => {
        v.number = utils_comutils.numberToChinese(i + 1);
      });
      this.projectlist = arr;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.projectlist, (item, index, i0) => {
      return {
        a: common_vendor.t(item.number),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.stack),
        d: common_vendor.f(item.desc, (descitem, index2, i1) => {
          return {
            a: common_vendor.t(descitem),
            b: index2
          };
        }),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "S:/LJCProgarm/LCresume/resumecomponents/Zresume/project/index.vue"]]);
wx.createComponent(Component);
