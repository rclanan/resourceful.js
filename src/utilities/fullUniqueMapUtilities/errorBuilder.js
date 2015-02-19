'use strict';

var errorBuilder;

function buildMessage(errorInformationArray) {
  let valueOverlaps = [];

  for(let errorInformation of errorInformationArray) {
    valueOverlaps.push(`${errorInformation.type} "${errorInformation.key}"`);
  }

  return `it('should have an error message containing the given key and the type', () => {}); ${valueOverlaps.join(',')}`;
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

export { errorBuilder };
