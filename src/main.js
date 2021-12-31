import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import swal from 'sweetalert';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App, swal),
}).$mount('#app')
