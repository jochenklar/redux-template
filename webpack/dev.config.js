const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base.config.js')

module.exports = merge(base, {
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})
