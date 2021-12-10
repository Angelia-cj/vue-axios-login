/*
 * @description: 二次封装axios
 * @Author: changjia
 * @Date: 2021-12-08 15:43:15
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-10 18:08:27
 */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }

)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
      // 如果返回码不是20000，则判定为错误。
    if (res.code !== 2000) {
      Message({
          message: res.message || '错误!',
          type: 'error',
          duration: 5 * 1000
        })
        // 50008:非法令牌；50012:其他客户端登录；50014:令牌过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('您已经注销，您可以取消此页面，或重新登录!', '退出提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || '错误!'))
    } else {
      return res
    }
  },
  error => {
    console.log('错误: ' + error);
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error);
  }
)

// 暴露axios实例
export default service