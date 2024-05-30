import { createRouter, createWebHistory } from 'vue-router';
import LoginUser from '../components/LoginRegister/loginUser.vue';
import RegistUser from '../components/LoginRegister/registUser.vue';
import HomeUser from '../components/homeUser.vue';
import Dashboard from "../components/DashboardUser/Dashboard.vue";
import Hero from "../components/Keranjang/Hero.vue";
import NavMenu2 from "../components/NavMenu/NavMenu2.vue";
import Home2 from "../components/TampilanAwal/Home2.vue";
<<<<<<< HEAD
import CardSlider from "../components/About/CardSlider.vue";
import AddObat from '../components/contohCrudForm/addObat.vue';
import ListObat from '../components/contohCrudForm/listObat.vue';
import EditObat from '../components/contohCrudForm/editObat.vue'
=======
>>>>>>> 0731c809c9f4e63bd48dea3fea0746f61e6821ea

const routes = [
  { path: '/', name: 'login', component: LoginUser },
  { path: '/register', name: 'register', component: RegistUser },
  { path: '/home', name: 'home', component: HomeUser },
  { path: '/Hero', name: 'Hero', component: Hero },
  { path: '/NavMenu2', name: 'NavMenu2', component: NavMenu2 },
  { path: '/Home2', name: 'Home2', component: Home2 },
<<<<<<< HEAD
  { path: '/CardSlider', name: 'CardSlider', component: CardSlider },
  { path: '/add-obat', name: 'addObat', component: AddObat },
  { path: '/list-obat', name: 'listObat', component: ListObat },
  { path: '/editObat/:id', name: 'EditObat', component: EditObat }
=======
>>>>>>> 0731c809c9f4e63bd48dea3fea0746f61e6821ea
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Ganti ini
  routes
});

export default router;
