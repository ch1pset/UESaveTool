import { Property } from './index.js'

export class StrProperty extends Property {
    constructor({name, type, value}) {
        super({name, type, value});
        this.Size = value.length + 4;
    }
}
