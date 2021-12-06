/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:37:28
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-06 21:21:23
 */
import Vue from 'vue'
import Router from 'vue-router'

// import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [{
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
})

// 注册全局钩子用来拦截导航
// router.beforeEach((to, form, next) => {
//   const token = store.state.token
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (token) { // 通过vuex state获取当前的token是否存在
//       next()
//     } else {
//       alert('请登录！')
//       next({
//         path: '/login'
//           // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router