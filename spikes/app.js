'use strict';
require('traceur/bin/traceur-runtime');
import {FullUniqueMap} from './fullUniqueMap';

var uniqueMap = new FullUniqueMap();

uniqueMap.add({
  name: 'foo',
  value: 'bar'
});

uniqueMap.add({
  name: 'Meh',
  value: 'bleh'
});

for(let nameValue of uniqueMap) {
  console.log(nameValue);
}
