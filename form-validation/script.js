const form = document.querySelector(".form");
const inputs = document.querySelectorAll('.form-inputs')


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInputs()
})

function validateInputs (){
   
    inputs.forEach((input, index)=>{

        const element = input.getAttribute('aria-details');
        const value = input.value.trim();
        const fieldName = input;

        if (value=== '') {
            setError(fieldName, `${element} is required`);
        }else if(element === 'email' && !validateEmail(value)){
            setError(fieldName, `${element} is invalid`);
        } else if (element === 'cpassword' && value !== inputs[2].value.trim()) {
            setError(fieldName, `${element} does not match`);
        } else {
            setSuccess(fieldName);
        }
    })
   
}

function setError(input , message) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.error');
    error.textContent = message;
    formControl.classList.add("error")
}

function setSuccess(input ) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.error');
    error.textContent = '';
    formControl.classList.add("success")
}

const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isValidEmail.test(email);
}