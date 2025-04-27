<script>
import HorizontalRule from '@/components/HorizontalRule.vue';

export default {
  components: {
    HorizontalRule,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      thumbnail: '',
      title: '',
      date: '',
      tech: [], // リスト形式に変更
      description: '',
    };
  },
  mounted() {
    // ダミーデータを使用してポートフォリオ情報を取得
    const portfolioData = {
      game: [
        {
          id: 1,
          title: 'ゲーム作品1',
          date: '2025年4月1日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
          tech: [
            { label: 'プログラミング', items: ['Unity', 'C#'] },
            { label: 'デザイン', items: ['Photoshop', 'Illustrator'] },
          ],
          description: 'このゲームはレトロスタイルのアクションゲームです。',
        },
        {
          id: 2,
          title: 'ゲーム作品2',
          date: '2025年4月2日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
          tech: [
            { label: 'プログラミング', items: ['Unreal Engine', 'C++'] },
            { label: 'デザイン', items: ['Blender', 'Substance Painter'] },
          ],
          description: 'このゲームはリアルタイムストラテジーゲームです。',
        },
      ],
      web: [
        {
          id: 1,
          title: 'Web作品1',
          date: '2025年4月4日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
          tech: [
            { label: 'フロントエンド', items: ['Vue.js', 'SCSS'] },
            { label: 'バックエンド', items: ['Node.js', 'Express'] },
          ],
          description: 'このWebアプリはタスク管理ツールです。',
        },
        {
          id: 2,
          title: 'Web作品2',
          date: '2025年4月5日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
          tech: [
            { label: 'フロントエンド', items: ['React', 'TypeScript'] },
            { label: 'バックエンド', items: ['Firebase'] },
          ],
          description: 'このWebアプリはチャットアプリケーションです。',
        },
      ],
    };

    // カテゴリとIDに基づいてデータを取得
    const categoryData = portfolioData[this.category];
    const item = categoryData.find((item) => item.id === this.id);

    if (item) {
      this.thumbnail = item.thumbnail;
      this.title = item.title;
      this.date = item.date;
      this.tech = item.tech;
      this.description = item.description;
    }
  },
};
</script>

<template>
  <div class="portfolio-detail">
    <img
      :src="thumbnail"
      alt="サムネイル"
      class="portfolio-thumbnail d-block mx-auto mb-4"
    />
    <h1 class="portfolio-title text-left ps-2">{{ title }}</h1>
    <p class="portfolio-date text-left ps-2">{{ date }}</p>
    <HorizontalRule />
    <div class="portfolio-tech container">
      <ul>
        <li v-for="(item, index) in tech" :key="index">
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <strong>{{ item.label }}</strong>
            </div>
            <div class="col-md-6 col-lg-8">
              <!-- カンマ区切りで表示 -->
              <span>{{ item.items.join(', ') }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <HorizontalRule />
    <p class="portfolio-description ps-2">{{ description }}</p>
  </div>
</template>

<style scoped>
.portfolio-detail {
  padding: 2rem;
}

.portfolio-thumbnail {
  width: 100%;
  max-width: 600px;
  aspect-ratio: 4 / 3;
  margin-bottom: 1rem;
  object-fit: cover;
}

.portfolio-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.portfolio-date,
.portfolio-description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.portfolio-tech ul {
  list-style-type: none;
  padding: 0;
}

.portfolio-tech li {
  margin-bottom: 0.5rem;
}
</style>
