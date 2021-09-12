import { 
    Property,
    PropertyFactory,
    Serializer,
    Gvas,
    GvasHeader
} from './index';

declare module 'uesavetool'

export class Property {
    get Size(): Number;
    deserialize(serial: Serializer, size?: Number): Property;
    serialize(): Buffer;
    static from(obj: Object): Property;
};

export class PropertyFactory {
    static Properties: Property[];
    static Arrays: Property[];
    static add(ctor: ObjectConstructor): any;
    static create(obj: Object): Property;
    static createArray(obj: Object): Property;
}

export class Gvas {
    get Size(): Number;
    deserialize(serial: Serializer): Gvas;
    serialize(): Buffer;
    static from(obj: Object): Gvas;
}

export class GvasHeader {
    get Size(): Number;
    deserialize(serial: Serializer): GvasHeader;
    serialize(): Buffer;
    static from(obj: Object): GvasHeader;
}

export class Serializer {
    constructor(buf: Buffer);
    get Data(): Buffer;
    get tell(): Number;
    seek(count: Number): Number;
    read(count: Number): Buffer;
    readInt32(): Number;
    readInt16(): Number;
    readUInt8(): Number;
    readFloat(): Number;
    readString(): String;
    write(buf: Buffer): any;
    writeInt32(num: Number): any;
    writeInt16(num: Number): any;
    writeUInt8(byte: Number): any;
    writeFloat(num: Number): any;
    writeString(str: String): any;
    append(buf: Buffer): any;
    static alloc(size: Number): Serializer;
}