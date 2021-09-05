import { PropertyFactory } from './factories/index.js';
import { SerializationError } from './PropertyErrors.js';
import { GvasHeader } from './index.js';
import { Tuple } from './properties/index.js';
import { Serializer } from '../utils/Serializer.js';

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
    deserialize(serial) {
        let format = serial.read(4);
        if (Buffer.compare(Buffer.from('GVAS'), format) !== 0)
            throw Error(`Unexpected header, expected 'GVAS`)

        this.Header.deserialize(serial);
        this.Properties.Name = this.Header.SaveGameType;
        this.Properties.deserialize(serial);
        return this;
    }
    serialize() {
        let serial = Serializer.alloc(this.Size);
        serial.write(this.Header.serialize());
        serial.write(this.Properties.serialize());
        serial.seek(4);
        if (serial.tell !== this.Size)
            throw new SerializationError(this);
        return serial.Data;
    }
    static from(obj) {
        let gvas = new Gvas();
        gvas.Header = GvasHeader.from(obj.Header);
        gvas.Properties = PropertyFactory.create(obj.Properties);
        return gvas;
    }
}
