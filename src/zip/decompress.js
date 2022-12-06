import { createUnzip } from 'zlib';
import {readdir} from 'fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream, createWriteStream } from 'fs';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const decompress = async () => {
     const writeStream = createWriteStream(__dirname+'/files/filesTocompress.txt')
     const readStream = createReadStream(__dirname + '/files/archive.gz')
     const fromGz = createUnzip()
     readStream.pipe(fromGz).pipe(writeStream)
     console.log('Succes! unarchived!')
};

await decompress();