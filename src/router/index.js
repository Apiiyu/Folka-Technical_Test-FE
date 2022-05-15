import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'auth-register-1',
        redirect: '/auth/register'
    },
    {
        path: '/auth',
        name: 'auth',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'login',
                name: 'auth-login',
                component: () => import('@/views/pages/authentication/Login.vue')
            },
            {
                path: 'register',
                name: 'auth-register',
                component: () => import('@/views/pages/authentication/Register.vue')
            }
        ]
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/pages/dashboard/Dashboard.vue')
    },
    {
        path: '/product/:slug/:product_name',
        name: 'product',
        component: () => import('@/views/pages/product/Product.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
