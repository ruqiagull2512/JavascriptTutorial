const password="Hani123#"
if (password) {
    console.log("successfully login");
    
    
} else{
    console.log("Enter your password");


}

//false values

//false, 0, -0, BigInt contain 0n ,"", null, undefined, nan

//truthy values

//"0", "false"," ",[],{ }, function(){}
// empty array, empty object, empty function, false in string , 0 in sring, quotation with spaces these are all truthy values 

const emptyObj ={}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
    
}

//nullish coalescing operator(??) this work on two , null and undefined
 let val1;
 //val1= 5??10   // this take 1st value but in firebase it is necessary to use it
 //val1= null??10  // incase of null and undefined it will take 2nd value
 val1= undefined??10 
 console.log(val1);
 

 //terniary operator

 // contain ?:true, false
  const teaPrice =100
  teaPrice<=80 ? console.log("less than 80"): console.log("more than 80")
  
  