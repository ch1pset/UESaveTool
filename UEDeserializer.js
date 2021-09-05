import * as fs from 'fs';
import { Gvas } from './index.js';
import { BufferStream } from './utils/BufferStream.js';

function UEDeserializer() {
    fs.readFile(process.argv[2], (err, buf) => {
        if (err) throw err;

        const gvas = new Gvas();
        const bfs = new BufferStream(buf);
        try {
            gvas.deserialize(bfs);
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