"use strict";

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

// const NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = {
    context: __dirname + '/src',
    entry: {
        bundle: path.resolve(__dirname, 'src/app/app.js'),
        common: path.resolve(__dirname, 'src/app/common.js')
    },

    cache: true,
    debug: true,
    // watch: NODE_ENV === 'dev',
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },

    // devtool: NODE_ENV === 'dev' ? '#cheap-module-source-map' : null,
    devtool: '#cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
        publicPath: './',
        library: '[name]'
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'src/app/')
        ],
        modulesDirectories: [
            'node_modules'
        ]

    },
    resolveLoader: {
        modulesDirectories: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/app/'),
                loader: 'ng-annotate?map=false!babel-loader',
                presets: ['es2015']
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/app/'),
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(png|jpe?g|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=assets/images/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|otf|woff|woff2)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }
        ]
    },

    postcss: function () {
        return {
            defaults: [precss, autoprefixer],
            cleaner: [autoprefixer({browsers: ["last 4 version"]})]
        };
    },

    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new HtmlPlugin({
            title: 'local events',
            inject: 'head',
            chunks: ['bundle', 'common'],
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        })
        // ,
        // new webpack.DefinePlugin({
        //     NODE_ENV: JSON.stringify(NODE_ENV)
        // })
    ]
};

// if (NODE_ENV == 'production') {
//     module.exports.plugins.push(
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false,
//                 drop_console: true,
//                 unsafe: true
//             }
//         })
//     )
// }