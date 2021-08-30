import { Property } from './index.js'
import { PropertyFactory } from '../factories/index.js';

export class TupleProperty extends Property {
    constructor(props) {
        super();
        this.Properties = props;
    }
    get Size() {
        return this.Properties.reduce((acc, cur) => acc.Size + cur.Size);
    }
    serialize() {
        let buf = [];
        for(let i = 0; i < this.Properties.length; i++) {
            buf.push(this.Properties[i].serialize());
        }
        return Buffer.concat(buf);
    }
    static from(obj) {
        let tuple = new TupleProperty([]);
        obj.Properties.forEach(prop => tuple.Properties.push(PropertyFactory.create(prop)));
        return tuple;
    }
}