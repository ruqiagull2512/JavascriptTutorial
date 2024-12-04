// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element ==5) {
        
        console.log("5 is best number");
        
    }
    console.log(element);
    
    
}



// nested for loop
for (let i = 1; i <=10; i++) {   // outer run 1 times and inner 10 times 
    console.log(`Outer loop is : ${i}`);
    
for (let j = 1; j <=10; j++) {
// console.log(`inner loop is $ : ${j} and inner loop is ${i}`);
console.log(i + '*' +j +'=' + i*j);

    
}    
}


///array
let myArr =["flash","badman","superman"]
for (let a = 0; a < myArr.length; a++) {
    const element = myArr[a];
    console.log(element);
    
    
}

// to stop loop by two words 
// break and continue
for (let b = 1; b <=20; b++) {  // in this code after detecting 5 , loop will be ended
    const element = b;
    if (b==5) {
    
        console.log(`Detected 5`);
        break  // using contine instead of break the loop will not be stop after dedecting 5
        
    }
    console.log(element);
    
    
}