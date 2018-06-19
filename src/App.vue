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
@import '~nprogress/nprogress.css';

#nprogress .bar {
  background: #5bb984;
}

#nprogress .peg {
  box-shadow: 0 0 10px #5bb984, 0 0 5px #5bb984;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: black;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
}

image,
video {
  max-width: 100%;
}

pre {
  background: #023;
  color: white;
  overflow-x: auto;
  padding: 1em;
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
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
