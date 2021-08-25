import { fs, Buffer, argv, Reader } from './index.js'
import { Gvas } from './Gvas.js'

function UEDeserializer()
{
    const gvas = new Gvas();
    const io = new Reader();
    try {
        io.open(argv[2]);
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
                .push({ Id:io.readGuid(), Value:io.readInt32() });
        }
        gvas.SaveGameType = io.readString();
        // console.log(`Current Offset: ${io.pos}`);
        gvas.Properties = io.readProperties();

        fs.createWriteStream('./output.json', 'utf8').write(JSON.stringify(gvas, null, 4), (err) => {
            if(err) throw err;
        });
    } catch(e) {
        console.log(e);
    } finally {
        io.close();
        console.log('Closed file');
    }
}

__MAIN:
UEDeserializer();