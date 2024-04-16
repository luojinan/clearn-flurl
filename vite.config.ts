import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://detail.tmall.com/*','https://main.m.taobao.com/security-h5-detail/*','https://uland.taobao.com/coupon/*'],
      },
      build: {
        externalGlobals: {
          vue: cdn.npmmirror('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
});
