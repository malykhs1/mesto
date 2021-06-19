// редактирование профиля
const popupProfile = document.getElementById('popup-profile')
const profileEditButton = document.querySelector('.profile__edit-button');
const closePopupProfileButton = document.getElementById('popup-profile-close-button'); 
const nameEdit = document.getElementById('input-name');
const jobEdit = document.getElementById('input-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const submitButton = document.getElementById('save-card');
// добавляем картинку
const popupCard = document.getElementById('popup-card')
const photoEditButton = document.querySelector('.profile__add-button')
const popupCardCloseButton = document.getElementById('popup-card-close-button');
const cardNameEdit = document.getElementById('input-photo-name');
const cardLinkEdit = document.getElementById('input-photo-link');

// кликаем по фотке
const popupPhoto = document.getElementById('popup-image');
const popupPhotoClickImage = document.querySelector('.popup__image');
const popupPhotoClickTitle = document.querySelector('.popup__title_position_card');
const popupPhotoCloseButton = document.getElementById('popup-photo-close-button');


//открытие и закрытие попапа 

function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closeByEscape);
  }

  function closePopup (popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeByEscape);
  }

  function closeByEscape (evt) {
	  if (evt.key === 'Escape') {
		  const openedPopup = document.querySelector('.popup_opened');
		  closePopup(openedPopup);
	  }
  }

  function closeByOverlay (evt) {
	  if (evt.target === evt.currentTarget) {
		const openedPopup = document.querySelector('.popup_opened');
		  closePopup(openedPopup);
		 	}
	   }
// отправка данных попапов

function handleButtonEditPfofile () {
	nameEdit.value = profileName.textContent;
	jobEdit.value = profileJob.textContent;
	openPopup (popupProfile);
}

function submitProfileForm(evt) {
	evt.preventDefault();
	profileName.textContent = nameEdit.value;
	profileJob.textContent = jobEdit.value;
	closePopup (popupProfile);
}

function submitCardForm(evt) {
	evt.preventDefault();
	addCard(cardList,createCard(cardLinkEdit.value, cardNameEdit.value)); 
	closePopup(popupCard);
}

// определяем массив
const cardList = document.querySelector('.elements');
const initialCards = [{
	name: 'Архыз',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
	name: 'Челябинская область',
	link: 'https://mir-tourista.ru/wp-content/uploads/2019/12/resortimagehandler.jpg'
}, {
	name: 'Иваново',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
	name: 'Камчатка',
	link: 'https://photocentra.ru/images/main45/456443_main.jpg'
}, {
	name: 'Холмогорский район',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
	name: 'Байкал',
	link: 'https://etcomp.ru/templates/g5_helium/images/baikal/3r.jpg'
}];

//функция создания карточек 

function createCard (link, title) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	cardElement.querySelector('.card__image').src = link;
	cardElement.querySelector('.card__image').alt = title;
	cardElement.querySelector('.card__title').textContent = title;
	cardElementsListeners(cardElement);
	return cardElement;
}

function addCard (cardList, cardElement) {
	cardList.prepend(cardElement);
	cardNameEdit.value = '';
	cardLinkEdit.value = '';
	submitButton.setAttribute('disabled', 'disabled');
	submitButton.classList.add('popup__save-button-unvalid');
}

//работаем с массивом
const cardTemplate = document.querySelector(".card-template").content;

function initialCardElements() {
	initialCards.forEach ((item) => cardList.prepend(createCard(item.link, item.name)));
}

function likeCard(evt) {
	evt.target.classList.toggle('card__like_active');
}

function deleteCard(evt) {
	evt.target.closest('.card').remove();
}

function openPhotoPopup(evt) {
	const cardImage = evt.target.closest('.card__image');
	popupPhotoClickImage.src = cardImage.src;
	popupPhotoClickTitle.textContent = cardImage.alt;
	openPopup(popupPhoto)
}

initialCardElements();

// слушатели
function cardElementsListeners(element) {
	element.querySelector('.card__delete-button').addEventListener('click', deleteCard);
	element.querySelector('.card__image').addEventListener('click', openPhotoPopup);
	element.querySelector('.card__like').addEventListener('click', likeCard);
}


profileEditButton.addEventListener ('click', handleButtonEditPfofile);
popupProfile.addEventListener('submit',  submitProfileForm);
popupProfile.addEventListener('click',  closeByOverlay);
closePopupProfileButton.addEventListener('click', () => closePopup(popupProfile));

popupCardCloseButton.addEventListener('click', () => closePopup(popupCard));
photoEditButton.addEventListener('click', () => openPopup(popupCard));
popupCard.addEventListener('submit', submitCardForm);
popupCard.addEventListener('click', closeByOverlay);

popupPhotoCloseButton.addEventListener('click', () => closePopup(popupPhoto));
popupPhoto.addEventListener('click', closeByOverlay);
