<template>
  <div class="loading-spinner text-center mt-5 h-100">
    <FontAwesomeIcon
      :icon="['fas', 'spinner']"
      spin
      size="3x"
      class="text-primary"
    />
    <p class="mt-2 loading-text">Loading...</p>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// アイコンをライブラリに登録（コンポーネント内でもOK）
library.add(faSpinner);

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading-text {
  font-size: 1.5rem; /* テキストのサイズを大きく */
  font-family: $pixel-font-bold; /* フォントをPixelに変更 */
}
</style>
