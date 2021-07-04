export default class FormValidator {
  constructor(data, form) {
    this._formElement = data.formElement;
    this._inputElement = data.inputElement;
    this._submitButton = data.submitButton;
    this._submitButtonUnactive = data.submitButtonUnactive;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
    this._buttonElement = this._form.querySelector(this._submitButton);
    this._inputList = Array.from(this._form.querySelectorAll(this._inputElement));
  }
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };


  toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._submitButtonUnactive);
      this._buttonElement.disabled = true;
      this.disableSubmitButton();
    } else {
      this._buttonElement.classList.remove(this._submitButtonUnactive);
      this._buttonElement.disabled = false;
    }
  };

  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._submitButtonUnactive);
    this._buttonElement.disabled = true;
  } 

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };


  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners(this._form);
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  };
}