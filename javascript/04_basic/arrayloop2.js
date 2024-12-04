const Obj ={
    1:"candy",
    2:"crush"
}
 // for in loop work on object
 for (const key in Obj) {
    //console.log(Obj[key]);// this give only value corresponding to key
    console.log(`${key} game name is : ${Obj[key]}`);
    
    
 }

 // for in loop for array
 const arr =["Ruby", "programming", "javascript"]
 for (const key in arr) {
    console.log(arr[key]);
    
   
 }

 // for each loop
 const myArr=["program","coding","debug"]
 myArr.forEach( function  (item){
    console.log(item);
    // by arrow function
    // myArr.forEach((value)=>{
    //     console.log(value);
        
    // })

 })

//  function printMe(num){
//     console.log(num);
    
//  }
//  myArr.forEach(printMe)

// this is separate function

//  myArr.forEach((item, index,arr)=>{
//     console.log(item, index, arr);
    


//  })

//for each for an array containing multiple function
const myCoding =[
    {
    1:"AS",
    2:"EF"
},
{
    3:"gS",
    4:"pF"
}  ,

{
    5:"dS",
    6:"sF"
}
]
myCoding.forEach((item)=>{
    console.log(item);
    

})
