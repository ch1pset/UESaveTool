import { Property } from './index.js'

export class StructProperty extends Property {
    constructor({name, type, value}, {stype, props}) {
        super({name, type, value});
        this.StoredPropertyType = stype;
        this.Properties = props;
        console.log(`Generated Struct Length: ${this.Size}`)
    }
    get Size() {
        // let props = this.Value.Properties.reduce((acc, curr) => acc ? acc.Size + curr.Size : 4)
        let size = 0;
        size += this.StoredPropertyType.length + 4;
        size += this.Type.length + 4;
        for(let i = 0; i < this.Properties.length; i++) {
            if(this.Properties[i] !== null) {
                size += this.Properties[i].Name.length + 4;
                size += this.Properties[i].Type.length + 4;
                size += this.Properties[i].Size;
            }
        }
        return size + 14;
    }
}
