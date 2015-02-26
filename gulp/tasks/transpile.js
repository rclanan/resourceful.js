'use strict';

var gulp, traceur, traceurOptions, sourcemaps, concat, config, fs, path;

gulp = require('gulp');
traceur = require('gulp-traceur');
traceurOptions = require('../configs/traceur.json');
sourcemaps = require('gulp-sourcemaps');
concat = require('gulp-concat');
config = require('../config').production;
fs = require('fs');
path = require('path');

function buildTranspile(exportType) {
  var exportFile = path.join(config.exportTemplates, exportType);
  exportFile = path.join(exportFile, '*.js');

  return function() {

    gulp.src(['src/**/*.js', exportFile])
      //.pipe(sourcemaps.init())
      .pipe(traceur(traceurOptions))
      //.pipe(concat('resourceful.js'))
      //.pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.dest));
  }
}

gulp.task('transpile', ['clean'], buildTranspile(config.default));
gulp.task('transpile:requireJs',['clean'], buildTranspile('requireJs'));
gulp.task('transpile:commonJs',['clean'], buildTranspile('commonJs'));

module.exports = buildTranspile;
