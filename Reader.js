import { FileIO, dword, word, byte } from './index.js'

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
            } else {
                data.push({'name':null})
                // console.log(`Empty String at offset: ${this.tell}`);
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
                console.log(`Struct length: ${length} bytes`);
                this.seek(4);
                let sType = this.readString();
                this.seek(17);
                value = {'size':length,'type':sType, 'properties':this.readProperties()};
                break;
            case 'ArrayProperty\0':
                length = this.readInt32();
                let structSize = length;
                this.seek(4);
            
                let structType = this.readString();
                let someValue = this.readInt32();
                this.seek(1);

                let arrayName = this.readString();

                let itemType = this.readString();
                length = this.readInt32();
                console.log(`Array Size: ${length}`);
                let start = this.tell;
                this.seek(4);

                let itemName = this.readString();
                this.seek(17);

                let array = {'size':length, 'type':itemType, 'name':itemName, 'data':[]};
                while(this.tell < (start + length)) {
                    let props = this.readProperties();
                    if(props) {
                        array.data.push({'value':props});
                    }
                }
                console.log(`Array read has ${array.data.length} items`);
                value = {
                    'size':structSize,
                    'type':structType,
                    'unkown':someValue,
                    'name':arrayName,
                    'array':array
                }
                break;
            case 'EnumProperty\0':
                length = this.readInt32();
                this.seek(4);
                let etype = this.readString(); //same as type
                this.seek(1);
                value = {'type':etype, 'value':this.readString()};
                // console.log(`Prop: {${name}, ${type}, ${value}, ${etype}}`);
                break;
            default:
                throw new Error(`Unrecognized Property: ${type}`);
        }
        return {'name': name, 'type':type, 'value':value};
    }
}