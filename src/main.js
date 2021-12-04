/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:29:00
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-04 14:40:06
 */
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')