function SetUseranme(username){
    //complex DB call 
    this.username = username
}

function createUser(username, email, password){

    SetUseranme.call(this, username)// call and this keyword  will call user name from outer function without these keyword username will not be accesssed
    this.email= email
    this.password= password
}
 const user = new createUser("Ruqia","abc@gmail.com", 123)
console.log(user);
