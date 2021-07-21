import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/Userinfo.js';
import '../pages/index.css';

import {
	enableValidation,
	popupProfile,
	formProfile,
	profileEditButton,
	nameEdit,
	jobEdit,
	profileName,
	profileJob,
	formCard,
	popupCard,
	photoEditButton,
	popupPhoto,
	cardList,
	initialCards,
} from '../utils/constants.js';


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
	renderItems.setItem(createNewElement(item));
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