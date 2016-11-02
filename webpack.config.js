const path = require('path')
const webpack = require('webpack')

const baseConfig = {
  entry: {
    vandor: []
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './build')
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    }, {
      test: /\.woff(2)?(\?v=.+)?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg|otf)(\?v=.+)?$/,
      loader: 'file-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader?limit=8192'
    }]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.css', '.scss']
  },
  plugins: []
}

exports = module.exports = (env = 'development') => {
  switch (env) {
    case 'development':
      return Object.assign({}, baseConfig, {
        entry: {
          app: ['webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server', path.join(__dirname, './src/app.tsx')],
        },
        devtool: 'source-map',
        plugins: [
          new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify("development")
            }
          })
        ]
      })

    case 'production':
      return Object.assign({}, baseConfig, {
        entry: {
          app: [path.join(__dirname, './src/app.tsx')],
        },
        plugins: [
          new webpack.ProvidePlugin({
            'Promise': 'es6-promise'
          }),
          new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            },
            output: {
              comments: false
            },
            sourceMap: false
          }),
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify("production")
            }
          })
        ]
      })
  }
}