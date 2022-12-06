import {readdir} from 'fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream, createWriteStream, write } from 'fs';
import { createGzip } from 'zlib';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compress = async () => {
    const readStream = createReadStream(__dirname + '/files/fileToCompress.txt')
    const writeStream = createWriteStream(__dirname + '/files/archive.gz')
    const toGz = createGzip()
    readStream.pipe(toGz).pipe(writeStream)
    console.log('Succes! Archived')  
};

await compress();