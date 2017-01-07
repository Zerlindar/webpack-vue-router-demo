/**
 * Created by Administrator on 2017/1/5.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
// path:NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 模块导入
module.exports = {
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map',
    // 入口文件地址，不需要写完，会自动查找
    entry: './src/main',
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        // 文件地址，使用绝对路径形式
        filename: '[name].js',
        //[name]这里是webpack提供的根据路口文件自动生成的名字
    },
    // 加载器
    module: {
        //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        // 加载器
        loaders: [
            // 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
            // 转化ES6的语法
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            // 编译css并自动添加css前缀
            { test: /\.css$/, loader:  ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')},
            //.scss 文件想要编译，scss就需要来编译处理
            //install css-loader style-loader sass-loader node-sass --save-dev
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')},
            // 图片转化，小于8K自动转化为base64的编码
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
        ]
    },
    // .vue的配置。官网文档里是可以有单独的配置的。
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index_tpl.html"
        }),
        new ExtractTextPlugin("[name].css")
    ],
    vue: {
        loaders: {
            css: 'style!css!autoprefixer',
        }
    },
    // 转化成es6的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    postcss: function() {
        return [autoprefixer]
    },
    resolve: {
        // require/import时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 服务器配置相关，自动刷新
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
};