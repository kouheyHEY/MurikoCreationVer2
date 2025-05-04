<script>
import HorizontalRule from '@/components/common/HorizontalRule.vue';
import IconAndName from '@/components/common/IconAndName.vue';
import TechList from '@/components/TechList.vue';
import { getTechIcon } from '@/utils/iconLibrary';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
    HorizontalRule,
    IconAndName,
    TechList,
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
      tech: [],
      description: '',
    };
  },
  mounted() {
    fetch('/data/portfolioData.json')
      .then((res) => res.json())
      .then((data) => {
        const categoryData = data[this.category];
        const item = categoryData.find((item) => item.id === this.id);

        if (item) {
          this.thumbnail = item.thumbnail
            ? `/data/${item.thumbnail}`
            : '/data/images/thumbneil_default_1200x1200.png';

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
        }
      })
      .catch((err) => {
        console.error('ポートフォリオデータの読み込みに失敗しました', err);
      });
  },
};
</script>

<template>
  <div class="portfolio-detail">
    <img
      :src="thumbnail"
      alt="サムネイル"
      class="portfolio-thumbnail d-block mx-auto mb-4 rounded-2"
    />
    <h1 class="portfolio-title text-left ps-2">{{ title }}</h1>
    <HorizontalRule />
    <div class="portfolio-tech">
      <ul>
        <li v-for="(group, index) in tech" :key="index">
          <strong class="tech-label">
            <IconAndName
              :icon="group.labelIcon"
              :name="group.label"
            ></IconAndName>
          </strong>
          <TechList :items="group.items" />
          <HorizontalRule
            v-if="index < tech.length - 1"
            opacity="0.3"
            borderstyle="dotted"
          />
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
  max-width: 500px; /* サムネイルの最大幅を少し小さく調整 */
  aspect-ratio: 4 / 3;
  margin-bottom: 1rem;
  object-fit: cover;
}

.portfolio-title {
  font-size: 2.5rem; /* タイトルを少し大きく */
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
