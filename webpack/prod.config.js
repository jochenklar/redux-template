const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base.config.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(base, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: true
      })
    ]
  }
})
