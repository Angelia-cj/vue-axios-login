/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:29:00
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-06 19:00:17
 */
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios'
// 把axios对象挂到Vue实例上面，使用axios的时候直接 this.$axios就可以了
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')