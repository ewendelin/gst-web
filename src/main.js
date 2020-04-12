import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import ElementUI from 'element-ui';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
	router,
	vuetify,
	render: h => h(App)
}).$mount('#app');
