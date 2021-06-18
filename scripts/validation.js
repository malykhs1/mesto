
const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelectorAll('.popup__input'); 
const errorMessage = formElement.querySelector(`#${inputElement.id}-error`);


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save-button'); 
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

const hasInvalidInput = (inputList) =>{
    return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
      if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__save-button-unvalid');
        buttonElement.setAttribute('disabled', 'disabled');
      } else {
        buttonElement.classList.remove('popup__save-button-unvalid');
        buttonElement.removeAttribute('disabled', 'disabled');
      }
  };

enableValidation();