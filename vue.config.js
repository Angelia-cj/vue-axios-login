/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-10 18:10:59
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-10 18:13:14
 */
'use strict'

module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    before: require('./mock/mock-server')
  }
}