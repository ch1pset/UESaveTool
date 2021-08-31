import {
    IntArray,
    SoftObjectArray,
    StructArray
} from '../properties/index.js'

export class ArrayFactory {
    static create(obj) {
        switch(obj.StoredPropertyType)
        {
            case 'IntProperty\0':
                return IntArray.from(obj.Property);
            case 'SoftObjectProperty\0':
                return SoftObjectArray.from(obj.Property);
            case 'StructProperty\0':
                return StructArray.from(obj.Property);
        }
    }
}