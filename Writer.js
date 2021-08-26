import { FileIO, dword, word } from './index.js'

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
            // console.log(JSON.stringify(props[i]));
            if(props[i]['name'] !== null)
                this.writeProperty(props[i]);
            else
                this.writeString('');
        }
        this.writeString('None\0');
    }
    writeArrayItems(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i]['value'].length; j++) {
                let item = arr[i]['value'][j];
                if(item['name'] !== null)
                    this.writeProperty(item);
                else
                    this.write(Buffer.alloc(4));
            }
            this.writeString('None\0');
        }
    }
    writeProperty(prop) {
        this.writeString(prop['name']);
        this.writeString(prop['type']);
        switch(prop.type)
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
                this.writeInt32(prop['value'].length + 4);
                this.write(Buffer.alloc(5));
                this.writeString(prop['value']);
                break;
            case 'SoftObjectProperty\0':
                this.writeInt32(prop['value'].length + 8);
                this.write(Buffer.alloc(5));
                this.writeString(prop['value']);
                break;

            case 'StructProperty\0':
                this.writeInt32(prop['value']['size']);
                this.write(Buffer.alloc(4));
                this.writeString(prop['value']['type']);
                this.write(Buffer.alloc(17));
                this.writeProperties(prop['value']['properties']);
                break;

            case 'ArrayProperty\0':
                this.writeInt32(prop['value']['size']);
                this.write(Buffer.alloc(4));
                this.writeString(prop['value']['type']);
                this.writeInt32(prop['value']['unkown']);
                this.write(Buffer.alloc(1));
                this.writeString(prop['value']['name']);
                this.writeString(prop['value']['array']['type']);
                this.writeInt32(prop['value']['array']['size']);
                this.write(Buffer.alloc(4));
                this.writeString(prop['value']['array']['name']);
                this.write(Buffer.alloc(17));
                // console.log(JSON.stringify(prop['value']['array']));
                this.writeArrayItems(prop['value']['array']['data']);
                break;

            case 'EnumProperty\0':
                console.log(`Enum Prop: ${JSON.stringify(prop)}`);
                this.writeInt32(4);
                this.write(Buffer.alloc(4));
                this.writeString(prop['value']['type']);
                this.write(Buffer.alloc(1));
                this.writeString(prop['value']['value']);
                break;
                
            default:
                throw new Error(`Unrecognized Property: ${prop['type']}`);
        }
    }
}