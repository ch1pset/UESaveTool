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
    constructor(name, type, value, atype, aname, ptype, pname, length) {
        super(name, type, value);
        this.ArrayType = atype;
        this.ArrayName = aname;
        this.ArrayPropertyType = ptype;
        this.ArrayPropertyName = pname;
        // this.Array = arr;
        this.StoredSize = length;
        // console.log(`Generated Array Size: ${this.Size}`);
    }
    get Size() {
        let size = 0;
        size += 4;
        size += this.ArrayName.length + 4;
        size += this.ArrayPropertyType.length + 4;
        size += 4;
        size += 4;
        size += this.ArrayPropertyName.length + 4;
        size += 17;
        for(let i = 0; i < this.Value.length; i++) {
            for(let j = 0; j < this.Value[i].length; j++) {
                size += this.Value[i][j].Size;
            }
            size += 9;
        }
        return size;
    }
    static from(obj) {
        let array = new ArrayProperty();
        array.Name = obj.Name;
        array.Type = obj.Type;
        array.ArrayType = obj.ArrayType;
        array.ArrayName = obj.ArrayName;
        array.ArrayPropertyType = obj.ArrayPropertyType;
        array.ArrayPropertyName = obj.ArrayPropertyName;
        array.StoredSize = obj.StoredSize;
        array.Value = [];
        obj.Value.forEach((arr) => {
            let pair = [];
            arr.forEach((prop) => {
                switch(prop.Type)
                {
                    case 'BoolProperty\0':
                        pair.push(BoolProperty.from(prop));
                        break;
                    case 'IntProperty\0':
                        pair.push(IntProperty.from(prop));
                        break;
                    case 'FloatProperty\0':
                        pair.push(FloatProperty.from(prop));
                        break;
                    case 'StrProperty\0':
                        pair.push(StrProperty.from(prop));
                        break;
                    case 'ObjectProperty\0':
                        pair.push(ObjectProperty.from(prop));
                        break;
                    case 'SoftObjectProperty\0':
                        pair.push(SoftObjectProperty.from(prop));
                        break;
                    case 'EnumProperty\0':
                        pair.push(EnumProperty.from(prop));
                        break;
                }
            })
            array.Value.push(pair);
        })
        return array;
    }
}