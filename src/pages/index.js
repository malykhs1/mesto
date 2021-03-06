import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirm from '../components/PopupConfirm.js';
import UserInfo from '../components/Userinfo.js';
import Api from "../components/Api.js";
import '../pages/index.css';

import {
	enableValidation,
	popupAvatar,
	popupConfirm,
	popupProfile,
	formProfile,
	profileEditButton,
	profileAvatarButton,
	nameEdit,
	jobEdit,
	name,
	job,
	avatar,
	formCard,
	popupCard,
	photoEditButton,
	popupPhoto,
	cardPlaces,
	formAvatar,
} from '../utils/constants.js';

// функции удаления карточки, которую я вызову в коллбеке
function handleDeleteButton(card) {
	popupTypeConfirm.open();
	popupTypeConfirm.setNewHandler(() => {
		popupTypeConfirm.renderButtonText(true);
		api.deleteCardRequest(card.getCardId())
			.then(() => {
				card.deleteCard();
				popupTypeConfirm.close();
			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				popupTypeConfirm.renderButtonText(false);
			})
	});
}

//открытие попапа с картинками
function handleCardClick(title, link) {
	popupWithImage.open(title, link)
}

//функция добавления карточек
function createNewElement(data) {
	const card = new Card({
		data: data,
		cardSelector: '#card-template',
		userId: userId,
		handlers: {
			handleLikeClick: (cardId, isLiked) => {
				return api.likeCard(cardId, isLiked)
			},
			handleCardClick: handleCardClick,
			handleDeleteButton: () => handleDeleteButton(card),
		}
	})
	const cardElement = card.generateCard()
	card.likeCardClickByUser(cardElement);
	card.updateLikes(cardElement);
	return cardElement
}

//Рендеринг карточек
const cardList = new Section({
	renderer: (item) => {
		cardList.setItem(createNewElement(item));
	},
	container: cardPlaces
})

//Попап добавления карточки
const popupTypeCard = new PopupWithForm({
	popupSelector: popupCard,
	handleFormSubmit: (input) => {
		renderLoading(popupCard, true);
		api.addNewCard(input.title, input.link)
			.then((data) => {
				const cardElement = createNewElement(data);
				cardList.setItem(cardElement);
				popupTypeCard.close();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				renderLoading(popupCard, false);
			})
	}
})
popupTypeCard.setEventListeners();

//Попап редактирования профиля
const popupTypeProfile = new PopupWithForm({
	popupSelector: popupProfile,
	handleFormSubmit: (input) => {
		renderLoading(popupProfile, true);
		api.setUserInfo(input.name, input.job)
			.then((data) => {
				userInfo.setUserInfo(data);
				popupTypeProfile.close();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				renderLoading(popupProfile, false)
			})
	}
})
popupTypeProfile.setEventListeners();

//Попап смена аватара
const popupTypeAvatar = new PopupWithForm({
	popupSelector: popupAvatar, //добавить новую константу
	handleFormSubmit: (input) => {
		renderLoading(popupAvatar, true);
		api.setAvatar(input.avatar)
			.then((data) => {
				userInfo.setUserInfo(data);
				popupTypeAvatar.close();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				renderLoading(popupAvatar, false)
			})
	}
})
popupTypeAvatar.setEventListeners();

//Обновление кнопки при ожидании ответа от сервера
function renderLoading(popupSelector, isLoading) {
	const submitButton = popupSelector.querySelector('.popup__save-button');
	if (isLoading) {
		submitButton.textContent = 'Сохранение...'
	} else {
		submitButton.textContent = 'Сохранить'
	}
}

// экземпляр класса Userinfo
const userInfo = new UserInfo(name, job, avatar);

//Попап конфирм
const popupTypeConfirm = new PopupConfirm(popupConfirm)
popupTypeConfirm.setEventListeners();

//Попак клика на картинку
const popupWithImage = new PopupWithImage(popupPhoto);
popupWithImage.setEventListeners();


//листенеры
photoEditButton.addEventListener('click', function () {
	popupTypeCard.open();
	validationCardForm.resetValidation();
});

profileEditButton.addEventListener('click', function () {
	const userData = userInfo.getUserInfo();
	nameEdit.value = userData.name;
	jobEdit.value = userData.job;
	popupTypeProfile.open();
	validationProfileForm.resetValidation();
});

profileAvatarButton.addEventListener('click', function () {
	popupTypeAvatar.open();
	validationAvatarForm.resetValidation();
});

// запрос к серверу
const api = new Api({
	url: "https://mesto.nomoreparties.co/v1/cohort-26",
	headers: {
		"content-type": "application/json",
		"authorization": "b22e628d-a32e-4f98-97fa-aa25d8506b10",
	},
});

let userId
Promise.all([api.getServerCards(), api.getUserInfo()])
	.then(([initialCards, data]) => {
		userInfo.setUserInfo(data)
		userId = data._id
		cardList.renderItems(initialCards);
	})
	.catch((error) => {
		console.log(error);
	});



//валидация попапов
const validationProfileForm = new FormValidator(enableValidation, formProfile);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(enableValidation, formCard);
validationCardForm.enableValidation();

const validationAvatarForm = new FormValidator(enableValidation, formAvatar);
validationAvatarForm.enableValidation();