import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
    initialCards,
    config,
    profileEditButton,
    formNameElement,
    formJobNameElement,
    nameProfile,
    aboutProfile,
    profileAddButton,
    popupAddPhoto,
    formSendingProfile,
    formSendingFoto,
    popupEditProfile,
    selectorTemplate,
    containerViewPhotoPhoto,
    containerViewPhotoTitle,
    popupViewPhoto
} from "../utils/constants.js";

const info = new UserInfo({ nameProfile, aboutProfile });

const popupWithFormProfile = new PopupWithForm({
    popupSelector: popupEditProfile,
    submitForm:
        (inputList) => {
            info.setUserInfo(inputList.inputName, inputList.inputAbout);
        }
}
);
popupWithFormProfile.setEventListeners();

function handleCardClick(name, link) {
    containerViewPhotoTitle.textContent = name;
    containerViewPhotoPhoto.alt = name;
    containerViewPhotoPhoto.src = link;
    popupWithImage.open();
}

function createCard(item) {
    const newPhotoItem = new Card(
        item,
        selectorTemplate,
        handleCardClick,
    );
    const cardElement = newPhotoItem.generateCard();
    return cardElement;
}

const popupFormSubmitPhoto = new PopupWithForm({
    popupSelector: popupAddPhoto,
    submitForm: (inputValues) => {
        section.addItem(createCard({
            name: inputValues.inputPhotoName,
            link: inputValues.inputPhotoUrl
        }));
    },
})
popupFormSubmitPhoto.setEventListeners();

const section = new Section({
    data: initialCards,
    renderer: (item) => {
        section.addItem(createCard(item));
    }
},
    config.tasksList);
section.renderAllElements();

const popupWithImage = new PopupWithImage(popupViewPhoto);
popupWithImage.setEventListeners();

const validatorSendingFoto = new FormValidator(config, formSendingFoto);
validatorSendingFoto.enableValidation(config);
const validatorSendingProfile = new FormValidator(config, formSendingProfile);
validatorSendingProfile.enableValidation(config);

profileEditButton.addEventListener("click", () => {
    const fillInputs = info.getUserInfo();
    formNameElement.value = fillInputs.name;
    formJobNameElement.value = fillInputs.info;
    popupWithFormProfile.open();
    validatorSendingProfile.resetValidation(config);

});

profileAddButton.addEventListener("click", () => {
    popupFormSubmitPhoto.open();
    validatorSendingFoto.resetValidation(config);
});


