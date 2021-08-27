import { Property } from './index.js';

export class EnumProperty extends Property {
    constructor({name, type, value}) {
        super({name, type, value});
        this.Size = value.Value.length + 4;
    }
}