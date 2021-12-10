/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-08 19:01:03
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-10 18:03:27
 */
const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar
}

export default getters