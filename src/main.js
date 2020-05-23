
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import ElementUI from 'element-ui';
import axios from 'axios';

const ENV = 'production'
// const ENV = 'development'
const apiURLDev =  'http://localhost:3000/api/v1';
const apiURLProd =  'https://api.gast.world/api/v1';

const apiURL = ENV == 'productiono' ? apiURLProd : apiURLDev ;
const loginURL =  'https://www.gast.world';
// login logic,
var api = axios.create({
  baseURL: apiURL
});
api.defaults.headers.common['X-Auth-Token'] = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1OTI4MDI3NTR9.uv2T1ndNoq9OE-NPDXiRG00EovBFESXxPVoBbE843qc";
api.defaults.headers.common['API-key'] = 'gastbyellenapikey';
// axios.defaults.withCredentials = false;

Vue.config.productionTip = false;
Vue.prototype.$config = {};
Vue.prototype.$config.appID = 'wx8d177cf445f8365e';
Vue.prototype.$config.loginUrl = `${loginURL}`;
Vue.use(ElementUI);
Vue.prototype.$api = api;

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
