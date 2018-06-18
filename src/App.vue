<template>
  <div id="app">
    <div class="view">
      <router-view></router-view>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  background: black;
}

#app {
  background: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 540px;
  left: 50%;
  transform: translateX(-50%);
}

.view {
  bottom: 50px;
  overflow-y: auto;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
