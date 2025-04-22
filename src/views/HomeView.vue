<!-- src/views/HomeView.vue -->
<template>
    <div class="home py-5" style="background-color: #DCDBFF; min-height: 100vh;">
      <div class="container">
        <!-- ヒーローセクション -->
        <section class="text-center mb-5">
          <h1 class="display-4 fw-bold" style="color: #7700CC;">ようこそ！</h1>
          <p class="lead" style="color: #1E0033;">自作ツールと開発の記録をまとめたサイトです。</p>
          <router-link to="/portfolio" class="btn btn-main btn-lg mt-3">作品を見る</router-link>
        </section>
  
        <!-- ピックアップ作品 -->
        <section class="mb-5">
          <h2 class="text-primary mb-4">最近の制作物</h2>
          <div class="row">
            <div class="col-md-4" v-for="n in 3" :key="n">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h5 class="card-title" style="color: #1E0033;">作品タイトル {{ n }}</h5>
                  <p class="card-text">簡単な作品紹介。ツールの概要や使い道など。</p>
                </div>
                <div class="card-footer bg-transparent border-0">
                  <router-link to="/portfolio" class="btn btn-outline-primary">詳細へ</router-link>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- ブログ導線 -->
        <section class="text-center mt-5">
          <h2 class="text-primary">制作の裏側や技術メモ</h2>
          <p class="text-dark">ブログで発信しています。</p>
          <router-link to="/blog" class="btn btn-accent mt-3">ブログを見る</router-link>
        </section>
      </div>
    </div>
  </template>
  
  <style scoped>
  .btn-main {
    background-color: #7700CC;
    color: #fff;
  }
  .btn-main:hover {
    background-color: #7A63FF;
  }
  .btn-accent {
    background-color: #00CCAA;
    color: #fff;
  }
  .btn-accent:hover {
    background-color: #00997F;
  }
  </style>
  