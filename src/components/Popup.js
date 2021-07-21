export default class Popup {
    constructor (popupSelector) {
        this._popupSelector =  popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this)
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
            this.close();
        }
    }

    _handleCloseByOverlay(event) {
        if (event.target === event.currentTarget) {
          this.close()
      }
  }

    setEventListeners() {
        const close = this._popupSelector.querySelector(".popup__close-button");
        close.addEventListener("click", () => {
            this.close()
        });
        this._popupSelector.addEventListener('click', (evt) => {
            this._handleCloseByOverlay(evt)
        })
    }
}

