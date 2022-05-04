const profileEditButton = document.querySelector('.profile__edit');
const formClose = document.querySelector('.form__close_profile');
const editForm = document.querySelector('.popup_edit_profile');

function formEditOpen() {
  editForm.classList.add('popup_opened');
  formNameElement.value = nameProfile.textContent;
  formJobNameElement.value = aboutProfile.textContent;
}

profileEditButton.addEventListener('click', formEditOpen);

function formEditClose() {
  editForm.classList.remove('popup_opened');
}

formClose.addEventListener('click', formEditClose);

let formNameElement = document.querySelector('.form__input_type_name');
let formJobNameElement = document.querySelector('.form__input_type_about');
let formSubmit = document.querySelector('.form_edit_profile');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about-name');

function formSubmitHandler(e) {
  e.preventDefault();
  nameProfile.textContent = formNameElement.value;
  aboutProfile.textContent = formJobNameElement.value;
  formEditClose();
}

formSubmit.addEventListener('submit', formSubmitHandler);
//////////// 1 часть 



//////закрытие-открытие формы добавления фото
const profileAddButton = document.querySelector('.profile__add-button');
const addformClose = document.querySelector('.form__close_add-photo');
const addForm = document.querySelector('.popup_add_photo');

function formAddOpen() {
  addForm.classList.add('popup_opened');
}

profileAddButton.addEventListener('click', formAddOpen);

function formAddPhotoClose() {
  addForm.classList.remove('popup_opened');
}
addformClose.addEventListener('click', formAddPhotoClose);







let initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
///////////////// добавление фото из массива
const cardListContainer = document.querySelector('.cards');

const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

const renderCard = (cardData) => {
  cardListContainer.insertAdjacentHTML(
    "beforeend",
    `
    <li class="card">
    <img alt="фото" class="card__photo" srs=${cardData.link}>
    <h2 class="card__title">${cardData.name}</h2>
    <button class="card__like" type="button" aria-label="like"></button>
    <button class="card__delete" type="button" aria-label="delete"></button>
</li>
  `
  );
};


initialCards.forEach((cardData) => {
  renderCard(cardData);
});


/*for (let i = 0; i < initialCards.length; i++) {
  function addCard(cardElement) {
    cardElement.querySelector('.card__photo').src = initialCards[i].link;
    cardElement.querySelector('.card__title').textContent = initialCards[i].name;
        cardListContainer.prepend(cardElement);
    
  };
}*/

////////////////добавление элемента в массив. 
const formInputAddPhoto = document.querySelector('.form__input_add_photo');
const formInputAddUrl = document.querySelector('.form__input_add_url');

const formSubmitAddPhoto = document.querySelector('.form_add_photo');

let newPhotoCard = {
  name: '',
  link: ''
};

function addPhotoCard(e) {
  e.preventDefault();
  newPhotoCard.name = formInputAddPhoto.value;
  newPhotoCard.link = formInputAddUrl.value;
  initialCards.unshift(newPhotoCard);
  formAddPhotoClose();

};


formSubmitAddPhoto.addEventListener('submit', addPhotoCard);





///////////card like

const likeCard = document.querySelector('.card__like');

function likeCardActive() {
  likeCard.classList.toggle('card__like_active');
}

/*likeCard.addEventListener('click', likeCardActive);*/


//////удаление карточки

/*const deleteButton = document.querySelector('.card__delete');

deleteButton.addEventListener('click', function () {
  const cardItem = deleteButton.closest('.card');
  cardItem.remove();
}); */
