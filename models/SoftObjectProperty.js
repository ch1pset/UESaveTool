import { Property } from './index.js'

export class SoftObjectProperty extends Property {
    constructor(name, type, prop) {
        super(name, type, prop);
    }
    get Size() {
        return this.Property.length + this.Type.length + this.Name.length + 25;
    }
    static from(obj) {
        let prop = new SoftObjectProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
