const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.jsx',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '3000',
    static: {
      directory: path.join(__dirname, 'public')
    },
    open: {
      app: {
        name: 'Google Chrome',
        arguments: ['--remote-debugging-port=9222', '--user-data-dir=remote-debug-profile', '--disable-web-security']
      }
    },
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
};