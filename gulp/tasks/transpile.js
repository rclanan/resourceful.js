'use strict';

var gulp, traceur, traceurOptions;

gulp = require('gulp');
traceur = require('gulp-traceur');
traceurOptions = require('../configs/traceur.json');

function transpile() {
  gulp.src('src/main.js')
    .pipe(traceur(traceurOptions))
    .pipe(gulp.dest('dist'));
}

gulp.task('transpile', ['clean'], transpile);

module.exports = transpile;
