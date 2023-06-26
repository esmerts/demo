import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from '../views/Home';
import BasisMsg from '../views/Home/BasisMsg';

Vue.use(vueRouter);

const routes = [
    {
        path: '/', component: Home, 
        children: [
            { path: '', component: BasisMsg, name: 'basismsg' },
            { path: 'companyMsg', component: () => import('../views/Home/CompanyMsg'), name: 'companyMsg' },
            { path: 'authentication', component: () => import('../views/Home/Authentication'), name: 'authentication' },
            { path: 'changePwd', component: () => import('../views/Home/ChangePwd'), name: 'changePwd' },
            { path: 'changePhone', component: () => import('../views/Home/ChangePhone'), name: 'changePhone' }
        ]
    },
    {
        path: '/account', component: () => import('../views/Account'), name: 'account',
    },
    { path: '/message', component: () => import('../views/Message'), name: 'message' },
]

const router = new vueRouter({
    routes,
    mode: 'history'
})

export default router;