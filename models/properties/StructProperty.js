import { Property } from './index.js'
import { PropertyFactory } from '../factories/index.js';

export class StructProperty extends Property {
    constructor(name, type, prop, stype) {
        super(name, type, prop);
        this.StoredPropertyType = stype;
    }
    get Size() {
        let size = 0;
        // size += this.StoredPropertyType.length + 4;
        for(let i = 0; i < this.Property.length; i++) {
            if(this.Property[i].Type === 'ArrayProperty\0') {
                // console.log(this.Property[i].Size);
                size += this.Property[i].Name.length + 4;
                size += this.Property[i].Type.length + 4;
                size += this.Property[i].StoredPropertyType.length + 4;
                size += 9;
            }
            size += this.Property[i].Size;
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
