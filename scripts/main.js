let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-button');

openPopup.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    nameEdit.value = formName.textContent;
    jobEdit.value = formJob.textContent;
})

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
})



let formElement = document.querySelector('.popup__form');
let nameEdit = document.getElementById('input_name');
let jobEdit = document.getElementById('input_job');
let formName = document.querySelector('.profile__name');
let formJob = document.querySelector('.profile__job')

function formLoad () {
}
console.log(formLoad);

function formSubmitHandler (evt) {
    evt.preventDefault();
    formName.textContent = nameEdit.value; 
    formJob.textContent = jobEdit.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
