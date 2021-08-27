import { Property } from './index.js'

export class ArrayProperty extends Property {
    constructor({name, type, value}, {atype, aname, ptype, pname, arr}) {
        super({name, type, value});
        this.ArrayType = atype;
        this.ArrayName = aname;
        this.ArrayPropertyType = ptype;
        this.ArrayPropertyName = pname;
        this.Array = arr;

        console.log(`Generated Array Size: ${this.Size}`);
    }
    get Size() {
        let size = 0;
        size += this.Name.length + 4;
        size += this.Type.length + 4;
        size += 4;
        size += 4;
        size += this.ArrayType.length + 4;
        size += 1;
        size += 4;
        size += this.ArrayName.length + 4;
        size += this.ArrayPropertyType.length + 4;
        size += 4;
        size += 4;
        size += this.ArrayPropertyName.length + 4;
        size += 17;
        for(let i = 0; i < this.Array.length; i++) {
            for(let j = 0; j < this.Array[i].length; j++) {
                if(this.Array[i][j] !== null) {
                    size += this.Array[i][j].Name.length + 4;
                    size += this.Array[i][j].Type.length + 4;
                    size += this.Array[i][j].Size;
                }
            }
            size += 'None\0'.length + 4;
        }
        // return size + 17 + this.ArrayPropertyName.length + 4 
        //     + 8 + this.ArrayPropertyType.length + 4
        //     + this.ArrayName.length + 4
        //     + 5 + this.ArrayType.length + 4
        //     + 8;
        return size;
    }
}