const throttle = require('lodash.throttle');

const form = document.querySelector('form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

function onInput() {
    const feedbackOutput = {
        email: inputEmail.value,
        message: inputMessage.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackOutput));
}

if (localStorage.getItem('feedback-form-state')) {
  const storagedData = localStorage.getItem('feedback-form-state');
    const storagedDataJSON = JSON.parse(storagedData);
  
    inputEmail.value = storagedDataJSON.email;
  inputMessage.value = storagedDataJSON.message;
    }
    


  
function onSubmit(evt) {
  evt.preventDefault();
  if (evt.currentTarget.email.value ==='' || evt.currentTarget.message.value ==='' ) {
      alert('Заповніть всі поля');
  } else {
    const storagedData = localStorage.getItem('feedback-form-state');
    const storagedlDataJSON = JSON.parse(storagedData);
    
    
    console.log(storagedlDataJSON);
    form.reset();
    localStorage.clear();
  }

    
}