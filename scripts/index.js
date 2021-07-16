import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from './Userinfo.js';


import {
	enableValidation
} from '../scripts/validationList.js';

// редактирование профиля
const popupProfile = document.querySelector('.popup_type_id');
const formProfile = document.getElementById('form-edit-profile')
const profileEditButton = document.querySelector('.profile__edit-button');
const closePopupProfileButton = document.getElementById('popup-profile-close-button');
const nameEdit = document.getElementById('input-name');
const jobEdit = document.getElementById('input-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const submitButton = document.getElementById('save-card');
// добавляем картинку
const formCard = document.getElementById('form-edit-card')
const popupCard = document.querySelector('.popup_type_form')
const photoEditButton = document.querySelector('.profile__add-button')
const popupCardCloseButton = document.getElementById('popup-card-close-button');
const cardNameEdit = document.getElementById('input-photo-name');
const cardLinkEdit = document.getElementById('input-photo-link');

// кликаем по фотке
const popupPhoto = document.querySelector('.popup_type_image');
const popupPhotoClickImage = document.querySelector('.popup__image');
const popupPhotoClickTitle = document.querySelector('.popup__title_position_card');
const popupPhotoCloseButton = document.getElementById('popup-photo-close-button');

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


//рендерит карточки из массива 
const renderItems = new Section ({
	data: initialCards,
	renderer: (item) => {
		const card = new Card(item, '.card-template', handleCardClick);
		const cardElement = card.generateCard();
		renderItems.setItem(cardElement);
	}
}, cardList);
renderItems.renderItems();

//создание новой карты
function createNewElement(item) {
	const card = new Card(item, '.card-template', handleCardClick);
	const cardElement = card.generateCard();
	return cardElement;
}


//нажатие карточки добавления карты
function handleButtonAddcard() {
	validationCardForm.toggleButtonState();
	popupTypeCard.open();
}

//нажатие формы создания карточки
function handleCardCreate(item) {
	cardList.prepend(createNewElement(item));
	popupTypeCard.close();
}

//нажатие попапа редактирования профайла
function handleButtonEditPfofile() {
	popupTypeProfile.open();
	nameEdit.value = userInfo.getUserInfo().name;
	jobEdit.value = userInfo.getUserInfo().job;
}

//внесение измений в профайл
function handleButtonFormProfile(cards) {
	userInfo.setUserInfo(cards)
	popupTypeProfile.close();
}
//открытие попапа с картинками
function handleCardClick(name, link) {
	popupWithImage.open(name, link);
}

//поп-ап редактирования профиля
const popupTypeProfile = new PopupWithForm(popupProfile, handleButtonFormProfile);

// поп-ап с картиночкой
const popupWithImage = new PopupWithImage(popupPhoto);

// поп-ап добавления карточки
const popupTypeCard = new PopupWithForm(popupCard, handleCardCreate);

// экземпляр класса Userinfo
const userInfo = new UserInfo(profileName, profileJob )

//валидация попапов
const validationProfileForm = new FormValidator(enableValidation, formProfile);

const validationCardForm = new FormValidator(enableValidation, formCard);

validationProfileForm.enableValidation();
validationCardForm.enableValidation();

popupTypeCard.setEventListeners();
popupWithImage.setEventListeners();
popupTypeProfile.setEventListeners();

photoEditButton.addEventListener('click', handleButtonAddcard);
profileEditButton.addEventListener('click', handleButtonEditPfofile);