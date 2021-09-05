
export class Property {
    constructor() {
        this.Name = "";
        this.Type = "";
    }
    get Size() {
        throw new Error(`Must implement getter for Size`);
    }
    deserialize() {
        throw new Error(`Deserialization not implemented for property: ${this.Type}`);
    }
    serialize() {
        throw new Error(`Serialization not implemented for property: ${this.Type}`);
    }
    static from(json) {
        throw new Error(`Must implement from function`);
    }
}
