const buttons=document.querySelectorAll("button")
const body=document.querySelector("body")
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id==='pink') {
            body.style.backgroundColor= e.target.id;
        
            
        }
        if (e.target.id==='skyblue') {
            body.style.backgroundColor=e.target.id;
            
        }
        if (e.target.id==='lightgreen') {
            body.style.backgroundColor= e.target.id;
            
        }
        if (e.target.id==='plum') {
            body.style.backgroundColor= e.target.id;
            
        }
        if (e.target.id==='purple') {
            body.style.backgroundColor="purple";
            
        }
        

    });
    

});