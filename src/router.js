import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		// First way to connect component:
		component: MainPage,
	},
	{
		path: '/photos',
		// Second way - Lazy loading component:
		component: () => import('./pages/PhotosPage')
	}
]

export default new VueRouter({

	mode: 'history',
	routes
})