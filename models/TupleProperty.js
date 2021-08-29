import { 
    Property,
    FloatProperty,
    SoftObjectProperty,
} from './index.js'

export class TupleProperty extends Property{
    /**
     * 
     * @param {String} name 
     * @param {Array} props 
     */
    constructor(name, props) {
        super(name);
        this.Properties = props;
    }
    get Size() {
        // return this.Properties.reduce((acc, cur) => acc.Size + cur.Size);
        let size = 0;
        this.Properties.forEach((prop) => {
            size += prop.Size;
        });
        return size;
    }
    serialize() {
        let buf = Buffer.alloc(this.Size);
        
    }
    static from(obj) {
        let tuple = new TupleProperty(null, []);
        tuple.Name = obj.Name;
        for(let i = 0; i < obj.Properties.length; i++) {
            switch(obj.Properties[i].Type)
            {
                case 'SoftObjectProperty\0':
                    tuple.Properties.push(SoftObjectProperty.from(obj.Properties[i]));
                    break;
                case 'FloatProperty\0':
                    tuple.Properties.push(FloatProperty.from(obj.Properties[i]));
                    break;
            }
        }
        return tuple;
    }
}