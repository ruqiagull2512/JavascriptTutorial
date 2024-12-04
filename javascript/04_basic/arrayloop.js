//for of loop  on array
//["", "", ""] array contain string
//[{},{}]   array contain object

const arr=[1,2,3]
for (const num of arr) {
    console.log(num);
    
    
}

// for of loop on string 
const greeting ="Hello world"
for (const value of greeting) {
    console.log(value);
    
    
}

// maps in javascript  // map contain unique value
const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "UNITED STATE AMERICA")
map.set('FR', "FRANCE")
console.log(map);

// for of loop on map
for (const [key, value] of map) {
    console.log(key , ':-' , value);
    
    
}


/// object 
const myObj ={
    1:"candy crush",
    2:"blueberry"
}

// for of loop not working on object
// for (const [key, value] of myObj) {
//     console.log(key,':-', value);
    
    
// }

