/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:38:09
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-04 14:59:26
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token')
}

const mutations = {
  // 将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
  },
  // 获取用户名
  GET_USER: (state, data) => {
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  // 退出登录
  LOGOUT: (state, data) => {
    // 退出的时候要清除token
    state.token = null
    state.use = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  }
}

const action = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store