const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopywebpackPlugin = require('copy-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: {
		index : '../src/js'
	},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
					use: [
						{
							loader : 'css-loader',
							options : {
								minimize : true
							}
						}
					]
				})
			},
			{
        test: /\.scss$/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
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
  		},
			{
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: [ 'url-loader' ]
  		},
			{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['babel-preset-env']
					}
	      }
	    }
		]
  },
  plugins: [
		new CleanWebpackPlugin(['dist'], {
			root : path.resolve(__dirname, '../'),
		}),
		new CopywebpackPlugin([ { from: '../src/scss/assets', to: path.join(__dirname, '../dist/assets') } ]),
    new HtmlWebpackPlugin({
      template : '../src/index.html'
    }),
		new HtmlWebpackPlugin({
			filename : 'about.html',
      template : '../src/about.html'
    }),
		new HtmlWebpackPlugin({
			filename : 'demos.html',
			template : '../src/demos.html'
		}),
	        new HtmlWebpackPlugin({
			filename : 'demos2.html',
			template : '../src/demos2.html'
		}),
		new ExtractTextPlugin('style.css'),
		// new UglifyJSPlugin(),
  ]
};
