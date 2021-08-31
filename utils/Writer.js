import { Buffer } from 'buffer';
import { FileIO, dword, word } from './index.js';

export class Writer extends FileIO {
    constructor() {
        super();
    }
    writeInt32(num) {
        dword.writeInt32LE(num);
        this.write(dword);
    }
    writeInt16(num) {
        word.writeInt16LE(num);
        this.write(word);
    }
    writeFloat(num) {
        dword.writeFloatLE(num);
        this.write(dword);
    }
    writeString(str) {
        let buf = Buffer.from(str);
        dword.writeInt32LE(str.length);
        this.write(dword);
        this.write(buf);
    }
}