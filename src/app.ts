import express, { Application }from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app: Application = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

app.listen(5000, () => console.log('Server running'))

