import { Property } from './index.js'

export class ArrayProperty extends Property {
    constructor(name, type, prop, stype) {
        super(name, type, prop);
        this.StoredPropertyType = stype;
    }
    get Size() {
        let size = 0;
        switch(this.StoredPropertyType)
        {
            case 'IntProperty\0':
                size += 12; // 4 bit size, 4 bit int, 4 bit int
                break;
            case 'SoftObjectProperty\0':
                for(let i = 0; i < this.Property.length; i++) {
                    size += this.Property[i].length + 4;
                    size += 4;
                }
                size += 4;
                break;
            case 'StructProperty\0':
                size += 4;
                size += this.Property.Name.length + 4;
                size += this.Property.Type.length + 4;
                size += 8;
                size += this.Property.StoredPropertyType.length + 4;
                size += 17;
                let struct = this.Property;
                for(let i = 0; i < struct.Property.length; i++) {
                    for(let j = 0; j < struct.Property[i].Value.length; j++) {
                        size += struct.Property[i].Value[j].Size;
                    }
                    size += 9; // 4 bit padding + 5 bit string: 'None\0'
                }
                break;
        }
        return size;
    }
    get StructSize() {
        if(this.StoredPropertyType !== 'StructProperty\0')
            throw new Error(`Property 'StructSize' is undefined`)

        let size = 0;
        let struct = this.Property;
        for(let i = 0; i < struct.Property.length; i++) {
            for(let j = 0; j < struct.Property[i].Value.length; j++) {
                size += struct.Property[i].Value[j].Size;
            }
            size += 9; // 4 bit padding + 5 bit string: 'None\0'
        }
        return size;
    }
    static from(obj) {
        let array = new ArrayProperty();
        array.Name = obj.Name;
        array.Type = obj.Type;
        array.StoredPropertyType = obj.StoredPropertyType;
        array.Property = obj.Property;
        return array;
    }
}