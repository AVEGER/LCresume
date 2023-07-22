"use strict";
const baseInfo = {
  name: "李金城",
  post: "运维工程师",
  age: "1999",
  address: "深圳",
  startwork: "2019/6/17",
  level: "大专",
  phone: "15273774468",
  schoolMajor: "长沙民政职业技术学院  网络工程",
  introduce: "皮实耐心：对工作事务能沉下心去解决问题积极好学：在各大论坛中畅意遨游是我喜欢的事，一直对技术保持新鲜感！"
};
const skillList = [
  "熟练路由交换技术和小型局域网的部署与运维 ，各种办公设备的维护",
  "熟悉Linux/CentOS的安装、运维、升级、备份和故障排除和编写脚本",
  "熟练掌握CI/CD，能使用Docker、Kubernetes等容器技术持续交付流程",
  "熟练 TCP/IP 协议簇中主流协议，如ARP、VLAN、OSPF、静态路由等",
  "熟悉电脑软硬件的维护、熟练使用CentOS等操作系统及相关网络环境操作",
  "熟练路由交换技术、TCP/IP 模型、华为、思科、华三路由器交换机配置",
  "熟悉虚拟化、了解VMware，能够编写简单的脚本进行虚拟化部署和管理",
  "熟悉掌握Python、Shell等编程语言，能使用Python、Shell编写脚本",
  "熟练网络机房集群实际搭建、故障处理，会同轴电缆和音视频接头的焊接",
  "熟练Javescript、CSS3能根据UI的设计稿，快速搭建符合标准的页面结构",
  "熟练使用前端框架vue2/3、uniapp、微信小程序、react有项目实战经验",
  "熟悉代码管理工具 GIT ，熟练使用 npm ，cnpm ，yarn 等包管理工具",
  "熟悉 Mysql、Redis等相关数据库技术和SQL语句和数据库优化"
];
const workList = [
  {
    companyName: "深圳比一比网络科技有限公司",
    job: "网络运维工程师",
    time: "2022.5-至今",
    tags: ["Linux", "Ubuntu", "Python", "Mysql", "VMware"],
    desc: [
      "1、主要负责公司ARM产品，业务网页及后台系统的运维；",
      "2、参与公司新产品功能需求的技术部署以及运维；",
      "3、维护和加固公司内网网络和网络安全",
      "4、公司项目涉及技术栈较多，需要学习使用各种开发技术。",
      "5、负责相关产品的测试、部署、产品后期维护等"
    ]
  },
  {
    companyName: "深圳顺势腾飞科技有限公司",
    job: "运维开发工程师",
    time: "2022.2-2023.4",
    tags: ["Linux", "Vue", "Python", "Mysql", "VMware"],
    desc: [
      "1、主要负责公司小程序，业务网页及后台系统的运维和开发；",
      "2、参与公司新产品功能需求的技术部署以及运维；",
      "3、对公司官网和管理后台进行服务器开发以及维护；",
      "4、公司项目涉及技术栈较多，需要学习使用各种前端技术。",
      "5、负责相关产品的开发、部署、优化代码结构及页面载入速度等"
    ]
  },
  {
    companyName: "部队某旅",
    job: "网管室通信兵",
    time: "2019.9-2021.12",
    tags: ["IDC", "IDS", "HUAWEI", "jQuery"],
    desc: [
      "1、网络机房集群搭建及平常运维护，配置管理 ，故障应急处理；",
      "2、解决上级考核和机房各类故障，参与新机房和网络搭建问题；",
      "3、负责日常系统的部署、维护、汇总故障问题、定期提交汇总报告；"
    ]
  }
];
const projectList = [
  {
    name: "ELOVE中台系统搭建和运维",
    time: "2022.2 - 2022.11",
    summary: "根据用户登录权限不同展示不同角色，角色分为销售人员、审核人员、管理者，销售人员有权限申请商品信息；审核人员负责商品审核；管理者可以创建及分配不同的权限用户，公共模块的封装；",
    stack: "vue+element-ui；Linux+k8s+nginx+SQL",
    work: "中台模块化服务器运维和前端开发",
    desc: [
      "1.负责中台系统的搭建和维护工作，包括硬件配置，k8s部署",
      "2.使用Nginx，MySQL技术完成Web服务器的部署和优化",
      "3.负责云服务器的监控和日常管理，应用程序的部署和更新，保障服务器的正常运行",
      "4.定期对数据库和文件系统进行备份，监控服务器的健康状态，保证程序稳定运行",
      "5.运用 vue+element-ui 创建项目及配置、项目结构分配、模块定义",
      "6.各页面功能展示 ECharts 组件展示：图表展示、列表及详细页、物流信息",
      "7.各模块组件封装，全局组件定义、hooks函数、axios二次封装"
    ]
  },
  {
    name: "慕晨官网服务器搭建和运维",
    time: "2021.2 - 2021.11",
    summary: "慕晨商城是向为外贸出主营相关配件的线上经销(B2C)和线下海外销售的官网。",
    stack: "Nuxt+element-ui；Linux+k8s+Nginx+Mysql",
    work: "官网运维和开发",
    desc: [
      "1.负责web服务器的搭建和维护工作，包括硬件配置，k8s部署",
      "2.使用用Nginx，MySQL技术完成Web服务器的部署和优化",
      "3.负责云服务器的监控和日常管理，应用程序的部署和更新，保障服务器的正常运行",
      "4.定期对数据库和文件系统进行备份，监控服务器的健康状态，保证程序稳定运行",
      "5.根据业务需求, 封装自定义组件 Tabbar 实现 vue-router  的  SPA 单页路由的切换与定制",
      "6.进行服务器和代码性能优化，实现图片懒加载，代码复用检查，提升用户体验"
    ]
  },
  {
    name: "服务器后台升级优化",
    time: "2022.4 - 2023.4",
    summary: "该项目是针对公司的核心业务服务器进行性能优化和安全加固，并且对各类服务器进行监控和日志管理。以提高系统的稳定性和可靠性。保障核心业务的安全性和可靠性，提高故障预警和快速响应能力。",
    stack: "Mysql、IPfire、IDS、Lynis、Python、Shell",
    work: "运维工程师",
    desc: [
      "1.分析服务器的软硬件环境，确定性能瓶颈。分析安全风险，制定安全加固方案；",
      "2.优化Mysql数据库和二三层网络配置，提高数据库性能和网络稳定性。优化程序代码，减少资源消耗；",
      "3.升级操作系统和软件修补安全漏洞、配置IPfire和IDS，保障网络安全、加强密码策略，限制用户权限；",
      "4.利用Lynis进行定期安全审计和漏洞扫描，及时发现和修复安全问题；",
      "5.优化自动化运维工具的配置，编写Shell运维脚本、实现快速故障排除和恢复；"
    ]
  },
  {
    name: "建设新网络节点机房",
    time: "2020.4 - 2020.12",
    summary: "为建造搭建新型通信网而计划的项目，在已有的网络线路基础上搭建新的网络节点，在网络机房的服务器上架、操作系统安装、业务系统的部署。部署防火墙 ，入侵检测系统和防病毒系统。",
    stack: "IDC",
    work: "运维实施工程师",
    desc: [
      "1.负责网络节点机房日常运维工作 ，以及处理 7*24 小时的突发应急事件；",
      "2.负责系统部署上线、系统优化、日常更新、监控和维护工作；",
      "3.进行安防系统配置 ，包括 ACL 策略、静态 NAT、策略 NAT 等；",
      "4.定期为存在问题的访问控制策略、静态路由、端口标签、接口描述等等进行优化；",
      "5.维护所属专业的网络设备、主要为华为和 CISCO、浪潮等设备；",
      "6.负责新入网的 CE 和网管交换机、路由器的验收工作；"
    ]
  },
  {
    name: "大型会议场地建设",
    time: "2020.11 - 2021.5",
    summary: "系统建设主要包含会议室音视频集成。   会议室音视频集成主要包括大会议室内的大屏幕显示系统、视频信号采集系统、视频信号处理系统、扩声发言系统、录播系统及周边监控系统的建设，以及小型局域网搭建。",
    stack: "IDC",
    work: "运维实施工程师",
    desc: [
      "1.负责网络机房日常运维工作 ，处理视频会议中的突发应急事件；",
      "2.负责视频会议沟通.调试及保障工作；",
      "3.负责会议室视频设备巡检.维护等；",
      "4.定期维护员工日常 IT 服务支持进行优化；",
      "5.按照制定的流程及规范实行运维操作 ，协助改进运维文档的维护流程 ，提高服务运行质量；"
    ]
  }
];
exports.baseInfo = baseInfo;
exports.projectList = projectList;
exports.skillList = skillList;
exports.workList = workList;
