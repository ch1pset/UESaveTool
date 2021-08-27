import { Property } from './index.js'

export class FloatProperty extends Property {
    constructor(name, type, value) {
        super(name, type, value);
    }
    get Size() {
        return 4;
    }
    static from(obj) {
        let prop = new FloatProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
