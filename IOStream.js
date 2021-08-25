import { fs, Buffer } from './index.js'

const dword = Buffer.alloc(4);
const word = Buffer.alloc(2);
const byte = Buffer.alloc(1);

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

export class Reader extends FileIO {
    constructor() {
        super();
    }
    readBytes(count) {
        let buf = Buffer.alloc(count);
        this.read(buf);
        return buf;
    }

    readByte() {
        this.read(byte);
        return byte.readUInt8();
    }

    readInt32() {
        this.read(dword);
        return dword.readInt32LE();
    }

    readInt16() {
        this.read(word);
        return word.readUInt16LE();
    }

    readFloat() {
        this.read(dword);
        return dword.readFloatLE();
    }

    readString() {
        this.read(dword);
        let length = dword.readInt32LE();
        let buf = Buffer.alloc(length);

        this.read(buf);
        return buf.toString('utf8');
    }

    readGuid() {
        this.read(dword);
        dword.swap32();
        let guid = `${dword.toString('hex')}`;

        this.read(word);
        word.swap16();
        guid += `-${word.toString('hex')}`;

        this.read(word);
        word.swap16();
        guid += `-${word.toString('hex')}`;

        this.read(word);
        guid += `-${word.toString('hex')}`;

        let buf = Buffer.alloc(6);
        this.read(buf);
        guid += `-${buf.toString('hex')}`;

        return guid;
    }

    readProperties()
    {
        let data = [];
        let next;
        while((next = this.readString()) !== 'None\0') {
            if(next !== '') {
                data.push(this.readProperty(next));
            }
        }
        return data;
    }

    readProperty(name) {
        let type = this.readString();
        let value, length;
        switch(type)
        {
            case 'BoolProperty\0':
                this.seek(8);
                value = this.readByte() === 0;
                this.seek(1);
                break;
            case 'IntProperty\0':
                this.seek(9);
                value = this.readInt32();
                break;
            case 'FloatProperty\0':
                this.seek(9);
                value = this.readFloat();
                break;
            case 'StrProperty\0':
            case 'ObjectProperty\0':
            case 'SoftObjectProperty\0':
                length = this.readInt32();
                this.seek(5);
                value = this.readString();
                break;
            case 'StructProperty\0':
                length = this.readInt32();
                this.seek(4);
                let sType = this.readString();
                this.seek(17);
                value = {'type':sType, 'properties':this.readProperties()};
                break;
            case 'ArrayProperty\0':
                length = this.readInt32();
                this.seek(4);
            
                let structType = this.readString();
                this.readInt32();
                this.seek(1);

                let arrayName = this.readString();

                let itemType = this.readString();
                length = this.readInt32();
                let start = this.tell;
                this.seek(4);

                let itemName = this.readString();
                this.seek(17);

                let array = [];
                while(this.tell < (start + length)) {
                    let props = this.readProperties();
                    if(props) {
                        array.push(props);
                    }
                }
                value = {
                    'type':structType,
                    'name':arrayName,
                    'array':{'type':itemType, 'name':itemName, 'data': array}
                }
                break;
            case 'EnumProperty\0':
                length = this.readInt32();
                this.seek(4);
                let eType = this.readString();
                this.seek(1);
                value = {'type':eType, 'value':this.readString()};
                break;
            default:
                throw new Error(`Unrecognized Property: ${type}`);
        }
        return {'name': name, 'type':type, 'value':value};
    }
}

export class Writer extends FileIO {
    //TODO: Write Serialized data to .sav file
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
    writeString(str) {
        let buf = Buffer.from(str);
        dword.writeInt32LE(str.length);
        this.write(dword);
        this.write(buf);
    }
    writeGuid(guid) {
        let data = guid.split('-');
        let buf1 = Buffer.from(data[0], 'hex');
        buf1.swap32();
        this.write(buf1);

        let buf2 = Buffer.from(data[1], 'hex');
        buf2.swap16();
        this.write(buf2);

        buf2 = Buffer.from(data[2], 'hex');
        buf2.swap16();
        this.write(buf2);

        buf2 = Buffer.from(data[3], 'hex');
        this.write(buf2);

        let buf3 = Buffer.from(data[4], 'hex');
        this.write(buf3);
    }
}
