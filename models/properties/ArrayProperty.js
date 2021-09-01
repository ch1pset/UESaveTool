import { Buffer } from 'buffer'
import { Property } from './index.js'
import { ArrayFactory } from '../factories/index.js';
import { SerializationError } from '../index.js'

export class ArrayProperty extends Property {
    constructor() {
        super();
        this.StoredPropertyType = "";
        this.Property = {};
    }
    get Size() {
        let size = 0; 
        size += this.Name.length + 4;
        size += this.Type.length + 4;
        size += 8; // 4 byte size + 4 byte padding
        size += this.StoredPropertyType.length + 4;
        size += 5; // 1 byte padding + 2 byte int + 2 byte padding
        size += this.Property.Size;
        return size;
    }
    get HeaderSize() {
        let size = this.Name.length + 4;
        size += this.Type.length + 4;
        size += 8;
        size += this.StoredPropertyType.length + 4;
        size += 1;
        return size;
    }
    get ArraySize() {
        if(this.StoredPropertyType === 'IntProperty\0')
            return 12;
        else
            return this.Size - this.HeaderSize;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        offset = buf.writeInt32LE(this.Name.length, offset);
        offset += buf.write(this.Name, offset);
        offset = buf.writeInt32LE(this.Type.length, offset);
        offset += buf.write(this.Type, offset);
        offset = buf.writeInt32LE(this.ArraySize, offset);
        offset += 4;
        offset = buf.writeInt32LE(this.StoredPropertyType.length, offset);
        offset += buf.write(this.StoredPropertyType, offset);
        offset += 1;
        offset = buf.writeInt16LE(this.Property.Count, offset);
        offset += 2;
        offset += this.Property.serialize().copy(buf, offset);
        if(offset !== this.Size)
            throw new SerializationError(this);
        return buf;
    }
    static from(obj) {
        let array = new ArrayProperty();
        array.Name = obj.Name;
        array.Type = obj.Type;
        array.StoredPropertyType = obj.StoredPropertyType;
        array.Property = ArrayFactory.create(obj);
        return array;
    }
}