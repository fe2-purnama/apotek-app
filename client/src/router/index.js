import { createRouter, createWebHistory } from 'vue-router';
import LoginUser from '../components/LoginRegister/loginUser.vue';
import RegistUser from '../components/LoginRegister/registUser.vue';
import HomeUser from '../components/homeUser.vue';
import Dashboard from "../components/DashboardUser/Dashboard.vue";
import Hero from "../components/Keranjang/Hero.vue";
import NavMenu2 from "../components/NavMenu/NavMenu2.vue"

const routes = [
  { path: '/', name: 'login', component: LoginUser },
  { path: '/register', name: 'register', component: RegistUser },
  { path: '/home', name: 'home', component: HomeUser },
  { path: '/Hero', name: 'Hero', component: Hero },
  { path: '/NavMenu2', name: 'NavMenu2', component: NavMenu2 }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Ganti ini
  routes
});

export default router;
