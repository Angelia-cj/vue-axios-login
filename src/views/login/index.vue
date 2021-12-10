<!--
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:36:48
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-10 18:16:23
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
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      const userInfo = {
        username:this.username,
        password:this.password
      }
      console.log(userInfo);
      // this.$store.dispatch('user/login',userInfo).then(() => {
      //   this.$router.push({name:'Home'})
      // }).catch(error => {
      //   console.log(error);
      // })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
