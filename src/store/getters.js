/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-08 19:01:03
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-09 21:15:10
 */
const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar
}