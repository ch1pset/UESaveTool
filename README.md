# UESaveTool

A Node.js implementation for deserializing and converting GVAS/.sav files to JSON and vice-versa.

## Usage
You must have [Node.js](www.nodejs.org) Version 16.7.0+ installed


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


## Disclaimer
This script was built for the BPM: Bullets Per Minute community, but this may prove useful for other UE-based games. It is not guaranteed to work for all UE game saves.


## Credits
#### GVAS Converter
https://github.com/13xforever/gvas-converter

#### UeSaveSerializer.py
https://gist.github.com/Rob7045713/2f838ad66237f87c86d5396af573b71c

