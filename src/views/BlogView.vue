<template>
    <div class="container py-5">
      <h2 class="text-primary mb-4">ブログ</h2>
      <p>技術のこと、作品制作の裏話、日々の思考などを書いていきます！</p>
  
      <ul class="list-group mt-4">
        <li class="list-group-item" v-for="post in blogPosts" :key="post.title">
          <router-link :to="post.link" class="text-decoration-none text-dark">
            <h5 class="mb-1">{{ post.title }}</h5>
            <small class="text-muted">{{ post.date }}</small>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const blogPosts = [
    { title: 'ブログ記事1', date: '2025-04-20', link: '#' },
    { title: 'ブログ記事2', date: '2025-04-18', link: '#' }
  ];
  </script>
  