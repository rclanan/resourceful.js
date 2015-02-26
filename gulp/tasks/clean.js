'use strict';

var gulp, cleanTask;

gulp = require('gulp');

cleanTask = function() {
  // Additional cleaning task can be specified here
};

gulp.task('clean', ['clean-dist', 'clean-reports'], cleanTask);

module.exports = cleanTask;

