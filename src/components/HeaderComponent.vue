<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #1e0033"
  >
    <div class="container">
      <router-link class="navbar-brand title d-flex align-items-center" to="/">
        <img
          src="/src/assets/images/logo_header_1_48x48.png"
          alt="Logo"
          class="logo-icon me-2"
        />
        むりこクリエイション
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  font-family: $pixel-font-bold;
}

.logo-icon {
  object-fit: contain; // アイコンの比率を維持
}
</style>
