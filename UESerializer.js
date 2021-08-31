import { Buffer } from 'buffer';
import * as fs from 'fs';
import { Gvas } from './models/index.js';
import { Writer } from './utils/index.js';

function UESerializer() 
{
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if(err) throw err;

        const gvas = Gvas.from(JSON.parse(data));
        // console.log(gvas);
        const io = new Writer();
        try {
            io.open('./output.sav', 'w');
            io.write(Buffer.from(gvas.Header));
            io.writeInt32(gvas.SaveGameVersion);
            io.writeInt32(gvas.PackageVersion);
            io.writeInt16(gvas.EngineVersion.Major);
            io.writeInt16(gvas.EngineVersion.Minor);
            io.writeInt16(gvas.EngineVersion.Patch);
            io.writeInt32(gvas.EngineVersion.Build);
            io.writeString(gvas.EngineVersion.BuildId);
            io.writeInt32(gvas.CustomFormatVersion);
            io.writeInt32(gvas.CustomFormatData.Count);
            for(let i = 0; i < gvas.CustomFormatData.Count; i++) {
                io.writeGuid(gvas.CustomFormatData.Entries[i]['Id']);
                io.writeInt32(gvas.CustomFormatData.Entries[i]['Value']);
            }
            io.writeString(gvas.SaveGameType);
            for(let i = 0; i < gvas.Properties.length; i++) {
                io.write(gvas.Properties[i].serialize())
            }
            io.writeString('None\0');
            io.write(Buffer.alloc(4));
        }
        catch(e) {
            console.log(e);
        }
        finally {
            io.close();
            console.log('Done.');
        }
    })
}

__MAIN:
UESerializer();