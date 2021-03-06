// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: {
      NODE_ENV: '"production"'
    },
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: 'http://www.ilovecc.ren/dist/',
    productionSourceMap: true
  },
  dev: {
    env: {
      NODE_ENV: '"development"'
    },
    assetsPublicPath: '/',
    port: 8023,
    proxyTable: {},
    cssSourceMap: false,
  }
}
