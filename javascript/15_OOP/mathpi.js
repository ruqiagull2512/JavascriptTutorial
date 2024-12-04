console.log(Math.PI);
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

const course={
    name:"JS", 
    price:500,
    isAvailable:true,
    oderchai:function(){
        console.log("Course not available");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(course,"name"));

//above getownpeopertydescriptor give name properties now I want to chnage property by method

// Object.defineProperty(course, 'name',{
//     writable:false,
//     configurable: false

//  })

//  console.log(Object.getOwnPropertyDescriptor(course,"name"));

 //object.entries make couse ittrateable otherwise course object will not be ittratable
 
for (let [key, value] of Object.entries(course)) {
    if (typeof value!== 'function') {
    console.log(`${key}: ${value}`);

        
    }
    
    
}