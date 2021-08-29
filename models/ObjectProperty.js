import { Property } from './index.js'

export class ObjectProperty extends Property {
    constructor(name, type, prop) {
        super(name, type, prop);
    }
    get Size() {
        return this.Property.length + this.Type.length + this.Name.length + 21;
    }
    static from(obj) {
        let prop = new ObjectProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
