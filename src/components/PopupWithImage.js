import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
      constructor (popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupSelector.querySelector('.popup__image')
        this._popupTitleImage = this._popupSelector.querySelector('.popup__title')
    }

    open (name, link) {
      super.open();
        this._popupTitleImage.textContent = name;
        this._popupImage.alt = link;
        this._popupImage.src = link;
      }
}
