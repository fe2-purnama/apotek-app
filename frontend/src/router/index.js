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
import HomeLogin from "../components/HomeLogin.vue";
//desc global
import Global from "../components/desc/descglobal.vue";
// deskripsi obat taro disini
import antimo from "../components/desc/antimo.vue";
import vicksinhaler from "../components/desc/vicksinhaler.vue";
import stimuno from '../components/desc/stimuno.vue'
import bisolvon from '../components/desc/bisolvon.vue'
import procold from '../components/desc/procold.vue'
import ibuprofen from '../components/desc/ibuprofen.vue'

const routes = [
  { path: '/login', name: 'login', component: LoginUser },
  { path: '/RegistUser', name: 'RegistUser', component: RegistUser },
  { path: '/home', name: 'home', component: HomeUser },
  { path: '/Hero', name: 'Hero', component: Hero },
  { path: '/NavMenu2', name: 'NavMenu2', component: NavMenu2 },
  { path: '/Home2', name: 'Home2', component: Home2 },
  { path: '/HomeLogin', name: 'HomeLogin', component: HomeLogin },
  { path: '/CardSlider', name: 'CardSlider', component: CardSlider },
  { path: '/add-product', name: 'AddProduct', component: AddProduct },
  { path: '/list-product', name: 'ListProduct', component: ListProduct },
  { path: '/editProduct/:id', name: 'EditProduct', component: EditProduct },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/', name: 'home2', component: Home2 },
//DESC GLOBAL (USING API GET AND AXIOS)
{ path: '/descglobal/:id*', name: 'Global', component: Global, props: true },
  // deskripsi obat taro disini
  { path: '/desc_antimo', name: 'antimo', component: antimo},
  { path: '/desc_vicksinhaler', name:'vicksinhaler', component: vicksinhaler},
  { path: '/desc_stimuno', name: 'stimuno', component: stimuno},
  { path: '/desc_bisolvon', name: 'bisolvon', component: bisolvon},
  { path: '/desc_procold', name: 'procold', component: procold},
  { path: '/desc_ibuprofen', name: 'ibuprofen', component: ibuprofen}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
