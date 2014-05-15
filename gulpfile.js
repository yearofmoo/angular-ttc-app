// Include gulp
var gulp = require('gulp'); 
var connect = require('gulp-connect');
var usemin = require('gulp-usemin');

gulp.task('connect', function() {
  connect.server({
    root: 'app/'
  });
});

// Default Task
gulp.task('default', ['connect']);
