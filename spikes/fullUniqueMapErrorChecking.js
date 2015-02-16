'use strict';


export function checkExists(options) {
  let existingValue = options.map.get(options.key);

  if(existingValue !== undefined) {
    return {
      insertValue: options.insertValue,
      type: options.type,
      overLapValue: existingValue
    };
  }
}

export function checkIfNameOrValuesExist(options) {
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

export function generateError(errorInformation) {
  let error = new Error(`error inserting nameValue "${errorInformation.key}", ${errorInformation.type} already exists.`);

  error.information = errorInformation;

  throw error;
}
