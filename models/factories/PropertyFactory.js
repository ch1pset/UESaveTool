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
    TupleProperty
} from '../properties/index.js'
import { TypeNotImplementedError } from '../index.js';

export class PropertyFactory {
    static create(obj) {
        switch(obj.Type)
        {
            case 'BoolProperty\0':
                return BoolProperty.from(obj);
            case 'IntProperty\0':
                return IntProperty.from(obj);
            case 'FloatProperty\0':
                return FloatProperty.from(obj);
            case 'StrProperty\0':
                return StrProperty.from(obj);
            case 'ObjectProperty\0':
                return ObjectProperty.from(obj);
            case 'SoftObjectProperty\0':
                return SoftObjectProperty.from(obj);
            case 'ArrayProperty\0':
                return ArrayProperty.from(obj);
            case 'StructProperty\0':
                return StructProperty.from(obj);
            case 'EnumProperty\0':
                return EnumProperty.from(obj);
            default:
                throw new TypeNotImplementedError(obj.Type);
        }
    }
}