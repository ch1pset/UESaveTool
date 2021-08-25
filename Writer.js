import * as FileIO from './FileIO.js'

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
    writeProperties(props) {
        for(let i = 0; i < props.length; i++) {
            if(prop[i]['name'] !== null)
                this.writeProperty(prop[i]);
            else
                this.writeString('');
        }
        this.writeString('None\0');
    }
    writeProperty(prop) {
        this.writeString(prop['type']);
        switch(prop['type'])
        {
            case 'BoolProperty\0':
                this.writeInt32(1);
                this.write(Buffer.from(prop['value'] ? 1 : 0, 0, 1));
                this.write(Buffer.alloc(1));
                break;
            case 'IntProperty\0':
                this.writeInt32(4);
                this.write(Buffer.alloc(5));
                this.writeInt32(prop['value']);
                break;
            case 'FloatProperty\0':
                this.writeInt32(4);
                this.write(Buffer.alloc(5));
                this.writeFloat(prop['value']);
                break;
            case 'StrProperty\0':
            case 'ObjectProperty\0':
            case 'SoftObjectProperty\0':
                this.writeInt32(prop['value'].length);
                this.write(Buffer.alloc(5));
                this.writeString(prop['value']);
                break;
            case 'StructProperty\0':
                this.writeInt32(prop['size']);
                this.write(Buffer.alloc(4));
                this.writeString(prop['value']['type']);
                this.write(Buffer.alloc(17));
                this.writeProperties(prop['value']['properties']);
                break;
            case 'ArrayProperty\0':
                this.writeInt32(prop['size']);
                this.write(Buffer.alloc(4));
                this.writeString(prop['type']);
                this.writeInt32();
                break;
            case 'EnumProperty\0':
                break;
            default:
                throw new Error(`Unrecognized Property: ${prop['type']}`);
        }
    }
}