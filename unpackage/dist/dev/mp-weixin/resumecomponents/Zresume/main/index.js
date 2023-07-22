"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "ZresumeMain",
  data() {
    return {
      baseinfo: this.$baseinfo,
      skillul: [],
      worklist: [],
      introduce: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.skillul = this.$getresume("skill");
      this.worklist = this.$getresume("work");
      this.introduce = this.$getresume("baseinfo").introduce;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.baseinfo.name),
    b: common_vendor.t($data.baseinfo.post),
    c: common_vendor.t($data.baseinfo.age),
    d: common_vendor.t($data.baseinfo.schoolMajor),
    e: common_vendor.t($data.baseinfo.startwork),
    f: common_vendor.f($data.skillul, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item),
        c: index
      };
    }),
    g: common_vendor.f($data.worklist, (item, index, i0) => {
      return {
        a: common_vendor.t(item.companyName),
        b: common_vendor.t(item.job),
        c: common_vendor.t(item.time),
        d: common_vendor.f(item.desc, (item1, index2, i1) => {
          return {
            a: common_vendor.t(item1),
            b: index2
          };
        }),
        e: index
      };
    }),
    h: common_vendor.t($data.introduce)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-932c6f7a"], ["__file", "S:/LJCProgarm/Github/LCresume/resumecomponents/Zresume/main/index.vue"]]);
wx.createComponent(Component);
