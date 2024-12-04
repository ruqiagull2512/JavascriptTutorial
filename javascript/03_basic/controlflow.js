const temperature = 41
if (temperature<50) {
    console.log("temperature is less than 50");
    
    
}
else{
console.log("temperature greater than 50");
}

//nested 
const balance= 1000
if (balance<500) {
    console.log("Balance is less than 500");
    
    
} else if(balance <750){
    console.log("Balance is less than 750");


}else{
    console.log("Balance is equal to 1000");

}

//both condition checker
let userLogIn=true
let debitCard= true
let loginGoogle=false
let loginEmail=true

if (userLogIn && debitCard) { //&& both must be true
    console.log("Buy Now");
    
    
}
if (loginEmail|| loginGoogle) {// || one must be true
    console.log("Successfullly Login");
    
    
}
