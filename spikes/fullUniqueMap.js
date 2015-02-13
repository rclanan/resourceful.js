'use strict';

// returns object
// object contains insert value
// overlap type: name/value
// overLaps with: returns nameValue it overlaps with.
function buildAddError(){

}

function checkExists(opitons) {
  var existingValue = options.map.get(options.key);
  if(existingValue !== undefined) {
    return {
      insertValue: options.insertValue,
      type: options.type,
      overLapValue: existingValue
    }
  }
}


export class fullUniqueMap {
  constructor(){
    this.nameValues = new Map();
    this.valueNames = new Map();
  }

  add(nameValue){
    var errorInformation;
    errorInformation = checkExists({ key: nameValue.name, type: 'name', map: this.nameValues});

  }

  removeName(){}
  removeValue(){}
  lock(){}

  [Symbol.iterator](){
    return this.nameValue[Symbol.iterator]();
  }
}
