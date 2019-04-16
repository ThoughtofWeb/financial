import Vue from "vue";
import Router from "vue-router";
import Home from "../home/home.vue";
import Money from "../money/money.vue";
import "../../css/reset.scss";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },{
        path: '/money',
        name: 'money',
        component: Money
    }]
})