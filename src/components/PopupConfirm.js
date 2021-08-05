import Popup from '../components/Popup.js';

export default class PopupConfirm extends Popup {
    
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.popup__form');
        this._confirmButton = this._popupSelector.querySelector('.popup__save-button')
      }
    
      setEventListeners() {
        this._form.addEventListener('submit', (event) => {
          event.preventDefault();
          this._handleFormSubmitCallback();
        });
        super.setEventListeners();
      }

      setSubmitAction(action) {
        this._handleFormSubmitCallback = action;
      }
    
      renderButtonText(isDeleting) {
        if (isDeleting) {
          this._confirmButton.textContent = 'Удаление...'
        } else {
          this._confirmButton.textContent = 'Да'
        }
      }
    
    }