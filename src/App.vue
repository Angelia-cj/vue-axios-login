<!--
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-04 14:29:00
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-06 21:24:56
-->
<template>
  <div id="app">
    <!-- <router-link to="/login">登陆</router-link> -->
    <router-view ></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
