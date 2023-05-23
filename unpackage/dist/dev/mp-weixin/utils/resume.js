"use strict";
const resumeData = require("../resumeData.js");
const initAge = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let born = resumeData.baseInfo.age;
  if (month > 4) {
    return year - born;
  } else {
    if (day > 4) {
      return year - born;
    } else {
      return year - (born + 1);
    }
  }
};
const initWorkYear = () => {
  let now = new Date().getTime();
  let startwork = resumeData.baseInfo.startwork;
  let workDay = new Date(startwork).getTime();
  let years = (now - workDay) / (1e3 * 60 * 60 * 24 * 365);
  return Math.round(Number(years).toFixed(1));
};
exports.initAge = initAge;
exports.initWorkYear = initWorkYear;
