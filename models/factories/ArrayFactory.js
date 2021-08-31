import {
    IntArray,
    SoftObjectArray,
    StructProperty
} from '../properties/index.js'
import { TypeNotImplementedError } from '../index.js';

export class ArrayFactory {
    static create(obj) {
        switch(obj.StoredPropertyType)
        {
            case 'IntProperty\0':
                return IntArray.from(obj.Property);
            case 'SoftObjectProperty\0':
                return SoftObjectArray.from(obj.Property);
            case 'StructProperty\0':
                return StructProperty.from(obj.Property);
            default:
                throw TypeNotImplementedError(obj.Type);
        }
    }
}