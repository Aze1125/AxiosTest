import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import "./assets/css/font/iconfont.css"


// Vue.use(VueAxios, axios)

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
