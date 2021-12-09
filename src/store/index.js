/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:38:09
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-09 21:16:55
 */
import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store