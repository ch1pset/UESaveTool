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
    static from(obj) {
        let gvas = new Gvas();
        gvas.SaveGameVersion = obj.SaveGameVersion;
        gvas.PackageVersion = obj.PackageVersion;
        gvas.EngineVersion = obj.EngineVersion;
        gvas.CustomFormatVersion = obj.CustomFormatVersion;
        gvas.CustomFormatData = obj.CustomFormatData;
        gvas.SaveGameType = obj.SaveGameType;
        gvas.Properties = [];
        obj.Properties.forEach((prop) => gvas.Properties.push(PropertyFactory.create(prop)));
        return gvas;
    }
}
