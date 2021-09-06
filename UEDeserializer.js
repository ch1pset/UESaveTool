import * as fs from 'fs';
import { Gvas, Serializer } from './index.js';

function UEDeserializer() {
    fs.readFile(process.argv[2], (err, buf) => {
        if (err) throw err;

        const gvas = new Gvas();
        const serial = new Serializer(buf);
        try {
            gvas.deserialize(serial);
            fs.writeFile(process.argv[3], JSON.stringify(gvas, null, 2), (err) => {
                if (err) throw err;
            });
        } catch (e) {
            console.log(e);
        } finally {
            console.log('Done.');
        }
    })
}

__MAIN:
UEDeserializer();