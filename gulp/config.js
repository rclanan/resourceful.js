var dest, src, test, reports, path, pkg;

pkg = require('../package.json');
path = require('path');

dest = './dest';
src = './src';
test = './test';
reports = './reports';

module.exports = {
  production: {
    jsSrc: pkg.main,
    dest: dest
  },
  karma: {
    configFile: __dirname + '/../karma.conf.js'
  },
  linter: {
    files: [ src + '/**/*.js', '!'  + src + '/**/_*.js']
  },
  complexity: {
    files: [ src + '/**/*.js', '!'  + src + '/**/_*.js']
  },
  cleaning: {
    dist: dest,
    reports: reports
  }
};
