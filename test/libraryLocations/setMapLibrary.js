'use strict';

import { SetMap } from '../../src/utilities/setMap';
import { mapValidation } from '../../src/utilities/setMapUtilities/mapValidation';
import { errorBuilder } from '../../src/utilities/setMapUtilities/errorBuilder';

export var setMapLibrary = {
  SetMap: SetMap,
  mapValidation: mapValidation,
  errorBuilder: errorBuilder
};
