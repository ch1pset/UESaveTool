import { Property } from './index.js'
import { PropertyFactory } from '../factories/index.js'

export class IntArray extends Property {
    constructor(properties) {
        super();
        this.Properties = properties;
    }
    get Size() {
        let size = 4;
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
        array.Properties = [];
        obj.Properties.forEach(int => array.Properties.push(PropertyFactory.create(int)));
        return array;
    }
}