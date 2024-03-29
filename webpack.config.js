// https://github.com/krasimir/webpack-library-starter

// Webpack config for creating libs
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  output: {
    filename: 'parametric.js',
    // libraryTarget: 'umd',
    library: 'Parametric'
    // publicPath: '/dist/',
    // umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      // { test: /\.js|es6$/, exclude: /node_modules/ }
      { test: /\.js|es6$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([ { from: './public', to: './' } ])
  ]
}
