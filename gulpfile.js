var gulp = require('gulp');
var browserify = require('gulp-browserify');
var minify = require('gulp-minify');

var pack = require('./package.json');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('browserify', function() {
    gulp.src('src/datapoint.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(minify({
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('./dist/browser/'))
});
