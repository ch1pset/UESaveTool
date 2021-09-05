import { SerializationError } from './index.js';
import { PropertyFactory } from './factories/index.js'

export class GvasHeader {
    constructor() {
        this.Format = 'GVAS';
        this.SaveGameVersion = 0;
        this.PackageVersion = 0;
        this.EngineVersion = {
            Major: 0,
            Minor: 0,
            Patch: 0,
            Build: 0,
            BuildId: ""
        }
        this.CustomFormatVersion = 0;
        this.CustomFormatData = {
            Count: 0,
            Entries: []
        }
        this.SaveGameType = "";
    }
    get Size() {
        let size = this.Format.length;
        size += 18;
        size += this.EngineVersion.BuildId.length + 4;
        size += 8;
        this.CustomFormatData.Entries.forEach(guid => {
            size += guid.Size; // 20
        })
        size += this.SaveGameType.length + 4;
        return size;
    }
    deserialize(bfs) {
        this.SaveGameVersion = bfs.readInt32();
        this.PackageVersion = bfs.readInt32();
        this.EngineVersion.Major = bfs.readInt16();
        this.EngineVersion.Minor = bfs.readInt16();
        this.EngineVersion.Patch = bfs.readInt16();
        this.EngineVersion.Build = bfs.readInt32();
        this.EngineVersion.BuildId = bfs.readString();
        this.CustomFormatVersion = bfs.readInt32();
        this.CustomFormatData.Count = bfs.readInt32();
        for (let i = 0; i < this.CustomFormatData.Count; i++) {
            let guid = PropertyFactory.create({ Type: 'Guid' })
            this.CustomFormatData.Entries.push(guid.deserialize(bfs));
        }
        this.SaveGameType = bfs.readString();
        return this;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        let offset = Buffer.from(this.Format).copy(buf, 0);
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
        if (offset != this.Size)
            throw SerializationError(this);
        return buf;
    }
    static from(obj) {
        let header = new GvasHeader();
        header.SaveGameVersion = obj.SaveGameVersion;
        header.PackageVersion = obj.PackageVersion;
        header.EngineVersion = obj.EngineVersion;
        header.CustomFormatVersion = obj.CustomFormatVersion;
        header.CustomFormatData.Count = obj.CustomFormatData.Count;
        obj.CustomFormatData.Entries.forEach(guid => {
            header.CustomFormatData.Entries.push(PropertyFactory.create(guid));
        });
        header.SaveGameType = obj.SaveGameType;
        return header;
    }
}