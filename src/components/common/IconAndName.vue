<template>
  <div class="icon-and-name">
    <FontAwesomeIcon
      v-if="isDispIcon && icon.type === 'fa'"
      :icon="icon.icon"
      class="me-2 tech-icon"
    />
    <span class="icon-name">{{ name }}</span>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: [String, Object],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    isDispIcon: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.icon-and-name {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* アイコンと名前の間隔を調整 */
}

.tech-icon {
  font-size: 1.5rem; /* アイコンのサイズ */
  color: inherit; /* アイコンの色を文字色と同じに設定 */
}

.icon-name {
  white-space: nowrap; /* 名前を改行させない */
}
</style>
