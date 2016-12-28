/**
 * Created by Administrator on 2016/12/28.
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
  entry: {
    ac1: './src/index.scss',
  },
  output: {
    path: path.join(__dirname, './dist'),
    // 文件地址，使用绝对路径形式
    filename: "[name].css"
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  postcss: function() {
    return [autoprefixer]
  },
  plugins: [
    new Ex('[name].css')
  ]
}