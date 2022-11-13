import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import bootstrapCss from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Jquery from 'jquery'
window.$ = window.jQuery =Jquery
import popper from 'popper.js'
import bootstrapjs from '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import iziToastCss from '../node_modules/izitoast/dist/css/iziToast.min.css'
import iziToastJs from '../node_modules/izitoast/dist/js/iziToast'

window.iziToast = iziToastJs;

import axios from 'axios'
window.axios = axios
window.token=localStorage.getItem('AToken')
axios.defaults.baseURL = 'http://localhost/enjoyShop/public/api'
axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;

axios.defaults.headers.post['Content-Type'] = 'application/json';
import Form from 'vform'
window.Form = Form,

createApp(App).use(router).mount('#app')
