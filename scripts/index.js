const profileEditButton = document.querySelector(".profile__edit");
const formClose = document.querySelector(".form__close_profile");
const editForm = document.querySelector(".popup_edit_profile");

function formEditOpen() {
  editForm.classList.add("popup_opened");
  formNameElement.value = nameProfile.textContent;
  formJobNameElement.value = aboutProfile.textContent;
}

profileEditButton.addEventListener("click", formEditOpen);

function formEditClose() {
  editForm.classList.remove("popup_opened");
}

formClose.addEventListener("click", formEditClose);

let formNameElement = document.querySelector(".form__input_type_name");
let formJobNameElement = document.querySelector(".form__input_type_about");
let formSubmit = document.querySelector(".form_edit_profile");
let nameProfile = document.querySelector(".profile__name");
let aboutProfile = document.querySelector(".profile__about-name");

function formSubmitHandler(e) {
  e.preventDefault();
  nameProfile.textContent = formNameElement.value;
  aboutProfile.textContent = formJobNameElement.value;
  formEditClose();
}

formSubmit.addEventListener("submit", formSubmitHandler);
//////////// 1 часть

//                        массив
let initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const formInputAddNamePhoto = document.querySelector(".form__input_add_photo");
const formInputAddUrl = document.querySelector(".form__input_add_url");
const formSubmitAddPhoto = document.querySelector(".form__sending_foto_add");
const profileAddButton = document.querySelector(".profile__add-button");
const addformClose = document.querySelector(".form__close_add-photo");
const addForm = document.querySelector(".popup_add_photo");
const cardListContainer = document.querySelector(".cards");

//////обработчики событий
profileAddButton.addEventListener("click", function formAddOpen() {
  addForm.classList.add("popup_opened");
});

addformClose.addEventListener("click", formAddPhotoClose);

const handleDeleteCard = (event) => {
  event.target.closest(".card").remove();
};

const handleLikeCard = (event) => {
  event.target.closest(".card__like").classList.toggle("card__like_active");
};



const submitAddFotoCard = (event) => {
  event.preventDefault();
  renderCard({
    name: formInputAddNamePhoto.value,
    link: formInputAddUrl.value,
  });
  formAddPhotoClose();
};

///////////////// добавление фото из массива
const cardTemplate = document.querySelector("#card").content.querySelector(".card");


const popupViewPhoto = document.querySelector('.popup_view_photo');

const containerViewPhotoPhoto = document.querySelector(".container-view-photo__photo");
const containerViewPhotoTitle = document.querySelector(".container-view-photo__title");
/// генерация карточки
const generateCardList = (cardData) => {
  const newTemplatePhotoCard = cardTemplate.cloneNode(true);
  const titleNewCard = newTemplatePhotoCard.querySelector(".card__title");
  titleNewCard.textContent = cardData.name;
  const cardPhoto = newTemplatePhotoCard.querySelector(".card__photo");
  cardPhoto.src = cardData.link;


  cardPhoto.addEventListener("click", function (event) {
    let eventPhoto = event.target;
    containerViewPhotoPhoto.src = cardPhoto.src;
    containerViewPhotoTitle.textContent = cardPhoto.nextElementSibling.textContent;
    popupViewPhoto.classList.add ('popup_opened');
  });

  const containerViewPhotoButtonClose = document.querySelector('.container-view-photo__button-close');

  containerViewPhotoButtonClose.addEventListener("click", function handleCloseViewCard (event) {
    popupViewPhoto.classList.remove("popup_opened");
  });

  const deleteButton = newTemplatePhotoCard.querySelector(".card__delete");
  deleteButton.addEventListener("click", handleDeleteCard);

  const likeButton = newTemplatePhotoCard.querySelector(".card__like");
  likeButton.addEventListener("click", handleLikeCard);

  return newTemplatePhotoCard;
};

//
const renderCard = (cardData) => {
  cardListContainer.prepend(generateCardList(cardData));
};

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

function formAddPhotoClose() {
  addForm.classList.remove("popup_opened");
}

formSubmitAddPhoto.addEventListener("submit", submitAddFotoCard);
