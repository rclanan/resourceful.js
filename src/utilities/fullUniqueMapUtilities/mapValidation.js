'use strict';
export var mapValidation;

function checkExists(options) {
  let existingValue = options.map.get(options.key);

  if(existingValue !== undefined) {
    return {
      insertValue: options.key,
      type: options.type,
      existingValue: existingValue
    };
  }
}

function checkMatchingExists(options) {
  var mapList = Object.keys(options.typeMaps);
  var errors = [];

  for(let keyName of mapList) {
    let error = mapValidation.checkExists({
      key: options.matchObject[keyName],
      type: keyName,
      map: options.typeMaps[keyName]
    });

    if(error) {
      errors.push(error);
    }
  }

  return errors;
}



mapValidation = {
  checkExists: checkExists,
  checkMatchingExists: checkMatchingExists
};
