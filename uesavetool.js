import * as fs from 'fs';
import { stdout } from 'process';
import { Gvas, Serializer } from './index.js';

function UESaveTool() {
    const [mode, input, output] = process.argv.slice(2);
    switch(mode) {
        case "-sav-to-json":
            fs.readFile(input, (err, buf) => {
                if (err) throw err;
        
                const gvas = new Gvas();
                const serial = new Serializer(buf);
                gvas.deserialize(serial);

                stdout.write(JSON.stringify(gvas), err => {
                    if(err) throw err;
                });
                if(output) {
                    fs.writeFile(output, JSON.stringify(gvas, null, 2), err => {
                        if(err) throw err;
                    })
                }
            })
            break;
        case "-json-to-sav":
            fs.readFile(input, 'utf8', (err, json) => {
                if(err) throw err;
                const gvas = Gvas.from(JSON.parse(json));
                const serial = Serializer.alloc(gvas.Size);
                const out_buf = gvas.serialize(serial);

                stdout.write(out_buf, err => {
                    if(err) throw err;
                })
                if(output) {
                    fs.writeFile(output, out_buf, err => {
                        if(err) throw err;
                    })
                }
            });
            break;
        default:
            console.log(`Usage: node ./uesavetool.js [mode: -sav-to-json, -json-to-sav] [input path] [output path: optional]`);
            break;
    }
}

__MAIN:
UESaveTool();