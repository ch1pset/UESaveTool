import { Buffer } from 'buffer';
import { 
    FileIO, 
    dword, 
    word
} from './index.js';

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
            this.writeProperty(props[i]);
        }
        this.writeString('None\0');
    }
    writeProperty(prop) {
        this.writeString(prop.Name);
        this.writeString(prop.Type);
        switch(prop.Type)
        {
            case 'BoolProperty\0':
                this.writeInt32(1);
                this.write(Buffer.from(prop.Value ? 1 : 0, 0, 1));
                this.write(Buffer.alloc(1));
                break;

            case 'IntProperty\0':
                this.writeInt32(4);
                this.writeInt32(prop.Value[0]);
                this.write(Buffer.alloc(1));
                this.writeInt32(prop.Value[1]);
                break;

            case 'FloatProperty\0':
                this.writeInt32(4);
                this.write(Buffer.alloc(5));
                this.writeFloat(prop.Value);
                break;

            case 'StrProperty\0':
                this.writeInt32(prop.Value.length + 4);
                this.write(Buffer.alloc(5));
                this.writeString(prop.Value);
                break;
            case 'ObjectProperty\0':
                this.writeInt32(prop.Value.length + 4);
                this.write(Buffer.alloc(5));
                this.writeString(prop.Value);
                break;
            case 'SoftObjectProperty\0':
                this.writeInt32(prop.Value.length + 8);
                this.write(Buffer.alloc(5));
                this.writeString(prop.Value);
                this.write(Buffer.alloc(4));
                break;

            case 'StructProperty\0':
                // console.log(`StoredSize: ${prop.StoredSize}  Calc Size: ${prop.Size}`);
                this.writeInt32(prop.Size);
                this.write(Buffer.alloc(4));
                this.writeString(prop.StoredPropertyType);
                this.write(Buffer.alloc(17));
                this.writeProperties(prop.Properties);
                break;

            case 'ArrayProperty\0':
                let start = this.tell;
                // console.log(`\tStoredSize: ${prop.StoredSize}  Calc Size: ${prop.Size}`);
                this.writeInt32(prop.Size);
                this.write(Buffer.alloc(4));
                this.writeString(prop.ArrayType);
                this.write(Buffer.alloc(1));
                let start2 = this.tell;
                this.writeInt16(prop.Value.length);
                this.write(Buffer.alloc(2));
                this.writeString(prop.ArrayName);
                this.writeString(prop.ArrayPropertyType);
                let diff = this.tell - start2;
                this.writeInt32(prop.Size - (diff + 8 + prop.ArrayPropertyName.length + 4 + 17));
                this.write(Buffer.alloc(4));
                this.writeString(prop.ArrayPropertyName);
                this.write(Buffer.alloc(17));
                for(let i = 0; i < prop.Value.length; i++) {
                    this.writeProperties(prop.Value[i]);
                }
                break;

            case 'EnumProperty\0':
                this.writeInt32(prop.Value.length + 4);
                this.write(Buffer.alloc(4));
                this.writeString(prop.EnumType);
                this.write(Buffer.alloc(1));
                this.writeString(prop.Value);
                break;
                
            default:
                throw new Error(`Unrecognized Property: ${prop.Type}`);
        }
    }
}