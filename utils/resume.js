import { baseInfo } from "/resumeData.js"

const initAge = () => { // 计算年龄
	let date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()
	let born = baseInfo.age
	if (month > 4) {
		return year - born
	} else {
		if (day > 4) {
			return year - born
		} else {
			return year - (born + 1)
		}
	}
}
const initWorkYear = () => { // 粗略计算工作年限
	let now = (new Date()).getTime()
	let startwork = baseInfo.startwork
	let workDay = (new Date(startwork)).getTime()
	let years = (now - workDay) / (1000 * 60 * 60 * 24 * 365)
	return Math.round(Number(years).toFixed(1))
}

export {
	initAge,
	initWorkYear
}