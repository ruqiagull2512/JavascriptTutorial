class user{
    constructor(email, password){
        this.email = email,
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email= value
    }
    get password(){
        return this._password.toUpperCase()// is get mai password ko wo upercase bana k dy ga getter ko
    }
    set password(value){
        this._password=value   // set mai value set ho gi password ki
    }
}
const word = new user("Ruqia@gmail.com","abc")
console.log(word.password);
console.log(word.email);


//this method of getter setter more attractive syntical then getter setter by property

