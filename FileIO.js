import { fs, Buffer } from './index.js'

export const dword = Buffer.alloc(4);
export const word = Buffer.alloc(2);
export const byte = Buffer.alloc(1);

export class FileIO {
    constructor() {
        this._fd = 0;
        this._pos = 0;
    }
    get fd() { return this._fd; }
    get tell() { return this._pos; }
    seek(numBytes) {
        return (this._pos += numBytes);
    }
    open(path) {
        if(!fs.existsSync(path))
            fs.writeFileSync(path, '');    
        this._fd = fs.openSync(path, 'r+');
    }
    close() {
        fs.closeSync(this.fd);
    }
    read(buf) {
        this.seek(fs.readSync(this.fd, buf, 0, buf.length, this.tell));
    }
    write(buf) {
        this.seek(fs.writeSync(this.fd, buf, 0, buf.length, this.tell));
    }
}
