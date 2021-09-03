import { TypeNotImplementedError } from '../index.js';

export class PropertyFactory {
    static Properties = {};
    static add(name, from) {
        this.Properties[name] = from
    }
    static create(obj) {
        let type = obj.Type.split('\0')[0]
    
        if(this.Properties[type] === undefined)
            throw new TypeNotImplementedError(type);
        
        return this.Properties[type](obj);
    }
}