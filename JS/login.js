let button = document.getElementById('LoginButton')

let email,password,message

button.addEventListener('click',(e) => {
  
     password =document.getElementById("passwordLogin");
     email = document.getElementById("emailLogin");
     console.log("1");

    let message = (value) => {
        console.log("3"+value);

        if(value=='true'){
            var message=document.getElementById("HelpForEmailPassLogin");
            console.log("4");
            message.innerText='' ;
            location.href="./index.html"
        }
        else{
            console.log("5");
         var message=document.getElementById("HelpForEmailPassLogin");
         message.innerHTML='Email Or Password Is Wrong' ;
            return false;
        }
        
    }

    validateform(email,password,message)


})

let validateform = (email,password,callback) => {
        var orgmail='admin'
        var orgPass='12345';
        console.log("2");
    if(orgPass==password.value && orgmail==email.value){
        console.log("4a");
       callback('true')

    }
    else if(orgPass!=password.value || orgmail!=email.value){
      
       console.log("5a");
       callback('false')
    }
}
