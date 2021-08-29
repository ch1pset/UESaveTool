import { Property } from './index.js'

export class StrProperty extends Property {
    constructor(name, type, prop) {
        super(name, type, prop);
    }
    get Size() {
        return this.Name.length + 4
            + this.Type.length + 4
            + this.Property.length + 4
            + 9;
    }
    static from(obj) {
        let prop = new StrProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
