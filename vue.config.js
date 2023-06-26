const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: 'http://127.0.0.1:57450/demo/dist/', // 生产环境下，打包后在本地运行
  // publicPath: '/home', // 开发环境下，npm run serve后运行
  publicPath: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:57450/demo/dist/' : '/home'
})
