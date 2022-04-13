const editForm = document.querySelector('.popup');
const formClose = editForm.querySelector('.form__close');

const profileEditButton = document.querySelector('.profile__edit');

function formEditToggle() {
    editForm.classList.toggle('popup_opened');
}

profileEditButton.addEventListener('click', formEditToggle);
formClose.addEventListener('click', formEditToggle);


let formNameElement = document.querySelector('.form__input-name');
let formJobNameElement = document.querySelector('.form__input-about');
let formSubmit = document.querySelector('.form__submit');

let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about-name');

function formSubmitHandler() {
    nameProfile.textContent = formNameElement.value;
    aboutProfile.textContent = formJobNameElement.value;
}

formSubmit.addEventListener('click', formSubmitHandler);
formSubmit.addEventListener('click', formEditToggle);

