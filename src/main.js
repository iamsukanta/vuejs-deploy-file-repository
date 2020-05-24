import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.router = router;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: Vue.router,
  template: '<App/>',
  components: {
    App
  }
})
