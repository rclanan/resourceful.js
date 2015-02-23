'use strict';

import { mapValidation } from './setMapUtilities/mapValidation';
import { errorBuilder} from './setMapUtilities/errorBuilder';

var noOp = () => {};

class SetMap {
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
    setValue(){}
    setName(){}

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


export { SetMap };
