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
    EnumProperty,
    TupleProperty,
    IntArray,
    SoftObjectArray,
    StructArray
} from '../models/properties/index.js'
import { PropertyFactory } from '../models/factories/index.js'

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
            let start = this.tell;
            let type = this.readString();
            let length = this.readInt32();
            let prop = this.readProperty(next, type, length)
            if(type === 'ArrayProperty\0' || type === 'StructProperty\0') {
                console.log(`Property: ${prop.Name}\n\tBytes Read: ${this.tell - start + next.length + 4}\n\tCalculated Size: ${prop.Size}`)
                // console.log(`Property: ${prop.Name} Bytes Read: ${this.tell - start}`)
            //     console.log(prop.Property.Property);
            // //     console.log(`Array Calculated Sizes: ${prop.Size}`);
            // //     if(prop.StoredPropertyType === 'StructProperty\0')
            // //         console.log(`Calculated Struct Size: ${prop.StructSize}`);
            //     // console.log();
            }
            data.push(prop);
        }
        return data;
    }

    readProperty(name, type, length) {
        let prop, start;
        // console.log(`Name: ${name} Type: ${type} Size: ${length}`)
        switch(type)
        {
            case 'BoolProperty\0':
                // console.log(`Bool length: ${length}`);
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
                // console.log(`Name: ${name} Type: ${type} Size: ${length}`)
                this.seek(4);
                let stype = this.readString();
                this.seek(17);
                start = this.tell;
                prop = this.readProperties();
                let struct = new StructProperty(name, type, prop, stype)
                // console.log(`Given Size: ${length} Struct Size: ${this.tell - start}`);
                // console.log(`Calculated Struct Size: ${struct.Size - struct.HeaderSize}`);
                // console.log(`Calculated Struct Size: ${struct.PropertiesSize}`)
                console.log();
                return struct;

            case 'ArrayProperty\0':
                console.log(`\tName: ${name} Type: ${type} Size: ${length}`)
                start = this.tell;
                this.seek(4);
                let atype = this.readString();
                this.seek(1);
                let alength = this.readInt16();
                this.seek(2);
                prop = this.readArray(atype, alength);
                let arr = new ArrayProperty(name, type, prop, atype);
                // console.log(`\t\tBytes Read: ${this.tell - start}`);
                console.log(`\t\tCalculated Size: ${arr.Size - arr.HeaderSize}`);
                // console.log(`Calculated Array Size: ${arr.Size - arr.HeaderSize}\n`)
                // console.log();
                return arr;

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
                // console.log(`Bytes Read: ${this.tell - start}`);
                return ret;
            case 'SoftObjectProperty\0':
                ret = this.readSoftObjectArray(alength);
                // console.log(`Bytes Read: ${this.tell - start + 4}`);
                return ret;
            case 'StructProperty\0':
                let name = this.readString();
                let type = this.readString();
                this.readInt32(); // Struct Size
                // console.log(`\t\tGiven Struct Array Size: ${this.readInt32()}`);
                this.seek(4);
                let stype = this.readString();
                this.seek(17);
                // start = this.tell;
                let prop = this.readStructArray(stype, alength);
                // console.log(`\t\tBytes Read: ${this.tell - start}`);
                ret = new StructArray(name, type, prop, stype);
                // console.log(`\t\tCalculated Struct Array Size: ${ret.Size - ret.HeaderSize - 4}`);
                return ret;
            default:
                throw new Error(`Unrecognized Property '${atype}' Reading Array at offset 0x${this.tell.toString(16)}`)
        }
    }
    readIntArray(alength) {
        let array = []
        for(let i = 0; i < alength; i++) {
            let name = this.readString();
            let type = this.readString();
            let length = this.readInt32();
            array.push(this.readProperty(name, type, length))
        }
        let arr = new IntArray(array);
        return arr;
    }
    readSoftObjectArray(alength) {
        let array = [];
        for(let i = 0; i < alength; i++) {
            array.push(this.readString());
            this.seek(4);
        }
        return new SoftObjectArray(array);
    }
    readStructArray(name, alength) {
        let array = []
        let start = this.tell;
        for(let i = 0; i < alength; i++) {
            array.push(new TupleProperty(this.readProperties()));
        }
        return array;
    }
}