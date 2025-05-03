<template>
  <router-link :to="to" class="btn-custom" :class="customClass">
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
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background-color: $secondary;
    color: $light;
  }
}
</style>
