<!--
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:36:48
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-06 21:38:51
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
      this.$axios.get('http://localhost:8080/#/login',{
        params: {
          username:this.username,
          password: this.password
        }
      }).then(res=>{
        if ( this.username ==='admin' && this.password === '111111') {
          this.$router.push({name:'Home'})
        } else {
          return res.error
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
