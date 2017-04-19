const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  './source/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  devServer: {
      contentBase: path.resolve(__dirname, './source')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Google App',
        template: 'index.ejs', 
    })
    ]
}