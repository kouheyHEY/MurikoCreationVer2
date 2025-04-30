<template>
  <div class="home-view text-center pt-2 pb-5">
    <h1 class="title pb-3">Pick a work !</h1>
    <div class="portfolio-grid">
      <router-link
        v-for="portfolio in portfolios"
        :key="portfolio.id"
        :to="`/portfolio/${portfolio.category}/${portfolio.id}`"
        class="portfolio-item rounded-1"
        :style="{
          transform: `rotate(${portfolio.rotation}deg) scale(${portfolio.hovered ? 0.9 : 1})`,
        }"
        @mouseenter="portfolio.hovered = true"
        @mouseleave="portfolio.hovered = false"
      >
        <img :src="portfolio.thumbnail" :alt="portfolio.category" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        {
          id: 1,
          category: 'game',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
          rotation: 0,
          hovered: false,
        },
        {
          id: 2,
          category: 'game',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
          rotation: 0,
          hovered: false,
        },
        {
          id: 3,
          category: 'game',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
          rotation: 0,
          hovered: false,
        },
        {
          id: 4,
          category: 'web',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
          rotation: 0,
          hovered: false,
        },
      ],
    };
  },
  mounted() {
    this.portfolios.forEach((p) => {
      p.rotation = this.getRandomRotation();
    });
  },
  methods: {
    getRandomRotation() {
      return Math.random() * 10 - 5;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  background-color: $body-bg;
  color: $body-color;
  min-height: 100vh;
}

.title {
  font-size: 3rem;
  color: $primary;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  width: 100%;
}

.portfolio-item {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
