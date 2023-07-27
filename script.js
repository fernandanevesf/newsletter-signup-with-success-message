'strict mode'

const formContainer = document.querySelector('.form-container');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');
const emailField = document.querySelector('#email');
const submitBtn = document.querySelector('#submit');
const dismissBtn = document.querySelector('#dismiss');

function checkEmail(){
    if(!emailField.checkValidity()){
    errorMessage.classList.remove('hide');
    emailField.classList.add('input-error');
   }else{
    successMessage.classList.remove('hide');
    formContainer.classList.add('hide');
   }
}

submitBtn.addEventListener('click', checkEmail);


function dismissMessage(){
    successMessage.classList.add('hide');
    formContainer.classList.remove('hide');
}

dismissBtn.addEventListener('click', dismissMessage);
