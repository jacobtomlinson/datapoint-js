var gulp = require('gulp');
var browserify = require('gulp-browserify');
var minify = require('gulp-minify');
var shell = require('gulp-shell')
var pack = require('./package.json');
var jsdoc = require("gulp-jsdoc");

gulp.task('build', function() {
  gulp.start('browserify', 'document');
});

gulp.task('default', function() {
  gulp.start('build', 'serve');
});

gulp.task('test', function() {
  gulp.start('build');
});

gulp.task('browserify', function() {
    gulp.src('src/datapoint.js')
        .pipe(browserify({
          insertGlobals : true,
          ignore : "xmlhttprequest"
        }))
        .pipe(minify({
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('./dist/browser/'))
});

gulp.task('document', function() {
  gulp.src(["./src/datapoint.js", "./README.md"])
    .pipe(jsdoc('./docs'))
});

gulp.task('serve', shell.task([
  'python -m SimpleHTTPServer 8000'
]))
