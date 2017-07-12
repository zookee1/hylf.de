<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  components: { Navigation },
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
