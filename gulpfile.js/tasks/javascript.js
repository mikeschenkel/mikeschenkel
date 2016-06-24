// ----------------------------------------------------------------------------
// #JAVASCRIPT
// ----------------------------------------------------------------------------

var gulp        = require('gulp');
var argv        = require('yargs').argv;
var plugins     = require('gulp-load-plugins')({ camelize: true });
var browserSync = require('browser-sync');
var config      = require('../config').js;
var manifest    = require('asset-builder')('./app/assets/config/manifest.json');



gulp.task('js', function() {
  manifest.forEachDependency('js', function(js) {
    return plugins.merge (
      gulp.src(js.globs)
        .pipe(plugins.concat(js.name))
        .pipe(plugins.plumber({errorHandler: plugins.notify.onError("Error: <%= error.message %>")}))
        .pipe(plugins.if(argv.production, plugins.uglify()))
    )
    .pipe(plugins.plumber.stop())
    .pipe(gulp.dest(config.dist))
    .pipe(plugins.if(argv.production, gulp.dest(config.build)))
    .pipe(plugins.if(!argv.production, browserSync.reload({stream: true})));
  });
});

// npm install --save-dev yargs gulp-if gulp-plumber asset-builder gulp-merge gulp-concat gulp-uglify
