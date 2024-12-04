const myArr =[1,2,3,4,5]
console.log(myArr[2]);

/// shaloo copy and deep copy

//Array method
myArr.push(8,9,10)
console.log(myArr);
myArr.pop() // pop get no argument and automatically remove last value in array
console.log(myArr);
myArr.unshift(11); // unshift add arrgument element in start of array 
console.log(myArr);

myArr.shift();  // shift get no argument value and reomove unshifted value from the start of array
console.log(myArr);

console.log(myArr.includes(9)); /// include tell you element is in array or not
console.log(myArr.indexOf(4));  /// index give element on 4th index

const newArr = myArr.join()  // join convert array to string mean it remove array brackets 
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//interview Question about slice and splice
// after slice operation when I console log to myAre it will give all element but in splice operation when I colsole log to myArr it give element without splice element

console.log("A",myArr);

const sliceOpr = myArr.slice(1,3);// it give element from index 1 to 2, index 3 will not include it
console.log(sliceOpr);

const spliceOpr = myArr.splice(1,3);// it give element from index 1 to 3, index 3 will also include it
console.log(spliceOpr);
console.log(myArr);