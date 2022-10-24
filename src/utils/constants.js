
export const config = {
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
};
export const apiOptions = {
    urlProfile: "https://nomoreparties.co/v1/cohort-52/users/me",
    urlSaveProfile: "https://mesto.nomoreparties.co/v1/cohort-52/users/me",
    urlCards: "https://mesto.nomoreparties.co/v1/cohort-52/cards",
    token: 'eedc1c72-62bc-4062-b0d7-5fb34f1900fa',
}

export const profileEditButton = document.querySelector(".profile__edit");
export const formNameElement = document.querySelector(".form__input_type_name");
export const formJobNameElement = document.querySelector(".form__input_type_about");
export const nameProfile = document.querySelector(".profile__name");
export const aboutProfile = document.querySelector(".profile__about-name");
export const profileAddButton = document.querySelector(".profile__add-button");
export const popupAddPhoto = ".popup_add_photo";
export const formSendingProfile = document.querySelector('.form__sending_profile');
export const formSendingFoto = document.querySelector('.form__sending_foto_add');
export const popupEditProfile = '.popup_edit_profile';
export const selectorTemplate = '#card';
export const containerViewPhotoPhoto = document.querySelector('.container-view-photo__photo');
export const containerViewPhotoTitle = document.querySelector('.container-view-photo__title');
export const popupViewPhoto = '.popup_view_photo';


