import {rename as giveName,access} from 'fs/promises'
import { fileURLToPath } from 'url';
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rename = async () => {
    const previousName = __dirname + '/files/properFilename.md';
    const incorrectName = __dirname + '/files/wrongFilename.txt'
    try {
        await access(previousName)
        throw new Error("Fs operation failed")
    } catch (error) {
        try {
            if(error.message == "Fs operation failed"){
                throw new Error(error)
            }
            await giveName(incorrectName,previousName)
            console.log("Succes!")
        } catch (error) {
            throw new Error(error)
        }
    }
};

rename();