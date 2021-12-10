/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:29:00
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-10 17:34:39
 */
import Vue from 'vue'

import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI)

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')