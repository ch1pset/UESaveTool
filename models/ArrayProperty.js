import { 
    Property,
    TupleProperty,
    IntProperty,
    SoftObjectProperty 
} from './index.js'

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
                size += this.Property.length > 1 ? 8 : 4;
                for(let i = 0; i < this.Property.length; i++) {
                    size += this.Property[i].Name.length + 4;
                    size += this.Property[i].Type.length + 4;
                    size += 13;
                }
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
                    size += struct.Property[i].Size;
                    // console.log(struct.Property[i].Size);
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
            size += struct.Size;
            size += 9; // 4 bit padding + 5 bit string: 'None\0'
        }
        return size;
    }
    static from(obj) {
        let array = new ArrayProperty();
        array.Name = obj.Name;
        array.Type = obj.Type;
        array.StoredPropertyType = obj.StoredPropertyType;
        array.Property = [];
        if(obj.StoredPropertyType === 'StructProperty\0') {
            array.Property = {
                Name:obj.Property.Name,
                Type:obj.Property.Type,
                StoredPropertyType:obj.Property.StoredPropertyType,
                Property:[]
            }
            obj.Property.Property.forEach((prop) => {
                array.Property.Property.push(TupleProperty.from(prop));
            });
        }
        else
            array.Property = obj.Property;
        return array;
    }
}