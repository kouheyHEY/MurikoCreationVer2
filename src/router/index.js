// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import BlogView from '../views/BlogView.vue';
import ContactView from '../views/ContactView.vue';
import HomeView from '../views/HomeView.vue';
import GameDevView from '../views/portfolio/GameDevView.vue';
import OtherDevView from '../views/portfolio/OtherDevView.vue';
import PortfolioView from '../views/portfolio/PortfolioView.vue';
import WebDevView from '../views/portfolio/WebDevView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioView },
  { path: '/portfolio/game', name: 'GameDev', component: GameDevView },
  { path: '/portfolio/web', name: 'WebDev', component: WebDevView },
  { path: '/portfolio/other', name: 'OtherDev', component: OtherDevView },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
