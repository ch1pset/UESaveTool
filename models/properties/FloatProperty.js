import { Serializer } from '../../utils/Serializer.js';
import { Property } from './index.js'

export class FloatProperty extends Property {
    constructor() {
        super();
        this.Property = [];
    }
    get Size() {
        return this.Name.length + 4
            + this.Type.length + 4
            + 13;
    }
    deserialize(serial) {
        this.Property[0] = serial.readInt32();
        serial.seek(1);
        this.Property[1] = serial.readFloat();
        return this;
    }
    serialize() {
        let serial = Serializer.alloc(this.Size);
        serial.writeString(this.Name);
        serial.writeString(this.Type);
        serial.writeInt32(4);
        serial.writeInt32(this.Property[0]);
        serial.seek(1);
        serial.writeFloat(this.Property[1]);
        if (serial.tell !== this.Size)
            throw new Error(`Problem occured during serialization of Property: ${this}`);
        return serial.Data;
    }
    static from(obj) {
        let prop = new FloatProperty();
        Object.assign(prop, obj);
        return prop;
    }
}
