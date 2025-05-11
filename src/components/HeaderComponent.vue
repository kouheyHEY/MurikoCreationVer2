<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link
        class="navbar-brand title d-flex align-items-center"
        :to="`/`"
      >
        <img
          src="/src/assets/images/logo_header_1_48x48.png"
          alt="Logo"
          class="logo-icon me-2"
        />
        <span class="logo-text">むりこクリエイション</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: import.meta.env.VITE_BASE_URL || '/',
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $dark; // custom.scss の $dark を使用
}

.title {
  font-size: 1.5rem;
  font-family: $pixel-font-bold;
  color: $light !important; // 通常時の文字色
  transition: color 0.3s ease; // ホバー時の色変更にトランジションを追加

  &:hover {
    color: $secondary !important; // ホバー時の文字色をカスタム.scss の $secondary に変更
  }
}

.logo-icon {
  object-fit: contain; // アイコンの比率を維持
}
</style>
