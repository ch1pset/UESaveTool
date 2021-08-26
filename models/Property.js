
export class Property {
    constructor({name, type, value}) {
        this.Name = name;
        this.Type = type;
        this.Value = value;
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
