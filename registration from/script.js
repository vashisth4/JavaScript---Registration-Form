const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//getFieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}


//show input error
function showError(input, message){
    const formControl =input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText= message;
}

//show success

function showSuccess (input){
    const formControl =input.parentElement;
    formControl.className = 'form-control success';
}
//check email 

function checkEmail(input){

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

///check required fields
function checkRequired(inputArr){
    inputArr.forEach( function(input){
        if(input.value.trim()== '')
        {
            showError(input, `${getFieldName(input)} is Required`);
         }
        else {
            showSuccess(input);
        }
   
    });

}

//check length
function checkLength(input ,min ,max){  
    if(input.value.length<min  && input.value.length>0){
        showError(input, `${getFieldName(input)} must be atleast ${min} char`);
        
    }
    else if(input.value.length>max ){
        showError(input, `${getFieldName(input)} must be more then ${max} char`);

    }   
    else
    {
        if(input.value.length>0){
        showSuccess(input);
        }
    }
}
//check Password

function CheckPassword(input1 ,input2){
    
    if (input1.value !== input2.value){

showError(input2, "Password do not match" );
    }
   }



//Event Listener on submit buttonn
form.addEventListener('submit', function(e){ 
    e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(password, 6, 20);
  checkLength(username, 5, 12);
  checkEmail(email);    
  CheckPassword(password,password2);
}   


);  