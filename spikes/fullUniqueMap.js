'use strict';

import { generateError, checkIfNameOrValuesExist } from './fullUniqueMapErrorChecking.js';


var noOp = () => {};


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
      generateError(errorInformation);
    }
  }

  removeName(){}
  removeValue(){}
  setValue(options){}
  setName(options){}

  lock() {
    this.add = noOp;
    this.removeValue = noOp;
    this.removeName = noOp;
    this.setValue = noOp;
    this.setName = noOp;
  }

  [Symbol.iterator](){
    return this.nameValues[Symbol.iterator]();
  }
}
