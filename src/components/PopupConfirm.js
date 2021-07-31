import Popup from '../components/Popup.js';

export default class popupConfirm extends Popup {
    constructor({ popupSelector, handleDeleteSubmitClick }) {
        super(popupSelector);
        this._handleDeleteSubmitClick = handleDeleteSubmitClick;
        this._deleteCardButton = this._popupSelector.querySelector('.popup__save-button');
    }

    setEventListeners = () => {
        super.setEventListeners();
        this._deleteCardButton.addEventListener('click', this._confirmDelete);
    }

    open () {
        this.setEventListeners();
        super.open();
    }

    _confirmDelete = () => {
        this._handleDeleteSubmitClick();
    }
}