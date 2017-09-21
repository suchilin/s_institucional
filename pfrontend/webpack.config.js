const path = require('path');
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
      filename: 'index_bundle.js',
      publicPath: '/'
  },
  module: {
    loaders: [
      { 
          test: /\.js$/, 
          loader: 'babel-loader',
          exclude: /node_modules/ 
      },
      { 
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/ 
      },
      {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      },
      { 
          test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                    includePaths: ['node_modules']
                }
            }]
      }
    ]
  },
  plugins: [
      HtmlWebpackPluginConfig
  ]
}
