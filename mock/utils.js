/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-10 17:23:12
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-10 17:25:22
 */
/***
 * @param {string} url
 * @return {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

module.exports = {
  param2Obj
}