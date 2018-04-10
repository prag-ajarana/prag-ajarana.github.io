 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     hot: true,
     historyApiFallback: true,
     open: true
   },
   plugins: [
     new ExtractTextPlugin({
       disable: true
     }),
   ]
 });
