class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`${this.username}: Welcome user`);
        
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)  // this super keyword see the word long extend which is user then this will take name from user class 
        this.email = email;
        this.password= password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}
const chai = new Teacher("Ruqia","t@gmail.com" ,"123")
chai.addCourse()

const coffee = new User("GUl")
coffee.logMe()

console.log(chai===coffee);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);

