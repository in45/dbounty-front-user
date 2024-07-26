import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'LandingPage',
        component: () => import(/* webpackChunkName: "LandingPage" */ '@/views/LandingPage')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/login')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/Register')
    },
    {
        path: '/company',
        name: 'Company',
        component: () => import(/* webpackChunkName: "Company" */ '@/views/Company')
    },
    {
        path: '',
        name: 'Layout',
        component: () => import(/* webpackChunkName: "Layout" */ '@/components/structure/Layout'),
        meta: {
            requiresAuth: true
        },

        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/messages',
                name: 'Messages',
                component: () => import(/* webpackChunkName: "Messages" */ '@/views/Messages'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/hacktivity',
                name: 'Hacktivity',
                component: () => import(/* webpackChunkName: "Hacktivity" */ '@/views/Hacktivity'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/profile',
                name: 'Profile',
                component: () => import(/* webpackChunkName: "Profile" */ '@/views/Profile'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/programs',
                name: 'Programs',
                component: () => import(/* webpackChunkName: "Programs" */ '@/views/Programs'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/programs/:id',
                name: 'ProfilProgram',
                component: () => import(/* webpackChunkName: "Programs" */ '@/views/ProfilProgram'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/programs/:id/submit',
                name: 'NewReport',
                component: () => import(/* webpackChunkName: "NewReport" */ '@/components/NewReport'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/reports/:id',
                name: 'EditReport',
                component: () => import(/* webpackChunkName: "EditReport" */ '@/components/EditReport'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/users',
                name: 'Users',
                component: () => import(/* webpackChunkName: "Users" */ '@/views/Users'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/users/:id',
                name: 'ProfilUser',
                component: () => import(/* webpackChunkName: "ProfilUser" */ '@/views/ProfilUser'),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: '/reports',
                name: 'Reports',
                component: () => import(/* webpackChunkName: "Users" */ '@/views/Reports'),
                meta: {
                    requiresAuth: true
                },
            },
        ]
    }


]

const router = new VueRouter({
    routes,
    mode:'history'
})

const DEFAULT_TITLE = 'DBounty';
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = DEFAULT_TITLE +' - '+to.name ;
    });
});
export default router