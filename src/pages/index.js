import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api';



import {
    config, profileEditButton, formNameElement,
    formJobNameElement, nameProfile, aboutProfile, profileAddButton,
    popupAddPhoto, formSendingProfile, formSendingFoto, popupEditProfile,
    selectorTemplate,
    popupViewPhoto,
    apiOptions,
} from "../utils/constants.js";

const api = new Api(apiOptions);

const section = new Section(
    { renderer: (item) => { section.addItem(createCard(item)) } },
    config.tasksList
);

api.getCards()
    .then((data) => {
        section.setItems(data)
        section.renderAllElements();
    })




let popupFormSubmitPhoto;

popupFormSubmitPhoto = new PopupWithForm({
    popupSelector: popupAddPhoto,
    submitForm: (inputValues) => {
        api.createNewCard(inputValues.inputPhotoName, inputValues.inputPhotoUrl)
            .then(data => {
                section.addItem(
                    createCard(data)
                )
            })
    },
})

popupFormSubmitPhoto.setEventListeners();

const info = new UserInfo(nameProfile, aboutProfile);
let yyy;
api.getProfile()
    .then((userData) => {
        info.setUserInfo(userData.name, userData.about);
         return yyy = info.getUserInfo();
        // console.log(yyy);
    })


    console.log(yyy);



const popupWithFormProfile = new PopupWithForm({
    popupSelector: popupEditProfile,
    submitForm:
        (inputList) => {
            api.saveProfile(inputList.inputName, inputList.inputAbout)
                .then((data) => {
                    info.setUserInfo(data.name, data.about);
                })
        }
});




popupWithFormProfile.setEventListeners();

function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}



function createCard(data) {
    const newPhotoItem = new Card(
        data,
        selectorTemplate,
        handleCardClick,
        // getUser
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





