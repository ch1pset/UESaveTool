import { StructProperty } from "../properties/index.js";
import { PropertyFactory } from "../index.js";

export class StructArray extends StructProperty {
    deserialize(bfs, count) {
        console.log(`Deserializing ${this.Name} Count: ${count}`)
        this.Name = bfs.readString()
        this.Type = bfs.readString()
        let Size = bfs.readInt32();
        bfs.seek(4);
        this.StoredPropertyType = bfs.readString();
        bfs.seek(17);
        let i = 0;
        while (i < count) {
            let Name = this.StoredPropertyType;
            let Type = 'Tuple';
            let prop = PropertyFactory.create({ Name, Type })
            prop.deserialize(bfs)
            this.Properties.push(prop);
            i++;
        }
        console.log(`Done Deserializing ${this.Name} Offset: ${bfs.tell}`)
        return this;
    }
    static from(obj) {
        let struct = new StructArray();
        struct.Name = obj.Name;
        struct.Type = obj.Type;
        struct.StoredPropertyType = obj.StoredPropertyType;
        struct.Properties = [];
        if (obj.Properties !== undefined)
            obj.Properties.forEach((prop) => struct.Properties.push(PropertyFactory.create(prop)));
        return struct;
    }
}