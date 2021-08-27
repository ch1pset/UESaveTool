import { Property } from './index.js'

export class SoftObjectProperty extends Property {
    constructor({name, type, value}) {
        super({name, type, value});
        this.Size = value.length + 8;
    }
}
