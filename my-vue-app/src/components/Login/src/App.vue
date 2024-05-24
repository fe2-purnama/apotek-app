<script setup>
import login from './components/login.vue';
</script>

<template>
  <div id="app">
    <h1>Login</h1>
    <p>welcome back</p>
    <login/>
  </div>
</template>

<style scoped>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }

p {
  font-size: 28px;
  font-weight: 600;
}
</style>
