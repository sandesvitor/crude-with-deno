import express, { Response, Request, Router} from 'express'

const routes: Router = express.Router()

routes.post('/users', (req: Request, res: Response) => {
    const param = req.body
    res.send('<h1>Post Request</h1>')
})

routes.get('/users', (req: Request, res: Response) => {
    res.send('<h1>Get Request: All</h1>')
})

routes.get('/users/:id', (req: Request, res: Response) => {
    const userId:number = parseInt(req.body.params.id)
    res.send(`<h1>Get Request: User ${userId}</h1>`)
})

export default routes