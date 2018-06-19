import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

Vue.use(Router);

NProgress.configure({
  parent: '#app',
  showSpinner: false,
});

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('./pages/Foo') },
    { path: '/bar', component: () => import('./pages/Bar') },
    { path: '/baz', component: () => import('./pages/Baz') },
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
