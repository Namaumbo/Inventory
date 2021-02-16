import Vue from "vue";
require('./bootstrap');
import SuiVue from 'semantic-ui-vue';
window.Vue = require('vue');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(SuiVue);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// window.VueRouter=require('vue-router').default;
//
// window.VueAxios=require('vue-axios').default;
//
// window.Axios=require('axios').default;

 Vue.component('Items',require('./components/Items.vue').default);
// Vue.component('Items',require('./components/Items.vue').default);

// Vue.use(VueRouter,VueAxios, axios);
const app = new Vue({
    el:'#app'
})
