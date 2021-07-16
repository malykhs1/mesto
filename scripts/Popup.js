export default class Popup {
    constructor (popupSelector) {
        this._popupSelector =  popupSelector;
        this.setEventListeners()
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close(this._popupSelector);
        }
    }

    _handleCloseByOverlay(event) {
        if (event.target === event.currentTarget) {
          this.close(this._popupSelector)
      }
  }

    setEventListeners() {
        const close = this._popupSelector.querySelector(".popup__close-button");
        close.addEventListener("click", () => {
            this.close()
        });
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        })
        this._popupSelector.addEventListener('click', (evt) => {
            this._handleCloseByOverlay(evt)
        })
    }
}

