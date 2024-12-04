// const Arry = []
// %DebugPrint(myArr)

//continious, holey array

//optimization in array
//SMI(small integer)
//packed element
//Double(string, float, function)
const arrayTwo =[1,2,3,5]//packed_SMI_elements(it contain only number , it also not contain decimal value)  default array is also packed SMI

arrayTwo.push(9.0)// now it become packed Double element 
arrayTwo.push('7') // packed element
arrayTwo[10]=11   //it become holy element because we contain only 6 element in array 7, 8, 9 become null , it wiill push on 10th number so it become holly array
console.log(arrayTwo);
console.log(arrayTwo.length);
console.log(arrayTwo[9]);

//bound check
//hasOwnProperty(arrayTwo,9)
//hasOwnProperty(arrayTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)

//holes are very expensive in js 

const arrThree =[1,2,3,4,5]
console.log(arrThree[8]);

//optimization trend
//SMI>Double>Packed
//H_SMI>H_Double>H_Packed

const arrFour = new Array[3]

//just 3 holes.HOLEY_SMI_ELEMENT
arrFour[0]='1'//HOLEY_element
arrFour[1]='6'//HOLEY_element
arrFour[2]='7'//HOLEY_element

const arrFive = []
arrFive.push('1')//packed-element
arrFive.push('1')//packed-element
arrFive.push('1')//packed-element







