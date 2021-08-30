import { Property } from './index.js'

export class SoftObjectArray extends Property {
    constructor(properties) {
        super();
        this.Properties = properties;
    }
    get Size() {
        let size = 4;
        this.Properties.forEach((str) => {
            size += str.length + 4;
        });
        return size;
    }
    serialize() {
        let buf = Buffer.alloc(this.size);
        let offset = 0;
        this.Properties.forEach(str => {
            offset = buf.writeInt32LE(str.length, offset);
            offset += buf.write(str, offset);
            offset += 4;
        });
        offset += 4;
        if(offset !== this.Size)
            throw new Error(`Problem occured during serialization of Property: ${this}`);
        return buf;
    }
    static from(obj) {
        return new SoftObjectArray(obj.Properties);
    }
}