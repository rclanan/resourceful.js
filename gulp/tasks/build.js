'use strict';

var gulp, rename;

gulp = require('gulp');
rename = require('gulp-rename');

function build() {
  gulp.src('index-production.html')
    .pipe(rename("index.html"))
    .pipe(gulp.dest('dist'));
}

gulp.task('build', ['clean', 'concatenate'], build);

module.exports = build;

