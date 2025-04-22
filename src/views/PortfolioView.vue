<template>
    <div class="container py-5">
      <h2 class="text-primary mb-4">ポートフォリオ</h2>
      <p>私がこれまでに作った作品をご紹介します。</p>
  
      <div class="row mt-4">
        <div class="col-md-4" v-for="item in portfolio" :key="item.title">
          <div class="card mb-4 shadow-sm">
            <img :src="item.image" class="card-img-top" alt="作品画像">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <a :href="item.link" target="_blank" class="btn btn-primary">詳細を見る</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const portfolio = [
    {
      title: '作品1',
      description: '作品1の説明です。',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: '作品2',
      description: '作品2の説明です。',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ];
  </script>
  