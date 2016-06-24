// ----------------------------------------------------------------------------
// #POTATO HEAD
// ----------------------------------------------------------------------------

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../config.js').potato_head;



gulp.task('potato_head', function() {

  // Colors
  gulp.src(config.colors.src)
    .pipe(plugins.plumber({errorHandler: plugins.notify.onError("Error: <%= error.message %>")}))
    .pipe(plugins.jsonSass())
    .pipe(plugins.eol())
    .pipe(plugins.rename(config.colors.rename))
    .pipe(plugins.plumber.stop())
    .pipe(gulp.dest(config.colors.dist));

  // Fonts
  gulp.src(config.fonts.src)
    .pipe(plugins.plumber({errorHandler: plugins.notify.onError("Error: <%= error.message %>")}))
    .pipe(plugins.jsonSass())
    .pipe(plugins.eol())
    .pipe(plugins.rename(config.fonts.rename))
    .pipe(plugins.plumber.stop())
    .pipe(gulp.dest(config.fonts.dist));

  // Breakpoints
  gulp.src(config.breakpoints.src)
    .pipe(plugins.plumber({errorHandler: plugins.notify.onError("Error: <%= error.message %>")}))
    .pipe(plugins.jsonSass())
    .pipe(plugins.eol())
    .pipe(plugins.rename(config.breakpoints.rename))
    .pipe(plugins.plumber.stop())
    .pipe(gulp.dest(config.breakpoints.dist));

});

// npm install --save-dev gulp-plumber gulp-json-sass gulp-eol gulp-rename
