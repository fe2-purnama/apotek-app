import { createRouter, createWebHistory } from 'vue-router';
import LoginUser from "../components/LoginRegister/loginUser.vue";
import RegistUser from "../components/LoginRegister/registUser.vue";
import HomeUser from "../components/homeUser.vue";
import Dashboard from "../components/DashboardUser/Dashboard.vue";
import Hero from "../components/Keranjang/Hero.vue";
import NavMenu2 from "../components/NavMenu/NavMenu2.vue";
import Home2 from "../components/TampilanAwal/Home2.vue";
import CardSlider from "../components/Pages/About/CardSlider.vue";
import AddProduct from "../components/contohCrudForm/addProduct.vue";
import ListProduct from "../components/contohCrudForm/listProduct.vue";
import EditProduct from "../components/contohCrudForm/editProduct.vue";

const routes = [
  { path: '/login', name: 'login', component: LoginUser },
  { path: '/RegistUser', name: 'RegistUser', component: RegistUser },
  { path: '/home', name: 'home', component: HomeUser },
  { path: '/Hero', name: 'Hero', component: Hero },
  { path: '/NavMenu2', name: 'NavMenu2', component: NavMenu2 },
  { path: '/Home2', name: 'Home2', component: Home2 },
  { path: '/CardSlider', name: 'CardSlider', component: CardSlider },
  { path: '/add-product', name: 'AddProduct', component: AddProduct },
  { path: '/list-product', name: 'ListProduct', component: ListProduct },
  { path: '/editProduct/:id', name: 'EditProduct', component: EditProduct },
  { path: '/dashboard', name: 'dashboard', component: Dashboard }, // Added missing comma
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;