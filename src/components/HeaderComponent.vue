<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #1E0033;">
    <div class="container">
      <router-link class="navbar-brand" to="/">MyPortfolio</router-link>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" v-for="item in menu" :key="item.path">
          <router-link class="nav-link" :to="item.path">{{ item.label }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { label: 'Home', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Blog', path: '/blog' },
        { label: 'About', path: '/about' },
      ]
    };
  }
};
</script>
