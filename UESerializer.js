import * as fs from 'fs';
import { Gvas } from './index.js';

function UESerializer() 
{
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if(err) throw err;

        const gvas = Gvas.from(JSON.parse(data));
        try {
            fs.writeFile(process.argv[3], gvas.serialize(), (err) => {
                if(err) throw err;
            });
        }
        catch(e) {
            console.log(e);
        }
        finally {
            console.log('Done.');
        }
    })
}

__MAIN:
UESerializer();