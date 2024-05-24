import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/LoginRegister/Login.vue';
import Registration from "../components/LoginRegister/Registration.vue";


const routes = [
    { path: '/', redirect: '/Login' },
    { path: '/Login', component:Login },
    { path: '/Registration', component: Registration },
];


const router = createRouter ({
    history: createWebHistory(),
    routes
});



export default router;