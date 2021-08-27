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
} from './index.js'

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
                data.push(null);
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
                return new BoolProperty({name, type, value});
            case 'IntProperty\0':
                this.seek(9);
                value = this.readInt32();
                return new IntProperty({name, type, value});
            case 'FloatProperty\0':
                this.seek(9);
                value = this.readFloat();
                return new FloatProperty({name, type, value});
            case 'StrProperty\0':
                length = this.readInt32();
                this.seek(5);
                value = this.readString();
                return new StrProperty({name, type, value});
            case 'ObjectProperty\0':
                length = this.readInt32();
                this.seek(5);
                value = this.readString();
                return new ObjectProperty({name, type, value});
            case 'SoftObjectProperty\0':
                length = this.readInt32();
                this.seek(5);
                value = this.readString();
                return new SoftObjectProperty({name, type, value});
            case 'StructProperty\0':
                length = this.readInt32();
                console.log(`Sav Struct length: ${length}`);
                this.seek(4);
                let stype = this.readString();
                this.seek(17);
                let props = this.readProperties();
                return new StructProperty({name, type, value}, {stype, props})
            case 'ArrayProperty\0':
                let start = this.tell;
                length = this.readInt32(); // stored struct size in bytes
                console.log(`Sav Array Size: ${length}`);
                this.seek(4);
            
                let atype = this.readString();
                this.seek(1);
                let alength = this.readInt16();
                // console.log(`Items in Array: ${alength}`);
                this.seek(2);

                let aname = this.readString();

                let ptype = this.readString();
                this.readInt32(); //length - (current offset - start offset)
                this.seek(4);

                let pname = this.readString();
                this.seek(17);

                let arr = [];
                while(this.tell < (start + length)) {
                    let propItem = this.readProperties();
                    arr.push(propItem);
                }
                return new ArrayProperty({name, type, value}, {atype, aname, ptype, pname, arr});
            case 'EnumProperty\0':
                length = this.readInt32();
                this.seek(4);
                let etype = this.readString(); //same as type
                this.seek(1);
                value = this.readString();
                return new EnumProperty({name, type, value}, etype);
            default:
                throw new Error(`Unrecognized Property: ${type}`);
        }
    }
}