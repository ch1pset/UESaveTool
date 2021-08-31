
export class Property {
    constructor(name, type, prop) {
        this.Name = name;
        this.Type = type;
        this.Property = prop;
    }
    get Size() {
        throw new Error(`Must implement getter for Size`);
    }
    serialize() {
        throw new Error(`Serialization not implemented for property: ${this.Type}`);
    }
    static from(json) {
        throw new Error(`Must implement from function`);
    }
}
