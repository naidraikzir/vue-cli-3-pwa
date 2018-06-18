import './scss/app.scss';

import Vue from 'vue';
import router from './router';
import App from './App';
import './registerServiceWorker';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
