import {createRouter, createWebHashHistory} from 'vue-router'
import dayBookRouter from '../modules/daybook/router/index.js'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/daybook',
        ...dayBookRouter
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
