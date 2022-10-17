export const initialCards = [
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


