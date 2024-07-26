import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAlertify from 'vue-alertify'
import InfiniteLoading from 'vue-infinite-loading';
import Scrollspy from 'vue2-scrollspy';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/font/flaticon.css'
Vue.config.productionTip = false

Vue.prototype.$url_api = 'http://localhost:8000/api/'
Vue.prototype.$url_websocket_main = 'http://localhost:5000/'
Vue.prototype.$http =  axios.create({
  baseURL: Vue.prototype.$url_api,
  headers: { "Content-Type": "application/json"}
});


const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+token

}

Vue.use(VueAlertify)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueApexCharts)
Vue.use(Vuelidate)
Vue.use(Scrollspy)
Vue.component('apexchart', VueApexCharts)
Vue.use(InfiniteLoading, {
  props: {
    spinner: 'spiral',
    /* other props need to configure */
  }
});
Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
