"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const _sfc_main = {
  name: "FirstMood",
  data() {
    return {
      global_info: JSON.parse(common_vendor.wx$1.getStorageSync("global_info")),
      global_info1: JSON.parse(common_vendor.wx$1.getStorageSync("global_info1")),
      skill_list: JSON.parse(common_vendor.wx$1.getStorageSync("global_skill_list")),
      global_project_List: JSON.parse(common_vendor.wx$1.getStorageSync("global_project_List")),
      baseinfo: this.$baseinfo
    };
  },
  created() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($data.baseinfo.name),
    c: common_vendor.t($data.baseinfo.post),
    d: common_vendor.f(this.global_info, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item.index
      };
    }),
    e: common_vendor.f(this.global_info1, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item.index
      };
    }),
    f: common_vendor.t($data.baseinfo.address),
    g: common_vendor.t($data.baseinfo.phone),
    h: common_vendor.f(this.skill_list, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    i: common_vendor.f($data.global_project_List, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.summary),
        c: common_vendor.t(item.stack),
        d: common_vendor.f(item.desc, (items, index2, i1) => {
          return {
            a: common_vendor.t(items),
            b: index2
          };
        }),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "S:/LJCProgarm/Github/LCresume/resumecomponents/FirstMood/index.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
