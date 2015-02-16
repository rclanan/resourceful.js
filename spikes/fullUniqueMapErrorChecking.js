'use strict';

function checkExists(options) {
  let existingValue = options.map.get(options.key);

  if(existingValue !== undefined) {
    return {
      insertValue: options.key,
      type: options.type,
      overLapValue: existingValue
    };
  }
}

function checkIfNameOrValuesExist(options) {
  return checkExists({
      key: options.nameValue.name,
      type: 'name',
      map: options.nameValues
    }) || checkExists({
      key: options.nameValue.value,
      type: 'value',
      map: options.valueNames
    });
}

function generateError(errorInformation) {
  let error = new Error(`error inserting nameValue "${errorInformation.key}", ${errorInformation.type} already exists.`);

  error.information = errorInformation;

  throw error;
}

export const errorUtilities = {
  checkExists: checkExists,
  checkIfNameOrValuesExist: checkIfNameOrValuesExist,
  generateError: generateError
};
