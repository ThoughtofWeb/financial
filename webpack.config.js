const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = env =>{
    

    return {
        entry: './app/js/main.js',
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000
        },
        module: {
            loaders: [{
                    test: /\.scss$/,
                    loader: 'style-loader!css-loader!sass-loader'
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: env.production ? {
                            css: ExtractTextPlugin.extract({
                                use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                                fallback: 'vue-style-loader'
                            }),
                            scss: ExtractTextPlugin.extract({
                                use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader',
                                fallback: 'vue-style-loader'
                            })
                        } : {
                            css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                            scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
                        },
                        cssModules: {
                            localIdentName: '[path][name]---[local]---[hash:base64:5]',
                            camelCase: true
                        }
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'app/views/index.html'
            }),
            new ExtractTextPlugin("style.css", {
                ignoreOrder: true
            })
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
            }
        },
        output: {
            filename: '[name].min.js',
            path: path.resolve(__dirname, 'dist')
        }
    };
}