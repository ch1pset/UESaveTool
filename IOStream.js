import { fs, Buffer } from './index.js'

const dword = Buffer.alloc(4);
const word = Buffer.alloc(2);
const byte = Buffer.alloc(1);

export class Reader {
    constructor() {
        this._fd = 0;
        this._pos = 0;
    }

    get fd() {
        return this._fd;
    }

    get pos() {
        return this._pos;
    }

    seek(numBytes) {
        return (this._pos += numBytes);
    }

    open(path) {
        this._fd = fs.openSync(path);
    }
    close() {
        fs.closeSync(this._fd);
    }
    readBytes(count) {
        let buf = Buffer.alloc(count);
        this.seek(fs.readSync(this._fd, buf, 0, count, this._pos));
        return buf;
    }

    readByte() {
        this.seek(fs.readSync(this._fd, byte, 0, 1, this._pos));
        return byte.readUInt8();
    }

    readInt32() {
        this.seek(fs.readSync(this._fd, dword, 0, 4, this._pos));
        return dword.readInt32LE();
    }

    readInt16() {
        this.seek(fs.readSync(this._fd, word, 0, 2, this._pos));
        return word.readUInt16LE();
    }

    readFloat() {
        this.seek(fs.readSync(this._fd, dword, 0, 4, this._pos));
        return dword.readFloatLE();
    }

    readString() {
        this.seek(fs.readSync(this._fd, dword, 0, 4, this._pos));
        let length = dword.readInt32LE();
        let buf = Buffer.alloc(length);

        this.seek(fs.readSync(this._fd, buf, 0, length, this._pos));
        return buf.toString('utf8');
    }

    readGuid() {
        this.seek(fs.readSync(this._fd, dword, 0, 4, this._pos));
        dword.swap32();
        let guid = `${dword.toString('hex')}`;

        this.seek(fs.readSync(this._fd, word, 0, 2, this._pos));
        word.swap16();
        guid += `-${word.toString('hex')}`;

        this.seek(fs.readSync(this._fd, word, 0, 2, this._pos));
        word.swap16();
        guid += `-${word.toString('hex')}`;

        this.seek(fs.readSync(this._fd, word, 0, 2, this._pos));
        guid += `-${word.toString('hex')}`;

        let buf = Buffer.alloc(6);
        this.seek(fs.readSync(this._fd, buf, 0, 6,this. _pos));
        guid += `-${buf.toString('hex')}`;

        return guid;
    }

    readProperties()
    {
        let data = {};
        while(true) {
            let next = this.readString();
            if(next === 'None\0')
                break;
            if(next !== '')
            {
                data[next] = this.readProperty(next);
                // console.log(`Prop: ${JSON.stringify(data[next])}`);
            }
        }
        return data;
    }

    readProperty(name) {
        // console.log(`Checking Property: ${name}`);
        let type = this.readString();
        // console.log(`Checking Type: ${type}`);
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
                // console.log(`Current Offset: ${this.pos}`);
                length = this.readInt32();
                this.seek(4);
            
                let structType = this.readString();
                this.readInt32();
                this.seek(1);

                let arrayName = this.readString();

                let itemType = this.readString();
                length = this.readInt32();
                let start = this.pos;
                this.seek(4);

                let itemName = this.readString();
                this.seek(17);

                let array = [];
                while(this.pos < (start + length)) {
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
                value = {'type':eType, 'value':this.readBytes(length).toString('utf8')};
                break;
            default:
                throw new Error(`Unrecognized Property: ${type}`);
        }
        return {'name': name, 'type':type, 'value':value};
    }
}

export class Writer {
    //TODO: Write Serialized data to .sav file
}
