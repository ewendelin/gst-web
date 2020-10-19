
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import ElementUI from 'element-ui';
import axios from 'axios';
import i18n from '@/plugins/i18n';
// import Qs from 'qs'

// const ENV = 'production'
const ENV = 'development'
const apiURLProd =  'https://api.gast.world/api/v1';
const apiURLDev =  'http://localhost:3000/api/v1';

const apiURL = ENV == 'production' ? apiURLProd : apiURLDev ;

const loginURLProd =  'https://www.gast.world';
const loginURLStaging =  'https://staging.gast.world';
const loginURL = ENV == 'production' ? loginURLProd : loginURLStaging;
// login logic,
var api = axios.create({
  baseURL: apiURL
  // transformRequest: [function (data) {
  //   data = Qs.stringify(data);
  //   return data;
  // }],
  // headers:{'Content-Type':'application/x-www-form-urlencoded'}
});
// api.defaults.headers.common['X-Auth-Token'] = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1OTI4MDI3NTR9.uv2T1ndNoq9OE-NPDXiRG00EovBFESXxPVoBbE843qc";
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.common['API-key'] = 'gastbyellenapikey';
// api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.withCredentials = false;
// api.defaults.headers.common['X-Auth-Token'] = sessionStorage.getItem('token');

Vue.config.productionTip = false;
Vue.prototype.$config = {};
Vue.prototype.$config.appID = 'wx8d177cf445f8365e';
Vue.prototype.$config.loginUrl = `${loginURL}`;
Vue.use(ElementUI);
Vue.prototype.$api = api;

new Vue({
	router,
	vuetify,
	i18n,
	render: h => h(App)
}).$mount('#app');
