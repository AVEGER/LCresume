"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "CustomBottom",
  props: {
    list: {}
  },
  data() {
    return {
      isIpx: false,
      selected: 0,
      color: "#7F8389",
      selectedColor: "#192330",
      borderStyle: "black",
      backgroundColor: "#ffffff"
    };
  },
  created() {
  },
  methods: {
    switchTab(data, index) {
      this.selected = index;
      this.$emit("changIndex", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(this.list, (item, index, i0) => {
      return {
        a: $data.selected === index ? item.selectedIconPath : item.iconPath,
        b: common_vendor.t(item.text),
        c: $data.selected == index ? $data.selectedColor : $data.color,
        d: common_vendor.o(($event) => $options.switchTab(item, index), index),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-99c09179"], ["__file", "S:/LJCProgarm/Github/LCresume/components/CustomTabbar/index.vue"]]);
wx.createComponent(Component);
