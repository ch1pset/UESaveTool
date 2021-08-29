import { Property } from './index.js'

export class IntProperty extends Property {
    constructor(name, type, prop) {
        super(name, type, prop);
    }
    get Size() {
        return this.Name.length + 4 
            + this.Type.length + 4
            + 13;
    }
    static from(obj) {
        let prop = new IntProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
