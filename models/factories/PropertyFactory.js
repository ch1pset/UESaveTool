import { TypeNotImplementedError } from '../index.js';

export class PropertyFactory {
    static Properties = {};
    static Arrays = {};
    static add(ctor) {
        this.Properties[ctor.name] = ctor;
    }
    static create(obj) {
        let type = obj.Type.split('\0')[0]

        if (this.Properties[type] === undefined)
            throw new TypeNotImplementedError(type);

        return this.Properties[type].from(obj);
    }
    static createArray(obj) {
        let type = obj.Type.split('\0')[0]

        if (this.Arrays[type] === undefined)
            throw new TypeNotImplementedError(type);

        return this.Arrays[type].from(obj);
    }
}