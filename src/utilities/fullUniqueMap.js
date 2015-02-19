'use strict';

import { mapValidation } from './fullUniqueMapUtilities/mapValidation';
import { errorBuilder} from './fullUniqueMapUtilities/errorBuilder';

var noOp = () => {};

class FullUniqueMap {
    constructor(){
        this.nameValues = new Map();
        this.valueNames = new Map();
    }

    insert(nameValue){
        let errorInformation;

        errorInformation = mapValidation.checkMatchingExists({
            nameValue: nameValue,
            nameValues: this.nameValues,
            valueNames: this.valueNames
        });

        if(!errorInformation) {
            this.nameValues.set(nameValue.name, nameValue.value);
            this.valueNames.set(nameValue.value, nameValue.name);
        } else {
          errorBuilder.build(errorInformation);
        }
    }

    removeName(){}
    removeValue(){}
    setValue(options){}
    setName(options){}

    lock() {
        this.insert = noOp;
        this.removeValue = noOp;
        this.removeName = noOp;
        this.setValue = noOp;
        this.setName = noOp;
    }

    [Symbol.iterator](){
        return this.nameValues[Symbol.iterator]();
    }
}


export { FullUniqueMap };
