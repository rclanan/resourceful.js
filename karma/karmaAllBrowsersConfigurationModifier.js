'use strict';

function modifyConfiguration(config){

  config.browsers = ['Chrome', 'ChromeCanary', 'Firefox', 'Opera', 'IE'];

  return config;
}

module.exports = {
  modifyConfiguration: modifyConfiguration
};
