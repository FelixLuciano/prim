'use strict'

// Modules
const Path = require('path')
const Gulp   = require('gulp')
const BrowserSync = require('browser-sync')

// Gulp plugins
const Insert = require('gulp-insert')
const Rename = require('gulp-rename')
const Pug = require('gulp-pug')
const Postcss = require('gulp-postcss')

// SASS ans Post-css plugins
const Sass = require('gulp-sass')
const Autoprefixer = require('autoprefixer')
const Csso = require('postcss-csso')


//------------------------------
//::::  Build library task  ::::
//------------------------------
function buildLibrary(dest, options = {})
{
  let file = Gulp.src('./src/prim.sass')
  let filename = 'prim'
  const extension = 'css'
  const postCssPlugins = []

  // SASS process
  file = file.pipe(
    Sass()
  )

  // Compilation error handler
  file = file.on('error', function(err) {
    console.log('\n', err.messageFormatted, '\n')
    this.emit('end')
  })

  // Prefixing process
  if(options.legacy)
  {
    filename += '.legacy'

    postCssPlugins.push(
      Autoprefixer({browsers: ['last 5 version']})
    )
  }

  else
    postCssPlugins.push(
      Autoprefixer({browsers: ['last 1 version']})
    )

  // Minification process
  if(options.minify)
  {
    filename += '.min'

    postCssPlugins.push(
      Csso({
        restructure: true
      })
    )
  }

  // Post-css process
  file = file.pipe(
    Postcss(postCssPlugins)
  )

  // Insert copyright text on top of file
  file = file.pipe(
    Insert.prepend(require('./src/defaults/copyright.js'))
  )

  // Rename file name
  file = file.pipe(
    Rename(`${filename}.${extension}`)
  )

  // File destination process
  .pipe(
    Gulp.dest(Path.resolve(dest))
  )

  return file
}


//----------------------------------
//::::  Build test pages pipes  ::::
//----------------------------------
function buildPages(dest)
{
  let file = Gulp.src('./test/**/*.pug')

  // Pug process
  file = file.pipe(
    Pug({
      pretty: true
    })
  )

  // Compilation error handler
  file = file.on('error', function(err) {
    console.log('\n', err.messageFormatted, '\n')
    this.emit('end')
  })

  // File destination process
  file = file.pipe(
    Gulp.dest(Path.resolve(dest))
  )

  return file
}


//----------------------------------
//::::  Inicialize server task  ::::
//----------------------------------
function initServerTask(resolve)
{
  const server = BrowserSync.create()

  server.init({
    server: Path.resolve(__dirname, '.tmp'),
    logPrefix: 'Server',

    callbacks: {
      ready()
      {
        Gulp.watch(['./src/**/*.sass', './src/**/*.scss'])
          .on('change', function() {
            buildLibrary('./.tmp/dist').pipe(server.stream())
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
  buildLibrary('./.tmp/dist')
  buildPages('./.tmp')

  resolve.call()
}


//-------------------------------------
//::::  Build for production task  ::::
//-------------------------------------
function productionBuildTask(resolve)
{
  buildLibrary('./dist')

  buildLibrary('./dist', {
    minify: true
  })

  buildLibrary('./dist', {
    legacy: true
  })

  buildLibrary('./dist', {
    legacy: true,
    minify: true
  })

  resolve.call()
}


//----------------------
//::::  Gulp tasks  ::::
//----------------------
exports.server = Gulp.series(developmentBuildTask, initServerTask)
exports.build  = productionBuildTask
