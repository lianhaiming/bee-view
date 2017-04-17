'use strict'

const webpack = require('webpack')
    , path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {
    devtool: isProd ? 'source-map' : 'eval',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['babel-polyfill','./app.js']
    },
    output: {
        path: path.resolve(__dirname, 'build/assets'),
        filename: '[name].js',
        publicPath: 'assets'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|md)$/,
                use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=image/svg+xml']
            }

        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 8080,
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '情报特工',
            filename: '../index.html',
             hash: true
        })
        
    ],
    externals: {
        "axios": "axios",
    },
}