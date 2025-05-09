<template>
  <div class="tech-list">
    <div
      class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
    >
      <div
        class="tech-item my-1 col"
        v-for="(item, index) in items"
        :key="index"
      >
        <IconAndName
          :icon="item.icon"
          :name="item.name"
          :isDispIcon="isDispIcon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconAndName from '@/components/common/IconAndName.vue';

export default {
  components: {
    IconAndName,
  },
  props: {
    items: {
      type: Array,
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
.tech-list {
  margin-top: 4px;
}

.tech-item {
  font-size: 1.125rem; /* 技術項目の文字を大きく */
  display: flex; /* アイコンと文字を横並びに */
  align-items: center; /* アイコンと文字を垂直方向に中央揃え */
  margin-bottom: 0.5rem; /* 各技術項目の間隔を調整 */
  gap: 0.5rem; /* 改行時の間隔を調整 */
}
</style>
