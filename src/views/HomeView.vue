<template>
  <div class="home-view text-center py-5">
    <h1 class="title mb-4">むりこクリエイション</h1>
    <p class="subtitle mb-5">レトロゲームと創造の世界へようこそ。</p>

    <!-- ボタンをグリッドで配置 -->
    <div class="link-buttons mx-2">
      <router-link class="link-button" to="/portfolio"
        >▶ ポートフォリオを見る</router-link
      >
      <router-link class="link-button" to="/about"
        >▶ 私たちについて</router-link
      >
      <router-link class="link-button" to="/contact"
        >▶ お問い合わせ</router-link
      >
      <router-link class="link-button" to="/blog">▶ ブログ</router-link>
    </div>

    <!-- ポートフォリオセクション -->
    <section class="portfolio-section mt-5">
      <h2 class="portfolio-title">ポートフォリオ</h2>

      <!-- ゲームのポートフォリオ -->
      <div class="portfolio-category">
        <h3 class="category-title">ゲーム</h3>
        <div class="portfolio-grid" ref="gamePortfolio">
          <div
            class="portfolio-item"
            v-for="item in gamePortfolio"
            :key="item.id"
          >
            <router-link
              :to="{
                name: 'PortfolioDetail',
                params: { category: 'game', id: item.id },
              }"
            >
              <div>
                <img
                  :src="item.thumbnail"
                  :alt="item.title"
                  class="portfolio-thumbnail"
                />
                <p class="portfolio-title pb-2 m-0">{{ item.title }}</p>
                <p class="portfolio-date pb-2 m-0">{{ item.date }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Web開発のポートフォリオ -->
      <div class="portfolio-category">
        <h3 class="category-title">Web開発</h3>
        <div class="portfolio-grid" ref="webPortfolio">
          <div
            class="portfolio-item"
            v-for="item in webPortfolio"
            :key="item.id"
          >
            <router-link
              :to="{
                name: 'PortfolioDetail',
                params: { category: 'web', id: item.id },
              }"
            >
              <div>
                <img
                  :src="item.thumbnail"
                  :alt="item.title"
                  class="portfolio-thumbnail"
                />
                <p class="portfolio-title">{{ item.title }}</p>
                <p class="portfolio-date">{{ item.date }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gamePortfolio: [
        {
          id: 1,
          title: 'ゲーム作品1',
          date: '2025年4月1日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
        },
        {
          id: 2,
          title: 'ゲーム作品2',
          date: '2025年4月2日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
        },
        {
          id: 3,
          title: 'ゲーム作品3',
          date: '2025年4月3日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
        },
      ],
      webPortfolio: [
        {
          id: 1,
          title: 'Web作品1',
          date: '2025年4月4日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
        },
        {
          id: 2,
          title: 'Web作品2',
          date: '2025年4月5日',
          thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
        },
      ],
    };
  },
  mounted() {
    // 各ポートフォリオカテゴリにドラッグ操作を追加
    this.enableDragScroll(this.$refs.gamePortfolio);
    this.enableDragScroll(this.$refs.webPortfolio);
  },
  methods: {
    enableDragScroll(element) {
      let isDown = false;
      let startX;
      let scrollLeft;

      element.addEventListener('mousedown', (e) => {
        isDown = true;
        element.classList.add('active');
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
      });

      element.addEventListener('mouseleave', () => {
        isDown = false;
        element.classList.remove('active');
        this.snapToCenter(element); // 要素を中央に寄せる
      });

      element.addEventListener('mouseup', () => {
        isDown = false;
        element.classList.remove('active');
        this.snapToCenter(element); // 要素を中央に寄せる
      });

      element.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 1.5; // スクロール速度を調整
        element.scrollLeft = scrollLeft - walk;
      });
    },
    snapToCenter(element) {
      const items = element.querySelectorAll('.portfolio-item');
      const elementWidth = element.offsetWidth;
      const scrollLeft = element.scrollLeft;

      let closestItem = null;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const itemLeft = item.offsetLeft - scrollLeft;
        const itemCenter = itemLeft + item.offsetWidth / 2;
        const distance = Math.abs(itemCenter - elementWidth / 2);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      });

      if (closestItem) {
        const targetScroll =
          closestItem.offsetLeft -
          elementWidth / 2 +
          closestItem.offsetWidth / 2;
        element.scrollTo({
          left: targetScroll,
          behavior: 'smooth', // スムーズなスクロール
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-view {
  background-color: $body-bg;
  color: $body-color;
  min-height: 100vh;

  .title {
    font-size: 2rem;
    color: $primary;
  }

  .subtitle {
    font-size: 1rem;
    color: $dark;
  }

  .link-buttons {
    display: grid; /* グリッドレイアウトを使用 */
    gap: 1rem; /* ボタン間の間隔 */
    justify-content: center; /* グリッド全体を中央揃え */
    font-family: $pixel-font-bold;
    grid-template-columns: repeat(
      auto-fit,
      minmax(200px, 1fr)
    ); /* 列数を自動調整 */

    .link-button {
      @include button-style($primary, white, $dark);
      text-decoration: none;
      text-align: center; /* テキストを中央揃え */
      padding: 0.75rem 1rem; /* ボタンの内側余白 */
    }
  }

  .portfolio-section {
    margin-top: 2rem;

    .portfolio-category {
      margin-bottom: 2rem;

      .portfolio-grid {
        display: flex; /* 横並びにする */
        gap: 1.5rem;
        overflow-x: auto; /* 横スクロールを許可 */
        padding-bottom: 1rem;
        scrollbar-width: none; /* Firefoxでスクロールバーを非表示 */
        -ms-overflow-style: none; /* IEでスクロールバーを非表示 */

        &::-webkit-scrollbar {
          display: none; /* Chrome, Safariでスクロールバーを非表示 */
        }

        .portfolio-item {
          flex: 0 0 auto; /* アイテムの幅を固定 */
          background-color: $light;
          border: 1px solid $dark;
          text-align: center;
          min-width: 200px; /* 各アイテムの最小幅 */

          .portfolio-thumbnail {
            width: 320px;
            height: 240px;
            margin-bottom: 0.5rem;
            object-fit: cover; /* サムネイルの比率を維持 */
          }

          .portfolio-title {
            font-size: 1rem;
            font-weight: bold;
            color: $primary;
          }

          .portfolio-date {
            font-size: 0.875rem;
            color: $dark;
          }
        }
      }
    }
  }
}
</style>
