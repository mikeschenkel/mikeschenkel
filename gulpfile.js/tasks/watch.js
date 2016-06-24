// ----------------------------------------------------------------------------
// #WATCH
// ----------------------------------------------------------------------------

var gulp        = require('gulp');
var watch       = require('gulp-watch');
var potato_head = require('../config.js').potato_head;
var jekyll      = require('../config.js').jekyll;
var css         = require('../config.js').css;
var js          = require('../config.js').js;



gulp.task('watch', ['browser-sync'], function () {
    // Potato Head
    watch(potato_head.src, function() { gulp.start(['potato_head', 'html']); });

    // Jekyll
    watch(jekyll.src, function() { gulp.start('html'); });

    // Assets
    watch(css.src, function() { gulp.start(['css', 'html']); });
    watch(js.src,  function() { gulp.start(['js', 'html']); });
});
