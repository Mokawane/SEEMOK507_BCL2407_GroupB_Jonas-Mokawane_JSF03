import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from './components/ProductDetail.vue'
import ProductPage from './components/ProductPage.vue'

const routes = [
   { path: "/", component: ProductDetail },
   { path: "/product/:id", component: ProductPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  }); 

const app = createApp(App);
app.use(router);
app.mount('#app');
