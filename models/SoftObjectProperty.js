import { Property } from './index.js'

export class SoftObjectProperty extends Property {
    constructor(name, type, value) {
        super(name, type, value);
    }
    get Size() {
        return this.Value.length + this.Type.length + this.Name.length + 25;
    }
    static from(obj) {
        let prop = new SoftObjectProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
