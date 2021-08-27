import { Property } from './index.js'

export class ArrayProperty extends Property {
    constructor({name, type, value}, {atype, aname, ptype, pname, arr}) {
        super({name, type, value});
        this.ArrayType = atype;
        this.ArrayName = aname;
        this.ArrayPropertyType = ptype;
        this.ArrayPropertyName = pname;
        this.Array = arr;
        // console.log(`Number of Items in Array: ${arr.length}`)
    }
    // get Size() {

    // }
}