import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api';



import {
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
    popupViewPhoto,
    apiOptions,
} from "../utils/constants.js";

const api = new Api(apiOptions);

let section;

api.getCards()
    .then((data) => {
        const initialCards = data;
        section = new Section({
            data: initialCards,
            renderer: (item) => { section.addItem(createCard(item)) }
        },
            config.tasksList, api);
        section.renderAllElements();
    })

let popupFormSubmitPhoto;

popupFormSubmitPhoto = new PopupWithForm({
    popupSelector: popupAddPhoto,
    submitForm: (inputValues) => {
        section.addItem(createCard({
            name: inputValues.inputPhotoName,
            link: inputValues.inputPhotoUrl
        }));
    },
})

popupFormSubmitPhoto.setEventListeners();

const info = new UserInfo(nameProfile, aboutProfile);

api.getProfile()
    .then((data) => {
        info.setUserInfo(data.name, data.about)
    })




const popupWithFormProfile = new PopupWithForm({
    popupSelector: popupEditProfile,
    submitForm:
        (inputList) => {
            info.setUserInfo(inputList.inputName, inputList.inputAbout);
        }
});

popupWithFormProfile.setEventListeners();

function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}

function createCard(item) {
    const newPhotoItem = new Card(
        item,
        selectorTemplate,
        handleCardClick,
        api
    );
    const cardElement = newPhotoItem.generateCard();
    return cardElement;
}



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





