'use strict';

import {FullUniqueMap } from '../../src/utilities/fullUniqueMap';
import { mapValidation } from '../../src/utilities/fullUniqueMapUtilities/mapValidation';
import { errorBuilder } from '../../src/utilities/fullUniqueMapUtilities/errorBuilder';

export var fullUniqueMapLibrary = {
  FullUniqueMap: FullUniqueMap,
  mapValidation: mapValidation,
  errorBuilder: errorBuilder
};
