import {
    Property,
    BoolProperty,
    IntProperty,
    FloatProperty,
    StrProperty,
    ObjectProperty,
    SoftObjectProperty,
    StructProperty,
    EnumProperty
} from './index.js'

export class ArrayProperty extends Property {
    constructor(name, type, prop, stype) {
        super(name, type, prop);
        this.StoredPropertyType = stype;
        // this.ArrayName = aname;
        // this.ArrayPropertyType = ptype;
        // this.ArrayPropertyName = pname;
        // this.Array = arr;
        // this.StoredSize = length;
        // console.log(`Generated Array Size: ${this.Size}`);
    }
    get Size() {
        // let size = 0;
        // size += 4;
        // size += this.ArrayName.length + 4;
        // size += this.ArrayPropertyType.length + 4;
        // size += 4;
        // size += 4;
        // size += this.ArrayPropertyName.length + 4;
        // size += 17;
        // for(let i = 0; i < this.Value.length; i++) {
        //     for(let j = 0; j < this.Value[i].length; j++) {
        //         size += this.Value[i][j].Size;
        //     }
        //     size += 9;
        // }
        // return size;
    }
    static from(obj) {
        let array = new ArrayProperty();
        array.Name = obj.Name;
        array.Type = obj.Type;
        array.StoredPropertyType = obj.StoredPropertyType;
        // array.ArrayName = obj.ArrayName;
        // array.ArrayPropertyType = obj.ArrayPropertyType;
        // array.ArrayPropertyName = obj.ArrayPropertyName;
        // array.StoredSize = obj.StoredSize;
        array.prop = [];
        // obj.Value.forEach((prop) => {
        //     switch(prop.Type)
        //     {
        //         case 'BoolProperty\0':
        //             array.push(BoolProperty.from(prop));
        //             break;
        //         case 'IntProperty\0':
        //             array.push(IntProperty.from(prop));
        //             break;
        //         case 'FloatProperty\0':
        //             array.push(FloatProperty.from(prop));
        //             break;
        //         case 'StrProperty\0':
        //             array.push(StrProperty.from(prop));
        //             break;
        //         case 'ObjectProperty\0':
        //             array.push(ObjectProperty.from(prop));
        //             break;
        //         case 'SoftObjectProperty\0':
        //             array.push(SoftObjectProperty.from(prop));
        //             break;
        //         case 'EnumProperty\0':
        //             array.push(EnumProperty.from(prop));
        //             break;
        //         default:
        //             throw new Error(`Unrecognized Property: ${prop.Type}`);
        //     }
        // })
        return array;
    }
}