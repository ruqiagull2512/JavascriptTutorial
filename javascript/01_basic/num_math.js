const score=400
console.log(score)

const balance = new Number(100)
console.log(balance);

// string convert 100 value to string then give length otherwise length not work for numbers
console.log(balance.toString().length);


// tofixed with limit to convert larger value to small
console.log(balance.toFixed(2));


// precision work like signifant figure

const digit= 123.768990
console.log(digit.toPrecision(3));

//tolocalstring used to add quoma in larger digit numbers
const hundreds=236899000
console.log(hundreds.toLocaleString());


//+++++++++++++++++++++++++++math+++++++++++++++++++++++++++++++++
console.log(Math.abs(-7));  //absolute change negative values to positive
console.log(Math.round(45.8)); // Roundoff
console.log(Math.ceil(3.2)); // ceiling increase in value by 1
console.log(Math.floor(3.2)); // floor decrease in value by 1
console.log(Math.random());  // the value of random always be between 0 and 1



const min=10
const max= 20

console.log(Math.floor(Math.random()*(max-min+1)+min ));

