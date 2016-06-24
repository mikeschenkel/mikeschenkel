// ----------------------------------------------------------------------------
// #CLEAN
// ----------------------------------------------------------------------------

var gulp   = require('gulp');
var del    = require('del');
var config = require('../config.js');



gulp.task('clean', function() {
  return del([
    config.paths.build,
    config.css.dist,
    config.js.dist
  ]);
});

// npm install --save-dev del
