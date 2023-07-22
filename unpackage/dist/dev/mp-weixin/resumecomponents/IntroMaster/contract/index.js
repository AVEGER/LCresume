"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  name: "IntroContract",
  data() {
    return {};
  },
  methods: {
    copy(data) {
      common_vendor.index.setClipboardData({
        data,
        success: function() {
          common_vendor.index.showToast({
            title: "复制成功",
            duration: 2e3
          });
        }
      });
    },
    playphone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "15273774468",
        fail: () => {
          console.log("取消拨打电话！");
        }
      });
    }
  },
  onShareAppMessage() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o(($event) => $options.copy("http://aveger.github.io/")),
    c: common_assets._imports_1,
    d: common_vendor.o(($event) => $options.copy("15273774468@163.com")),
    e: common_assets._imports_2,
    f: common_vendor.o(($event) => $options.copy("https://www.cnblogs.com/aveger/")),
    g: common_assets._imports_3,
    h: common_vendor.o(($event) => $options.copy("https://github.com/AVEGER")),
    i: common_vendor.o(($event) => $options.playphone())
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-844317b5"], ["__file", "S:/LJCProgarm/Github/LCresume/resumecomponents/IntroMaster/contract/index.vue"]]);
wx.createComponent(Component);
