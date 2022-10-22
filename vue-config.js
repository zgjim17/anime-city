module.exports = {
  productionSourceMap: true,
    publicPath: process.env.NODE_ENV === 'production'
      ? '/anime-city/'
      : '/'
  }