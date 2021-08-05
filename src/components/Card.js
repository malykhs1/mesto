export default class Card {
	constructor({ data, cardSelector, userId, handlers }) {
		this._name = data.name;
		this._link = data.link;
		this._ownerId = data.owner._id;
		this._likes = data.likes;
		this._cardId = data._id;
		this._userId = userId;
		this._cardSelector = cardSelector;

		//блок хэндлеров карточки
		this._handleCardClick = handlers.handleCardClick;
		this._handleLikeClick = handlers.handleLikeClick;
		this._handleDeleteButton = handlers.handleDeleteButton;
	}

	getCardId() {
		return this._cardId;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._cardSelector)
			.content.querySelector('.card')
			.cloneNode(true);
		return cardElement
	}

	_toggleLIke = () => {
		this._handleLikeClick(this._cardId, this.isLiked)
		.then((data) => {
			this._likeButton.classList.toggle('card__like_active');
			this.isLiked = !this.isLiked;
			this._likesCounter.textContent = data.likes.length;
		})
		.catch((error) => {
			console.log(error)
		})
	}

	//логика клика на лайк пользователем
	likeCardClickByUser = (card) => {
		if (this._likes.some(person => person._id === this._userId)) {
			this._likeButton.classList.add('card__like_active');
		}
	}

	updateLikes = (card) => {
		this._likesCounter.textContent = this._likes.length
	}
	_deleteCheck = () => { //метод проверит собственника карточки и даст удалить карточку только ее владельцу
		if (this._userId !== this._ownerId) {
			this._deleteButton.classList.add('card__delete-button_hiden')
		} else {
			this._deleteButton.classList.remove('card__delete-button_hiden')
		}
	}

	_setEventListeners = () => {

		this._likeButton.addEventListener('click', () => {
			this._toggleLIke()
		});

		this._deleteButton.addEventListener('click', () => {
			this._handleDeleteButton()
		});

		this._cardImage.addEventListener('click', () => {
			this._handleCardClick(this._name, this._link)	
		});
	}

	generateCard() {
		this._element = this._getTemplate();
		this._cardTitle = this._element.querySelector('.card__title');
		this._cardImage = this._element.querySelector('.card__image');
		this._likeButton = this._element.querySelector('.card__like');
		this._likesCounter = this._element.querySelector('.card__likes-counter');
		this._deleteButton = this._element.querySelector('.card__delete-button');
		this._cardImage.alt = this._name;
		this._cardTitle.textContent = this._name;
		this._cardImage.src = this._link;
		this._deleteCheck()
		this._setEventListeners();
		return this._element;
	}

	deleteCard = () => {
		this._element.remove();
		this._element = null;
	}
}