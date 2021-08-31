# UESaveTool

A Node.js implementation for deserializing and converting GVAS/.sav files to JSON and vice-versa.

## Usage
You must have [Node.js](www.nodejs.org) Version 16.7.0+ installed.  
Download this entire repo by clicking on the `Code` button above.


#### Deserialization into JSON
```
node ./UEDeserializer.js [GSAV/.sav path]
```
This generates a file: `output.json` in the script directory

#### Serialization into GVAS/sav
```
node ./UESerializer.js [JSON path]
```
This generates a file: `output.sav` in the script directory

#### Using `Gvas` class for deserialization
```js
import * as fs from 'fs'
import { Gvas } from './models/index.js'

fs.readFile(path, (err, buf) => {
    if(err) throw err;

    const gvas = new Gvas();
    gvas.deserialize(buf);
    
    // manipulate gvas here
})
```

#### Using `Gvas` class for serialization
```js
import * as fs from 'fs';
import { Gvas } from './models/index.js';

const gvas = Gvas.from(obj);
fs.writeFile('./output.sav', gvas.serialize(), (err) => {
    if(err) throw err;
})
```

## Implementation Notes
If you want to expand functionality of this tool, you should follow the design patterns implemented within:
+ All Properties extend from the `Property` class which has 3 functions: `get Size()`, `serialize()`, and `static from()`
+ Properties are in charge of serializing themselves due to the unique formatting for each property
+ Deserialization is handled by the `GvasDeserializer` class
+ Never instantiate a `Property` with `new`, instead, you should use the `PropertyFactory.create()` static function, which passes an object argument to the `from()` function implemented within the specified property type
+ For integration in other projects, you should use the `Gvas` class, which has 4 functions: `get Size()`, `deserialize()`, `serialize()`, and `static from()`
+ `deserialize()` accepts a `Buffer` as an argument, and returns the `Gvas` instance populated by the `deserialize()` function

## Disclaimer
This script was built for the BPM: Bullets Per Minute community, but this may prove useful for other UE-based games. It is not guaranteed to work for all UE game saves.

## Credits
#### GVAS Converter
https://github.com/13xforever/gvas-converter

#### UeSaveSerializer.py
https://gist.github.com/Rob7045713/2f838ad66237f87c86d5396af573b71c

