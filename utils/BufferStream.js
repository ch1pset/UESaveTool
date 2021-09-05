
export class BufferStream {
    constructor(buf) {
        this._data = buf;
        this._offset = 0;
    }
    get Data() { return this._data }
    get tell() { return this._offset }
    seek(count) {
        return this._offset += count;
    }
    read(count) {
        return this.Data.slice(this.tell, this.seek(count));
    }
    readInt32() {
        let int = this.Data.readInt32LE(this.tell);
        this.seek(4);
        return int;
    }
    readInt16() {
        let int = this.Data.readInt16LE(this.tell);
        this.seek(2)
        return int;
    }
    readUInt8() {
        let int = this.Data.readUInt8(this.tell);
        this.seek(1);
        return int;
    }
    readFloat() {
        let float = this.Data.readFloatLE(this.tell);
        this.seek(4);
        return float;
    }
    readString() {
        let length = this.readInt32();
        return this.read(length).toString('utf8');
    }
    write(buf) {
        this.seek(this.Data.write(buf, this.tell));
    }
    writeInt32(num) {
        this._offset = this.Data.wirteInt32LE(num);
    }
    writeInt16(num) {
        this._offset = this.Data.writeInt16LE(num);
    }
    writeUInt8(byte) {
        this._offset = this.Data.writeUInt8(byte);
    }
    writeFloat(num) {
        this._offset = this.Data.writeFloatLE(num);
    }
}