///singleton

const tinderUser= {}
tinderUser.id="1234"
tinderUser.name="Ruqia"


console.log(tinderUser);

const regularUser = {
    email: "ruqia@",
    fullname :{
        userfullname:{
            firstname:"Ruqia",
            lastname:"Gul"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);


// join object
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

// const obj3= Object.assign( {}, obj1,obj2)
// console.log(obj3);
// another method to combine two object like array
const obj3 = {...obj1, ...obj2}
console.log(obj3);
 
//futher operation on above define tinderuser
console.log(tinderUser);
console.log(Object.keys(tinderUser));// give only keys
console.log(Object.values(tinderUser));// give value corresponding to keys
console.log(Object.entries(tinderUser));// convert each key-value pair in separate array

console.log(tinderUser.hasOwnProperty('id')); // to check either object has id key 



/// de-structuring object

const  course ={
    coursename:"MERN Stack",
    price:6000,
    mentor: "Sir Qamar naveed"
}

const {mentor:underMentorship}= course/// under mentorship is de-structure my mentor key from object
console.log(underMentorship);
// console.log(course);

//API can contain data in object  and object has no name and sometimes in array
// {
//     name:"Ruqia",
//     course:"development"
// }