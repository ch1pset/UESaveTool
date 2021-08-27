import { Property } from './index.js'

export class BoolProperty extends Property {
    constructor(name, type, value) {
        super(name, type, value);
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
