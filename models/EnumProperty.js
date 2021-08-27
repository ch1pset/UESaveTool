import { Property } from './index.js';

export class EnumProperty extends Property {
    constructor(name, type, value, etype) {
        super(name, type, value);
        this.EnumType = etype;
    }
    get Size() {
        return this.Value.length + this.Type.length + this.Name.length + this.EnumType.length + 25;
    }
    static from(obj) {
        let prop = new EnumProperty();
        Object.assign(prop, obj);
        return prop;
    }
}