import BabelPolyfill from 'babel-polyfill';
import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';
import VuexStore from './vuex/store';
import Vuex from 'vuex';
import Routers from './routes';
import VueProgressBar from 'vue-progressbar';
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueProgressBar);
Vue.use(Vuetify);
Vue.use(VeeValidate, { errorBagName: 'veeErrors' });

const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    template: '<App />',
    router,
    store: VuexStore,
    components: { 
        App,
    },
}).$mount('#app');