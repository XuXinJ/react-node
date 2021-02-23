import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  proxy: {
    '/app/': {
      target: 'http://127.0.0.1:7001/',
      changeOrigin: true
    },
  },
  fastRefresh: {},
  runtimePublicPath: true,
  outputPath: '../server/src/app/public/temp',
  publicPath: '/static-apps/',
  // 修正看不了源码
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval'
});
