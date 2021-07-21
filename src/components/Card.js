

export default class Card {
	constructor(data, cardSelector, handleCardClick) {
		this._name = data.name;
		this._link = data.link;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
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
		this._cardImage = this._element.querySelector('.card__image');
		this._cardLike = this._element.querySelector('.card__like');
		this._setEventListeners();
		this._cardImage.src = this._link;
		this._cardImage.alt = this._name;
		this._element.querySelector('.card__title').textContent = this._name;

		return this._element;
	}

	_deleteCard = () => {
		this._element.remove();
	}

	_likeCard = () => {
		this._cardLike.classList.toggle('card__like_active');
	}

	_setEventListeners = () => {
		this._element.querySelector('.card__delete-button')
		.addEventListener('click', () => this._deleteCard());

		this._cardLike.addEventListener('click', () => this._likeCard());

		this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
}
}

