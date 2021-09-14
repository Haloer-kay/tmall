import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
import Vuex from "vuex"
import store from "./store/index.js"
import axios from "axios"
const originalPush = router.replace;
router.replace = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
};
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$store=store
Vue.use(Vuex)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')









/* eslint-disable no-new */
