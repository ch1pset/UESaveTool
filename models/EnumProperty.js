import { Property } from './index.js';

export class EnumProperty extends Property {
    constructor(name, type, prop, etype) {
        super(name, type, prop);
        this.EnumType = etype;
    }
    get Size() {
        return this.Name.length + 4 
            + this.Type.length + 4 
            + this.Property.length + 4 
            + this.EnumType.length + 4
            + 13;
    }
    static from(obj) {
        let prop = new EnumProperty();
        Object.assign(prop, obj);
        return prop;
    }
}