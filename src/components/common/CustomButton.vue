<template>
  <router-link :to="to" class="btn-custom py-1 px-3 m-2" :class="customClass">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.btn-custom {
  background-color: $primary;
  color: $light;
  border: none;
  font-size: 1.25rem;
  border-radius: 0.25rem;
  display: inline-flex; /* フレックスボックスを使用 */
  align-items: center; /* 縦方向の中央揃え */
  justify-content: center; /* 横方向の中央揃え */
  text-align: center; /* テキストを中央揃え */

  transition: all 0.3s ease;

  &:hover {
    background-color: $secondary;
    color: $light;
    text-decoration: none !important;
    scale: 0.9;
  }

  span {
    display: inline-block; /* 必要に応じて span を調整 */
    font-family: $font-title;
    color: inherit;
  }
}
</style>
