class User{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`Username:${this.username}`)
    }
     staticreateId(){ //static stop to give id to anyuser
        return`123` 
    }
}
const name = new User("Ruqia")
console.log(name.createId());
// Extend user by Teacher
class Teacher extends User{
    constructor(username, email){
        super(username)

        this.email=email
    }
}
const iphone = new Teacher("FSHIM", "dgjjj@gmail.com")
console.log(iphone.createId());
