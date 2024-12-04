//object literal
const user ={
    username:"Ruqia", 
    login:8,
    getUser:function(){
        console.log(this);// "this" contain user object
        
        console.log(`Username : ${this.username}`);// it extraction name from user object
        

    }
}
console.log(user.username);
console.log(user.getUser());
//when  we need  user object more than one time than we make constructor function

function User(username,login){
    this.username= username;
    this.login = login;
    this.greeting =function(){
        console.log(`Welcom ${this.username}`);
        
    }
    return this   // without this statement program can also be run
}
const userOne = new User("GUL",7)
const userTwo =  new User("HJIO",9)// this will be override when we use new keyword then it will give separate instance 2. constructor create by new


console.log(userOne);
console.log(userTwo);



