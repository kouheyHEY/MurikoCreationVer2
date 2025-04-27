<template>
  <div class="home-view text-center pt-2 pb-5">
    <h1 class="title mb-4">むりこクリエイション</h1>
    <p class="subtitle mb-5">レトロゲームと創造の世界へようこそ。</p>

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

    <section class="portfolio-section mt-5">
      <h2 class="portfolio-title">ポートフォリオ</h2>
      <div
        v-for="portfolio in portfolios"
        :key="portfolio.category"
        class="portfolio-category"
      >
        <h3 class="category-title">{{ portfolio.category }}</h3>
        <div class="portfolio-grid" :ref="portfolio.refName">
          <div
            class="portfolio-item"
            v-for="item in portfolio.items"
            :key="item.id"
          >
            <router-link
              :to="{
                name: 'PortfolioDetail',
                params: {
                  category: portfolio.category.toLowerCase(),
                  id: item.id,
                },
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
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        {
          category: 'game',
          refName: 'gamePortfolio',
          items: [
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
            {
              id: 4,
              title: 'ゲーム作品4',
              date: '2025年4月4日',
              thumbnail: '/src/assets/images/thumbneil_default_1200x1200.png',
            },
          ],
        },
        {
          category: 'web',
          refName: 'webPortfolio',
          items: [
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
        },
      ],
    };
  },
  mounted() {
    this.portfolios.forEach((portfolio) => {
      const elements = this.$refs[portfolio.refName];
      if (elements) {
        const setupElement = (element) => {
          this.enableDragScroll(element);
          this.setupDynamicEffect(element);
          // ここを変更！！
          this.scrollToFirstItem(element);
        };
        if (Array.isArray(elements)) {
          elements.forEach(setupElement);
        } else {
          setupElement(elements);
        }
      }
    });
  },
  methods: {
    enableDragScroll(element) {
      let isDown = false;
      let startX;
      let scrollLeft;
      let isDragging = false;

      element.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
      });

      element.addEventListener('mouseleave', () => {
        if (isDown) {
          this.snapToNearestItem(element);
        }
        isDown = false;
      });

      element.addEventListener('mouseup', () => {
        if (isDown) {
          this.snapToNearestItem(element);
        }
        isDown = false;
      });

      element.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        isDragging = true;
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 1.5;
        element.scrollLeft = scrollLeft - walk;
      });

      // スマホ対応
      element.addEventListener('touchstart', (e) => {
        isDown = true;
        isDragging = false;
        startX = e.touches[0].pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
      });

      element.addEventListener('touchend', () => {
        if (isDown) {
          this.snapToNearestItem(element);
        }
        isDown = false;
      });

      element.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        isDragging = true;
        const x = e.touches[0].pageX - element.offsetLeft;
        const walk = (x - startX) * 1.5;
        element.scrollLeft = scrollLeft - walk;
      });
    },
    setupDynamicEffect(element) {
      element.addEventListener('scroll', () => {
        const items = element.querySelectorAll('.portfolio-item');
        const center = element.offsetWidth / 2;
        const scrollLeft = element.scrollLeft;

        items.forEach((item) => {
          const itemCenter =
            item.offsetLeft - scrollLeft + item.offsetWidth / 2;
          const distance = Math.abs(center - itemCenter);

          const maxDistance = center;
          const scale = Math.max(0.8, 1 - (distance / maxDistance) * 0.2);
          const opacity = Math.max(0.4, 1 - (distance / maxDistance) * 0.6);

          item.style.transform = `scale(${scale})`;
          item.style.opacity = opacity;
        });
      });

      // ページロード直後にも実行
      element.dispatchEvent(new Event('scroll'));
    },
    snapToNearestItem(element) {
      const items = element.querySelectorAll('.portfolio-item');
      const centerX = element.scrollLeft + element.offsetWidth / 2;

      let closestItem = null;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const itemCenterX = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(itemCenterX - centerX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      });

      if (closestItem) {
        const targetScroll =
          closestItem.offsetLeft +
          closestItem.offsetWidth / 2 -
          element.offsetWidth / 2;

        element.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        });
      }
    },
    scrollToFirstItem(element) {
      const firstItem = element.querySelector('.portfolio-item');
      if (firstItem) {
        const targetScroll =
          firstItem.offsetLeft +
          firstItem.offsetWidth / 2 -
          element.clientWidth / 2; // ← widthじゃなくてclientWidthにするのもポイント

        element.scrollTo({
          left: targetScroll,
          behavior: 'auto', // 最初だけ一瞬で動かす
        });

        // 明示的にリサイズも一度発火させると完璧
        this.snapToNearestItem(element);
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
          width: 70%;
          min-width: 100px; /* 各アイテムの最小幅 */
          max-width: 320px;

          .portfolio-thumbnail {
            width: 100%;
            aspect-ratio: 4 / 3;
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
