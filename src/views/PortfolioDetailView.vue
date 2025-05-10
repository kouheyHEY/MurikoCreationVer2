<script>
import HorizontalRule from '@/components/common/HorizontalRule.vue';
import IconAndName from '@/components/common/IconAndName.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import TechList from '@/components/TechList.vue';
import { fetchJson } from '@/utils/fetchJson'; // fetchJson をインポート
import { getTechIcon } from '@/utils/iconLibrary';
import { renderMarkdown } from '@/utils/util.js';

export default {
  components: {
    HorizontalRule,
    IconAndName,
    TechList,
    LoadingSpinner,
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
      baseUrl: import.meta.env.VITE_BASE_URL || '/',
      thumbnail: '',
      title: '',
      date: '',
      tech: [],
      description: '',
      dataReady: false,
    };
  },
  mounted() {
    fetchJson('data/portfolioData.json') // fetchJson を使用
      .then((data) => {
        const categoryData = data[this.category];
        const item = categoryData.find((item) => item.id === this.id);

        if (item) {
          this.thumbnail = item.thumbnail
            ? `data/${item.thumbnail}`
            : `data/images/thumbneil_default_1200x1200.png`;

          this.title = item.title;
          this.date = item.date;
          this.description = item.description;

          this.tech = item.tech.map((group) => ({
            label: group.label,
            labelIcon: getTechIcon(group.label),
            items: group.items.map((techItem) => ({
              name: techItem,
              icon: getTechIcon(techItem),
            })),
          }));

          this.dataReady = true;
        }
      })
      .catch((err) => {
        console.error('ポートフォリオデータの読み込みに失敗しました', err);
      });
  },
  methods: {
    renderMarkdown,
  },
};
</script>

<template>
  <div v-if="dataReady" class="portfolio-detail pt-2">
    <img
      :src="thumbnail"
      alt="サムネイル"
      class="portfolio-thumbnail d-block mx-auto mb-4 rounded-2"
    />
    <h1 class="portfolio-title text-left ps-2">{{ title }}</h1>
    <HorizontalRule />
    <div class="portfolio-tech">
      <ul>
        <li v-for="(group, index) in tech" :key="index" class="mb-2">
          <strong class="tech-label ps-3 mb-1">
            <IconAndName
              :icon="group.labelIcon"
              :name="group.label"
            ></IconAndName>
          </strong>
          <TechList :items="group.items" class="ps-3" />
          <HorizontalRule
            v-if="index < tech.length - 1"
            :opacity="0.3"
            borderstyle="dotted"
          />
        </li>
      </ul>
    </div>
    <HorizontalRule />
    <div
      class="portfolio-description ps-2 pt-2"
      v-html="renderMarkdown(description)"
    ></div>
  </div>
  <LoadingSpinner v-else />
</template>

<style scoped>
.portfolio-thumbnail {
  width: 100%;
  max-width: 500px; /* サムネイルの最大幅を少し小さく調整 */
  aspect-ratio: 4 / 3;
  margin-bottom: 1rem;
  object-fit: cover;
}

.portfolio-title {
  font-size: 1.75rem; /* タイトルを少し大きく */
  font-weight: bold; /* タイトルを強調 */
  margin-bottom: 1rem;
}

.portfolio-tech ul {
  list-style-type: none;
  padding: 0;
}

.portfolio-tech li {
  margin-bottom: 1rem; /* 各技術項目の間隔を広げる */
}

.portfolio-description {
  font-size: 1.2rem; /* 説明文を少し大きく */
  line-height: 1.6; /* 読みやすさのため行間を調整 */
}

.me-2 {
  margin-right: 0.5rem;
}

.tech-icon {
  font-size: 1.5rem; /* アイコンを大きく */
  color: inherit; /* アイコンの色を文字色と同じに設定 */
}

.tech-label {
  font-size: 1.25rem; /* 技術ラベルの文字を大きく */
  font-weight: bold; /* ラベルを強調 */
  display: inline-flex; /* アイコンとラベルを横並びに */
  align-items: center; /* アイコンとラベルを垂直方向に中央揃え */
  margin-bottom: 0.5rem; /* ラベルと次の要素の間隔を調整 */
}

.tech-item {
  font-size: 1.125rem; /* 技術項目の文字を大きく */
  display: flex; /* アイコンと文字を横並びに */
  align-items: center; /* アイコンと文字を垂直方向に中央揃え */
  margin-bottom: 0.5rem; /* 各技術項目の間隔を調整 */
  gap: 0.5rem; /* 改行時の間隔を調整 */
}

.icon-name {
  white-space: nowrap; /* 技術名を改行させない */
}
</style>
