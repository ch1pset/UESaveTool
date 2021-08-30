import * as fs from 'fs';
import { 
    BoolProperty,
    IntProperty,
    FloatProperty,
    StrProperty,
    ObjectProperty,
    SoftObjectProperty,
    StructProperty,
    ArrayProperty,
    EnumProperty
} from './properties/index.js';

export class Gvas {
    constructor()
    {
        this.Header = 'GVAS';
        this.SaveGameVersion = 0;
        this.PackageVersion = 0;
        this.EngineVersion = {
            Major:0,
            Minor:0,
            Patch:0,
            Build:0, 
            BuildId:""
        }
        this.CustomFormatVersion = 0;
        this.CustomFormatData = {
            Count:0,
            Entries:[]
        }
        this.SaveGameType = "";
        this.Properties = [];
    }
    static fromFile(path) {
        let gvas = new Gvas();
        let json = JSON.parse(fs.readFileSync(path, 'utf8'));
        gvas.SaveGameVersion = json.SaveGameVersion;
        gvas.PackageVersion = json.PackageVersion;
        gvas.EngineVersion = json.EngineVersion;
        gvas.CustomFormatVersion = json.CustomFormatVersion;
        gvas.CustomFormatData = json.CustomFormatData;
        gvas.SaveGameType = json.SaveGameType;
        gvas.Properties = [];
        json.Properties.forEach((prop) => {
            switch(prop.Type)
            {
                case 'BoolProperty\0':
                    gvas.Properties.push(BoolProperty.from(prop));
                    break;
                case 'IntProperty\0':
                    gvas.Properties.push(IntProperty.from(prop));
                    break;
                case 'FloatProperty\0':
                    gvas.Properties.push(FloatProperty.from(prop));
                    break;
                case 'StrProperty\0':
                    gvas.Properties.push(StrProperty.from(prop));
                    break;
                case 'ObjectProperty\0':
                    gvas.Properties.push(ObjectProperty.from(prop));
                    break;
                case 'SoftObjectProperty\0':
                    gvas.Properties.push(SoftObjectProperty.from(prop));
                    break;
                case 'StructProperty\0':
                    gvas.Properties.push(StructProperty.from(prop));
                    break;
                case 'ArrayProperty\0':
                    gvas.Properties.push(ArrayProperty.from(prop));
                    break;
                case 'EnumProperty\0':
                    gvas.Properties.push(EnumProperty.from(prop));
                    break;
                default:
                    throw new Error(`Unrecognized Property '${prop.Type}' Generating Gvas`);
            }
        })
        return gvas;
    }
}
