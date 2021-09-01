import { Property } from './index.js'
import { PropertyFactory } from '../factories/index.js';
import { SerializationError } from '../index.js';

export class Tuple extends Property {
    constructor() {
        super();
        this.Type = 'Tuple';
        this.Properties = [];
    }
    get Size() {
        let size = 0;
        for(let i = 0; i < this.Properties.length; i++) {
            size += this.Properties[i].Size;
        }
        size += 9;
        return size;
    }
    get Count() {
        console.log(this.Properties.length);
        return this.Properties.length;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        for(let i = 0; i < this.Properties.length; i++) {
            offset += this.Properties[i].serialize().copy(buf, offset)
        }
        offset = buf.writeInt32LE(5, offset);
        offset += buf.write('None\0', offset);
        if(offset !== this.Size)
            throw new SerializationError(this);
        return buf
    }
    static from(obj) {
        let tuple = new Tuple();
        tuple.Name = obj.Name;
        obj.Properties.forEach(prop => tuple.Properties.push(PropertyFactory.create(prop)));
        return tuple;
    }
}