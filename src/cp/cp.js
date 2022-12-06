import {spawn} from 'child_process'
import { fileURLToPath } from 'url';
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const spawnChildProcess = async (args) => {
    let isInity = false
    
    const childProcess = spawn(`node`,[`${dirname}/files/script.js`,...args.split(' ')])
    process.stdin.on('data',(msg) => {
        childProcess.stdin.write(msg)
    })
    childProcess.stdout.on('data',(data) => {
        console.log(data.toString())
        if(!isInity) {
            console.log('Write something to console...')
            console.log('\n')
            isInity = true

        }
    })
};

spawnChildProcess('--silent --all');