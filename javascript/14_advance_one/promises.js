const promiseOne = new Promise(function(resolve, reject){
    //Do any asyn call
    //DB calls, cryptography, netwrok calls

    setTimeout(function(){
        console.log('Asyn task is completed');
        resolve()   //without this tag promis will not consumed
    },1000)

})
promiseOne.then(function(){
    console.log("Promises Consumed");
    
})


//Another method to create promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2 is completed");
        resolve()
        
    },1000)
}).then(function(){
    console.log("promise 2 consumed");
    
})

// promise three when we assign anything in resolve it will display by then 

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        // when data for networking
        resolve({username:"Ruqia", email:"123@mail.com"})
        

    },1000)
})

promiseThree.then(function(user){
console.log(user);

    
})

//Four promise

const promiseFour = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = false
        if (!error ) {
            resolve({username:"Ruqia",passwor:"1234"})
            
        } else{
            reject("Error:Something went wrong")
        }

        
      },1000)
})
 promiseFour.then(function(user){
  console.log(user);
  return user.username
      
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("Promises is either resolved or rejected");
    
})


//Promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false
        if (!error) {
            console.log({username:"Javascript", password:"34566"});
            
            
        } else{
            reject("Error: JS went wrong")
        }

    },1000)
})
async function consumedPromiseFive (){
    try {
        const response =  await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
        
    }
    
}
consumedPromiseFive()

//next by asyns method 

// async function getAllUsers(){
//    try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     response.json()
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E:", error);
    
    
//    }
   
// }
// getAllUsers()


//Now we do it by another method of then and catch

fetch('http://api.github.com/users/hiteshchoudhary')
.then( function(response){
    return response.json

})
.then(function(data){
    console.log(data);
    
})
.catch(function(error){
    console.log(error);
    
})