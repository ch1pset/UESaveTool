import { Property } from './index.js'

export class SoftObjectProperty extends Property {
    constructor() {
        super();
        this.Property = "";
    }
    get Size() {
        return this.Name.length + 4
            + this.Type.length + 4
            + this.Property.length + 4
            + 13;
    }
    deserialize(bfs) {
        bfs.seek(5);
        this.Property = bfs.readString();
        bfs.seek(4);
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        offset = buf.writeInt32LE(this.Name.length, offset);
        offset += buf.write(this.Name, offset);
        offset = buf.writeInt32LE(this.Type.length, offset);
        offset += buf.write(this.Type, offset);
        offset = buf.writeInt32LE((this.Property.length + 8), offset);
        offset += 5;
        offset = buf.writeInt32LE(this.Property.length, offset);
        offset += buf.write(this.Property, offset);
        offset += 4;
        if (offset !== this.Size)
            throw new Error(`Problem occured during serialization of Property: ${this}`);
        return buf;
    }
    static from(obj) {
        let prop = new SoftObjectProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
