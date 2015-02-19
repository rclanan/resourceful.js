'use strict';

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
    let error = checkExists({
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

function generateErrorMessage(errorInformationArray) {
  const errorBase = 'error inserting given object, the following items have existing values: ';
  let valueOverlaps = [];

  for(let errorInformation of errorInformationArray) {
    valueOverlaps.push(`${errorInformation.type} "${errorInformation.key}"`);
  }

  return `${errorBase} ${valueOverlaps.join(',')}`;
}

function generateError(errorInformationArray) {
  let errorMessage = generateErrorMessage(errorInformationArray);
  let error = new Error(errorMessage);

  error.existingObjectMatches = errorInformationArray;

  throw error;
}

export const errorUtilities = {
  checkExists: checkExists,
  checkMatchingExists: checkMatchingExists,
  generateError: generateError
};
