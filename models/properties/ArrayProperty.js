import { Buffer } from 'buffer'
import { Property } from './index.js'
import { ArrayFactory } from '../factories/index.js';

export class ArrayProperty extends Property {
    constructor(name, type, prop, stype) {
        super(name, type, prop);
        this.StoredPropertyType = stype;
    }
    get Size() {
        let size = 4; 
        size += this.Name.length + 4;
        size += this.Type.length + 4;
        size += 8;
        size += this.StoredPropertyType.length + 4;
        size += 5;
        size += this.Property.Size;
        return size;
    }
    get HeaderSize() {
        let size = this.Name.length + 4;
        size += this.Type.length + 4;
        size += 4;
        // size += this.StoredPropertyType.length + 4;
        // size += 5;
        return size;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        switch(this.StoredPropertyType)
        {
            case 'IntProperty\0':
            case 'SoftObjectProperty\0':
                buf = this.Property.serialize();
                break;
            case 'StructProperty\0':
                let struct = this.Property;
                offset = buf.writeInt32LE(struct.Name.length, offset);
                offset += buf.write(struct.Name, offset);
                offset = buf.writeInt32LE(struct.Type.length, offset);
                offset += buf.write(struct.Type, offset);
                
        }
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