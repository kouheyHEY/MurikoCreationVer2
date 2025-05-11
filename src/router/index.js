// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import BlogView from '../views/BlogView.vue';
import ContactView from '../views/ContactView.vue';
import HomeView from '../views/HomeView.vue';
import PortfolioDetailView from '../views/PortfolioDetailView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/portfolio/:category/:id',
    name: 'PortfolioDetail',
    component: PortfolioDetailView,
    props: (route) => ({
      category: route.params.category,
      id: Number(route.params.id),
    }),
  },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
];

const base = import.meta.env.VITE_BASE_URL || '/';
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
