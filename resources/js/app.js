import Vue from "vue";

require('./bootstrap');
window.Vue = require('vue');

// window.VueRouter=require('vue-router').default;
//
// window.VueAxios=require('vue-axios').default;
//
// window.Axios=require('axios').default;

 Vue.component('Items',require('./components/Items.vue').default);

// Vue.use(VueRouter,VueAxios, axios);
const app = new Vue({
    el:'#app'
})
