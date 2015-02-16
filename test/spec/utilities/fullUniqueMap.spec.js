'use strict';

describe('FullUniqueMap', function() {
  it('should not allow multiple items of the same name to be inserted');
  it('should not allow multiple items of teh same value to be inserted');
  it('should return an iterator when asked for an iterator'); // how do I test this from here??
  it('should not allow modifications after being locked'); // fail silent or not??
  it('should error on trying to add a name that already exists');
  it('should error on trying to add a value that already exists');
  it('should error on trying to set a name that already exists');
  it('should error on trying to set a value that already exists');
});
