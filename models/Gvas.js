import * as fs from 'fs';
import { PropertyFactory } from './factories/index.js';

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
        json.Properties.forEach((prop) => gvas.Properties.push(PropertyFactory.create(prop)));
        return gvas;
    }
}
