module.exports = {
  publicPath: "",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  devServer: {
      proxy: {
          '/api': {
              // target: 'http://139.155.236.54:3000',
              target: 'http://127.0.0.1:3000',
              changeOrigin: true
              // pathRewrite: { '^api': '' }
          }
      }
  }
}
