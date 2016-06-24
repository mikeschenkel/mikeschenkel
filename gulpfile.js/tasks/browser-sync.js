// ----------------------------------------------------------------------------
// #BROWSER-SYNC
// ----------------------------------------------------------------------------

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../config.js');



gulp.task('browser-sync', function() {
  browserSync.init(config.browserSync);
});

// npm install --save-dev browswer-sync
