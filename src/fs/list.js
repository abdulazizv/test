import {readdir} from 'fs/promises'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const list = async () => {
    try {
        
        let array = []
        let folder = __dirname + '/files'
        const files = await readdir(folder);
        Promise.all(
          files.map((i) => {
            array.push(i)
          })
        );
        console.log(array)
    } catch (error) {
        throw new Error("Fs operation Failed")
    }
};

await list();