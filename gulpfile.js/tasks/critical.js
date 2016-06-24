// ----------------------------------------------------------------------------
// #CRITICAL
// ----------------------------------------------------------------------------

var gulp     = require('gulp');
var critical = require('critical');
var config   = require('../config.js');



gulp.task('critical', function() {
  return critical.generate({
    base: config.paths.build,
    src: 'index.html',
    dest: config.paths.src + 'assets/scss/critical.scss',
    minify: true,
    width: 1300,
    height: 900,
  });
});

// npm install --save-dev critical
