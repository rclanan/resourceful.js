'use strict';

var gulp, path;

gulp = require('gulp');
path = require('path');

function watch() {
  gulp.watch(path.src, ['transpile']);
}

gulp.task('watch', watch);

module.exports = watch;
