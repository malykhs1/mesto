let profileEdit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__profile-edit');
let nameEdit = document.getElementById('input_name');
let jobEdit = document.getElementById('input_job');
let formName = document.querySelector('.profile__name');
let formJob = document.querySelector('.profile__job');

let photoEdit = document.querySelector('.profile__add-button') // кнопка открытия попапа редактирования картинки
let popupPhoto = document.querySelector('.popup-photo'); //попак для редактирования картинки
let closePhotoPopup = document.querySelector('.popup-photo__close-button'); // кнопка закрытия попапа
let formCardElement = document.querySelector('popup__photo-edit'); // форма редактирования, в которой лежат два попапа
let photoNameEdit = document.getElementById('input_photo-name'); // инпут, в котором хранится название картинки
let photoLinkEdit = document.getElementById('input_photo-link'); // инпут, в котором хранится ссылка на новую картинку
let cardName = document.querySelector('card__title');
let cardLink = document.querySelector('card__image');

function popupPhotoOpen () {
    popupPhoto.classList.add('popup-photo_opened') //открываем попап добавлением нового класса
};

function popupPhotoClose () {
    popupPhoto.classList.remove('popup-photo_opened') //теперь закрываем

}

function popupProfileOpen () {
    nameEdit.value = formName.textContent; // связываем данные из инпута попапа и html при открытии попапа
    jobEdit.value = formJob.textContent; // все тоже самое
    popup.classList.add('popup_opened'); // открываем попап
};

function popupProfileClose () {
    popup.classList.remove('popup_opened'); // закрываем попап
};


function formSubmitProfile (evt) { //делаем так, чтобы данные из попапа передавались в html
    evt.preventDefault(); // прерываем стандартное поведение функции
    formName.textContent = nameEdit.value; // предоставим доступ к тексту интупу, чтобы он мог его перезаписать
    formJob.textContent = jobEdit.value; // аналогичная функция
    popupProfileClose(); // закроем попап при выполнении функции
    };

const cardList = document.querySelector('.elements'); // элемент, в который нужно будет встроить наш template
const initialCards = [ //здесь у нас хранится весь наш массив, который рендерится при загрузке страницы
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://mir-tourista.ru/wp-content/uploads/2019/12/resortimagehandler.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://photocentra.ru/images/main45/456443_main.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://etcomp.ru/templates/g5_helium/images/baikal/3r.jpg'
    }
  ];

  function initialCardElements() { // перебор массива выше
    initialCards.forEach(initialCardElement); // мы говорим, что нам нужну перебрать массив initialCard и дать  initialCardElement
}
function initialCardElement(element) {
      const cardTemplate = document.querySelector(".card-template").content.cloneNode(true);   //определяем наш шаблон        
      cardTemplate.querySelector(".card__image").src = element.link; //находим в шаблоне картинку и добавляем в него элемент из нашего массима
      cardTemplate.querySelector(".card__title").textContent = element.name; //находим в шаблоне текст и добавляем в него элемент из нашего массива
      cardTemplate.querySelector(".card__like").addEventListener ('click', function(evt) { // находим сердечко в шаблоне и вешаем на него слушатель с функцией
        evt.target.classList.toggle('card__like_active'); // функция, которая реагирует на нажатие и переключает сердчеко
        });
      cardDeleteListeners(cardTemplate);
      cardList.append(cardTemplate); //все данные из константы cardTemplate добавляем сразу после elements
  };

  function cardDelete (evt) {
    evt.target.closest('.card').remove(); //удаляем самую ближайшую карточку 
  }

  function cardDeleteListeners(element) { // функция, которая удалит карточку при клике
    element.querySelector('.card__delete-button').addEventListener('click' , cardDelete); //при клике на кнопочку выполнится функция, которая удалит карту. 
  }

  initialCardElements();

  
photoEdit.addEventListener('click', popupPhotoOpen);
closePhotoPopup.addEventListener('click', popupPhotoClose);
formElement.addEventListener('submit', formSubmitProfile);
profileEdit.addEventListener('click', popupProfileOpen);
closePopup.addEventListener('click', popupProfileClose); 
