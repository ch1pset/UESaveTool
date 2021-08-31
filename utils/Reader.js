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
import { DeserializationError } from '../models/index.js';

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
            let prop = this.readProperty(next, type, length)
            data.push(prop);
        }
        return data;
    }

    readProperty(name, type, length) {
        let prop;
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
                let int = this.readInt32();
                this.seek(1);
                let float = this.readFloat();
                prop = [int, float];
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
                let struct = new StructProperty(name, type, prop, stype)
                console.log();
                return struct;

            case 'ArrayProperty\0':
                this.seek(4);
                let atype = this.readString();
                this.seek(1);
                let alength = this.readInt16();
                this.seek(2);
                prop = this.readArray(atype, alength);
                let arr = new ArrayProperty(name, type, prop, atype);
                return arr;

            case 'EnumProperty\0':
                this.seek(4);
                let etype = this.readString(); //same as type
                this.seek(1);
                prop = this.readString();
                return new EnumProperty(name, type, prop, etype);

            default:
                throw new DeserializationError(type, this.tell - type.length - 8);
        }
    }

    readArray(atype, alength) {
        switch(atype)
        {
            case 'IntProperty\0':
                this.seek((alength > 1) ? 8 : 4);
                return this.readIntArray(alength);
            case 'SoftObjectProperty\0':
                return this.readSoftObjectArray(alength);
            case 'StructProperty\0':
                let name = this.readString();
                let type = this.readString();
                let size = this.readInt32(); // Struct Size
                this.seek(4);
                let stype = this.readString();
                this.seek(17);
                let prop = this.readStructArray(stype, alength);
                return new StructArray(name, type, prop, stype);
            default:
                throw new DeserializationError(atype, this.tell - atype.length - 9);
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
        return new IntArray(array);
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
        for(let i = 0; i < alength; i++) {
            array.push(new TupleProperty(this.readProperties()));
        }
        return array;
    }
}