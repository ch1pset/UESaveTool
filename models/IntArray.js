import { 
    Property,
    IntProperty,
    FloatProperty
} from './index.js'

export class IntArray extends Property {
    constructor(properties) {
        super();
        this.Properties = properties;
    }
    get Size() {
        let size = this.Properties.length > 1 ? 8 : 4;
        this.Properties.forEach((int) => {
            size += int.Size
        });
        return size;
    }
    serialize() {
        let buf = [];
        buf.push(Buffer.alloc(this.Properties.length > 1 ? 8 : 4));
        this.Properties.forEach(int => buf.push(int.serialize()));
        return Buffer.concat(buf);
    }
    static from(obj) {
        let array = new IntArray([]);
        obj.Properties.forEach(int => {
            switch(int.Type)
            {
                case 'IntProperty\0':
                    array.Properties.push(IntProperty.from(int));
                    break;
                case 'FloatProperty\0':
                    array.Properties.push(FloatProperty.from(int));
                    break;
            }
        });
    }
}