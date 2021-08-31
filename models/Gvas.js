import { PropertyFactory } from './factories/index.js';
import { Guid } from './properties/index.js';
import { SerializationError } from './PropertyErrors.js';
import { GvasDesesrializer } from '../utils/index.js';

export class Gvas {
    constructor()
    {
        this.Header = 'GVAS';
        this.SaveGameVersion = 0;
        this.PackageVersion = 0;
        this.EngineVersion = {
            Major:0,
            Minor:0,
            Patch:0,
            Build:0, 
            BuildId:""
        }
        this.CustomFormatVersion = 0;
        this.CustomFormatData = {
            Count:0,
            Entries:[]
        }
        this.SaveGameType = "";
        this.Properties = [];
    }
    get Size() {
        let size = this.Header.length;
        size += 18;
        size += this.EngineVersion.BuildId.length + 4;
        size += 8;
        this.CustomFormatData.Entries.forEach(guid => {
            size += guid.Size; // 20
        })
        size += this.SaveGameType.length + 4;
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

        this.SaveGameVersion = sav.readInt32();
        this.PackageVersion = sav.readInt32();
        this.EngineVersion = sav.readEngineVersion();
        this.CustomFormatVersion = sav.readInt32();
        this.CustomFormatData.Count = sav.readInt32();
        for(let i = 0; i < this.CustomFormatData.Count; i++)
            this.CustomFormatData.Entries.push(sav.readGuid());
        this.SaveGameType = sav.readString();
        this.Properties = sav.readProperties();
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = Buffer.from(this.Header).copy(buf, 0);
        offset = buf.writeInt32LE(this.SaveGameVersion, offset);
        offset = buf.writeInt32LE(this.PackageVersion, offset);
        offset = buf.writeInt16LE(this.EngineVersion.Major, offset);
        offset = buf.writeInt16LE(this.EngineVersion.Minor, offset);
        offset = buf.writeInt16LE(this.EngineVersion.Patch, offset);
        offset = buf.writeInt32LE(this.EngineVersion.Build, offset);
        offset = buf.writeInt32LE(this.EngineVersion.BuildId.length, offset);
        offset += buf.write(this.EngineVersion.BuildId, offset);
        offset = buf.writeInt32LE(this.CustomFormatVersion, offset);
        offset = buf.writeInt32LE(this.CustomFormatData.Count, offset);
        this.CustomFormatData.Entries.forEach(guid => {
            offset += guid.serialize().copy(buf, offset);
        });
        offset = buf.writeInt32LE(this.SaveGameType.length, offset);
        offset += buf.write(this.SaveGameType, offset);
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
        gvas.SaveGameVersion = obj.SaveGameVersion;
        gvas.PackageVersion = obj.PackageVersion;
        gvas.EngineVersion = obj.EngineVersion;
        gvas.CustomFormatVersion = obj.CustomFormatVersion;
        gvas.CustomFormatData.Count = obj.CustomFormatData.Count;
        obj.CustomFormatData.Entries.forEach(guid => gvas.CustomFormatData.Entries.push(Guid.from(guid)))
        gvas.SaveGameType = obj.SaveGameType;
        gvas.Properties = [];
        obj.Properties.forEach((prop) => gvas.Properties.push(PropertyFactory.create(prop)));
        return gvas;
    }
}
