var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js'
];
var sassSources = ['components/sass/style.scss'];


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

//combine all the scripts into one file(uncompressed in development). Benefit: Better for Debugging (in Dev)
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))   //put it in the "js" folder
});

//merges the style.scss with the other SASS Styles and puts them in the CSS folder
gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({                 //configure the compass for the sass (where to find what)
        sass: 'components/sass',
        image: 'builds/development/images',
        style: 'expanded'     //style how to indent the CSS (predefined in 'expanded', 'nested', 'compact' and 'compressed')
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/development/css'))  //put it in the "css" folder
});

