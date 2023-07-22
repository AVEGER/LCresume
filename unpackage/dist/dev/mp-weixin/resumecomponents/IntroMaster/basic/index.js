"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  name: "IntroBasic",
  data() {
    return {
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
    d: common_vendor.t($data.baseinfo.age),
    e: common_vendor.t($data.baseinfo.level),
    f: common_vendor.t($data.baseinfo.startwork)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0911f471"], ["__file", "S:/LJCProgarm/Github/LCresume/resumecomponents/IntroMaster/basic/index.vue"]]);
wx.createComponent(Component);
