<!--
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:36:48
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-04 16:12:08
-->
<template>
  <div class="login-container">
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button type="submit" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: 'admin',
      password: '123456'
    }
  },
  methods: {
    login() {}
  },
}
</script>

<style lang="scss" scoped>

</style>
