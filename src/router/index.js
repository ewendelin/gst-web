import Vue from 'vue';
import VueRouter from 'vue-router';
import Deals from '../views/Deals.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/deals',
		name: 'deals',
		component: Deals
	},
	{
		path: '/profile',
		name: 'profile',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Profile.vue')
	},
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/vendors',
		name: 'vendors',
		component: () => import('../views/VendorLanding.vue')
	},
	{
		path: '/vendor',
		name: 'vendor',
		component: () => import('../views/Vendor.vue')
	},
	{
		path: '/vendorreview',
		name: 'reviews',
		component: () => import('../views/VProfile.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
