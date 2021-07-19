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
		this._setEventListeners();

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

	_setEventListeners = () => {
		this._element.querySelector('.card__delete-button')
		.addEventListener('click', () => this._deleteCard());

		this._element.querySelector('.card__like')
		.addEventListener('click', () => this._likeCard());

		this._element.querySelector('.card__image')
		.addEventListener('click', () => this._handleCardClick(this._name, this._link));
}
}

