import { FileIO, dword, word, byte } from './index.js'
import {
    BoolProperty,
    IntProperty,
    FloatProperty,
    StrProperty,
    ObjectProperty,
    SoftObjectProperty,
    StructProperty,
    ArrayProperty,
    EnumProperty
} from '../models/index.js'

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
            let type = this.readString();
            let length = this.readInt32();
            data.push(this.readProperty(next, type, length));
        }
        return data;
    }

    readProperty(name, type, length) {
        // let start = this.tell;
        let prop;
        // console.log(`Name: ${name} Type: ${type} Size: ${length}`)
        switch(type)
        {
            case 'BoolProperty\0':
                this.seek(4);
                prop = this.readByte() === 1;
                this.seek(1);
                return new BoolProperty(name, type, prop);

            case 'IntProperty\0':
                let int1 = this.readInt32(); // floor
                this.seek(1);
                let int2 = this.readInt32();
                prop = [int1, int2]
                return new IntProperty(name, type, prop);

            case 'FloatProperty\0':
                this.seek(5);
                prop = this.readFloat();
                return new FloatProperty(name, type, prop);

            case 'StrProperty\0':
                this.seek(5);
                prop = this.readString();
                return new StrProperty(name, type, prop);

            case 'ObjectProperty\0':
                this.seek(5);
                prop = this.readString();
                return new ObjectProperty(name, type, prop);

            case 'SoftObjectProperty\0':
                this.seek(5);
                prop = this.readString();
                this.seek(4);
                return new SoftObjectProperty(name, type, prop);

            case 'StructProperty\0':
                this.seek(4);
                let stype = this.readString();
                this.seek(17);
                prop = this.readProperties();
                return new StructProperty(name, type, prop, stype)

            case 'ArrayProperty\0':
                console.log(`Bytes to be Read: ${length}`)
                this.seek(4);
                let atype = this.readString();
                this.seek(1);
                let alength = this.readInt16();
                this.seek(2);
                console.log(`StoredType: ${atype} Items in Array: ${alength}`)
                prop = this.readArray(atype, alength);
                return new ArrayProperty(name, type, prop, atype);

            case 'EnumProperty\0':
                this.seek(4);
                let etype = this.readString(); //same as type
                this.seek(1);
                prop = this.readString();
                return new EnumProperty(name, type, prop, etype);

            default:
                throw new Error(`Unrecognized Property '${type}' at offset 0x${(this.tell.toString(16))}`);
        }
    }

    readArray(atype, alength) {
        let start = this.tell;
        let ret;
        switch(atype)
        {
            case 'IntProperty\0':
                this.seek((alength > 1) ? 8 : 4);
                ret = this.readIntArray(alength);
                console.log(`Bytes Read: ${this.tell - start + 4}`);
                return ret;
            case 'SoftObjectProperty\0':
                ret = this.readSoftObjectArray(alength);
                console.log(`Bytes Read: ${this.tell - start + 4}`);
                return ret;
            case 'StructProperty\0':
                let struct = {};
                struct.Name = this.readString();
                struct.Type = this.readString();
                console.log(`Struct Size: ${this.readInt32()}`);
                this.seek(4);
                struct.StoredPropertyType = this.readString();
                this.seek(17);
                struct.Property = this.readStructArray(alength);
                console.log(`Bytes Read: ${this.tell - start + 4}`);
                return struct;
            default:
                throw new Error(`Unrecognized Property '${atype}' Reading Array at offset 0x${this.tell.toString(16)}`)
        }
    }
    readIntArray(alength) {
        let array = []
        let i = 0;
        while(i < alength) {
            let int = {};
            int.Name = this.readString();
            int.Type = this.readString();
            let start = this.tell;
            this.readInt32(); // = 4
            int.Property = []
            let int1 = (int.Type === 'IntProperty\0') ? this.readInt32() : this.readFloat();
            this.seek(1);
            let int2 = (int.Type === 'IntProperty\0') ? this.readInt32() : this.readFloat();
            int.Property = [int1, int2]
            array.push(int);
            i++;
            console.log(`Int Bytes Read: ${this.tell - start - 1}`)
        }
        return array;
    }
    readSoftObjectArray(alength) {
        let array = [];
        let i = 0;
        while(i < alength) {
            array.push(this.readString());
            this.seek(4);
            i++;
        }
        return array;
    }
    readStructArray(alength) {
        let array = []
        let i = 0;
        let start = this.tell;
        while(i < alength) {
            array.push({Value:this.readProperties()});
            i++;
        }
        console.log(`Struct Bytes Read: ${this.tell - start}`)
        return array;
    }
}