<template>
  <footer class="footer text-center py-4 mt-5">
    <div class="container">
      <div class="mb-3">
        <a
          v-for="link in footerContent?.links"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="mx-2 footer-link"
        >
          <FontAwesomeIcon
            v-if="link.icon.type === 'fa'"
            :icon="link.icon.icon"
            class="footer-icon"
          />
        </a>
      </div>
      <!-- <div class="mb-3">
        <FontAwesomeIcon icon="envelope" class="me-2 footer-icon" />
        <a :href="`mailto:${footerContent?.email}`" class="footer-link">
          {{ footerContent?.email }}
        </a>
      </div> -->
      <p class="mb-1">
        &copy; {{ currentYear }} {{ footerContent?.copyright }}
      </p>
    </div>
  </footer>
</template>

<script>
import { fetchJson } from '@/utils/fetchJson';
import { getTechIcon } from '@/utils/iconLibrary';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerContent: null, // フッターのデータを格納
    };
  },
  mounted() {
    // フッターのデータを取得
    fetchJson('/data/footerContent.json')
      .then((data) => {
        // 各リンクにアイコンを追加
        this.footerContent = {
          ...data,
          links: data.links.map((link) => ({
            ...link,
            icon: getTechIcon(link.name),
          })),
        };
      })
      .catch((error) => console.error('Failed to load footer content:', error));
  },
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $dark; // custom.scss の $dark を使用
  color: $light; // custom.scss の $light を使用
}

.footer-link {
  color: $light; // custom.scss の $light を使用
  text-decoration: none;
  transition: color 0.3s ease; // ホバー時の色変更にトランジションを追加

  &:hover {
    color: $success; // custom.scss の $success を使用
  }
}

.footer-icon {
  font-size: 1.5rem; // アイコンのサイズを調整
}
</style>
