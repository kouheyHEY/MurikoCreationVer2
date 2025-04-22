import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // ← 追加

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // ← ここで @ を src に対応
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/custom.scss";` // ← 修正されたインポート
      }
    }
  }
})
