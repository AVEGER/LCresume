/**
 * @method 取对应的基本数据
 * @param String
 */
export function getInfo(str) {
	let a = JSON.parse(wx.getStorageSync('global_info1'))
	let b = JSON.parse(wx.getStorageSync('global_skill_list'))
	let c = JSON.parse(wx.getStorageSync('global_project_List'))
	let d = JSON.parse(wx.getStorageSync('global_work_List'))
	let e = JSON.parse(wx.getStorageSync('global_objInfo'))
	switch (str) {
		case 'base':
			return a;
		case 'baseinfo':
			return e;
		case 'skill':
			return b;
		case 'project':
			return c;
		case 'work':
			return d;
		default:
			return console.log('请输入想要获取的信息!')
	}
}

/**
 * @method 转化为汉字的数字
 * @param String
 */
export function numberToChinese(number) {
  const chineseNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const chineseUnits = ['', '十', '百', '千', '万', '亿'];

  if (number === 0) {
    return chineseNums[0];
  }

  let result = '';

  while (number > 0) {
    const digit = number % 10;
    result = chineseNums[digit] + result;
    number = Math.floor(number / 10);
  }

  return result;
}


/**
 * @method 对日期进行格式化
 * @param String
 */
export function formatTime(date) {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

/**
 * @method 生成随机数
 * @param 最小值（String）最大值（String）
 * @returns Number
 */
export function getRandomNumber(min, max) {
	const coefficient = max - min + 1; // 系数为10的length次方
	const offset = min; // 偏移量为10的length-1次方
	let rest = Math.floor(Math.random() * coefficient) + offset;
	return rest
}

/**
 * @method 格式化数字
 * @param String
 */
export function formatNumber(n) {
	n = n.toString()
	return n[1] ? n : `0${n}`
}