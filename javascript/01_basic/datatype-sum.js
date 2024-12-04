//premitive datatype

//7type => string, number, boolean, Bigint, null, undefined,symbol

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);

const bigInt=123466789000n
console.log(bigInt);

//non-premitive datatype
// array, object, functions

 const fruit=["Mango","banana","apple"]
 console.log(fruit);


 let myobj={
    name:"Ruqia",
    age:22,
    DOB:23
 }
console.log(myobj);


const myfunction=function(){
    console.log("How are you!");

}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Types
// stack used in (premitive datatype) & heap used in (non-premitive datatype)

// stack give copy value
// heap give reference

