function multiplyBy5(num){
    return num*5
}
console.log(multiplyBy5(5));

// or
multiplyBy5.power=2
console.log(multiplyBy5.power);

//
function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const name = new createUser("RU",56)
const name2= new createUser("GU",35)

name.printMe()