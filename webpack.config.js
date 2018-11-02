const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: './public/src/modules/main/main.js',
    user: './public/src/modules/user/user.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/js'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.styl$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "stylus-loader"
      }]
    }, {
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: '$'
      }, {
        loader: 'expose-loader',
        options: 'jQuery'
      }]
    }]
  }
}