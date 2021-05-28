let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__profile-edit');
let nameEdit = document.getElementById('input_name');
let jobEdit = document.getElementById('input_job');
let formName = document.querySelector('.profile__name');
let formJob = document.querySelector('.profile__job')

function popupOpen () {
    nameEdit.value = formName.textContent;
    jobEdit.value = formJob.textContent;
    popup.classList.add('popup_opened');
}

function popupClose () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    formName.textContent = nameEdit.value; 
    formJob.textContent = jobEdit.value;
    popupClose();
    };


formElement.addEventListener('submit', formSubmitHandler);
openPopup.addEventListener('click', popupOpen);
closePopup.addEventListener('click', popupClose); 


