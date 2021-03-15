import "reflect-metadata"
import * as express from 'express'
import * as bodyParser from 'body-parser'
import routes from '../src/port/http/routes'
import { createConnection, getConnection } from  'typeorm'

const app = express()

const con = createConnection()

console.log('connection status: '+getConnection)

app.use(bodyParser.json())
app.use(routes)

export default app