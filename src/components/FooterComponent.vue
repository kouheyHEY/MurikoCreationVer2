<template>
  <footer class="footer text-center py-4 mt-5">
    <div class="container">
      <p class="mb-2">&copy; {{ currentYear }} My Portfolio</p>
      <div>
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="mx-2 footer-link"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socialLinks: [
        { name: 'GitHub', url: 'https://github.com/yourusername' },
        { name: 'Twitter', url: 'https://twitter.com/yourusername' },
        { name: 'Blog', url: '/blog' },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #1e0033;
  color: #dcdbff;
}

.footer-link {
  color: #0ca;
  text-decoration: none;
}

.footer-link:hover {
  color: #7a63ff;
  text-decoration: underline;
}
</style>
