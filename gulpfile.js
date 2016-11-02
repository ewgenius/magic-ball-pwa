const gulp = require('gulp')
const webpack = require('webpack')
const util = require('gulp-util')
const WebpackDevServer = require('webpack-dev-server')
const configurer = require('./webpack.config')

const PORT = 8081

const devConfig = configurer('development', PORT)
const prodConfig = configurer('production')

gulp.task('assets', () => {
  return gulp.src(['./assets/**/*.png', './assets/**/*.ico', ])
    .pipe(gulp.dest(`./build/assets`))
})

gulp.task('copy', () => {
  return gulp.src([
      `./index.html`,
      './manifest.json'
    ])
    .pipe(gulp.dest('./build'))
})

gulp.task('webpack', cb => {
  webpack(prodConfig, (err, stats) => {
    if (err) throw new util.PluginError('webpack', err)
    util.log('[webpack]', stats.toString())
    cb()
  })
})

gulp.task('serve', () => {
  const compiler = webpack(devConfig)

  const server = new WebpackDevServer(compiler, {
    contentBase: './build',
    hot: true,
    stats: {
      colors: true
    }
  })

  server.listen(PORT, 'localhost', err => {
    if (err) throw new util.PluginError('webpack-dev-server', err)
    util.log('[webpack-dev-server]', `http://localhost:${PORT}`)
  })
})

gulp.task('default', ['assets', 'copy', 'assets', 'serve'])

gulp.task('bundle', ['assets', 'copy', 'assets', 'webpack'])