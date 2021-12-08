/*
 * @description: 从cookies中获取tokens
 * @Author: changjia
 * @Date: 2021-12-08 18:52:48
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-08 18:54:43
 */
import Cookies from 'js-cookie'

const TokenKey = 'vue-axios-token-key'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}