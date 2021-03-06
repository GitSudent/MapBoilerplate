var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function() {
      connect.server({
        root: 'src',
        livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
});
    
gulp.task('default', ['webserver',"watch"]);