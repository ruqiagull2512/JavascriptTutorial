// sigleton(object.create in this method object will be singleton)

// object literal
 
const person ={
    name : "F@",
    age: 23,
    email:"fahimeshakir@",
    
}
console.log(person.email);
console.log(person["email"]);

// declare symbol and pass a key value and its type will also be key (interview Question)


const mySym = Symbol("myKey1")
const person1 ={
    name : "F@",
    age: 23,
    email:"fahimeshakir@",
    [mySym ]: "myKey1"   // without [] bracket it type will be string and its type will also be known by puting [] not type of [](without [] it will give type , string)
    
}
console.log( person1[mySym])


//freeze to make no change in object


Object.freeze(person1)
//change email
person1.email ="MFS@gmail.com"
console.log(person1);



// function in objects

person.greeting = function(){
    console.log("Welcome to mypage")
}

console.log(person.greeting())


person.greetingTwo = function(){
    console.log(`Welcome to mypage, ${this.name}`);

}
console.log(person.greetingTwo());








