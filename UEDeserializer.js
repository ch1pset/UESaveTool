import * as fs from 'fs';
import { Buffer } from 'buffer';
import { Gvas } from './models/index.js';
import { GvasDesesrializer } from './utils/index.js';

function UEDeserializer()
{
    fs.readFile(process.argv[2], (err, buf) => {
        if(err) throw err;

        const gvas = new Gvas();
        const sav = new GvasDesesrializer(buf);
        try {
            gvas.deserialize(sav);
    
            fs.writeFileSync('./output.json', JSON.stringify(gvas, null, 4));
            // console.log(Gvas.fromFile('./output.json'));
        } catch(e) {
            console.log(e);
        } finally {
            // io.close();
            console.log('Done.');
        }
    })
}

__MAIN:
UEDeserializer();