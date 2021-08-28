import {
    Property,
    BoolProperty,
    IntProperty,
    FloatProperty,
    StrProperty,
    ObjectProperty,
    SoftObjectProperty,
    ArrayProperty,
    EnumProperty
} from './index.js'

export class StructProperty extends Property {
    constructor(name, type, prop, stype) {
        super(name, type, prop);
        this.StoredPropertyType = stype;
        // this.Properties = props;
        // this.StoredSize = length;
        // console.log(`Generated Struct Length: ${this.Size}`)
    }
    get Size() {
        let size = 0;
        size += 9;
        for(let i = 0; i < this.Property.length; i++) {
            if(this.Property[i].Type === 'ArrayProperty\0') {
                size += this.Property[i].Name.length + 4;
                size += this.Property[i].Type.length + 4;
                size += this.Property[i].StoredPropertyType.length + 4;
                size += 9
            }
            size += this.Property[i].Size;
        }
        return size;
    }
    static from(obj) {
        let struct = new StructProperty();
        struct.Name = obj.Name;
        struct.Type = obj.Type;
        struct.StoredPropertyType = obj.StoredPropertyType;
        // struct.StoredSize = obj.StoredSize;
        struct.Property = [];
        obj.Property.forEach((prop) => {
            switch(prop.Type)
            {
                case 'BoolProperty\0':
                    struct.Property.push(BoolProperty.from(prop));
                    break;
                case 'IntProperty\0':
                    struct.Property.push(IntProperty.from(prop));
                    break;
                case 'FloatProperty\0':
                    struct.Property.push(FloatProperty.from(prop));
                    break;
                case 'StrProperty\0':
                    struct.Property.push(StrProperty.from(prop));
                    break;
                case 'ObjectProperty\0':
                    struct.Property.push(ObjectProperty.from(prop));
                    break;
                case 'SoftObjectProperty\0':
                    struct.Property.push(SoftObjectProperty.from(prop));
                    break;
                case 'StructProperty\0':
                    struct.Property.push(StructProperty.from(prop))
                    break;
                case 'ArrayProperty\0':
                    struct.Property.push(ArrayProperty.from(prop));
                    break;
                case 'EnumProperty\0':
                    struct.Property.push(EnumProperty.from(prop));
                    break;
                default:
                    throw new Error(`Unrecognized Property at Struct Creation: ${prop.Type}`);
            }
        })
        return struct;
    }
}
