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
} from './index.js'

export class PropertyFactory {
    static create(obj) {
        switch(obj.Type)
        {
            case 'IntProperty\0':
                return IntProperty.from(obj);
            case 'FloatProperty\0':
                return FloatProperty.from(obj);
        }
    }
}