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
    constructor(name, type, value, atype, aname, ptype, pname, arr, length) {
        super(name, type, value);
        this.ArrayType = atype;
        this.ArrayName = aname;
        this.ArrayPropertyType = ptype;
        this.ArrayPropertyName = pname;
        this.Array = arr;
        this.StoredSize = length;
        // console.log(`Generated Array Size: ${this.Size}`);
    }
    get Size() {
        let size = 0;
        size += this.Name.length + 4;
        size += this.Type.length + 4;
        size += 4;
        size += 4;
        size += this.ArrayType.length + 4;
        size += 1;
        size += 4;
        size += this.ArrayName.length + 4;
        size += this.ArrayPropertyType.length + 4;
        size += 4;
        size += 4;
        size += this.ArrayPropertyName.length + 4;
        size += 17;
        for(let i = 0; i < this.Array.length; i++) {
            for(let j = 0; j < this.Array[i].length; j++) {
                if(this.Array[i][j] !== null) {
                    size += this.Array[i][j].Name.length + 4;
                    size += this.Array[i][j].Type.length + 4;
                    size += this.Array[i][j].Size;
                }
            }
            size += 'None\0'.length + 4;
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
        array.Array = [];
        obj.Array.forEach((arr) => {
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
            array.Array.push(pair);
        })
        return array;
    }
}