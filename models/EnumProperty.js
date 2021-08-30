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
            + 9;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        offset = buf.writeInt32LE(this.Name.length, offset);
        offset += buf.write(this.Name, offset);
        offset = buf.writeInt32LE(this.Type.length, offset);
        offset += buf.write(this.Type, offset);
        offset = buf.writeInt32LE(this.Property.length + 4, offset);
        offset += 4;
        offset = buf.writeInt32LE(this.EnumType.length, offset);
        offset += buf.write(this.EnumType, offset);
        offset += 1;
        offset = buf.writeInt32LE(this.Property.length, offset);
        offset += buf.write(this.Property, offset);
        if(offset !== this.Size)
            throw new Error(`Problem occured during serialization of Property: ${this}`);
        return buf;
    }
    static from(obj) {
        let prop = new EnumProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
