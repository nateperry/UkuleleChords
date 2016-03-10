var gulp = require('gulp');
var path = require('path');
var compass = require('gulp-compass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('compass', function() {
  gulp.src('./www/sass/*.scss')
    .pipe(compass({
      project: path.join(__dirname, 'www'),
      css: 'css',
      sass: 'sass'
    }))
    .on('error', function(error) {
      // Would like to catch the error here
      console.log(error);
      this.emit('end');
    })
    .pipe(gulp.dest('./www/css'));
});

gulp.task('browserify', function() {
  return browserify('./www/js/src/app.js')
    .on('error', function(error) {
      // Would like to catch the error here
      console.log(error);
      this.emit('end');
    })
    .bundle()
    // Pass desired output filename to vinyl-source-stream
    .pipe(source('app.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('watch', function() {
  gulp.watch('./www/js/src/**', ['browserify']);
  gulp.watch('./www/sass/**', ['compass']);
});

gulp.task('default', ['browserify', 'watch']);