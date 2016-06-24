// ----------------------------------------------------------------------------
// #CSS
// ----------------------------------------------------------------------------

var gulp             = require('gulp');
var argv             = require('yargs').argv;
var plugins          = require('gulp-load-plugins')({ camelize: true });
var browserSync      = require('browser-sync');
var config           = require('../config.js').css;

var flexboxFixes     = require('postcss-flexbugs-fixes');
var focus            = require('postcss-focus');
var svgo             = require('postcss-svgo');
var autoprefixer     = require('autoprefixer');
var doiuse           = require('doiuse');
var mergeLonghand    = require('postcss-merge-longhand');
var reduceTransforms = require('postcss-reduce-transforms');
var fakeid           = require('postcss-fakeid');
var minifySelectors  = require('postcss-minify-selectors');
var convertValues    = require('postcss-convert-values');
var normalizeUrl     = require('postcss-normalize-url');
var normalizeCharset = require('postcss-normalize-charset');
var perfectionist    = require('perfectionist');

var discardEmpty     = require('postcss-discard-empty');
var discardComments  = require('postcss-discard-comments');
var cssnano          = require('cssnano');
var colorguard       = require('colorguard');

var processors = [
  flexboxFixes,
  focus,
  svgo,
  autoprefixer(config.autoprefixer),
  mergeLonghand,
  reduceTransforms,
  fakeid,
  convertValues({ length: false }),
  minifySelectors,
  normalizeUrl,
  normalizeCharset,
  perfectionist({ indentSize: 2, maxSelectorLength: 1, syntax: 'scss' })
];

var processorsProduction = [
  discardEmpty,
  discardComments({ removeAll: true }),
  cssnano
];



gulp.task('css', function() {
  return gulp.src(config.src)
    .pipe(plugins.plumber({errorHandler: plugins.notify.onError("Error: <%= error.message %>")}))
    .pipe(plugins.sass(config.sass))
    .pipe(plugins.postcss(processors))
    .pipe(plugins.if(argv.production, plugins.postcss(processorsProduction)))
    .pipe(plugins.plumber.stop())
    .pipe(gulp.dest(config.dist))
    .pipe(plugins.if(!argv.production, browserSync.reload({stream: true})));
});

gulp.task('css-stats', function() {
  return gulp.src(config.dist + '*.css')
    .pipe(plugins.postcss([
      doiuse(config.autoprefixer),
      colorguard
    ]))
    .pipe(plugins.parker());
});

// npm install --save-dev yargs browser-sync gulp-if gulp-plumber gulp-sass gulp-postcss postcss-flexbugs-fixes autoprefixer doiuse postcss-merge-longhand postcss-minify-selectors postcss-convert-values postcss-normalize-url postcss-normalize-charset perfectionist postcss-discard-empty postcss-discard-comments cssnano
