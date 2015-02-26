'use strict';

var gulp, requireJsConfig, requirejs;

gulp = require('gulp');
requirejs = require('requirejs');
requireJsConfig = require('../configs/requirejs.json');

function concatenate() {
  requirejs.optimize(requireJsConfig);
}

gulp.task('concatenate', ['transpile'], concatenate);

module.exports = concatenate;
