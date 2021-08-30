import { Property, TupleProperty } from './index.js'

export class StructArray extends Property {
    constructor(name, type, prop, stype) {
        super(name, type, prop);
        this.StoredPropertyType = stype;
    }
    get Size() {
        let size = 0;
        for(let i = 0; i < this.Property.length; i++) {
            size += this.Property[i].Size;
            size += 9; // 4 bit padding + 5 bit string: 'None\0'
        }
        return size;
    }
    serialize() {
        let buf = []
        for(let i = 0; i < this.Property.length; i++) {
            buf.push(this.Property[i].serialize());
        }
        return Buffer.concat(buf);
    }
    static from(obj) {
        let struct = new StructArray();
        struct.Name = obj.Name;
        struct.Type = obj.Type;
        struct.StoredPropertyType = obj.StoredPropertyType;
        struct.Property = [];
        obj.Property.forEach((prop) => {
            struct.Property.push(TupleProperty.from(prop));
        });
        return struct;
    }
}