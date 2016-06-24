// ----------------------------------------------------------------------------
// #HTML
// ----------------------------------------------------------------------------

var gulp        = require('gulp');
var argv        = require('yargs').argv;
var plugins     = require('gulp-load-plugins')({ camelize: true });
var browserSync = require('browser-sync');
var config      = require('../config.js').html;



gulp.task('html', ['jekyll'], function() {
  gulp.src(config.src)
    .pipe(plugins.if(argv.production, plugins.htmlmin(config.htmlmin)))
    .pipe(gulp.dest(config.build))
    .pipe(plugins.if(!argv.production, browserSync.reload({stream: true})));
});
