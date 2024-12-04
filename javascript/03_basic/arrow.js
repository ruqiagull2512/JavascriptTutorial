const user ={
    username:"ABC",
    price:455,
    welcomemsg:function(){
        console.log(`${this.username}, welcome to website `);
        
    }
}
user.welcomemsg()


// function by arrow

const addTwo = (num1, num2)=>{
    return num1 + num2
}
console.log(addTwo(3,5));
 // implict return 
 const addThree = (num1, num2)=>(num1 + num2) // when we remove {} and put () , it nessary to remove return also

console.log(addThree(3,5));


// global scope sy polution hoti ha is laiy function ko ( ) mai likh dety han

(function user(){
    console.log("DOB");
    
})();


// now write above function by arrow method

((name) => {
    console.log(`DOB, ${name}`);


})("Ruqia");