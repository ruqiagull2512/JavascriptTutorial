function addTwoNumber(number1, number2){
    // console.log(number1 + number2)
    // let result = number1 + number2
    // return result
    return number1 + number2 // when you used return , you will to declare variable outside the function
}
const result=addTwoNumber(5,6)
console.log("Result:", result);


function loggedIn(username){
    if(username === undefined){
        console.log("Please Enter user name");
    }
    return `${username} just logged in`
}
console.log(loggedIn("Ruqia"));

/// card price calculate

function calculateCardPrice(...num1){
    // by puting ... dots it wil show all value in array , without ... it show only 1 digit 
    return num1
}
console.log(calculateCardPrice(3, 4, 5, 6));


// handle object by function

const user={
    username:"Ruqia",
    price:500
}
 
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)


// handle array by function
const myArr = [1,3,4,5,6]
function returnSecondValue(getArray){
    return getArray[3]

}
console.log(returnSecondValue(myArr));
