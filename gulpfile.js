var gulp = require('gulp'),
    gutil = require('gulp-util');

//can be called in the command with "gulp task"
gulp.task('log', function() {
  gutil.log('Workflows are awesome (see gulpfile.js for more). This is a task that will be worked through.');
});