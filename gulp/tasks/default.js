'use strict';

var gulp = require('gulp');

gulp.task('default', ['cleanify', 'lint', 'karma', 'complexity', 'watch']);
