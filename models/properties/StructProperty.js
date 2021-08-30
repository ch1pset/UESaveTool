import { Property } from './index.js'
import { PropertyFactory } from '../factories/index.js';

export class StructProperty extends Property {
    constructor(name, type, prop, stype) {
        super(name, type, prop);
        this.StoredPropertyType = stype;
    }
    get Size() {
        let size = 9;
        size += this.Name.length + 4;
        size += this.Type.length + 4;
        size += 8;
        size += this.StoredPropertyType.length + 4;
        size += 17;
        // console.log(this);
        for(let i = 0; i < this.Property.length; i++) {
            size += this.Property[i].Size;
            // size += 9;
        }
        return size;
    }
    get HeaderSize() {
        let size = 4;
        size += this.Name.length + 4;
        size += this.Type.length + 4;
        size += 8;
        size += this.StoredPropertyType.length + 4;
        size += 17;
        return size
    }
    get PropertiesSize() {
        let size = 0;
        for(let i = 0; i < this.Property.length; i++) {
            size += this.Property[i].Size;
            // size += 9;
        }
        return size;
    }
    static from(obj) {
        let struct = new StructProperty();
        struct.Name = obj.Name;
        struct.Type = obj.Type;
        struct.StoredPropertyType = obj.StoredPropertyType;
        struct.Property = [];
        obj.Property.forEach((prop) => struct.Property.push(PropertyFactory.create(prop)));
        return struct;
    }
}
