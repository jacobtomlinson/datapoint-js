var gulp = require('gulp');
var browserify = require('gulp-browserify');
var minify = require('gulp-minify');
var shell = require('gulp-shell')
var pack = require('./package.json');

gulp.task('default', function() {
  gulp.start('browserify', 'serve');
});

gulp.task('browserify', function() {
    gulp.src('src/datapoint.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production,
          ignore : "xmlhttprequest"
        }))
        .pipe(minify({
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('./dist/browser/'))
});

gulp.task('serve', shell.task([
  'python -m SimpleHTTPServer 8000'
]))
