import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'auth-login',
        redirect: '/auth/login'
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
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
