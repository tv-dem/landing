const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: {
    main: path.resolve(__dirname, './index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './products.html'), // шаблон
      filename: 'products.html', // название выходного файла
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './florist.html'), // шаблон
      filename: 'florist.html', // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        to: 'public',
      }]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  }
}
