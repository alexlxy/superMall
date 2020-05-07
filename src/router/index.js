import Vue from 'vue'
import Router from 'vue-router'
const LOGIN = () =>
    import ('../login/login.vue')
const INDEX = () =>
    import ('../views/index.vue')
const HOME = () =>
    import ('../views/home/home.vue')
const CATEGORY = () =>
    import ('../views/category/category.vue')
const CART = () =>
    import ('../views/cart/cart.vue')
const PROFILE = () =>
    import ('../views/profile/profile.vue')

Vue.use(Router)

const routerList = [{
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    name: 'login',
    component: LOGIN
}, {
    path: '/index',
    name: 'index',
    component: INDEX,
    children: [{
        path: '/home',
        name: 'home',
        component: HOME
    }, {
        path: '/category',
        name: 'category',
        component: CATEGORY
    }, {
        path: '/cart',
        name: 'cart',
        component: CART
    }, {
        path: '/profile',
        name: 'profile',
        component: PROFILE
    }]
}]

const router = new Router({
    mode: 'history',
    routes: routerList
})

export default router