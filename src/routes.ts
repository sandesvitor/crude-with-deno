import express, { Response, Request, Router} from 'express'
import User from './model/User'

const users:object[] = []
let idIncrement:number = 1

const routes: Router = express.Router()

routes.post('/users', (req: Request, res: Response) => {
    const id:number = idIncrement
    idIncrement++

    const name:string = req.body.name
    const email:string = req.body.email
    
    const user = new User(id, name, email)
    users.push(user)

    console.debug(user)
    return res.status(200).json()
})

routes.get('/users', (req: Request, res: Response) => {
    res.send(JSON.stringify(users, null, 2))
    console.log(JSON.stringify(users, null, 2))
    return res.status(200)
})

routes.get('/users/:id', (req: Request, res: Response) => {
    const userId:number = parseInt(req.params.id)

    console.log(userId)
    return res.status(200)
})

export default routes