import { Property } from './index.js'
import { BufferStream } from '../../utils/index.js';

export class BoolProperty extends Property {
    constructor() {
        super();
        this.Property = false;
    }
    get Size() {
        return this.Name.length + 4
            + this.Type.length + 4
            + 10;
    }
    deserialize(bfs) {
        bfs.seek(4);
        this.Property = bfs.readUInt8() === 1;
        bfs.seek(1);
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        offset = buf.writeInt32LE(this.Name.length, offset);
        offset += buf.write(this.Name, offset);
        offset = buf.writeInt32LE(this.Type.length, offset);
        offset += buf.write(this.Type, offset);
        offset += 8
        offset = buf.writeUInt8(this.Property === true ? 1 : 0, offset);
        offset += 1;
        if (offset !== this.Size)
            throw new Error(`Problem occured during serialization of Property: ${this}`);
        return buf;
    }
    static from(obj) {
        let prop = new BoolProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
