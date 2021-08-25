import { fs } from './index.js'

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
        Object.assign(gvas, JSON.parse(fs.readFileSync(path, 'utf8')));
        return gvas;
    }
}