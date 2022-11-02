import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDeleteCard from '../components/PopupDeleteCard';
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
    popupConfirmationDelete,
    formSubmitAvatar,
    buttonAvatar,
    popupSelectorSubmitAvatar,
    avatarSelector,
}
    from "../utils/constants.js";

let userId = null;
const api = new Api(apiOptions);
const info = new UserInfo(nameProfile, aboutProfile, avatarSelector);

const section = new Section(
    (item) => createCard(item),
    config.tasksList
);

Promise.all([api.getCards(), api.getProfile()])
    .then(([cardsData, userData]) => {
        section.setItems(cardsData);
        info.setUserInfo(userData.name, userData.about);
        userId = userData._id;
        info.submitAvatar(userData);
    })
    .then(() => {
        section.renderAllElements();
    })
    .catch(err => console.log(`Ошибка: ${err}`))

const popupFormSubmitPhoto = new PopupWithForm({
    popupSelector: popupAddPhoto,
    submitForm: (inputValues) => {
        api.createNewCard(inputValues.inputPhotoName, inputValues.inputPhotoUrl)
            .then(data => {
                section.addItem(data);
            })
            .then(() => {
                popupFormSubmitPhoto.close();
            })
            .catch(err => console.log(err))
            .finally(() => {
                popupFormSubmitPhoto.renderLoading(false)
            })
    },
})
popupFormSubmitPhoto.setEventListeners();

const popupWithFormProfile = new PopupWithForm({
    popupSelector: popupEditProfile,
    submitForm:
        (inputList) => {
            api.saveProfile(inputList.inputName, inputList.inputAbout)
                .then((data) => {
                    info.setUserInfo(data.name, data.about);
                })
                .then(() => {
                    popupWithFormProfile.close();
                })
                .catch(err => console.log(err))
                .finally(() => {
                    popupWithFormProfile.renderLoading(false)
                })
        }
});
popupWithFormProfile.setEventListeners();

const popupDelete = new PopupDeleteCard({
    popupSelector: popupConfirmationDelete,
    submitForm: (id, element) => {
        api.deleteCard(id)
            .then(() => {
                element.remove();
            })
            .then(() => {
                popupDelete.close();
            })
            .catch(err => console.log(err))
            .finally(() => {
                popupDelete.renderLoading(false)
            })
    }
}
);
popupDelete.setEventListeners();


function handleCardClick(name, link) {
    popupWithImage.open(name, link);
}

function handleCardDelete(id, element) {
    popupDelete.open(id, element);
}

function markLike(id) {
    return api.markLike(id);
}

function deleteLike(id) {
    return api.deleteLike(id);
}

function createCard(data) {
    const newPhotoCard = new Card(
        selectorTemplate,
        handleCardClick,
        userId,
        handleCardDelete,
        markLike,
        deleteLike
    );
    newPhotoCard.setData(data);
    const cardElement = newPhotoCard.generateCard();
    return cardElement;
}

const popupSubmitAvatar = new PopupWithForm({
    popupSelector: popupSelectorSubmitAvatar,
    submitForm: (inputList) => {
        api.submitAvatar(inputList.avatar)
            .then((data) => {
                info.submitAvatar(data);
            })
            .then(() => {
                popupSubmitAvatar.close();
            })
            .catch(err => console.log(err))
            .finally(() => {
                popupSubmitAvatar.renderLoading(false);
            })
    }
})
popupSubmitAvatar.setEventListeners();

const popupWithImage = new PopupWithImage(popupViewPhoto);
popupWithImage.setEventListeners();

const validatorSendingFoto = new FormValidator(config, formSendingFoto);
validatorSendingFoto.enableValidation();
const validatorSendingProfile = new FormValidator(config, formSendingProfile);
validatorSendingProfile.enableValidation();
const validatorformSubmitAvatar = new FormValidator(config, formSubmitAvatar);
validatorformSubmitAvatar.enableValidation();

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

buttonAvatar.addEventListener("click", () => {
    popupSubmitAvatar.open();
    validatorformSubmitAvatar.resetValidation(config);
})



