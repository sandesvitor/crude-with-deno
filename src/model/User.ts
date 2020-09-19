export default class User {
    readonly id:number
    private name:string
    private email:string
    private createdAt:string
    public updatedAt:string

    constructor(id:number, name:string, email:string){
        this.id = id
        this.name = name
        this.email = email
        this.createdAt = Date.now().toString()
        this.updatedAt = Date.now().toString()
    }

    get user():object {
        return { 
            id: this.id, 
            name: this.name, 
            email: this.email,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}