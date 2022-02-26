module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  devServer: {
      proxy: {
          'api': {
              target: 'http://localhost:3000',
              // pathRewrite: { '^api': '' }
          }
      }
  }
}
