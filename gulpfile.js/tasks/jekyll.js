// ----------------------------------------------------------------------------
// #JEKYLL
// ----------------------------------------------------------------------------

var gulp = require('gulp');



gulp.task('jekyll', function (gulpCallBack){
  var spawn = require('child_process').spawn;
  // After build: cleanup HTML
  var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});

  jekyll.on('exit', function(code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
  });
});
