const profileEditButton = document.querySelector('.profile__edit');
const formClose = document.querySelector('.form__close');
const editForm = document.querySelector('.popup');

function formEditOpen() {
    editForm.classList.add('popup_opened');
    formNameElement.value = nameProfile.textContent;
    formJobNameElement.value = aboutProfile.textContent;
}

profileEditButton.addEventListener('click', formEditOpen);

function formEditClose() {
    editForm.classList.remove('popup_opened');
}

formClose.addEventListener('click', formEditClose);

let formNameElement = document.querySelector('.form__input_type_name');
let formJobNameElement = document.querySelector('.form__input_type_about');
let formSubmit = document.querySelector('.form');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about-name');

function formSubmitHandler(e) {
    e.preventDefault();
    nameProfile.textContent = formNameElement.value;
    aboutProfile.textContent = formJobNameElement.value;
    formEditClose();
}

formSubmit.addEventListener('submit', formSubmitHandler);



