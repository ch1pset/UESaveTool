import { Property } from './index.js'
import { PropertyFactory } from '../factories/index.js'
import { SerializationError } from '../index.js';

export class IntArray extends Property {
    constructor() {
        super();
        this.Type = "IntArray"
        this.Properties = [];
    }
    get Size() {
        let size = this.Properties.length > 1 ? 8 : 4;
        this.Properties.forEach((int) => {
            size += int.Size
        });
        return size;
    }
    get Count() {
        return this.Properties.length;
    }
    deserialize(bfs, size) {
        bfs.seek((size[1] > 1) ? 8 : 4);
        for (let i = 0; i < size[1]; i++) {
            let Name = bfs.readString();
            let Type = bfs.readString();
            let Size = bfs.readInt32();
            let prop = PropertyFactory.create({ Name, Type });
            prop.deserialize(bfs);
            this.Properties.push(prop);
        }
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = this.Properties.length > 1 ? 8 : 4;
        this.Properties.forEach(int => offset += int.serialize().copy(buf, offset));
        if (offset !== this.Size)
            throw new SerializationError(this);
        return buf;
    }
    static from(obj) {
        let array = new IntArray();
        if (obj.Properties !== undefined)
            obj.Properties.forEach(int => array.Properties.push(PropertyFactory.create(int)));
        return array;
    }
}