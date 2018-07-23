const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin]
};