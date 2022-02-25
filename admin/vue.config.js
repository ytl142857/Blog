module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  devServer: {
      proxy: {
          'api': {
              target: 'hhttp://localhost:3000',
              // pathRewrite: { '^api': '' }
          }
      }
  }
}
