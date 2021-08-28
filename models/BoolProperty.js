import { Property } from './index.js'

export class BoolProperty extends Property {
    constructor(name, type, prop) {
        super(name, type, prop);
    }
    get Size() {
        return this.Name.length + this.Type.length + 9;
    }
    static from(obj) {
        let prop = new BoolProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
