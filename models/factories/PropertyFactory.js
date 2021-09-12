import { TypeNotImplementedError } from '../index.js';

export const PropertyFactory = {
    Properties: {},
    Arrays:{},
    add: function(ctor) {
        this.Properties[ctor.name] = ctor;
    },
    create: function(obj) {
        let type = obj.Type.split('\0')[0]

        if (this.Properties[type] === undefined)
            throw new TypeNotImplementedError(type);

        return this.Properties[type].from(obj);
    },
    createArray: function(obj) {
        let type = obj.Type.split('\0')[0]

        if (this.Arrays[type] === undefined)
            throw new TypeNotImplementedError(type);

        return this.Arrays[type].from(obj);
    }
}