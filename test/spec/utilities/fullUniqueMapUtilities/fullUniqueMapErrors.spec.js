'use strict';

import {helpersLibrary} from '../../../locations/helpers';

describe('fullUniqueMapErrors', () => {
  describe('checkExists', () => {
    var results, given;
    beforeAll(() => {
      let map = new Map();
      given = {
        noOverlapOptions: {
          key: 'barington',
          type: 'test',
          map: map
        },
        overlapOptions: {
          key: 'foo',
          type: 'test',
          map: map
        }
      };


      map.insert('foo', 'bar');


      results = {
        noOverlapCall: helpersLibrary.fullUniqueMapErrors.checkExists(given.noOverlapOptions),
        overlapCall: helpersLibrary.fullUniqueMapErrors.checkExists(given.overlapOptions)
      };
    });

    it('should return undefined if there is no overlap in the options', () => {
      expect(results.noOverlapCall).toBe(undefined);
    });

    it('should return an object containing insertValue defined in the options', () => {
      expect(results.overlapCall.insertValue).toBe(given.overlapOptions.key);
    });

    it('should return an object containing type defined in options if there is a match', () => {
      expect(results.overlapCall.type).toBe(given.overlapOptions.type);
    });

    it('should return an object containing overlapValue from the given map if there is a match', () => {
      expect(results.overlapCall.existingValue).toBe(given.overlapOptions.map.get(given.overlapOptions.key));
    });
  });
  describe('checkIfNameOrValuesExist', () => {});
  describe('generateError', () => {});
});
