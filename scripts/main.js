// редактирование профиля
const profileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const closePopupProfile = document.querySelector('.popup-profile__close-button');
const formProfile = document.querySelector('.popup-profile__profile-edit');
const nameEdit = document.getElementById('input_name');
const jobEdit = document.getElementById('input_job');
const profileFormName = document.querySelector('.profile__name');
const profileFormJob = document.querySelector('.profile__job');
// добавляем картинку
const photoEdit = document.querySelector('.profile__add-button')
const popupPhoto = document.querySelector('.popup-photo');
const closePhotoPopup = document.querySelector('.popup-photo__close-button');
const formEditCard = document.querySelector('.popup-photo__edit');
const photoNameEdit = document.getElementById('input_photo-name');
const photoLinkEdit = document.getElementById('input_photo-link');
const popupCardSave = document.querySelector('.popup-photo__save-button');
// кликаем по фотке
const popupPhotoClick = document.querySelector('.popup-photo-click');
const popupPhotoClickImage = document.querySelector('.popup-photo-click__image');
const popupPhotoClickTitle = document.querySelector('.popup-photo-click__title');
const popupPhotoButton = document.querySelector('.popup-photo-click__close-button');
//открытие и закрытие всех попапов 
function popupProfileOpen() {
	nameEdit.value = profileFormName.textContent;
	jobEdit.value = profileFormJob.textContent;
	popupProfile.classList.add('popup-profile_opened');
};

function popupProfileClose() {
	popupProfile.classList.remove('popup-profile_opened');
};

function popupPhotoOpen() {
	popupPhoto.classList.add('popup-photo_opened')
};

function popupPhotoClose() {
	popupPhoto.classList.remove('popup-photo_opened')
}

function popupPhotoClickOpen() {
	popupPhotoClick.classList.toggle('popup-photo-click_opened');
}

function popupPhotoClickClose() {
	popupPhotoClick.classList.remove('popup-photo-click_opened');
};
// отправка данных попапов
function formSubmitCard(evt) {
	evt.preventDefault();
	const cardAdd = initialCardElement({
		name: photoNameEdit.value,
		link: photoLinkEdit.value
	});
	photoNameEdit.value = '';
	photoLinkEdit.value = '';
	popupPhotoClose();
};

function formSubmitProfile(evt) {
	evt.preventDefault();
	profileFormName.textContent = nameEdit.value;
	profileFormJob.textContent = jobEdit.value;
	popupProfileClose();
};
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
//работаем с массивом
function initialCardElements() {
	initialCards.forEach(initialCardElement);
}
const cardTemplate = document.querySelector(".card-template").content;

function initialCardElement(element) {
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
	cardElement.querySelector(".card__image").src = element.link;
	cardElement.querySelector(".card__title").textContent = element.name;
	cardElementsListeners(cardElement);
	cardList.prepend(cardElement);
};

function cardLike(evt) {
	evt.target.classList.toggle('card__like_active');
}

function cardDelete(evt) {
	evt.target.closest('.card').remove();
}

function surfacingPopupPhotoClick(evt) {
	popupPhotoClickImage.src = evt.target.closest('.card__image').src;
	popupPhotoClickTitle.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
}
initialCardElements();
// слушатели
function cardElementsListeners(element) {
	element.querySelector('.card__delete-button').addEventListener('click', cardDelete);
	element.querySelector('.card__image').addEventListener('click', popupPhotoClickOpen);
	element.querySelector('.card__image').addEventListener('click', surfacingPopupPhotoClick);
	element.querySelector('.card__like').addEventListener('click', cardLike);
}
photoEdit.addEventListener('click', popupPhotoOpen);
closePhotoPopup.addEventListener('click', popupPhotoClose);
formProfile.addEventListener('submit', formSubmitProfile);
profileEdit.addEventListener('click', popupProfileOpen);
closePopupProfile.addEventListener('click', popupProfileClose);
popupPhotoButton.addEventListener('click', popupPhotoClickClose);
formEditCard.addEventListener('submit', formSubmitCard);