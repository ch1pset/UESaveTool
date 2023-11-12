# UESaveTool
A Node.js implementation for deserializing and converting GVAS/.sav files to JSON and vice-versa.

[![npm version](https://badgen.net/npm/v/uesavetool)](https://www.npmjs.com/package/uesavetool) [![npm license](https://badgen.net/npm/license/uesavetool)](/LICENSE)

## Usage
You must have [Node.js](www.nodejs.org) Version 16.7.0+ installed.  
Download/Clone this entire repo by clicking on the `Code` button above.

#### Convert Between .sav and .json
```
node ./uesavetool.js [mode: -sav-to-json, -json-to-sav] [input path] [output path?]
```

#### Pipe output to another script
```
node ./uesavetool.js [mode] [input] | my-script
```

## Adding to your project

First things first:
```
npm install uesavetool
```
Also set `type` as `module` in `package.json`. Only `ESModules` are supported currently.
```json
{
  "type": "module"
}
```

#### Using `Gvas` class for deserialization
```js
import * as fs from 'fs'
import { Gvas, Serializer } from 'uesavetool'

fs.readFile(sav-path, (err, buf) => {
    if(err) throw err;

    const gvas = new Gvas();
    const serial = new Serializer(buf);
    gvas.deserialize(serial);
    
    // manipulate gvas here

    fs.writeFile(json-path, JSON.stringify(gvas), (err) => {
        if(err) throw err;
    })
})
```

#### Using `Gvas` class for serialization
```js
import * as fs from 'fs';
import { Gvas } from 'uesavetool';

fs.readFile(json-path, 'utf8', (err, data) => {
    if(err) throw err;

    const gvas = Gvas.from(JSON.parse(data));

    // manipulate gvas here

    fs.writeFile(sav-path, gvas.serialize(), (err) => {
        if(err) throw err;
    })
})
```

## Implementation Notes
If you want to expand functionality of this tool, you should follow the design patterns implemented within:
+ All Properties extend from the `Property` class which has 4 functions: `get Size()`,`deserialize()`, `serialize()`, and `static from()`
+ Properties are in charge of serializing/deserializing themselves due to the unique formatting for each property
+ Use the `Serializer` class to read/write data on it's internal `Buffer`
+ Never instantiate a `Property` with `new` outside of a constructor or it's own `from` function, instead, you should use the `PropertyFactory.create()` static function, which passes an object argument to the `from()` function implemented within the specified property type
+ For integration in other projects, you should use the `Gvas` class, which has 4 functions: `get Size()`, `deserialize()`, `serialize()`, and `static from()`
+ `deserialize()` accepts a `Serializer` as an argument, and returns the `Gvas` instance
+ Properties' names must be exactly the same as in the .sav
+ `Array` properties are implementation dependent due to unique serialization
+ Size calcualated by `get Size()` is NOT written to the serialized data buffer. That value is usually, but not always, the total size of the property/properties within the current `Property`.

#### Adding a new `Property` type
`AnotherPropery.js`
```js
import { 
    Property,
    PropertyFactory,
    Serializer
} from 'uesavetool'

export class AnotherProperty extends Property {
    constructor() {
        super();
        // Attributes specific to this property type
        // Use this.Property for it's value(s)
    }
    get Size() {
        // Calculate number of bytes for serialization. Including this.Name and this.Type
        // Each string attribute will have a 4-byte size followed by that actual string
        let size = this.Name + 4;
        size += this.Type + 4;
        // this.Property may be another `Property` with it's own `Size` getter
        return size;
    }
    deserialize(serial, size) {
        // Serial is a `Serialzer` to make this easier
        // If `size` is passed, use `serial.tell < (start_offset + size)` as a loop condition
        // Do not deserialize this.Name, this.Type or the serialized Size here.
        // This function is called from the parent Property which already deserializes them
        // The Size that is deserialized here is not the same as this.Size
        return this;
    }
    serialize() {
        let serial = Serializer.alloc(this.Size);
        serial.writeString(this.Name);
        serial.writeString(this.Type);
        serial.writeInt32(/* this.Property size in bytes */)
        serial.seek(/* padding length */)
        // serialize this.Property
        return serial.Data;
    }
    static from(obj) {
        let prop = new AnotherProperty();
        prop.Name = obj.Name
        prop.Type = obj.Type
        if(obj.Property) {
            // If this.Property is a value
            prop.Property = obj.Property

            // If this.Property is a `Property`
            prop.Property = PropertyFactory.create(obj.Property);
        }
        return prop;
    }
}
```
`index.js`
```js
import { PropertyFactory } from 'uesavetool'
import { AnotherProperty } from './AnotherProperty.js'

PropertyFactory.Properties['AnotherProperty'] = AnotherProperty;

export { AnotherProperty }
```

#### Adding a new `Array` type
Essentially the same as adding a new `Property` type, but since `ArrayProperty.StoredPropertyType` will be a normal `Property` name, adding to `PropertyFactory` is different. Also `Size` will **ONLY** include the size of it's properties.

`index.js`
```js
import { PropertyFactory } from 'uesavetool'
import { AnotherProperty } from './AnotherProperty.js'
import { AnotherPropertyArray } from './AnotherPropertyArray.js'

PropertyFactory.Properties['AnotherPropertyArray'] = AnotherPropertyArray //Needed if `Type` string ends with "Array" after being stored
PropertyFactory.Arrays['AnotherProperty'] = AnotherPropertyArray //

export { AnotherPropertyArray }
```

#### Notes on `PropertyFactory.js`
`PropertyFactory` will automatically trim null-terminating characters from strings. The name of the `Property` type will be in the .sav in utf8

## Anotomy of a `Property` in a GVAS
Sizes are in Little-Endian, so the first byte read is the least significant. Strings are null-terminating. The following example is an `StrProperty` type.

|                       | Bytes                                     | Value
|:----------------------|:------------------------------------------|:------------------
| Name Size             | 0D 00 00 00                               | 13 bytes
| Name                  | 53 61 76 65 53 6C 6F 74 4E 61 6D 65 00    | "SaveSlotName\0"
| Type Size             | 0C 00 00 00                               | 12 bytes
| Type                  | 53 74 72 50 72 6F 70 65 72 74 79 00       | "StrProperty\0"
| Property Size         | 0E 00 00 00                               | 14 bytes
| Padding               | 00 00 00 00 00                            | 5 null characters
| Property Value Size   | 0A 00 00 00                               | 10 bytes
| Property Value        | 47 61 6D 65 53 74 61 74 65 00             | "GameState\0"

Padding is different for most properties. Some properties contain a `StoredPropertyType` value, such as the `StructProperty` and `ArrayProperty`. The `Tuple` does not exist in a GVAS, instead, `Tuple` was written to encapsulate lists of properties within the `StructProperty` and `Gvas.Properties`. A `Tuple` is used whenever the string `None` appears within the file and marks the end of a list of properties.

## Disclaimer
**THIS SCRIPT WAS BUILT FOR THE BPM: BULLETS PER MINUTE COMMUNITY, BUT THIS MAY PROVE USEFUL FOR OTHER UE-BASED GAMES. IT IS NOT GUARANTEED TO WORK FOR ALL UE GAME SAVES.**

## Verification Tools
##### HxD Freeware Hex Editor
https://mh-nexus.de/en/hxd/
##### Notepad++
https://notepad-plus-plus.org/

## Credits
##### GVAS Converter
https://github.com/13xforever/gvas-converter

##### UeSaveSerializer
https://gist.github.com/Rob7045713/2f838ad66237f87c86d5396af573b71c

