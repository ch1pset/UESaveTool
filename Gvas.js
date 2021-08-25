
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
        this.Properties = {};
    }
}