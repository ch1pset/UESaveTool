import { Property } from './index.js'

export class ObjectProperty extends Property {
    constructor(name, type, value) {
        super(name, type, value);
    }
    get Size() {
        return this.Value.length + this.Type.length + this.Name.length + 21;
    }
    static from(obj) {
        let prop = new ObjectProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
