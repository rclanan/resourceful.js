'use strict';

var gulp, cleanTask;

gulp           = require('gulp');

cleanTask   = function(callback) {
  // Additional cleaning task can be specified here
};

gulp.task('cleanify', ['clean-dist', 'clean-reports'], cleanTask);

module.exports = cleanTask;
