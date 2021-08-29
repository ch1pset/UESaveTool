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
                let buf = Buffer.alloc(1);
                buf.writeUInt8(prop.Property === true ? 1 : 0);
                this.write(Buffer.alloc(8));
                this.write(buf);
                this.write(Buffer.alloc(1));
                break;

            case 'IntProperty\0':
                this.writeInt32(4);
                this.writeInt32(prop.Property[0]);
                this.write(Buffer.alloc(1));
                this.writeInt32(prop.Property[1]);
                break;

            case 'FloatProperty\0':
                this.writeInt32(4);
                this.write(Buffer.alloc(5));
                this.writeFloat(prop.Property);
                break;

            case 'StrProperty\0':
                this.writeInt32(prop.Property.length + 4);
                this.write(Buffer.alloc(5));
                this.writeString(prop.Property);
                break;
            case 'ObjectProperty\0':
                this.writeInt32(prop.Property.length + 4);
                this.write(Buffer.alloc(5));
                this.writeString(prop.Property);
                break;
            case 'SoftObjectProperty\0':
                this.writeInt32(prop.Property.length + 8);
                this.write(Buffer.alloc(5));
                this.writeString(prop.Property);
                this.write(Buffer.alloc(4));
                break;

            case 'StructProperty\0':
                // console.log(`Calc Size: ${prop.Size}`);
                this.writeInt32(prop.Size);
                this.write(Buffer.alloc(4));
                this.writeString(prop.StoredPropertyType);
                this.write(Buffer.alloc(17));
                this.writeProperties(prop.Property);
                break;

            case 'ArrayProperty\0':
                let start = this.tell;
                // console.log(`\tStoredSize: ${prop.StoredSize}  Calc Size: ${prop.Size}`);
                this.writeInt32(prop.StoredPropertyType !== 'IntProperty\0' ? prop.Size : 12);
                this.write(Buffer.alloc(4));
                this.writeString(prop.StoredPropertyType);
                this.write(Buffer.alloc(1));
                // let start2 = this.tell;
                this.writeInt16(prop.Property.length);
                this.write(Buffer.alloc(2));
                this.writeArray(prop.Property, prop.StoredPropertyType);
                break;

            case 'EnumProperty\0':
                this.writeInt32(prop.Property.length + 4);
                this.write(Buffer.alloc(4));
                this.writeString(prop.EnumType);
                this.write(Buffer.alloc(1));
                this.writeString(prop.Property);
                break;
                
            default:
                throw new Error(`Unrecognized Property '${prop.Type}' Writing Property`);
        }
    }
    writeArray(prop, type) {
        switch(type)
        {
            case 'IntProperty\0':
                this.write(Buffer.alloc(prop.length > 1 ? 8 : 4));
                this.writeIntArray(prop, prop.length);
                break;
            case 'SoftObjectProperty\0':
                this.writeSoftObjectArray(prop, prop.length)
                break;
            case 'StructProperty\0':
                this.writeString(prop.Name);
                this.writeString(prop.Type);
                this.writeInt32(prop.StructSize)
                this.write(Buffer.alloc(4));
                this.writeString(prop.StoredPropertyType);
                this.write(Buffer.alloc(17));
                this.writeStructArray(prop.Property, prop.Property.length);
                break;
            default:
                throw new Error(`Urecognized Property '${type}' Writing Array`);
        }
    }
    writeIntArray(array, length) {
        for(let i = 0; i < length; i++) {
            this.writeString(array[i].Name);
            this.writeString(array[i].Type);
            this.writeInt32(4);
            this.writeInt32(array[i].Property[0]);
            this.write(Buffer.alloc(1));
            if(array[i].Type === 'IntProperty\0')
                this.writeInt32(array[i].Property[1]);
            else
                this.writeFloat(array[i].Property[1]);
        }
    }
    writeSoftObjectArray(array, length) {
        for(let i = 0; i < length; i++) {
            this.writeString(array[i]);
            this.write(Buffer.alloc(4));
        }
    }
    writeStructArray(array, length) {
        for(let i = 0; i < length; i++) {
            this.writeProperties(array[i].Properties);
        }
    }
}