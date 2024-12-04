let myName ="Ruqia   "
console.log(myName.length);
console.log(myName.trueLength);

///array
let hero =["ImranKhan","Zartajgul"]

let heroPower={
    ImranKhan :"Personality",
    Zartajgul:"Wisdom",
    getmuhammadaliPower:function(){
        console.log(`MUhammad Ali Power is: ${this.honesty}`);
        
    }
}
Object.prototype.ruqia=function(){
    console.log("Ruqia is present");
    
}

Array.prototype.heyruqia=function(){
    console.log("Ruqia says hello");
    
}
heroPower.ruqia() /// this check ruqia in object
hero.ruqia()  // this check ruqia in array
  

// heroPower.heyruqia() hey ruqia ka path sirf hum ny array mai diya so object mai show nhi ho ga

hero.heyruqia() 



//Inheritance
const user ={
    name :"Ruqia"
}

const Teacher ={
    makeVideo : true
}
const TeacherSupport ={
    isAvailable : false
}
const TASupport ={
    makeAssignment:"JS assignment",
    fulltime: true,
    __proto__:TeacherSupport
}
Teacher.__proto__=user

//modern method

Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUser ="Gul"
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is :${this.trim().length}`);
    

    
}
anotherUser.trueLength()

"Ruqia".trueLength()