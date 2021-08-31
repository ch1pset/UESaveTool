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
            io.write(gvas.serialize());
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