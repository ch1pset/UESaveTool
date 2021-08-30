import { Buffer } from 'buffer'
import { Property } from './index.js'

export class Guid extends Property {
    constructor(id, guid) {
        super();
        this.Id = id;
        this.Value = guid;
    }
    serialize() {
        let guid = this.Id.split('-');
        let value = Buffer.alloc(4);
        value.writeInt32LE(this.Value);
        return Buffer.concat([
            Buffer.from(guid[0], 'hex').swap32(),
            Buffer.from(guid[1], 'hex').swap16(), 
            Buffer.from(guid[2], 'hex').swap16(), 
            Buffer.from(guid[3], 'hex'),
            Buffer.from(guid[4], 'hex'),
            value
        ]);
    }
    static from(obj) {
        return new Guid(obj.Id, obj.Value);
    }
}
