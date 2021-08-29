import { Property } from './index.js'

export class StrProperty extends Property {
    constructor(name, type, prop) {
        super(name, type, prop);
    }
    get Size() {
        return this.Property.length + this.Name.length + this.Type.length + 21;
    }
    static from(obj) {
        let prop = new StrProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
