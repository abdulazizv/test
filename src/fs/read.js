import {readFile} from 'fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const read = async () => {
    const file = __dirname + '/files/fileToRead.txt';
    const errMsg = "Fs operation failed"
    try {
        const text = await readFile(file,{encoding:'utf8'})
        console.log(text)
    } catch (error) {
        throw new Error(errMsg)
    }
};

read();