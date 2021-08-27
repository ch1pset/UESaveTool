import { Property } from './index.js'

export class StructProperty extends Property {
    constructor({name, type, value}) {
        super({name, type, value});
        // this.Size = this.Value.Properties.reduce((acc, curr) => {
        //     return acc.Size + curr.Size;
        // }) + 17 + subtype + 8;
    }
}
