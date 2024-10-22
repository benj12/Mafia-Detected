import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../components/SignUp.vue'; 
import Home from '../components/HomePage.vue';
import Login from '../components/LoginPage.vue';
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
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
