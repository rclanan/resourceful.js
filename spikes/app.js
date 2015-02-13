'use strict';
// This file cannot use es6 modules. This is because this file is what enables ES6 modules for the rest of the project.

var SystemJs = require('systemjs');

// note: we need a windows check here for the files.

SystemJs.import('./fullUniqueMap.js').then(function(module){
  // do stuff here. module will be the doubleMap module and it's dependencies.
  // we could set module.exports up right here as well.
});
