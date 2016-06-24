// ----------------------------------------------------------------------------
// #DEFAULT
// ----------------------------------------------------------------------------

var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');



gulp.task('default', gulpSequence('clean', 'build', 'watch'));

// npm install --save-dev gulp-sequence
