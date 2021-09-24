import Vue from 'vue'
import App from './App.vue'
window.$ = window.jQuery = require('jquery')
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js";
//import { FontawesomeIcon } from '@fortawesome/vue-fontawesome';
//import {library} from '@fortawesome/fontawesome-svg-core';
//import {fas} from '@fortawesome/free-solid-svg-icons';
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");