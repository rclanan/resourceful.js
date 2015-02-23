'use strict';

var gulp, requireJsConfig;

gulp = require('gulp');
requireJsConfig = require('../configs/requirejs.json');

function concatenate() {
  requirejs.optimize(requireJsConfig);
}

gulp.task('concatenate', ['transpile'], concatenate);

module.exports = concatenate;
