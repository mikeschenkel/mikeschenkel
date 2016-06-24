// ----------------------------------------------------------------------------
// #IMAGES
// ----------------------------------------------------------------------------

var gulp    = require('gulp');
var argv    = require('yargs').argv;
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../config.js').img;



gulp.task('img', function() {
  return gulp.src(config.src)
        .pipe(plugins.if(argv.production, plugins.imagemin()))
        .pipe(plugins.if(argv.production, gulp.dest(config.build)));
});

// npm install --save-dev yargs gulp-if gulp-imagemin
