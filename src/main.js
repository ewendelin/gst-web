
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import ElementUI from 'element-ui';
import axios from 'axios';

// login logic, 
var api = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});
api.defaults.headers.common['X-Auth-Token'] = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxLCJleHAiOjE1OTIyMDUxODF9.VpqYUcItU_bBFtksqWH-HPB0Xit_2nZopVQICivGmAA";
api.defaults.headers.common['API-key'] = 'gastbyellenapikey';
// axios.defaults.withCredentials = false;

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$api = api;

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
