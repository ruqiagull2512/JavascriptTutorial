const name="Ruqia"
const count= 12
console.log(`My name is ${name} and count is ${count}`); // modern way to concatenate two variable value


// new way to declare string

const gameName = new String("Ruqia")
console.log(gameName);
console.log(gameName.length);// give string length
console.log(gameName.toUpperCase());// convert string to uppercase letter
console.log(gameName.charAt(3));// give letter on 3 index from string
console.log(gameName.indexOf('i'));// this give i letter index number from sring


/// divde string into  sub string

const newString = gameName.substring(0,2)
console.log(newString); 


// slice fuction take -ve value to start from last of text
const anotherString =gameName.slice(-5,3)
console.log(anotherString);

// trim to remove extra spaces

const nameNew='     Ruqia    '
console.log(nameNew);
console.log(nameNew.trim())


// replace

const schoolName= "PGC"
console.log(schoolName.replace('G','A'));


// include is used to find any text or letter

console.log(schoolName.includes('P'))






