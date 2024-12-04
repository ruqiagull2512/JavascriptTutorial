let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
// console.log(myDate.toJSONg());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toUTCString());


// create date 

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());



//timestamp
let timeStamp = Date.now()
console.log(timeStamp);
console.log(Math.floor(Date.now()/1000));


// other method to get date

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

