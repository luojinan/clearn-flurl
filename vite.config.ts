import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     monkey({
//       entry: 'src/package/clean-flurl/main.ts',
//       userscript: {
//         name: '清除返利',
//         description: '清除购物软件返利参数',
//         icon: 'https://vitejs.dev/logo.svg',
//         namespace: 'npm/vite-plugin-monkey',
//         match: ['https://detail.tmall.com/*','https://main.m.taobao.com/security-h5-detail/*','https://uland.taobao.com/coupon/*'],
//       },
//       build: {
//         fileName: 'clean-flurl.user.js',
//         externalGlobals: {
//           vue: cdn.npmmirror('Vue', 'dist/vue.global.prod.js'),
//         },
//       },
//     }),
//   ],
//   build: {
//     emptyOutDir: false, // 设置打包时不清空 dist 目录
//   }
// });

export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/package/douban-group/main.ts',
      userscript: {
        name: '小组增强',
        description: '过滤无效评论，优化PC网页样式',
        icon: 'https://img1.doubanio.com/favicon.ico',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://www.douban.com/group/*'],
      },
      build: {
        fileName: 'douban-group.user.js',
        externalGlobals: {
          vue: cdn.npmmirror('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
  build: {
    emptyOutDir: false, // 设置打包时不清空 dist 目录
  }
});

// export default defineConfig({
//   plugins: [
//     vue(),
//     monkey({
//       entry: 'src/package/xb-douban/main.ts',
//       userscript: {
//         name: '线报增强',
//         description: '过滤无效评论，移除广告，移除不感兴趣作业，优化跳转',
//         icon: 'http://new.xianbao.fun/favicon.ico',
//         namespace: 'npm/vite-plugin-monkey',
//         match: ['http://new.xianbao.fun/douban-maizu/*','http://new.xianbao.fun/category-douban-maizu/*'],
//       },
//       build: {
//         fileName: 'xb-douban.user.js',
//         externalGlobals: {
//           vue: cdn.npmmirror('Vue', 'dist/vue.global.prod.js'),
//         },
//       },
//     }),
//   ],
//   build: {
//     emptyOutDir: false, // 设置打包时不清空 dist 目录
//   }
// });
