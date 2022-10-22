module.exports = {
  build: {


    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/anime-city/'
    : '/'
}