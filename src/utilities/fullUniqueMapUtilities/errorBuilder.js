'use strict';

export var errorBuilder;

function buildMessage(errorInformationArray) {
  const errorBase = 'error inserting given object, the following items have existing values: ';
  let valueOverlaps = [];

  for(let errorInformation of errorInformationArray) {
    valueOverlaps.push(`${errorInformation.type} "${errorInformation.key}"`);
  }

  return `${errorBase} ${valueOverlaps.join(',')}`;
}

function build(errorInformationArray) {
  let errorMessage = errorBuilder.buildMessage(errorInformationArray);
  let error = new Error(errorMessage);

  error.existingObjectMatches = errorInformationArray;

  throw error;
}

errorBuilder = {
  build: build,
  buildMessage: buildMessage
};
