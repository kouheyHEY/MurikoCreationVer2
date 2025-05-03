<template>
  <div class="app-container">
    <HeaderComponent />
    <main class="main-content">
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
/* リセット */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $body-bg;
  color: $body-color;
  font-family: $font-body;
  // font-family: $pixel-font-regular;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; /* フッターを画面下部に固定するためにメインコンテンツを伸縮可能に */
  width: 85%;
  min-width: 320px; /* 最小幅を設定 */
  max-width: 960px; /* 最大幅を設定 */
  margin: 0 auto; /* 中央揃え */
  padding: 1rem; /* 余白を追加 */
}

.navbar {
  background-color: $primary;

  .nav-link {
    color: white;

    &:hover {
      color: $success;
    }
  }
}

p,
.text {
  font-family: $font-body;
}
</style>
