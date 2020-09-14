import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { title: '首页' },
        component: Home
    },
    {
        path: '/qrcodejs2',
        name: 'qrcodejs2',
        meta: { title: 'qrcodejs2生成二维码' },
        component: () => import('../views/qrcodejs2')
    },
    {
        path: '/html2canvas',
        name: 'html2canvas',
        meta: { title: 'html2canvas生成海报' },
        component: () => import('../views/html2canvas')
    },
    {
        path: '/flip',
        name: 'flip',
        meta: { title: 'css3实现翻转' },
        component: () => import('../views/flip')
    },
    {
        path: '/streamline',
        name: 'streamline',
        meta: { title: 'css 实现流动线条' },
        component: () => import('../views/streamline')
    },
    {
        path: '/waves',
        name: 'waves',
        meta: { title: 'css 实现波浪' },
        component: () => import('../views/waves')
    },
    {
        path: '/charge',
        name: 'charge',
        meta: { title: 'css 实现充电效果' },
        component: () => import('../views/charge')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
