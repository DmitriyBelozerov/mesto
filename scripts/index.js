// В файле index.js должно остаться только создание классов и добавление некоторых обработчиков
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
// import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

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
const popupEditProfile = document.querySelector('.popup_edit_profile');



const popupWithForm = new PopupWithForm({
    popupSelector: popupEditProfile,
    submitForm: (inputValues) => {
        nameProfile.textContent = inputValues.inputName;
        aboutProfile.textContent = inputValues.inputAbout;
    }
}
);

const popupFormSubmitPhoto = new PopupWithForm({
    popupSelector: popupAddPhoto,
    submitForm: (inputValues) => {
        const newPhotoItem = new Card({
            name: inputValues.inputPhotoName,
            link: inputValues.inputPhotoUrl,
        }, handleCardClick
        );
        const newCard = newPhotoItem.generateCard();
        section.addItem(newCard);
    },

}
)

const section = new Section({
    data: initialCards,
    renderer: (initialCards) => {
        const card = new Card(initialCards, handleCardClick);
        const cardElement = card.generateCard();
        section.addItem(cardElement);
    }
},
    config.tasksList);

const handleCardClick = (popupSelector, element) => {
    const popupWithImage = new PopupWithImage(popupSelector, element);
    popupWithImage.open();
}

section.renderAllElements();

const validatorSendingFoto = new FormValidator(config, formSendingFoto);
validatorSendingFoto.enableValidation(config);
const validatorSendingProfile = new FormValidator(config, formSendingProfile);
validatorSendingProfile.enableValidation(config);

profileEditButton.addEventListener("click", () => { popupWithForm.open(); validatorSendingProfile.resetValidation() });
profileAddButton.addEventListener("click", () => { popupFormSubmitPhoto.open(); validatorSendingFoto.resetValidation() });
// formCloseAddPhoto.addEventListener("click", () => closePopup(popupAddPhoto));















// document.addEventListener("mousedown", (event) => {
//     const popup = event.target.classList.contains('popup');
//     const popupView = document.querySelector('.popup_opened');
//     if (popup) {
//         closePopup(popupView);
//     }
// });
