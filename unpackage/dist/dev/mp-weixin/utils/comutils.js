"use strict";
const common_vendor = require("../common/vendor.js");
function getInfo(str) {
  let a = JSON.parse(common_vendor.wx$1.getStorageSync("global_info1"));
  let b = JSON.parse(common_vendor.wx$1.getStorageSync("global_skill_list"));
  let c = JSON.parse(common_vendor.wx$1.getStorageSync("global_project_List"));
  let d = JSON.parse(common_vendor.wx$1.getStorageSync("global_work_List"));
  let e = JSON.parse(common_vendor.wx$1.getStorageSync("global_objInfo"));
  switch (str) {
    case "base":
      return a;
    case "baseinfo":
      return e;
    case "skill":
      return b;
    case "project":
      return c;
    case "work":
      return d;
    default:
      return console.log("请输入想要获取的信息!");
  }
}
function numberToChinese(number) {
  const chineseNums = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  if (number === 0) {
    return chineseNums[0];
  }
  let result = "";
  while (number > 0) {
    const digit = number % 10;
    result = chineseNums[digit] + result;
    number = Math.floor(number / 10);
  }
  return result;
}
function getRandomNumber(min, max) {
  const coefficient = max - min + 1;
  const offset = min;
  let rest = Math.floor(Math.random() * coefficient) + offset;
  return rest;
}
exports.getInfo = getInfo;
exports.getRandomNumber = getRandomNumber;
exports.numberToChinese = numberToChinese;
