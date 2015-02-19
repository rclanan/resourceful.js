'use strict';

import {fullUniqueMapLibrary} from '../../../libraryLocations/fullUniqueMapLibrary';

describe('mapValidation', () => {
  describe('checkExists', () => {
    var results, given;
    beforeAll(() => {
      let map = new Map(); // this is map.
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

      map.set('foo', 'bar');

      results = {
        noOverlapCall: fullUniqueMapLibrary.mapValidation.checkExists(given.noOverlapOptions),
        overlapCall: fullUniqueMapLibrary.mapValidation.checkExists(given.overlapOptions)
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

  describe('checkMatchingExists', () => {
    var checkExistsSpy, given, results;
    beforeAll(() => {
      given = {
        typeMaps: {
          name: new Map(),
          value: new Map()
        },
        tests: ['noMatchTest', 'matchNameTest', 'matchValueTest', 'matchBothFromSameItemTest', 'matchBothFromDifferentItemsTest'],
        noMatchTest: {
          name: 'foo',
          value: 'bar'
        },
        matchNameTest: {
          name: 'nameMatch',
          value: 'bar'
        },
        matchValueTest: {
          name: 'foo',
          value: 'valueMatch'
        },
        matchBothFromSameItemTest: {
          name: 'nameMatch',
          value: 'valueMatch'
        },
        matchBothFromDifferentItemsTest: {
          name: 'nameMatch',
          value: 'otherValueMatch'
        }
      };

      results = {};

      given.typeMaps.name.set('nameMatch','valueMatch');
      given.typeMaps.value.set('valueMatch', 'nameMatch');

      given.typeMaps.name.set('otherNameMatch', 'otherValueMatch');
      given.typeMaps.value.set('otherValueMatch', 'otherNameMatch');


      checkExistsSpy = sinon.spy(fullUniqueMapLibrary.mapValidation, 'checkExists');

      // run tests:
      function runTest(testName, given, spy, checkMatchingExists) {
        var result = {};
        result.returned = checkMatchingExists({
          matchObject: given[testName],
          typeMaps: given.typeMaps
        });
        result.checkExistsArguments = spy.lastCall.args[0];
        result.checkExistReturns = spy.lastCall.returnValue;
        return result;
      }

      for(let test of given.tests) {
        results[test] = runTest(test, given, checkExistsSpy, fullUniqueMapLibrary.mapValidation.checkMatchingExists);
      }

      fullUniqueMapLibrary.mapValidation.checkExists.restore();
    });

    //matches keys to maps with the name of the key
    it('should return an array of all matches', () => {
      expect(results.noMatchTest.returned.length).toBe(0);
      expect(results.matchNameTest.returned.length).toBe(1);
      expect(results.matchValueTest.returned.length).toBe(1);
      expect(results.matchBothFromSameItemTest.returned.length).toBe(2);
      expect(results.matchBothFromDifferentItemsTest.returned.length).toBe(2);
    });

    it('should test each item using the key names', () => {
      for(let test of given.tests) {
        let args = results[test].checkExistsArguments;
        expect(args.key).toBe(given[test][args.type]);
      }
    });

  });

});
