// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import BlogView from '../views/BlogView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioView },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/about', name: 'About', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
