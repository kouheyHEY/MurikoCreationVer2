<template>
  <div>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style lang="scss">
body {
  background-color: $body-bg;
  color: $body-color;
  font-family: 'Segoe UI', sans-serif;
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

footer {
  background-color: $dark;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>
