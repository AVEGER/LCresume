"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "EnterBtn",
  props: {
    text: "",
    url: "",
    btnwidth: "500rpx"
  },
  methods: {
    topage() {
      common_vendor.wx$1.navigateTo({
        url: this.url.toLowerCase()
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.text),
    b: common_vendor.o((...args) => $options.topage && $options.topage(...args)),
    c: $props.btnwidth
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3bd72d2"], ["__file", "S:/LJCProgarm/Github/LCresume/components/EnterBtn/index.vue"]]);
wx.createComponent(Component);
