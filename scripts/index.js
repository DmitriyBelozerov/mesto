import { Cards } from "./Card.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit");
const formCloseProfile = document.querySelector(".form__close_profile");
const formEdit = document.querySelector(".popup_edit_profile");
const cardTemplate = document.querySelector("#card").content.querySelector(".card");
const popupViewPhoto = document.querySelector('.popup_view_photo');
const containerViewPhotoPhoto = document.querySelector(".container-view-photo__photo");
const containerViewPhotoTitle = document.querySelector(".container-view-photo__title");
const formNameElement = document.querySelector(".form__input_type_name");
const formJobNameElement = document.querySelector(".form__input_type_about");
const formSubmitProfile = document.querySelector(".form_edit_profile");
const nameProfile = document.querySelector(".profile__name");
const aboutProfile = document.querySelector(".profile__about-name");
const formInputAddNamePhoto = document.querySelector(".form__input_add_photo");
const formInputAddUrl = document.querySelector(".form__input_add_url");
const formSubmitAddPhoto = document.querySelector(".form__sending_foto_add");
const profileAddButton = document.querySelector(".profile__add-button");
const formCloseAddPhoto = document.querySelector(".form__close_add-photo");
const popupAddPhoto = document.querySelector(".popup_add_photo");
const cardListContainer = document.querySelector(".cards");
const containerViewPhotoButtonClose = document.querySelector('.container-view-photo__button-close');
const formSubmitFoto = formSubmitAddPhoto.querySelector('.form__submit');
const keyNmbrEsc = 27;




const config = {
  tasksList: '.cards',
  taskListItemText: '.card__title',
  taskListItemUrl: '.card__photo',
  taskListItemDelete: '.card__delete',
  taskListItemLikeButtom: '.card__like',
  templateItem: '#card',


}

const log = document.querySelector(config.templateItem);


const listContainer = document.querySelector(config.tasksList);

initialCards.forEach(item => {
  const task = new Cards(config, item.name, item.link);
  task.render(listContainer);
})


































function editOpenForm() {
  openPopup(formEdit);
  formNameElement.value = nameProfile.textContent;
  formJobNameElement.value = aboutProfile.textContent;
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', handleEscClose);
};

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown',  handleEscClose);
  };

function submitProfileForm(event) {
  event.preventDefault();
  nameProfile.textContent = formNameElement.value;
  aboutProfile.textContent = formJobNameElement.value;
  closePopup(formEdit);
};


const submitAddFotoCard = (event) => {
  event.preventDefault();
  renderCard({
    name: formInputAddNamePhoto.value,
    link: formInputAddUrl.value,
  });
  event.target.reset();
  closePopup(popupAddPhoto);
  formSubmitFoto.setAttribute('disabled', true);
  formSubmitFoto.classList.add('form__submit_type_disabled');
};







function  handleEscClose(evt) {
  const popupView = document.querySelector('.popup_opened');
  if (evt.keyCode === keyNmbrEsc) {
    closePopup(popupView);
  };
}

formSubmitAddPhoto.addEventListener("submit", submitAddFotoCard);
profileEditButton.addEventListener("click", editOpenForm);
formSubmitProfile.addEventListener("submit", submitProfileForm);
profileAddButton.addEventListener("click",() => openPopup(popupAddPhoto));
containerViewPhotoButtonClose.addEventListener("click", () => closePopup(popupViewPhoto));
formCloseAddPhoto.addEventListener("click", () => closePopup(popupAddPhoto));
formCloseProfile.addEventListener("click", () => closePopup (formEdit));

document.addEventListener("mousedown", (event) => {
  const popup = event.target.classList.contains('popup');
  const popupView = document.querySelector('.popup_opened');
  if (popup) {
    closePopup(popupView);
  }
});

