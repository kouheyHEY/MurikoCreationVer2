<template>
  <div class="home-view text-center py-5">
    <h1 class="title mb-4">むりこクリエイション</h1>
    <p class="subtitle mb-5">レトロゲームと創造の世界へようこそ。</p>
    
    <!-- ボタンをグリッドで配置 -->
    <div class="link-buttons mx-2">
      <router-link class="link-button" to="/portfolio">▶ ポートフォリオを見る</router-link>
      <router-link class="link-button" to="/about">▶ 私たちについて</router-link>
      <router-link class="link-button" to="/contact">▶ お問い合わせ</router-link>
      <router-link class="link-button" to="/blog">▶ ブログ</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  background-color: $body-bg;
  color: $body-color;
  font-family: $pixel-font-regular;
  min-height: 100vh;

  .title {
    font-size: 2rem;
    color: $primary;
  }

  .subtitle {
    font-size: 1rem;
    color: $dark;
  }

  .link-buttons {
    display: grid; /* グリッドレイアウトを使用 */
    gap: 1rem; /* ボタン間の間隔 */
    justify-content: center; /* グリッド全体を中央揃え */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 列数を自動調整 */

    .link-button {
      @include button-style($primary, white, $dark);
      text-decoration: none;
      text-align: center; /* テキストを中央揃え */
      padding: 0.75rem 1rem; /* ボタンの内側余白 */
    }
  }
}
</style>
