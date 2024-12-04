const myFruit=["Apple", "mango"]
const myVeg=["onion","potato"]
myVeg.push(myFruit)
console.log(myVeg);

 const newVeg = myVeg.concat(myFruit)
console.log(newVeg);

//spread operation

const newVegtable = [...myVeg, ...myFruit]
console.log(newVegtable);

const subArr= [1,2,[3,4,5],6,[7,8]]
const newArr =subArr.flat(Infinity)
console.log(newArr);

console.log(Array.isArray("Ruqia"));// isArray check value  which is string so return false
console.log(Array.from("Ruqia")); // from convert string to array


let score1 =100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2, score3));







