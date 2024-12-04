let a = 30 /// this variable is global scope
if (true) {
    let a =10 // to print this value of a  i used console belong this line
    console.log(a);
    
    const b= 30
    
}
console.log(a);  // so this console will print global value


//nested function
function one(){
   const  username= "Ruqia"    // inner function can get value from outerfunction but innerfuction value cannot be accesss when write outside the scope
    function two(){
        const hobby="Gardening"
        console.log(username);
        console.log(hobby);


        
    }
    two()
    
}
one()

if (true) {
    const username="Ruqia"
    if (username == "Ruqia") {
        const hobby ="Gardening"
        console.log(username+hobby);
        
        
    }
    
}

/// +++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num+1
}
