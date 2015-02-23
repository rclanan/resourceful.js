'use strict';

var gulp, connect;

gulp = require('gulp');
connect = require('gulp-connect');

function serve(){
  connect.server({
    root: [__dirname],
    port: 8000,
    livereload: false
  });
}


gulp.task('serve', serve);

module.exports = serve;
