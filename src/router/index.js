import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../components/SignUp.vue'; 
import Home from '../components/HomePage.vue';
import Login from '../components/LoginPage.vue';
import ForgotPassword from '../components/ForgotPassword.vue';
import ResetPassword from '../components/ResetPassword.vue';
const routes = [
    {
        path: '/',
        name: 'Home', 
        component: Home,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/forgotpass',
        name: 'ForgotPass',
        component: ForgotPassword
    },
    {
        path: '/reset-password',
        name: 'ResetPass',
        component: ResetPassword
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
