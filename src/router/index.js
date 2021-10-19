import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Foods from '../views/Foods.vue';
import FoodsDetail from '../views/FoodsDetail.vue';
import Keranjang from '../views/Keranjang.vue';
import PesananSukses from '../views/PesananSukses.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods,
  },

  {
    path: '/foods/:id',
    name: 'FoodsDetail',
    component: FoodsDetail,
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang,
  },
  {
    path: '/pesanan-sukses',
    name: 'Pesanan',
    component: PesananSukses,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
