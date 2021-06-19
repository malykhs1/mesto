
const showInputError = (formElement, inputElement, errorMessage, config ) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass); 
    errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass); 
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
    });
  };

  

  const toggleButtonState = (inputList, buttonElement, config) => {
      if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.submitButtonUnactive);
        buttonElement.setAttribute('disabled', 'disabled');
      } else {
        buttonElement.classList.remove(config.submitButtonUnactive);
        buttonElement.removeAttribute('disabled');
      }
  };

 
const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
    const buttonElement = formElement.querySelector(config.submitButton); 
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
        isValid(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
        });
    });
};


  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formElement));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, config);
    });
};

enableValidation({
    formElement: '.popup__form', 
    inputElement: '.popup__input', 
    submitButton: '.popup__save-button',
    submitButtonUnactive: 'popup__save-button-unvalid', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active', 
});