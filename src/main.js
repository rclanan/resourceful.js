'use strict';
import {SetMap} from './utilities/setMap';

var uniqueMap = new SetMap();

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
