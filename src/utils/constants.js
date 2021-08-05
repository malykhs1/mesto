export const enableValidation = {
    formElement: '.popup__form', 
    inputElement: '.popup__input', 
    submitButton: '.popup__save-button',
    submitButtonUnactive: 'popup__save-button-unvalid', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active', 
}

// редактирование профиля
export const popupProfile = document.querySelector('.popup_type_id');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const formProfile = document.getElementById('form-edit-profile')
export const formAvatar = document.getElementById('form-edit-avatar');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAvatarButton = document.querySelector('.profile__avatar-button');
export const nameEdit = document.getElementById('name');
export const jobEdit = document.getElementById('job');
export const name = document.querySelector('.profile__name');
export const job = document.querySelector('.profile__job');
export const avatar = document.querySelector('.profile__avatar');

export const userSelectors = {
	userNameSelector: '.profile__name',
	userDescriptionSelector: '.profile__job'
}

// добавляем картинку
export const formCard = document.getElementById('form-edit-card')
export const popupCard = document.querySelector('.popup_type_form')
export const photoEditButton = document.querySelector('.profile__add-button')


// кликаем по фотке
export const popupPhoto = document.querySelector('.popup_type_image');
export const popupConfirm = document.querySelector('.popup_type_confirm');
export const cardImage = document.querySelector('.card__image');
export const cardLike = document.querySelector('.card__like');

// определяем массив
export const cardPlaces = document.querySelector('.elements');
