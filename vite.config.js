import vue from '@vitejs/plugin-vue';
import path from 'path'; // ← 追加
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

// Define __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // ← ここで @ を src に対応
      },
    },
    base: env.VITE_BASE_URL || '/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/styles/custom.scss";
          @import "@/assets/styles/common.scss"; // ← common.scss を追加
        `,
        },
      },
    },
  };
});
