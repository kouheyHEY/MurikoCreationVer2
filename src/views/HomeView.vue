<template>
  <div v-if="dataReady" class="home-view text-center pt-2 pb-5">
    <h1 class="title pb-3">Pick a work !</h1>
    <div class="portfolio-grid">
      <router-link
        v-for="portfolio in portfolios"
        :key="portfolio.id"
        :to="`${baseUrl}portfolio/${portfolio.category}/${portfolio.id}`"
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

    <!-- About Section -->
    <div class="about-section mt-5" v-if="about">
      <h1 class="title pb-3">{{ about.title }}</h1>
      <div v-html="renderMarkdown(about.abstract)"></div>
      <CustomButton :to="`${baseUrl}about`">
        <!-- <FontAwesomeIcon icon="user" class="me-2" /> -->
        <span class="pixel-font-button">Check status</span>
      </CustomButton>
    </div>

    <!-- Contact Section -->
    <div class="contact-section mt-5" v-if="contact">
      <h1 class="title pb-3">{{ contact.title }}</h1>
      <div v-html="renderMarkdown(contact.abstract)"></div>
      <CustomButton :to="`${baseUrl}contact`">
        <!-- <FontAwesomeIcon icon="paper-plane" class="me-2" /> -->
        <span class="pixel-font-button">Send a message</span>
      </CustomButton>
    </div>
  </div>
  <LoadingSpinner v-else />
</template>

<script>
import CustomButton from '@/components/common/CustomButton.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchJson } from '@/utils/fetchJson';
import { getRandomRotation, renderMarkdown } from '@/utils/util.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
    CustomButton,
    LoadingSpinner,
  },
  data() {
    return {
      baseUrl: import.meta.env.VITE_BASE_URL || '/',
      portfolios: [], // 初期値を空配列に設定
      about: null, // About セクションのデータ
      contact: null, // Contact セクションのデータ
      dataReady: false, // データが読み込まれたかどうかのフラグ
    };
  },
  mounted() {
    let fetchSuccessNum = 0;
    // ポートフォリオデータを取得
    fetchJson('data/portfolioData.json')
      .then((portfolioData) => {
        this.portfolios = Object.entries(portfolioData).flatMap(
          ([category, items]) =>
            items.map((item) => ({
              id: item.id,
              title: item.title,
              description: item.description,
              category,
              thumbnail: item.thumbnail
                ? `/data/${item.thumbnail}`
                : '/data/images/thumbneil_default_1200x1200.png',
              rotation: getRandomRotation(), // util.js の関数を使用
              hovered: false,
            }))
        );
        fetchSuccessNum++;
        this.dataReady = fetchSuccessNum >= 2; // 両方のデータが読み込まれたら true にする
      })
      .catch((error) => console.error('Failed to load portfolio data:', error));

    // サイトコンテンツデータを取得
    fetchJson('data/siteContent.json')
      .then((siteContent) => {
        this.about = siteContent.about;
        this.contact = siteContent.contact;

        fetchSuccessNum++;
        this.dataReady = fetchSuccessNum >= 2; // 両方のデータが読み込まれたら true にする
      })
      .catch((error) => console.error('Failed to load site content:', error));
  },
  methods: {
    renderMarkdown, // util.js の関数を使用
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  background-color: $body-bg;
  color: $body-color;
  min-height: 100vh;
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
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
}

.about-section,
.contact-section {
  margin-top: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: $primary;
    margin-bottom: 1rem;
  }

  div {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  a {
    color: $link-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.pixel-font-button {
  font-family: $font-title;
  color: $light;
}
</style>
