// В файле index.js должно остаться только создание классов и добавление некоторых обработчиков
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";

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
const cardsList = document.querySelector('.cards');
const formSendingProfile = document.querySelector('.form__sending_profile');
const formSendingFoto = document.querySelector('.form__sending_foto_add');

function editOpenForm() {
    const popup = new Popup(formEdit);
    popup.open();
    
    formNameElement.value = nameProfile.textContent;
    formJobNameElement.value = aboutProfile.textContent;
};

function submitProfileForm(event) {
    event.preventDefault();
    nameProfile.textContent = formNameElement.value;
    aboutProfile.textContent = formJobNameElement.value;
    closePopup(formEdit);
};

const section = new Section({
    data: initialCards,
    renderer: (initialCards) => {
        const card = new Card(initialCards);
        const cardElement = card.generateCard();
        section.addItem(cardElement);
    }
},
    config.tasksList);

const submitAddFotoCard = (event) => {
    event.preventDefault();
    const newPhotoItem = new Card({
        name: formInputAddNamePhoto.value,
        link: formInputAddUrl.value,
    }
    );
    const newCard = newPhotoItem.generateCard();
    section.addItem(newCard);
    closePopup(popupAddPhoto);
};

section.renderAllElements();

const validatorSendingFoto = new FormValidator(config, formSendingFoto);
validatorSendingFoto.enableValidation(config);
const validatorSendingProfile = new FormValidator(config, formSendingProfile);
validatorSendingProfile.enableValidation(config);

formSubmitAddPhoto.addEventListener("submit", submitAddFotoCard);
profileEditButton.addEventListener("click", () => { editOpenForm(); validatorSendingProfile.resetValidation() });
formSubmitProfile.addEventListener("submit", submitProfileForm);
profileAddButton.addEventListener("click", () => { openPopup(popupAddPhoto); validatorSendingFoto.resetValidation() });
containerViewPhotoButtonClose.addEventListener("click", () => closePopup(popupViewPhoto));
formCloseAddPhoto.addEventListener("click", () => closePopup(popupAddPhoto));
// formCloseProfile.addEventListener("click", () => closePopup(formEdit));

// document.addEventListener("mousedown", (event) => {
//     const popup = event.target.classList.contains('popup');
//     const popupView = document.querySelector('.popup_opened');
//     if (popup) {
//         closePopup(popupView);
//     }
// });
