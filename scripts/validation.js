function enableValidation(config) {
    const form = document.querySelector(config.formSelector);

    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('input', (event) => handleFormInput(event, config));
}

function handleFormSubmit (event) {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity(); 
}

function handleFormInput (event, config) {
    const input = event.target; 
    const form = event.currentTarget; 
    setCustomError(input, config);
    setFieldError(input);
    setSubmitButtonState(form, config);
}

function setCustomError(input, config) {
    const validity = input.validity; 

    input.setCustomValidity('');
    if (validity.typeMismatch) {
        input.setCustomValidity(config.mismatchErrorMessage);
        input.classList.add('popup__input_type_error');
    }

    if (validity.tooShort || validity.tooLong) {
        const currentLength = input.value.length;
        const min = input.getAttribute('minlength');
        input.setCustomValidity(`Минимальное количество символов: ${min}. Длина текста сейчас: ${currentLength}`);
        input.classList.add('popup__input_type_error');
    } 
    
    if (validity.tooShort === validity.tooLong) {
        input.classList.remove('popup__input_type_error');
    }
}

function setFieldError(input) {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage; 
}

function setErrorBorder (input) {
    const input1 = document.querySelectorAll('.popup__input');
    const isValid = input.checkValidity();
    if (isValid) {
        input1.classList.add('popup__input_type_error');
    } 
    else {
        input1.classList.remove('popup__input_type_error');
    }
};

 function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.submitButton);
    const isValid = form.checkValidity();
    if (isValid) {
        button.classList.add(config.buttonIsValid);
        button.classList.remove(config.buttonIsUnvalid);
        button.removeAttribute('disabled');
    }  else {
        button.classList.remove(config.buttonIsValid);
        button.classList.add(config.buttonIsUnvalid);
        button.setAttribute('disabled', 'disabled');
    }
}
 
const configs = [
    {
        formSelector: '.popup__form[name="form-edit-profile"]',
        submitButton: '.popup__save-button',
        buttonIsValid: 'popup__save-button-valid',
        buttonIsUnvalid:'popup__save-button-unvalid',
    },
    {
        formSelector: '.popup__form[name="form-edit-card"]',
        submitButton: '.popup__save-button',
        mismatchErrorMessage: 'Введите адрес сайта',
        buttonIsValid: 'popup__save-button-valid',
        buttonIsUnvalid:'popup__save-button-unvalid',  
    },
];

configs.forEach(config => enableValidation(config));