const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/components/Application.js"),
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }],
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader : 'css-loader',
                    options : {
                        minimize : true
                    }
                }]
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader : 'css-loader',
                  options : {
                    minimize : true
                  }
                },
                'sass-loader'
              ]
            })
        }, {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: [ 'url-loader' ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-react']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : 'src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: path.join(__dirname, 'dist/assets')
        }]),
        new ExtractTextPlugin('style.css')
    ]
};
