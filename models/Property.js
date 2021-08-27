
export class Property {
    constructor({name, type, value}) {
        this.Name = name;
        this.Type = type;
        this.Value = value;
    }
    get Size() {
        throw new Error(`Must implement getter for Size`);
    }
    serialize() {
        throw new Error(`Serialization not implemented for property: ${JSON.stringify(this)}`);
    }
    static from(json) {
        let prop = new Property();
        Object.assign(prop, json);
        return prop;
    }
}
