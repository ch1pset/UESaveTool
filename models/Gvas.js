import { PropertyFactory } from './factories/index.js';
import { SerializationError } from './PropertyErrors.js';
import { GvasDesesrializer } from '../utils/index.js';
import { GvasHeader } from './index.js';

export class Gvas {
    constructor()
    {
        this.Header = new GvasHeader();
        this.Properties = [];
    }
    get Size() {
        let size = this.Header.Size;
        this.Properties.forEach(prop => {
            size += prop.Size;
        })
        size += 13; // 4 byte size + 5 byte string 'None\0' + 4 byte padding
        return size;
    }
    deserialize(buf) {
        let sav = new GvasDesesrializer(buf);
        let header = sav.read(4);
        if(Buffer.compare(Buffer.from('GVAS'), header) !== 0)
            throw Error(`Unexpected header, expected 'GVAS`)

        this.Header.SaveGameVersion = sav.readInt32();
        this.Header.PackageVersion = sav.readInt32();
        this.Header.EngineVersion = sav.readEngineVersion();
        this.Header.CustomFormatVersion = sav.readInt32();
        this.Header.CustomFormatData.Count = sav.readInt32();
        for(let i = 0; i < this.Header.CustomFormatData.Count; i++)
            this.Header.CustomFormatData.Entries.push(sav.readGuid());
        this.Header.SaveGameType = sav.readString();
        this.Properties = sav.readProperties();
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        offset += this.Header.serialize().copy(buf, offset);
        this.Properties.forEach(prop => {
            offset += prop.serialize().copy(buf, offset);
        })
        offset = buf.writeInt32LE(5, offset);
        offset += buf.write('None\0', offset);
        offset += 4;
        if(offset !== this.Size)
            throw new SerializationError(this);
        return buf;
    }
    static from(obj) {
        let gvas = new Gvas();
        gvas.Header = GvasHeader.from(obj.Header);
        gvas.Properties = [];
        obj.Properties.forEach((prop) => gvas.Properties.push(PropertyFactory.create(prop)));
        return gvas;
    }
}
