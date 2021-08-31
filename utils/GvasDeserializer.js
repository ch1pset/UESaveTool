import { PropertyFactory } from '../models/factories/index.js'
import { DeserializationError, Gvas } from '../models/index.js';
import { TupleProperty, Guid } from '../models/properties/index.js';
import { BufferReader } from './BufferReader.js';

export class GvasDesesrializer extends BufferReader {
    readEngineVersion() {
        if(this.tell > 12)
            throw new Error(`Engine Version is at offset 0x${(12).toString(16)}, current offset is 0x${this.tell.toString(16)}`);
        let EngineVersion = {}
        EngineVersion.Major = this.readInt16();
        EngineVersion.Minor = this.readInt16();
        EngineVersion.Patch = this.readInt16();
        EngineVersion.Build = this.readInt32();
        EngineVersion.BuildId = this.readString();
        return EngineVersion;
    }
    readGuid() {
        let Id = `${this.read(4).swap32().toString('hex')}`
        Id += `-${this.read(2).swap16().toString('hex')}`
        Id += `-${this.read(2).swap16().toString('hex')}`
        Id += `-${this.read(2).toString('hex')}`
        Id += `-${this.read(6).toString('hex')}`
        let Value = this.readInt32();
        return PropertyFactory.create({Id, Value, Type:'Guid'});
    }
    readProperties() {
        let data = [];
        let next;
        while((next = this.readString()) !== 'None\0') {
            let type = this.readString();
            let length = this.readInt32();
            let property = this.readProperty(next, type, length);
            data.push(property);
        }
        return data;
    }
    readProperty(name, type) {
        let prop = {};
        prop.Name = name;
        prop.Type = type;
        switch(type.split('\0')[0]) {
            case 'BoolProperty':
                this.seek(4);
                prop.Property = this.readUInt8() === 1;
                this.seek(1);
                break;

            case 'IntProperty':
                let int1 = this.readInt32();
                this.seek(1);
                let int2 = this.readInt32();
                prop.Property = [int1, int2];
                break;

            case 'FloatProperty':
                let int = this.readInt32();
                this.seek(1);
                let float = this.readFloat();
                prop.Property = [int, float];
                break;

            case 'StrProperty':
            case 'ObjectProperty':
                this.seek(5);
                prop.Property = this.readString();
                break;

            case 'SoftObjectProperty':
                this.seek(5);
                prop.Property = this.readString();
                this.seek(4);
                break;

            case 'StructProperty':
                this.seek(4);
                prop.StoredPropertyType = this.readString();
                this.seek(17);
                prop.Property = this.readProperties();
                break;

            case 'ArrayProperty':
                this.seek(4);
                prop.StoredPropertyType = this.readString();
                this.seek(1);
                let count = this.readInt16();
                this.seek(2);
                prop.Property = this.readArray(prop.StoredPropertyType, count);
                break;

            case 'EnumProperty':
                this.seek(4);
                prop.EnumType = this.readString();
                this.seek(1);
                prop.Property = this.readString();
                break;

            default:
                throw new DeserializationError(type, this.tell - type.length - 8);
        }
        return PropertyFactory.create(prop);
    }
    readArray(storedType, count) {
        let array = {};
        switch(storedType.split('\0')[0]) {
            case 'IntProperty':
                array.Properties = []
                this.seek((count > 1) ? 8 : 4);
                for(let i = 0; i < count; i++) {
                    let name = this.readString();
                    let type = this.readString();
                    let length = this.readInt32();
                    array.Properties.push(this.readProperty(name, type, length));
                }
                // console.log(array);
                break;
            case 'SoftObjectProperty':
                array.Properties = []
                for(let i = 0; i < count; i++) {
                    array.Properties.push(this.readString());
                    this.seek(4);
                }
                break;
            case 'StructProperty':
                array.Name = this.readString();
                array.Type = this.readString();
                this.readInt32();
                this.seek(4);
                array.StoredPropertyType = this.readString();
                this.seek(17);
                array.Property = []
                for(let i = 0; i < count; i++) {
                    let props = {
                        Type:'Tuple',
                        Properties:this.readProperties()
                    }
                    array.Property.push(PropertyFactory.create(props));
                }
                break;
            default:
                throw new DeserializationError(storedType, this.tell - storedType.length - 9);
        }
        // console.log(array);
        return array;
    }
}