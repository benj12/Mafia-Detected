import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../components/SignUp.vue'; // Adjust the path as needed
import Home from '../components/HomePage.vue';
import Login from '../components/LoginPage.vue';
const routes = [
    {
        path: '/',
        name: 'Home', // You can name this whatever you like
        component: Home,// This will display App.vue at the root
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
    // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
