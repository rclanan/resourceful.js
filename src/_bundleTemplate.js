(function(window, Builder) {
  var builtExport = Builder();

  if (typeof exports === 'object') {
    // CommonJS
    module.exports = builtExport;
  } if (typeof define === 'function' && define.amd) {
    // AMD
    define(function(){
      return builtExport;
    });
  } else {
    // Browser Global (constants is your global library identifier)
    window.constants = builtExport;
  }
}(this, function() {
  var require, itemToExport;

  // this is the what is defined in browserify's "entry" item in the configBundles array.
  // located in gulp/config.js under "browserify"
  itemToExport = 1;

  require = <%= contents %>;

  return require(itemToExport);
}));
