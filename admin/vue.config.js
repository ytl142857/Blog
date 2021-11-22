module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`
      }
    }
  }
}