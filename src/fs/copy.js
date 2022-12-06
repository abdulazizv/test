import {access,mkdir,copyFile,readdir} from 'fs/promises'
import {fileURLToPath} from 'url'
import  { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const copy = async () => {
  const srcDir = __dirname + '/files'
  const destDir = __dirname + '/files_copy'
  try {
    await access(destDir)
    throw new Error('Fs operation failed')
  } catch (error) {
    try {
      if(error.message == 'Fs operation failed'){
        throw new Error(error)
      }
      const dirFiles = await readdir(srcDir)
      await mkdir(destDir)
      await Promise.all(dirFiles.map(i => copyFile(`${srcDir}/${i}`,`${destDir}/${i}`)))
      console.log('Succes')
    } catch (error) {
      throw new Error(error.message)
    }
  }
};
copy();