export default class Card {
	constructor(data, cardSelector, popupPhotoClickTitle, popupPhotoClickImage, popupPhoto, openPopup) {
		this._name = data.name;
		this._link = data.link;
		this._cardSelector = cardSelector;
		this._popupPhotoClickTitle = popupPhotoClickTitle;
		this._popupPhotoClickImage = popupPhotoClickImage;
		this._popupPhoto = popupPhoto;
		this._openPopup = openPopup;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._cardSelector)
			.content.querySelector('.card')
			.cloneNode(true);
		return cardElement
	}

	generateCard() {
		this._element = this._getTemplate();
		this._setListeners();

		this._element.querySelector('.card__image').src = this._link;
		this._element.querySelector('.card__image').alt = this._name;
		this._element.querySelector('.card__title').textContent = this._name;

		return this._element;
	}

	_deleteCard = () => {
		this._element.remove();
	}

	_likeCard = () => {
		this._element.querySelector('.card__like').classList.toggle('card__like_active');
	}

	_openPhotoPopup = () => {
		this._popupPhotoClickTitle.textContent = this._element.querySelector('.card__title').textContent;
		this._popupPhotoClickImage.alt = this._element.querySelector('.card__image').alt;
		this._popupPhotoClickImage.src = this._element.querySelector('.card__image').src;
		this._openPopup(this._popupPhoto);
	}

	_setListeners() {
		this._element.querySelector('.card__delete-button').addEventListener('click', this._deleteCard);
		this._element.querySelector('.card__like').addEventListener('click', this._likeCard);
		this._element.querySelector('.card__image').addEventListener('click', this._openPhotoPopup);
	}
}