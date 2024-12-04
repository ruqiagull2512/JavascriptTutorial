//ES6

class User{
    constructor(username, email, password){
        this.username= username;
        this.email = email;
        this.password= password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    capitalUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai= new User("Ruqia","abc@gmail.com",1223)
console.log(chai.encryptPassword());
console.log(chai.capitalUsername());


//behind the screen if above method was not introduce

function Users(username, email, password){
    this.username = username;
    this.emial = email;
    this.password= password
}
Users.prototype.encryptPassword=function(){
    return `${this.password}abc`


}
const coffee= new Users("tea","bjjoo@gmail.com",8999)
console.log(coffee.encryptPassword());


//both function work similarly i CAN USER NAME TO USERS I SECOND METHHOD OTHERWISE IT WILL NOT RUN

