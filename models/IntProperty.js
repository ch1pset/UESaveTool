import { Property } from './index.js'

export class IntProperty extends Property {
    constructor(name, type, prop) {
        super(name, type, prop);
    }
    get Size() {
        return this.Name.length + this.Type.length + 21;
    }
    static from(obj) {
        let prop = new IntProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
