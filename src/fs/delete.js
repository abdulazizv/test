import {unlink} from 'fs/promises'
import { fileURLToPath } from 'url';
import {dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const remove = async () => {
    const srcDir = __dirname + '/files/fileToRemove.txt'
    const errMsg = "Fs operation failed"
    try {
        await unlink(srcDir)
        console.log('Removed!')
    } catch (error) {
        throw new Error(error)
    }
};

await remove();