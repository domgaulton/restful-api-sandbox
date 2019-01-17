const path = require('path');

module.exports = {
  // use path to get absolute path that you're currently in - development in app, output build in build
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  // webpack dev server package details and tells dev server where to look
  devServer: {
    port: 3001,
    contentBase: path.resolve(__dirname, 'build')
  },
  // test condition // = regular expression of all js files ($ end of file name) Also use .babelrc for babel presets
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};