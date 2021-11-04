import { Property, Serializer, SerializationError } from '../../index.js'

export class VectorProperty extends Property {
    constructor(prop) {
        super();
        this.Property = [ 0, 0, 0 ]
    }
    get Size() {
        return 12; // this.Property is 12 bytes of data
    }
    deserialize(serial) {
        this.Property[0] = serial.readFloat();
        this.Property[1] = serial.readFloat();
        this.Property[2] = serial.readFloat();
        return this;
    }
    serialize() {
        let serial = Serializer.alloc(this.Size);
        this.Property.forEach(f => serial.writeFloat(f));
        if(serial.tell !== this.Size)
            throw new SerializationError(this);
        return serial.Data;
    }
    static from(obj) {
        let vector = new VectorProperty();

    }
}