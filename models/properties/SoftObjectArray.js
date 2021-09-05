import { Property } from './index.js'
import { SerializationError } from '../index.js';

export class SoftObjectArray extends Property {
    constructor() {
        super();
        this.Type = "SoftObjectArray";
        this.Properties = [];
    }
    get Size() {
        let size = 8;
        this.Properties.forEach((str) => {
            size += str.length + 4;
        });
        return size;
    }
    get Count() {
        return this.Properties.length;
    }
    deserialize(bfs, size) {
        for (let i = 0; i < size[1]; i++) {
            this.Properties.push(bfs.readString());
            bfs.seek(4);
        }
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        this.Properties.forEach(str => {
            offset = buf.writeInt32LE(str.length, offset);
            offset += buf.write(str, offset);
            offset += 4;
        });
        if (offset !== this.Size)
            throw new SerializationError(this);
        return buf;
    }
    static from(obj) {
        let array = new SoftObjectArray();
        if (obj.Properties !== undefined)
            array.Properties = obj.Properties;
        return array;
    }
}