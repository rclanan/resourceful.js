'use strict';

// returns object
// object contains insert value
// overlap type: name/value
// overLaps with: returns nameValue it overlaps with.
function buildAddError(){

}

function checkExists(options) {
  let existingValue = options.map.get(options.key);

  if(existingValue !== undefined) {
    return {
      insertValue: options.insertValue,
      type: options.type,
      overLapValue: existingValue
    };
  }
}

function checkIfNameOrValuesExist(options) {
  return checkExists({
      key: options.nameValue.name,
      type: 'name',
      map: options.nameValues
    }) || checkExists({
      key: options.nameValue.value,
      type: 'value',
      map: options.valueNames
    });
}


export class FullUniqueMap {
  constructor(){
    this.nameValues = new Map();
    this.valueNames = new Map();
  }

  add(nameValue){
    let errorInformation;

    errorInformation = checkIfNameOrValuesExist({
      nameValue: nameValue,
      nameValues: this.nameValues,
      valueNames: this.valueNames
    });

    if(!errorInformation) {
      this.nameValues.set(nameValue.name, nameValue.value);
      this.valueNames.set(nameValue.value, nameValue.name);
    } else {
      let error = new Error(`error inserting nameValue "${nameValue.name}", ${errorInformation.type} already exists.`);

      error.information = errorInformation;

      throw error;
    }

  }

  removeName(){}
  removeValue(){}
  lock(){
    this.add = () => {};
  }

  [Symbol.iterator](){
    return this.nameValues[Symbol.iterator]();
  }
}
