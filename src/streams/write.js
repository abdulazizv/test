import {createWriteStream} from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const write = async () => {
   const writeStream = createWriteStream(__dirname + '/files/fileToWrite.txt','utf-8')
   process.stdin.pipe(writeStream)
   console.log('Write anything to console and check it in fileToWrite.txt...\n') 
};

await write();