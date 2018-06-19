import Vue from 'vue';
import router from './router';
import App from './App';
import './registerServiceWorker';

Vue.config.productionTip = false

new Vue({
  data: {
    isOffline: false,
  },
  created() {
    window.addEventListener('offline', () => {
      this.isOffline = true;
    });
    window.addEventListener('online', () => {
      this.isOffline = false;
    });
  },
  router,
  render: h => h(App)
}).$mount('#app')
