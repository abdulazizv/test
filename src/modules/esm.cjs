
import path from 'path'
import {dirname} from 'path'
import {release,version} from 'os'
import { createServer as createServerHttp } from 'http';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import './files/c.js';

const random = Math.random()

const {default: unknownObject} = random > 0.5 ?
    await import('./files/a.json',{assert:{type:'json'}}):
    await import('./files/b.json',{assert:{type:'json'}});

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

console.log(`Path to current file is ${__filename}`)
console.log(`Path to current directory is ${__dirname}`)

const createServer = createServerHttp((_,res) => {
    res.end(`Request accepted`)
})
export {
    unknownObject,
    createServer
}
