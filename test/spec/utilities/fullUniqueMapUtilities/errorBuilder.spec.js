'use strict';

import {fullUniqueMapLibrary} from '../../../libraryLocations/fullUniqueMapLibrary';

describe('errorBuilder',()=>{

  describe('buildMessage',() => {
    let given, results;
    beforeAll(()=>{
      given = {};
      results = {};
      results.call = fullUniqueMapLibrary.errorBuilder.buildMessage();
    });

    it('should return a string containing each given key and the type', () => {});

  });

  describe('build', () => {
    it('should throw an error when called', () => {});
    it('should attach the given error information to that call', () => {});
    it('should call buildMessage with given errorInformationArray', () => {});
  });
});
