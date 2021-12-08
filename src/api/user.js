/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-08 22:10:23
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-08 22:13:07
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}