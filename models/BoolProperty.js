import { Property } from './index.js'

export class BoolProperty extends Property {
    constructor({name, type, value}) {
        super({name, type, value});
        this.Size = 1;
    }
}
