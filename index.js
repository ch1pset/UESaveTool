import * as fs from 'fs';
import { Buffer } from 'buffer';
import { argv } from 'process';
import { FileIO, dword, word, byte } from './FileIO.js';
import { Reader } from './Reader.js';
import { Writer } from './Writer.js';
export { fs, Buffer, argv, FileIO, dword, word, byte, Reader, Writer }