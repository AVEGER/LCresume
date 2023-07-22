"use strict";
const common_vendor = require("./common/vendor.js");
const CustomBottom = () => "./components/CustomTabbar/index.js";
const IntroBasic = () => "./resumecomponents/IntroMaster/basic/index.js";
const IntroContract = () => "./resumecomponents/IntroMaster/contract/index.js";
const IntroProject = () => "./resumecomponents/IntroMaster/project/index.js";
const IntroSkill = () => "./resumecomponents/IntroMaster/skill/index.js";
const IntroWork = () => "./resumecomponents/IntroMaster/work/index.js";
const _sfc_main = {
  data() {
    return {
      isPage: 0,
      introList: [
        {
          text: "基本信息",
          iconPath: "/static/tabs/basic.png",
          selectedIconPath: "/static/tabs/basic-s.png"
        },
        {
          text: "个人技能",
          iconPath: "/static/tabs/skill.png",
          selectedIconPath: "/static/tabs/skill-s.png"
        },
        {
          text: "工作经历",
          iconPath: "/static/tabs/work.png",
          selectedIconPath: "/static/tabs/work-s.png"
        },
        {
          text: "项目经历",
          iconPath: "/static/tabs/project.png",
          selectedIconPath: "/static/tabs/project-s.png"
        },
        {
          text: "联系方式",
          iconPath: "/static/tabs/contract.png",
          selectedIconPath: "/static/tabs/contract-s.png"
        }
      ]
    };
  },
  components: {
    CustomBottom,
    IntroBasic,
    IntroContract,
    IntroProject,
    IntroSkill,
    IntroWork
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
  const _component_IntroBasic = common_vendor.resolveComponent("IntroBasic");
  const _component_IntroSkill = common_vendor.resolveComponent("IntroSkill");
  const _component_IntroContract = common_vendor.resolveComponent("IntroContract");
  const _component_IntroProject = common_vendor.resolveComponent("IntroProject");
  const _component_IntroWork = common_vendor.resolveComponent("IntroWork");
  const _component_CustomBottom = common_vendor.resolveComponent("CustomBottom");
  (_component_IntroBasic + _component_IntroSkill + _component_IntroContract + _component_IntroProject + _component_IntroWork + _component_CustomBottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isPage == 0
  }, $data.isPage == 0 ? {} : $data.isPage == 1 ? {} : $data.isPage == 4 ? {} : $data.isPage == 3 ? {} : $data.isPage == 2 ? {} : {}, {
    b: $data.isPage == 1,
    c: $data.isPage == 4,
    d: $data.isPage == 3,
    e: $data.isPage == 2,
    f: common_vendor.o($options.getIndex),
    g: common_vendor.p({
      list: $data.introList
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "S:/LJCProgarm/Github/LCresume/resumecomponents/IntroMaster/index.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
