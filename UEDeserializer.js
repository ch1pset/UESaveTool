import * as fs from 'fs';
import { Gvas } from './models/index.js';

function UEDeserializer()
{
    fs.readFile(process.argv[2], (err, buf) => {
        if(err) throw err;

        const gvas = new Gvas();
        try {
            gvas.deserialize(buf);
            fs.writeFile('./output.json', JSON.stringify(gvas, null, 2), (err) => {
                if(err) throw err;
            });
        } catch(e) {
            console.log(e);
        } finally {
            console.log('Done.');
        }
    })
}

__MAIN:
UEDeserializer();