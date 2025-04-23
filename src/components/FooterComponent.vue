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
          { name: 'Blog', url: '/blog' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #1E0033;
    color: #DCDBFF;
  }
  
  .footer-link {
    color: #0CA;
    text-decoration: none;
  }
  
  .footer-link:hover {
    color: #7A63FF;
    text-decoration: underline;
  }
  </style>
  