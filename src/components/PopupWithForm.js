import Popup from '../components/Popup.js';


export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
}

    _getInputValues () {
        this._inputList = this._popupForm.querySelectorAll('.popup__input');  // берем все возможные элементы полей в формах
        this._inputObj = {}; // создает пустой объект, в который положим значения полей 
        this._inputList.forEach(input => this._inputObj[input.name] = input.value);
        return this._inputObj;//возвращаем объект уже со значениями
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues()); 
        })

    }

    close() {
        super.close();
        this._popupForm.reset();
    }
    }
