/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:37:28
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-08 22:28:41
 */
import Vue from 'vue'
import Router from 'vue-router'

// import store from './store'

Vue.use(Router)

export const routes = [{
    path: '/login',
    name: 'Login',
    component: () =>
      import ('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () =>
      import ('../views/home/index')
  }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// 创建路由实例
const router = createRouter()

// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router