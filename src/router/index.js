// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import BlogView from '../views/BlogView.vue';
import ContactView from '../views/ContactView.vue';
import HomeView from '../views/HomeView.vue';
import PortfolioView from '../views/portfolio/PortfolioView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioView },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
