// ----------------------------------------------------------------------------
// #BUILD
// ----------------------------------------------------------------------------

var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');



gulp.task('build', gulpSequence('potato_head', ['css', 'js'], 'html', 'img'));

// npm install --save-dev gulp-sequence
