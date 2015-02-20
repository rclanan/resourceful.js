'use strict';

import { setMapLibrary } from '../../../libraryLocations/setMapLibrary';

function buildErrorInformationArray(count, type) {
  var errorInformationArray = [];
  for(let i = 0; i < count; i += 1) {
    errorInformationArray.push({
      key: `foo${i}`,
      type: type
    });
  }
  return errorInformationArray;
}

describe('errorBuilder',()=>{

  let given, results, buildMessageSpy;
  beforeAll(()=>{
    given = {
      singleErrorInformation: buildErrorInformationArray(1,'test'),
      multiErrorInformation: buildErrorInformationArray(10,'testMulti')
    };



    buildMessageSpy = sinon.spy(setMapLibrary.errorBuilder, 'buildMessage');

    results = {};
    results.buildMessage = {};
    results.build = {};
    // these will throw errors.
    try{
      setMapLibrary.errorBuilder.build(given.singleErrorInformation);
    } catch( singleError ) {
      results.build.callSingle = singleError;
      results.buildMessage.callSingle = buildMessageSpy.lastCall;
    }

    try{
      setMapLibrary.errorBuilder.build(given.multiErrorInformation);
    } catch( multiError ) {
      results.build.callMulti = multiError;
      results.buildMessage.callMulti = buildMessageSpy.lastCall;
    }

  });

  describe('buildMessage',() => {

    it('should return a string containing each given key and the type', () => {
      expect(results.buildMessage.callSingle.returnValue).toMatch(`error inserting the following items: test "foo0"`);
      expect(results.buildMessage.callMulti.returnValue).toMatch(`error inserting the following items: testMulti "foo0",testMulti "foo1",testMulti "foo2",testMulti "foo3",testMulti "foo4",testMulti "foo5",testMulti "foo6",testMulti "foo7",testMulti "foo8",testMulti "foo9"`);
    });

  });

  describe('build', () => {
    it('should throw an error when called', () => {
      expect(results.build.callSingle).not.toBe(undefined);
      expect(results.build.callMulti).not.toBe(undefined);
    });

    it('should attach the existingObjectMatches information to that call', () => {
      expect(results.build.callSingle.existingObjectMatches).toBe(given.singleErrorInformation);
      expect(results.build.callMulti.existingObjectMatches).toBe(given.multiErrorInformation);
    });

    it('should call buildMessage with given errorInformationArray', () => {
      expect(results.buildMessage.callSingle.args[0]).toBe(given.singleErrorInformation);
      expect(results.buildMessage.callMulti.args[0]).toBe(given.multiErrorInformation);
    });
  });
});
