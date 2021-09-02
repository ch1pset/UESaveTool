import { PropertyFactory } from './factories/index.js';
import { SerializationError } from './PropertyErrors.js';
import { GvasDesesrializer } from '../utils/index.js';
import { GvasHeader } from './index.js';
import { Tuple } from './properties/index.js';

export class Gvas {
    constructor()
    {
        this.Header = new GvasHeader();
        this.Properties = new Tuple();
    }
    get Size() {
        let size = this.Header.Size;
        size += this.Properties.Size;
        size += 4;
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
        let props = {
            Name: this.Header.SaveGameType,
            Type:'Tuple',
            Properties:sav.readProperties()
        }
        this.Properties = PropertyFactory.create(props);
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = 0;
        offset += this.Header.serialize().copy(buf, offset);
        offset += this.Properties.serialize().copy(buf, offset);
        offset += 4;
        if(offset !== this.Size)
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
