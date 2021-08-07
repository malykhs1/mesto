import Popup from '../components/Popup.js';


export default class PopupWithForm extends Popup {
    constructor({
        popupSelector,
        handleFormSubmit
    }) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input'); // берем все возможные элементы полей в формах
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputObject = {}; // создает пустой объект, в который положим значения полей 
        this._inputList.forEach(input => this._inputObject[input.name] = input.value);
        return this._inputObject; //возвращаем объект уже со значениями
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })

    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}