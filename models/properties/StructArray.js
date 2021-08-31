import { Property, TupleProperty } from './index.js'
import { SerializationError } from '../index.js';

export class StructArray extends Property {
    constructor(name, type, prop, stype) {
        super(name, type, prop);
        this.StoredPropertyType = stype;
    }
    get Size() {
        let size = this.Name.length + 4;
        size += this.Type.length + 4;
        size += 8; // 4 byte size + 4 byte padding
        size += this.StoredPropertyType.length + 4;
        size += 17;
        for(let i = 0; i < this.Property.length; i++) {
            size += this.Property[i].Size;
        }
        return size;
    }
    get HeaderSize() {
        let size = this.Name.length + 4;
        size += this.Type.length + 4;
        size += 8; // 4 byte size + 4 byte padding
        size += this.StoredPropertyType.length + 4;
        size += 17;
        return size;
    }
    get Length() {
        return this.Property.length;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        offset = buf.writeInt32LE(this.Name.length, offset);
        offset += buf.write(this.Name, offset);
        offset = buf.writeInt32LE(this.Type.length, offset);
        offset += buf.write(this.Type, offset);
        offset = buf.writeInt32LE(this.Size - this.HeaderSize, offset);
        offset += 4;
        offset = buf.writeInt32LE(this.StoredPropertyType.length, offset);
        offset += buf.write(this.StoredPropertyType, offset);
        offset += 17;
        for(let i = 0; i < this.Property.length; i++) {
            offset += this.Property[i].serialize().copy(buf, offset);
        }
        console.log(`Expected size: ${this.Size} Actual Size: ${offset}`)
        if(offset !== this.Size)
            throw new SerializationError(this);
        console.log(`Successfully serialized ${StructArray.name}`)
        return buf;
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