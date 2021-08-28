import { 
    FileIO, 
    dword, 
    word, 
    byte,
    BoolProperty,
    IntProperty,
    FloatProperty,
    StrProperty,
    ObjectProperty,
    SoftObjectProperty,
    StructProperty,
    ArrayProperty,
    EnumProperty
} from '../index.js'

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
            data.push(this.readProperty(next));
        }
        return data;
    }

    readProperty(name) {
        let type = this.readString();
        let start = this.tell;
        let length = this.readInt32();
        let value;
        // console.log(`Name: ${name} Type: ${type} Size: ${length}`)
        switch(type)
        {
            case 'BoolProperty\0':
                this.seek(4);
                value = this.readByte() === 0;
                this.seek(1);
                return new BoolProperty(name, type, value);

            case 'IntProperty\0':
                let int1 = this.readInt32(); // floor
                this.seek(1);
                let int2 = this.readInt32();
                value = [int1, int2]
                return new IntProperty(name, type, value);

            case 'FloatProperty\0':
                this.seek(5);
                value = this.readFloat();
                return new FloatProperty(name, type, value);

            case 'StrProperty\0':
                this.seek(5);
                value = this.readString();
                return new StrProperty(name, type, value);

            case 'ObjectProperty\0':
                this.seek(5);
                value = this.readString();
                return new ObjectProperty(name, type, value);

            case 'SoftObjectProperty\0':
                this.seek(5);
                value = this.readString();
                this.seek(4);
                return new SoftObjectProperty(name, type, value);

            case 'StructProperty\0':
                this.seek(4);
                let stype = this.readString();
                this.seek(17);
                let props = this.readProperties();
                return new StructProperty(name, type, value, stype, props)

            case 'ArrayProperty\0':
                this.seek(4);
                let atype = this.readString();
                this.seek(1);
                let alength = this.readInt16();
                this.seek(2);
                let i = 0;
                switch(atype)
                {
                    case 'IntProperty\0':
                        this.seek(4);
                        let int = {};
                        int.Name = this.readString();
                        int.Type = this.readString();
                        this.readInt32();
                        int.Value = []
                        while(i < alength) {
                            this.seek(5);
                            int.Value.push(this.readInt32())
                            i++;
                        }
                        value = IntProperty.from(int);
                        break;
                    case 'SoftObjectProperty\0':
                        value = [];
                        while(i < alength) {
                            value.push(this.readString());
                            this.seek(4);
                            i++;
                        }
                        break;
                    case 'StructProperty\0':
                        let struct = {};
                        struct.Name = this.readString();
                        struct.Type = this.readString();
                        struct.size = this.readInt32();
                        this.seek(4);
                        struct.StoredPropertyType = this.readString();
                        this.seek(17);
                        struct.Properties = []
                        while(i < alength) {
                            struct.Properties.push(this.readProperties());
                            i++;
                        }
                        console.log(struct);
                        value = struct;
                        break;
                }
                // console.log(value);
                return new ArrayProperty(name, type, value, atype);

            case 'EnumProperty\0':
                this.seek(4);
                let etype = this.readString(); //same as type
                this.seek(1);
                value = this.readString();
                return new EnumProperty(name, type, value, etype);

            default:
                throw new Error(`Unrecognized Property: ${type}`);
        }
    }
}