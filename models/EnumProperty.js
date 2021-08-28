import { Property } from './index.js';

export class EnumProperty extends Property {
    constructor(name, type, prop, etype) {
        super(name, type, prop);
        this.EnumType = etype;
    }
    get Size() {
        return this.Property.length + this.Type.length + this.Name.length + this.EnumType.length + 25;
    }
    static from(obj) {
        let prop = new EnumProperty();
        Object.assign(prop, obj);
        return prop;
    }
}