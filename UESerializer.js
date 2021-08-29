import { Buffer } from 'buffer';
import { Gvas } from './models/index.js';
import { Writer } from './utils/index.js';

function UESerializer() 
{
    const gvas = Gvas.fromFile(process.argv[2]);
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
        io.writeProperties(gvas.Properties);
        io.write(Buffer.alloc(4));
    }
    catch(e) {
        console.log(e);
    }
    finally {
        io.close();
        console.log('Done.');
    }
}

__MAIN:
UESerializer();