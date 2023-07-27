import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://api-hmugo-web.itheima.net/api'

import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
