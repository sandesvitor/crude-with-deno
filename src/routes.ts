import express, { Response, Request, Router} from 'express'
import User from './model/User'

const users:Array<User> = []
let idIncrement:number = 1

const routes: Router = express.Router()

routes.post('/users', (req: Request, res: Response) => {
    console.debug("############### POST REQUEST: STAR ##############")
    const id:number = idIncrement
    idIncrement++

    const name:string = req.body.name
    const email:string = req.body.email
    
    const user: User = new User(id, name, email)
    users.push(user)

    console.debug(user)
    console.debug("############### POST REQUEST: DONE ##############\n")
    return res.status(200).json(user)
})

routes.get('/users', (req: Request, res: Response) => {
    console.debug("############### GET REQUEST: STAR ###############")
    console.log(users)
    console.debug("############### GET REQUEST: DONE ###############\n")
    return res.status(200).json(users)
})

routes.get('/users/:id', (req: Request, res: Response) => {
    console.debug("############### GET BY ID REQUEST: START ###############")
    const userId:number = parseInt(req.params.id)
    
    const userById:User | undefined = users.find((user:User):User | Error => {
        if (user.id === userId){
            return user
        } else {
            console.debug("############### GET BY ID REQUEST: DONE ###############\n")
            throw new Error("User not found")
        }
    })

    console.log(userById)
    console.debug("############### GET BY ID REQUEST: DONE ###############\n")
    return res.status(200).json(userById)
})

export default routes