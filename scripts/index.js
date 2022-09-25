import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Новосибирск",
        link: "https://sdelanounas.ru/i/a/w/1/f_aW1nLmdlbGlvcGhvdG8uY29tL25zazIwMTgvODBfbnNrMjAxOC5qcGc_X19pZD0xMTQwMzU=.jpeg",
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

const config = {
    tasksList: '.cards',
    taskListItemText: '.card__title',
    taskListItemUrl: '.card__photo',
    taskListItemDelete: '.card__delete',
    taskListItemLikeButtom: '.card__like',
    templateItem: '#card',
    formInput: '.form__input',
    formErrorMessageHiden: 'form__error-message_hiden',
    formSubmit: '.form__submit',
    form: '.form',
    formSubmitDisabled: 'form__submit_type_disabled',
    formInputTypeError: 'form__input_type_error',

}

const profileEditButton = document.querySelector(".profile__edit");
const formCloseProfile = document.querySelector(".form__close_profile");
const formEdit = document.querySelector(".popup_edit_profile");
const popupViewPhoto = document.querySelector('.popup_view_photo');
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
const containerViewPhotoButtonClose = document.querySelector('.container-view-photo__button-close');
const formSubmitFoto = formSubmitAddPhoto.querySelector('.form__submit');
const keyNmbrEsc = 27;
const formSendingProfile = document.querySelector('.form__sending_profile');
const formSendingFoto = document.querySelector('.form__sending_foto_add');

function editOpenForm() {
    openPopup(formEdit);
    formNameElement.value = nameProfile.textContent;
    formJobNameElement.value = aboutProfile.textContent;
};

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', handleEscClose);
};

const openPopup = popup => {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', handleEscClose);
};

function submitProfileForm(event) {
    event.preventDefault();
    nameProfile.textContent = formNameElement.value;
    aboutProfile.textContent = formJobNameElement.value;
    closePopup(formEdit);
};

function insertCard(element) {
    document.querySelector('.cards').prepend(element);
};

initialCards.forEach(item => {
    const card = new Card(item, openPopup);
    const cardElement = card.generateCard();
    insertCard(cardElement);
});

const submitAddFotoCard = (event) => {
    event.preventDefault();
    const card = new Card({
        name: formInputAddNamePhoto.value,
        link: formInputAddUrl.value,
    }, openPopup);
    const cardElement = card.generateCard();
    insertCard(cardElement);
    formSubmitAddPhoto.reset();
    closePopup(popupAddPhoto);
    formSubmitFoto.setAttribute('disabled', true);
    formSubmitFoto.classList.add('form__submit_type_disabled');
};

function handleEscClose(evt) {
    const popupView = document.querySelector('.popup_opened');
    if (evt.keyCode === keyNmbrEsc) {
        closePopup(popupView);
    };
}

const validatorSendingFoto = new FormValidator(config, formSendingFoto);
validatorSendingFoto.enableValidation(config);
const validatorSendingProfile = new FormValidator(config, formSendingProfile);
validatorSendingProfile.enableValidation(config);

formSubmitAddPhoto.addEventListener("submit", submitAddFotoCard);
profileEditButton.addEventListener("click", editOpenForm);
formSubmitProfile.addEventListener("submit", submitProfileForm);
profileAddButton.addEventListener("click", () => openPopup(popupAddPhoto));
containerViewPhotoButtonClose.addEventListener("click", () => closePopup(popupViewPhoto));
formCloseAddPhoto.addEventListener("click", () => closePopup(popupAddPhoto));
formCloseProfile.addEventListener("click", () => closePopup(formEdit));

document.addEventListener("mousedown", (event) => {
    const popup = event.target.classList.contains('popup');
    const popupView = document.querySelector('.popup_opened');
    if (popup) {
        closePopup(popupView);
    }
});
