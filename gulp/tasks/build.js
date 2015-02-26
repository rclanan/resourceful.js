'use strict';

var gulp, rename, config;

gulp = require('gulp');
rename = require('gulp-rename');
config = require('../config').production;

function build() {
  gulp.src('index-production.html')
    .pipe(rename("index.html"))
    .pipe(gulp.dest(config.dest));
}

gulp.task('build', ['clean', 'concatenate'], build);

module.exports = build;

