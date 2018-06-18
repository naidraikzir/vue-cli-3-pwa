import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('./pages/Foo') },
    { path: '/bar', component: () => import('./pages/Bar') },
    { path: '/baz', component: () => import('./pages/Baz') },
  ],
});
