
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import ElementUI from 'element-ui';
import axios from 'axios';

const baseURL =  'http://localhost:3000/api/v1';
const testURL =  'https://gast.world';
// login logic, 
var api = axios.create({
  baseURL: baseURL
});
api.defaults.headers.common['X-Auth-Token'] = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1OTIyMDUxODF9.VpqYUcItU_bBFtksqWH-HPB0Xit_2nZopVQICivGmAA";
api.defaults.headers.common['API-key'] = 'gastbyellenapikey';
// axios.defaults.withCredentials = false;

Vue.config.productionTip = false;
Vue.prototype.$config = {};
Vue.prototype.$config.appID = 'wx8d177cf445f8365e';
Vue.prototype.$config.loginUrl = `${testURL}`;
Vue.use(ElementUI);
Vue.prototype.$api = api;

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
