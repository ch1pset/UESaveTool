import * as fs from 'fs';
import { Gvas } from '../index.js';
import { Serializer } from '../utils/index.js';

fs.readFile('./ContinueStateV2.sav', (err, buf) => {
    if (err) throw err;

    const gvas = new Gvas();
    const deserializer = new Serializer(buf);
    try {
        gvas.deserialize(deserializer);
        // fs.writeFileSync('./output.json', JSON.stringify(gvas, null, 2));

        let out = gvas.serialize();
        // fs.writeFileSync('./output.sav', out);

        let c = 0;
        for(let i = gvas.Header.Size; i < out.length; i++) {
            if(buf.at(i) !== out.at(i)) {
                console.log(`Error at offset 0x${i.toString(16)} : Expected: ${buf.at(i).toString(16)} Got: ${out.at(i).toString(16)}`)
                c++;
            }
        }
        if(c === 0)
            console.log('Success!');
        else 
            console.log('Failure!');

    } catch (e) {
        console.log(e);
    } finally {
        console.log('Done.');
    }
})