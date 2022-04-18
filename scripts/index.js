const profileEditButton = document.querySelector('.profile__edit');
const formClose = document.querySelector('.form__close');
const editForm = document.querySelector('.popup');

function formEditToggle() {
    
    editForm.classList.toggle('popup_opened');
    formNameElement.value = nameProfile.textContent;
    formJobNameElement.value = aboutProfile.textContent;
}

profileEditButton.addEventListener('click', formEditToggle);
formClose.addEventListener('click', formEditToggle);




let formNameElement = document.querySelector('.form__input_type_name');

let formJobNameElement = document.querySelector('.form__input_type_about');

let formSubmit = document.querySelector('.form');
console.log(formSubmit);

let nameProfile = document.querySelector('.profile__name');

let aboutProfile = document.querySelector('.profile__about-name');


function formSubmitHandler() {
    nameProfile.textContent = formNameElement.value;
    aboutProfile.textContent = formJobNameElement.value;
    editForm.classList.toggle('popup_opened');
}

formSubmit.addEventListener('submit', formSubmitHandler);



