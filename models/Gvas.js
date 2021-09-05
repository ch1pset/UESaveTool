import { PropertyFactory } from './factories/index.js';
import { SerializationError } from './PropertyErrors.js';
import { GvasHeader } from './index.js';
import { Tuple } from './properties/index.js';

export class Gvas {
    constructor() {
        this.Header = new GvasHeader();
        this.Properties = new Tuple();
    }
    get Size() {
        let size = this.Header.Size;
        size += this.Properties.Size;
        size += 4;
        return size;
    }
    deserialize(bfs) {
        let format = bfs.read(4);
        if (Buffer.compare(Buffer.from('GVAS'), format) !== 0)
            throw Error(`Unexpected header, expected 'GVAS`)

        this.Header.deserialize(bfs);
        this.Properties.Name = this.Header.SaveGameType;
        this.Properties.deserialize(bfs);
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        offset += this.Header.serialize().copy(buf, offset);
        offset += this.Properties.serialize().copy(buf, offset);
        offset += 4;
        if (offset !== this.Size)
            throw new SerializationError(this);
        return buf;
    }
    static from(obj) {
        let gvas = new Gvas();
        gvas.Header = GvasHeader.from(obj.Header);
        gvas.Properties = PropertyFactory.create(obj.Properties);
        return gvas;
    }
}
