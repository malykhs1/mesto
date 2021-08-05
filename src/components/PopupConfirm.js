import Popup from '../components/Popup.js';
export default class PopupConfirm extends Popup {
    
    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popupSelector.querySelector('.popup__form');
        this._confirmButton = this._popupSelector.querySelector('.popup__save-button')
      }
    
      setEventListeners() {
        console.log(this._popupForm);
        this._popupForm.addEventListener('submit', (event) => {
          event.preventDefault();
          this._handleFormSubmitCallback();
        });
        super.setEventListeners();
      }

      setNewHandler(action) {
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