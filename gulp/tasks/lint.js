'use strict';

var gulp, jshint, handleErrors, config, lintTask, jscs, jscsStylish;

config         = require('../config').linter;
gulp           = require('gulp');
jshint         = require('gulp-jshint');
jscs           = require('gulp-jscs');
jscsStylish    = require('gulp-jscs-stylish');
handleErrors   = require('../util/handleErrors');


lintTask       = function() {
  return gulp.src(config.files)
  .pipe(jshint('.jshintrc'))
  .pipe(jscs('.jscsrc'))
  .pipe(jscsStylish.combineWithHintResults())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'))
  .on('error', handleErrors);
};

gulp.task('lint', lintTask);

module.exports = lintTask;
