import Home from './view/home.vue'
import VuetifyAudio from './view/vuetifyaudio.vue'

import NotFound from './view/404.vue'

const routes = [
	{
		path: '/',
		component: Home,
		name: 'home',
	},
	{
		path: '/vuetifyaudio',
		component: VuetifyAudio,
		name: 'vuetify-audio',
		hidden: true
	},
	{
		path: '*',
		hidden: true,
		redirect: {
			path: '/404'
		}
	}
];

export default routes;
