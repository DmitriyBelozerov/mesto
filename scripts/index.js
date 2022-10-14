import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

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
const formNameElement = document.querySelector(".form__input_type_name");
const formJobNameElement = document.querySelector(".form__input_type_about");
const nameProfile = document.querySelector(".profile__name");
const aboutProfile = document.querySelector(".profile__about-name");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAddPhoto = document.querySelector(".popup_add_photo");
const formSendingProfile = document.querySelector('.form__sending_profile');
const formSendingFoto = document.querySelector('.form__sending_foto_add');
const popupEditProfile = document.querySelector('.popup_edit_profile');


const popupWithFormProfile = new PopupWithForm({
    popupSelector: popupEditProfile,
    submitForm:
        (inputList) => {
            const info = new UserInfo({ nameProfile, aboutProfile });
            info.setUserInfo(inputList.inputName, inputList.inputAbout);
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
})

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
    popupWithImage.setEventListeners();
}

section.renderAllElements();

const validatorSendingFoto = new FormValidator(config, formSendingFoto);
validatorSendingFoto.enableValidation(config);
const validatorSendingProfile = new FormValidator(config, formSendingProfile);
validatorSendingProfile.enableValidation(config);

profileEditButton.addEventListener("click", () => {
    validatorSendingProfile.resetValidation();
    const userInfo = new UserInfo({ nameProfile, aboutProfile });
    const fillInputs = userInfo.getUserInfo();
    formNameElement.value = fillInputs.name;
    formJobNameElement.value = fillInputs.info;
    popupWithFormProfile.setEventListeners();
    popupWithFormProfile.open();
});

profileAddButton.addEventListener("click", () => {
    popupFormSubmitPhoto.open();
    popupFormSubmitPhoto.setEventListeners();
    validatorSendingFoto.resetValidation();
});

