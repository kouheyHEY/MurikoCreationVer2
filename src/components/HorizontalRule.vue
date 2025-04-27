<template>
  <div :style="customHr"></div>
</template>

<script>
export default {
  name: 'HorizontalRule',
  props: {
    // 線の色
    color: {
      type: String,
      default: '#000',
    },
    // 線の幅
    thickness: {
      type: String,
      default: '2px',
    },
    // 上下のマージン
    margin: {
      type: String,
      default: '1rem 0',
    },
    // 線のスタイル
    style: {
      type: String,
      default: 'solid',
    },
  },
  computed: {
    customHr() {
      return {
        borderBottom: `${this.thickness} ${this.style} ${this.color}`,
        margin: this.margin,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        width: this.width || '100%',
      };
    },
  },
};
</script>
