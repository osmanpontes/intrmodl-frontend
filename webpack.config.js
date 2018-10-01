const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: `${__dirname}/dist`,
    filename: 'main.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Intrmodl',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
}
