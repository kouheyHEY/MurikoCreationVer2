<template>
  <div :style="customHr"></div>
</template>

<script>
export default {
  name: 'HorizontalRule',
  props: {
    width: {
      type: String,
      default: '100%', // 必要に応じてデフォルトを設定
    },
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
      default: '0.5rem 0',
    },
    // 線のスタイル
    borderstyle: {
      type: String,
      default: 'solid',
    },
    // 透明度
    opacity: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    customHr() {
      return {
        borderBottom: `${this.thickness} ${this.borderstyle} ${this.color}`,
        margin: this.margin,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        width: this.width || '100%',
        opacity: this.opacity,
      };
    },
  },
};
</script>
