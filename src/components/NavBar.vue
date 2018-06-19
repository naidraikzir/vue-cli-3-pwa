<template>
  <div class="navi">
    <router-link
      v-for="(menu, i) of menus"
      :key="i"
      :to="{ path: menu.path }"
      :alt="menu.text"
      exact
    >
      <component :is="menu.icon"></component>
    </router-link>
  </div>
</template>

<script>
import {
  HomeIcon,
  PlusSquareIcon,
  CameraIcon,
} from 'vue-feather-icons';

export default {
  data: () => ({
    menus: [
      { path: '/', text: 'foo', icon: HomeIcon },
      { path: '/bar', text: 'bar', icon: PlusSquareIcon },
      { path: '/baz', text: 'baz', icon: CameraIcon },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.navi {
  align-items: stretch;
  background: #f3f3f3;
  bottom: 0;
  display: flex;
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 2;

  a {
    align-items: center;
    color: #999;
    cursor: pointer;
    display: flex;
    flex: 1;
    justify-content: center;
    text-decoration: none;

    &.router-link-active {
      color: #222;
    }
  }
}
</style>
