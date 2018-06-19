<template>
  <div v-show="$root.isOffline">
    <small>No Internet Connection</small>
  </div>
</template>

<style scoped>
div {
  background: #f00;
  color: #f3f3f3;
  padding: 0.25em;
  text-align: center;
}
</style>
