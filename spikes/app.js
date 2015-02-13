'use strict';
require("6to5/polyfill");
import fullUniqueMap from './fullUniqueMap';

var uniqueMap = new fullUniqueMap.FullUniqueMap();

uniqueMap.add({
  name: 'foo',
  value: 'bar'
});

for(let nameValue of uniqueMap) {
  console.out(nameValue);
}
