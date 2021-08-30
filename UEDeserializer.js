import * as fs from 'fs';
import { Buffer } from 'buffer';
import { Gvas } from './models/index.js';
import { Reader } from './utils/index.js';
import { Guid } from './models/index.js';

function UEDeserializer()
{
    const gvas = new Gvas();
    const io = new Reader();
    try {
        io.open(process.argv[2]);
        const header = io.readBytes(4);
        if(Buffer.compare(Buffer.from(gvas.Header), header) !== 0)
            throw Error(`Unexpected header, expected ${gvas.Header}`)

        gvas.SaveGameVersion = io.readInt32();
        gvas.PackageVersion = io.readInt32();
        gvas.EngineVersion.Major = io.readInt16();
        gvas.EngineVersion.Minor = io.readInt16();
        gvas.EngineVersion.Patch = io.readInt16();
        gvas.EngineVersion.Build = io.readInt32();
        gvas.EngineVersion.BuildId = io.readString();
        gvas.CustomFormatVersion = io.readInt32();
        gvas.CustomFormatData.Count = io.readInt32();
        for (let i = 0; i < gvas.CustomFormatData.Count; i++) {
            gvas.CustomFormatData.Entries
                .push(new Guid(io.readGuid(), io.readInt32()));
        }
        gvas.SaveGameType = io.readString();
        gvas.Properties = io.readProperties();

        fs.writeFileSync('./output.json', JSON.stringify(gvas, null, 4));
        // console.log(Gvas.fromFile('./output.json'));
    } catch(e) {
        console.log(e);
    } finally {
        io.close();
        console.log('Done.');
    }
}

__MAIN:
UEDeserializer();