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
    constructor(name, type, value, stype, props, length) {
        super(name, type, value);
        this.StoredPropertyType = stype;
        this.Properties = props;
        this.StoredSize = length;
        // console.log(`Generated Struct Length: ${this.Size}`)
    }
    get Size() {
        // let props = this.Value.Properties.reduce((acc, curr) => acc ? acc.Size + curr.Size : 4)
        let size = 0;
        size += this.StoredPropertyType.length + 4;
        size += this.Type.length + 4;
        for(let i = 0; i < this.Properties.length; i++) {
            if(this.Properties[i] !== null) {
                size += this.Properties[i].Name.length + 4;
                size += this.Properties[i].Type.length + 4;
                size += this.Properties[i].Size;
            }
        }
        return size + 14;
    }
    static from(obj) {
        let struct = new StructProperty();
        struct.Name = obj.Name;
        struct.Type = obj.Type;
        struct.StoredPropertyType = obj.StoredPropertyType;
        struct.StoredSize = obj.StoredSize;
        struct.Properties = [];
        obj.Properties.forEach((prop) => {
            switch(prop.Type)
            {
                case 'BoolProperty\0':
                    struct.Properties.push(BoolProperty.from(prop));
                    break;
                case 'IntProperty\0':
                    struct.Properties.push(IntProperty.from(prop));
                    break;
                case 'FloatProperty\0':
                    struct.Properties.push(FloatProperty.from(prop));
                    break;
                case 'StrProperty\0':
                    struct.Properties.push(StrProperty.from(prop));
                    break;
                case 'ObjectProperty\0':
                    struct.Properties.push(ObjectProperty.from(prop));
                    break;
                case 'SoftObjectProperty\0':
                    struct.Properties.push(SoftObjectProperty.from(prop));
                    break;
                case 'ArrayProperty\0':
                    struct.Properties.push(ArrayProperty.from(prop));
                    break;
                case 'EnumProperty\0':
                    struct.Properties.push(EnumProperty.from(prop));
                    break;
            }
        })
        return struct;
    }
}
