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
          <!-- 左に空白 -->
          <div class="portfolio-spacer"></div>
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

          <!-- 右に空白 -->
          <div class="portfolio-spacer"></div>
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
      let lastScrollLeft = 0;
      let lastTimestamp = 0;
      let checkInterval = null;

      const startCheckingScrollStop = () => {
        console.log('START CHECKING');

        if (checkInterval) clearInterval(checkInterval);

        lastTimestamp = Date.now(); // 最初のタイムスタンプを更新
        lastScrollLeft = element.scrollLeft; // 最初のスクロール位置を記録

        checkInterval = setInterval(() => {
          const now = Date.now();
          const elapsed = now - lastTimestamp; // 経過時間を計算

          const currentScrollLeft = element.scrollLeft;
          const speed = Math.abs(currentScrollLeft - lastScrollLeft); // スクロールの移動量

          lastScrollLeft = currentScrollLeft; // 最後のスクロール位置を更新

          // スクロールが静止しているか、一定時間経過した場合に停止と判断
          if (elapsed > 100 && speed < 1) {
            clearInterval(checkInterval); // インターバルをクリア
            this.snapToClosestItem(element); // アイテムにスナップ
            console.log('END CHECKING');
          }
          console.log('ELAPSED CHECKING : ' + elapsed);
          console.log('SPEED CHECKING : ' + speed);
          console.log('END CHECKING');
        }, 50);
      };

      element.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
      });

      element.addEventListener('mouseleave', () => {
        if (isDown) {
          startCheckingScrollStop();
        }
        isDown = false;
      });

      element.addEventListener('mouseup', () => {
        if (isDown) {
          startCheckingScrollStop();
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
          startCheckingScrollStop();
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
      let isScrolling;

      element.addEventListener('scroll', () => {
        const items = element.querySelectorAll('.portfolio-item');
        const center = element.offsetWidth / 2;

        items.forEach((item) => {
          const itemRect = item.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();

          const itemCenter =
            (itemRect.left + itemRect.right) / 2 - elementRect.left;

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

    snapToClosestItem(element) {
      const items = element.querySelectorAll('.portfolio-item');
      const center = element.offsetWidth / 2;
      const elementRect = element.getBoundingClientRect();

      let closestItem = null;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter =
          (itemRect.left + itemRect.right) / 2 - elementRect.left;

        const distance = Math.abs(center - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = item;
        }
      });

      if (closestItem) {
        const itemRect = closestItem.getBoundingClientRect();
        const itemCenter =
          (itemRect.left + itemRect.right) / 2 - elementRect.left;

        const scrollAdjust = itemCenter - center;

        element.scrollBy({
          left: scrollAdjust,
          behavior: 'smooth', // なめらかに動かす
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
        this.snapToClosestItem(element);
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
        .portfolio-spacer {
          flex: 0 0 calc(50% - 80px); /* 80pxはportfolio-itemの横幅の半分に調整する */
          pointer-events: none; /* 空白部分はクリックできないように */
        }
      }
    }
  }
}
</style>
