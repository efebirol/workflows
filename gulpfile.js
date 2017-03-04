var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee'];   //Benefit: Can now add multiple files in the array


//can be called in the command with "gulp task"
gulp.task('log', function() {
  gutil.log('Workflows are awesome (see gulpfile.js for more). This is a task that will be worked through.');
});

//my own gult task (using an anonymous function)
gulp.task('birolcalls', function(){
        gutil.log("Hi Birol. I am your first Log in the gulpfile");
    }
);

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({ bare: true })        //see coffee API to learn more
      .on('error', gutil.log))          //handle the error in a log(so error won't stop this task)
    .pipe(gulp.dest('components/scripts'))  //puts file in this folder (where our javascript files are)
});