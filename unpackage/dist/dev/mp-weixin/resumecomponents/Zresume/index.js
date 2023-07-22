"use strict";
const common_vendor = require("../../common/vendor.js");
const CustomBottom = () => "../../components/CustomTabbar/index.js";
const ZresumeMain = () => "./main/index.js";
const ZresumeProject = () => "./project/index.js";
const _sfc_main = {
  data() {
    return {
      isPage: 0,
      ZreusmeList: [
        {
          text: "简历",
          iconPath: "/static/tabs/basic.png",
          selectedIconPath: "/static/tabs/basic-s.png"
        },
        {
          text: "项目",
          iconPath: "/static/tabs/skill.png",
          selectedIconPath: "/static/tabs/skill-s.png"
        }
      ]
    };
  },
  components: {
    CustomBottom,
    ZresumeMain,
    ZresumeProject
  },
  created() {
  },
  methods: {
    getIndex(e) {
      this.isPage = e;
    }
  }
};
if (!Array) {
  const _component_ZresumeMain = common_vendor.resolveComponent("ZresumeMain");
  const _component_ZresumeProject = common_vendor.resolveComponent("ZresumeProject");
  const _component_CustomBottom = common_vendor.resolveComponent("CustomBottom");
  (_component_ZresumeMain + _component_ZresumeProject + _component_CustomBottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isPage == 0
  }, $data.isPage == 0 ? {} : {}, {
    b: common_vendor.o($options.getIndex),
    c: common_vendor.p({
      list: $data.ZreusmeList
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "S:/LJCProgarm/Github/LCresume/resumecomponents/Zresume/index.vue"]]);
wx.createComponent(Component);
