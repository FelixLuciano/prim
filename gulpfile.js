'use strict'

//---------------------------
//::::  Modules imports  ::::
//---------------------------
const Path = require('path')

const Gulp = require('gulp')
const Insert = require('gulp-insert')
const Rename = require('gulp-rename')
const server = require('browser-sync').create()

const Pug = require('gulp-pug')

const Sass = require('gulp-sass')
const Postcss = require('gulp-postcss')
const Autoprefixer = require('autoprefixer')
const Csso = require('postcss-csso')


//-------------------------
//::::  Sass compiler  ::::
//-------------------------
Sass.compiler = require('sass')


//------------------------------
//::::  Build library task  ::::
//------------------------------
function buildLibrary(dest, options = {})
{
  let filename = 'prim.css'
  const copyright = require('./src/defaults/copyright.js')
  let postCssPlugins = [
    Autoprefixer({browsers: ['last 1 version']})
  ]

  if(options.minify)
  {
    filename = 'prim.min.css'
    postCssPlugins.push(Csso())
  }

  return Gulp.src('./src/index.sass')
    .pipe(
      Sass()
    )

    .on('error', function(err) {
      console.log('\n', err.messageFormatted, '\n')
      this.emit('end')
    })

    .pipe(
      Postcss(postCssPlugins)
    )

    .pipe(
      Insert.prepend(copyright)
    )

    .pipe(
      Rename(filename)
    )

    .pipe(
      Gulp.dest(Path.resolve(dest))
    )
}


//----------------------------------
//::::  Build test pages pipes  ::::
//----------------------------------
function buildPages(dest)
{
  return Gulp.src('./test/**/*.pug')
    .pipe(
      Pug({
        pretty: true
      })
    )

    .on('error', function(err) {
      console.log('\n', err.messageFormatted, '\n')
      this.emit('end')
    })

    .pipe(
      Gulp.dest(Path.resolve(dest))
    )
}


//----------------------------------
//::::  Inicialize server task  ::::
//----------------------------------
function initServerTask(resolve)
{
  server.init({
    server: Path.resolve(__dirname, '.tmp'),
    logPrefix: 'Server',

    callbacks: {
      ready()
      {
        Gulp.watch(['./src/**/*.sass', './src/**/*.scss'])
          .on('change', function() {
            buildLibrary('./.tmp/dist/css').pipe(server.stream())
          })

        Gulp.watch('./test/**/*.pug')
          .on('change', function() {
            buildPages('./.tmp').pipe(server.stream())
          })
      }
    }
  })

  resolve.call()
}


//--------------------------------------
//::::  Build for development task  ::::
//--------------------------------------
function developmentBuildTask(resolve)
{
  buildLibrary('./.tmp/dist/css')
  buildPages('./.tmp')

  resolve.call()
}


//-------------------------------------
//::::  Build for production task  ::::
//-------------------------------------
function productionBuildTask(resolve)
{
  buildLibrary('./dist/css')
  buildLibrary('./dist/css', {
    minify: true
  })

  resolve.call()
}


//----------------------
//::::  Gulp tasks  ::::
//----------------------
exports.server = Gulp.series(developmentBuildTask, initServerTask)
exports.build  = Gulp.series(productionBuildTask)
